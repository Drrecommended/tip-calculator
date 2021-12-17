const bill = document.getElementById("bill-amount");
const headCount = document.getElementById("head-count");

const totalAmount = document.getElementById("total-amount");
const tipAmount = document.getElementById("tip-amount");





let DEFAULTHEADCOUNT = 1;



















// const formatBill = (event) => {
//   let newBill = billAmount.value
//   console.log(newBill,typeof(newBill))


//   let parsedBill = parseInt(newBill).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
//   console.log(parsedBill, typeof(parsedBill))

//   billAmount.value = parsedBill.toString()
//   console.log(billAmount.value)

 
//   let formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   billAmount.value = newBill.toString()


//   if(newBill > 0 && newBill != 'e', 'E', ".", "+", "-") {
//     newBill = newBill.toString()
    
//     formatter.format(newBill)
//     console.log(newBill)
//     billAmount.value = parsedBill
//     console.log("heyhey")
//     return
//   }

//   console.log('hey')
//   // bill = formatter.format(bill);
//   // console.log(bill)
//   // if(bill > 0) {
//   //   console.log('tis')
//   // }
//   // console.log(bill)
// };

const getAndFormatBillAmount = () => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let bill = billAmount.value;
  formatter.format(bill);
  console.log(bill);
  outoutResult(bill);
};

const getHeadCount = () => {
  console.log("ere");
};

const getPercent = () => {
  let headCount = headCount.value;
};

const calculateResult = () => {};

const outoutResult = (bill) => {
  billAmount.value = bill;
  totalAmount.innerHTML = `$${bill}`;
};

// console.log(billAmount)
// billAmount.addEventlister("change", () => {
//   return billAmount
// });

// const writeDescription = () => {
//   billTotal = billAmount.value;
//   console.log(billTotal);
// };
