'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { Card } from '@/components/ui/card';

interface EmotionalDataPoint {
  phase: string;
  emotion: number;
}

interface EmotionalCurveChartProps {
  data: EmotionalDataPoint[];
}

export function EmotionalCurveChart({ data }: EmotionalCurveChartProps) {
  const colors = {
    line: 'hsl(var(--color-primary))',
    area: 'hsl(var(--color-primary) / 0.1)',
    grid: 'hsl(var(--color-border))',
    text: 'hsl(var(--color-muted-foreground))',
  };

  return (
    <Card className="p-6 animate-fade-in-up">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEmotion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.line} stopOpacity={0.3} />
              <stop offset="95%" stopColor={colors.line} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={colors.grid}
            opacity={0.5}
          />
          <XAxis
            dataKey="phase"
            stroke={colors.text}
            style={{ fontSize: '12px' }}
            tick={{ fill: colors.text }}
          />
          <YAxis
            domain={[0, 10]}
            stroke={colors.text}
            style={{ fontSize: '12px' }}
            tick={{ fill: colors.text }}
            label={{ value: 'Emotional Engagement', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--color-background))',
              border: `1px solid hsl(var(--color-border))`,
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'hsl(var(--color-foreground))' }}
            formatter={(value: any) => [
              `${Number(value).toFixed(1)}/10`,
              'Engagement',
            ]}
          />
          <Area
            type="monotone"
            dataKey="emotion"
            stroke={colors.line}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorEmotion)"
            dot={{
              fill: colors.line,
              strokeWidth: 2,
              r: 4,
            }}
            activeDot={{
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Emotional engagement across the user&apos;s journey
        </p>
      </div>
    </Card>
  );
}
