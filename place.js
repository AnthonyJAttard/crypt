"use strict";
// let spacer = require("./spacer");
// import {spacer} from "./spacer.js";

(function () {
    let Place = function Place(title, description) {

        // Properties of a Place
        let items = [];
        let exits = {};
        let challenges = {};

        // exits is an uninitialised object for value -> pair
        // direction -> exit
        // "north" -> "kitchen"

        /**
         * Add an item to the list or items in this place
         * @param item
         */
        this.addItem = function (item) {
            items.push(item);
        };

        // Add an array of items to the list of items
        // this.addItems = function (items) {
        //     items.forEach(function (item) {
        //         // this.items.addItem(item);
        //         this.items.push(item);
        //     }, this);
        // };

        /**
         * Adds an exit using key -> value pair [] direction -> exit
         * @param direction
         * @param exit
         */
        this.addExit = function (direction, exit) {
            exits[direction] = exit;
        };

        // Add an array of exits to the list of exits
        // this.addExits = function (exitsArray) {
        //     exitsArray.forEach(function (item) {
        //         this.exits.push(item);
        //     }, this); // Needed to add 'this' as a parameter for enclosing context
        // };

        /**
         * Get the exit from the direction
         * @param direction
         * @returns {Place}
         */
        this.getExit = function (direction) {
            return exits[direction];
        };

        /**
         * Get the last item in the array of items
         * @returns {string}
         */
        this.getLastItem = function () {
            return items.pop();
        };

        // Methods for challenges
        /**
         * Add a challenge to the place
         * @param direction
         * @param challenge
         */
        this.addChallenge = function (direction, challenge) {
            challenges[direction] = challenge;
        };

        /**
         * Get the challenge for the place
         * @param direction
         * @returns {Array}
         */
        this.getChallenge = function (direction) {
            return challenges[direction];
        };

        /**
         * Return a placeData string containing the information
         * to display about this place
         * @returns {object}
         */
        this.getData = function () {
            let data = {
                "title": title,
                "description": description,
                "items": items.slice(),
                "exits": Object.keys(exits)
            };

            return data;
        };

    }; // end of Place()

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.Place = Place;
})();

// module.exports = Place;
// export {Place};