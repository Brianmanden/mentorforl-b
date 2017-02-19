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
					this.addWine = function($event){
						console.log($event);
						//DataService.postData($scope.item);
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
		.directive('searchDirective', ['ApiService', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/search.html',
				controller: ['$scope', 'ApiService', function($scope, ApiService){
					
					this.addWine = function($event){
						const wineData = $event.currentTarget.dataset;
						const wineInfo = document.querySelectorAll('add-directive .form-control');
						
						wineInfo[0].value = wineData.name;
						wineInfo[1].value = wineData.vineyard;
						wineInfo[2].value = wineData.percentage;
					};
					this.searchWine = function(){
						ApiService.search($scope.searchQuery).then(function(result){
							$scope.result = result;
						});
					};
				}],
				controllerAs: 'search'
			};
		}])
		.directive('addDirective', function(){
			return{
				scope: true,
				restrict: 'E',
				templateUrl: '/components/mentorprogram/templates/add.html',
				controller: ['$scope', function(){
					
				}],
				controllerAs: 'add'
			};
		});
})();
