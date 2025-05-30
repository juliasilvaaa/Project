import { Meta, StoryObj } from '@storybook/react';
import { CardPrograms } from '../../components/Cards/CardProgram'; 


const meta: Meta<typeof CardPrograms> = {
    title: 'Components/Cards/Program',
    component: CardPrograms,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        image: { control: 'text' },
        about: { control: 'text' },
        imageWidthSize: {
            // Defininfo que o tipo de controle será uma slider (RANGE - barra deslizante)
            // Valor minimo e maximo em px, STEP - de quanto o valor pula (10 em 10)
            control: {type: 'range', min: 230, max: 445, step:5}
        },
         imageHeightSize: {
            // Defininfo que o tipo de controle será uma slider (RANGE - barra deslizante)
            // Valor minimo e maximo em px, STEP - de quanto o valor pula (10 em 10)
            control: {type: 'range', min: 310, max: 660, step:5}
        }
    },
};

export default meta;

type Story = StoryObj<typeof CardPrograms>

export const CardProgram: Story = {
    args: {
        image: 'https://static.sbt.com.br/programas/logos/vertical/9.jpg',
        imageHeightSize: 310,
        imageWidthSize: 230
    }
}

export const OtherProgram: Story = {
    args: {
        image: 'https://tv.sbt.com.br/_next/image?url=https%3A%2F%2Fstatic.sbt.com.br%2Fprogramas%2Flogos%2Fvertical%2F18.jpg&w=256&q=75',
        imageHeightSize: 310,
        imageWidthSize: 230
    }
}
