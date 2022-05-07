function DownloadURLChecker() {
    if (location.search == '?PescadoGamesLauncher') {
    // PescadoGamesLauncher
    $(function(){
    $("#link_text a").attr("href", "https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21470&authkey=APNEcWa-c7AulLg")
    });
    doDownload('https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21470&authkey=APNEcWa-c7AulLg', 'PescadoGamesLauncherInstaller.exe');
    $("#ThankYouDownloadMessage").text("<h2>PescadoGamesLauncherをダウンロードしていただきありがとうございます！</h2>");
  } else {
    $("#ThankYouDownloadMessage").text("<h2>このファイルはありません<br>URLが間違っていないかもう一度お確かめください</h2>");
  }

$(window).on('load', function () {
    DownloadURLChecker();
});
