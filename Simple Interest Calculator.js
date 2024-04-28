let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let resetEl = document.getElementById("reset-btn");
let principalEl = document.getElementById("principal");
let rateEl = document.getElementById("rate");
let timeEl = document.getElementById("time");
let errorEl = document.getElementById("error");
let rightEl = document.getElementById("containerRight");

if (principalEl.value === '' || rateEl.value === '' || timeEl.value === '') {
    rightEl.style.display = 'none';
} else if (principalEl.value < 1 || rateEl.value < 1 || timeEl.value < 1) {
    rightEl.style.display = 'none';
}
let calculate = () => {
    if (principalEl.value === '' || rateEl.value === '' || timeEl.value === '') {
        errorEl.textContent = "Please Enter the Input";
        rightEl.style.display = 'none';
        return;
    } else if (principalEl.value < 1 || rateEl.value < 1 || timeEl.value < 1) {
        errorEl.textContent = "Please Enter the Valid Input";
        rightEl.style.display = 'none';
        return;
    }
    let p = Number(principalEl.value);
    let r = Number(rateEl.value);
    let t = Number(timeEl.value);
    let duration = document.getElementById("duration").value;
    let simpleInterest = 0;
    if (duration === "year") {
        simpleInterest += (p * r * t) / 100;
    } else if (duration === "month") {
        simpleInterest += (p * r * t) / 1200;
    } else {
        simpleInterest += (p * r * t) / 3650;
    }

    let amount = p + simpleInterest;

    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
    rightEl.style.display = 'block';
};
calculateBtn.addEventListener("click", calculate);

resetEl.onclick = function() {
    principalEl.value = '';
    rateEl.value = '';
    timeEl.value = '';
    errorEl.textContent = '';
    rightEl.style.display = 'none';
};