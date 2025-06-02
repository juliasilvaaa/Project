import { Meta, StoryObj } from '@storybook/react';
import { ButtonLive } from '../../components/Buttons/ButtonLive';
const meta: Meta<typeof ButtonLive> = {
  title: 'Components/Buttons/ButtonLive',
  component: ButtonLive,
  argTypes: {
    title: { control: 'text' },
    color: { control: 'color' },
    liveOn: {control: 'boolean'},
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large']
    }
  },
};

export default meta;

type Story = StoryObj<typeof ButtonLive>;

export const LiveOff: Story = {
  args: {
    title: 'AO VIVO',
    color: '#ffffff',
    liveOn: false,
    size: "medium"
  },
};

export const LiveOn: Story = {
  args: {
    title: 'AO VIVO',
    color: '#ffffff',
    liveOn: true,
    size: 'large'
    
    
  },
};

