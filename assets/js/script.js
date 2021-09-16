function turn(){
    // bodyのクラス名を取得
    var ori = document.body.className;
    // bodyのクラスに追加
    document.body.className = ori + " turn"; 
 
    // 一回転後、クラスを元の状態にする。
    setTimeout(function(){
        document.body.className = ori;
    },2000);
}

function turn10(){
    // bodyのクラス名を取得
    var ori = document.body.className;
    // bodyのクラスに追加
    document.body.className = ori + " turn10"; 
 
    // 一回転後、クラスを元の状態にする。
    setTimeout(function(){
        document.body.className = ori;
    },20000);
}

function turn5(){
    // bodyのクラス名を取得
    var ori = document.body.className;
    // bodyのクラスに追加
    document.body.className = ori + " turn5"; 
 
    // 一回転後、クラスを元の状態にする。
    setTimeout(function(){
        document.body.className = ori;
    },10000);
}

// 元のクラス名を保存
var origin = document.body.className;
// 斜め状態 初期値=false
var tilt_flag = false;
function tilt(obj){
    // 現在の状態とは逆にする。
    tilt_flag = !tilt_flag;
    if(tilt_flag ){
        // 斜め実行
        obj.value = "元に戻す";
        // bodyのクラスに追加
        document.body.className = origin + " tilt"; 
    }else{
        // 元に戻す
        obj.value = "斜め";
        // CSSを初期値に戻す
        document.body.className = origin; 
    }
}
