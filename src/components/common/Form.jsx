import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // SUBMIT HANDLER FUNCTION TO ADD EXPENSE TO THE EXPENSES ARRAY
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name", name, "amount", amount, "date", date);
    if (!name || !amount || !date) {
      return alert("Please fill all the fields");
    }
    onAddExpense({
      id: Date.now(),
      name,
      amount,
      date,
    });
    setName("");
    setAmount("");
    setDate("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center gap-3 mt-3 flex-wrap"
    >
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type={"text"}
        placeHolder={"Name"}
      />
      <Input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        type={"number"}
        placeHolder={"Amount"}
      />
      <Input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        type={"date"}
        placeHolder={"Date"}
      />
      <Button text={"Add"} type={"submit"} />
    </form>
  );
};

export default Form;
