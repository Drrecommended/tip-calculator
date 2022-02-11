const bill = document.getElementById('bill')
const buttons = document.querySelectorAll('#percent-buttons')
const custumPercent = document.getElementById('custom-percent')
const personCount = document.getElementById('person-count')
const tipPerPerson = document.getElementById('tip-per-person')
const totalPerperson = document.getElementById('total-per-person')
const resetButton = document.getElementById('reset-button')
const userInputs = document.querySelectorAll('input')
const warningLabel = document.querySelector('.warning')

const DEFAULT_PERSON_COUNT = 1

function formatNumber(n) {
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// function formatCurrency(input, blur) {
//   var input_val = input.value;
//   if (input_val === "") {
//     return;
//   }
//   var original_len = input_val.length;
//   var caret_pos = input.selectionStart;
//   if (input_val.indexOf(".") >= 0) {
//     var decimal_pos = input_val.indexOf(".");
//     var left_side = input_val.substring(0, decimal_pos);
//     var right_side = input_val.substring(decimal_pos);
//     left_side = formatNumber(left_side);
//     right_side = formatNumber(right_side);
//     if (blur === "blur") {
//       right_side += "00";
//     }
//     right_side = right_side.substring(0, 2);
//     input_val = left_side + "." + right_side;
//   } else {
//     input_val = formatNumber(input_val);
//     if (blur === "blur") {
//       input_val += ".00";
//     }
//   }
//   input.value = input_val;
//   var updated_len = input_val.length;
//   caret_pos = updated_len - original_len + caret_pos;
// }

//Functions to grab the bill value
const getBillValue = (e) => {
  let input_val = e.target.value
  formatNumber(input_val)
  e.target.value = formatNumber(input_val)
  console.log(formatNumber(input_val))
  return bill.value
}

const getCustomPercent = () => {
  console.log(custumPercent.value)
  //if input number is greater than 99 reset input
  if(custumPercent.value > 99) {
    custumPercent.value = ""
  }
  return custumPercent.value
}

const getPersonCount = () => {
  return personCount.value
}

//Function to update the UI
const updateUI = (pCount) => {
  if (pCount) {
    warningLabel.style.visibility = 'hidden'
  } else if (!pCount || pCount == 0) {
    personCount.classList.add('border-warning')
    document.querySelector('.warning').style.visibility = 'visible'
    pCount = DEFAULT_PERSON_COUNT
  }
}

//Percent button click handler
const percentButtonHandler = (e) => {
  let selectedButton = e.target
  buttons.forEach((button) => {
    button.classList.remove('active')
    if (button.value == selectedButton.value) {
      selectedButton.classList.add('active')
    }
  })
  calculateResult(selectedButton)
}

const displayResult = (total, percent) => {
  tipPerPerson.innerHTML = `$${((100 * percent) / total).toFixed()}`
  totalPerperson.innerHTML = `$${total}`
}

const calculateResult = () => {
  let currentBillAmount = getBillValue()
  let currentCustomPercent = getCustomPercent()
  let currentPersonCount = getPersonCount()
  console.log(currentBillAmount)
  if (currentBillAmount === '' || currentCustomPercent === 0) {
    return
  }
  let total = (currentBillAmount * currentCustomPercent) / currentPersonCount
  console.log(total)
  displayResult(total, currentCustomPercent)
  updateUI(currentPersonCount)
}

const resetInputs = () => {
  for (const input of userInputs) {
    input.value = ''
  }
  for (const button of buttons) {
    button.classList.remove('active')
  }
}

bill.addEventListener('input', getBillValue)
bill.addEventListener('blur', () => {
  formatCurrency(this, 'blur')
})
buttons.forEach((button) => {
  button.addEventListener('click', percentButtonHandler)
})
custumPercent.addEventListener('input', getCustomPercent)
personCount.addEventListener('input', getPersonCount)
resetButton.addEventListener('click', resetInputs)
