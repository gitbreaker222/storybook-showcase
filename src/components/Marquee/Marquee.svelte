<script>
  import { onMount } from 'svelte';

  let canvasElement;

  export let speed = 60; //px per s
  let rail;

  onMount(() => {
    const offsetStart = rail.parentNode.clientWidth;
    const offsetEnd = rail.scrollWidth;
    const duration2 = (offsetStart + offsetEnd) / speed;
    rail.style.setProperty('--offsetStart', `${offsetStart}px`);
    rail.style.setProperty('--offsetEnd', `${-offsetEnd}px`);
    rail.style.setProperty('--durationThrough', `${duration2}s`);
  });
</script>

<div class="rail" bind:this={rail}>
  <div class="train regular"><slot /></div>
</div>

<style>
  .rail {
    height: 3em;
    width: 25ch;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    box-shadow: 0 0 2px gray inset;
    position: relative;
  }

  .rail .train.regular {
    --offsetStart: 0;
    --offsetEnd: -100%;
    --durationThrough: 10s;
    animation: run-through linear infinite;
    animation-duration: var(--durationThrough);
  }

  @keyframes run-through {
    0% {
      transform: translateX(var(--offsetStart));
    }
    100% {
      transform: translateX(var(--offsetEnd));
    }
  }
</style>
