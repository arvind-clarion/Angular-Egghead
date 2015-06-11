// Initialize object with angular app
var myApp = angular.module('myApp', []);

// Bind object with controller
myApp.controller('MyController', function ($scope) {
  $scope.my_variable = {message: "My First controller testing"}
})
// created filter to reverse the content it is globle method now you can use it in nay controller of this class
.filter('reverse', function() {
  return function(text) {
     return text.split("").reverse().join();
  };
})
.factory('Avengers', function(){
   var Avengers = {}
   Avengers.cast =[
                  {name: "Arvind", last_name: "Vyas"},
                  {name: "Parth", last_name: "Mewada"},
                  {name: "Arpit", last_name: "Vaishnav"},
                  {name: "Kaushal", last_name: "Sharma"},
                  {name: "Anand", last_name: "Thirpathi"},
                  {name: "Ashok", last_name: "Agrawal"},
                  {name: "Prashant", last_name: "Tiwari"},
                  {name: "Sonam", last_name: "Vora"},
                  {name: "Sapna", last_name: "Prajapati"}]
   return Avengers
})
.factory('Data', function(){
   return {message: "I am data from service"}
})
.controller('FirstCtrl', function($scope, Data){
  $scope.my_variable = Data;

})
.controller('SecondCtrl', function($scope, Data){
  $scope.my_variable = Data;
  // You can not use this method for other controller
  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join();
  }
})
.controller('ThirdCtrl', function($scope, Data){
  $scope.my_variable = Data;
})
.controller('AvengersCtrl', function($scope, Avengers){
  $scope.avengers = Avengers;
})
// directive

.directive("superman", function(){
   return {
     restrict: "E",
     template: "<div>Super man is saving clarion</div>"
   }
})

.directive("supermanone", function(){
  return {
    restrict: "A",
    link: function(){
      alert("I am superman");

    }
  }
})

.directive("supermancomment", function(){
  return {
    restrict: "M",
    link: function(){
      alert("Look at me in comment");

    }
  }
});


// Initialize object for second angular app
var behaviorApp = angular.module('behaviorApp', []);

behaviorApp.directive("enter", function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      console.log("I am inside of you");
    })
  }
})
.directive("leave", function(){
  return function(scope, element){
    element.bind("mouseleave", function(){
      console.log("I am outside of you");
    })
  }
})


.directive("enter1", function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      element.addClass(attrs.enter1);
    })
  }
})
.directive("leave1", function(){
  return function(scope, element, attrs){
    element.bind("mouseleave", function(){
    element.removeClass(attrs.enter1);
    })
  }
});
