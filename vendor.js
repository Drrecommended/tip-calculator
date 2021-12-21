const bill = document.getElementById("bill");
const buttons = document.querySelectorAll("#percent-buttons");
const custumPercent = document.getElementById("custom-percent");
const personCount = document.getElementById("person-count");
const tipPerPerson = document.getElementById("tip-per-person");
const totalPerperson = document.getElementById("total-per-person");
const resetButton = document.getElementById("reset-button");

const setBillValue = () => {
  return console.log(bill.value);
};

const clickHandler = (e) => {
  console.log(e.target);
  
};

const setCustomPercent = () => {
  console.log(custumPercent.value);
};

const setPersonCount = () => {
  return console.log(personCount.value);
};

const resetHandler = () => {
    console.log('clicked')
}


bill.addEventListener("input", setBillValue);
buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});
custumPercent.addEventListener("input", setCustomPercent);
personCount.addEventListener('input', setPersonCount)
resetButton.addEventListener('click', resetHandler)