// Initialize object with angular app
var myApp = angular.module('myApp', []);

// Bind object with controller
myApp.controller('MyController', function ($scope) {
  $scope.my_variable = {message: "My First controller testing"}
})
.controller('FirstCtrl', function($scope){

})
.controller('SecondCtrl', function($scope){

})
.controller('ThirdCtrl', function($scope){

})
