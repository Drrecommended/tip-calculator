const billTotal = document.getElementById("bill-amount");
const numOfPeople = document.getElementById("people-count");
const customPercent = document.getElementById("custom");

const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twenty-five");
const fiftyPercent = document.getElementById("fifty");

const tipTotal = document.getElementById("tip-amount");
const total = document.getElementById("total-amount");

//output tip per person
const outputTipResult = (tipAmount) => {
  tipTotal.textContent = tipAmount;
};
//output bill total per person
const outputBillResult = (billAmount) => {
  total.textContent = billAmount;
};

// (function(el){el.value=parseFloat(el.value).toFixed(2);})(this)