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
export declare const TooltipFormatter: React.FC<TooltipFormatterProps>;
export declare const TooltipLabelFormatter: React.FC<TooltipLabelFormatterProps>;
export {};
