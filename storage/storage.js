(function(){
	'use strict';

	var now = Date();
	var testWine = {
		label: 'testLabel',
		vineyard: 'testVineyard',
		percentage: 'testPercentage',
		comment: 'testComment',
		image: '/img/wine01.jpg',
		dateTime: now
	};

	var localStorage = new IDBStore({
		dbVersion: 1,
		storeName: 'winecellar',
		keyPath: 'id',
		autoIncrement: true,
		onStoreReady: function(){
			console.log('Winecellar local storage ready!');
			insertData();
		}
	});

	var insertData = function(){
		localStorage.put(testWine, onsuccess, onerror);
	}

	var onsuccess = function(id){
		console.log('Item inserted! ID: ' + id);
	};
	var onerror = function(error){
		console.log('Error: ', error);
	};

})();
