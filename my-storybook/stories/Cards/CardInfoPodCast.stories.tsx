import { Meta, StoryObj } from '@storybook/react';
import { CardInfoPodCast } from '../../components/Cards/CardInfoPodCast'; 


const meta: Meta<typeof CardInfoPodCast> = {
    title: 'Components/Cards/PodCast',
    component: CardInfoPodCast,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        image: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardInfoPodCast>

export const CardInfoPodCasts: Story = {
    args: {
        categorie: 'PodCast',
        title: 'BITS PODCAST',
        image: 'https://i.scdn.co/image/ab6765630000ba8a98312bfca1fef97c384d3705',
        description: 'Bits Podcast é um programa de entrevistas descontraído do SBT Games, que promete muita resenha sobre o universo dos games, esportes e cultura pop. O podcast é comandado por Colosimus e Cabeção. A cada programa, a dupla traz um convidado especial conhecido do cenário para bater um papo sobre um tema específico.'
    }
}
