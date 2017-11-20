(function (){
	var weatherComponent = {
		controller:"greenwoodController",
		templateUrl: "partials/weather.html"
	};
	angular
	 .module("app")
	 .component("weatherComponent",weatherComponent);
})();