let quantity = 0;

const showBtn = document.getElementById("showBtn");
const add1Btn = document.getElementById("add1Btn");
const add2Btn = document.getElementById("add2Btn");
const add3Btn = document.getElementById("add3Btn");
const resetBtn = document.getElementById("resetBtn");

const output = document.getElementById("output");

function showQuantity() {
  output.textContent = "Quantity: " + quantity;
}

function add1() {
  quantity += 1;
  
}

function add2() {
  quantity += 2;
  
}

function add3() {
  quantity += 3;
  
}

function resetCart() {
  quantity = 0;
  
}

showBtn.onclick = showQuantity;
add1Btn.onclick = add1;
add2Btn.onclick = add2;
add3Btn.onclick = add3;
resetBtn.onclick = resetCart;