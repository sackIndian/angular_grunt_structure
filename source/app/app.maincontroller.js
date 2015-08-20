
(function() {
    'use strict';

    angular
        .module(NgApp)
        .controller('MainController', MainController);

        //MainController.$inject = [''];

    function MainController() {
    	console.log('MainController')
    }

})();
