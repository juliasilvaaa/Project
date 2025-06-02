import { Meta, StoryObj } from '@storybook/react';
import { FooterSbt } from '../../components/Footer';


const meta: Meta<typeof FooterSbt> = {
    tags: ['autodocs'],
    title: 'Components/Footer/FooterSbt',
    component: FooterSbt,
    argTypes: {
        information: { control: 'text' },
        backgroundColor: { control: 'color' },
        image: { control: 'text' }

    },
};

export default meta;

type Story = StoryObj<typeof FooterSbt>

export const Footer: Story = {
    args: {
        backgroundColor: '#000000',
        information: "TV SBT CANAL 4 ",
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/2048px-Logotipo_do_SBT.svg.png',
        // Um array de objetos com todos os icons do social media (passando novamente, pois o componente pode aceitar varias propriedades, sendo necessário novamente exibir as informações)
        icons: [{
            "title": "FaceBook",
            "link": "k",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
            "size": "medium"
        }, {
            "title": "Tiktok",
            "link": "k",
            "image": "https://static.vecteezy.com/system/resources/previews/016/716/485/non_2x/tiktok-icon-free-png.png",
            "size": "medium"
        }]

    }
}
