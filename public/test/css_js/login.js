
$(document).ready(function(){
   
    $("#vcode").keydown(function(e){
    	var e = e || event;
        if(e.keyCode  == 13)
            $("#login").click(); 
    });
    
    $("#pass").keydown(function(e){
        if(e.keyCode  == 13)
            $("#login").click(); 
    });      
	
	
	$('#username').blur(function(){
		val=$(this).val();
		if(val==""){return false;}
		$.post("slogin.php?act=yz",{username:val},function(ret){if(ret==1){$('.wxyz').show()}else{$('.wxyz').hide()}})	
		
	})
	

    $("#login").click(function(){
        var username = $("#username").val();
        var pass = $("#pass").val();
        var vcode = $("#vcode").val();
		var urlx = $("#urlx").val();
		var wxyzm = $("#wxyzm").val();
		
        var iskeep = "0";
        if(username == "" || username == "请输入帐号")
        {
            alert("请输入帐号!");
            return false;
        }
        if(pass == "")
        {
            alert("请输入密码!");
            return false;
        }
        if(vcode == "" || vcode == "验证码")
        {
            alert("请输入验证码!");
            return false;
        }
        if($("#cbxAutoLogin").attr("checked"))
            iskeep = "1";
        
        $.post("slogin.php?act=yz",{username:username},function(ret){if(ret==1){$('.wxyz').show()}else{$('.wxyz').hide()}})
		
		$.post("slogin.php?act=login",{username:username,pass:pass,vcode:vcode,iskeep:iskeep,wxcode:wxyzm},function(ret){
            
			
			if(ret.indexOf("|")>-1){
				
				arr = ret.split("|");
				
				alert("帐号暂封，还剩"+arr[1]+"分钟");
				
			}else{
				
				$('.codeimg').attr("src","/vcode.php?"+(new Date()).getMilliseconds());
				$("#vcode").val("");

				switch(ret)
				{
					case "ok":
						if(urlx=="" || typeof(urlx) == "undefined"){
							location.href = "/";
						}else{
							location.href = urlx;	
						}
						break;
					case "fault":
						alert("帐号或密码错误!");
						break;
					case "vcode":
						alert("验证码错误！");
						break;
					case "dj":
						alert("帐号被冻结，请联系客服!");
						break;
					case "use":
						alert("帐号正在使用，请勿重新登录!");
						location.href="/";
						break;
					case "expired":
						alert("微信验证码失效,公众号重新获取");
						break;
					case "codeerr":
						alert("微信验证码错误");
						break;
					default:
						alert("未知错误!");
						break;
				}
			}
        });
        return false;
    });
});