"use strict";
// import {spacer} from "./spacer.js";
// import {Place} from "./place.js";
// import {Player} from "./player.js";

// Get Programming with JavaScript
// Chapter 13
// Game initialization and controls

(function () {
    /**
     * The Game object controls the game itself
     * @returns {{get: get, go: go}}
     */
    let getGame = function () {

        /**
         * Create the first place the player is in
         * @type {*}
         */
        let firstPlace = theCrypt.buildMap(theCrypt.mapData);

        /**
         * Assign the player to the place and
         * add the items and place they are in
         * @type {Player}
         */
        let player = new theCrypt.Player("Kandra", 50);
        player.addItem("The Sword of Doom");
        player.setPlace(firstPlace);

        /**
         * Render the information regarding the
         * player and the place it's in
         */
        let render = function () {
            console.clear();
            placeView.render(firstPlace);
            playerView.render(player);
        };

        // Display the data
        render();

        // Return the public interface
        return {
            /**
             * Go the place described by the direction
             * @param direction
             * @returns {string}
             */
            go: function (direction) {
                let place = player.getPlace();
                let destination = place.getExit(direction);

                if (destination !== undefined) {
                    player.setPlace(destination);
                    render();
                    return "";
                } else {
                    return "*** There is no exit in that direction ***";
                }
            },

            /**
             * Get the item stored in the place and
             * add it to the players items.
             * @returns {string}
             */
            get: function () {
                let place = player.getPlace();
                let item = place.getLastItem();

                if (item !== undefined) {
                    player.addItem(item);
                    render();
                    return "";
                } else {
                    return "*** There is no item to get ***";
                }
            }
        };
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.getGame = getGame;

})();