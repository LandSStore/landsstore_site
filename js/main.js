$(window).load(function() {
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('menu_active')
    });

    /*Налаштування select*/
    $('.select_checked').on('click', function() {
        $('.select_dropdown').toggleClass('select_dropdown_open');
    }); 
    $('.select_option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -130 + "px"});
        return false;
    });

});