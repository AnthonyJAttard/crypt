"use strict";
let spacer = {

    blank: function () {
        return "";
    },

    newLine: function () {
        return "\n";
    },

    /**
     * @param {number} length
     * @param {string} character
     */
    line: function (length, character) {
        let longString = "****************************************";
        longString += "----------------------------------------";
        longString += "========================================";
        longString += "++++++++++++++++++++++++++++++++++++++++";
        longString += "                                        ";
        length = Math.max(0, length);
        length = Math.min(40, length);
        return longString.substr(longString.indexOf(character), length);
    },
    
    line2: function(length, character) {
        let longString = '';
        for (let i = 0; i < length; i++) {
            longString += character;
        }
        return longString;
    },

    wrap : function (text, length, character) {
        let padLength = length - text.length - 3;
        let wrapText = character + " " + text;
        wrapText += spacer.line(padLength, " ");
        wrapText += character;
        return wrapText;
    },

    box: function (text, length, character) {
        let boxText = spacer.newLine();
        boxText += spacer.line2(length, character) + spacer.newLine();
        boxText += spacer.wrap(text, length, character) + spacer.newLine();
        boxText += spacer.line2(length, character) + spacer.newLine();
        return boxText;
    }
};

//module.exports = spacer;
// export {spacer};