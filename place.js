"use strict";
// let spacer = require("./spacer");
import {spacer} from "./spacer.js";

let Place = function Place(title, description) {
    const newLine = spacer.newLine();

    // Properties of a Place
    let items = [];
    let exits = {};

    // exits is an uninitialised object for value -> pair
    // direction -> exit
    // "north" -> "kitchen"

    // Return the items in this place
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

    // Return the exits from this place
    let getExitsInfo = function () {
        let exitsString = `Exits from ${title}:${newLine}`;

        Object.keys(exits).forEach(function (key) {
            exitsString += `\t- ${key}${newLine}`;
        });

        return exitsString;
    };

    // Return the name of this place
    let getTitleInfo = function () {
        return spacer.box(title, 40, '=');
    };

    // Return the information about this place
    let getInfo = function () {
        let infoString = getTitleInfo();
        infoString += description + newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, '=') + newLine;

        return infoString;
    };

    // Display the information to the console
    this.showInfo = function () {
        console.log(getInfo());
    };

    // Add an item to the list or items in theis place
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

    // Adds an exit using key -> value pair [] direction -> exit
    this.addExit = function (direction, exit) {
        exits[direction] = exit;
    };

    // Add an array of exits to the list of exits
    // this.addExits = function (exitsArray) {
    //     exitsArray.forEach(function (item) {
    //         this.exits.push(item);
    //     }, this); // Needed to add 'this' as a parameter for enclosing context
    // };

    // Return the current exit
    this.getExit = function (direction) {
        return exits[direction];
    };

    // Return the last item in the array of items
    this.getLastItem = function () {
        return items.pop();
    };
};

// module.exports = Place;
export {Place};