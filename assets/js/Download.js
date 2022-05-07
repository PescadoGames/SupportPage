window.onload = function onLoad() {
  doDownload('https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21470&authkey=APNEcWa-c7AulLg', 'PescadoGamesLauncherInstaller.exe');
  target = document.getElementById("ThankYouDownloadMessage");
  target.innerHTML = "<h2>PescadoGamesLauncherをダウンロードしていただきありがとうございます！</h2>";
  const target = document.getElementById("DownloadHref")

  const changeHref = () => {
    target.href = "https://www.yahoo.co.jp"
    target.textContent = "Yahoo"
  }
}
