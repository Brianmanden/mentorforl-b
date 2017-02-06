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
		this.postData = function(dataItem){
			// label, vineyard, percentage, comment
			console.log('postData', dataItem);
		};
		this.updateData = function(dataItem){
			console.log('updateData: ', dataItem);
		};
		
		return this;
	}

	function ApiService($http){
		// service to query API at wine.com
		// API key: 69e1be8a5b4125e0920fe60d73e490a4
		// http://services.wine.com/api/beta2/service.svc/JSON/catalog?apikey=69e1be8a5b4125e0920fe60d73e490a4&size=25&offset=10&filter=categories(7155+124) term=mondavi+cab
	}

	angular
	.module('winecellar')
	.service('DataService', DataService)
	.service('ApiService', ApiService);

})();