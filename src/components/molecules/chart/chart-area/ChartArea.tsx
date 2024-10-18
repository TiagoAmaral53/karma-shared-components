import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  Line,
  ComposedChart,
  Area,
} from 'recharts';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { Chart3Props } from '../domain/Chart3Props';
import { TooltipLabelFormatter, TooltipFormatter } from '../utils/Tooltip';
import Title from '@karma/components/atoms/Title';

const ChartArea = ({ data, chartTitle }: Chart3Props): JSX.Element => {
  return (
    <>
      <Title className="text-center" level={5} type="secundary">
        {chartTitle}
      </Title>
      {data.values.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data.values}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              name={data.line1?.name}
              dataKey="line1"
              stroke={data.line1?.color ? data.line1.color : '#86BEDA'}
              unit={data.line1?.unit}
            />
            <XAxis dataKey="xAxisName" angle={90} tickMargin={40}></XAxis>
            <YAxis reversed={data.reverseYAxis} />
            <Tooltip
              labelFormatter={(label: string) => (
                <TooltipLabelFormatter
                  label={label}
                  data={data.values.map((d) => {
                    return { name: d.xAxisName, details: d.details };
                  })}
                />
              )}
              formatter={(value: ValueType) => (
                <TooltipFormatter name={value} />
              )}
            />
            <Area
              type="monotone"
              name={data.bar1?.name}
              dataKey="bar1"
              unit={data.bar1?.unit}
              fill={data.bar1?.color ? data.bar1.color : '#8884d8'}
              stroke={data.bar1?.color ? data.bar1.color : '#8884d8'}
            ></Area>
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default ChartArea;
