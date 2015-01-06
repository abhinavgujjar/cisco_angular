//declaring a module
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl: 'partials/home.html'
	});

	$routeProvider.when('/listing', {
		templateUrl: 'partials/listing.html'
	});

	$routeProvider.when('/new', {
		templateUrl: 'partials/new.html',
		controller : 'addController'
	});

	$routeProvider.otherwise({
		redirectTo : '/home'
	})

})

app.value('textLimit', 50);