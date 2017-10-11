$("#transfer-table").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#transfer-table")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"<span class=\'number\'>1</span>","ctn2":"PH值","ctn3":"<div class=\'process\'><span class=\'processbar\'>62.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>2</span>","ctn2":"COD","ctn3":"<div class=\'process\'><span class=\'processbar\'>62.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>3</span>","ctn2":"总铜","ctn3":"<div class=\'process\'><span class=\'processbar\'>62.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>4</span>","ctn2":"总锰","ctn3":"<div class=\'process\'><span class=\'processbar\'>62.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>5</span>","ctn2":"氨氮","ctn3":"<div class=\'process\'><span class=\'processbar\'>92.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>6</span>","ctn2":"有机氮","ctn3":"<div class=\'process\'><span class=\'processbar\'>62.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>7</span>","ctn2":"总磷","ctn3":"<div class=\'process\'><span class=\'processbar\'>62.22%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            +',{"ctn1":"<span class=\'number\'>8</span>","ctn2":"流量","ctn3":"<div class=\'process\'><span class=\'processbar\'>100%</span></div>","ctn4":"<div class=\'process\'><span class=\'processbar color1\'>62.22%</span></div>","ctn5":"<div class=\'process\'><span class=\'processbar color2\'>62.22%</span></div>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '编号', name: 'ctn1', align: "center", width: '5'},
        { label: '因子', name: 'ctn2', align: "center", width: '10'},
        { label: '传输率', name: 'ctn3', align: "center", width: '10'},
        { label: '有效率', name: 'ctn4', align: "center", width: '10'},
        { label: '传输有效率', name: 'ctn5', align: "center", width: '20'},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});

$(".processbar").css({
    width:function(){
        return $(this).text()
    }
})





