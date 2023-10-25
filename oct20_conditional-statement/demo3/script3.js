let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    let billValue = parseFloat(document.getElementById("bill-value").value);
    // console.log(billValue);
    // console.log(typeof(billValue));
    // parseFloat : take string and turn it into a number to calculate

    if (billValue >= 4000000){
        alert(`You got a discount of ${billValue * 0.2} VND for your order!`);
// new total after discount applied
        billValue = billValue * 0.8; 
        // another way: billValue *= 0.9;
    }
// if bac thang => else if x number of conditions, last/final condition: else 
    else if (billValue >= 2500000){
        alert(`You got a discount of ${billValue * 0.15} VND for your order!`);
        billValue = billValue * 0.85; 
    }

    else if (billValue >= 1500000){
        alert(`You got a discount of ${200000} VND for your order!`);
        billValue -= 200000; 
    

    }
    
    else {
        alert("There is no discount");
    }

        let infoElem = document.getElementById("info");
        infoElem.innerText = `Your total is ${billValue}`;
    
});