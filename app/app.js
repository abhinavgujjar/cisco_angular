//declaring a module
var app = angular.module('myApp', ['ngRoute','ngSanitize']);

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
		redirectTo : '/new'
	})

})

app.value('textLimit', 50);