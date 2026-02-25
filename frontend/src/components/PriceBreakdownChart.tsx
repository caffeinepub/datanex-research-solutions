interface PriceBreakdownChartProps {
  breakdown: Array<{ label: string; value: number; color: string }>;
  total: number;
}

export default function PriceBreakdownChart({ breakdown, total }: PriceBreakdownChartProps) {
  return (
    <div className="space-y-6">
      {breakdown.map((item, idx) => {
        const percentage = (item.value / total) * 100;
        
        return (
          <div key={idx}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">{item.label}</span>
              <span className="text-sm font-mono text-gold">${Math.round(item.value)}</span>
            </div>
            <div className="h-8 bg-navy-2 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 flex items-center justify-end px-3 text-xs font-medium text-navy transition-all duration-500"
                style={{ width: `${percentage}%`, backgroundColor: item.color }}
              >
                {percentage > 15 && `${Math.round(percentage)}%`}
              </div>
            </div>
          </div>
        );
      })}

      <div className="pt-6 border-t border-gold/10">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Total Estimate</span>
          <span className="text-2xl font-display text-gold">${Math.round(total)}</span>
        </div>
      </div>
    </div>
  );
}
