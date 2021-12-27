const bill = document.getElementById("bill");
const buttons = document.querySelectorAll("#percent-buttons");
const custumPercent = document.getElementById("custom-percent");
const personCount = document.getElementById("person-count");
const tipPerPerson = document.getElementById("tip-per-person");
const totalPerperson = document.getElementById("total-per-person");
const resetButton = document.getElementById("reset-button");

const DEFAULT_PERSON_COUNT = 1;

const setBillValue = () => {
  return console.log(bill.value);
};

const clickHandler = (e) => {
  //   let clickedButtonValue = e.target.attributes["data-value"].value;
  let selectedButton = e.target;
  buttons.forEach((button) => {
    button.classList.remove("active");
    if (button.value == selectedButton.value) {
      selectedButton.classList.add("active");
    }
  });

  //   personCount.value = ""

  calculateResult(selectedButton);
};

const calculateResult = (b) => {
  console.log(b.attributes["data-value"].value);
  //  totalPerperson.innerHTML = `$${}`

  let currentCount = setPersonCount();
  if (currentCount) {
    document.querySelector(".warning").style.visibility = "hidden";
  } else if (!currentCount || currentCount == 0) {
    personCount.classList.add("border-warning")
    // personCount.style.border = "1px solid #c9775d"
    document.querySelector(".warning").style.visibility = "visible";
    currentCount = DEFAULT_PERSON_COUNT;
  }
  console.log("her");
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
