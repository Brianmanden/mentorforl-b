"user strict";

var app = angular.module('winecellar', []);

app.controller('AppListController', function($scope, $http){
	$scope.items = null;

	/*
	$http.get('http://localhost:8080/mentorprogram/data/items.json')
		.success(function (data){
			$scope.item = data.wines;
		})
		.error(function( data, status, headers, config){
			console.log("oh oooh .. something went wrong");
			
			console.log("data: ");
			console.dir(data);
			
			console.log("status: ");
			console.dir(status);

			console.log("headers:");
			console.dir(headers);
			
			console.log("config: ");
			console.dir(config);
		});
	*/

	$http.get('http://localhost:8080/mentorprogram/data/items.json')
		.success(function(){
			console.log("23123132131231111");
		})

	console.dir($scope);
});
