function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
  var bmi = weight / (height * height);

  var resultElement = document.getElementById('result');
  if (!isNaN(bmi)) {
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
  } else {
    resultElement.innerHTML = 'Please enter valid weight and height values.';
  }
}
