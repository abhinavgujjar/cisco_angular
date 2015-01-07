app.controller('listingController', function($scope, $rootScope, $http, $interval, dataService, textLimit, $interval) {
	// $interval(function(){
	// 	dataService.ticks.number ++
	// }, 500);

	$interval(function() {
		dataService.ticks.number++
	}, 500);

	$scope.ticks = dataService.ticks;

	dataService.getHotels(function(hotels) {
		$scope.hotels = hotels;
	})

	$scope.itemsToDisplay = 50;

	$scope.textLimit = textLimit;

	$scope.$on('refresh', function(){
		// $scope.refreshTime = new Date();
		// dataService.getHotels(function(hotels) {
		// 	$scope.hotels = hotels;
		// });

	});

});