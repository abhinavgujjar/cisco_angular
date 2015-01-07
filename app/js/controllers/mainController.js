//register a controller
app.controller('mainController',

	function($scope, $interval) {

		$interval(function(){
			$scope.$broadcast('refresh', true);
		}, 3000);		

		var greeting = '';
		var goodness = true;

		if (goodness)
			greeting += 'Good ';

		var time = (new Date()).getHours();

		if (time > 12) {
			greeting += 'Afternoon';
		} else if (time > 16) {
			greeting += 'Evening';
		} else {
			greeting += 'Morning';
		}

		$scope.greeting = greeting;


		if ($scope.greeting.length > 25) {
			isMorning = false;
		}

		$scope.done= true;

	}

);

_textLimit = 3000;