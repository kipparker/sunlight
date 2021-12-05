<script context="module">
	export async function preload() {
		const res = await this.fetch(`/countries`);
		const data = await res.json();
		const countries = [...data, data.length + 1];
		return { countries };
	}
</script>

<script type="ts">
	import "../app.css";
	import Nav from '$lib/nav//Nav.svelte';
	import Sunmap from '$lib/sunmap/Sunmap.svelte';
	import type { Location, SunTimes } from '$lib/types';
	let sunTimes:SunTimes;
	let location: Location;
	// const onLocationChange = (evtLocation: Location) => (location = evtLocation);
</script>
<svelte:head>
	<title>Sunlight</title>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,300&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<Nav bind:location={location} {sunTimes}/>
<main>
	<Sunmap {location} bind:sunTimes={sunTimes}/>
</main>

<style>
	main {
		position: relative;
		background-color: white;
		padding:0;
		margin: 5em 1em 1em 1em;
		box-sizing: border-box;
	}
</style>
