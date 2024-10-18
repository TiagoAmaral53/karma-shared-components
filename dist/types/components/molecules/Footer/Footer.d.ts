export interface FooterProps {
    disclaimer?: string;
    description?: string;
    links: {
        name: string;
        url: string;
    }[];
}
declare const Footer: (props: FooterProps) => import("react/jsx-runtime").JSX.Element;
export default Footer;
