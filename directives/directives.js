(function(){
	'use strict';
	angular
		.module('winecellar')
		.directive('winecellarDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/index.html'
			};
		})
		.directive('inventoryDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/inventory.html',
				controller: ['$rootScope', 'DataService', function($rootScope, DataService){
					this.items = DataService.getData('data/items.json');
				}],
				controllerAs: 'inventory'
			};
		})
		.directive('crudDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/crud.html'
			};
		});
})();
