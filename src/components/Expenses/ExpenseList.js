import { React } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";


const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          date={el.date}
          year={el.year}
          amount={el.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpenseList;
//exporting to expenses.js
