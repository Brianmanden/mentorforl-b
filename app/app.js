(function(){
	'use strict';

	var app = angular.module('winecellar', []);

	app.directive('winecellarDirective', function(){

		var items = [
			{'label': 'Red Smoothie','vineyard': 'Bobs Wines','percentage': '18','image': '/img/wine01.jpg', 'description': 'Bacon ipsum dolor amet spare ribs jowl bresaola frankfurter tail jerky prosciutto. Spare ribs frankfurter fatback, flank porchetta capicola sirloin sausage t-bone corned beef. Turkey boudin drumstick brisket.'},
			{'label': 'Purple Haze','vineyard': 'Jimis Grapes Inc.','percentage': '12','image': '/img/wine02.jpg', 'description': 'Bacon ipsum dolor amet spare ribs jowl bresaola frankfurter tail jerky prosciutto. Spare ribs frankfurter fatback, flank porchetta capicola sirloin sausage t-bone corned beef. Turkey boudin drumstick brisket.'},
			{'label': 'The Redster','vineyard': 'Plain Redwine Inc.','percentage': '17','image': '/img/wine03.jpg', 'description': 'Bacon ipsum dolor amet spare ribs jowl bresaola frankfurter tail jerky prosciutto. Spare ribs frankfurter fatback, flank porchetta capicola sirloin sausage t-bone corned beef. Turkey boudin drumstick brisket.'}
		];

		return {
			scope: true,
			restrict: 'E',
			templateUrl: '/components/mentorprogram/templates/inventory.html',
			controller: ['$scope', function($scope){
				$scope.items = items;
				console.dir($scope.items);
			}],
			controllerAs: 'winecellar'
		};
	});

	/*
	app.factory('Data', ['', function(){
		return{
			test: function(){
				console.log('virker ?');
			}
		};
		
	}]);

	app.controller('tester', ['Data', function(Data){
		Data.test();
	}]);
	*/


	/*
	app.service('Data', ['$http', function($http){
		this.get = function(){
			$http.get('/data/items.json')
			.success(function(result){
				console.log('virker ?' + result);
				return result;
			});
		};
	}]);
	*/
})();
