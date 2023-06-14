//화살표 함수

//화살표 함수 사용의 예
const add = (a, b) => a + b;
console.log(add(1, 2));
const add2 = (a) => a + 2;
console.log(add2(3));
const addAndReturnObject = (a, b) => ({ result: a + b });
console.log(addAndReturnObject(1, 2).result);
const add3 = (a, b) => {
  if (a <= 0 || b <= 0) {
    throw new Error("양수를 입력하세요");
  }
  return a + b;
};

//화살표함수가 일반 함수와 다른 점은 this와 arguments가 바인딩되지 않는다는 점!

//화살표 함수에서 나머지 매개변수 사용하기
const printLog5 = (...rest) => console.log(rest);
printLog5(1, 2);

//일반 함수에서 this 바인딩 때문에 버그가 발생하는 경우
const obj = {
  value: 1,
  increase: function () {
    this.value++;
  },
};

obj.increase();
console.log("dkdk", obj.value);

const increase = obj.increase;
increase();
console.log(obj.value);

//생성자 함수 내부에서 정의된 화살표 함수의 this
function Something() {
  this.value = 1;
  this.increase = () => this.value++;
}

const obj1 = new Something();
obj1.increase();

console.log(obj1.value);

const increase1 = obj1.increase;
increase1();
console.log(obj1.value);

//setInterval 함수 사용시 this 바인딩 문제

//setInterval 함수에서 this 객체 사용시 버그 발생
function WhatsWrong() {
  this.value = 1;
  setInterval(function increase() {
    this.value++;
  }, 1000);
}

const obj2 = new WhatsWrong();

console.log(obj2.value);

//ES5 환경에서 앞선 문제를 해결하기 위해 다음과 같은 편법 사용

function WhatsWrong1() {
  this.value = 1;
  var that = this;
  setInterval(function increase() {
    that.value++; //increase 함수에서는 클로저를 이용해 미리 저장한 that 변수를 통해 this 객체에 접근
  }, 1000);
}

const obj3 = new WhatsWrong1();

//클로저 개념 이해하기
//클로저를 사용한 간단한 코드
function makeAddFunc(x) {
  return function add(y) {
    return x + y;
  };
}

const add4 = makeAddFunc(4);
console.log(add4(1));
const add5 = makeAddFunc(5);
console.log(add5(1));
console.log(add4(1));

//setInterval 함수에서 this 객체를 참조하기 위해 화살표 함수 사용하기
function Something1() {
    this.value = 1;
    setInterval(() => {
        this.value++;
    }, 1000);
}

const obj4 = new Something1();

console.log(obj4)