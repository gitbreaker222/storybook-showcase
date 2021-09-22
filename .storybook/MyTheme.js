import { create } from '@storybook/theming';
import Logo from './logo kopfhörer.jpg'

export default create({
    // Color
    base: 'dark',
    colorPrimary: 'yellow',
    colorSecondary: 'hotpink',

    // UI
    // Text colors
    textColor: 'snow',
    textInverseColor: '#222',
    appBg: 'rebeccapurple',
    appContentBg: 'white',
    appBorderColor: 'silver',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Toolbar default and active colors
    barBg: 'rebeccapurple',
    barTextColor: 'snow',
    barSelectedColor: 'snow',

    // Form colors
    inputBg: 'snow',
    inputTextColor: 'black',
    inputBorder: 'silver',
    inputBorderRadius: 4,

    // Branding
    brandTitle: 'My storybook showcase',
    brandUrl: 'https://www.rubenlabiunda.de',
    brandImage: Logo,
})