import "./index.scss";
export interface PageProps {
    label: string;
}

const Page = (props: PageProps) => {
    return <div className="page"><h1>This is a page</h1>{props.label}</div>;
};

export default Page;