(function() {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/group", {
                    template: `<group-component></group-component>`,
                    controller: "greenwoodController as green"

                })
                .when("/weather", {
                    template: `<weather-component></weather-component>`,
                    controller: "greenwoodController as green"

                })
                .when("/prime", {
                    template: `<prime-component></prime-component>`,
                    controller: "greenwoodController as green"

                })

        })
})();



