// 문제1
// 객체에서 특정 키의 값을 안전하게 가져오는 함수
/* 
  객체와 키를 인수로 받아, (1)
  객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환, (2)
  존재하지 않으면 에러를 발생하는 함수 (3)
*/

function getValueAtObject(obj, key) { // (1)
  let receivedObj = Object.keys(obj);
    
  if(receivedObj.includes(key)) { // (2)
    return obj[key];
  } else { // (3)
    throw new Error('입력한 객체에 해당하는 키의 값이 없습니다.');
  }
}

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age')); // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !