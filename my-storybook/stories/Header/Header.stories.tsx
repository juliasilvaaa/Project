import { Meta, StoryObj } from '@storybook/react';
import { HeaderSbt } from '../../components/Header';


const meta: Meta<typeof HeaderSbt> = {
    title: 'Components/Header/HeaderSbt',
    component: HeaderSbt,
    argTypes: {
        image: {control: 'text'},
        backgroundColor: {control: 'color'}
    },
};

export default meta;

type Story = StoryObj<typeof HeaderSbt>

export const Header: Story = {
    args: {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/2048px-Logotipo_do_SBT.svg.png',
        backgroundColor: '#000000'
    }
}
