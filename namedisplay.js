// ==UserScript==
// @name         UCL PDF Tab Title Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically change tab title for UCL PDF files
// @author       Menql
// @match        https://ucl-eu-west-2-moodle-sitedata.s3.eu-west-2.amazonaws.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function extractFileName(url) {

        const match = url.match(/filename%3D%22([^"]+?)%22/);
        if (match && match[1]) {

            const decodedName = decodeURIComponent(match[1]);

            return decodedName;
        }

        return null;
    }

    function addButton() {

        if (!window.location.href.includes('ucl-eu-west-2-moodle-sitedata')) {
            return;
        }


        const button = document.createElement('button');
        button.innerText = 'set the name of the tab';
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.left = '10px';
        button.style.zIndex = '999999';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '14px';
        button.style.fontFamily = 'Arial, sans-serif';

        // 添加点击事件
        button.onclick = function() {

            const fileName = extractFileName(window.location.href);

            if (fileName) {
                document.title = fileName;
            } else {
                alert('cannot extract the file');
            }
        };


        if (document.body) {
            document.body.appendChild(button);
        }
    }


    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addButton);
    } else {
        addButton();
    }


    setTimeout(addButton, 1000);
})();