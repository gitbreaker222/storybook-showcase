<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { routes as r } from '/src/pages/routes';
  import Component from './Component.svelte';
</script>

<Meta
  title={`${r.EXAMPLE}/Component`}
  component={Component}
  argTypes={{
    isModified: { control: 'boolean' },
  }}
  args={{
    isModified: false,
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>
  <Component />
  <Component isModified disabled />
  <div><code>Interactive Demo</code></div>
  <Component {...args} />
</Story>

<!-- Individual stories -->

<Template let:args>
  <Component {...args} />
</Template>

<Story name="Normal" />

<Story
  name="Modified"
  args={{
    isModified: true,
  }}
/>
