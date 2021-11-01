<script>
  export let sides = 6;

  let value = '🎲';
  let isRollin = false;
  let diceEl = null;

  $: digits = Math.floor(Math.log10(sides) + 1);

  const getRandomNumber = ({ max = 1, zeroBased = false }) => {
    const offset = zeroBased ? 0 : 1;
    return Math.floor(Math.random() * max) + offset;
  };

  function handleRoll() {
    if (isRollin) return;

    const nextValue = getRandomNumber({ max: sides });

    const afterRoll = () => {
      value = nextValue.toString();
      isRollin = false;
    };

    diceEl.addEventListener('transitionend', afterRoll, {
      once: true,
      capture: true,
    });
    // start
    isRollin = true;
  }
</script>

<input
  type="number"
  min="1"
  name="sides"
  bind:value={sides}
  style="--digits: {digits}ch"
/>
sides

<button
  class="SimpleDiceRoller"
  class:_and-rollin={isRollin}
  bind:this={diceEl}
  on:click={handleRoll}
>
  <span class="label">{value}</span>
</button>

<style>
  input {
    --digits: 3ch;
    width: calc(4ch + var(--digits));
  }

  .SimpleDiceRoller {
    height: 100px;
    width: 100px;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: 80px;
    background: white;
    color: black;
  }

  .SimpleDiceRoller._and-rollin {
    transform: rotate(360deg);
    transition: transform 777ms;
  }
</style>
