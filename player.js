"use strict";
//let spacer = require("./spacer");
// let Place = require("./place");

import {spacer} from "./spacer.js";

let Player = function (name, health) {
    const newLine = spacer.newLine();

    // These are no private and can only be accessed through
    // public functions
    let place = null;
    let items = [];

    // Add an item to the array of items
    this.addItem = function (item) {
        items.push(item);
    };

    // Add items from an array of items
    // this.addItems = function (items) {
    //     items.forEach(function (item) {
    //         this.addItem(item);
    //     }, this);
    // };

    // Remove an item from the array of items
    // this.removeItem = function (item) {
    //     let index = this.items.indexOf(item);
    //     if (index > -1) {
    //         this.items.splice(index, 1);
    //     }
    // };

    // Attach a place to the place property
    this.setPlace = function (destination) {
        place = destination;
    }

    // Return the players place
    this.getPlace = function () {
        return place;
    };

    // Return the players name
    let getNameInfo = function () {
        return name;
    };

    // Return the players health
    let getHealthInfo = function () {
        return `(${health})`;
    };

    // Return the players title = name and health
    let getTitleInfo = function () {
        return `${getNameInfo()} ${getHealthInfo()}`
    };

    // Return the players items - as a string
    let getItemsInfo = function () {
        let itemsString = "Items:" + newLine;

        if (items.length > 0) {
            items.forEach(function (item,/* i*/) {
                itemsString += `\t- ${item}${newLine}`;
                // itemsString += newLine;
            }/*, this */);
        } else {
            itemsString = "You have no items." + newLine;
        }

        return itemsString;
    };

    // Format the players info as a string
    let getInfo = function () {
        let info = spacer.box(getTitleInfo(), 40, "*");
        info += ` ${getItemsInfo()}`;
        info += spacer.line(40, "*");
        info += newLine;

        return info;
    };

    // Show the info for this player
    this.showInfo = function (character) {
        // console.log(getInfo(character));
        return getInfo(character);
    };
};

// Exports
// module.exports = Player;
export {Player};