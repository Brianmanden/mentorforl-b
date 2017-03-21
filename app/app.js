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
				views: {
					'headline': { template: "Inventory"	},
					'content': {
						template: "<inventory-directive>"
						//controller: function($scope){ ... }
					}
				}
			})
			.state('search', {
				url: '/search',
				views: {
					'headline': { template: "Search" },
					'content': {
						template: "<search-directive>"
					}
				}
			});
		})
		.run(function($rootScope){
			console.log('Starting winecellar app');
		});

})();
