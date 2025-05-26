import { Meta, StoryObj } from '@storybook/react';
import { CardTimeLine } from '../../components/Cards/CardTimeLine';


const meta: Meta<typeof CardTimeLine> = {
    title: 'Components/Cards/TimeLine',
    component: CardTimeLine,
    argTypes: {
        title: { control: 'text' },
        year: { control: 'text' },
        image: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardTimeLine>

export const FundacaoSbt: Story = {
    args: {
        title: 'Fundação do SBT',
        year: "1981 -",
        image: 'https://aventurasnahistoria.com.br/media/_versions/entretenimento/sbt_contrato_1_widelg.jpg',
        description: 'Silvio Santos funda o SBT em 19 de agosto de 1981, após vencer uma concessão pública para substituir a Rede Tupi.'
    }
}

export const Estreia: Story = {
    args: {
        title: 'Estreia do "Programa Silvio Santos" no SBT',
        year: "1983 -",
        image: 'https://tv.sbt.com.br/_next/image?url=https%3A%2F%2Fstatic.sbt.com.br%2Fnoticias%2Fimages%2F276272.jpg&w=1080&q=90',
        description: 'Programa dominical clássico apresentado por Silvio Santos começa a ser exibido na emissora.'
    }
}

export const EstreiaBomDia: Story = {
    args: {
        title: '📚 Estreia de "Bom Dia & Cia"',
        year: "1993 -",
        image: 'https://infantv.com.br/infantv/wp-content/uploads/2018/05/bomdia.jpg',
        description: 'Um dos programas infantis mais duradouros da TV brasileira, apresentado por diversas personalidades ao longo dos anos.'
    }
}

export const Audiencia: Story = {
    args: {
        title: '🏆 SBT alcança o segundo lugar em audiência nacional"',
        year: "2001 -",
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/2048px-Logotipo_do_SBT.svg.png',
        description: 'Consolida-se como a segunda maior emissora do país por muitos anos, atrás apenas da Globo.'
    }
}
export const TrintaAnos: Story = {
    args: {
        title: '🎉 30 anos do SBT',
        year: "2011 -",
        image: 'https://imagem.natelinha.uol.com.br/grande/img20110727132132.jpg',
        description: 'A emissora comemora três décadas no ar com homenagens e especiais.'
    }
}

export const Plataformas: Story = {
    args: {
        title: '📱 Foco em plataformas digitais e streaming',
        year: "2023 -",
        image: 'https://play-lh.googleusercontent.com/_onC7ezY_pGDRgGYewaM8GodJx5fFo8eYBbQDo7i-znmwM8xCJMH-kPpDhnRk6kc9Q',
        description: 'O SBT reforça sua presença digital com o app SBT Vídeos e maior integração com redes sociais.'
    }
}














