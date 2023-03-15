$(document).ready(() => {

    /* top-bar 平滑滾動 */
    var title_h = $('#top-title').outerHeight(true)
    var tab_bar = $('.tab-bar')
    var main = $('main')
    main.css('top', tab_bar.outerHeight(true) + 'px');
    $(window).scroll(() => {
        var scrollPos = $(window).scrollTop();
        if (scrollPos == 0) {
            tab_bar.animate({ top: '0px' });
        }
        else if (tab_bar.css('top') == '0px') {
            tab_bar.animate({ top: -title_h + 'px' });
        }
    });
});