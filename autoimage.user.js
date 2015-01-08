// ==UserScript==
// @name       Reddit AutoImage Shower.
// @version    1.0a
// @description Automatically show images on Reddit with RES.
// @match      http://www.reddit.com/r/*/
// @copyright  2015+, rf5860
// ==/UserScript==

setTimeout(function() {
    document.getElementById('viewImagesButton')
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window.wrappedJSObject, 0, 1, 1, 1, 1, false, false, false, false, 0, null);
    document.getElementById('viewImagesButton').dispatchEvent(evt);
}, 3000);
