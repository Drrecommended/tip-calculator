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
  //   let clickedButtonValue = e.target.attributes["data-value"].value;
  let selectedButton = e.target;
  buttons.forEach((button) => {
    button.classList.remove('active')
    if(button.value == selectedButton.value) {
        selectedButton.classList.add('active')
    }

    
  });

  if (setPersonCount >= 0) {
    console.log("this is good");
  }
};

const setCustomPercent = () => {
  console.log(custumPercent.value);
};

const setPersonCount = () => {
  return personCount.value;
};

const resetHandler = () => {
  console.log("clicked");
};

bill.addEventListener("input", setBillValue);
buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});
custumPercent.addEventListener("input", setCustomPercent);
personCount.addEventListener("input", setPersonCount);
resetButton.addEventListener("click", resetHandler);
