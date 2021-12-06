<script lang="ts">
    import type {Location, SunTimes} from '$lib/types'
    import dayjs from "dayjs";
    import LocationIcon from "./LocationIcon.svelte";
    import duration from 'dayjs/plugin/duration.js';

	  dayjs.extend(duration);

    // export let onLocationChange;
    export let location:Location;
    export let sunTimes:SunTimes;
    let locationName:string;
    function getShortLocationNameFromData(data): string {
      const placeData = data.results[0].components;
      const placeNamePriority = ['town', 'city', 'village'];
      for(const name of placeNamePriority){
        if(placeData[name]){
          return placeData[name]
        }
      }
      return placeData.formatted.split(',')[0]; // fallback
    }
    async function setLocation(latitude:number, longitude:number) {
      location = {
        latitude: latitude,
        longitude: longitude,
      };
      const res = await fetch(`/api/v1/reverse?latitude=${latitude}&longitude=${longitude}`);
      const data = await res.json()
      locationName = getShortLocationNameFromData(data);
    }
    function getLocation() {
      const success = (position:GeolocationPosition) => {
        console.log(position)
        setLocation(position.coords.latitude, position.coords.longitude);
      };
      const error = (err) => {
        console.error("Error", err)
        setLocation(50.952340, 0.907290);
      };
      navigator.geolocation.getCurrentPosition(success, error);
    }
    const sunInfo = (displayTimes:SunTimes) => (
      `${displayTimes.sunrise.format('YYYY-MM-DD')} ${displayTimes.sunrise.format("H:mm")}–${displayTimes.sunset.format("H:mm")}`
    )
    const sunDuration = (displayTimes:SunTimes) => (
       dayjs.duration(displayTimes.sunset.diff(displayTimes.sunrise)).format('H[h]m[m]')
    )
  </script>
  
  <nav>
    <h1>Sunlight Circles</h1>
    <div class="buttonHolder"> <button on:click={getLocation}><LocationIcon size="28"/></button> </div>
    {#if locationName}
    <h2>{locationName} {#if sunTimes}{sunInfo(sunTimes)} (<strong>{sunDuration(sunTimes)})</strong>{/if}</h2>
    {/if}
    
    
  </nav>
  
  <style>

    nav {
      border-bottom: 1px solid rgba(0, 0, 0, 1);
      font-weight: 300;
      padding: 0 1em;
      height: 4em;
      z-index:2;
      background-color: #ffffff;
      display: flex;
      /* justify-content: space-between; */
      position:fixed;
      top:0;
      width:100%
    }
    h1, h2 {
      font-family: "Lato", sans-serif;
    }
    h2{
      padding: 0;
      margin: 1.8em 1.5em;
    }
    h1{
      font-size:2em;
      margin:0.4em 0.3em 0.4em 0.4em;
    }

    h2{
      font-size: 1em;
      font-weight:normal;
    }
    button {
        border: none;
        border-radius: 5px;
        color: #ffffff;
        padding:0.6em 0em;
        font-size: 16px;
        cursor: pointer;
        font-size:2em;
        margin: 0;
        background-color:transparent ;
      }

  </style>
  