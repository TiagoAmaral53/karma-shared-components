import {
  Bar,
  Rectangle,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  YAxis,
  Line,
  ComposedChart,
} from 'recharts';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { Chart3Props } from '../domain/Chart3Props';
import { TooltipFormatter, TooltipLabelFormatter } from '../utils/Tooltip';
import Title from '@karma/components/atoms/Title';

const ChartBar = ({ data, chartTitle }: Chart3Props): JSX.Element => {
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
            <YAxis />
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
              activeBar={<Rectangle stroke="purple" />}
            >
              {data.values.map((datum, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={datum.bar1! > 0 ? '#82ca9d' : '#FA8072'}
                />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default ChartBar;
