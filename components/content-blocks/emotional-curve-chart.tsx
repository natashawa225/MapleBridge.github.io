'use client';

import {
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
  label?: string;
}

interface EmotionalCurveChartProps {
  data: EmotionalDataPoint[];
}

function CustomDot(props: any) {
  const { cx, cy, payload } = props;

  if (cx == null || cy == null) return null;

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={4.5}
        fill="hsl(var(--color-primary))"
        stroke="hsl(var(--color-background))"
        strokeWidth={2}
      />
      {payload?.label && (
        <text
          x={cx}
          y={cy - 14}
          textAnchor="middle"
          fontSize="11"
          fill="hsl(var(--color-muted-foreground))"
          style={{ fontStyle: 'italic' }}
        >
          {payload.label}
        </text>
      )}
    </g>
  );
}

export function EmotionalCurveChart({ data }: EmotionalCurveChartProps) {
  const colors = {
    line: 'hsl(var(--color-primary))',
    area: 'hsl(var(--color-primary) / 0.16)',
    grid: 'hsl(var(--color-border))',
    text: 'hsl(var(--color-muted-foreground))',
    foreground: 'hsl(var(--color-foreground))',
    background: 'hsl(var(--color-background))',
  };

  return (
    <Card className="rounded-2xl border border-border/70 p-6 animate-fade-in-up">
      <div className="mb-4">
        <h4 className="text-base font-semibold text-foreground">
          Emotional Journey
        </h4>
        <p className="text-sm text-muted-foreground">
          How the visitor’s emotional engagement shifts across the experience
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={data}
          margin={{ top: 28, right: 18, left: 0, bottom: 8 }}
        >
          <defs>
            <linearGradient id="colorEmotion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.line} stopOpacity={0.22} />
              <stop offset="95%" stopColor={colors.line} stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke={colors.grid}
            opacity={0.35}
          />

          <XAxis
            dataKey="phase"
            axisLine={false}
            tickLine={false}
            stroke={colors.text}
            tick={{ fill: colors.text, fontSize: 12 }}
          />

          <YAxis
            domain={[0, 10]}
            axisLine={false}
            tickLine={false}
            stroke={colors.text}
            tick={{ fill: colors.text, fontSize: 12 }}
            width={30}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.grid}`,
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
            labelStyle={{ color: colors.foreground, fontWeight: 600 }}
            formatter={(value: number, _name: string, item: any) => [
              `${Number(value).toFixed(1)} / 10${item?.payload?.label ? ` — ${item.payload.label}` : ''}`,
              'Engagement',
            ]}
          />

          <Area
            type="monotone"
            dataKey="emotion"
            stroke={colors.line}
            strokeWidth={2.5}
            fill="url(#colorEmotion)"
            dot={<CustomDot />}
            activeDot={{
              r: 6,
              fill: colors.line,
              stroke: colors.background,
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}