import { Meta, StoryObj } from '@storybook/react';
import { CardAllNoticies } from '../../components/Cards/CardAllNoticies'; 


const meta: Meta<typeof CardAllNoticies> = {
    title: 'Components/Cards/AllNoticies',
    component: CardAllNoticies,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        resume: {control: 'text'},
        image: { control: 'text' }
    },
};

export default meta;

type Story = StoryObj<typeof CardAllNoticies>

export const CardAllNotici: Story = {
    args: {
        categorie: 'Mundo',
        title: 'Trump anuncia acordo tarifário dos EUA com o Reino Unido',
        resume: 'Premiê britânico confirmou a redução bilateral da cobrança em produtos agrícolas e de tecnologia e cota para exportação de carros',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/OMGCDWTHIZDMTKBUIMCDJS3QWQ.jpg'
    }
}
