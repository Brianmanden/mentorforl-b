var winecellarModule = (function(){
	"user strict";

	var app = angular
				.module('winecellar', [])
				.directive('winecellarDirective', winecellarDirective);

	function winecellarDirective(){

		var controller = ['$scope', '$http', function($scope, $http){
			/*
			function init(){
			}
			*/

			//init();

			$scope.getInv = listInv;

			listInv();
		}];

		function listInv(){
			console.dir();
			$http.get('http://localhost:8080/mentorprogram/data/items.json')
				.success(function (data){
					$scope.items = data.items;
				})
				.error(function( data, status, headers, config){
					console.log("oh oooh .. something went wrong");
				});
		}

		var directive = {
			controller: controller,
			getInv: listInv,
			restrict: 'EA',
			templateUrl: './templates/listInv.html'
		};

		return directive;

	}

})();
