// Задание 1
function isNumberInRange(number){
  if(number > 0 && number < 10) {
      return true;
  } else{
      return false;
  }
}
var number = prompt('Введите любое число от 0 до 10');
if(isNumberInRange(number)){
  alert('Правильно');
} else {
  alert('Ошибка. Введите число в правильном диапазоне!');
}

// Задание 2
function isEven(intNumber){
  if(intNumber%2 == 0){
    return true;
  } else {
    return false;
  }
}
var intNumber = prompt('Введите любое целое число для проверки');
if (isEven(intNumber)){
  alert('Введенное число четное');
} else {
  alert('Введенное число нечетное');
} 

// Задание 3

var value = +prompt('value?', '');
switch (value){
  case 0:
    alert('0');
    break;
  case 1:
    alert('1');
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

// Задание 4
function min(a, b){
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
