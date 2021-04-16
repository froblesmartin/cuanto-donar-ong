function calculate() {

  var quantity = Number(document.getElementById("quantity").value);
  var result;
  var mode = document.getElementById("mode");
  var multiplier = mode.value == "monthly" ? 12 : 1;
  var modeResponse = mode.value == "monthly" ? "al mes" : "al año";
  var deduction

  // Corner cases
  if (isNaN(quantity)) {
    result = "El valor no es un número";
  } else if (quantity < 0) {
    result = "El valor no puede ser negativo";
  } else if (quantity == 0) {
    result = "0 €";
  }

  if (result != null) {
    document.getElementById("result").innerHTML = result;
    return (0)
  }

  // Happy path
  quantity = quantity * multiplier;

  if (quantity > 30) {
    result = Number((quantity + 67.5) / 0.65);
  } else {
    result = Number(quantity / 0.2);
  }

  deduction = (result - quantity) / multiplier;

  result = result / multiplier;

  document.getElementById("result").innerHTML = result.toFixed(2) + "€ " + modeResponse;

  document.getElementById("deduction").innerHTML = "Nos devuelven " + deduction.toFixed(2) + "€ " + modeResponse;

  return (0)
}
