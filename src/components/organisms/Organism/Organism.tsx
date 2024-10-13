import "./index.scss";
export interface OrganismProps {
    label: string;
}

const Organism = (props: OrganismProps) => {
    return <div className="organism"><h1>This is a organism</h1>{props.label}</div>;
};

export default Organism;