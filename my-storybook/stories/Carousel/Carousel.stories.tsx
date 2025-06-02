import { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '../../components/Carousel';
const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
   
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const CarouselImages: Story = {
  args: {
   images: ['https://upload.wikimedia.org/wikipedia/pt/1/16/Acavernaencantada.jpg','https://imagem.natelinha.uol.com.br/original/programa-silvio-santos-com-patricia-abravanel-no-sbt_5537.jpeg', 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/patricia-abravanel-e1719775018697.jpg?w=768']
  },
};

