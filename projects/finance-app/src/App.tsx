import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import AddExpensePage from './pages/AddExpensePage';
import ExpensesPage from './pages/ExpensesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add" element={<AddExpensePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
