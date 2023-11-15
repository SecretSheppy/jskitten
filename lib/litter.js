(function () {

    'use strict';

    const color = require('./color');

    /**
     * Gets the current date and time in a readable format
     * @returns {string}
     */
    function getDateTime () {
        return `[${new Date().toLocaleString()}] `;
    }

    /**
     * Writes the specified message into the console
     * @param {string} message
     */
    function log (message) {
        console.log(color.RESET + getDateTime() + message);
    }

    /**
     * Writes the specified message into the console with a blue background
     * @param {string} message
     */
    function info (message) {
        console.log(color.RESET + color.BG_BLUE + getDateTime()
            + "(info) " + message);
    }

    /**
     * Writes the specified message into the console with a yellow background
     * @param {string} message
     */
    function warn (message) {
        console.log(color.RESET + color.BG_YELLOW + getDateTime()
            + "(warning) " + message);
    }

    /**
     * Writes the specified message into the console with a red background
     * @param {string} message
     */
    function error (message) {
        console.log(color.RESET + color.BG_RED + getDateTime()
            + "(error) " + message);
    }

    module.exports = { log, info, warn, error };

})();