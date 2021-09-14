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
