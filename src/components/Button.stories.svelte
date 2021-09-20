<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";

  const sizes = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  }
</script>

<Meta
  title="Example/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: [sizes.SMALL, sizes.MEDIUM, sizes.LARGE] },
    },
    onClick: { action: "sick licks" },
  }}
/>

<!-- Meta.argTypes => args -->

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story
  name="Primary"
  args={{
    primary: true,
    label: "Button",
  }}
/>

<Story
  name="Secondary"
  args={{
    label: "Button",
  }}
/>
<Story
  name="Large"
  args={{
    size: sizes.LARGE,
    label: "Button",
  }}
/>

<Story
  name="Small"
  args={{
    size: sizes.SMALL,
    label: "Button",
  }}
/>
