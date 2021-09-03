import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummey_Expense = [
  {
    id: "e1",
    title: "school",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expen, setExpen] = useState(Dummey_Expense);
  const pushDataExpense = (data) => {
    setExpen((exp) => {
      return [data, ...exp];
    });
  };

  return (
    <div>
      <NewExpense datas={pushDataExpense}></NewExpense>
      <Expenses item={expen}></Expenses>
    </div>
  );
};

export default App;
