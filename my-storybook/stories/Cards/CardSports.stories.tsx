import { Meta, StoryObj } from '@storybook/react';
import { CardSports } from '../../components/Cards/CardSports'; 


const meta: Meta<typeof CardSports> = {
    title: 'Components/Cards/Noticies',
    component: CardSports,
    argTypes: {
        title: { control: 'text' },
        image: { control: 'text' },
        imageWidthSize: {
            // Defininfo que o tipo de controle será uma slider (RANGE - barra deslizante)
            // Valor minimo e maximo em px, STEP - de quanto o valor pula (10 em 10)
            control: {type: 'range', min: 310, max: 600, step:5}
        },
         imageHeightSize: {
            // Defininfo que o tipo de controle será uma slider (RANGE - barra deslizante)
            // Valor minimo e maximo em px, STEP - de quanto o valor pula (10 em 10)
            control: {type: 'range', min: 190, max: 420, step:5}
        }
    },
};

export default meta;

type Story = StoryObj<typeof CardSports>

export const CardSportLarge: Story = {
    args: {
        title: 'Real Madrid oficializa contratação do lateral Alexander-Arnold',
        image: 'https://sports.sbt.com.br/_next/image?url=https%3A%2F%2Fsbt-sports-assets-prod.s3.sa-east-1.amazonaws.com%2Fapos_20_anos_no_liverpool_alexander_arnold_acerta_com_o_real_madrid_51c14273ba.jpg&w=1920&q=90',
        imageHeightSize: 420,
        imageWidthSize: 600
    }
}

export const CardSportSmall: Story = {
    args: {
        title: 'Raphinha reage a rumores sobre reforços no Barcelona',
        image: 'https://sports.sbt.com.br/_next/image?url=https%3A%2F%2Fsbt-sports-assets-prod.s3.sa-east-1.amazonaws.com%2FRaphinha_43535f1541.jpg&w=1920&q=90',
        imageHeightSize: 190,
        imageWidthSize: 310
    }
}
