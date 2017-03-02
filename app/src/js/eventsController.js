app.controller('EventsController', ['$scope', function($scope) {
   console.log("hello events");
   $scope.events = [{eventType:"Vietnam Veterans trip", date:"June 5, 2017"},{eventType:"World War II and Korean War Veterans trip", date:"October 2, 2017"}];
}])