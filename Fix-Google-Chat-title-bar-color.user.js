// ==UserScript==
// @name         Fix Google Chat color
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       vincent.remond@gmail.com
// @match        https://mail.google.com/chat/u/0/
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        if(document.querySelector('head meta[name="theme-color"]') == null) {
            const link=document.createElement('meta');
            link.setAttribute('name', "theme-color");
            link.setAttribute('content', "#181A1B");
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }, 1000);
})();
