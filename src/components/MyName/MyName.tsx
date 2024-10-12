export interface ButtonProps {
    label: string;
}

const MyName = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default MyName;