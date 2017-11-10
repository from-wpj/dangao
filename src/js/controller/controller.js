var ctl=angular.module("swiper",[]);
ctl.controller("flash",["$scope",function(sc){
	sc.flash = function flashSweiper() {
	
		var mySwiper = new Swiper('.swiper-container', {
			autoplay : 2000,
			
			loop : true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		
			// paginationClickable:true
			
		});

	}
	sc.flash();

	window.onscroll=function(){
	var scroHeight=document.documentElement.scrollTop||
                document.body.scrollTop;
    var scroll=document.getElementById('sctt');
    console.log(scroll);
	console.log(scroHeight);
	if(scroHeight>0){
	   scroll.style.display='block';

	       
	}else{
	   scroll.style.display='none';
	};
    
}         
}])
ctl.controller('tab', ['$scope', function(sc){
	sc.tab=function(){
		$("#outer ul li").click(function(){
			$(this).addClass("activeLi").siblings().removeClass("activeLi")
			.parents("#outer").find("#box div").eq($(this).index()).show()
			.siblings().hide()
		});
	}
	sc.tab();
	
}])


