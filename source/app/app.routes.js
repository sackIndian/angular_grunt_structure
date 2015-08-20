
(function() {
    'use strict';

    angular
        .module(NgApp)
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config(RouteProvider, LocationProvider) {

        RouteProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeview.html',
                controller: 'HomeController',
                controllerAs: 'homeVm'
            })
            .when('/profile', {
                templateUrl: 'app/components/profile/profileview.html',
                controller: 'ProfileController',
                controllerAs: 'profileVm'
            })
            .otherwise({
                redirectTo: '/home'
            });

        if (window.history && window.history.pushState) {
            LocationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            LocationProvider.hashPrefix('!');
        }
    }


})();
