import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Uncomplete');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !dueDate) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      dueDate,
      status,
    };
    onAddExpense(newExpense);
    setMessage({ type: 'success', text: 'Expense added successfully!' });
    setDescription('');
    setAmount('');
    setCategory('Food');
    setDueDate('');
    setStatus('Uncomplete');
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && (
        <div
          className={`message ${message.type === 'success' ? 'success' : 'error'}`}
        >
          {message.text}
        </div>
      )}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Uncomplete">Uncomplete</option>
        <option value="Pending">Pending</option>
        <option value="Complete">Complete</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
