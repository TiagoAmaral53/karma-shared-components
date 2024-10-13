import "./Molecule.scss";
export interface MoleculeProps {
    label: string;
}

const Molecule = (props: MoleculeProps) => {
    return <div className="molecule"><h1>This is a molecule</h1>{props.label}</div>;
};

export default Molecule;