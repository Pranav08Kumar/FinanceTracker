import React, { useState } from "react";
import "./ExpenseForm";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    if (
      (EnteredTitle.trim().length === 0) |
      (EnteredAmount.trim().length === 0)
    ) {
      return;
    }

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(expenseData);
  };
  const cHandler = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={TitleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
            value={EnteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={DateChangeHandler}
            value={EnteredDate}
          ></input>
        </div>
        <div className="new-expenses__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel?
          </button>
          <button type="submit">Add New Expense</button>
          <button onClick={cHandler} type="button">
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
