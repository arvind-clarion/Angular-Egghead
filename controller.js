var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
  $scope.my_variable = {message: "My First controller testing"}
});