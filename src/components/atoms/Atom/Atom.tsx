import "./index.scss";
export interface AtomProps {
    label: string;
}

const Atom = (props: AtomProps) => {
    return <div className="atom">
        <h1>This is a atom</h1>
        {props.label}
    </div>;
};

export default Atom;