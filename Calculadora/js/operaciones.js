const calculadora = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculadora;
  
    if (waitingForSecondOperand === true) {
      calculadora.displayValue = digit;
      calculadora.waitingForSecondOperand = false;
    } else {
      calculadora.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    if (!calculadora.displayValue.includes(dot)) {
      calculadora.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculadora
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculadora.waitingForSecondOperand)  {
      calculadora.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculadora.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculadora.displayValue = String(result);
      calculadora.firstOperand = result;
    }
  
    calculadora.waitingForSecondOperand = true;
    calculadora.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculadora.displayValue = '0';
    calculadora.firstOperand = null;
    calculadora.waitingForSecondOperand = false;
    calculadora.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculadora-screen');
    display.value = calculadora.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculadora-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
          updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });