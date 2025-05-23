import { Meta, StoryObj } from '@storybook/react';
import { ButtonInscription } from '../../components/Buttons/ButtonInscription';
const meta: Meta<typeof ButtonInscription> = {
  title: 'Components/Buttons',
  component: ButtonInscription,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium']
    }
  },
};

export default meta;

type Story = StoryObj<typeof ButtonInscription>;

export const ButtonInscriptions: Story = {
  args: {
    text: "Participar",
    color: '#ffffff',
    backgroundColor: '#FF8C12',
    size: 'small'
  },
};

