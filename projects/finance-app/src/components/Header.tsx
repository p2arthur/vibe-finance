import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/add', label: 'Add Expense' },
  { to: '/expenses', label: 'Expenses' },
];

export default function Header() {
  return (
    <header>
      <h1>Finance App</h1>
      <nav aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
