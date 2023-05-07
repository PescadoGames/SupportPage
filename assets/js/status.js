url = `https://status.pescadogames.com/assets/json/status.json`;
act = "act";
pro = "pro";

// ブラウザの言語を取得する
var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
// ただし、どちらのプロパティにも対応していないブラウザではundefinedになる

if (lang === undefined)
    lang = "ja"; // 不明のときは日本語と見なす

if (lang.toLowerCase().indexOf("ja") !== -1) {
    statusactive = "正常";
    statusproblem = "問題発生";
    statusupdating = "更新作業中"
    statusbroken = "崩壊中";
    statusendofservice = "サービス終了";
    statusallactive = "すべてのシステムは正常に動作しています！";
    statusallupdate = "一部のシステムは現在更新作業中です";
    statusallproblem = "一部のシステムで問題が発生しています";
}
else {
    statusactive = "Working";
    statusproblem = "Problem";
    statusupdating = "Updating"
    statusbroken = "Broken";
    statusendofservice = "End of Service";
}

$.getJSON(url, (data) => {
    if (data.githubpagesstatus == "act") {
        if (data.displaystatus == "act") {
            if (data.serverstatus == "act") {
                if (data.websiteviewstatus == "act") {
                    if (data.pgbotserverstatus == "act") {
                        if (data.pgbotrepository == "act") {
                            if (data.pgbotresponse == "act") {
                                if (data.pgbotgbc == "act") {
                                    var elm = document.getElementById('nowstatustext');
                                    elm.textContent = statusallactive;
                                    $('#nowstatusmark').addClass('allok');
                                }
                                else if (data.pgbotgbc == "upd") {
                                    var elm = document.getElementById('nowstatustext');
                                    elm.textContent = statusallupdate;
                                    $('#nowstatusmark').removeClass('allok');
                                    $('#nowstatusmark').addClass('allupdate');
                                }
                                else {
                                    var elm = document.getElementById('nowstatustext');
                                    elm.textContent = statusallproblem;
                                    $('#nowstatusmark').removeClass('allok');
                                    $('#nowstatusmark').addClass('allproblem');
                                }
                            }
                            else if (data.pgbotresponse == "upd") {
                                var elm = document.getElementById('nowstatustext');
                                elm.textContent = statusallupdate;
                                $('#nowstatusmark').removeClass('allok');
                                $('#nowstatusmark').addClass('allupdate');
                            }
                            else {
                                var elm = document.getElementById('nowstatustext');
                                elm.textContent = statusallproblem;
                                $('#nowstatusmark').removeClass('allok');
                                $('#nowstatusmark').addClass('allproblem');
                            }
                        }
                        else if (data.pgbotrepository == "upd") {
                            var elm = document.getElementById('nowstatustext');
                            elm.textContent = statusallupdate;
                            $('#nowstatusmark').removeClass('allok');
                            $('#nowstatusmark').addClass('allupdate');
                        }
                        else {
                            var elm = document.getElementById('nowstatustext');
                            elm.textContent = statusallproblem;
                            $('#nowstatusmark').removeClass('allok');
                            $('#nowstatusmark').addClass('allproblem');
                        }
                    }
                    else if (data.pgbotserverstatus == "upd") {
                        var elm = document.getElementById('nowstatustext');
                        elm.textContent = statusallupdate;
                        $('#nowstatusmark').removeClass('allok');
                        $('#nowstatusmark').addClass('allupdate');
                    }
                    else {
                        var elm = document.getElementById('nowstatustext');
                        elm.textContent = statusallproblem;
                        $('#nowstatusmark').removeClass('allok');
                        $('#nowstatusmark').addClass('allproblem');
                    }
                }
                else if (data.websiteviewstatus == "upd") {
                    var elm = document.getElementById('nowstatustext');
                    elm.textContent = statusallupdate;
                    $('#nowstatusmark').removeClass('allok');
                    $('#nowstatusmark').addClass('allupdate');
                }
                else {
                    var elm = document.getElementById('nowstatustext');
                    elm.textContent = statusallproblem;
                    $('#nowstatusmark').removeClass('allok');
                    $('#nowstatusmark').addClass('allproblem');
                }
            }
            else if (data.serverstatus == "upd") {
                var elm = document.getElementById('nowstatustext');
                elm.textContent = statusallupdate;
                $('#nowstatusmark').removeClass('allok');
                $('#nowstatusmark').addClass('allupdate');
            }
            else {
                var elm = document.getElementById('nowstatustext');
                elm.textContent = statusallproblem;
                $('#nowstatusmark').removeClass('allok');
                $('#nowstatusmark').addClass('allproblem');
            }
        }
        else if (data.displaystatus == "upd") {
            var elm = document.getElementById('nowstatustext');
            elm.textContent = statusallupdate;
            $('#nowstatusmark').removeClass('allok');
            $('#nowstatusmark').addClass('allupdate');
        }
        else {
            var elm = document.getElementById('nowstatustext');
            elm.textContent = statusallproblem;
            $('#nowstatusmark').removeClass('allok');
            $('#nowstatusmark').addClass('allproblem');
        }
    }
    else if (data.githubpagesstatus == "upd") {
        var elm = document.getElementById('nowstatustext');
        elm.textContent = statusallupdate;
        $('#nowstatusmark').removeClass('allok');
        $('#nowstatusmark').addClass('allupdate');
    }
    else {
        var elm = document.getElementById('nowstatustext');
        elm.textContent = statusallproblem;
        $('#nowstatusmark').removeClass('allok');
        $('#nowstatusmark').addClass('allproblem');
    }
});