//전개 연산자(spread operator) => 배열 및 객체의 모든 속성을 풀어놓을때 사용

//전개 연산자를 이용해서 함수의 매개변수를 입력하기
Math.max(1, 3, 7, 9);
const numbers = [1, 3, 7, 9];
Math.max(...numbers); //동적으로 함수의 매개변수 전달 가능
Math.max.apply(null, numbers); //apply 함수를 사용해도 동적으로 매개변수 전달 가능, 하지만 번거롭고 가독성 떨어짐

//전개연산자를 이용해서 배열과 객체를 복사하기
const arr1 = [1, 2, 3];
const obj1 = { age: 23, name: "sara" };
const arr2 = [...arr1]; //전개연산자를 사용해서 새로운 객체와 배열 생성
const obj2 = { ...obj1 };
arr2.push(4); // 새로운 객체 생성으로 속성을 추가하거나 변경해도 원래의 객체에 영향 x
obj2.age = 80;

//배열에서 전개 연산자를 사용하면 순서가 유지됨
[1, ...[2, 3], 4]; //[1, 2, 3, 4]
new Date(...[2018, 11, 24]); //2018년 11월 24일

//전개 연산자를 이용해서 두 객체를 병합하기
const obj3 = { age: 21, name: "mike" };
const obj4 = { hobby: "soccer" };
const obj5 = { ...obj3, ...obj4 };
console.log("obj5", obj5);

//객체 리터럴에서 중복된 속성명 사용 가능
const obj6 = {x: 1 , x: 2, y: 'a'}  //{x: 2, y: 'a'} 중복 시 마지막 속성명의 값이 됨
const obj7 = {...obj6, y: 'b'} //{x: 2, y: 'b'} 객체 특정 속성값 변경시 이전 객체에 영향을 주지 않고 새로운 객체 생성 가능