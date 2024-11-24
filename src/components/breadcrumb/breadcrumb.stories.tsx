import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./breadcrumb";
import { BreadcrumbsProps } from "./breadcrumb.type";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Molecule/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    separator: {
      control: "text",
      description: "Defines the separator between breadcrumb items.",
    },
  },
  args: {
    variant: "medium",
    separator: "/",
    datas: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Gallery", path: "/gallery" },
      { title: "Contact", path: "/contact" },
    ],
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {
  args: {
    variant: "medium",
    separator: "/",
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    separator: "›",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    separator: "→",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    separator: "•",
  },
};
