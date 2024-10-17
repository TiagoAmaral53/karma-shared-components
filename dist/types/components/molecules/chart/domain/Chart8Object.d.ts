import { Chart8Value } from './Chart8Value';
import { ChartProperty } from './ChartProperty';
export interface Chart8Object {
    values: Chart8Value[];
    line1?: ChartProperty;
    line2?: ChartProperty;
    line3?: ChartProperty;
    line4?: ChartProperty;
    line5?: ChartProperty;
    line6?: ChartProperty;
    line7?: ChartProperty;
    line8?: ChartProperty;
    bar1?: ChartProperty;
    bar2?: ChartProperty;
    bar3?: ChartProperty;
    bar4?: ChartProperty;
    bar5?: ChartProperty;
    bar6?: ChartProperty;
    bar7?: ChartProperty;
    bar8?: ChartProperty;
    reverseYAxis?: boolean;
}
