import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { ModalProps } from './modal.type';

const meta: Meta<typeof Modal> = {
  title: 'Molecule/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['Rounded', 'Simple'] },
      description: 'Defines the style of the modal. "Rounded" has rounded corners, while "Simple" has straight edges.',
      table: {
        defaultValue: { summary: 'Rounded' },
      },
    },
    size: {
      control: { type: 'select', options: ['Small', 'Medium', 'Large'] },
      description: 'Defines the size of the modal. "Small" is compact, "Medium" is standard, and "Large" is expansive.',
      table: {
        defaultValue: { summary: 'Small' },
      },
    },
    content: {
      control: 'text',
      description: 'Content to be displayed inside the modal.',
    },
    onClose: { action: 'close' },
  },
};

export default meta;

const Template: StoryObj<ModalProps> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
      setIsOpen(false);
      args.onClose();
    };

    return (
      <div>
        <Modal {...args} isOpen={isOpen} onClose={closeModal} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
      </div>
    );
  },
};

export const Default: StoryObj<ModalProps> = {
  ...Template,
  args: {
    content: 'This is a medium rounded modal with more content.',
    type: 'Rounded',
    size: 'Medium',
  },
};

export const RoundedSmall: StoryObj<ModalProps> = {
  ...Template,
  args: {
    content: 'This is a small rounded modal.',
    type: 'Rounded',
    size: 'Small',
  },
};

export const SimpleMedium: StoryObj<ModalProps> = {
  ...Template,
  args: {
    content: 'This is a medium-sized simple modal.',
    type: 'Simple',
    size: 'Medium',
  },
};

export const RoundedLarge: StoryObj<ModalProps> = {
  ...Template,
  args: {
    content: 'This is a large rounded modal with more content.',
    type: 'Rounded',
    size: 'Large',
  },
};