app = angular.module('phoneApp', [])

app.controller('AppCtrl', function($scope){
  $scope.leaveVoiceemail = function(number, message){
    alert('number' + number + "Said"+ message)
  }
})
app.directive('phone', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    scope: {
      number:"@",
      network:"=",
      makeCall:"&"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    template: "<div class='panel'>Number: {{number}} Network:<select ng-model='network' ng-options='net for net in networks'></select>"
               + "<input type='text' ng-model='value'>" +
                     "<div class='button' ng-click='makeCall({number:number, message:value})'> I'm done </div></div>",
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function(scope) {
      scope.networks = ['Versions', 'AT&T', 'Sprint'];
      scope.network = scope.networks[0]

    }
  };
});