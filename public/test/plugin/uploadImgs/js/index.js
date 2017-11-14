//////定义上传方法函数


var id ="1";
function PreviewImage(imgFile) {
    var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/;      
    if(!pattern.test(imgFile.value)) { 
      alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！"+imgFile.value);
      imgFile.focus(); 
    }else{
       //定义图片路径

        var count = imgFile.files.length ;
        $(".upload_append").remove()
        for( var i=1;i<=count;i++){
           // console.log(i)
            $(".img-cont").append("<div class='upload_append'><div class='img-father' id='"+id+"'><img src='' /></div></div>");
            length ++;
            var path='';
            //添加显示图片的HTML元素


            //判断浏览器类型
            if(document.all){
                //兼容IE
                imgFile.select();
                path = document.selection.createRange().text;
                document.getElementById(id).innerHTML="";
                document.getElementById(id).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果
            }else{
                //兼容其他浏览器
                path = URL.createObjectURL(imgFile.files[i-1]);
                document.getElementById(id).innerHTML = "<img src='"+path+"' width='300' height='220' />";
            }


            id += 1;
        }


       //重置表单
      // resetForm(imgFile);
    } 
}  

//重置表单,允许用户连续添加相同的图片
function resetForm(imgFile){
  $(imgFile).parent()[0].reset();
}

//控制"按钮"显示与隐藏
$(".img-cont").off("mouseenter","div").on("mouseenter","div",function(){
    var that=this;
    var dom=$(that).children("a");
    dom.removeClass("hide");
    //为点击事件解绑，防止重复执行
    dom.off("click");
    dom.on("click",function(){
    	//删除当前图片
     	dom.parent().remove();
     });
}).off("mouseleave","div").on("mouseleave","div",function(){
    var that=this;
  //  $(that).children("a").addClass("hide");
})

 
   
