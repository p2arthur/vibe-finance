import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  type PieLabelRenderProps,
} from 'recharts';
import { listExpenses, getCategoryTotals } from '../services/expenseService';

const CATEGORY_LABELS: Record<string, string> = {
  food: 'Food',
  transport: 'Transport',
  housing: 'Housing',
  utilities: 'Bills',
  entertainment: 'Entertainment',
  health: 'Health',
  shopping: 'Shopping',
  education: 'Education',
  other: 'Other',
};

const COLORS = [
  '#ef4444', '#3b82f6', '#8b5cf6', '#f59e0b',
  '#ec4899', '#10b981', '#f97316', '#06b6d4', '#6b7280',
];

interface MonthlyData {
  month: string;
  total: number;
}

interface CategorySlice {
  name: string;
  value: number;
}

function formatMonth(isoYearMonth: string): string {
  const [year, month] = isoYearMonth.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
}

function renderPieLabel(props: PieLabelRenderProps): string {
  const name = props.name ?? '';
  const pct = typeof props.percent === 'number' ? props.percent : 0;
  return `${name} ${(pct * 100).toFixed(0)}%`;
}

export default function ExpenseCharts() {
  const monthlyData = useMemo<MonthlyData[]>(() => {
    const expenses = listExpenses();
    const monthMap = new Map<string, number>();

    for (const expense of expenses) {
      const key = expense.date.substring(0, 7);
      monthMap.set(key, (monthMap.get(key) || 0) + expense.amount);
    }

    return Array.from(monthMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, total]) => ({
        month: formatMonth(key),
        total: Math.round(total * 100) / 100,
      }));
  }, []);

  const categoryData = useMemo<CategorySlice[]>(() => {
    return getCategoryTotals().map((ct) => ({
      name: CATEGORY_LABELS[ct.category] ?? ct.category,
      value: Math.round(ct.total * 100) / 100,
    }));
  }, []);

  const hasData = monthlyData.length > 0 || categoryData.length > 0;

  if (!hasData) {
    return <p>No spending data yet. Add some expenses to see charts.</p>;
  }

  return (
    <div>
      {monthlyData.length > 0 && (
        <section>
          <h3>Monthly Spending</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(v: number) => `$${v}`} />
              <Tooltip
                formatter={(value: unknown) => [`$${Number(value).toFixed(2)}`, 'Total']}
              />
              <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
      )}

      {categoryData.length > 0 && (
        <section>
          <h3>Spending by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={renderPieLabel}
              >
                {categoryData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: unknown) => [`$${Number(value).toFixed(2)}`, 'Total']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>
      )}
    </div>
  );
}
