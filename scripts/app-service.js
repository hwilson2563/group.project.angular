(function(){
	function weatherFactory ($http) {
		var data = "";
		return {
			place: place
		}
		function place(city, state){
			console.log(city);
			console.log(state);
			return $http({
				method: "GET",
				url: "http://api.wunderground.com/api/fdca17054c68d878/conditions/q/"+ state +"/"+ city +".json"
			}).then(function(info){
				data = info;
				
				return data;

			})
		}
	}
	angular
		.module("app")
		.factory("weatherFactory", weatherFactory);
})();