//계산된 속성명 => 객체의 속성명을 동적으로 결정하기 위해 나온 문법

//계산된 속성명을 사용하지 않은 코드와 사용한 코드 비교
function makeObject1(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}
function makeObject2(key, value) {
  return { [key]: value };
}

console.log("함수 1", makeObject1(3, 4));
console.log("함수 2", makeObject2(3, 4));
