"use strict";
// let spacer = require("./spacer");
// import {spacer} from "./spacer.js";

(function () {
    let Place = function Place(title, description) {
        const newLine = spacer.newLine();

        // Properties of a Place
        let items = [];
        let exits = {};
        let challenges = {};

        // exits is an uninitialised object for value -> pair
        // direction -> exit
        // "north" -> "kitchen"

        /**
         * Return the items in this place
         * @returns {string}
         */
        let getItemsInfo = function () {
            let itemsString = `Items: ${newLine}`;

            if (items.length > 0) {
                items.forEach(function (item) {
                    itemsString += `\t- ${item}${newLine}`;
                });
            } else {
                itemsString = "There are no items here." + newLine;
            }

            return itemsString;
        };

        /**
         * Return the exits from this place
         * @returns {string}
         */
        let getExitsInfo = function () {
            let exitsString = `Exits from ${title}:${newLine}`;

            Object.keys(exits).forEach(function (key) {
                exitsString += `\t- ${key}${newLine}`;
            });

            return exitsString;
        };

        /**
         * Return the name of this place
         * @returns {string}
         */
        let getTitleInfo = function () {
            return spacer.box(title, 40, '=');
        };

        /**
         * Return the information about this place
         * @returns {string}
         */
        let getInfo = function () {
            let infoString = getTitleInfo();
            infoString += description + newLine + newLine;
            infoString += getItemsInfo() + newLine;
            infoString += getExitsInfo();
            infoString += spacer.line(40, '=') + newLine;

            return infoString;
        };

        /**
         * Display the information to the console
         */
        this.showInfo = function () {
            console.log(getInfo());
            // return getInfo();
        };

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
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.Place = Place;
})();

// module.exports = Place;
// export {Place};