
$("#count-table").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#count-table")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon2\'>在线</span>","ctn3":"<span class=\'colspan\'>废水</span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'colspan\'>废气</span>","ctn6":"<span class=\'remove\'></span>","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon2\'>在线</span>","ctn3":"<span class=\'icon3\'>正常</span>","ctn4":"5","ctn5":"<span class=\'icon3\'>正常</span>","ctn6":"4","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon2\'>在线</span>","ctn3":"<span class=\'icon4\'>故障</span>","ctn4":"5","ctn5":"<span class=\'icon4\'>故障</span>","ctn6":"4","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon2\'>在线</span>","ctn3":"<span class=\'icon5\'>超标</span>","ctn4":"5","ctn5":"<span class=\'icon5\'>超标</span>","ctn6":"4","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon2\'>在线</span>","ctn3":"<span class=\'icon6\'>呆滞</span>","ctn4":"5","ctn5":"<span class=\'icon6\'>呆滞</span>","ctn6":"4","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon2\'>在线</span>","ctn3":"<span class=\'icon7\'>固定值</span>","ctn4":"5","ctn5":"<span class=\'icon7\'>固定值</span>","ctn6":"4","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon1\'>排放</span>","ctn2":"<span class=\'icon8\'>离线</span>","ctn3":"<span class=\'colspan\'>2</span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'colspan\'>3</span>","ctn6":"<span class=\'remove\'></span>","ctn7":"15"}'
            +',{"ctn1":"<span class=\'icon9 colspan\'>停运</span>","ctn2":"<span class=\'remove\'></span>","ctn3":"<span class=\'colspan\'>2</span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'colspan\'>3</span>","ctn6":"<span class=\'remove\'></span>","ctn7":"15"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '排放状态', name: 'ctn1', align: "center",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn1' + rowId +"\'";
            }
        },
        { label: '网络状态', name: 'ctn2', align: "center",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn2' + rowId +"\'";
            }
        },
        { label: '数据状态', name: 'ctn3', align: "center",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn3' + rowId +"\'";
            }
        },
        { label: '', name: 'ctn4', align: "center",},
        { label: '', name: 'ctn5', align: "center",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn5' + rowId +"\'";
            }
        },
        { label: '', name: 'ctn6', align: "center",},
        { label: '合计', name: 'ctn7', align: "center",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn7' + rowId +"\'";
            }
        },
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,

    gridComplete: function() {
        //②在gridComplete调用合并方法
        var gridName = "count-table";
        Merger(gridName, 'ctn1');
        Merger(gridName, 'ctn2');
        Merger(gridName, 'ctn7');
    }
});
function Merger(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    //当前显示多少条
    var length = mya.length;
    for (var i = 0; i < length; i++) {
        //从上到下获取一条信息
        var before = $("#" + gridName + "").jqGrid('getRowData', mya[i]);
        //定义合并行数
        var rowSpanTaxCount = 1;
        for (j = i + 1; j <= length; j++) {
            //和上边的信息对比 如果值一样就合并行数+1 然后设置rowspan 让当前单元格隐藏
            var end = $("#" + gridName + "").jqGrid('getRowData', mya[j]);
            if (before[CellName] == end[CellName]) {
                rowSpanTaxCount++;
                $("#" + gridName + "").setCell(mya[j], CellName, '', {
                    display: 'none'
                });
            } else {
                rowSpanTaxCount = 1;
                break;
            }
            $("#" + CellName + "" + mya[i] + "").attr("rowspan", rowSpanTaxCount);
        }
    }
}


$("#count-table_ctn4,#count-table_ctn5,#count-table_ctn6").remove();
$(".remove").parent("td").remove();
$(".colspan").parent("td").attr("colspan","2")
$(".colspan").parent("td").attr("id","gridcell")

