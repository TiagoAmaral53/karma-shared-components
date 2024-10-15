import {
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  Line,
  ComposedChart,
} from 'recharts';

import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Chart3Props } from '../domain/Chart3Props';
import { TooltipLabelFormatter, TooltipFormatter } from '../utils/Tooltip';
import Title from '@karma/components/atoms/Title';

const ChartBarStacked = ({ data, chartTitle }: Chart3Props): JSX.Element => {
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
            <Line
              type="monotone"
              name={data.line2?.name}
              dataKey="line2"
              stroke={data.line2?.color ? data.line2.color : '#8B0000'}
              unit={data.line2?.unit}
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
            <Bar
              dataKey="bar1"
              name={data.bar1?.name}
              barSize={20}
              stackId="a"
              unit={data.bar1?.unit}
              fill={data.bar1?.color ? data.bar1.color : '#ffc658'}
            />
            <Bar
              dataKey="bar2"
              name={data.bar2?.name}
              barSize={20}
              stackId="a"
              unit={data.bar2?.unit}
              fill={data.bar2?.color ? data.bar2.color : '#8B0000'}
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default ChartBarStacked;
