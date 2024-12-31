import React from "react";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="flex items-center justify-center flex-col mt-4">
      <div className="flex items-center justify-between w-full p-2 border-b-2 border-gray-400">
        <p>Name</p>
        <p>Amount</p>
        <p>Date</p>
        <div></div>
      </div>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex items-center justify-between w-full p-2 border-b-2 border-gray-400"
        >
          <p>{expense.name}</p>
          <p>{expense.amount}</p>
          <p>{expense.date}</p>
          <button
            className="text-white bg-red-400 px-4 py-2 rounded-md"
            onClick={() => onDeleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="border-t border-black pt-3 w-full ">
        Total About:$
        {expenses.reduce(
          (total, expense) => total + parseInt(expense.amount),
          0
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
