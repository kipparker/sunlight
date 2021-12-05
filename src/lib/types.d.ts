import type dayjs from "dayjs";

/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Datemarker {
	width: number;
	x: number;
	y: number;
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface SunriseSunsetData{
	sunrise:string;
	sunset:string;
}

export interface SunTimeData {
	date: string;
	times: SunriseSunsetData;
}
export interface LocationData {
	days: SunTimeData[];
	latitude: number;
	longitude: number;
	timezone: string;
}

export interface SunTimes {
	sunrise: dayjs.Dayjs;
	sunset: dayjs.Dayjs;
}
