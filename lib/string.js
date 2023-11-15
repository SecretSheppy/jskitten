(function () {

    'use strict';

    String.prototype.freeze = function () {
        return Object.freeze(this);
    }

})();
