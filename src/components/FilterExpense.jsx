import React, { useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const FilterExpense = ({ onFilterExpenses, onResetFilter }) => {
  const [filters, setFilters] = useState({ name: "", amount: "", date: "" });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const filterHandler = () => {
    console.log("filters", filters);
    onFilterExpenses(filters);
  };
  const resetHandler = () => {
    setFilters({ name: "", amount: "", date: "" });
    onResetFilter();
  };
  return (
    <>
      <h3 className="text-xl font-semibold">Filter Value</h3>

      <div className="flex items-center gap-3 mt-3 flex-wrap">
        <Input
          type="text"
          name="name"
          value={filters.name}
          onChange={inputChangeHandler}
          placeHolder={"Search by amount"}
        />
        <Input
          type="number"
          name="amount"
          value={filters.amount}
          onChange={inputChangeHandler}
          placeHolder={"Search by amount"}
        />
        <Input
          type="date"
          name="date"
          value={filters.date}
          onChange={inputChangeHandler}
          placeHolder={"Search by date"}
        />
        <button
          className="bg-emerald-500 px-4 py-2 rounded-md text-white font-semibold"
          onClick={filterHandler}
        >
          Filter
        </button>
        <Button onClick={resetHandler} text={"Reset"} />
      </div>
    </>
  );
};

export default FilterExpense;
