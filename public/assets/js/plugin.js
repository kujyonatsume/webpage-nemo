$(document).ready(async () => {

    preloader();

    /* top-bar 平滑滾動 */
    $(window).scroll(() => {
        var $tab_bar = $('#tab-bar'),
            scrollPos = $(window).scrollTop(),
            title_h = $('#top-title').outerHeight(true)
        if (scrollPos == 0) {
            $tab_bar.animate({ top: '0px' });
        }
        else if ($tab_bar.css('top') == '0px') {
            $tab_bar.animate({ top: -title_h + 'px' });
        }
    });


    /* $preloader 動畫 */
    async function preloader() {
        var person = 0.5, cnt = 200, 
        $tab_bar = $('#tab-bar')
        $tab_bar.css('top',-$tab_bar.outerHeight(true)+'px')
        for (let i = 1; i <= cnt; i++) {
            await delay(2)
            $('#load-bar').css('width', i * person + '%').text(i * person + '%')
            if (i != cnt) continue
            await delay(500)
            var $preloader = $('#preloader').fadeToggle(1000, () => {
                $preloader.remove()
                $tab_bar.animate({ top: '0px' });
            })
        }
    }
})

/* 延遲 */
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}