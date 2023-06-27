import React, {Component} from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   //state의 초깃값 설정
  //   this.state = {
  //     number: 17,
  //     text: '이서율의 나이는 ',
  //   };
  // }
  state = {
    number: 17,
    text: '이서율의 나이는 ',
    //이런 식으로도 state 초기화가 가능함
  }
  render() {
    const {number, text} = this.state; // state를 조회할 때는 this.state로 조회한다
    return(
      <div className="Counter">
        <h1>{text + number}입니다</h1>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            //this.setState({number: number + 1});
            this.setState(prevState => {
                return {
                  number: prevState.number + 1,
                }
              },
              () => {
                console.log('졸라졸립네');
              }
            );
          }}
        >+1</button>
        <button onClick={()=>{
          this.setState({text: "주현명의 나이는 "});
        }}>switch</button>
      </div>
    )
  }
}

export default Counter;