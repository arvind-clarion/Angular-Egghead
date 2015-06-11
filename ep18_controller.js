app = angular.module("drinkApp", []);

app.controller('AppCtrl', function($scope){
  $scope.ctrlFlavor = 'blackbarry'
})

app.directive('drink', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      flavor: "="
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    template: "<input type='text' ng-model='flavor'>",
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    // link: function(scope, iElm, iAttrs, controller) {
    //   scope.flavor = iAttrs.flavor;
    // }
  };
});


