import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import "./App.css";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: 'e5',
      title: "Groccery",
      amount: 480.9,
      date: new Date(2020, 4, 17),
    },
    {
      id: "e1",
      title: "Book",
      amount: 94.1,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Stationary",
      amount: 799.4,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Milk",
      amount: 294.6,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "Petrol",
      amount: 450.3,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="Design">
      <header>
        <h1 className="Design">Finance Tracker</h1>
      </header>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
