import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./toast";
import { ToastProps } from "./toast.type";

const meta: Meta<typeof Toast> = {
  title: "Molecule/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "danger", "information", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    type: {
      control: "select",
      options: ["information", "notification", "maw", "maww"],
    },
    icon: {
      control: "text",
      description: "Custom icon for the toast, overrides the default icon.",
    },
  },
  args: {
    message: "This is a toast message!",
    variant: "information",
    size: "medium",
    type: "information",
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    message: "This is a default toast message!",
  },
};

export const Success: Story = {
  args: {
    message: "Success! Operation completed.",
    variant: "success",
    size: "small",
    type: "notification",
    icon: "✅"
  },
};

export const Danger: Story = {
  args: {
    message: "Error! Something went wrong.",
    variant: "warning",
    type: "notification",
    icon: "⚠️"
  },
};

export const Warning: Story = {
  args: {
    message: "Warning! Please be cautious.",
    variant: "danger",
    size: "large",
    icon: "❌"
  },
};
