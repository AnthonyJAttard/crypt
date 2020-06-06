"use strict";

// Map Code
(function () {

    let buildMap = function () {

        let Place = theCrypt.Place;

        // Create some places
        let kitchen = new Place(
            "The Kitchen",
            "You are in a kitchen. There is a disturbing smell."
        );

        let library = new Place(
            "The Old Library",
            "You are in a library. Dusty books line the walls."
        );

        let garden = new Place(
            "The Kitchen Garden",
            "You are in a small, walled garden."
        );

        let cupboard = new Place(
            "The Kitchen Cupboard",
            "You are in a cupboard. It's surprisingly roomy."
        );

        // Add items and exits to places
        kitchen.addItem("a piece of cheese");
        library.addItem("a rusty key");
        cupboard.addItem("a tin of spam");

        kitchen.addExit("south", library);
        kitchen.addExit("west", garden);
        kitchen.addExit("east", cupboard);

        library.addExit("north", kitchen);
        garden.addExit("east", kitchen);
        cupboard.addExit("west", kitchen);

        return kitchen;
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.buildMap = buildMap;

})();