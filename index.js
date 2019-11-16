function calculateTip() {

var billEntered = document.querySelector(".bill").value;
var serviceQuality = document.querySelector(".service").value;
var peopleEntered = document.querySelector(".amountOfPeople").value;


if (billEntered === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
}

//calculate tip
var totalTip = (billEntered * serviceQuality) / peopleEntered;

//round to two decimal places
totalTip = Math.round(totalTip * 100) / 100;

//always puts two digits after decimal point 
totalTip = totalTip.toFixed(2);
//Display the tip
document.getElementsByTagName("h4")[0].innerHTML = "Your total tip is : " + "£" + totalTip;
}


//when button clicked call function
document.getElementsByTagName("button")[0].onclick = function () {
    calculateTip();
};