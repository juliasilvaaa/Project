import { Meta, StoryObj } from "@storybook/react";
import { HostAbout } from "../../components/Host/HostAbout"; 

const meta: Meta<typeof HostAbout> = {
    title: 'Components/Host/HostAbout',
    component: HostAbout,
    argTypes: {
        slug: { control: 'text' },
        image: { control: 'text' },
        name_host: {control: 'text'},
        description: {control: 'text'}
    }
};

export default meta;

type Story = StoryObj<typeof HostAbout>;

export const About: Story = {
    args: {
        slug: 'patricia-abravanel',
        image: 'https://f.i.uol.com.br/fotografia/2023/08/04/169116987964cd34573edbc_1691169879_3x2_rt.jpg',
        name_host: 'Patricia Abravanel',
        description: 'Patricia Abravanel Faria (São Paulo, 4 de outubro de 1977), é uma apresentadora de televisão e empresária brasileira. Filha do apresentador e empresário Silvio Santos e da novelista e empresária Íris Abravanel, virou apresentadora na emissora de seu pai, o SBT, inicialmente nos programas Roda a Roda, Cante se Puder, Máquina da Fama e Vem Pra Cá, e desde 2021 substitui o pai no Programa Silvio Santos.'
    }
}