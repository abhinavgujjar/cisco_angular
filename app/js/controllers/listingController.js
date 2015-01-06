
app.controller('listingController', function($scope, dataService) {
	$scope.hotels = dataService.hotels;

	$scope.itemsToDisplay = 50;

	
});
