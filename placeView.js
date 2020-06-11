"use strict";

(function () {
    const newLine = spacer.newLine();

    /**
     * Return the items in this place
     * @returns {string}
     */
    let getItemsInfo = function (placeData) {
        let itemsString = `Items: ${newLine}`;

        if (placeData.items.length > 0) {
            placeData.items.forEach(function (item) {
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
    let getExitsInfo = function (placeData) {
        let exitsString = `Exits from ${placeData.title}:${newLine}`;

        placeData.exits.forEach(function (direction) {
            exitsString += `\t- ${direction}${newLine}`;
        });

        return exitsString;
    };

    /**
     * Return the name of this place
     * @returns {string}
     */
    let getTitleInfo = function (placeData) {
        return spacer.box(placeData.title, 40, '=');
    };

    /**
     * Return the information about this place
     * @returns {string}
     */
    let getInfo = function (placeData) {
        let infoString = getTitleInfo(placeData);
        infoString += placeData.description + newLine + newLine;
        infoString += getItemsInfo(placeData) + newLine;
        infoString += getExitsInfo(placeData);
        infoString += spacer.line(40, '=') + newLine;

        return infoString;
    };

    /**
     * Display the information to the console
     */
    let render = function (place) {
        console.log(getInfo(place.getData()));
        // return getInfo();
    };

    if (window.placeView === undefined) {
        window.placeView = {};
    }

    theCrypt.placeView = {
        render: render
    };

})();