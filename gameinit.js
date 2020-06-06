"use strict";
// import {spacer} from "./spacer.js";
// import {Place} from "./place.js";
// import {Player} from "./player.js";

// Get Programming with JavaScript
// Chapter 13
// Game initialization and controls

(function () {

    let getGame = function () {

        let render = function () {
            console.clear();
            player.getPlace().showInfo();
            player.showInfo();
        };

        let firstPlace = theCrypt.buildMap();

        let player = new theCrypt.Player("Kandra", 50);
        player.addItem("The Sword of Doom");
        player.setPlace(firstPlace);

        render();

        // Return the public interface
        return {
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