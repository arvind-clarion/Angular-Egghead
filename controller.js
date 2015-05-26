// Initialize object with angular app
var myApp = angular.module('myApp', []);

// Bind object with controller
myApp.controller('MyController', function ($scope) {
  $scope.my_variable = {message: "My First controller testing"}
})
.factory('Data', function(){
   return {message: "I am data from service"}
})
.controller('FirstCtrl', function($scope, Data){
  $scope.my_variable = Data;

})
.controller('SecondCtrl', function($scope, Data){
  $scope.my_variable = Data;
  // You can not use this method for other controller
  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join();
  }
})
.controller('ThirdCtrl', function($scope, Data){
  $scope.my_variable = Data;

})
