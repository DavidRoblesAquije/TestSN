'use strict'
/*Volver hacia arriba*/

$(".footerlogo img").click(function() {
	$("html, body").animate({scrollTop:0},"slow");
	return false;
});

/*******nav fixed**********/
$(document).ready(navbarFixed());

var nosotros = $('.m2').offset().top;

$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop() > nosotros){
            $('.navbarSNorte').css('position','fixed');
        } else {
            $('.navbarSNorte').css('position','absolute');
        }
    });
})

function navbarFixed(){
    $(window).on('scroll',function(){
        if($(window).scrollTop() > nosotros){
            $('.navbarSNorte').css('position','fixed');
        } else {
            $('.navbarSNorte').css('position','absolute');
        }
    });
}

/*Scroll hacia arriba*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if(($(window).scrollTop() > nosotros)){
    $('.navbarSNorte').css('top','-20%');
    if (prevScrollpos > currentScrollPos) {
        $('.navbarSNorte').css("top","0");
      } else {
        $('.navbarSNorte').css("top","-20%");
      }
      prevScrollpos = currentScrollPos;
}
  
}

/********navbar responsive hamburguer button*******/  

$(document).ready(function(){
    $('.toogle-responsive').click(function(){
        $('.toogle-responsive').toggleClass('active');
    });
})

$(document).ready(function(){   
    $('.toogle-responsive').click(function(){
        if($('.toogle-responsive').hasClass('active')){
            $('.sidebar-responsive').css("top","0%");   
            $('.toogle-responsive').css("background","transparent");         
            $('.hambur-responsive').toggleClass("change");
            $('.overlay').css("display",'block');
            $('body').css("overflow","hidden");
        }
        else{
            $('.sidebar-responsive').css("top","-150%");  
            $('.toogle-responsive').css("background","#f5f4f4");         
            $('.sidebar-responsive .sub-menu ul').removeClass('activeSidebarResponsive');   
            $('.hambur-responsive').toggleClass("change"); 
            $('.overlay').css("display",'none');       
            $('body').css("overflow","auto");
        }
    })
    
    $('.sidebar-responsive a').click(function(){     
        $('.sidebar-responsive').css("top","-150%");
        $('.toogle-responsive').css("background","#f5f4f4");   
        $('.sidebar-responsive .sub-menu ul').removeClass('activeSidebarResponsive');
        $('.hambur-responsive').toggleClass("change");
        $('.overlay').css("display",'none');   
        $('body').css("overflow","auto");
        $('.toogle-responsive').toggleClass('active');
    });
}); 