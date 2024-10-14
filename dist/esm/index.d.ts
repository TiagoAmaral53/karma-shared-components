import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}
declare const Buttons: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

interface AtomProps {
    label: string;
}
declare const Atom: (props: AtomProps) => react_jsx_runtime.JSX.Element;

interface MoleculeProps {
    label: string;
}
declare const Molecule: (props: MoleculeProps) => react_jsx_runtime.JSX.Element;

interface OrganismProps {
    label: string;
}
declare const Organism: (props: OrganismProps) => react_jsx_runtime.JSX.Element;

interface PageProps {
    label: string;
}
declare const Page: (props: PageProps) => react_jsx_runtime.JSX.Element;

interface TemplateProps {
    label: string;
}
declare const Template: (props: TemplateProps) => react_jsx_runtime.JSX.Element;

interface HeaderProps {
    url?: string;
    onTitleClick?: () => void;
    title: string;
}
declare const Header: (props: HeaderProps) => react_jsx_runtime.JSX.Element;

interface FooterProps {
    disclaimer?: string;
    description?: string;
    links: {
        name: string;
        url: string;
    }[];
}
declare const Footer: (props: FooterProps) => react_jsx_runtime.JSX.Element;

export { Atom, Buttons as Button, Footer, Header, Molecule, Organism, Page, Template };
