var app = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers']).constant('FIREBASE_URL', 'https://ireade-angulardata.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
		when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'MeetingsController'
		}).
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		otherwise({
			redirectTo: '/login'
		});

}])