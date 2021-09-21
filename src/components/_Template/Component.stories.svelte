<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Component from "./Component.svelte";
</script>

<Meta
  title="Example/Component"
  component={Component}
  argTypes={{
    isModified: {control: "boolean"},
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>
  <Component></Component>
  <Component isModified disabled></Component>
  <div><code>Interactive Demo</code></div>
  <Component {...args}></Component>
</Story>

<!-- Individual stories -->

<Template let:args>
  <Component {...args} />
</Template>

<Story name="Normal" />

<Story name="Modified" args={{
  isModified: true,
}}/>