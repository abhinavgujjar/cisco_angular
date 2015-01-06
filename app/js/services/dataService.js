app.factory('dataService', function($http, $timeout) {


	function addHotel(hotel) {
		if (!hotel.pic) {
			hotel.pic = 'unknown.jpg';
		}

		hotels.push(hotel);

	}

	var ticks = {
		number: 0
	};

	return {
		getHotels: function(callback) {

			$timeout(function() {
				var hotels;
				var promise = $http({
					method: 'GET',
					url: 'data/hotels.json'
				});

				promise.success(function(data) {
					return callback(data.result);
				});

			}, 2000);

		},
		ticks: ticks,
		addHotel: addHotel

	}
})