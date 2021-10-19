<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { routes as r} from "/src/pages/routes";
  import UiLayer from "./UiLayers.svelte";
</script>

<Meta
  title={`${r.EXAMPLE}/UiLayer`}
  component={UiLayer}
  argTypes={{
    is3D: {control: "boolean"},
  }}
  args={{
    is3D: false
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>

  <div class="layout">
    <UiLayer {...args}></UiLayer>
    
    <UiLayer is3D></UiLayer>
  </div>
</Story>

<style>
  .layout {
    display: flex;
    justify-content: space-around;
    padding-top: 5rem;
  }
</style>