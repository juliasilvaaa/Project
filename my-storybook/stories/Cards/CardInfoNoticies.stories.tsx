import { Meta, StoryObj } from '@storybook/react';
import { CardInfoNoticie } from '../../components/Cards/CardInfoNoticie'; 


const meta: Meta<typeof CardInfoNoticie> = {
    title: 'Components/Cards/Noticies',
    component: CardInfoNoticie,
    argTypes: {
        categorie: {control: 'text'},
        title: { control: 'text' },
        resume: {control: 'text'},
        image: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardInfoNoticie>

export const CardInfoNoticies: Story = {
    args: {
        categorie: 'Mundo',
        title: 'Trump anuncia acordo tarifário dos EUA com o Reino Unido',
        resume: 'Premiê britânico confirmou a redução bilateral da cobrança em produtos agrícolas e de tecnologia e cota para exportação de carros',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/OMGCDWTHIZDMTKBUIMCDJS3QWQ.jpg',
        description: 'Era fim de fevereiro quando Keir Starmer chegou à Casa Branca para uma visita oficial. O premiê britânico trouxe, junto às palavras conciliadoras, uma carta do Rei Charles. A correspondência trazia o convite para que o presidente norte-americano Donald Trump visite o Palácio de Buckingham em breve. Naquele mesmo dia, durante uma coletiva de imprensa, ambos foram questionados se a conversa teria resultado em um acordo econômico para evitar a cobrança das tarifas extras sobre os produtos que vêm do Reino Unido. Trump deixou essa possibilidade em aberto.'
    }
}
