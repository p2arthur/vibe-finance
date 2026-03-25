export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  description: string;
  date: string; // ISO date string (YYYY-MM-DD)
  createdAt: string; // ISO timestamp
}

export type ExpenseCategory =
  | 'food'
  | 'transport'
  | 'housing'
  | 'utilities'
  | 'entertainment'
  | 'health'
  | 'shopping'
  | 'education'
  | 'other';

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  'food',
  'transport',
  'housing',
  'utilities',
  'entertainment',
  'health',
  'shopping',
  'education',
  'other',
];

export interface ExpenseFilter {
  startDate?: string;
  endDate?: string;
  category?: ExpenseCategory;
}

export interface CategoryTotal {
  category: ExpenseCategory;
  total: number;
  count: number;
}
