describe('voting service specs', function(){

	beforeEach(module('myApp'));

	it('should exist', inject(function(votingService){
		expect(votingService).toBeDefined();
	}));

	it('should up vote', inject(function(votingService){

		var hotel ={
			rating : 0
		};

		votingService.upVote(hotel);
		expect(hotel.rating).toBe(1);
	}));

	it('should down vote', inject(function(votingService){

		var hotel ={
			rating : 4
		};

		votingService.downVote(hotel);
		expect(hotel.rating).toBe(3);
	}));

	it('should create a zero rating if not present', inject(function(votingService){

		var hotel ={
			
		};

		votingService.downVote(hotel);
		expect(hotel.rating).toBe(0);
	}));

	it('should create a zero rating if not present', inject(function(votingService){

		var hotel ={
			
		};

		votingService.upVote(hotel);
		expect(hotel.rating).toBe(1);
	}));

	it('should correct negative rating and make it 0', inject(function(votingService){

		var hotel ={
			rating : -3
		};

		votingService.downVote(hotel);
		expect(hotel.rating).toBe(0);
	}));

	it('should not down vote below 0', inject(function(votingService){

		var hotel ={
			rating : 0
		};

		votingService.downVote(hotel);
		expect(hotel.rating).toBe(0);
	}));



})