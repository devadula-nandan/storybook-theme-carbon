import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { expect, fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole("button");
    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    if (args.onClick) {
      expect(args.onClick).toHaveBeenCalled();
    }
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    onClick: fn(),
  },
  tags: ["autodocs"],
  parameters: {
    myAddonParameter: `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

/**
 * DUMMY CONTROLS
 * A story showcasing every Storybook control type available.
 */
export const DummyControls = {
  name: "Dummy Controls",
  argTypes: {
    label: {
      control: "text",
      description: "A simple text input control",
      table: { category: "Dummy Controls" },
    },
    booleanControl: {
      control: "boolean",
      description: "A boolean toggle control",
      table: { category: "Dummy Controls" },
    },
    numberControl: {
      control: "number",
      description: "A number input control",
      table: { category: "Dummy Controls" },
    },
    rangeControl: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      description: "A slider (range) control",
      table: { category: "Dummy Controls" },
    },
    colorControl: {
      control: "color",
      description: "Color picker control",
      table: { category: "Dummy Controls" },
    },
    selectControl: {
      control: { type: "select" },
      options: ["Option A", "Option B", "Option C"],
      description: "Select dropdown control",
      table: { category: "Dummy Controls" },
    },
    radioControl: {
      control: { type: "radio" },
      options: ["Radio 1", "Radio 2", "Radio 3"],
      description: "Radio button group",
      table: { category: "Dummy Controls" },
    },
    inlineRadioControl: {
      control: { type: "inline-radio" },
      options: ["Inline 1", "Inline 2"],
      description: "Inline radio button group",
      table: { category: "Dummy Controls" },
    },
    checkControl: {
      control: { type: "check" },
      options: ["Check A", "Check B", "Check C"],
      description: "Multi-select checkbox group",
      table: { category: "Dummy Controls" },
    },
    inlineCheckControl: {
      control: { type: "inline-check" },
      options: ["Inline A", "Inline B"],
      description: "Inline checkbox group",
      table: { category: "Dummy Controls" },
    },
    dateControl: {
      control: "date",
      description: "Date picker control",
      table: { category: "Dummy Controls" },
    },
    fileControl: {
      control: "file",
      description: "File upload control (string[] expected)",
      table: { category: "Dummy Controls" },
    },
  },
  args: {
    label: "Sample Text",
    booleanControl: true,
    numberControl: 42,
    rangeControl: 50,
    colorControl: "#00ff00",
    selectControl: "Option B",
    radioControl: "Radio 2",
    inlineRadioControl: "Inline 2",
    checkControl: ["Check A", "Check C"],
    inlineCheckControl: ["Inline A"],
    dateControl: new Date(),
    fileControl: [],
  },
};
