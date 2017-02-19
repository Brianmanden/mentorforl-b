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
		this.search = function(searhQuery){
			const apiKey = '69e1be8a5b4125e0920fe60d73e490a4';
			const url = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?apikey=' + apiKey + '&size=25&offset=10&term=' + searhQuery;
			//let result = {};
			
			return $http({
				method: 'GET',
				url: url
			}).then(function successCallback(response){
				console.log('success querying API');
				console.log(url);
				console.log(response.data.Products.List[0]);
				
				const result = response.data.Products.List.map( item => {
					return {
						name: item.Name,
						vineyard: item.Vineyard.Name
					};
				});

				return result;
			}, function errorCallback(response){
				console.log('error: ');
				console.dir(response);
			});
		}
	}
	
	angular
	.module('winecellar')
	.service('DataService', DataService)
	.service('ApiService', ApiService);

})();