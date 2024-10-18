import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface TooltipFormatterProps {
  name: ValueType;
}

interface TooltipLabelFormatterProps {
  label: string;
  data?: {
    name?: string;
    details?: string;
  }[];
}

export const TooltipFormatter: React.FC<TooltipFormatterProps> = ({ name }) => (
  <span>{name}</span>
);

export const TooltipLabelFormatter: React.FC<TooltipLabelFormatterProps> = ({
  label,
  data,
}) => {
  return (
    <>
      <span>{label}</span>
      <br />
      <span style={{ fontSize: '0.6rem', color: 'black' }}>
        {data?.filter((t) => t.name == label).at(0)!.details}
      </span>
    </>
  );
};
