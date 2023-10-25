let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    let billValue = parseFloat(document.getElementById("bill-value").value);
    // console.log(billValue);
    // console.log(typeof(billValue));
    // parseFloat : take string and turn it into a number to calculate

    if (billValue >= 2000000){
        alert(`You got a discount of ${billValue * 0.1} VND for your order!`);
// new total after discount applied
        billValue = billValue * 0.9; 
        // another way: billValue *= 0.9;
    }

        let infoElem = document.getElementById("info");
        infoElem.innerText = `Your total is ${billValue}`;
    
});