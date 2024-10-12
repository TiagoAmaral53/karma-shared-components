import "./index.scss";
export interface ButtonProps {
    label: string;
}

const MyName = (props: ButtonProps) => {
    return <button className="buttton">{props.label}</button>;
};

export default MyName;