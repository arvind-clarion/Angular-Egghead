var app = angular.module('twitterApp', [])

app.controller('AppCtrl', function($scope){
  $scope.loadeMoreTweets = function(){
    alert('Tweet is loading');
  };

  $scope.deleteTweets = function(){
    alert('Tweet is deleting');
  };
})

.directive('enter', function(){
  // Runs during compile
  return function (scope, element, attrs){
    element.bind("mouseenter", function() {
      scope.$apply(attrs.enter);
    }).bind("mouseleave", function(){
      scope.$apply("deleteTweets()");
    })
  }
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
   // link: function($scope, iElm, iAttrs, controller) {

   /* }
  };*/
});