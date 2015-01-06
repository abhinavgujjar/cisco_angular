//min safed using ng-annotate.

function addController($scope, dataService, $location) {

	$scope.addHotel = function(hotel) {

		if ($scope.hotelForm.$invalid) {
			alert('invalid!!')
		} else {
			var newHotel = angular.copy(hotel);
			dataService.addHotel(newHotel);

			$location.url('listing');
		}
	}

	$scope.images = ['goldenpalms.jpg', 'clarks-exotica', 'the-elanza', 'ramada.jpg', 'ibis.jpg', 'oberoi.jpg'];
}
addController.$inject = ["$scope", "dataService", "$location"];
app.controller('addController', addController);