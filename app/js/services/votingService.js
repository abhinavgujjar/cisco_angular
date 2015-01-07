app.factory('votingService', function() {

	return {
		upVote: function(hotel) {
			hotel.rating = hotel.rating || 0;

			hotel.rating ++;
		},
		downVote : function(hotel){
			if ( !hotel.rating )
			{
				hotel.rating = 0;
			}

			if ( hotel.rating < 0){
				hotel.rating = 0;
			}

			if (hotel.rating > 0){
				hotel.rating --;
			}
		}
	}
})