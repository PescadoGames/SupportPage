const url = "../assets/json/autoupdaterdocs.json";  // 読み込むJSONファイル

function formatJSON(json) {
    console.log(json);
    console.log(Object.keys(json).length);

    // JSONファイルを整形して表示

    // id属性で要素を取得
    var add_element = document.getElementById('mainarticle');

    for (let errorcodedocs of json) {
        // 新しいHTML要素を作成
        var new_element = document.createElement('a');
        new_element.textContent = errorcodedocs.title;
        new_element.setAttribute('href', errorcodedocs.url);

        // div要素を生成
        var div = document.createElement('div');
        // classを追加
        div.className = 'article';
        //aタグを追加
        div.appendChild(new_element);
        // 指定した要素の中の末尾に挿入
        add_element.appendChild(div);
    }

}

// 起動時の処理
window.addEventListener("load", () => {
    document.getElementById('loading').classList.add('loadingshow');
    setTimeout(function () {
        fetch(url)
            .then(response => response.json())
            .then(data => formatJSON(data));

        setTimeout(function () {
            document.getElementById('loading').classList.remove('loadingshow');
            document.getElementById('loading').classList.add('loadinghiding');

            setTimeout(function () {
                document.getElementById('loading').classList.add('loadinghide');
                document.getElementById('loading').classList.remove('loadinghiding');
            }, 1000);
        }, 1000);
    }, 1000);
    // ドキュメントを取得して表示
});