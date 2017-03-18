(function(){
	'use strict';

	// Service for communicating with local storage
	function LocalStorageService($http){
		var data = {};
		this.getData = function(dataItemsUrl){
			$http({
				method: 'GET',
				url: dataItemsUrl
			}).then(function successCallback(response){
				console.log('Success reading url: ' + dataItemsUrl);
				angular.extend(data, response.data.items);
			}, function errorCallback(response){
				console.log('Error: ');
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

	// Service for communicating with wine.com
	function ApiService($http, $q){
		this.search = function(searhQuery){
			const apiKey = '69e1be8a5b4125e0920fe60d73e490a4';
			const url = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?apikey=' + apiKey + '&size=25&offset=10&term=' + searhQuery;
			
			var deferred = $q.defer();

			$http.get(url)
			.success(function(response){
				console.log('Success querying API');

				const result = response.Products.List.map( item => {
					return {
						name: item.Name,
						vineyard: item.Vineyard.Name
					};
				});
				deferred.resolve(result);
			})
			.error(function(msg, code){
				console.log('Failed querying API');
				console.log('Message: ', msg);
				console.log('Code: ', code);
				deferred.reject(msg);
			});
			
			return deferred.promise;
			
			/*
			return $http({
				method: 'GET',
				url: url
			}).then(function successCallback(response){
				console.log('Success querying API');
				//console.log(url);
				console.log(response.data.Products.List[0]);
				
				const result = response.data.Products.List.map( item => {
					return {
						name: item.Name,
						vineyard: item.Vineyard.Name
					};
				});

				return result;
			}, function errorCallback(response){
				console.log('Error: ');
				console.dir(response);
			});
			*/
		}
	}
	
	/*
	// Service for sending messages between controllers
	function CommunicationService(){
	}
	*/
	
	angular
	.module('winecellar')
	.service('LocalStorageService', LocalStorageService)
	.service('ApiService', ApiService);
	//service('CommunicationService', CommunicationService);;

})();