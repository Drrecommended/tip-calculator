const bill = document.getElementById("bill");
const buttons = document.querySelectorAll("#percent-buttons");
const custumPercent = document.getElementById("custom-percent");
const personCount = document.getElementById("person-count");
const tipPerPerson = document.getElementById("tip-per-person");
const totalPerperson = document.getElementById("total-per-person");
const resetButton = document.getElementById("reset-button");
const userInputs = document.querySelectorAll("input");
const warningLabel = document.querySelector(".warning");

const DEFAULT_PERSON_COUNT = 1;

let n = "111111111"

console.log()
//Functions to grab the bill value
const getBillValue = () => {
  console.log(typeof +bill.value)
  return +bill.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const getCustomPercent = () => {
  console.log(custumPercent.value)
  return custumPercent.value;
};

const getPersonCount = () => {
  return personCount.value;
};

//Function to update the UI
const updateUI = (pCount) => {
  if (pCount) {
    warningLabel.style.visibility = "hidden";
  } else if (!pCount || pCount == 0) {
    personCount.classList.add("border-warning");
    document.querySelector(".warning").style.visibility = "visible";
    pCount = DEFAULT_PERSON_COUNT;
  }
};

//Percent button click handler
const percentButtonHandler = (e) => {
  let selectedButton = e.target;
  buttons.forEach((button) => {
    button.classList.remove("active");
    if (button.value == selectedButton.value) {
      selectedButton.classList.add("active");
    }
  });
  calculateResult(selectedButton);
};

const displayResult = (total, percent) => {
  tipPerPerson.innerHTML = `$${((100 * percent) / total).toFixed()}`
  totalPerperson.innerHTML = `$${total}`
}



const calculateResult = () => {
  let currentBillAmount = getBillValue();
  let currentCustomPercent = getCustomPercent();
  let currentPersonCount = getPersonCount();
  if (currentBillAmount === "" || currentCustomPercent === 0) {
    return;
  }
  let total = (currentBillAmount * currentCustomPercent) / currentPersonCount;
  console.log(total)
  displayResult(total, currentCustomPercent)
  updateUI(currentPersonCount);
};

const resetInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
  for (const button of buttons) {
    button.classList.remove("active");
  }
};

bill.addEventListener("input", getBillValue);
buttons.forEach((button) => {
  button.addEventListener("click", percentButtonHandler);
});
custumPercent.addEventListener("input", getCustomPercent);
personCount.addEventListener("input", getPersonCount);
resetButton.addEventListener("click", resetInputs);
