window.onload = function onLoad() {
  if (location.search == "?PescadoGamesLauncher") {
      document.location.assign("https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21471&authkey=AK7UCEVz0DUFrME");
      document.getElementById('ThankYouDownloadMessage').innerHTML = "<h2>Thank you for downloading PescadoGamesLauncher!</h2>";
      document.getElementById('DownloadHref').innerHTML = '<a href="https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21471&authkey=AK7UCEVz0DUFrME">If the download does not start, click here.</a>';
  }
  else{
    document.getElementById('ThankYouDownloadMessage').innerHTML = "<h2>This file is not available<br>Please check the URL and try again</h2>";
    document.getElementById('DownloadHref').innerHTML = '';
    document.getElementById('DownloadNotStartMessage').innerHTML = '';
  }

}
