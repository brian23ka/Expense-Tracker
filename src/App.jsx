import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import './styles.css'; // Importing CSS styles

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('description');
  const [showForm, setShowForm] = useState(false);

  // Add expense function
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setShowForm(false); // Close the form after submission
  };

  // Delete expense function
  const deleteExpense = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  // Update status
  const updateStatus = (expenseId, newStatus) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === expenseId ? { ...expense, status: newStatus } : expense
      )
    );
  };

  // Toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* Search bar */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Sorting controls */}
      <SortControls setSortBy={setSortBy} />

      {/* Expense form toggle */}
      {showForm && <ExpenseForm onAddExpense={addExpense} />}

      {/* Expense table */}
      <ExpenseTable
        expenses={expenses}
        onDelete={deleteExpense}
        onStatusChange={updateStatus}
        searchTerm={searchTerm}
      />

      {/* Floating Action Button (FAB) */}
      <button className="fab" onClick={toggleForm}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default App;
