import { Button as UiButton } from '@karma/components/ui/button';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Buttons = (props: ButtonProps) => {
  return <UiButton onClick={props.onClick}>{props.label}</UiButton>;
};

export default Buttons;
