<script lang="ts">
	import { SVG } from '@svgdotjs/svg.js';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';

	import type { Datemarker, Location, LocationData, SunTimes } from '$lib/types';

	dayjs.extend(relativeTime);

	export let location: Location;
	export let sunTimes: SunTimes;
	const width = 600;
	const height = 600 * (12 / 31);
	const diameter = 600 / 31;
	const dateFormat = 'YYYY-MM-DD';
	let datemarker: Datemarker;
	let circleplots = [];
	let locationData: LocationData;
	let today: dayjs.Dayjs;
	let todaySunTimes: SunTimes;
	function interpolateColor(color1: number[], color2: number[], factor: number = 0.5) {
		let result = color1.slice();
		for (let i = 0; i < 3; i++) {
			result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
			result[i] = result[i] < 0 ? (result[i] = 0) : result[i];
		}
		return 'rgb(' + result.join(',') + ')';
	}

	$: {
		loadSunlight(location);
	}

	async function loadSunlight(location: Location) {
		console.log('Loading...');
		if (!location) {
			return;
		}
		const url = `https://sunrise.fifthcontinent.io/api/v1/${location.latitude}/${location.longitude}?fromDate=2021-01-01&toDate=2021-12-31`;
		const res = await fetch(url);
		locationData = await res.json();
		drawSunlight(locationData);
	}
	const equalDate = (d1: dayjs.Dayjs, d2: dayjs.Dayjs) =>
		d1.month() == d2.month() && d1.date() == d2.date() && d1.year() == d2.year();
	function drawSunlight(data: LocationData) {
		let startColor:number[];
		for (const day of data.days) {
			// parse our values
			const sunrise = dayjs(day.times.sunrise.substring(0, 19)); // I don't want the timezones
			const sunset = dayjs(day.times.sunset.substring(0, 19));
			const daylight = sunset.diff(sunrise, 'minute');
			let daylightpercent = daylight / (24 * 60);
			
			if (equalDate(sunrise, today)) {
				todaySunTimes = { sunrise, sunset };
				startColor = [255,156,0];
			}else {
				startColor = [204, 204, 204];
			}
			const weightedColour = interpolateColor(
				startColor,
				[0, 0, 0],
				daylightpercent * 2 - 0.5
			);
			SVG(`circle#day${sunrise.format(dateFormat)}`)
				.animate(2000)
				.attr({
					r: Math.round(diameter * daylightpercent) / 2,
					fill: weightedColour
				});
		}
		sunTimes = todaySunTimes;
	}
	function emptySuns() {
		today = dayjs();
		let startDate = dayjs(new Date(today.year(), 0, 1));
		const toDate = dayjs(new Date(today.year() + 1, 0, 1));

		while (startDate.isBefore(toDate, 'day')) {
			circleplots.push({
				date: `day${startDate.format(dateFormat)}`,
				iso: startDate.format(),
				x: startDate.date() * diameter - diameter / 2,
				y: (startDate.month() + 1) * diameter - diameter / 2,

				width: Math.round(diameter) / 10,
				colour: '#333333'
			});

			startDate = startDate.add(1, 'days');
		}

		datemarker = {
			width: diameter,
			x: today.date() * diameter - diameter / 2,
			y: (today.month() + 1) * diameter - diameter / 2
		};
	}
	function getSunTimes(details) {
		const sunrise = dayjs(details.times.sunrise.substring(0, 19)); // I don't want the timezones
		const sunset = dayjs(details.times.sunset.substring(0, 19));
		return { sunrise, sunset };
	}
	function showDetails(circleId: string) {
		if (!locationData) {
			return;
		}
		SVG(`circle#${circleId}-rollover`).attr({
			'stroke-opacity': 1
		});
		// day12-30
		const date = circleId.substring(3);

		let details = locationData.days.filter((d) => d.date == date)[0];
		sunTimes = getSunTimes(details);
	}
	function exitDetails(day: number) {
		if (!locationData) {
			return;
		}
		SVG(`circle#${day}-rollover`).animate(500).attr({
			'stroke-opacity': 0
		});
	}
	const restoreDefault = () => {
		sunTimes = todaySunTimes;
	};
	emptySuns();
</script>

{#if circleplots.length}
	<svg viewBox="0 0 {width} {height}">
		<g
			><rect
				{width}
				{height}
				fill="rgba(255,255,255,0)"
				on:mouseout={() => {
					restoreDefault();
				}}
				on:blur={() => {
					restoreDefault();
				}}
			/></g
		>
		{#each circleplots as circle}
			<g id={circle.date}>
				<circle
					cx={circle.x}
					cy={circle.y}
					r={circle.width / 2}
					fill={circle.colour}
					id={circle.date}
				/>
				<circle
					cx={circle.x}
					cy={circle.y}
					r={diameter / 2 - 1}
					fill-opacity="0"
					stroke-opacity="0"
					clip-path="circle()"
					stroke="rgb(102,102,102)"
					id={`${circle.date}-rollover`}
					on:mouseover={() => {
						showDetails(circle.date);
					}}
					on:focus={() => {
						showDetails(circle.date);
					}}
					on:mouseout={() => {
						exitDetails(circle.date);
					}}
					on:blur={() => {
						exitDetails(circle.date);
					}}
				/>
			</g>
		{/each}
		<g id="datemarker">
			<circle
				cx={datemarker.x}
				cy={datemarker.y}
				r={datemarker.width / 2 - 1}
				fill-opacity="0"
				clip-path="circle()"
				stroke="rgb(102,102,102)"
			/>
		</g>
	</svg>
{/if}

<style>
	svg circle:hover {
		cursor: pointer;
	}
	p {
		font-family: 'Lato', sans-serif;
		font-size: 1em;
	}
</style>
