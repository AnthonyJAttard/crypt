"use strict";
// let spacer = require("./spacer");
// let Place = require("./place");
// import {spacer} from "./spacer.js";

(function () {
    /**
     * The player object
     * - built using name and health
     * @param name
     * @param health
     * @constructor
     */
    let Player = function (name, health) {
        // These are no private and can only be accessed through
        // public functions
        let place = null;
        let items = [];

        /**
         * Add an item to the array of items
         * @param item
         */
        this.addItem = function (item) {
            items.push(item);
        };

        // Add items from an array of items
        // this.addItems = function (items) {
        //     items.forEach(function (item) {
        //         this.addItem(item);
        //     }, this);
        // };

        /**
         * Check if an item is in the array of items.
         * @param item
         * @returns {boolean}
         */
        this.hasItem = function (item) {
            // This test needs to be checked for correctness
            return items.indexOf(item) !== -1;
        }
        /**
         * Remove an item from the array of items
         * @param item
         */
        this.removeItem = function (item) {
            let itemIndex = this.items.indexOf(item);
            if (itemIndex > -1) {
                this.items.splice(itemIndex, 1);
            }
        };

        /**
         * Attach a place to the place property
         * @param destination
         */
        this.setPlace = function (destination) {
            place = destination;
        }

        /**
         * Return the players place
         * @returns {Place}
         */
        this.getPlace = function () {
            return place;
        };

        /**
         * Applies damage to player health
         * @param damage
         */
        this.applyDamage = function (damage) {
            health -= damage;
        }

        /**
         * Returns a data string or object
         * @returns {object}
         */
        this.getData = function () {
            let data = {
                "name": name,
                "health": health,
                "items": items,
            };

            if (place !== null) {
                data.place = place.title;
            }
            return data;
        }
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.Player = Player;
})();

// Exports
// module.exports = Player;
// export {Player};