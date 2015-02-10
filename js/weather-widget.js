angular.module('weather-widget', [])
.directive('weatherWidget', function() {
	return {
		restrict: 'E',
		scope: {
			location: '@'
		},

	controller: ['$scope', '$element', '$http', function($scope, $element, $http) {
		$scope.$watch('location', function(){
			$scope.wTemp = false;
			if(!$scope.location) return;
			var req = { // defaults to 'GET'
			   url: "http://api.openweathermap.org/data/2.5/weather",
			   params: {
			     q: $scope.location,
			     units: 'imperial'
			   }
			 }

			 $http(req).success(function(data) {
			 	$scope.wDescription = data.weather[0].description
			 	$scope.wTemp = data.main.temp
			 	$scope.wLocation = data.name
			 	console.log(data)
			 	// $scope.wTemp = true;
			 })
		})
	}],
	replace: true,
	// template:'<button class="btn btn-info" ng-click="getWeather()">&#9729; Click for Seattle Weather: {{yourWeather}} &#9728;</button>'
	template: '<h2 class="well">{{wLocation}}: {{wDescription}} with a temperature of {{wTemp}}&#176;</h2>'
	}
})