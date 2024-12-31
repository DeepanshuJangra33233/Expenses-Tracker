import React, { useState } from "react";
import Form from "./common/Form";
import ExpenseList from "./ExpenseList";
import FilterExpense from "./FilterExpense";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterExpenses, setFilterExpenses] = useState([]);

  // ADD EXPENSE FUNCTION TO ADD EXPENSE TO THE EXPENSES ARRAY
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setFilterExpenses((prev) => [expense, ...prev]);
  };
  // DELETE EXPENSE FUNCTION TO DELETE EXPENSE FROM THE EXPENSES ARRAY
  const deleteExpenseHandler = (id) => {
    const updateExpenses = expenses.filter((ex) => ex.id !== id);
    setExpenses(updateExpenses);
    setFilterExpenses(updateExpenses);
  };
  // FILTER EXPENSES FUNCTION TO FILTER THE EXPENSES ARRAY
  const filterExpensesHandler = (filters) => {
    console.log("filters", filters);
    let filtered = expenses;
    if (filters.name) {
      filtered = filtered.filter((ex) =>
        ex.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.amount) {
      filtered = filtered.filter(
        (ex) => Number(ex.amount) >= Number(filters.amount)
      );
    }
    if (filters.date) {
      filtered = filtered.filter(
        (ex) => new Date(ex.date).toISOString().slice(0, 10) === filters.date
      );
    }
    setFilterExpenses(filtered);
  };
  // RESET FILTER FUNCTION TO RESET THE FILTER EXPENSES
  const resetFilterHandler = () => {
    setFilterExpenses(expenses);
  };
  return (
    <div className=" m-3 p-3 border-2 rounded-md border-gray-400 min-w-[600px]">
      <h2 className="text-3xl font-bold text-black">Expense</h2>
      <Form onAddExpense={addExpense} />
      <FilterExpense
        onFilterExpenses={filterExpensesHandler}
        onResetFilter={resetFilterHandler}
      />
      <ExpenseList
        onDeleteExpense={deleteExpenseHandler}
        expenses={filterExpenses}
      />
    </div>
  );
};

export default Expense;
