import { useNavigate } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';

export default function AddExpensePage() {
  const navigate = useNavigate();

  return (
    <div>
      <ExpenseForm onSaved={() => navigate('/expenses')} />
    </div>
  );
}
