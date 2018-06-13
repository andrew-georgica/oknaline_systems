
left_block = document.getElementById("left_block");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 150) {
        left_block.className = "side_block show_left"
    } 
};

window.addEventListener("scroll", myScrollFunc);