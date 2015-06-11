app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope){
  this.sayHello = function() {
    alert("I am in clarion");
  }
  return $scope.AppCtrl  = this;
});