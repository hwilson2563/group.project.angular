(function(){
	var groupComponent = {
		controller:"greenwoodController",
		templateUrl: "partials/group.html"

	};
	angular
		.module("app")
		.component("groupComponent", groupComponent);	
})();