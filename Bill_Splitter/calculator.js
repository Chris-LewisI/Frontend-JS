//Function to calculate and display the price each person must pay at checkout.
function  calculate() {
    var billAmount = (document.getElementById("billAmount").value) * 1.0;
    var tipPercent = (document.getElementById("tipPercent").value) / 100;
    var numOfPeople = (document.getElementById("numOfPeople").value) * 1.0;
    /*multiplied by 1.0 to turn from an integer into a double so that it can do operations with 
    the tip percentage.*/

    //If the user inputs incorrect values
    if (billAmount === "" || billAmount == 0) {
        alert("Please enter a bill amount.");
        return;
    }

    if (numOfPeople === "" || numOfPeople == 0) {
        alert("Please enter the number of people paying.");
        return;
    }

    //calculates price per person
    var eachCost = ((billAmount * tipPercent) + billAmount) / numOfPeople;

    //leaves two decimal places.
    eachCost = Math.round(eachCost * 100) / 100;
    eachCost = eachCost.toFixed(2);

    //displays amount
    document.getElementById("eachCost").style.display = "block";
    document.getElementById("cost").innerHTML = eachCost;
}

//enables "Calculate" button
document.getElementById("calculate").onclick = function() {
    calculate();
};