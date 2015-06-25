// Jquery element and compile function

app = angular.module('app', [])

app.directive('dumbPassword', function(){
  var validElement = angular.element("<div>{{model.input}}</div>");
  this.link = function(scope) {
    scope.$watch('model.input', function(value){
      if(value === 'password'){
        validElement.toggleClass("alert-box alert");
      }
    })

  }
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: "<div>\n <input type='text', ng-model='model.input'></div>",
    // templateUrl: '',
    replace: true,
    // transclude: true,
    compile: function(tElement){
      tElement.append(validElement);

       return link;
    },

  };
});