<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Marquee from './Marquee.svelte';
</script>

<Meta
  title="Example/Marquee"
  component={Marquee}
  argTypes={{
    slot: { control: 'text' },
    speed: { control: 'number' },
  }}
  args={{
    slot: 'Marquee',
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>
  <Marquee />
  <Marquee>short text</Marquee>
  <Marquee
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum atque
    explicabo ea fuga vitae placeat blanditiis incidunt eius consequuntur.
    Accusamus nisi omnis earum, iure non esse soluta et ex ipsam.</Marquee
  >
  <div><code>Interactive Demo</code></div>
  <Marquee {...args}>{args.slot}</Marquee>
</Story>

<!-- Individual stories -->

<Template let:args>
  <Marquee {...args} />
</Template>

<Story name="Normal" />

<Story
  name="Modified"
  args={{
    speed: 100,
  }}
/>
