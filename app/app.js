var winecellarModule = (function(){
	'use strict';

	var app = angular.module('winecellar', ['$scope', '$http']);

	app.directive('winecellarDirective', function($scope, $http){
		return {
			restrict: 'E',
			templateUrl: '',
			controller: function($http){

				this.initList = function($http){
					$http
						.get('http://localhost:8080/mentorprogram/data/items.json')
						.success(
							function(data){
								$scope.items = data.items;
							}
						)
						.error(
							function(data, status, headers, config){
								console.log('oh oooh .. something went wrong');
							}
						);
				};

			},
			controllerAs: 'winecellar'
		};
	});
})();
