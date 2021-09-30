var bill = document.querySelector("#bill-amount");

var cash = document.querySelector("#cash");

var check = document.querySelector("#check");

var noofnotes = document.querySelectorAll(".noofnotes");

var disp = document.querySelector("#display");

var rt = 0;
var nd = 0;

const notes = [2000, 500, 100, 20, 10, 5, 1];

function ValiditeInputs(val1, val2) {
  if (
    val2 >= val1 &&
    val1 !== "" &&
    val2 !== "" &&
    !isNaN(val1) &&
    !isNaN(val2) &&
    val1 >= 0 &&
    val2 >= 0
  )
    return true;
  else return false;
}

function returnNotes(bill, cash) {
  rt = cash - bill;

  for (var i = 0; i < notes.length; i++) {
    nd = Math.trunc(rt / notes[i]);
    rt = rt % notes[i];
    //use nd to change and log data
    noofnotes[i].innerHTML = nd;
  }
  disp.innerHTML = cash - bill;
}

function calculateChange() {
  if (ValiditeInputs(bill.value, cash.value)) {
    returnNotes(bill.value, cash.value);
  } else {
    disp.innerHTML = "Invalid input, please try again";
  }
}

check.addEventListener("click", calculateChange);
