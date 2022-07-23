$(document).ready(function(){

    // navigation

    function link(selector,location){
        $(selector).click(function(){
            document.location.href = `./index.html${location}`;
        })
    };

    link('#homebtn','#home');
    link('#aboutbtn','#about');
    link('#planbtn','#plan');
    link('#contactbtn','#contact');

    $('#placebtn').click(function(){
        $('.navigation').toggleClass('down');
        $(this).toggleClass('turnover');
    });

    $('#modebtn').click(function(){
        $('body').toggleClass('dark');
        $('.home').css({
            'background':'url(./src/img/bg3.jpg)',
            'background-size':'auto 100%'
        });
        $('#about').toggleClass('bg-warning bg-dark');
        $('.label-group').children().toggleClass('text-dark');
        $('#plan').toggleClass('bg-danger bg-dark');
        $('#contact').toggleClass('bg-success bg-dark');
    }),1000;

    $('#dropbtn').click(function(){
        $('#navslide').slideToggle();
        $('#dropicon').toggleClass('fa-bars');
        $('#dropicon').toggleClass('fa-angle-down');
        $(this).toggleClass('turnover');
    });


    // home

    $('#namecard').click(function(){
        $(this).css('animation','shake 1s linear 0s 2 alternate');
    });





    // form
    
    $('.form-control').css('border','1px solid grey');

    let identity = ['#name','#email','#address'];
    for(let y=0; y < identity.length; y++){
        $(identity[y]).click(function(){
            $(this).css('border','1px solid green');
            $('.errorbox').eq(y).css('display','none');
        });
        $(identity[y]).blur(function(){
            $(this).css('border','1px solid grey');
        })
    }

    $('#reset').click(function(){
        $('#name, #email, #address').val('');
    });

    $('.errorbox').css('display','none');

    $('#submit').click(function(e){
        for(let x=0; x< identity.length; x++){
            if(document.querySelector(identity[x]).value == ''){
                $(identity[x]).css('border','1px solid red');
                $('.errorbox').eq(x).css('display','block');
            }
        }
        // console.log($('#name').val(),$('#email').val(),$('#address').val());
        // $('#name, #email, #address').val('');
    });

});

new WOW().init();

