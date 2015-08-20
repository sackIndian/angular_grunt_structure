(function() {
    'use strict';

    angular
        .module(NgApp)
        .controller('HomeController', HomeController);

        //MainController.$inject = [];

    function HomeController() {
        console.log('HomeController')
    }

})();
