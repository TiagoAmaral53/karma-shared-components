import { Chart3Object } from '../src/components/molecules/chart/domain/Chart3Object';
import { Chart3Props } from '../src/components/molecules/chart/domain/Chart3Props';
import { Chart3Value } from '../src/components/molecules/chart/domain/Chart3Value';

export const mockDataChart: Chart3Props = {
  data: {
    values: [
      {
        line1: 2,
        line2: 4,
        line3: 7,
        bar1: 3,
        bar2: 1,
        bar3: 4,
        xAxisName: '01/24',
      } as Chart3Value,
      {
        line1: 4,
        line2: 2,
        line3: 8,
        bar1: 5,
        bar2: 0,
        bar3: 7,
        xAxisName: '02/24',
      } as Chart3Value,
      {
        line1: 7,
        line2: 1,
        line3: 2,
        bar1: 3,
        bar2: 4,
        bar3: 4,
        xAxisName: '03/24',
      } as Chart3Value,
      {
        line1: 6,
        line2: 1,
        line3: 7,
        bar1: 3,
        bar2: 5,
        bar3: 1,
        details: 'no details',
        xAxisName: '04/24',
      } as Chart3Value,
      {
        line1: 4,
        line2: 3,
        line3: 8,
        bar1: 2,
        bar2: 5,
        bar3: 6,
        details: 'details about these values',
        xAxisName: '05/24',
      } as Chart3Value,
      {
        line1: 3,
        line2: 3,
        line3: 9,
        bar1: 6,
        bar2: 6,
        bar3: 3,
        details: 'details about these values',
        xAxisName: '06/24',
      } as Chart3Value,
      {
        line1: 7,
        line2: 3,
        line3: 11,
        bar1: 5,
        bar2: 8,
        bar3: 1,
        details: 'details about these values',
        xAxisName: '07/24',
      } as Chart3Value,
      {
        line1: 6,
        line2: 6,
        line3: 13,
        bar1: 6,
        bar2: 3,
        bar3: 2,
        details: 'details about these values',
        xAxisName: '08/24',
      } as Chart3Value,
    ],
    line1: { name: 'numero de perdas', unit: 'uni' },
    line2: { name: 'numero de compras' },
    line3: { name: 'numero de vendas' },
    bar1: { name: 'valor das vendas' },
  } as Chart3Object,
  chartTitle: 'ChartLine3',
};
