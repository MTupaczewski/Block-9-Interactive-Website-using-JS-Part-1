/*global $*/
var main = function () {
    'use strict';
    $(document).keypress(function (event) {
        if (event.which === 13) {
            document.getElementById("logo").src = "images/about1.png";
        } else if (event.which === 90) {
            document.getElementById("logo1").src = "images/redmat.png";
        } else if (event.which === 78) {
            document.getElementById("logo2").src = "images/bluemat.png";
        } else if (event.which === 70) {
            document.getElementById("logo3").src = "images/dev.png";
        }
    });
    $('.icon-menu').click(function () {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "285px"
        }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function () {
        $('.menu').animate({
            left: "-285px"
        }, 200);
        
        $('body').animate({
            left: "0px"
        }, 200);
    });
};
$(document).ready(main);