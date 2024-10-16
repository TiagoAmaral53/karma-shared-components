interface ChartProperty {
    name?: string;
    color?: string;
    unit?: string;
}

interface Chart3Value {
    line1?: number;
    line2?: number;
    line3?: number;
    bar1?: number;
    bar2?: number;
    bar3?: number;
    details?: string;
    xAxisName: string;
}

interface Chart3Object {
    values: Chart3Value[];
    line1?: ChartProperty;
    line2?: ChartProperty;
    line3?: ChartProperty;
    bar1?: ChartProperty;
    bar2?: ChartProperty;
    bar3?: ChartProperty;
    reverseYAxis?: boolean;
}

interface Chart3Props {
    chartTitle: string;
    data: Chart3Object;
}

declare const ChartArea: ({ data, chartTitle }: Chart3Props) => JSX.Element;

declare const ChartBar: ({ data, chartTitle }: Chart3Props) => JSX.Element;

declare const ChartBarStacked: ({ data, chartTitle }: Chart3Props) => JSX.Element;

interface Chart8Value {
    line1?: number;
    line2?: number;
    line3?: number;
    line4?: number;
    line5?: number;
    line6?: number;
    line7?: number;
    line8?: number;
    bar1?: number;
    bar2?: number;
    bar3?: number;
    bar4?: number;
    bar5?: number;
    bar6?: number;
    bar7?: number;
    bar8?: number;
    details?: string;
    xAxisName: string;
}

interface Chart8Object {
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

interface Chart8Props {
    chartTitle: string;
    data: Chart8Object;
}

declare const ChartBar8Stacked: ({ data, chartTitle }: Chart8Props) => JSX.Element;

declare const ChartLine3: ({ chartTitle, data }: Chart3Props) => JSX.Element;

export { ChartArea, ChartBar, ChartBarStacked as ChartBar2Stacked, ChartBar8Stacked as ChartBarStacked, ChartLine3 };
