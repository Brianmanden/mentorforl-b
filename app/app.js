(function(){
	'use strict';

	angular
		.module('winecellar', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider){
			// declaring states
			$urlRouterProvider.otherwise('/home');
			
			$stateProvider
			.state('inventory', {
				url: '/home',
				template: "<inventory-directive>"
			})
			.state('crud', {
				url: '/crud',
				template: "<crud-directive>"
			});
		})
		.run(function($rootScope){
			console.log('Starting winecellar app');
		});

})();
