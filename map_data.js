/* Get Programming with JavaScript
 * Listing 14.04
 * Map data (Kitchen example)
 */

(function () {

    let mapData = {
        "title": "The Dark House",
        "firstPlace": "The Kitchen",

        "places": [
            {
                "title": "The Kitchen",
                "description": "You are in a kitchen. There is a disturbing smell.",
                "items": ["a piece of cheese"],
                "exits": [
                    {
                        "direction": "south",
                        "to": "The Old Library",
                        "challenge": {
                            "message": "A zombie sinks its teeth into your neck.",
                            "success": "The zombie disintegrates into a puddle of goo.",
                            "failure": "The zombie is strangely resistent.",
                            "requires": "holy water",
                            "itemConsumed": true,
                            "damage": 20
                        }
                    },
                    {"direction": "west", "to": "The Kitchen Garden"},
                    {"direction": "east", "to": "The Kitchen Cupboard"}
                ]
            },
            {
                "title": "The Old Library",
                "description": "You are in a library. Dusty books line the walls.",
                "items": ["a rusty key"],
                "exits": [
                    {"direction": "north", "to": "The Kitchen"}
                ]
            },
            {
                "title": "The Kitchen Garden",
                "description": "You are in a small, walled garden.",
                "exits": [
                    {"direction": "east", "to": "The Kitchen"}
                ]
            },
            {
                "title": "The Kitchen Cupboard",
                "description": "You are in a cupboard. It's surprisingly roomy.",
                "items": ["a tin of Spam"],
                "exits": [
                    {"direction": "west", "to": "The Kitchen"}
                ]
            }
        ]
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.mapData = mapData;

})();