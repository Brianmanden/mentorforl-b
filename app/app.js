(function(){
	'use strict';

	angular
		.module('winecellar', [])
		//.module('winecellar', ['ngRoute', 'ngRoute'])
		/*
		.config(function($routeProvider, $locationProvider) {
			$routeProvider
			.when('/components/mentorprogram/test', {
				templateUrl: '/templates/test.html',
				resolve: function(){
					console.log('test.html resolved');
				}
			})
			.when('/test2', {
				templateUrl: 'templates/test2.html',
				resolve: function(){
					console.log('test2.html resolved');
				}
			});

		})
		.controller('MainController', function($scope, $route, $routeParams, $location){
			console.dir($location.path);
		})
		*/
		.run(function($rootScope){
			console.log('starting winecellar app');
		});

})();
