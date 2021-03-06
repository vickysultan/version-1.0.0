'use strict';

// Declare app level module which depends on views, and components
angular.module('my-app', [
  'ngRoute',
  'my-app.home',
]).config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/home'});
	$routeProvider.when('/home', {
    	templateUrl: './views/home.html',
    	controller: 'HomeCtrl'
  		});
}]).controller('ParentController',function($rootScope ,locationService, StartsWithFilterFilter, $timeout){
	$rootScope.locationOfUser = "";
	$rootScope.userWantsToSelectLocation = {}
	$rootScope.userWantsToSelectLocation.value = false;
	$rootScope.cityList = ["Chennai", "Bangalore", "MUMBAI"]
	if(localStorage.getItem("location") !== null){
		$rootScope.locationOfUser = localStorage.getItem("location");
	}
	else{
		locationService.getLocation().then(function(city){
				$rootScope.locationOfUser = city;
				localStorage.setItem("location",$rootScope.locationOfUser)
		})
	}

	$rootScope.changeLocation = function(city){
		$rootScope.userWantsToSelectLocation.value = false;
		$rootScope.locationOfUser = city;
		localStorage.setItem("location", city);
	}
});
