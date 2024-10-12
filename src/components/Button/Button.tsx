export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <div className="karma-components"><button>{props.label}</button></div>;
};

export default Button;