const defaultBillTotal = 0;
const defaultTipAmount = 0;
const defaultPeopleCount = 0;
let currentBillTotal = defaultBillTotal;
let currrentTipTotal = defaultTipAmount;
let currentPeopleCount = defaultPeopleCount;

const validateForm = () => {
  let peopleCount = numOfPeople.value;
  if(peopleCount === "" || peopleCount < 0) {
    alert("fix this")
  }
};

const getBillTotal = () => {
  console.log(billTotal.value);
};

billTotal.addEventListener("change", getBillTotal, validateForm);
