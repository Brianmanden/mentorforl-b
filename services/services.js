(function(){
	'use strict';

	// Service for accessing local storage
	function LocalStorageService($http, $q){
		var data = {};
		this.getData = function(dataItemsUrl){
			// instantiate promise
			var deferred = $q.defer();			
			// access local storage

			$http.get(dataItemsUrl)
			.then(function(response){
				console.log('Success accessing local storage: ' + dataItemsUrl);
				console.dir(response.data.items);
				deferred.resolve(response.data.items);
			}, function(msg, code){
				console.log('Failed accessing local storage');
				console.log('Message: ', msg);
				console.log('Code: ', code);
				deferred.reject(msg);
			});
			
			// return promise
			return deferred.promise;
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
			// params
			const apiKey = '69e1be8a5b4125e0920fe60d73e490a4';
			const url = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?apikey=' + apiKey + '&size=25&offset=10&term=' + searhQuery;
			
			// instantiate promise
			var deferred = $q.defer();

			// query API endpoint
			$http.get(url)
			.then(function(response){
				console.log('Success querying API');
				const result = response.Products.List.map( item => {
					return {
						name: item.Name,
						vineyard: item.Vineyard.Name
					};
				});
				deferred.resolve(result);
			}, function(msg, code){
				console.log('Failed querying API');
				console.log('Message: ', msg);
				console.log('Code: ', code);
				deferred.reject(msg);				
			});
			
			// return promise
			return deferred.promise;
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