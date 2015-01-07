app.factory('dataService', function($http, $timeout, $interval) {

	var hotels;

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
			if (hotels) {
				callback(hotels);
			} else {
				$timeout(function() {
					var promise = $http({
						method: 'GET',
						url: 'data/hotels.json'
					});

					promise.success(function(data) {
						hotels = data.result;
						return callback(hotels);
					});

				}, 2000);
			}

		},
		ticks: ticks,
		addHotel: addHotel

	}
})