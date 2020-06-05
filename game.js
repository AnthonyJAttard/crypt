"use strict";
import {Place} from "./place.js";
import {Player} from "./player.js";

/**
 * This creates a getGame object that represents the game itself
 * and controls the visibility of the other objects - Player and Place
 * @returns {{get: (function(): string), go: (function(*=): string)}}
 */

let getGame = function() {
    /*
        This is node.js code - could I use module.imports?
     */
    //let Place = require("./place");
    //let Player = require("./player");

    // Game Controls
    let render = function () {
        console.clear();
        player.getPlace().showInfo();
        player.showInfo("*");
    };

    // Map
    let kitchen = new Place(
        "The Kitchen",
        "You are in the kitchen.\nThere is a disturbing smell."
    );

    let library = new Place(
        "The Old Library",
        "You are in a library.\nDusty books line the walls."
    );


    kitchen.addItem("a piece of cheese");
    library.addItem("a rusty key");

    kitchen.addExit("south", library);
    library.addExit("north", kitchen);

    // Game initialisation
    let player = new Player(
        "Anthony",
        50
    );

    player.addItem("a trusty torch");
    player.addItem("The Sword of Doom");
    player.setPlace(kitchen);

    render();

    return {
        go: function (direction) {
            let place = player.getPlace();
            let destination = place.getExit(direction);
            if (destination !== undefined) {
                player.setPlace(destination);
                render();
                return "";
            } else {
                return "*** You cannot go in that direction ***";
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

let game = getGame();
// game.get();
// game.go("south");
// game.go("north");