var time_line = 60 ;
var code_is_get = 0;
function initCode() {
    time_line = 60 ;
    $("#get_code").text('获取验证码')
    $("#get_code").removeAttr('disabled')
    code_is_get = 0;
}
$(".code_submit").click(function () {
    initCode()
})
$("#get_code").click(function () {

    var num = $("#phone_num").val()
    if(num == 'undefined'){

        return false ;
    }

    var mobile_pattern = /^1[34578]\d{9}$/;
  if(!num){
    alert('请去会员中心验证绑定手机号码！')
    return false;
  }
    if(!mobile_pattern.test(num)){

        if($("#phone_num").attr('action') == 'bind'){
            alert('请输入格式正确的手机号码') ;
            return false ;
        }

        if(confirm('请绑定电话!是否现在前往绑定手机')){
            location = '/Users/index'
        }
        return false ;
    }

    var url = '/Users/getMsgCode/'+num

    $.get(url,function (msg) {

        msg = parseMsg(msg)
        if(msg.status==0){
            alert(msg.msg)

        }else{

            code_is_get = 1;

        }
    })

})


function bankCodeTime() {
    if(time_line<=0){
        initCode()
        return ;
    }else {
        if(code_is_get==0){
            return ;
        }
        $("#get_code").attr('disabled',true)
        $("#get_code").text('(短信已发,'+time_line+'秒后可重发)')
        time_line --;
    }
}

function  redirect(url) {

    $.get(url,function (msg) {

        msg = JSON.parse(msg)
        if(msg.status==1){

            $("#user_content").html(msg.content)
        }else{

            alert(msg.msg)
        }
    })
}


setInterval(bankCodeTime,1000)