var app = angular.module('app', [])

app.run(function($templateCache){
  $templateCache.put("zippy-ep28.html",'<div><h3 ng-click="toggleContent()">{{title}}</h3></div><div ng-show="isContentVisible" ng-transclude></div>');
})
app.directive('zippy', function($templateCache){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      title: "@"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'zippy-ep28.html',
    // replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function(scope) {
      scope.isContentVisible = false;
      scope.toggleContent = function(){
         scope.isContentVisible = !scope.isContentVisible;
      }

    }
  };
});