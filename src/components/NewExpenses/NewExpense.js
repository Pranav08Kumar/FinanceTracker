import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);
  const SaveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditting(false);
  };
  const startEdittingHandler = () => {
    setIsEditting(true);
  };
  const stopIsEditting=()=>{
    setIsEditting(false);
  }
  return (
    <div className="new-expense">
      {!isEditting && <button onClick={startEdittingHandler}>Add Expenses</button>}
      {isEditting && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopIsEditting}></ExpenseForm>}
    </div>
  );
};
export default NewExpense;
