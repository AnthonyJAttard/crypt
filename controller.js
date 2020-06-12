"use strict";
// import {spacer} from "./spacer.js";
// import {Place} from "./place.js";
// import {Player} from "./player.js";

// Get Programming with JavaScript
// Game initialization and controls

(function () {

    let player;
    let inPlay = false;

    /**
     * Initialise the game.
     * @param mapData
     * @param playerName
     */
    let init = function (mapData, playerName) {

        /**
         * Create the first place the player is located
         * */
        let firstPlace = theCrypt.buildMap(mapData);

        /**
         * Assign the player to the place and
         * add the items and place they are in
         */
        player = new theCrypt.Player(playerName, 50);
        player.setPlace(firstPlace);

        inPlay = true;

        render();
    };

    /**
     * Check the player's health and if 0 or less
     * quit the game.
     */
    let checkGameStatus = function() {
        if (player.getData().health <= 0) {
            inPlay = false;
            renderMessage("Over come by your wounds...");
            renderMessage("...you fall to the ground.");
            renderMessage("- Your adventure is over -");
        }
    };

    /**
     * Render the information regarding the
     * player and the place it's in
     */
    let render = function () {
        console.clear();

        if (inPlay) {
            theCrypt.placeView.render(player.getPlace());
            theCrypt.playerView.render(player);
        }
    };

    /**
     * Send a message string using the messageView
     * @param message
     */
    let renderMessage = function(message) {
        theCrypt.messageView.render(message);
    };

    /**
     * Go the place described by the direction
     * checking for challenges on the way
     * @param direction
     * @returns {string}
     */
    let go = function (direction) {
        if (inPlay) {

            let place = player.getPlace();
            let destination = place.getExit(direction);
            let challenge = place.getChallenge(direction);

            if (destination === undefined) {
                renderMessage("There is no exit in that direction.")
            } else {

                if ((challenge === undefined) || challenge.complete) {

                    player.setPlace(destination);
                    render();

                } else {

                    if (challenge.damage) {
                        player.applyDamage(challenge.damage);
                    }

                    render();

                    renderMessage(challenge.message);

                    checkGameStatus();
                }
            }
        } else {
            renderMessage("The game is over.")
        }

        return "";
    };

    /**
     * Get the item stored in the place and
     * add it to the players items.
     * @returns {string}
     */
    let get = function () {
        if (inPlay) {
            let place = player.getPlace();
            let item = place.getLastItem();

            if (item !== undefined) {
                player.addItem(item);
                render();
            } else {
                renderMessage("There is no item to get");
            }
        } else {
            renderMessage("The game is over!");
        }

        return "";
    };

    /**
     * Use an item to pass a challenge
     *  - the item needs to be available
     * @param item
     * @param direction
     * @returns {string}
     */
    let use = function (item, direction) {
        if (inPlay) {

            let place = player.getPlace();
            let challenge = place.getChallenge(direction);

            // Do we have a challenge? OR Is it completed?
            if ((challenge === undefined) || challenge.complete) {
                renderMessage("You don't need to use that there.")
            } else {

                // There is a challenge to overcome
                if (player.hasItem(item)) {

                    // Does the player have the item required for this challenge
                    if (item === challenge.requires) {

                        // OK we have succeeded in this challenge
                        renderMessage(challenge.success);
                        challenge.complete = true;

                        // Is the item used up?
                        if (challenge.itemConsumed) {
                            player.removeItem(item);
                        }
                    } else {
                        renderMessage(challenge.failure);
                    }
                } else {
                    renderMessage("You don't have that item.")
                }

            }
        } else {
            renderMessage("The game is over!");
        }

        return "";
    };

    window.game = {
        get: get,
        go: go,
        use: use,
        init: init
    };

})();