import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Buttons/ButtonSeeAndInstall';
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/ButtonInstallSee',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    link: {control: 'text'},
    backgroundColor: {control: 'color'}
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const InstallApp: Story = {
  args: {
    text: 'Instalar',
    color: '#ffffff',
    backgroundColor: '#5a8933',
    link: 'https://mais.sbt.com.br/'
  },
};

export const SeeMore: Story = {
  args: {
    text: 'Ver mais',
    color: '#ffffff',
    backgroundColor: '#000000',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};

