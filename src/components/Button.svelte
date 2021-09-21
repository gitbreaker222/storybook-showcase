<script>
  import { createEventDispatcher } from 'svelte';

  export let primary = false;

  export let backgroundColor = '';

  export let size = 'medium';
</script>

<button
  class="storybook-button"
  class:__primary={primary}
  class:__secondary={!primary}
  class:__small={size === 'small'}
  class:__medium={size === 'medium'}
  class:__large={size === 'large'}
  class:__custom-bg={!!backgroundColor}
  style="--custom-bg: {backgroundColor};"
  on:click
  {...$$restProps}>
  <slot></slot>
</button>

<style>
  .storybook-button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .storybook-button.__primary {
    color: white;
    background-color: #1ea7fd;
  }
  .storybook-button.__secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .storybook-button.__small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .storybook-button.__medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .storybook-button.__large {
    font-size: 16px;
    padding: 12px 24px;
  }
  .storybook-button.__custom-bg {
    background-color: var(--custom-bg);
  }
  .storybook-button:disabled {
    opacity: .5;
  }
</style>