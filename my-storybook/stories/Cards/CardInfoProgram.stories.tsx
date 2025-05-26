import { Meta, StoryObj } from '@storybook/react';
import { CardInfoProgram } from '../../components/Cards/CardInfoProgram'; 


const meta: Meta<typeof CardInfoProgram> = {
    title: 'Components/Cards/Program',
    component: CardInfoProgram,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        image: { control: 'text' },
        about: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardInfoProgram>

export const CardInfoPrograms: Story = {
    args: {
        categorie: 'Programa de Auditório',
        title: 'Silvio Santos com Patricia Abravanel',
        image: 'https://static.sbt.com.br/programas/logos/vertical/9.jpg',
        about: "As noites de domingo são muito mais alegres com o Programa Silvio Santos em várias horas de diversão garantida, games, convidados famosos, brincadeiras com o auditório, além de boas gargalhadas.\nPatricia Abravanel interage com o público de uma forma bem descontraída. A ideia é que a plateia participe da atração e possa ganhar uma série de prêmios."
    }
}
