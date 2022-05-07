window.onload = function onLoad() {
  if (location.search == "?PescadoGamesLauncher") {
      document.location.assign("https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21470&authkey=APNEcWa-c7AulLg");
      document.getElementById('ThankYouDownloadMessage').innerHTML = "<h2>PescadoGamesLauncherをダウンロードしていただきありがとうございます！</h2>";
      document.getElementById('DownloadHref').innerHTML = '<a href="https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21470&authkey=APNEcWa-c7AulLg">ダウンロードが始まらない場合はこちら</a>';
  }
  else{
    document.getElementById('ThankYouDownloadMessage').innerHTML = "<h2>このファイルはありません<br>URLを確認してもう一度お試しください</h2>";
    document.getElementById('DownloadHref').innerHTML = '';
    document.getElementById('DownloadNotStartMessage').innerHTML = '';
  }

}
