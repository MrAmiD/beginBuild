$(function() {

    $.datetimepicker.setLocale('ru');
    $('.date-p').datetimepicker({
        i18n:{
            de:{
                months:[
                    'Januar','Februar','März','April',
                    'Mai','Juni','Juli','August',
                    'September','Oktober','November','Dezember',
                ],
                dayOfWeek:[
                    "So.", "Mo", "Di", "Mi",
                    "Do", "Fr", "Sa.",
                ]
            }
        },
        timepicker:false,
        format:'d.m.Y'
    });
    //

    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('select').styler({
        selectSearch: true,
    });
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('#my-menu').html($('.main-menu').html());
    //var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "fx-panels-none",
            "fx-listitems-slide",
            "fx-menu-slide",
            //"pagedim-black"
        ],
        "offCanvas": {
            "position": "left"
        },
        "navbar": {
            "title": ""
        },
        "pageScroll": true
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    //mmenu bagfix

    // $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    // api.bind( "open:after", function() {
    //     });

    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());

        //bugfix fixed menu 1-3 START
        $(window).scroll();
        $(".slick-menu").css({ top: $(window).scrollTop()});
    });
    api.bind( "open:start", function() {
        $(window).scroll();
        //bugfix fixed menu 2
        $(".slick-menu").css({ top: $(window).scrollTop() });
    });
    api.bind( "open:before", function() {
        $('#my-menu').css('top', $('.slick-menu').height());
    });
    api.bind( "close:finish", function() {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $(".slick-menu").css({ top: 0});
    });


    /*my custom select start*/
    $(window).click(function() {
        //$('.my-select').find('ul').slideUp();//закрывать, если кликнули не по диву
    });


    $('.my-select').on('click', function () {
        //event.stopPropagation();
        if($(this).find('ul').hasClass('active')){
            $(this).find('ul').removeClass('active');
            $(this).removeClass('active');
            $(this).find('ul').slideUp();
        }
        else {
            $(this).find('ul').addClass('active');
            $(this).addClass('active');
            $(this).find('ul').slideDown();
        }
    });
    $('.my-select .opt li').on('click', function () {
        if($(this).hasClass('selected')){
            $('.my-select .opt li').removeClass('selected');
        }
        else {
            $('.my-select .opt li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parent().parent().find($('.select-value')).html($(this).data().value);
        }
    });
    /*my custom select End*/

    // $('#callDate').bootstrapMaterialDatePicker({ format : 'dddd DD MMMM YYYY - HH:mm', lang : 'ru', weekStart : 1, cancelText: 'Отмена'});

});
