/**
 * jskitten
 *
 * jskitten is a collection of useful functions for javascript. It covers a
 * range of areas and is primarily designed to make simple and mundane tasks
 * easier.
 */

(function () {

    'use strict';

    require('./lib/stroke')();
    require('./lib/string');
    require('./lib/array');
    const litter = require('./lib/litter');
    const munch = require('./lib/munch');

    module.exports = {
        litter,
        munch
    }

})();
