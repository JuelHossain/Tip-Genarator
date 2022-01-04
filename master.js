'use Strict';
let bill = document.getElementById('bill').value;
let percent = document.getElementById('tipPercent');
let amount = document.getElementById('tipAmount');
let output = document.getElementById('totalAmount');
output.innerHTML = bill;

percent.oninput = () => {
    percent.value + '%';
    amount.value = (bill / 100) * percent.value;
    return output.innerHTML = Number(bill) + Number(amount.value);
}

amount.oninput = () => {
    percent.value = (bill * amount.value) / 10000;
    return output.innerHTML = Number(bill) + Number(amount.value);
}