<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const sizes = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  };
</script>

<Meta
  title="Example/Button"
  component={Button}
  argTypes={{
    slotContent: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: [sizes.SMALL, sizes.MEDIUM, sizes.LARGE],
      },
    },
    click: { action: 'click' },
  }}
  args={{
    slotContent: 'Button',
    primary: false,
  }}
/>

<Story name="Overview" let:args>
  <div><code>Overview</code></div>
  <Button />
  <Button primary>Primary</Button>
  <Button secondary>Secondary</Button>
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
  <Button disabled>Disabled</Button>
  <div><code>Interactive Demo</code></div>
  <Button {...args} on:click={args.click}>
    {args.slotContent}
  </Button>
</Story>

<Template let:args>
  <Button {...args} on:click={args.click}>
    {args.slotContent}
  </Button>
</Template>

<Story name="Primary">
  <Button primary>Button</Button>
</Story>

<Story name="Secondary">
  <Button>Button</Button>
  <Button primary={false}>Button</Button>
</Story>

<Story
  name="Large"
  args={{
    size: sizes.LARGE,
  }}
/>

<Story
  name="Small"
  args={{
    size: sizes.SMALL,
  }}
/>
