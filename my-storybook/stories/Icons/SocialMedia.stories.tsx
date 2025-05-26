import { Meta, StoryObj } from '@storybook/react';
import { SocialMedia } from '../../components/Icons/SocialMedia';


const meta: Meta<typeof SocialMedia> = {
    title: 'Components/SocialMedia',
    component: SocialMedia,
    argTypes: {
        image: { control: 'text' },
        title: { control: 'text' },
        link: { control: 'text' },
        size: {
            control: { type: 'radio'},
            options: ['small', 'medium', 'large']
        }
    },
};

export default meta;

type Story = StoryObj<typeof SocialMedia>

export const MediaFacebook: Story = {
    args: {
        title: 'FaceBook',
        link: 'k',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png',
        size: "large"
    }
}

export const MediaTiktok: Story = {
    args: {
        title: "Tiktok",
        link: 'k',
        image: 'https://static.vecteezy.com/system/resources/previews/016/716/485/non_2x/tiktok-icon-free-png.png',
        size: 'large'
    }
}
