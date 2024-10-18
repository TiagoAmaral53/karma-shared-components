import { Button as UiButton } from '@karma/components/ui/button';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
}

const Buttons = ({ label, onClick, ...rest }: ButtonProps) => {
  return (
    <UiButton {...rest} onClick={onClick}>
      {label}
    </UiButton>
  );
};

export default Buttons;
