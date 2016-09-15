'use strict';

angular.module('my-app.home', ['ngRoute'])
.controller('HomeCtrl',function($scope,$http,$location,$routeParams,locationService) {
	$scope.location = locationService.getLocation();
});