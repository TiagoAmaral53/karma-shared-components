import {
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

const ChartLine3 = ({ chartTitle, data }: Chart3Props): JSX.Element => {
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
            <Line
              type="monotone"
              name={data.line3?.name}
              dataKey="line3"
              stroke={data.line3?.color ? data.line3.color : '#ffc658'}
              unit={data.line3?.unit}
            />
            <XAxis dataKey="xAxisName" angle={90} tickMargin={40}></XAxis>
            <YAxis reversed={data.reverseYAxis} />
            <Tooltip
              labelFormatter={(label: string) => (
                <TooltipLabelFormatter
                  label={label}
                  data={data.values?.map((d) => {
                    return { name: d.xAxisName, details: d.details };
                  })}
                />
              )}
              formatter={(value: ValueType) => (
                <TooltipFormatter name={value} />
              )}
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default ChartLine3;
