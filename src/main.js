const { app, BrowserWindow, ipcMain, TouchBar } = require("electron");
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar;
const path = require("path");
const url = require("url");

let window;
let webContents;

const badumtss = new TouchBarButton({
  label: "🥁",
  click: () => {
    webContents.send("badumtss");
  }
});

app.once("ready", () => {
  window = new BrowserWindow({
    width: 200,
    height: 200,
    title: "Badumtss",
    backgroundColor: "#000",
    maximizable: false,
    resizable: false
  });
  webContents = window.webContents;
  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  window.setTouchBar(new TouchBar([badumtss]));
});
