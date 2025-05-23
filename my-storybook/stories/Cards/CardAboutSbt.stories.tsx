import { Meta, StoryObj } from '@storybook/react';
import { CardAboutSbt } from '../../components/Cards/CardAboutSBT';


const meta: Meta<typeof CardAboutSbt> = {
    title: 'Components/Cards',
    component: CardAboutSbt,
    argTypes: {
        title: { control: 'text' },
        image: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardAboutSbt>

export const CardAboutSBT: Story = {
    args: {
        title: 'Sobre o SBT',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Silvio_Santos_em_maio_de_2019.jpg/960px-Silvio_Santos_em_maio_de_2019.jpg',
        description: 'O SBT, conta com uma grade de programação preparada para atender os mais variados públicos, esteja ele em frente à televisão ou no celular, o que confere às campanhas um alcance efetivo do target desejado, nacional e regionalmente. O SBT conta com espaços comerciais acessíveis, democráticos e com alcance eficaz para todo tipo de campanha. Com capacidade para cocriar com o mercado soluções tailor made, sempre visando os melhores resultados e performance para os KPIs do cliente. Isso é possível pela visão do time de Negócios e pela força midiática do SBT em todas as plataformas, incluindo ainda um casting de peso e influência na TV e nas redes sociais.'
    }
}
