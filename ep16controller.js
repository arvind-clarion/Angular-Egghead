app = angular.module('choreApp', [])

app.controller('ChoreCtrl', function($scope){
  $scope.logChore = function(chore){
    alert(chore + "I am done")
  }
})
app.directive('kid', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      done:"&"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: "<input type='text' ng-model='chore'>" +
                     "{{chore}}" +
                     "<div class='button' ng-click='done({chore:chore})'> I'm done </div>"
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    // link: function($scope, iElm, iAttrs, controller) {

    // }
  };
});