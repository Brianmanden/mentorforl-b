(function(){
	'use strict';


	angular
		.module('winecellar')
		.directive('winecellarDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/inventory.html',
				controller: ['$scope', 'DataService', function($scope, DataService){
					var someItems;
					someItems = DataService.getData('data/items.json', function(response){
						console.dir(response);
					});
				}],
				controllerAs: 'winecellar'
			};
		});
})();
