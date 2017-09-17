window.onload = function(){
	// 轮播图部分
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
    });
  $('.swiper-container').on('mouseover','span',function(){
    swiper.stopAutoplay();
    swiper.slideTo($(this).index()+1,100,false);
  });
  $('.swiper-container').on('mouseleave','span',function(){
    swiper.startAutoplay();
  });

    // tab切换部分
    $('.ch-title li').on('mouseover',function(){
    	var index = $(this).index();
    	$(this).siblings('li').children('a').removeClass('active');
    	$(this).children('a').addClass('active');
    	$('.ch-contenttab>div').eq(index).siblings('div').css('display','none');
    	$('.ch-contenttab>div').eq(index).css('display','block');
    });

   // 无缝滚动部分
    $('#pic_list_1').on('mouseover',function(){
   		$(this).children('.next').show();
   		$(this).children('.prev').show();
    });
    $('#pic_list_1').on('mouseleave',function(){
   		$(this).children('.next').hide();
   		$(this).children('.prev').hide();
    });

 	$("#pic_list_1").cxScroll();

  	$("#pic_list_3").cxScroll({direction:"bottom",speed:500,time:1500,plus:false,minus:false});
}