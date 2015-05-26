// Initialize object with angular app
var myApp = angular.module('myApp', []);

// Bind object with controller
myApp.controller('MyController', function ($scope) {
  $scope.my_variable = {message: "My First controller testing"}
})
// created filter to reverse the content it is globle method now you can use it in nay controller of this class
.filter('reverse', function() {
  return function(text) {
     return text.split("").reverse().join();
  };
})
.factory('Avengers', function(){
   var Avengers = {}
   Avengers.cast =[
                  {name: "Arvind1", last_name: "Vyas1"},
                  {name: "Arvind3", last_name: "Vyas2"},
                  {name: "Arvind4", last_name: "Vyas3"},
                  {name: "Arvind5", last_name: "Vyas4"},
                  {name: "Arvind11", last_name: "Vyas5"},
                  {name: "Arvind7", last_name: "Vyas7"},
                  {name: "Arvind8", last_name: "Vyas8"},
                  {name: "Arvind9", last_name: "Vyas9"},
                  {name: "Arvind12", last_name: "Vyas11"}]
   return Avengers
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
.controller('AvengersCtrl', function($scope, Avengers){
  $scope.avengers = Avengers;
})
