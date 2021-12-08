<script type="ts">
  export let size = "1em";
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let getLocation:VoidFunction;
  let width = size;
  let height = size;
  let hasClicked = false;
  const getLocationAndStopPulsing = (()=>{
    getLocation();
    hasClicked = true;
  })
</script>
<button on:click={getLocationAndStopPulsing}>
  <svg xmlns="http://www.w3.org/2000/svg"  class:pulse={!hasClicked} {height} {viewBox} {width} {color}
  ><path d="M0 0h24v24H0z" fill="none" /><path
    d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
  /></svg
>
</button>
<style>
button {
  border: none;
  border-radius: 5px;
  color: #ffffff;
  padding:0.575em 0em;
  font-size: 16px;
  cursor: pointer;
  font-size:2em;
  margin: 0;
  background-color:transparent ;
}

svg.pulse{
  animation: pulse-animation 2s infinite;
}
@keyframes pulse-animation {
  0% {
    fill:rgb(0,0,0);
  }
  50% {
    fill:rgb(255,156,0);
  }
  100% {
    fill:rgb(0,0,0);
  }
}

button:hover svg{
  animation:none!important;
    fill:rgb(255,156,0);
  }


</style>

