import { Meta, StoryObj } from '@storybook/react';
import { FooterSbt } from '../../components/Footer';


const meta: Meta<typeof FooterSbt> = {
    title: 'Components/FooterSbt',
    component: FooterSbt,
    argTypes: {
        information: { control: 'text' },
        backgroundColor: { control: 'color' },
        image: {control: 'text'}
    },
};

export default meta;

type Story = StoryObj<typeof FooterSbt>

export const Footer: Story = {
    args: {
        backgroundColor: '#000000',
        information: '2025 - Júlia',
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/2048px-Logotipo_do_SBT.svg.png'
    }
}
