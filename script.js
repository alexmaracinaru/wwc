const calculateIt = () => {
  let firstNumber = parseFloat(document.querySelector("#firstnumber").value);
  let secondNumber = parseFloat(document.querySelector("#secondnumber").value);
  const operator = document.querySelector("#operator").value;
  let theResult;
  if (operator === "add") {
    theResult = firstNumber + secondNumber;
  } else if (operator === "sub") {
    theResult = firstNumber - secondNumber;
  } else if (operator === "mul") {
    theResult = firstNumber * secondNumber;
  } else if (operator === "div") {
    theResult = firstNumber / secondNumber;
  }
  //inserted an html element (list item - li) into the results
  document.querySelector("#results").innerHTML += `<li>${theResult}</li>`;
  document.querySelector('#firstnumber').value = theResult;
};
document.querySelector("#calculate").addEventListener("click", calculateIt);
const roundIt = () => {
  const roundedNumber = document.querySelector("#doround").checked;
  roundedNumber = true;
  document.querySelector("#doround").addEventListener("click", roundIt);
};
const results = document.querySelector("#results");
results.scrollTop = results.scrollHeight;
//document.querySelector("#results").scrollTo(0, 1000000);
// the code above could eventually cause problems if the number gets higher than the one specified
document.querySelector("#clear").addEventListener("click", () => {
        //document.getElementById("results").reset();
        //document.querySelector("#results").reset();
        document.getElementById("results").innerHTML='';
    });
  