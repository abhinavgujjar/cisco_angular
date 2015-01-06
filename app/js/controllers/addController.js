
app.controller('addController', function($scope, dataService) {

	$scope.addHotel = function(hotel) {
			var newHotel = angular.copy(hotel);
			dataService.addHotel(newHotel);
		}


});