(function(){
	'use strict';
	angular
		.module('winecellar')
		.directive('winecellarDirective', function($rootScope){
			return{
				scope: true,
				restrict: 'E',
				//items: ['1', '2', '3'],
				templateUrl: '/components/mentorprogram/templates/inventory.html',
				controller: ['$rootScope', 'DataService', function($rootScope, DataService){
					this.items = DataService.getData('data/items.json');
				}],
				controllerAs: 'winecellar'
			};
		});
})();
