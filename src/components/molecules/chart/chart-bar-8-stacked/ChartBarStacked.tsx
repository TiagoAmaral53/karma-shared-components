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
import { TooltipLabelFormatter, TooltipFormatter } from '../utils/Tooltip';
import { Chart8Props } from '../domain/Chart8Props';
import Title from '@karma/components/atoms/Title';

const ChartBar8Stacked = ({ data, chartTitle }: Chart8Props): JSX.Element => {
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
            {data.line1?.name && (
              <Line
                type="monotone"
                name={data.line1?.name}
                dataKey="line1"
                stroke={data.line1?.color ? data.line1.color : '#86BEDA'}
                unit={data.line1?.unit}
              />
            )}
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
            {data.bar1?.name && (
              <Bar
                dataKey="bar1"
                name={data.bar1?.name}
                barSize={20}
                stackId="a"
                unit={data.bar1?.unit}
                fill={data.bar1?.color ? data.bar1.color : '#3498db'}
              />
            )}
            {data.bar2?.name && (
              <Bar
                dataKey="bar2"
                name={data.bar2?.name}
                barSize={20}
                stackId="a"
                unit={data.bar2?.unit}
                fill={data.bar2?.color ? data.bar2.color : '#e74c3c'}
              />
            )}
            {data.bar3?.name && (
              <Bar
                dataKey="bar3"
                name={data.bar3?.name}
                barSize={20}
                stackId="a"
                unit={data.bar3?.unit}
                fill={data.bar3?.color ? data.bar3.color : '#2ecc71'}
              />
            )}
            {data.bar4?.name && (
              <Bar
                dataKey="bar4"
                name={data.bar4?.name}
                barSize={20}
                stackId="a"
                unit={data.bar4?.unit}
                fill={data.bar4?.color ? data.bar4.color : '#f1c40f'}
              />
            )}
            {data.bar5?.name && (
              <Bar
                dataKey="bar5"
                name={data.bar5?.name}
                barSize={20}
                stackId="a"
                unit={data.bar5?.unit}
                fill={data.bar5?.color ? data.bar5.color : '#9b59b6'}
              />
            )}
            {data.bar6?.name && (
              <Bar
                dataKey="bar6"
                name={data.bar6?.name}
                barSize={20}
                stackId="a"
                unit={data.bar6?.unit}
                fill={data.bar6?.color ? data.bar6.color : '#1abc9c'}
              />
            )}
            {data.bar7?.name && (
              <Bar
                dataKey="bar7"
                name={data.bar7?.name}
                barSize={20}
                stackId="a"
                unit={data.bar7?.unit}
                fill={data.bar7?.color ? data.bar7.color : '#e67e22'}
              />
            )}
            {data.bar8?.name && (
              <Bar
                dataKey="bar8"
                name={data.bar8?.name}
                barSize={20}
                stackId="a"
                unit={data.bar8?.unit}
                fill={data.bar8?.color ? data.bar8.color : '#34495e'}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default ChartBar8Stacked;
