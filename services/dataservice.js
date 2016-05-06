(function(){
	'use strict';

	var service = angular.module('Data', ['DataService']);

	service.factory('DataService', function(){
		var factoryObj = {};

		factoryObj.getData = function(){
			console.log('virker ?');
		};

		return factoryObj;

	});

})();
