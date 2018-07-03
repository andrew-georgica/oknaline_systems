
header_block = document.getElementById("header_side_block");

$(document).ready(function() {
    header_block.className = "header_side_block show_right";
});

// left_block = document.getElementById("left_block");
// right_block = document.getElementById("right_block");
// left_block_bottom = document.getElementById("left_block_bottom");
// advantages_left = document.getElementById("advantages_left");
// title_container_1 = document.getElementById("title_container_1");
// title_container_2 = document.getElementById("title_container_2");
// title_container_3 = document.getElementById("title_container_3");
// title_container_4 = document.getElementById("title_container_4");

// var myScrollFunc = function () {
//     var y = window.scrollY;
    

//     if (y >= 100) {
//         left_block.className = "side_block_left show_left";
//         title_container_1.className = "title_container show_left";
//     }
    
//     if (y >= 800 ) {
//         title_container_2.className = "title_container show_left";
//         right_block.className = "side_block_right show_right";
//     }

//     if (y >= 1700 ) {
//         left_block_bottom.className = "side_block_left show_left";
//         title_container_3.className = "title_container show_left";
//     }

//     if (y >= 3200 ) {
//         advantages_left.className = "straight_side_block_left show_left";
//         title_container_4.className = "title_container_right show_right";
//     }
// };

// window.addEventListener("scroll", myScrollFunc);




// $(function(){
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 100){
//             $('.title_container_1').addClass('show_left');
//             $('.side_block_left_1').addClass('show_left');
//         }
//         else{
            
//         }
//     });
// });


// $(function(){
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 800){
//             $('.title_container_2').addClass('show_left');
//             $('.side_block_right_1').addClass('show_right');
//         }
//         else{
//             $('.side_block_right_1').removeClass('hide_left');
//         }
//     });
// });


// $(function(){
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 1800){
//             $('.title_container_3').addClass('show_left');
//             $('.side_block_left_3').addClass('show_left');
//         }
//         else{
            
//         }
//     });
// });


// $(function(){
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 3500){
//             $('.title_container_right_1').addClass('show_right');
//             $('.straight_side_block_left_1').addClass('show_left');
//         }
//         else{
            
//         }
//     });
// });


function myFunction(x) {
    if (x.matches) { // If media query matches

        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 150){
                    $('.title_container_1').addClass('show_left');
                    $('.side_block_left_1').addClass('show_left');
                }
                else{
                    
                }
            });
        });
        
        
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 1050){
                    $('.title_container_2').addClass('show_left');
                    $('.side_block_right_1').addClass('show_right');
                }
                else{
                    $('.side_block_right_1').removeClass('hide_left');
                }
            });
        });
        
        
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 2000){
                    $('.title_container_3').addClass('show_left');
                    $('.side_block_left_3').addClass('show_left');
                }
                else{
                    
                }
            });
        });
        
        
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 3600){
                    $('.title_container_right_1').addClass('show_right');
                    $('.straight_side_block_left_1').addClass('show_left');
                }
                else{
                    
                }
            });
        });
        
    // /---------------------------------------------------------------------/

    } else {

        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100){
                    $('.title_container_1').addClass('show_left');
                    $('.side_block_left_1').addClass('show_left');
                }
                else{
                    
                }
            });
        });
        
        
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 900){
                    $('.title_container_2').addClass('show_left');
                    $('.side_block_right_1').addClass('show_right');
                }
                else{
                    $('.side_block_right_1').removeClass('hide_left');
                }
            });
        });
        
        
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 1800){
                    $('.title_container_3').addClass('show_left');
                    $('.side_block_left_3').addClass('show_left');
                }
                else{
                    
                }
            });
        });
        
        
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 3500){
                    $('.title_container_right_1').addClass('show_right');
                    $('.straight_side_block_left_1').addClass('show_left');
                }
                else{
                    
                }
            });
        });
        
        
    }
}

var x = window.matchMedia("(max-width: 960px)");
myFunction(x);
x.addListener(myFunction);