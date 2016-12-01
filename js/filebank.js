/*
JavaScript for FileBank
Author: David Pyle
Student ID: 041110777
Date: 12 Oct 2016
*/

$(document).ready(function(){
	
	//set the height of the browser window
	var num= $('.splash').height();
	 
	 //if the arrow is clicked animate scroll to the main menu
    $("#arrows a").click(function() {
        $('html, body').animate({
            scrollTop: num
        }, 1500);
    });
    
	//if the user resizes their browser window then re-calculate the browser window height
    $(window).resize(function() {
        num = $('.splash').height();
    });

	//when the user the scrolls past the splash screen, fix the menu bar at the top
	//of the window when it gets to the top during the scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        
        if (scroll >= num) {  
            $('.menubg').addClass('fixed');
        } else {
            $('.menubg').removeClass('fixed');
        }
    });
	
});
