// import React,{useState} from "react";
import ExpanseDate from "./ExpenseDate";
import "./Expenseitem.css";


function ExpenseItem(props) {

     return (
    <div className="expense-item">
   <ExpanseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
    </div>
  );
}
export default ExpenseItem;


