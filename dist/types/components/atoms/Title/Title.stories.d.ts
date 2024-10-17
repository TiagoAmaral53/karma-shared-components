import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ level, type, children, ...rest }: import("./Title").TitleProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Title3: Story;
export declare const Title1: Story;
export declare const Title2: Story;
export declare const Title4: Story;
export declare const Title5: Story;
