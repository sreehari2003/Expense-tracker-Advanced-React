import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isButtonactive, setisButtonactive] = useState(false);
  const butttonActive = () => {
    setisButtonactive(true);
  };
  const buttonInactive = ()=>{
    setisButtonactive(false);
  }
  //this function is for getting data back from expense form
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseDAta = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    //function calling from app.js
    props.datas(expenseDAta);
  };
  return (
    <div className="new-expense">
      {!isButtonactive && (
        <button button onClick={butttonActive}>
          Add NEw Expense
        </button>
      )}
      {isButtonactive && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} btn={buttonInactive}></ExpenseForm>
      )}                                                                                                                                                                                                                                                                                   
    </div>
  );
};
export default NewExpense;
//exporting to app.js
