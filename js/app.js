/*global $*/
var main = function () {
    'use strict';
    var i = 1;
    $(document).keypress(function (event) {
        if (event.which === 13) {
            if (i === 1) {
                document.getElementById("logo2").src = "images/about1.png";
                i = i + 1;
            } else if (i === 2) {
                document.getElementById("logo2").src = "images/bluemat.png";
                i = i + 1;
            } else if (i === 3) {
                document.getElementById("logo2").src = "images/redmat.png";
                i = i + 1;
            } else if (i === 4) {
                document.getElementById("logo2").src = "images/dev.png";
                i = 1;
            }
        }
    });
    $('.icon-menu').click(function () {
        $('.menu').animate({
            left: "0px"
        }, 200);
    });

    $('.icon-close').click(function () {
        $('.menu').animate({
            left: "-285px"
        }, 200);
        
    });
};
$(document).ready(main);