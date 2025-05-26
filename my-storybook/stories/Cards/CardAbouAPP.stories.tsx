import { Meta, StoryObj } from '@storybook/react';
import { CardAboutAPP } from '../../components/Cards/CardAboutApp'; 


const meta: Meta<typeof CardAboutAPP> = {
    title: 'Components/Cards/AboutApp',
    component: CardAboutAPP,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        image: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardAboutAPP>
export const CardAboutApp: Story = {
    args: {
        categorie: 'Aplicativo',
        title: '+SBT',
        image: 'https://play-lh.googleusercontent.com/_onC7ezY_pGDRgGYewaM8GodJx5fFo8eYBbQDo7i-znmwM8xCJMH-kPpDhnRk6kc9Q',
        description: 'O +SBT é o streaming gratuito com conteúdo sob demanda, canais ao vivo e o SBT em tempo real! Assista novelas, desenhos, programas series, filmes, documentários, produções originais e muito +.'
    }
}
