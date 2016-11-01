//Powered by uimix.com;

//date:2014-09-01;

var LL_UIMIX = {

	init: function(c) {

		var c = c ? c : LL_UIMIX;

		for (var i in c) {if (c[i] && c[i].init) {c[i].init();}}

	}

};

$(document).ready(function() {LL_UIMIX.init()});







LL_UIMIX.piano = {

	init : function(){

		LL_UIMIX.piano.nav();

		LL_UIMIX.piano.master();

		LL_UIMIX.piano.arrangement();

		LL_UIMIX.piano.video();

	},



	nav : function(){

		var nav_bar= $('#fl-header li.act-nav a');



		nav_bar.each(function(i,j){

			$(j).click(function(){

				if($('body').hasClass('intro') && $(this).attr('href') == '#') return false;

				if($(this).attr('href') == '#'){

					$('html,body').stop().animate({scrollTop:$('.fl-'+ $(this).attr('go')).offset().top},400);

					return false;

				}

			});

		});



		var URL=location.href;

		if(URL.indexOf("#") != -1){

			URL=URL.substr(URL.indexOf("#")+1);

			$('html,body').stop().animate({scrollTop:$('.fl-'+ URL).offset().top},400);

		}

	},



	master : function(){

		var masterBox=$('#fl-contain .fl-master .ser-box ul');



		masterBox.each(function(i,j){

			var j=$(j);
			j.children('li').each(function(s,n){
				$(n).css({width: 13 + '%',left:s*6 + '%'}).on({
					mouseenter : function(){
						if($(this).hasClass("active")) return;
						$(this).addClass("active").siblings().removeClass("active");
						$(this).find("img").stop().animate({opacity:1},400)
						.parents("li").siblings().find("img").stop().animate({opacity:0.5},200);
						//$(this).siblings().find(".intro").stop().animate({bottom:-72},200);

						for(var k=0;  k<6; ++k){
							if(k==s){
								j.children('li').eq(k).stop().animate({width:33+"%",left:k*13+"%"},400)
								/*.find(".intro").stop().animate({bottom:0},200);*/
							}else{
								j.children('li').eq(k).stop().animate({width:13+"%",left:(k > s ? (k-1)*13 + 32.6 : k*13) + "%"},400);
							}
						}
					},
					click : function(){

						// return false;
					}

				}).find("img").css({opacity:0.5});

			});

			j.on({

				mouseenter : function(){
					var th=$(this);
					for(var f=0; f<6; ++f){
						th.siblings("ul").children('li').eq(f).removeClass("active").stop().animate({width: 20.6 + '%',left:f*0 + '%'});
						th.siblings("ul").children('li').eq(f).find(".intro").stop().animate({bottom:-72},200);
						th.siblings("ul").children('li').eq(f).find("img").stop().animate({opacity:0.5},200);
					}

				}

			})



			if(i==0) j.find("li").first().mouseenter();

		});

	},



	arrangement : function(){

		var arrangBox=$('#fl-contain .fl-arrangement'),

		popup=arrangBox.find('.popup-layer'),

		btn=arrangBox.find(".ser-box a");





		btn.click(function(){

			if($(this).attr('href') == '#'){

				popup.find('.'+$(this).attr('class')).css({display:'block'}).siblings('div').css({display:'none'});

				popup.addClass('active').stop().css({display:"block",opacity:0}).animate({opacity:1},400);

				return false;

			}

		});



		popup.find('a.close').click(function(){

			popup.removeClass("active").animate({opacity:0},400,function(){

				$(this).css({display:'none'});

			});

			return false;

		});

	},



	video : function(){

		var videoBox=$('.fl-video'),

		vpreviews=videoBox.find('.video-previews'),

		vpre=videoBox.find('a.v-prev'),

		vnext=videoBox.find('a.v-next'),

		slideBox=videoBox.find('.v-slide');



		slideBox.find('ul li').each(function(i,j){

			$(j).children('a').click(function(){

				if($(this).hasClass('current')) return false;

				$(this).addClass('current').parent().siblings().find('a').removeClass('current');



				if($(this).attr('href') != '#'){

					vpreviews.html('<embed src="'+$(this).attr('href')+'" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="560" height="340"></embed>');

					return false;

				}else{

					return false;

				}

			});



			if(i==0) $(j).find('a').click();

		});



		vpre.click(function(){

			return false;

		});



		vnext.click(function(){

			return false;

		});

	}

};





















