import React from 'react';

const SortControls = ({ setSortBy }) => {
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="description">Description</option>
        <option value="category">Category</option>
        <option value="dueDate">Due Date</option> {/* Add this */}
      </select>
    </div>
  );
};

export default SortControls;
