// ==UserScript==
// @name         Add search to form
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a replace 'cars' options with a select2 javascript element.
// @author       quique.llorente@gmail.com
// @match        https://qinqon.github.io/
// @require http://code.jquery.com/jquery-1.8.3.js
// @require http://code.jquery.com/ui/1.9.2/jquery-ui.js
// @require https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js
// ==/UserScript==


$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

for (var i = document.styleSheets.length - 1; i >= 0; i--) {
    document.styleSheets[i].disabled = true;
}

var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css';
document.getElementsByTagName("head")[0].appendChild(link);
var cars = document.getElementById("cars");
cars.classList.add('js-example-basic-single');
cars.style = 'width:200px;';
