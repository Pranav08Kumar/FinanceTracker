//import ExpenseItem from "./ExpenseItem";
import React, { useState} from "react";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import Limit from "./Limit";
import AuthContext from "../Help/Auth-Context";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [mVal, setMVal] = useState();
  const [isDefa, setIsDefa] = useState(false);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const onLimit = (events) => {
    const maxvalueA = events;
    setMVal(maxvalueA);
  };
  const defa = (eve) => {
    setIsDefa(eve);
  };

  return (
    <AuthContext.Provider value={{ isDefa: isDefa }}>
      <Cards>
        <Limit props={onLimit} isDefa={defa}></Limit>
      </Cards>
      <Cards className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        ></ExpensesFilter>
        <ExpenseChart expense={filteredExpense} getMaxv={mVal}></ExpenseChart>
        <ExpensesList item={filteredExpense}></ExpensesList>
      </Cards>
    </AuthContext.Provider>
  );
};
export default Expenses;
