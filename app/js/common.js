// menu dropdown
$(function () {
    $("ul.sidebar-menu>li").has("ul").children('a').addClass('dropDownItem');

    $('ul.sidebar-menu>li>a').on('click', function (e) {
        if ($(this).parent().find('ul').length > 0) {
            e.preventDefault();
            $(this).toggleClass('active').siblings('.dropDownMenu').slideToggle();
        }
    });
});

$('.btn-mobile-sidebar').click(function () {
    $(this).toggleClass('active');
    $('.mobile-sidebar-menu').fadeToggle();
});