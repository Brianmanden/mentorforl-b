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
					this.updateWine = function(dataItem){
						DataService.updateData(dataItem);
					}
				}],
				controllerAs: 'inventory'
			};
		})
		.directive('crudDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/crud.html',
				controller: ['$scope', 'DataService', function($scope, DataService){
					this.addWine = function(){
						DataService.postData($scope.item);
						
						/*
							comment: "-4-"
							label: "-1-"
							percentage: 123
							vineyard: "-2-"
						*/
					};
				}],
				controllerAs: 'crud'
			};
		})
		.directive('searchDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/search.html',
				controller: ['$scope', function($scope){
					this.searchWine = function(){
						console.log('seach wine.com');
					}
				}],
				controllerAs: 'search'
			};
		})
		.directive('addDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/add.html',
				controller: [],
				controllerAs: 'add'
			};
		});
})();
