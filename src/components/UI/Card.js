/* 
Card 컴포넌트 - 래퍼 컴포넌트
- children : 예약어로, 열고 닫는 태그 사이에 있는 컨텐츠를 뜻함
- Card 컴포넌트 안에 있는 컨텐츠를 전달해준다
- 합성 -> 중요하다
- 래퍼 컴포넌트, children prop 활용하기
- props.className 으로 클래스 전달받기
*/
import './Card.css'

export default function Card(props) {
  const classes ='card ' + props.className;
  console.log(classes)
  return(
    <div className={classes}>
      {props.children}
    </div>
  )
}