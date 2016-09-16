angular.module("my-app").service("httpRequest_GET",function($http){
	this.getData = function(url, successCallback, errorCallback){
		return $http({
			method: 'GET',
			url: url
		}).then(successCallback, errorCallback);
	}
})