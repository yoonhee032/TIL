//매개변수에 추가된 기능

// 1. 매개변수 기본값 => ES6부터 함수 매개변수에 기본값을 줄 수 있음.
function printLog(a = 1) {
  console.log({ a });
}
printLog();

//매개변수 기본값으로 함수 호출 사용하기
function getDefault() {
  return 1;
}
function printLog1(a = getDefault()) {
  console.log({ a });
}
printLog1();

//매개변수 기본값을 이용해서 필숫값을 표현하는 방법
function required() {
  throw new Error("no parameter");
}
function printLog2(a = required()) {
  console.log({ a });
}
printLog2(10); //매개변수의 값이 존재하면 required 함수는 호출되지 않음
// printLog2();

// 2. 나머지 매개변수 => 입력된 인수 중 정의된 매개변수 개수만큼을 제외한 나머지를 배열로 만들어 줌
function printLog3(a, ...rest) {
  console.log({ a, rest });
}

printLog3(1, 2, 3);

//arguments키워드로 나머지 매개변수 따라하기
function printLog4(a) {
  const rest = Array.from(arguments).splice(1);
  console.log({ a, rest });
}

printLog4(1, 2, 3);

//명명된 매개변수 => 자바스크립트에서 명명된 매개변수는 객체 비구조화를 이용해 구현 가능
//              => 명명된 매개변수 사용하여 함수 호출 시 매개변수의 이름과 값을 동시에 적어 가독성이 높다.

//명명된 매개변수의 사용 여부에 따른 가독성 비교
const numbers = [10, 20, 30, 40, 50];
const result1 = getValues(numbers, 5, 25);
const result2 = getValues({ numbers, greaterThan: 5, lessThan: 25 });

//명명된 매개변수의 사용 여부에 따른 선택적 매개변수 코드 비교
const result3 = getValues(numbers, undefined, 25);
const result4 = getValues({ numbers, greaterThan: 5 });
const result5 = getValues({ numbers, lessThan: 25 });
