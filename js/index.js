jQuery(".menuBar").slide({ type:"menu",  titCell:".Travel", targetCell:".outTravel",effect:"slideDown", delayTime:300, triggerTime:0,returnDefault:true  });

// 左边菜单鼠标事件
$(".difTeam").mouseover(function(){
  $(this).children(".menuBig").show();
  $(this).children(".teamContainer").css({"border-right":"transparent","background":"#fff"});
});
$(".difTeam").mouseout(function(){
  $(this).children(".menuBig").hide();
  $(this).children(".teamContainer").css({"border-right":"3px solid #0060aa","background":"#d7ebfa"});
});

jQuery(".slideTxtBox").slide({effect:"fold",trigger:"mouseover",delayTime:1000});

/******************************如果打开高度大于400px，才让锚链接显示出来**************************/
  $(window).scroll(function(){
  	var scrollTop = $(this).scrollTop(); 
  	//alert(docH);
  	//console.log(scrollTop);
  	if(400<scrollTop){
  		
  		$(".bg-left").css({display:"block"});
  	}else{
  		$(".bg-left").css({display:"none"});
  	}
  });
/******************************如果打开高度大于300px，才让锚链接显示出来**************************/
  $(window).scroll(function(){
  	var scrollTop = $(this).scrollTop(); 
  	//alert(docH);
  	//console.log(scrollTop);
  	if(300<scrollTop){
  		
  		$(".bg-right").css({display:"block"});
  	}else{
  		$(".bg-right").css({display:"none"});
  	}
  });

