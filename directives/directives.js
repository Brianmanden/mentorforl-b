(function(){
	'use strict';
	angular
		.module('winecellar')
		.directive('winecellarDirective', function($rootScope){
			return{
				scope: true,
				restrict: 'E',
				items: ['1', '2', '3'],
				templateUrl: '/components/mentorprogram/templates/inventory.html',
				controller: ['$rootScope', 'DataService', function($rootScope, DataService){
					
					// spgm 1)
					// Service burde vel returnere et objekt (items) i stedet for at sætte dem på rootScope
					// - en mere "ren" løsning ?

					//$rootScope.items = DataService.getData('data/items.json', function(response){});
					DataService.getData('data/items.json', function(response){});
				}],
				controllerAs: 'winecellar'
			};
		});
})();
