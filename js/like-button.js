angular.module('like-button', [])
.directive('likeButton', function() {
	return {
		restrict: 'E',
		scope: { // @ or = values
			startingValue: '=?startingValue' // starting-value on front end
		},
	controller: ['$scope', function($scope){
		$scope.value = $scope.startingValue ? $scope.startingValue : 0
		$scope.increaseCount = function() {
			$scope.value += 1
		}
	}],
	replace: true,
	template: '<button class="btn btn-success" ng-click="increaseCount()" label="">  <span class="glyphicon glyphicon-thumbs-up"></span> {{value}} </button>'
	}
})