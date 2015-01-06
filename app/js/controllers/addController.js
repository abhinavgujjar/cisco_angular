//min safed using ng-annotate.

function addController( $scope, dataService,  $location) {

	$scope.addHotel = function(hotel) {
		var newHotel = angular.copy(hotel);
		dataService.addHotel(newHotel);

		$location.url('listing');
	}
}
addController.$inject = ["$scope", "dataService", "$location"];
app.controller('addController',addController);
