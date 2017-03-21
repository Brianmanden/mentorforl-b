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
			})
			.state('add', {
				url: '/add',
				views: {
					'headline': { template: "Add wine"},
					'content': {
						template: "<add-directive>",
						controller: function($scope, $stateParams){
							console.dir($stateParams.item);
							$scope.item = $stateParams.item;
						}
					}
				},
				params: {
					item: null,
					squash: true
				}
			});
		})
		.run(function($rootScope){
			console.log('Starting winecellar app');
		});

})();
