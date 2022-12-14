import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

/* 
컴포넌트가 점점 커지는 것은 당연한 일
- 더 작은 빌딩 블럭으로 나눌 수 있어야 한다.
- 하나의 블록은 하나의 핵심 작업을 담당
- 모든 컴포넌트를 작고 다루기 쉬운 단위로 나눠야 함
- 
*/

/* 
무상태 컴포넌트, 프리젠테이셔널 또는 dumb 컴포넌트

상태 컴포넌트,
*/

export default function ExpenseItem(props) {
  // function clickHandler() {} // OR
  // const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    console.log("클릭");
    // setTitle('updated!!')
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

/* 
이벤트 리스닝 및 이벤트 핸들러 수행하기
일반적인 방식의 addEventlistenr X
기본 이벤트 시작은 on을 시작

onClick = {clickHandler} // 괄호 사용 X
- 검증 단계에서 clickHandler가 호출되기 때문에 의도한 코드와 다르게 작동

변화하는 데이터를 반영하고자 한다면 state를 사용해야 한다.
값을 설정하고 바꿀 수 있다
state가 등록된 컴포넌트를 재계산해서 재 렌더링 해준다. -> 리액트라 그렇게 설계 되어 있음

컴포넌트별 인스턴스로 개별 관리된다.
- 특정 컴포넌트만 재렌더링 될 때 독립적으로 실행됨

const 변수 사용하는 이유?
- 

useState를 이용해서 어떤 값을 관리하겠다고 리액트에게 알려준다

*/
