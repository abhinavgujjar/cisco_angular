app.factory('dataService', function($http) {
	

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
		getHotels: function(callback){
			var hotels;
			var promise = $http({method: 'GET', url:'data/hotels.json'});

			promise.success(function(data){
				callback(data.result);
			})

			return hotels;
		},
		ticks: ticks,
		addHotel: addHotel

	}
})