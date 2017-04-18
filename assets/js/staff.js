$(function(){
	var linkWidth = $('.staff1 a').width();
	var linkHeight = $('.staff1 a').height();
	$(".staff1 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff1 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff1.jpg)'
		});
		$('.staff1 a span.ov').css({backgroundImage:'url(assets/imgs/staff1-o.jpg)'});
	});
	$(".staff1 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});

$(function(){
	var linkWidth = $('.staff2 a').width();
	var linkHeight = $('.staff2 a').height();
	$(".staff2 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff2 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff2.jpg)'
		});
		$('.staff2 a span.ov').css({backgroundImage:'url(assets/imgs/staff2-o.jpg)'});
	});
	$(".staff2 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff3 a').width();
	var linkHeight = $('.staff3 a').height();
	$(".staff3 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff3 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff3.jpg)'
		});
		$('.staff3 a span.ov').css({backgroundImage:'url(assets/imgs/staff3-o.jpg)'});
	});
	$(".staff3 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff4 a').width();
	var linkHeight = $('.staff4 a').height();
	$(".staff4 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff4 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff4.jpg)'
		});
		$('.staff4 a span.ov').css({backgroundImage:'url(assets/imgs/staff4-o.jpg)'});
	});
	$(".staff4 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff5 a').width();
	var linkHeight = $('.staff5 a').height();
	$(".staff5 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff5 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff5.jpg)'
		});
		$('.staff5 a span.ov').css({backgroundImage:'url(assets/imgs/staff5-o.jpg)'});
	});
	$(".staff5 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff6 a').width();
	var linkHeight = $('.staff6 a').height();
	$(".staff6 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff6 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff6.jpg)'
		});
		$('.staff6 a span.ov').css({backgroundImage:'url(assets/imgs/staff6-o.jpg)'});
	});
	$(".staff6 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff7 a').width();
	var linkHeight = $('.staff7 a').height();
	$(".staff7 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff7 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff7.jpg)'
		});
		$('.staff7 a span.ov').css({backgroundImage:'url(assets/imgs/staff7-o.jpg)'});
	});
	$(".staff7 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff8 a').width();
	var linkHeight = $('.staff8 a').height();
	$(".staff8 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff8 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff8.jpg)'
		});
		$('.staff8 a span.ov').css({backgroundImage:'url(assets/imgs/staff8-o.jpg)'});
	});
	$(".staff8 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff9 a').width();
	var linkHeight = $('.staff9 a').height();
	$(".staff9 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff9 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff9.jpg)'
		});
		$('.staff9 a span.ov').css({backgroundImage:'url(assets/imgs/staff9-o.jpg)'});
	});
	$(".staff9 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});




$(function(){
	var linkWidth = $('.staff10 a').width();
	var linkHeight = $('.staff10 a').height();
	$(".staff10 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff10 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff10.jpg)'
		});
		$('.staff10 a span.ov').css({backgroundImage:'url(assets/imgs/staff10-o.jpg)'});
	});
	$(".staff10 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff11 a').width();
	var linkHeight = $('.staff11 a').height();
	$(".staff11 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff11 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff11.jpg)'
		});
		$('.staff11 a span.ov').css({backgroundImage:'url(assets/imgs/staff11-o.jpg)'});
	});
	$(".staff11 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff12 a').width();
	var linkHeight = $('.staff12 a').height();
	$(".staff12 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff12 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff12.jpg)'
		});
		$('.staff12 a span.ov').css({backgroundImage:'url(assets/imgs/staff12-o.jpg)'});
	});
	$(".staff12 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff13 a').width();
	var linkHeight = $('.staff13 a').height();
	$(".staff13 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff13 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff13.jpg)'
		});
		$('.staff13 a span.ov').css({backgroundImage:'url(assets/imgs/staff13-o.jpg)'});
	});
	$(".staff13 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});




$(function(){
	var linkWidth = $('.staff14 a').width();
	var linkHeight = $('.staff14 a').height();
	$(".staff14 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff14 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff14.jpg)'
		});
		$('.staff14 a span.ov').css({backgroundImage:'url(assets/imgs/staff14-o.jpg)'});
	});
	$(".staff14 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff15 a').width();
	var linkHeight = $('.staff15 a').height();
	$(".staff15 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff15 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff15.jpg)'
		});
		$('.staff15 a span.ov').css({backgroundImage:'url(assets/imgs/staff15-o.jpg)'});
	});
	$(".staff15 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});
$(function(){
	var linkWidth = $('.staff16 a').width();
	var linkHeight = $('.staff16 a').height();
	$(".staff16 a").each(function(){
		var txt = $(this).text();
		$(this).prepend('<span class="ov">' + txt + '</span>');
		$(this).prepend('<span class="out">' + txt + '</span>');
		$('.staff16 a span').css({
			width:(linkWidth),
			height:(linkHeight),
			display:'block',
			cursor:'pointer',
			backgroundImage:'url(assets/imgs/staff16.jpg)'
		});
		$('.staff16 a span.ov').css({backgroundImage:'url(assets/imgs/staff16-o.jpg)'});
	});
	$(".staff16 a").hover(function(){
		$(this).children('span.out').stop().animate({marginTop:'-' + linkHeight + 'px'},260);
	}, function(){
		$(this).children('span.out').stop().animate({marginTop:'0'},260);
	});
});