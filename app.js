(function () {
'use strict';
  angular.module('myFirstApp',[])

  .controller('MyFirstController',function ($scope) {
$scope.name =  "Adam";
$scope.sayHello = function () {
  return "Hello Coursera!";
}
  });
})();
