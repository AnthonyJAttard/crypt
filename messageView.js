"use strict";
/**
 * messageView.js
 */
(function () {

    /**
     * Return the formatted message string
     * @param messageData
     * @returns {string}
     */
    let getMessageInfo = function (messageData) {
        return `*** ${messageData} ***`;
    };

    /**
     * Render the message string
     * @param message
     */
    let render = function (message) {
        console.error(getMessageInfo(message));
    };

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.messageView = {
        render: render
    };

})();