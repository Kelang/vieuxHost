   $("#BurgerMenuWrapper").click(function(){

    $(".menu").toggleClass("BurgerMenuAnim");
    $(".navLink").toggleClass("navContentAnim");
    $('input.checkBurger').prop("checked", !$('input.checkBurger').prop("checked"));
    $('html').toggleClass("overflowDisable");
    $('.menuSocial i').toggleClass("navContentAnim");
    //Si le bouton checkbox est coché alors on change le width du side menu
    if ($('input.checkBurger').is(':checked')) {
        $(".MenuContainer").removeClass("MenuAnimSortie");
        $(".MenuContainer").addClass("MenuAnimEntrer");
        console.log("COCHER");
    }

    //Si le bouton checkbox est décoché alors on change le width du side menu
    else if($('input.checkBurger'). prop("checked") == false){
        $(".MenuContainer").removeClass("MenuAnimEntrer");
    $(".MenuContainer").addClass("MenuAnimSortie");
    console.log("DECOCHER");
    }


});



$('#projet1').hover(function(){

    $('#media1').toggleClass('imageAnim');
   // $('#media1').show();
});

$('#projet2').hover(function(){

    $('#media2').toggleClass('imageAnim');
   // $('#media1').show();
});

$('#projet3').hover(function(){

    $('#media3').toggleClass('imageAnim');
   // $('#media1').show();
});


/*
if($('input.checkBurger').prop('checked',true)) {
    //$(".MenuContainer").removeClass("MenuAnimSortie");
   // $(".MenuContainer").addClass("MenuAnimEntrer");


    console.log("COCHER");
   }

   else {
    //$(".MenuContainer").removeClass("MenuAnimEntrer");
    //$(".MenuContainer").addClass("MenuAnimSortie");
    console.log("DECOCHER");

   }
   */