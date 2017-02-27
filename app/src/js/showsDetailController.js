app.controller('ShowsDetailController', ['$scope','$stateParams', 'ShowsService', function($scope, $stateParams, ShowsService) {
        $scope.selectedShow = ShowsService.find($stateParams.id);
 }]);