import { Meta, StoryObj } from '@storybook/react';
import { Inscriptions } from '../../components/Inscriptions';

const meta: Meta<typeof Inscriptions> = {
  title: 'Components/Inscriptions',
  component: Inscriptions,
  argTypes: {
    title: { control: 'text' },
    image: { control: 'text' },
    description: { control: 'text' },
    qntd: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Inscriptions>;

export const InscriptionsProgram: Story = {
  args: {
    title: 'Silvio Santos',
    image: 'https://static.sbt.com.br/programas/logos/vertical/9.jpg',
    description: 'Participe do programa mais tradicional da televisão brasileira!',
    qntd: 10,
  },
};
