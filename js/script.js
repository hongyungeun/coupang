'use strict'

$(function(){
    var $tabSub = $('.tab2-sub')
    var $tabMenu2 = $('.tab-menu2')

    $tabSub.hide()
    $tabSub.eq(0).show()
    $tabMenu2.click(function(){
        var idx = $(this).index()
        $tabMenu2.removeClass('select')
        $(this).addClass('select')
        $tabSub.hide()
        $tabSub.eq(idx).show()
    })
})

$(function(){
    var $sideUp = $('.top')

    $sideUp.click(function(){
        window.scrollTo({ top: 0, behavior: 'smooth'}) 


    })

})
$(document).ready(function(){
    $('.your-class').slick({
        
    });
    });

$(document).ready(function(){
        $('.sea-item').slick({
        
        });
    });
