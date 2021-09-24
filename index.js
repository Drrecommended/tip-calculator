const fivePercent = document.getElementById('five').innerText
const customPercent = document.getElementById('custom').value
console.log(customPercent)
//Check that key press is a number
const checkForNum = (e) => {
  let char = String.fromCharCode(e.which);
  if (!/[0-9]/.test(char)) {
    e.preventDefault();
  } 
};


