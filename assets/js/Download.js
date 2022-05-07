window.onload = function onLoad() {
  target = document.getElementById("ThankYouDownloadMessage");
  target.innerHTML = "<h2>PescadoGamesLauncherをダウンロードしていただきありがとうございます！</h2>";
  const target = document.getElementById("DownloadHref")

  const changeHref = () => {
    target.href = "https://www.yahoo.co.jp"
    target.textContent = "Yahoo"
  }
}
