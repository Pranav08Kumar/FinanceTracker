import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  return (
    <li>
      <Cards className=" expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className=" expense-item__description">
          <h2>{props.title}</h2>
          <div className=" expense-item__price">₹{props.amount}</div>
        </div>
      </Cards>
    </li>
  );
}

export default ExpenseItem;
