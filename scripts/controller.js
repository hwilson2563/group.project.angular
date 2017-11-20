(function() {
    function greenwoodController(weatherFactory) {
        var vm = this;
        vm.currentTemp = "";
        vm.windSpeed = "";
        vm.locationSearch = function(city, state) {
            console.log(city, state);
            weatherFactory.place(city,state).then(function(response) {
                console.log(response);
                vm.currentTemp = response.data.current_observation.temp_f;
                vm.windSpeed = response.data.current_observation.wind_mph;
            })
        }

    }

    angular
        .module("app")
        .controller("greenwoodController", greenwoodController)
})();