<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { routes as r } from '/src/pages/routes';
  import SimpleDiceRoller from './SimpleDiceRoller.svelte';
</script>

<Meta
  title={`${r.EXAMPLE}/SimpleDiceRoller`}
  component={SimpleDiceRoller}
  argTypes={{
    sides: { control: 'number' },
  }}
  args={{
    sides: 3,
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>
  <SimpleDiceRoller />
  <hr />
  <SimpleDiceRoller sides="12" />
  <hr />
  <div><code>Interactive</code></div>
  <SimpleDiceRoller {...args} />
</Story>
