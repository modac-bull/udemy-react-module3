import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

// ExpensesFilter State 끌어올리기
// 양방향 바인딩!
// State 끌어올리기
// 데이터 자식 컴포넌트에서 부모 컴포넌트로 보내기



// key 리액트가 개별 아이템을 인식할 수 있도록 해준다. 고유값을 적어야 한다.
// 리액트가 key 값으로 개별 아이템을 인식할 수있게 되고
// 렌더링 할 때 도움을 준다. => 전체 리스트를 다 재 렌더링 할 필요 없이
// 추가되는 부분에만 렌더링 함

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
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}
