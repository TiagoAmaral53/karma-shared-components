import { ChartProperty } from './ChartProperty';
import { Chart3Value } from './Chart3Value';
export interface Chart3Object {
    values: Chart3Value[];
    line1?: ChartProperty;
    line2?: ChartProperty;
    line3?: ChartProperty;
    bar1?: ChartProperty;
    bar2?: ChartProperty;
    bar3?: ChartProperty;
    reverseYAxis?: boolean;
}
