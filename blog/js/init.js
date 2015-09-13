function mycarousel_initCallback(carousel) {
    $('.header .slider-wrap .cycle-wrap .next').bind('click', function() {
        //carousel.scroll($.jcarousel.intval(3));
        return false;
    });
};

$(document).ready(function() {

    
    
    if($.browser.name == "msie" && $.browser.versionNumber < 7){
        //DD_belatedPNG.fix('.progress-action .start,.progress-action .bestellen,.progress-action .konfigurieren,.progress-action .ausmessen,.header h1 a,.header .inner .ts,.header .inner .kk,.header .inner .kk span,.header .inner .pq,.header .inner .pq span,.header .inner .meta-navigation a.cart,#cycle .pager,.hp-teasers .teaser .teaser-content,.payments-deliver .inner .ts,.payments-deliver .inner img,.footer .logo,.footer .fb,.footer .tw');
    }
    
    if($(".header .slider-wrap .cycle-wrap ul").length){
        
        $('.header .slider-wrap .cycle-wrap ul').cycle({ 
            fx:     'fade', 
            speed:  '500',
            timeout: 0,
            pause:   1,
            prev: '.header .slider-wrap .cycle-wrap .prev',
            next: '.header .slider-wrap .cycle-wrap .next',
            onPrevNextEvent : function(isNext, zeroBasedSlideIndex, slideElement){
                var carousel = $('#carousel').data('jcarousel');
                carousel.scroll(zeroBasedSlideIndex+1);
            }
        });
        
    }
    
    $(".header ul.lang > li").hover(function(){
        $("ul",this).slideDown("fast");
    }, function(){
        $("ul",this).slideUp("fast");
    })
    
    $("#carousel").jcarousel({
        scroll: 3,
        initCallback: mycarousel_initCallback
    });
    
    $("#carousel li").hover(function(){
        $(".hover", this).fadeIn("fast");
    }, function(){
        $(".hover", this).fadeOut("fast");
    })
    
    $("#carousel li").click(function(){
        pos = $("#carousel li").index($(this));
        $('.header .slider-wrap .cycle-wrap ul').cycle(pos);
    })
    
});