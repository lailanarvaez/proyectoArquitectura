angular.module('app', ['ngRoute', 'controller'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/registrar.html',
		controller: 'RegistrarCtrl'
	})
	.when('/home', {
		templateUrl: 'view/home.html'
	})
	.when('/blog', {
		templateUrl: 'view/blog.html',
		controller: 'BlogCtrl'
	})
	.otherwise({
		templateUrl: 'view/404.html'
	})
})