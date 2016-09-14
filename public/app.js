'use strict';

// Declare app level module which depends on views, and components
angular.module('my-app', [
  'ngRoute',
  'my-app.home',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.otherwise({redirectTo: '/home'});
	$routeProvider.when('/home', {
    	templateUrl: './views/home.html',
    	controller: 'HomeCtrl'
  		});
}]);
