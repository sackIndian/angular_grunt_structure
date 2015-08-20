(function() {
    'use strict';

    angular
        .module(NgApp)
        .controller('ProfileController', ProfileController);

        //MainController.$inject = [];

    function ProfileController() {
        console.log('ProfileController')
    }

})();
