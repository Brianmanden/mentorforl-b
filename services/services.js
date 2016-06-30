(function(){
	'use strict';

	function DataService($http){
		var data = {};
		this.getData = function(dataItemsUrl){
			$http({
				method: 'GET',
				url: dataItemsUrl
			}).then(function successCallback(response){
				console.log('success reading url: ' + dataItemsUrl);
				angular.extend(data, response.data.items);
			}, function errorCallback(response){
				console.log('error: ');
				console.dir(response);
			});

			return data;
		};

		return this;
	}

	function ApiService($http){
		// service to query API at wine.com
	}

	angular
	.module('winecellar')
	.service('DataService', DataService)
	.service('ApiService', ApiService);

})();
