//车辆类型
var CheLiangLX = echarts.init(document.getElementById('CheLiangLX'), 'shine');
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c}<br/>({d}%)"
    },
    label: {
        normal: {
            textStyle: {
                fontSize: '14'
            }
        }
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '52%',
            center: ['50%', '65%'],
            data:[
                {value:0, name:'私家车'},
                {value:29, name:'通勤接驳'},
                {value:0, name:'公交'},
                {value:0, name:'出租车'},
                {value:0, name:'物流'}
            ],
        }
    ]
};
CheLiangLX.setOption(option);

//故障类型
var GunZhang = echarts.init(document.getElementById('GunZhang'), 'shine');
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c}<br/>({d}%)"
    },
    label: {
        normal: {
            textStyle: {
                fontSize: '14'
            }
        }
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '52%',
            center: ['50%', '50%'],
            data:[
                {value:18, name:'电池'},
                {value:2, name:'其他'},
                {value:8, name:'电机'},
                {value:1, name:'整车'}
            ],
        }
    ]
};
GunZhang.setOption(option);

//故障类型
var CheLiangJK = echarts.init(document.getElementById('CheLiangJK'), 'shine');
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c}<br/>({d}%)"
    },
    label: {
        normal: {
            textStyle: {
                fontSize: '14'
            }
        }
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '52%',
            center: ['50%', '50%'],
            data:[
                {value:20, name:'良好'},
                {value:0, name:'较差'},
                {value:7, name:'一般'},
                {value:2, name:'待回收'}
            ],
        }
    ]
};
CheLiangJK.setOption(option);

$('#TongJi_toggle').click(function(){
    $('.TongJiInfo').animate({width:'toggle'},350);
    TongjiBg(this)

});

//点击给li赋class，只做样式使用
function ChangeBg(obj){
    if(obj.className=='pick'){
        obj.className="shut"
    }else{
        obj.className= "pick"
    }



}

//点击给li赋class，只做样式使用
function TongjiBg(obj){
    if(obj.className=='pick')
        obj.className="shut"
    else
        obj.className= "pick"
}


function  statics() {
    var url = '/Test/statistics'
    $.get(url,function (msg,status) {
        if(status=='success'){

            msg =JSON.parse(msg)
           var charge_sum = msg.charge_sum;
            $("#charge_sum").text(charge_sum)
            $("#online_charge").text(msg.online_charge)
            $("#online_cars").text(msg.online_cars)
            $("#car_sum").text(msg.car_sum)
            $("#all_times").text(msg.all_times)
            $("#all_miles").text(msg.all_miles) ;
            $("#oil_sum").text(msg.oil_sum) ;
            $("#carbon_sum").text(msg.carbon_sum) ;
            $("#electric_sum").text(msg.electric_sum)
        }
    })
}

statics()
setInterval(statics,2000)