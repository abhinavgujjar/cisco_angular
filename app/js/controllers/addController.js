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

	var index = 0;


	$scope.next = function() {
		if (index >= $scope.images.length) {
			index = 0;
		} else {

			index++;
		}
		$scope.displayImage = $scope.images[index];
	}

	$scope.prev = function() {

		index--;
		$scope.displayImage = $scope.images[index];
	}

	$scope.images = ['goldenpalms.jpg', 'clarks-exotica-resort.jpg', 'the-elanza-hotel.jpg', 'ramada.jpg', 'ibis.jpg', 'oberoi.jpg'];

	$scope.displayImage = $scope.images[index];



}
addController.$inject = ["$scope", "dataService", "$location"];
app.controller('addController', addController);