import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance222",
    amount: 294,
    date: new Date(2021, 5, 8),
  },
  {
    id: "e3",
    title: "Car Insurance333",
    amount: 294,
    date: new Date(2021, 9, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
    // setExpenses([expense, ...expenses]); // 좋은 방법이 아니다.

    // 동일한 상태의 이전 스냅샨을 기반으로 하는 경우에 상태를 업데이트를 할 수 있는 깔끔한 방법이다.
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    let newArr = DUMMY_EXPENSES.filter(
      (expense) => Number(selectedYear) === expense.date.getFullYear()
    );
    setExpenses(newArr);
  };

  // props 키 이름은, 던져준 키값의 이름을 사용해야 한다.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        onFilterChange={filterChangeHandler}
        filteredYear={filteredYear}
      />
    </div>
  );
};

export default App;

/* 
컴포넌트 파일 구성하기
- 렌더링하는 컴포넌트들?
- Expenses 폴더 생성
- 


*/
