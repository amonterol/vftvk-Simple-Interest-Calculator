/*This function obtains the data of the interest rate selected in the slider by the user
Input> rate: user rate selecction
Output>show rate selected
*/
function fnRateSelection() {
  var rateSelected = document.getElementById("rate").value;
  document.getElementById("interestRateUsed").innerHTML =
    " " + rateSelected + "%";
}

/*This function converts the number of years of the calculation to the corresponding year
Input> years: Time Period involved in years
Output>exactyear in which the interest calculation ends
*/
function fnChangeYearPresentation(years) {
  var date = new Date();
  var y = date.getFullYear() + parseInt(years);
  return y;
}

/*This function shows the sentence with the result of the calculation
Input> data: data in form of array
Output> shows the sentence with the result of the calculation
*/
function fnShowResult(data) {
  document.getElementById("text1").innerHTML = "If you deposit ";
  document.getElementById("data1").innerHTML = data[0] + ",";
  document.getElementById("text2").innerHTML = "at an interest rate of  ";
  document.getElementById("data2").innerHTML = data[1] + "%.";
  document.getElementById("text3").innerHTML = "You will receive an amount of ";
  document.getElementById("data3").innerHTML = data[2] + ",";
  document.getElementById("text4").innerHTML = "in the year ";
  document.getElementById("data4").innerHTML = data[3];
}

/*This function calculate simple interest and shows the calculation
Input>
principal: amount of money to invest
rate: annual rate interest
years: Time Period involved in years
Output>
Amount of interest to received
*/
function compute() {
  principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    rate = document.getElementById("rate").value;
    years = document.getElementById("years-select").value;
    interest = (principal * rate * years) / 100;

    var year = fnChangeYearPresentation(years);

    var data = [principal, rate, interest, year];
    fnShowResult(data);
  }
}
