
left_block = document.getElementById("left_block");
right_block = document.getElementById("right_block");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 150) {
        left_block.className = "side_block_left show_left";
        right_block.className = "side_block_right show_right";
    } 
};

window.addEventListener("scroll", myScrollFunc);