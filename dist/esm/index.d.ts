import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
}
declare const Buttons: ({ label, onClick, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

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

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5;
    children?: React.ReactNode;
    type?: 'secundary' | 'default';
}
declare const Title: ({ level, type, children, ...rest }: TitleProps) => react_jsx_runtime.JSX.Element;

export { Atom, Buttons as Button, Header, Molecule, Organism, Page, Template, Title };
