
left_block = document.getElementById("left_block");
right_block = document.getElementById("right_block");
title_container = document.getElementById("title_container");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 250) {
        left_block.className = "side_block_left show_left";
        title_container.className = "title_container show_left";
        right_block.className = "side_block_right show_right";
    } 
};

window.addEventListener("scroll", myScrollFunc);