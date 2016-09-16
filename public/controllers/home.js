'use strict';

angular.module('my-app.home', ['ngRoute'])
.controller('HomeCtrl',function($scope,$http,$location,$routeParams,locationService) {
	$scope.locationOfUser = "";
	locationService.getLocation($scope.locationOfUser).then(function(city){
			$scope.locationOfUser = city;
	})
});