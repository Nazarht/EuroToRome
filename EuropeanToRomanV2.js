function solution(number){
    // convert the number to a roman numeral
    let result;
    let arrOfDigits =  Array.from(String(number), Number);
    let arrOfLetters = [];
    for (let i = 0; arrOfDigits.length < 4; i++) {
      arrOfDigits.unshift(0);
    }
    if (arrOfDigits[0] === 1){
      arrOfLetters.push('M')
    } else if (arrOfDigits[0] === 2) {
      arrOfLetters.push('MM')
    } else if (arrOfDigits[0] === 3) {
      arrOfLetters.push('MMM')
    }
    // Hundreds
    for (let i = 1; i < arrOfDigits.length; i++) {
      let one;
      let five;
      let ten;
      if (i === 3) {
        one = 'I';
        five = 'V';
        ten = 'X';
      } else if (i === 2){
        one = 'X';
        five = 'L';
        ten = 'C';
      } else if (i === 1) {
        one = 'C';
        five = 'D';
        ten = 'M';
      }
    switch (arrOfDigits[i]) {
      case 1:
        arrOfLetters.push(one);
        break;
      case 2:
        arrOfLetters.push(one + one);
        break;
      case 3:
        arrOfLetters.push(one + one + one);
        break;
      case 4:
        arrOfLetters.push(one + five);
        break;
      case 5:
        arrOfLetters.push(five);
        break;
      case 6:
        arrOfLetters.push(five + one);
        break;
      case 7:
        arrOfLetters.push(five + one + one);
        break;
      case 8:
        arrOfLetters.push(five + one + one + one);
        break;
      case 9:
        arrOfLetters.push(one + ten);
        break;
    }
  }
    
    return arrOfLetters.join('');
  }

  let valueForm = document.getElementById('my-form').elements;
  let inputNumber = valueForm['fornumber']
  let button = document.getElementById('button');
  button.onclick = function() {
    document.getElementById('change-text').innerHTML = `${solution(inputNumber.value)}`
  }