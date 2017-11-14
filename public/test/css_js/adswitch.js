/**
 * 广告切换
 * @param i
 */
var ai_num      = 3;			//广告图片数量
var aii         = ai_num;		//当前广告图	
var aii_bl      = true;			//控制自动播放
var aii_c       = true;			//控制单击
var ai_speed    = 5000;			//显示速度（5秒）
var gain_intver = null;			//对象
var site_i      = 0;			//显示第一张的标识

function ai_auto(){
	ai_num = $("#ai").find("li").size()-1;
	aii = ai_num;
	site_i = ai_num;
	gain_intver = setInterval("ai()", ai_speed);
}

function ai(){
	var i = aii;
	if(aii_bl){
		aii_c  = false;
		$("#ai_u"+i).removeClass('indexSlide_here');
		$("#ai").find("li:last").animate({
			opacity: 'toggle'
		 }, 1000, function(){
			 $(this).prependTo("#ai").show();
			 aii_c  = true;
		 });
		aii = i - 1;
		if(aii < 0){
			aii = ai_num;
		}
		$("#ai_u"+aii).addClass('indexSlide_here');
		site_i = i;
	}else{
		clearInterval(gain_intver);
	}
}

function ai_hv(i){
	if(aii_c){
		if(i != aii){
			aii_c = false;
			aii_bl = false;
			$("#ai_u"+aii).removeClass('indexSlide_here');
			$("#ai_u"+i).addClass('indexSlide_here');
			var k = 0;
			if(i < aii){
				k = aii-i-1;
				for(var m = aii-1; m >= aii-k; m--){
					$("#ai_"+m).hide();
				}
			}else if(i > aii){
				k = ai_num-(i-aii);
				var site = aii;
				for(var m = 1; m <= k; m++){
					site = site-1;
					if(site < 0){
						site = ai_num;
					}
					$("#ai_"+site).hide();
				}
			}
			$("#ai").find("li:last").animate({
				opacity: 'toggle'
			}, 1000, function(){
				$(this).prependTo("#ai").show();
				if(i < aii){
					for(var m = aii-1; m >= aii-k; m--){
						$("#ai_"+m).prependTo("#ai").show();
					}
				}else if(i > aii){
					var site = aii;
					for(var m = 1; m <= k; m++){
						site = site-1;
						if(site < 0){
							site = ai_num;
						}
						$("#ai_"+site).prependTo("#ai").show();
					}
				}
				aii = i;
				aii_c = true;
				site_i = i;
			});
		}
	}
}

function prevNext (j) {
	if (j > 0) {
		site_i -= 1;
		if (site_i < 0) {
			site_i = ai_num;
		}
	} else {
		site_i += 1;
		if (site_i > ai_num) {
			site_i = 0;
		}
	}
	ai_hv(site_i);
}


$(function(){
	$("#ai_u").mouseleave(function(){
		if(!aii_bl){
			aii_bl = true;
			gain_intver = setInterval("ai()",ai_speed);
		}else{
			clearInterval(gain_intver);
		}
	});
	$("#ai_u").mouseover(function(){
		aii_bl = false;
		clearInterval(gain_intver);
	});
	$("#ai").find("li").mouseover(function(){
		aii_bl = false;
		clearInterval(gain_intver);
	});
	$("#ai").find("li").mouseleave(function(){
		if(!aii_bl){
			aii_bl = true;
			gain_intver = setInterval("ai()",ai_speed);
		}else{
			clearInterval(gain_intver);
		}
	});
	$("#ad_prev").mouseleave(function(){
		if(!aii_bl){
			aii_bl = true;
			gain_intver = setInterval("ai()",ai_speed);
		}else{
			clearInterval(gain_intver);
		}
	});
	$("#ad_prev").mouseover(function(){
		aii_bl = false;
		clearInterval(gain_intver);
	});
	$("#ad_next").mouseleave(function(){
		if(!aii_bl){
			aii_bl = true;
			gain_intver = setInterval("ai()",ai_speed);
		}else{
			clearInterval(gain_intver);
		}
	});
	$("#ad_next").mouseover(function(){
		aii_bl = false;
		clearInterval(gain_intver);
	});
});

function pub_login_checked(i) {
	if (i == 1) {
		$("#pub_login_checked").addClass("checked");
		$("#icon_0").show();
		$("#icon_1").hide();
		$("#cbxAutoLogin").attr("checked", false);
		$("#txtclik").attr('onclick', 'pub_login_checked(0)');
	} else {
		$("#pub_login_checked").removeClass("checked");
		$("#icon_0").hide();
		$("#icon_1").show();
		$("#cbxAutoLogin").attr("checked", true);
		$("#txtclik").attr('onclick', 'pub_login_checked(1)');
	}
}
