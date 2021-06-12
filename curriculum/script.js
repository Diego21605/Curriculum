$(document).ready(function(){
    $(window).scroll(function(){
        // Navbar pegajoso
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Colocando botón suir
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Boton subir/Funcionalidad
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Quitar boton subir
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Aplicando el desplazamiento en el navbar
        $('html').css("scrollBehavior", "smooth");
    });

    // Boton hamburguesa/Funcionalidad
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animación de texto
    var typed = new Typed(".typing", {
        strings: ["Desarrollador Web enfocado en el back-end"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desarrollador Web enfocado en el back-end"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});