(function () {

    'use strict';

    Array.prototype.freeze = function () {
        return Object.freeze(this);
    }

})();
