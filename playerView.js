"use strict";
/*
    playerView

    Splits view from playerData Module
 */

(function () {
    const newLine = spacer.newLine();
    /**
     * Return the player name
     * @returns {string}
     */
    let getNameInfo = function (playerData) {
        return `${playerData.name}`;
    };


    /**
     * Return the players health
     * @returns {string}
     */
    let getHealthInfo = function (playerData) {
        return `(${playerData.health})`;
    };

    /**
     * Return the player items - as a string
     * @returns {string}
     */
    let getItemsInfo = function (playerData) {
        let itemsString = "Items:" + newLine;

        if (playerData.items.length > 0) {
            playerData.items.forEach(function (item,/* i*/) {
                itemsString += `\t- ${item}${newLine}`;
                // itemsString += newLine;
            }/*, this */);
        } else {
            itemsString = "You have no items." + newLine;
        }

        return itemsString;
    };

    /**
     * Return the player title = name and health
     * @returns {string}
     */
    let getTitleInfo = function (playerData) {
        return `${getNameInfo(playerData)} ${getHealthInfo(playerData)}`
    };

    /**
     * Format the player info as a string
     * @returns {string}
     */
    this.getInfo = function (playerData) {
        let info = spacer.box(getTitleInfo(playerData), 40, "*");
        info += ` ${getItemsInfo(playerData)}`;
        info += spacer.line(40, "*");
        info += newLine;

        return info;
    };

    /**
     * Show the info for this player
     */
    let render = function (player) {
        console.log(player.getData());
        // return getInfo();
    };

    if (window.playerDataView === undefined) {
        window.playerDataView = {};
    }

    theCrypt.playerDataView = {
        render: render
    };
    
})();