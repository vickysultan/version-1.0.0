angular.module("my-app").service("locationService",function(httpRequest_GET,$q){
//--------------------------------------------------------------------local functions------------------------------------------------------------------------
	var city = "";
	var promise = $q.defer();
	var getCoordinates = function(){
		if(navigator.geolocation){
		return navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
		}
		else{
			console.log("location is not supported by your system");	
		}
	}
	var locationSuccess = function(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		getAddess(lat,lon);
	}
	var locationError = function(errorCode){
		console.log(JSON.stringify(errorCode));
	}
	var getAddess = function(lat, lon){
		httpRequest_GET.getData("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&key=AIzaSyCCKQukkCKKngEPFLZy8TtyX66nDAliTdw", successLocation, errorLocation);
	}
	var successLocation = function(locationResponse){
		var addressArray = locationResponse.data.results[0].formatted_address.split(",");
			city = addressArray[addressArray.length - 3];
			promise.resolve();
	}
	var errorLocation = function(locationResponse){
		console.log(locationResponse);
	}

//--------------------------------------------------------------------service functions----------------------------------------------------------------------
	this.getLocation = function(){
		getCoordinates();
	}
});