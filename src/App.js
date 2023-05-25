import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    {
        id: 0,
        title: "TV",
        amount: 233,
        date: new Date(2022, 4, 22)

    },
    {
        id: 1,
        title: "Table",
        amount: 130,
        date: new Date(2020, 2, 11)

    },
    {
        id: 2,
        title: "Travel",
        amount: 400,
        date: new Date(2022, 7, 20)

    },
    {
        id: 3,
        title: "Book",
        amount: 11.99,
        date: new Date(2021, 11, 16)

    }]

function App() {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
