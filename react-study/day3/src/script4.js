//배열 비구조화 => 배열의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법

//배열 비구조화를 사용한 간단한 코드
const arr1 = [1, 2];
const [a, b] = arr1;
console.log(a); //1
console.log(b); //2

//배열 비구조화로 이미 존재하는 변수에 값을 할당하기
let c, d;
[c, d] = [1, 2];

//배열 비구조화에서의 기본값
const arr2 = [1];
const [e = 10, f = 20] = arr2;
console.log(e); //1 : 변수의 속성값이 존재하기 때문에 기본값 10은 사용되지 않고 속성값이 그대로 할당
console.log(f); //20 : 두번째 변수의 속성값은 undefined이므로 기본값 20이 할당

//쉼표를 이용해서 일부 속성값을 건너뛰기
const arr3 = [1, 2, 3];
const [aa, , cc] = arr3;
console.log(aa); //두번째 속성값은 무시하고 변수 aa와 cc에 할당
console.log(cc);

//나머지 값을 별도의 배열로 만들기
const arr4 = [1, 2, 3];
const [first, ...rest1] = arr4;
console.log(rest1);                   //배열 비구조화 시 마지막에 ...과 변수명을 입력하면 나머지 모든 속성값이 새로 만들어짐
const [dd, ee, ff, ...rest2] = arr4;
console.log(rest2)                    //나머지 속성값이 존재하지 않으면 빈 배열이 만들어짐
