angular.module('app', ['ngRoute', 'controller', 'controller2'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/login.html'
		controller2: 'auntCtrl'
	})
	.when('/index.html', {
		templateUrl: 'index.html',
		controller: 'BlogCtrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})