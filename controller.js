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
     * @returns {Player}
     */
    let buildPlayer = function (playerData) {
        let player = new theCrypt.Player(playerData.name, playerData.health);

        playerData.items.forEach(function (item) {
            player.addItem(item)
        });

        return player;
    };

    //
    // /**
    //  * Render the information regarding the
    //  * player and the place it's in
    //  */
    // let render = function () {
    //     console.clear();
    //     // placeView.render(firstPlace);
    //     // playerView.render(player);
    // };

    let init = function (mapData, playerData) {

        /**
         * Create the first place the player is in
         * */
        let firstPlace = theCrypt.buildMap(mapData);

        /**
         * Assign the player to the place and
         * add the items and place they are in
         */
        let player = buildPlayer(playerData);
        player.setPlace(firstPlace);

        theCrypt.playerView.render(player);
        theCrypt.placeView.render(firstPlace);
    };

    // Return the public interface
    // return {
    //     /**
    //      * Go the place described by the direction
    //      * @param direction
    //      * @returns {string}
    //      */
    //     go: function (direction) {
    //         let place = player.getPlace();
    //         let destination = place.getExit(direction);
    //
    //         if (destination !== undefined) {
    //             player.setPlace(destination);
    //             render();
    //             return "";
    //         } else {
    //             return "*** There is no exit in that direction ***";
    //         }
    //     },
    //
    //     /**
    //      * Get the item stored in the place and
    //      * add it to the players items.
    //      * @returns {string}
    //      */
    //     get: function () {
    //         let place = player.getPlace();
    //         let item = place.getLastItem();
    //
    //         if (item !== undefined) {
    //             player.addItem(item);
    //             render();
    //             return "";
    //         } else {
    //             return "*** There is no item to get ***";
    //         }
    //     }
    // }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.init = init;

})();