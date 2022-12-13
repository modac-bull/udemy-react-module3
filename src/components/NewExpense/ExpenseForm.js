// 이름, 날짜, 금액 입력 하도록 할 예정

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 여러개의 state 가지고 있을 경우 대안 ->
  // 객체를 사용할 경우 하나의 state 로 가능
  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    console.log("타이틀 입력됨");
    // 입력한 값을 받아올 수 있을까? => event 기본 바닐라 자바스크립트
    // event.target value 프로퍼티 => 이벤트가 벌어졌을 시점의 입력값을 갖는다.
    console.log(event.target.value);
    // 이걸로 무엇을 해야하는가?
    // 값을 가지고 있다가 폼 제출 후에 해당 값을 던져주는 용도로 사용하기
    setEnteredTitle(event.target.value);

    // 그렇게 좋은 방법은 아니다.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // [함수구문] 왜 이렇게 해야 하는가?
    // 이전 상태에 의존해야 할 경우에는 함수 폼을 사용할 것
    // 상태 업ㅇ데이트 스케줄을 가지고 있어 바로 업데이트 되지 않는다.
    // 비동기적으로 작동하기 때문에, 리액트는 스냅샷 최신 상태를 보장하는 좀 더 안전한 방법이다.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("제출됨");

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    console.log(expenseData);
    // 폼 제출 후 제거 - 양방향 바인딩 추가 + 초기화 양방향 바인딩 개념 = 리액트에서 중요하다.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
