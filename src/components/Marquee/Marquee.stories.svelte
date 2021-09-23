<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Marquee from './Marquee.svelte';
</script>

<Meta
  title="Example/Marquee"
  {Marquee}
  argTypes={{
    isModified: { control: 'boolean' },
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>
  <Marquee />
  <Marquee>short text</Marquee>
  <Marquee>a lalalalala long, a lalalalala long, long long long</Marquee>
  <div><code>Interactive Demo</code></div>
  <Marquee {...args} />
</Story>

<!-- Individual stories -->

<Template let:args>
  <Marquee {...args} />
</Template>

<Story name="Normal" />

<Story
  name="Modified"
  args={{
    isModified: true,
  }}
/>
