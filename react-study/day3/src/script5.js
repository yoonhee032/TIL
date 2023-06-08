//객체 비구조화 => 객체의 여러 속상값을 변수로 쉽게 할당

//객체 비구조화의 간단한 예
const obj = { age: 21, name: "mike" };
const { age, name } = obj;
console.log(age); //21     , 객체 비 구조화는 중괄호 사용 => 순서 무의미
console.log(name); //mike

//객체 비구조화에서는 속성명이 중요
const { a, b } = obj; //존재하지 않는 속성명을 사용하면 undefined가 할당

//객체 비구조화에서 별칭 사용
const obj2 = { age2: 21, name2: "sara" };
const { age2: theAge, name2 } = obj2;

console.log(theAge); //21: theAge라는 이름의 변수만 할당되고 age 변수는 할당x
//console.log(age2); //참조 에러

//객체 비구조화에서의 기본값
const obj3 = { age3: undefined, name3: null, grade: "A" };
const { age3 = 0, name3 = "noName", grade = "F" } = obj3;

console.log(age3);     //0 : undefined이므로 기본값 0 출력
console.log(name3);    //null : 속성값이 null이면 기본값은 들어가지 않음
console.log(grade);    //A

//함수를 이용한 기본값
function getDefaultAge() {
    console.log('hello');
    return 0;
}

const obj4 = { age4: 21, grade2 : "A" };
const { age4 = getDefaultAge(), grade2} = obj4;   //hello가 출력되지 않음
console.log(age4);
