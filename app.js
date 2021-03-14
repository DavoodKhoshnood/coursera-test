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
}
