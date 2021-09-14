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
