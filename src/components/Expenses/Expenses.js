import "../Expenses/Expenses.css";
// import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
 
  const [year, setYear] = useState("2020");
  //filtering array
  const getCHangeYearValue = (year) => {
    setYear(year);
  };
  const filteredArray = props.item.filter((el) => {
    return el.date.getFullYear().toString() === year;
  });
 

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          getYear={getCHangeYearValue}
          year={year}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredArray}></ExpensesChart>
        <ExpenseList item ={filteredArray}></ExpenseList>
      </div>
    </div>
  );
}
export default Expenses;
//exporting to app.js
