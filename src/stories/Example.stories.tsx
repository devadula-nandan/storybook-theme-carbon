import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { colorCustomProperties } from "./story-helper";

interface ColorTokenArgs {
  colorToken: string;
}

interface DummyControlsArgs {
  booleanControl: boolean;
  numberControl: number;
  rangeControl: number;
  colorControl: string;
  textControl: string;
  selectControl: string;
  radioControl: string;
  inlineRadioControl: string;
  checkControl: string[];
  inlineCheckControl: string[];
  dateControl: Date;
  fileControl: string[];
}

const meta: Meta = {
  title: "Example/Demo",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

/**
 * COLOR TOKEN
 * A simple div showing the background color of Carbon Design System color tokens
 */
export const ColorToken: StoryObj<ColorTokenArgs> = {
  argTypes: {
    colorToken: {
      control: { type: "select" },
      options: colorCustomProperties,
      description: "Select a Carbon Design System color token",
      table: { category: "Color Tokens" },
    },
  },
  args: {
    colorToken: "--cds-layer-01",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Check that the selected color token is rendered in the paragraph
    const tokenText = await canvas.findByText(args.colorToken);
    await expect(tokenText).toBeInTheDocument();
  },
  render: (args) => {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "50vh",
          height: "50vh",
          backgroundColor: `var(${args.colorToken})`,
          // border: "1px solid var(--cds-background-inverse",
        }}
      >
        <p
          style={{
            background: "var(--cds-background-inverse)",
            color: "var(--cds-background)",
            fontFamily: "IBM Plex Sans",
            fontSize: "14px",
            // display: "inline-block",
            paddingInline: "0.4rem",
            margin: "0",
          }}
        >
          {args.colorToken}
        </p>
      </div>
    );
  },
};

/**
 * DUMMY CONTROLS
 * A story showcasing every Storybook control type available.
 */
export const DummyControls: StoryObj<DummyControlsArgs> = {
  argTypes: {
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
    textControl: {
      control: "text",
      description: "Text input control",
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
    booleanControl: true,
    numberControl: 42,
    rangeControl: 50,
    colorControl: "#00ff00",
    textControl: "Sample text",
    selectControl: "Option B",
    radioControl: "Radio 2",
    inlineRadioControl: "Inline 2",
    checkControl: ["Check A", "Check C"],
    inlineCheckControl: ["Inline A"],
    dateControl: new Date(),
    fileControl: [],
  },
  render: (args) => {
    return (
      <pre
        style={{
          color: "var(--cds-text-primary)",
        }}
      >
        {JSON.stringify(args, null, 2)}
      </pre>
    );
  },
};

// Made with Bob
