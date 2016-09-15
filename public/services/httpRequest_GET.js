angular.module("my-app").service("httpRequest_GET",function($http){
	this.getData = function(url, successCallback, errorCallback){
		$http({
			method: 'GET',
			url: url
		}).then(successCallback, errorCallback);
	}
})