import { Meta, StoryObj } from '@storybook/react';
import { CardProgramation } from '../../components/Cards/CardProgramation';


const meta: Meta<typeof CardProgramation> = {
    title: 'Components/Cards/Program',
    component: CardProgramation,
    argTypes: {
        title_program: { control: 'text' },
        image: { control: 'text' },
        hour: { control: 'text' },
        cardSize: {
            control: { type: 'radio' },
            options: ['small', 'large']
        },
        color: { control: 'text' },
        backgroundColor: { control: 'text' }
    },
};

export default meta;

type Story = StoryObj<typeof CardProgramation>

export const CardProgramations: Story = {
    args: {
        title_program: 'Silvio Santos com Patricia Abravanel',
        image: 'https://static.sbt.com.br/programas/logos/vertical/9.jpg',
        hour: '07:30',
        cardSize: 'small',
        color: '',
        backgroundColor: ''

    }
}
