$(document).ready(() => {
    var win_form = $(window),
        main = $('#main').fadeToggle(1),
        tab_bar = $('#tab-bar'),
        title_h = 0

    /* preloader 動畫 */
    var preloader = $('#preloader')
        .css('z-index', '9999')
        .css('background', '#000')
        .css('height', win_form.outerHeight(true) + 'px')
        .css('width', win_form.outerWidth(true) + 'px')
        .fadeToggle(1000, () => {
            preloader.remove();
            main.fadeToggle(1000);
            title_h = $('#top-title').outerHeight(true)
        });

    /* top-bar 平滑滾動 */
    win_form.scroll(() => {
        var scrollPos = win_form.scrollTop();
        if (scrollPos == 0) {
            tab_bar.animate({ top: '0px' });
        }
        else if (tab_bar.css('top') == '0px') {
            tab_bar.animate({ top: -title_h + 'px' });
        }
    });
});