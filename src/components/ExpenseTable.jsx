const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: '#ffeb3b' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const ExpenseTable = ({ expenses, onDelete, onStatusChange, searchTerm }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Complete':
        return { backgroundColor: '#4CAF50', color: 'white' };
      case 'Pending':
        return { backgroundColor: '#FFC107', color: 'black' };
      case 'Uncomplete':
        return { backgroundColor: '#F44336', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{highlightText(expense.description, searchTerm)}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>{expense.dueDate}</td>
              <td>
                <select
                  value={expense.status}
                  onChange={(e) => onStatusChange(expense.id, e.target.value)}
                  style={getStatusStyle(expense.status)}
                >
                  <option value="Uncomplete">Uncomplete</option>
                  <option value="Pending">Pending</option>
                  <option value="Complete">Complete</option>
                </select>
              </td>
              <td>
                <button onClick={() => onDelete(expense.id)}>
                  <i className="fas fa-trash-alt icon"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
