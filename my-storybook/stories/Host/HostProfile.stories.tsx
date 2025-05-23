import { Meta, StoryObj } from "@storybook/react";
import { HostProfile } from "../../components/Host/HostProfile";

const meta: Meta<typeof HostProfile> = {
    title: 'Components/Host',
    component: HostProfile,
    argTypes: {
        slug: { control: 'text' },
        image: { control: 'text' },
        size: {
            control: { type: 'radio' },
            options: ['small', 'medium', 'large']
        }
    }
};

export default meta;

type Story = StoryObj<typeof HostProfile>;

export const ProfileHost: Story = {
    args: {
        slug: '',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/2019_Presidente_Jair_Bolsonaro_no_Programa_The_Noite_do_SBT_-_47968955187_%28cropped%29.jpg',
        size: 'medium'
    }
}