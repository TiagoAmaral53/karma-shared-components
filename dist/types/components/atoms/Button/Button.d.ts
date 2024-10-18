export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
}
declare const Buttons: ({ label, onClick, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Buttons;
