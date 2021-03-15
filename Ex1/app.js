(function () {
'use strict';
  angular.module('myFirstApp',[])

  .controller('MyFirstController',function ($scope) {
$scope.name =  "";
$scope.totalValue = 0;
$scope.displayValue = function () {
  var totalNameValue = calcValue($scope.name);
  $scope.totalValue = totalNameValue;
}
function calcValue(string) {
  var newValue = 0;
for (var i = 0; i < string.length; i++) {
  newValue += string.charCodeAt(i);
}
return newValue;
}
  });
})();
