// Get the element you want to listen for input on
const inputs = document.querySelectorAll('.input')
const billInput = document.getElementById('bill-input')
const percentButtons = document.querySelectorAll('#percent-buttons')
const customPercent = document.getElementById('custom-percent-input')
const guestCount = document.getElementById('guest-count-input')
const personTip = document.getElementById('tip-per-person')
const totalWithTip = document.getElementById('total-per-person')
const resetButton = document.getElementById('reset-button')
// Event handler fired on blur

const getAndPadBill = () => {
  let amount

  if (billInput.value !== '') {
    amount = parseFloat(billInput.value)
    billInput.value = amount.toFixed(2)
  }

  calculateBill()
}

// Get percent of the button that was pressed

const percentButtonHandler = (e) => {
  const percent = e.target.dataset.value

  calculateBill(percent)
}

// Get custom percent value

const getCustomPercent = () => {
  const percent = customPercent.value

  //reset input input if percentage is too large
  if (percent > 99) {
    customPercent.value = ''
  }

  calculateBill(percent)
}

// Get get guest count
const getGuestCount = () => {
  if (guestCount.value > 100) {
    guestCount.value = ''
  }

  calculateBill()
}

//// Function to update user interface

const updateUI = (percent) => {
  const warningLabel = document.querySelector('.warning')
  const guests = parseInt(guestCount.value)

  // If percent go over all buttons and update the UI
  percentButtons.forEach((button) => {
    button.classList.remove('active')
    if (button.dataset.value === percent) {
      customPercent.value = ''
      button.classList.add('active')
    }
  })

  // If the value of custome input is greater than zero or percent is not a value remove class active from buttons
  if (customPercent.value > 0) {
    for (let button of percentButtons) {
      button.classList.remove('active')
    }
  }

  // If guest count equals zero show warning label
  if (guests === 0) {
    warningLabel.style.visibility = 'visible'
  }

  // If guest count and not an empty string
  if (guests && guestCount.value !== '') {
    warningLabel.style.visibility = 'hidden'
  }
}

// Calculate the bill
const calculateBill = (percent) => {
  // Get values from all inputs and percent button
  if (guestCount.value > 0) {
    updateUI(percent)
    // Take whatever percent is passed in and convert to a decimal by deviding by 100
    percent = percent / 100
    let tip = (billInput.value * percent) / guestCount.value
    let total = (billInput.value * (1 + percent)) / guestCount.value

    displayBill(tip, total)
  }

}

// Display Bill
const displayBill = (tip, total) => {
  if (isNaN(tip) || isNaN(total)) {
    return
  }

  personTip.innerHTML = '$' + tip.toFixed(2)
  totalWithTip.innerHTML = '$' + total.toFixed(2)
}

// Reset inputs
const resetInputs = () => {
  billInput.value = ''
  guestCount.value = ''
  customPercent.value = ''
  personTip.innerHTML = '$0.00'
  totalWithTip.innerHTML = '$0.00'
  updateUI()
}

// Attached event handler to all inputs to only allow integers
inputs.forEach((input) =>
  input.addEventListener('keypress', (e) => {
    const inputId = e.target.id
    // Check it event keyCode is "-, + ,or e" and reject it
    if (e.keyCode === 45 || e.keyCode === 101 || e.keyCode == 43) {
      e.preventDefault()
    }

    // On all other inputs don't allow decimal
    if (inputId !== 'bill-input' && e.keyCode === 46) {
      e.preventDefault()
    }
  })
)

// Bill Input event listener on blur add padding
billInput.addEventListener('blur', getAndPadBill)

// On click calculate bill tip total
percentButtons.forEach((button) =>
  button.addEventListener('click', (e) => {
    percentButtonHandler(e)
  })
)

// If custom tip changes calculate bill tip total
customPercent.addEventListener('input', getCustomPercent)

// If guest count changes calculate new bill tip total
guestCount.addEventListener('input', getGuestCount)

// Reset the calclator
resetButton.addEventListener('click', resetInputs)
