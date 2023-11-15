(function () {

    'use strict';

    const fs = require('fs');

    /**
     * Returns a read only version of the projects package.json file
     * @returns {JSON} package.json
     */
    function _package () {
        return Object.freeze(loadJSON(process.cwd() + '/package.json'));
    }

    /**
     * Loads a JSON file from the given path
     * @param path - path to the JSON
     * @param characterEncoding - character encoding of the file
     * @returns {JSON} JSON
     */
    function loadJSON (path, characterEncoding = "utf-8") {
        return JSON.parse(fs.readFileSync(path, characterEncoding));
    }

    /**
     * Saves a JSON file to the given path
     * @param path - path to the JSON
     * @param JSON - JSON to save
     * @param spacing - indentation level of the JSON
     */
    function saveJSON (path, JSON, spacing = 4) {
        fs.writeFileSync(path, JSON.stringify(JSON, null, spacing));
    }

    module.exports = { _package, loadJSON, saveJSON };

})();
