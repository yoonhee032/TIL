//중첩 비구조화

//중첩된 객체의 비구조화 사용 예
const obj = { name: "mike", mother: { name: "sara" } };
const {
  name,
  mother: { name: motherName },
} = obj;

console.log(name); //mike
console.log(motherName); //sara
//console.log(mother);      //참조 에러

//기본값은 변수단위가 아니라 패턴단위로 적용됨
const [{ prop: x } = { prop: 123 }] = [];
console.log(x); //123
const [{ prop: y } = { prop: 123 }] = [{}];
console.log(y); //undefined

//객체 비구조화에서 계산된 속성명 사용하기
const index = 1;
const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
console.log(valueOfTheIndex)  //123
console.log(index);
