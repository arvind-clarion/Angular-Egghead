app = angular.module('app', []);

app.directive('zippy',  function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      title: '@'
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: '<div><h3 ng-click="toggleContent()">{{title}}</h3 ng-show="isContentVisable">Hello world</div>',
    // templateUrl: '',
    // replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function(scope) {
      scope.isContentVisable = false
      scope.toggleContent = function(){
        scope.isContentVisable = !scope.isContentVisable;
      }
    }
  };
});