app = angular.module("phoneApp", []);

app.controller('AppCtrl', function($scope){
  $scope.callHome = function (argument) {
    alert('called Home');
  }
})

app.directive('phone', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      dial: "&"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    template: "<div class='button' ng-click='dial()'>Call Home! </div><input type='text' ng-model='flavor'>",
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    // link: function(scope, iElm, iAttrs, controller) {
    //   scope.flavor = iAttrs.flavor;
    // }
  };
});


