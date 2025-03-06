import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@aurodesignsystem/auro-button';
import '@aurodesignsystem/auro-icon';

export default {
  title: 'Components/auro-button',
  component: 'auro-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The `auro-button` component is a versatile button element used for actions like submitting forms, initiating tasks, or navigating to the next step in a process. It supports various attributes to customize its appearance and behavior.',
      },
    },
  },
  args: {
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Defines the visual style of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    slot: {
      control: { type: 'text' },
      description: 'Content inside the button.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button when true.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }

    },
    onDark: {
      control: { type: 'boolean' },
      description: 'Set value for on-dark version of auro-button.',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'If set to true, the button will have a rounded shape.',
    },
    slim: {
      control: { type: 'boolean' },
      description: 'Set value for slim version of auro-button.',
    },
    title: {
      control: { type: 'text' },
      description: 'Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element.',
    },
    type: {
      control: { type: 'text' },
      description: 'The type of the button. Possible values are: `submit`, `reset`, `button`.',
    },
    value: {
      control: { type: 'text' },
      description: 'Defines the value associated with the button which is submitted with the form data.',
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Attribute alters the shape of the button to be full width of its parent container.',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Alters the content to the shimmering dots to alert the user that the button/form is in an active state.',
    },
    'aria-labelledby': {
      control: { type: 'text' },
      description: 'Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion.',
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead.',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Applies icon-only styling when true.',
    },
  },
};

const Template = ({
  variant,
  disabled,
  'aria-label': ariaLabel,
  'aria-labelledby': arialabelledby,
  onDark,
  slim,
  title,
  type,
  value,
  fluid,
  loading,
  slot,
  rounded,
  category,
  name,
  id,
  iconOnly,
  }) => html`
<auro-button
  id="${ifDefined(id ? id : undefined)}"
  arialabelledby="${ifDefined(arialabelledby ? arialabelledby : undefined)}"
  variant="${ifDefined(variant ? variant : undefined)}"
  ?onDark="${ifDefined(onDark ? onDark : undefined)}"
  ?iconOnly="${ifDefined(iconOnly ? iconOnly : undefined)}"
  ?slim="${ifDefined(slim ? slim : undefined)}"
  title="${ifDefined(title ? title : undefined)}"
  type="${ifDefined(type ? type : undefined)}"
  value="${ifDefined(value ? value : undefined)}"
  ?fluid="${ifDefined(fluid ? fluid : undefined)}"
  ?rounded="${ifDefined(rounded ? rounded : undefined)}"
  ?loading="${loading}"
  ?disabled="${disabled}"
  aria-label="${ifDefined(ariaLabel ? ariaLabel : undefined)}"
>
  ${slot}
  ${category && name ? html`<auro-icon customColor category="${category}" name="${name}" slot="icon"></auro-icon>`:''}
</auro-button>
`;

export const Default = Template.bind({});
Default.args = {
  slot: 'Hello World',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  slot: 'activate WiFi',
  category: 'in-flight',
  name: 'wifi',
  'aria-label': 'activate wifi',
};
ButtonWithIcon.parameters = {
  docs: {
    description: {
      story: 'Displays a button with an accompanying WiFi icon. The `aria-label` ensures accessibility for screen readers.',
    },
  },
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  category: 'in-flight',
  name: 'wifi',
  'aria-label': 'activate wifi',
};
IconOnly.parameters = {
  docs: {
    description: {
      story: "Use the `iconOnly` attribute with the `auro-button` element for a style specific to having only an `auro-icon` as the button's content.",
    },
  },
};
