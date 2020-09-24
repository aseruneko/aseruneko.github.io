var ALL_RADICAL = ["一","丨","丶","丿","乙","亅","二","亠","人・亻","儿","入","八","冂","冖","冫","几","凵","刀・刂","力","勹","匕","匚","匸","十","卜","卩","厂","厶","又","口","囗","土","夕","士","夂","夊","大","女","子","宀","寸","小","尢・尣","巛・川","尸","屮","山","工","巳","巾","干","幺","广","廴","廾","弋","弓","彑","彡","彳","心・忄","戈","戶・戸","手・扌","支","攴・攵","文","斗","斤","方","无・旡","日","曰","月","木","欠","止","歹・歺","殳","毋・母","比","毛","氏","气","氺","火・灬","爪・爫","父","爻","爿","片","牙","牛・牜","犬・犭","玄","玉・王","瓜","瓦","甘","生","用","田","疋","疒","癶","白","皮","皿","目・罒","矛","矢","石","示・礻","禸","禾","穴","立","竹","米","糸","缶","网","羊","羽・羽","老・耂","而","耒","耳","聿","肉・月","臣","自","至","臼","舌","舛","舟","艮","色","艸・艹","虍","虫","血","行","衣・衤","覀","見","角","言・訁","谷","豆","豕","豸","貝","赤","走","足・𧾷","身","車","辛","辰","辵・辶","邑・阝","酉","釆","里","金・釒","長","門","阜・阝","隶","隹","雨","靑・青","非","面","革","韋","韭","音","頁","風","飛","食・飠","首","香","馬","骨","高","髟","鬥","鬯","鬲","鬼","魚","鳥","鹵","鹿","麥・麦","麻","黃・黄","黍","黑・黒","黹","黽","鼎","鼓","鼠","鼻","齊・斉","齒・歯","龍・竜","龜・亀","龠"];
var BASIC_RADICAL = ["氵・水","亻・人","扌・手","木","忄・心","口","訁","糹","辶","土","艹・艸","肉・月","貝・頁","日","宀","女","釒・金","刂・刀","阝","火・竹","力・禾","礻・彳","广・門","魚"];
var NUMBER = [1,2,3,4,5,6,7,8,9,10];
var IDENTIFIER_LENGTH = 2;
var cells = [
    ["x",1,2,3,4,5,6,7,8,9,10],
    [1,"","","","","","","","","",""],
    [2,"","","","","","","","","",""],
    [3,"","","","","","","","","",""],
    [4,"","","","","","","","","",""],
    [5,"","","","","","","","","",""],
    [6,"","","","","","","","","",""],
    [7,"","","","","","","","","",""],
    [8,"","","","","","","","","",""],
    [9,"","","","","","","","","",""],
    [10,"","","","","","","","","",""]
];
var radical = [];

function showTable(){
    var target = document.getElementById("main-table");
    target.innerHTML = "";
    for(var i = 0; i < cells.length; i ++){
        var tr = document.createElement("tr");
        for(var j = 0; j < cells[0].length; j ++){
            var td = document.createElement("td");
            if(i == 0 || j == 0){
                td.style.fontSize = 40 / Math.max(cells[i][j].length,1);
                td.innerText = cells[i][j];
            } else {
                var cellTextArea = document.createElement("input");
                var id = "cell-" + i + "-" + j;
                cellTextArea.type = "textarea";
                cellTextArea.id = id;
                cellTextArea.classList.add("cell-textarea");
                cellTextArea.value = cells[i][j];
                cellTextArea.addEventListener("focusout", readCells);
                td.appendChild(cellTextArea);
            }
            tr.appendChild(td);
        }
        target.appendChild(tr);
    }
}

function makeRow(len){
    var row = [];
    while(row.length < len){
        row = row.concat(chooseAtRandom(NUMBER, NUMBER.length));
    }
    row = row.splice(0,len);
    row = chooseAtRandom(row, len);
    return row;
}

function makeRowHead(){
    var row = makeRow(cells.length - 1);
    for(var i = 1; i < cells.length; i++){
        cells[i][0] = row[i - 1];
    }
}

function makeColumn(len){
    var column = [];
    while(column.length < len){
        column = column.concat(chooseAtRandom(radical, radical.length));
    }
    column = column.splice(0,len);
    column = chooseAtRandom(column, len);
    return column;
}

function makeColumnHead(){
    var column = makeColumn(cells[0].length - 1);
    for(var i = 1; i < cells[0].length; i++){
        cells[0][i] = column[i - 1];
    }
}

function readCells(){
    for(var i = 1; i < cells.length; i++){
        for(var j = 1; j < cells[0].length; j++){
            var id = "cell-" + i + "-" + j;
            cells[i][j] = document.getElementById(id).value;
        }
    }
    setTextareaFromCells();
}

function setTextareaFromCells(){
    document.getElementById("textarea").value = "" + cells.length + "," + cells[0].length + "," + cells;
}

function changeRowMax(addition){
    var row = parseInt(document.getElementById("row-size").innerHTML);
    row += addition;
    column = cells[0].length - 1;
    cells = new Array(row + 1);
    for(var i = 0; i < cells.length; i ++){
        cells[i] = new Array(column + 1);
        cells[i].fill("");
    }
    randomize();
    document.getElementById("row-size").innerHTML = row;
}

function changeColumnMax(addition){
    var column = parseInt(document.getElementById("column-size").innerHTML);
    row = cells.length - 1;
    column += addition;
    cells = new Array(row + 1);
    for(var i = 0; i < cells.length; i ++){
        cells[i] = new Array(column + 1);
        cells[i].fill("");
    }
    randomize();
    document.getElementById("column-size").innerHTML = column;
}

function changeRadical(mode){
    if(mode == "all"){
        radical = ALL_RADICAL;
    }
    if(mode == "basic"){
        radical = BASIC_RADICAL;
    }
    randomize();
}

function randomize(){
    makeRowHead();
    makeColumnHead();
    showTable();
    setTextareaFromCells();
}

function generate(){
    var input = document.getElementById("textarea").value.split(",");
    var row = input[0];
    var column = input[1];
    for(var i = 0; i < row; i ++){
        for(var j = 0; j < column; j ++){
            cells[i][j] = input[i * row + j + IDENTIFIER_LENGTH];
        }
    }
    showTable();
}

function chooseAtRandom(array, count) {
    var count = count || 1;
    var arrayData = Array.from(array);
    var result = [];
    for (var i = 0; i < count; i++) {
        var arrayIndex = Math.floor(Math.random() * arrayData.length);
        result[i] = arrayData[arrayIndex];
        arrayData.splice(arrayIndex, 1);
    }
    return result;
}

radical = BASIC_RADICAL;
randomize();