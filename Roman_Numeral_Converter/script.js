document.getElementById('convert-btn').addEventListener('click', function() {
    const numberInput = parseInt(document.getElementById('number').value);
    const outputDiv = document.getElementById('output');
    
    if (isNaN(numberInput)) {
      outputDiv.textContent = 'Please enter a valid number';
    } else if (numberInput < 1) {
      outputDiv.textContent = 'Please enter a number greater than or equal to 1';
    } else if (numberInput >= 4000) {
      outputDiv.textContent = 'Please enter a number less than or equal to 3999';
    } else {
      outputDiv.textContent = convertToRoman(numberInput);
    }
  });
  
  function convertToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = '';
  
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        roman += key;
        num -= romanNumerals[key];
      }
    }
    return roman;
  }
  