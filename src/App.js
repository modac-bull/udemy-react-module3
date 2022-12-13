import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  // props 키 이름은, 던져준 키값의 이름을 사용해야 한다.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
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
