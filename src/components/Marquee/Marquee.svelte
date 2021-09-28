<script>
  import { onMount } from 'svelte';
  
  export let speed = 60; //px per s
  let train;

  onMount(() => {
    const offsetStart = train.parentNode.clientWidth;
    const offsetEnd = train.scrollWidth;
    const duration = (offsetStart + offsetEnd) / speed;
    train.style.setProperty('--offsetStart', `${offsetStart}px`);
    train.style.setProperty('--offsetEnd', `${-offsetEnd}px`);
    train.style.setProperty('--durationThrough', `${duration}s`);
  });
</script>

<div class="rail">
  <div class="train regular" bind:this={train}><slot /></div>
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
