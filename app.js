//
var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded() {
  document.getElementById('name').addEventListener('keyup',keyUp);
}

function keyUp(event) {
  caculateNumericOutput();
}

function caculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {totalNameValue +=
    totalNameValue += student.name.charCodeAt(i)
  }
  var output = "Total Numeric value of person's name is "+ totalNameValue;
  document.getElementById('output').innerText = output;
}
