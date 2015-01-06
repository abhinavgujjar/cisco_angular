app.controller('listingController', function($scope, dataService, textLimit, $interval) {
	// $interval(function(){
	// 	dataService.ticks.number ++
	// }, 500);

	$interval(function() {
		dataService.ticks.number++
	}, 500);

	$scope.ticks = dataService.ticks;

	$scope.hotels = dataService.hotels;

	$scope.itemsToDisplay = 50;

	$scope.textLimit = textLimit;

});