const { ipcRenderer } = require("electron");

var badumtss = new Audio(__dirname + "/assets/badumtss.mp3");

ipcRenderer.on("badumtss", () => {
  badumtss.currentTime = 0;
  badumtss.play();
});

document.getElementById("badumtss").addEventListener("click", function() {
  badumtss.currentTime = 0;
  badumtss.play();
});
