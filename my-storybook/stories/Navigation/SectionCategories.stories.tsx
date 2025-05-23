import { Meta, StoryObj } from '@storybook/react';
import { SectionCategories } from '../../components/Navigation/SectionCategories';

const meta: Meta<typeof SectionCategories> = {
  title: 'Components/Navigation',
  component: SectionCategories,
  argTypes: {
    title: { control: 'text' },
    link: {control: 'text'},
    backgroundColor: {control: 'color'}
  },
};

export default meta;

type Story = StoryObj<typeof SectionCategories>;

export const InfoSbt: Story = {
  args: {
    title: 'SBT',
    backgroundColor: '#56258F',
    link: 'https://mais.sbt.com.br/'
  },
};

export const Programs: Story = {
  args: {
    title: 'Programas',
    backgroundColor: '#3E4282',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};

export const Artists: Story = {
  args: {
    title: 'Artistas',
    backgroundColor: '#5BBEBD',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};

export const Noticies: Story = {
  args: {
    title: 'Notícias',
    backgroundColor: '#7DC56C',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};
export const Novels: Story = {
  args: {
    title: 'Novelas',
    backgroundColor: '#D6DF45',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};
export const Cartoons: Story = {
  args: {
    title: 'Desenhos',
    backgroundColor: '#EFAA4C',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};

export const TeleSena: Story = {
  args: {
    title: 'TeleSena',
    backgroundColor: '#E24636',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};

export const Jequiti: Story = {
  args: {
    title: 'Jequiti',
    backgroundColor: '#A7264A',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};

export const AppSbt: Story = {
  args: {
    title: 'Desenhos',
    backgroundColor: '#88226E',
    link: 'https://storybook.js.org/docs/get-started/install'
  },
};


