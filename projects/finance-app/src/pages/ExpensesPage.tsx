import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Expense } from '../types/expense';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';

export default function ExpensesPage() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState<Expense | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  function handleEdit(expense: Expense) {
    setEditing(expense);
  }

  function handleSaved() {
    setEditing(null);
    setRefreshKey((k) => k + 1);
  }

  function handleCancel() {
    setEditing(null);
  }

  return (
    <div>
      {editing ? (
        <ExpenseForm expense={editing} onSaved={handleSaved} onCancel={handleCancel} />
      ) : (
        <>
          <ExpenseList onEdit={handleEdit} refreshKey={refreshKey} />
          <button className="primary" onClick={() => navigate('/add')} style={{ marginTop: 16 }}>
            + Add Expense
          </button>
        </>
      )}
    </div>
  );
}
