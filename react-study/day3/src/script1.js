//단축 속성명 => 간편하게 새로운 객체 생성 가능

//단축 속성명을 사용해서 객체 생성
const name1 = "mike";
const obj = {
  age: 21,
  name1,
  getName() {
    return this.name1;
  },
};

//단축 속성명을 사용하지 않은 코드와 사용한 코드를 비교하기
function makePerson1(age, name) {
  return { age: age, name: name };
}
function makePerson2(age, name) {
  return { age, name };
}

//콘솔 로그 출력시 단축 속성명 활용하기
const name2 = "mike";
const age = 21;

console.log("name=", name2, ", age=", age);
console.log({ name2, age });
