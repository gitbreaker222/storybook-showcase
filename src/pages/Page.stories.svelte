<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import {routes as r} from '/src/pages/routes';
  import Page from "./Page.svelte";
</script>

<Meta
  title={`${r.EXAMPLE}/Page`}
  component={Page}
  argTypes={{
    onLogin: { action: "onLogin" },
    onLogout: { action: "onLogout" },
    onCreateAccount: { action: "onCreateAccount" },
  }}
/>

<Template let:args>
  <Page
    {...args}
    on:login={args.onLogin}
    on:logout={args.onLogout}
    on:createAccount={args.onCreateAccount}
  />
</Template>

<Story
  name="LoggedIn"
  args={{
    user: {},
  }}
/>

<Story name="LoggedOut" args={{}} />
