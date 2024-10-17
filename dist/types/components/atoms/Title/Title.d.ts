export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5;
    children?: React.ReactNode;
    type?: 'secundary' | 'default';
}
declare const Title: ({ level, type, children, ...rest }: TitleProps) => import("react/jsx-runtime").JSX.Element;
export default Title;
