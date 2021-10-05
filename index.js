


//Check that key press is a number
const checkForNum = (e) => {
  let char = String.fromCharCode(e.which);
  if (!/[0-9]/.test(char)) {
    e.preventDefault();
  }
};

const getBillTotal = () => {
  console.log(billTotal.value)
}



// fivePercent.addEventListener("click", grabPercentage);
