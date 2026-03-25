import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listExpenses, getTotalSpending } from '../services/expenseService';
import ExpenseCharts from '../components/ExpenseCharts';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTotal(getTotalSpending());
    setCount(listExpenses().length);
  }, []);

  return (
    <div>
      <section>
        <h2>Dashboard</h2>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-label">Total Spent</div>
            <div className="stat-value">${total.toFixed(2)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Transactions</div>
            <div className="stat-value green">{count}</div>
          </div>
        </div>
      </section>

      <section className="chart-section">
        <ExpenseCharts />
      </section>

      <button className="primary" onClick={() => navigate('/add')}>+ Add Expense</button>
    </div>
  );
}
