var todoApp = angular.module('TodoApp', ['like-button','weather-widget','ngAnimate']);


todoApp.run(function() {
	console.log('App has started')
})

todoApp.controller('TodoList', ['$scope', function($scope) {
	$scope.items = [];
	$scope.items.push({done:false, name:"go running"})
	$scope.items.push({done:false, name:"eat a human heart"})
	$scope.items.push({done:false, name:"lose 30 pounds"})
	$scope.items.push({done:false, name:"pet a pokemon"})
	$scope.items.push({done:false, name:"steal a puppy"})
	$scope.newItem = "";
	$scope.weatherCities = [];


	$scope.removeItem = function(myItemIndex) {
		$scope.items.splice(myItemIndex,1)
	}
	$scope.getData = function() {
		console.log($scope.items)
	}

	$scope.addItem = function() {
		$scope.items.push({done:false,name:$scope.newItem})
		$scope.newItem=""
	}
	$scope.move = function(currentIndex,direction) {
		var targetIndex = currentIndex + direction;
		if(targetIndex < 0 || targetIndex >= $scope.items.length) {
			alert('no!')
			return;
		}
		var tempItem = $scope.items[currentIndex];
		$scope.items[currentIndex] = $scope.items[targetIndex];
		$scope.items[targetIndex] = tempItem
	}
	console.log('Controller is running')
}])