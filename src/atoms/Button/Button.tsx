import { Button } from "@karma/components/ui/button";

export interface ButtonProps {
    label: string;
}

const Buttons = (props: ButtonProps) => {
    return <Button>{props.label}</Button>;
};

export default Buttons;