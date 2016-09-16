angular.module("my-app").service("locationService",function(httpRequest_GET,$q){
//--------------------------------------------------------------------local functions------------------------------------------------------------------------
	var promise = $q.defer();
	var getCoordinates = function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(locationSuccess, locationError)
		}
		else{
			console.log("location is not supported by your system");	
		}
	}
	var locationSuccess = function(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		 getAddess(lat,lon).then(function(city){
				promise.resolve(city);
			});
			
		}
	var locationError = function(errorCode){
		console.log(JSON.stringify(errorCode));
	}
	var getAddess = function(lat, lon){
		return $q(function(resolve, reject){
			httpRequest_GET.getData("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&key=AIzaSyCCKQukkCKKngEPFLZy8TtyX66nDAliTdw", successLocation, errorLocation)
			.then(function(city){
			resolve(city);
		})
	})
			
	}
	var successLocation = function(locationResponse){
		var addressArray = locationResponse.data.results[0].formatted_address.split(",");
		return addressArray[addressArray.length - 3]
	}
	var errorLocation = function(locationResponse){
		console.log(locationResponse);
	}

//--------------------------------------------------------------------service functions----------------------------------------------------------------------
	this.getLocation = function(){
		// return $q(function(resolve, reject){
			getCoordinates();
			return promise.promise;

		// });
	}
});