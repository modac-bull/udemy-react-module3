import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

// ExpensesFilter State 끌어올리기
// 양방향 바인딩!
// State 끌어올리기
// 데이터 자식 컴포넌트에서 부모 컴포넌트로 보내기

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
