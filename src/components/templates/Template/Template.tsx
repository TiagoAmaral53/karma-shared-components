import "./Template.scss";
export interface TemplateProps {
    label: string;
}

const Template = (props: TemplateProps) => {
    return <div className="template"><h1>This is a template</h1>{props.label}</div>;
};

export default Template;