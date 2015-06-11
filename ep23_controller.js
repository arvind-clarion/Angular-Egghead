app = angular.module('phoneApp', []);
var ArvindVyas = {}
ArvindVyas.controllers = {}

ArvindVyas.controllers.AppCtrl =  function($scope){
  this.sayHello = function() {
    alert("I am in clarion");
  }
  return $scope.AppCtrl  = this;
};


ArvindVyas.directives = {}

ArvindVyas.directives.panel = function(){
  return{
    restrict: 'E'
  }
};


app.controller(ArvindVyas.controllers);

app.directive(ArvindVyas.directives);