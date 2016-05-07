(function(){
	'use strict';

	var DataService = function($rootScope, $http){

		var getData = function(dataItemsUrl, callback){
			return $http.get(dataItemsUrl)
				.then(function(response){
					return response.data;
				}, logError);
		};

		var logError = function(reason){
			console.log('Danger Will Robinson... danger');
			console.error(reason);
		};

		return{
			getData: getData
		};

	};

	angular
		.module('winecellar')
		.factory('DataService', DataService);
})();
