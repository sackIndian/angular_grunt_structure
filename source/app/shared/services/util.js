
(function() {
    'use strict';
    // service
    angular
        .module(NgApp)
        .service('Logger', Logger);

    function Logger() {
        this.logError = function(msg) {
            /* */
        };
    }

})();
