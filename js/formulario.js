'use strict'

/*Cambio de imagen en formulario*/

$(document).ready(function(){
    var imagen = $('.formImg');
    var numero = 1;

    function ImgInterv(){
        setTimeout(function() {
            imagen.css('background-image', 'url(' + 'img/cont'+numero+'.jpg' + ')');
        }, 200);
        numero++;

        if(numero > 3){
            numero = 1;
        }
    }

    var intervaloIMG = setInterval(ImgInterv, 6000);
})




/*Validacion del formulario de consulta*/
$(document).ready(function(){
    $('#button-contacto').click(function(){
        var consultaNombre = document.getElementById('nombre-contact').value;
        var consultaCorreo = document.getElementById('email-contact').value;
        var consultaTelefono = document.getElementById('telefono-contact').value;
        var consultaMensaje = document.getElementById('mensaje').value;

        if(consultaNombre == null || consultaNombre.length==0 || /^\s+$/.test(consultaNombre)){
            alert("El campo 'Nombre Completo' no esta completado correctamente");
            return false;
        }else if(consultaTelefono==null || consultaTelefono.length<7 || isNaN(consultaTelefono) || /^\s+$/.test(consultaTelefono)){
            alert("El campo 'Teléfono' no esta completado correctamente \nSe requiere de minimo 7 digitos");
            return false;
        }else if(consultaCorreo.indexOf('@', 0) == -1 || consultaCorreo.indexOf('.', 0) == -1){
            alert("El campo 'Email' no esta completado correctamente");
            return false;
        }else if(consultaMensaje == null || consultaMensaje.length == 0 || /^\s+$/.test(consultaMensaje)){
            alert("Es necesario llenar la casilla de mensaje");
            return false;
        }  
    })
})

//Mensaje de confirmacion de consulta
$('#formContacto').on('submit',function(e){
    $('#modalConsulta').modal('show');

    e.preventDefault();
})

$('.close-modal-consulta').click(function(){
    $('#formContacto')[0].reset();
})


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

/*LIMPIAR FORMULARIO*/
$('#btnCCond').click(function(){
	$('#formContacto').trigger("reset");
});
