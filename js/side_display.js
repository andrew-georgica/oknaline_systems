
left_block = document.getElementById("left_block");
right_block = document.getElementById("right_block");
left_block_bottom = document.getElementById("left_block_bottom");
advantages_left = document.getElementById("advantages_left");
title_container_1 = document.getElementById("title_container_1");
title_container_2 = document.getElementById("title_container_2");
title_container_3 = document.getElementById("title_container_3");
title_container_4 = document.getElementById("title_container_4");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 250) {
        left_block.className = "side_block_left show_left";
        title_container_1.className = "title_container show_left";
    }
    
    if (y >= 1000 ) {
        title_container_2.className = "title_container show_left";
        right_block.className = "side_block_right show_right";
    }

    if (y >= 1900 ) {
        left_block_bottom.className = "side_block_left show_left";
        title_container_3.className = "title_container show_left";
    }

    if (y >= 3200 ) {
        advantages_left.className = "straight_side_block_left show_left";
        title_container_4.className = "title_container_right show_right";
    }
};

window.addEventListener("scroll", myScrollFunc);