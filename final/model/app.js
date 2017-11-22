angular.module('app', ['ngRoute', 'controller'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/registrar.html',
		controller: 'RegistrarCtrl'
	})
	.when('/home', {
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl'
	})
	.when('/blog', {
		templateUrl: 'view/blog.html',
		controller: 'BlogCtrl'
	})
	.when('/configuracion', {
		templateUrl: 'view/configuracion.html',
		controller: 'configuracionCtrl'
	})
	.otherwise({
		templateUrl: 'view/404.html'
	})
})
