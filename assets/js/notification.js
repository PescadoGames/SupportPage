const notifurl = "http://61.193.48.177/support/assets/json/notification.json";  // 読み込むJSONファイル

function roadJSON(readjson) {
    console.log(readjson);
    console.log(Object.keys(readjson).length);

    // JSONファイルを整形して表示

    // id属性で要素を取得
    var addtoelement = document.getElementById('notificationarea');
    var base = document.getElementById('notificationareafirst');

    for (let notiflist of readjson) {
        if (notiflist.type == "dialog") {
            document.getElementById("notifdialogcontent").innerHTML = notiflist.text;
            document.getElementById("notifdialog").style = "display: visible";
            document.getElementById("notifdialog").classList.add("notifdialogshow");
        }
        else {
            // 新しいHTML要素を作成
            var newelement = document.createElement('p');
            newelement.innerHTML = notiflist.text;

            // div要素を生成
            var newdiv = document.createElement('div');
            var closebutton = document.createElement('button');

            // classを追加
            if (notiflist.icon == "warning") {
                newdiv.className = 'notification notificationwarning';
                //img要素を生成
                var image = document.createElement('img');
                //img要素のsrcを変更
                image.src = "https://www.pescadogames.com/assets/image/Warning.png";
                //imgタグを追加
                newdiv.appendChild(image);
            }
            else {
                newdiv.className = 'notification';
                //img要素を生成
                var image = document.createElement('img');
                //img要素のsrcを変更
                image.src = "https://linux.pescadogames.com/assets/image/StatusInfomationMark.svg";
                //imgタグを追加
                newdiv.appendChild(image);
            }

            //閉じるボタンの各種設定
            closebutton.classList.add('notificationclosebutton');
            closebutton.setAttribute("id", "notificationclosebutton");
            closebutton.innerHTML = "X";

            //aタグを追加
            newdiv.appendChild(newelement);
            //閉じるボタンを追加
            newdiv.appendChild(closebutton);
            // 指定した要素の中の末尾に挿入
            addtoelement.insertBefore(newdiv, base);

            document.getElementById('notificationclosebutton').addEventListener('click', function () {
                var parentElement = this.parentNode;
                parentElement.classList.add('notiicationhide');
                setTimeout(function () {
                    parentElement.style = 'display: none';
                }, 500);
            });
        }
    }
}

// ページ読み込み中の時の処理
window.addEventListener("DOMContentLoaded", () => {
    fetch(notifurl)
        .then(response => response.json())
        .then(data => roadJSON(data));
});

function CloseNotifDialog() {
    document.getElementById("notifdialog").classList.remove('notifdialogshow');
    setTimeout(function () {
        document.getElementById("notifdialog").style = "display: none";
    }, 500);
}