
$(document).ready(function() {
    $('#link_1').click(function(){
       $('html, body').animate({scrollTop:$('#anchor_1').position().top - 80}, 1000);
    });
    $('#link_2').click(function(){
       $('html, body').animate({scrollTop:$('#anchor_2').position().top - 80}, 1000);
    });
    $('#link_3').click(function(){
       $('html, body').animate({scrollTop:$('#anchor_3').position().top - 80}, 1000);
    });
    $('#link_4').click(function(){
       $('html, body').animate({scrollTop:$('#anchor_4').position().top - 80}, 1000);
    });
    $('#link_5').click(function(){
        $('html, body').animate({scrollTop:$('#carousel_section').position().top - 80}, 1000);
     });
    $('.arrow_top').click(function(){
       $('html, body').animate({scrollTop:$('#header_section').position().top - 300}, 1000);
    });
});
