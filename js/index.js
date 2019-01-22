'use strict'

/*deslizamiento del nav*/
$(document).ready(function(){
    $(document).ready(function () {
         $('a[href*=\\#]:not([href=\\#carouselFade])').click(function () {
             $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600, 'linear');
         });
     });
});

/*Volver hacia arriba*/

$(".footerlogo img").click(function() {
	$("html, body").animate({scrollTop:0},"slow");
	return false;
});


/*******nav fixed**********/
$(document).ready(navbarFixed());

var nosotros = $('#experiencia').offset().top;

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



/**************card slider************/
// if($('body').width() >= 768){
//     $(document).ready(function(){
//         var flag = 1;
//         var imagen = $('#experiencia');
//         var numero = 1;
//         $("#next").click(function(){
//             if(flag == 0){
//                 numero = 1;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","50");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide2").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide4").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide5").css("transform","translate(-100%,-50%) scale(.7)");
//                 flag = 1;
//             } else if(flag == 1){
//                 numero = 4;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","50");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide3").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide5").css("transform","translate(-80%,-50%) scale(.6)");
//                 flag = 2;
//             }else if(flag == 2){
//                 numero = 2;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","50");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide2").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide4").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-20%,-50%) scale(.6)");
//                 flag = 3;
//             }else if(flag == 3){
//                 numero = 3;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","50");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide2").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide3").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide5").css("transform","translate(0%,-50%) scale(.7)");
//                 flag = 4;
//             }else if(flag == 4){
//                 numero = 5;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","50");
//                 $(".slide1").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide3").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide4").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(1)");
//                 flag = 0;
//             }
//         });

//         $("#prev").click(function(){
//             if(flag == 0){
//                 numero = 3;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","50");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide2").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide3").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide5").css("transform","translate(0%,-50%) scale(.7)");
//                 flag = 4;
//             }else if(flag == 1){
//                 numero = 5;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","50");
//                 $(".slide1").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide3").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide4").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(1)");
//                 flag = 0;
//             }else if(flag == 2){
//                 numero = 1;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","50");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide2").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide4").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide5").css("transform","translate(-100%,-50%) scale(.7)");
//                 flag = 1;
//             }else if(flag == 3){
//                 numero = 4;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","50");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide3").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-20%,-50%) scale(.6)");
//                 $(".slide5").css("transform","translate(-80%,-50%) scale(.6)");
//                 flag = 2;
//             }else if(flag == 4){
//                 numero = 2;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","50");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-80%,-50%) scale(.6)");
//                 $(".slide2").css("transform","translate(-100%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide4").css("transform","translate(0%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-20%,-50%) scale(.6)");
//                 flag = 3;
//             }
//         });
//     });
// }

/*******card slider responsive******/
// if($('body').width() <= 767){
//     $(document).ready(function(){
//         var flag = 1;
//         var imagen = $('#experiencia');
//         var numero = 1;
//         $("#next").click(function(){
//             if(flag == 0){
//                 numero = 1;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","50");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 1;
//             } else if(flag == 1){
//                 numero = 4;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","50");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 2;
//             }else if(flag == 2){
//                 numero = 2;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","50");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 3;
//             }else if(flag == 3){
//                 numero = 3;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","50");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 4;
//             }else if(flag == 4){
//                 numero = 5;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","50");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(1)");
//                 flag = 0;
//             }
//         });

//         $("#prev").click(function(){
//             if(flag == 0){
//                 numero = 3;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","50");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 4;
//             }else if(flag == 1){
//                 numero = 5;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","50");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(1)");
//                 flag = 0;
//             }else if(flag == 2){
//                 numero = 1;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","50");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 1;
//             }else if(flag == 3){
//                 numero = 4;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","50");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 2;
//             }else if(flag == 4){
//                 numero = 2;
//                 imagen.css('background-image', 'url(' + '/img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","50");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//                 flag = 3;
//             }
//         });
//     });
// }

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


/*************cards range slider*****************/
if($('body').width() >= 768){
    $(document).ready(function(){
        var slider = document.getElementById("myRange");
        var imagen = $('#experiencia');
        var numero = 1;

        slider.oninput = function(){
            if(this.value >= 1 && this.value <= 4){
                numero = 3;
                imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
                $(".slide1").css("z-index","30");
                $(".slide2").css("z-index","30");
                $(".slide3").css("z-index","40");
                $(".slide4").css("z-index","50");
                $(".slide5").css("z-index","40");
                $(".slide1").css("transform","translate(-20%,-50%) scale(.6)");
                $(".slide2").css("transform","translate(-80%,-50%) scale(.6)");
                $(".slide3").css("transform","translate(-100%,-50%) scale(.7)");
                $(".slide4").css("transform","translate(-50%,-50%) scale(1)");
                $(".slide5").css("transform","translate(0%,-50%) scale(.7)");
            }else if(this.value > 4 && this.value <= 8){
                numero = 5;
                imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
                $(".slide1").css("z-index","40");
                $(".slide2").css("z-index","30");
                $(".slide3").css("z-index","30");
                $(".slide4").css("z-index","40");
                $(".slide5").css("z-index","50");
                $(".slide1").css("transform","translate(0%,-50%) scale(.7)");
                $(".slide2").css("transform","translate(-20%,-50%) scale(.6)");
                $(".slide3").css("transform","translate(-80%,-50%) scale(.6)");
                $(".slide4").css("transform","translate(-100%,-50%) scale(.7)");
                $(".slide5").css("transform","translate(-50%,-50%) scale(1)");
            }else if(this.value > 8 && this.value <= 12){
                numero = 1;
                imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
                $(".slide1").css("z-index","50");
                $(".slide2").css("z-index","40");
                $(".slide3").css("z-index","30");
                $(".slide4").css("z-index","30");
                $(".slide5").css("z-index","40");
                $(".slide1").css("transform","translate(-50%,-50%) scale(1)");
                $(".slide2").css("transform","translate(0%,-50%) scale(.7)");
                $(".slide3").css("transform","translate(-20%,-50%) scale(.6)");
                $(".slide4").css("transform","translate(-80%,-50%) scale(.6)");
                $(".slide5").css("transform","translate(-100%,-50%) scale(.7)");               
            }else if(this.value > 12 && this.value <= 16){
                numero = 4;
                imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
                $(".slide1").css("z-index","40");
                $(".slide2").css("z-index","50");
                $(".slide3").css("z-index","40");
                $(".slide4").css("z-index","30");
                $(".slide5").css("z-index","30");
                $(".slide1").css("transform","translate(-100%,-50%) scale(.7)");
                $(".slide2").css("transform","translate(-50%,-50%) scale(1)");
                $(".slide3").css("transform","translate(0%,-50%) scale(.7)");
                $(".slide4").css("transform","translate(-20%,-50%) scale(.6)");
                $(".slide5").css("transform","translate(-80%,-50%) scale(.6)");
            }else if(this.value > 16 && this.value <= 21){
                numero = 2;
                imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
                $(".slide1").css("z-index","30");
                $(".slide2").css("z-index","40");
                $(".slide3").css("z-index","50");
                $(".slide4").css("z-index","40");
                $(".slide5").css("z-index","30");
                $(".slide1").css("transform","translate(-80%,-50%) scale(.6)");
                $(".slide2").css("transform","translate(-100%,-50%) scale(.7)");
                $(".slide3").css("transform","translate(-50%,-50%) scale(1)");
                $(".slide4").css("transform","translate(0%,-50%) scale(.7)");
                $(".slide5").css("transform","translate(-20%,-50%) scale(.6)");
            }
        }
    });
}
/*******card  range slider responsive******/
// if($('body').width() <= 767){
//     $(document).ready(function(){
//         var slider = document.getElementById("myRange");
//         var imagen = $('#experiencia');
//         var numero = 1;

//         slider.oninput = function(){
//             if(this.value >= 1 && this.value <= 4){
//                 numero = 3;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","50");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//             }else if(this.value > 4 && this.value <= 8){
//                 numero = 5;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","30");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","50");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(1)");
//             }else if(this.value > 8 && this.value <= 12){
//                 numero = 1;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","50");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","30");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","40");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//             }else if(this.value > 12 && this.value <= 16){
//                 numero = 4;
//                 imagen.css('background-image', 'url('+'img/bgexp'+numero+'.jpg'+')');
//                 $(".slide1").css("z-index","40");
//                 $(".slide2").css("z-index","50");
//                 $(".slide3").css("z-index","40");
//                 $(".slide4").css("z-index","30");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//             }else if(this.value > 16 && this.value <= 21){
//                 numero = 2;
//                 imagen.css('background-image', 'url(' + 'img/bgexp'+numero+'.jpg' + ')');
//                 $(".slide1").css("z-index","30");
//                 $(".slide2").css("z-index","40");
//                 $(".slide3").css("z-index","50");
//                 $(".slide4").css("z-index","40");
//                 $(".slide5").css("z-index","30");
//                 $(".slide1").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide2").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide3").css("transform","translate(-50%,-50%) scale(1)");
//                 $(".slide4").css("transform","translate(-50%,-50%) scale(.7)");
//                 $(".slide5").css("transform","translate(-50%,-50%) scale(.7)");
//             }
//         }
//     });
// }
/******************/

    $(document).ready(function(){
        var rango =  document.getElementById("myRange");
        $('.mensaje1').click(function(){
            $('.slidemen1 .powr-comments').toggleClass("mostrar");    
            
            if($('#8b9ba30b_1547576075').hasClass('mostrar')){
                rango.disabled = true;
                $('.sliderRange').css("background","grey");
                $('.mensaje1 img').fadeOut(function(){
                    $(this).attr("src","img/cerrar.png").fadeIn("fast");
                });
            }else {
                rango.disabled = false;
                $('.sliderRange').css("background","#d15a06");
                $('.mensaje1 img').fadeOut(function(){
                    $(this).attr("src","img/mensaje.png").fadeIn("fast");
                });
            }
        });
        $('.mensaje2').click(function(){
            $('.slidemen2 .powr-comments').toggleClass("mostrar");    
            
            if($('#2990692b_1547576593').hasClass('mostrar')){
                rango.disabled = true;
                $('.sliderRange').css("background","grey");
                $('.mensaje2 img').fadeOut(function(){
                    $(this).attr("src","img/cerrar.png").fadeIn("fast");
                });
            }else {
                rango.disabled = false;
                $('.sliderRange').css("background","#d15a06");
                $('.mensaje2 img').fadeOut(function(){
                    $(this).attr("src","img/mensaje.png").fadeIn("fast");
                });
            }
        });
        $('.mensaje3').click(function(){
            $('.slidemen3 .powr-comments').toggleClass("mostrar");    
            
            if($('#745908a7_1547585394').hasClass('mostrar')){
                rango.disabled = true;
                $('.sliderRange').css("background","grey");
                $('.mensaje3 img').fadeOut(function(){
                    $(this).attr("src","img/cerrar.png").fadeIn("fast");
                });
            }else {
                rango.disabled = false;
                $('.sliderRange').css("background","#d15a06");
                $('.mensaje3 img').fadeOut(function(){
                    $(this).attr("src","img/mensaje.png").fadeIn("fast");
                });
            }
        });
        $('.mensaje4').click(function(){
            $('.slidemen4 .powr-comments').toggleClass("mostrar");    
            
            if($('#9abe055c_1547585545').hasClass('mostrar')){
                rango.disabled = true;
                $('.sliderRange').css("background","grey");
                $('.mensaje4 img').fadeOut(function(){
                    $(this).attr("src","img/cerrar.png").fadeIn("fast");
                });
            }else {
                rango.disabled = false;
                $('.sliderRange').css("background","#d15a06");
                $('.mensaje4 img').fadeOut(function(){
                    $(this).attr("src","img/mensaje.png").fadeIn("fast");
                });
            }
        });
        $('.mensaje5').click(function(){
            $('.slidemen5 .powr-comments').toggleClass("mostrar");    
            
            if($('#97e7f5fd_1547585700').hasClass('mostrar')){
                rango.disabled = true;
                $('.sliderRange').css("background","grey");
                $('.mensaje5 img').fadeOut(function(){
                    $(this).attr("src","img/cerrar.png").fadeIn("fast");
                });
            }else {
                rango.disabled = false;
                $('.sliderRange').css("background","#d15a06");
                $('.mensaje5 img').fadeOut(function(){
                    $(this).attr("src","img/mensaje.png").fadeIn("fast");
                });
            }
        });    
    });

// else if($('body').width() <= 767){
//     $(document).ready(function(){
//         $('.mensaje1').click(function(){
//             $('.powr-comments').toggleClass("mostrar");    
            
//             if($('.#8b9ba30b_1547576075').hasClass('mostrar')){                
//                 $('.mensaje1 img').fadeOut(function(){
//                     $(this).attr("src","img/cerrar.png").fadeIn("fast");
//                 });
//             }else {                                
//                 $('.mensaje1 img').fadeOut(function(){
//                     $(this).attr("src","img/mensaje.png").fadeIn("fast");
//                 });
//             }
//         });
//         $('.mensaje2').click(function(){
//             $('.powr-comments').toggleClass("mostrar");    
            
//             if($('#2990692b_1547576593').hasClass('mostrar')){                
//                 $('.mensaje2 img').fadeOut(function(){
//                     $(this).attr("src","img/cerrar.png").fadeIn("fast");
//                 });
//             }else {
//                 $('.mensaje2 img').fadeOut(function(){
//                     $(this).attr("src","img/mensaje.png").fadeIn("fast");
//                 });
//             }
//         });
//         $('.mensaje3').click(function(){
//             $('.powr-comments').toggleClass("mostrar");    
            
//             if($('#745908a7_1547585394').hasClass('mostrar')){
//                 $('.mensaje3 img').fadeOut(function(){
//                     $(this).attr("src","img/cerrar.png").fadeIn("fast");
//                 });
//             }else {
//                 $('.mensaje3 img').fadeOut(function(){
//                     $(this).attr("src","img/mensaje.png").fadeIn("fast");
//                 });
//             }
//         });
//         $('.mensaje4').click(function(){
//             $('.powr-comments').toggleClass("mostrar");    
            
//             if($('#9abe055c_1547585545').hasClass('mostrar')){
//                 $('.mensaje4 img').fadeOut(function(){
//                     $(this).attr("src","img/cerrar.png").fadeIn("fast");
//                 });
//             }else {
//                 $('.mensaje4 img').fadeOut(function(){
//                     $(this).attr("src","img/mensaje.png").fadeIn("fast");
//                 });
//             }
//         });
//         $('.mensaje5').click(function(){
//             $('.powr-comments').toggleClass("mostrar");    
            
//             if($('#97e7f5fd_1547585700').hasClass('mostrar')){
//                 $('.mensaje5 img').fadeOut(function(){
//                     $(this).attr("src","img/cerrar.png").fadeIn("fast");
//                 });
//             }else {
//                 $('.mensaje5 img').fadeOut(function(){
//                     $(this).attr("src","img/mensaje.png").fadeIn("fast");
//                 });
//             }
//         });    
//     });
// };


/********carousel de nosotros responsive*********/
$(document).ready(function(){
    var owl=$('.owl-nosotros');

    owl.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Custom Navigation Events
	$('.izquierda1').click(function () {
		owl.trigger('prev.owl.carousel');
	})
	$('.derecha1').click(function () {
		owl.trigger('next.owl.carousel');
	})
});
/********carousel de experiencias responsive*********/
$(document).ready(function(){
    var owl=$('.owl-experiencia');

    owl.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
