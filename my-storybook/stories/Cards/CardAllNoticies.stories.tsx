import { Meta, StoryObj } from '@storybook/react';
import { CardAllNoticies } from '../../components/Cards/CardAllNoticies'; 


const meta: Meta<typeof CardAllNoticies> = {
    title: 'Components/Cards/Noticies',
    component: CardAllNoticies,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        resume: {control: 'text'},
        image: { control: 'text' },
        cardSize: {
            control: { type: 'radio' },
            options: ['small','large']
        }
    },
};

export default meta;

type Story = StoryObj<typeof CardAllNoticies>

export const CardAllNoticie: Story = {
    args: {
        cardSize: 'small',
        categorie: 'Mundo',
        title: 'Trump anuncia acordo tarifário dos EUA com o Reino Unido',
        resume: 'Premiê britânico confirmou a redução bilateral da cobrança em produtos agrícolas e de tecnologia e cota para exportação de carros',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/OMGCDWTHIZDMTKBUIMCDJS3QWQ.jpg'
    }
}

export const CardNoticie: Story = {
    args: {
        cardSize: 'large',
        categorie: 'Mundo',
        title: 'Trump anuncia acordo tarifário dos EUA com o Reino Unido',
        resume: 'Premiê britânico confirmou a redução bilateral da cobrança em produtos agrícolas e de tecnologia e cota para exportação de carros',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/OMGCDWTHIZDMTKBUIMCDJS3QWQ.jpg'
    }
}
