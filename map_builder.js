"use strict";

(function () {
    /**
     * buildMap
     * Creates a map for the game using
     * mapData object (see map_data.js)*
     * @param mapData
     * @returns {*}
     */
    let buildMap = function (mapData) {
        /**
         * FOr storing the places in the map
         * @type {{}}
         */
        let placesStore = {};

        /**
         * Build a place for the place data
         * and store it in placesStore
         * @param placeData
         */
        let buildPlace = function (placeData) {
            let place = new theCrypt.Place(placeData.title, placeData.description);

            if (placeData.items !== undefined) {
                placeData.items.forEach(place.addItem);
            }

            placesStore[placeData.title] = place;
        };

        /**
         * Build the exits linked to the place
         * - add the exits and challenges (if any)
         * @param placeData
         */
        let buildExits = function (placeData) {
            let here = placesStore[placeData.title];

            if (placeData.exits !== undefined) {
                placeData.exits.forEach(function (exit) {
                    let there = placesStore[exit.to];
                    here.addExit(exit.direction, there);
                    here.addChallenge(exit.direction, exit.challenge);
                });
            }
        };

        // create all places
        mapData.places.forEach(buildPlace);

        // link places to exits
        mapData.places.forEach(buildExits);

        return placesStore[mapData.firstPlace];
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.buildMap = buildMap;

})();