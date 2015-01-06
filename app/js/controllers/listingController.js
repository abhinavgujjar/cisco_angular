

app.controller('listingController', function($scope, dataService, textLimit) {
	$scope.hotels = dataService.hotels;

	$scope.itemsToDisplay = 50;

	$scope.textLimit = textLimit;

});