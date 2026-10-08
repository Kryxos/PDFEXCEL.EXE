const { app, BrowserWindow, shell, session } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1280, height: 850, minWidth: 900, minHeight: 620,
    title: 'PDF-Excel Signer',
    icon: path.join(__dirname, 'icon.ico'),
    backgroundColor: '#f6f7fa',
    autoHideMenuBar: true,
    webPreferences: {nodeIntegration: false, contextIsolation: true, sandbox: true}
  });
  // Zapobiega przypadkowemu otwieraniu obcych stron w oknie aplikacji.
  win.webContents.setWindowOpenHandler(({url}) => {
    if (/^https:\/\//i.test(url)) shell.openExternal(url);
    return {action: 'deny'};
  });
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) event.preventDefault();
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
});
app.on('window-all-closed', () => app.quit());
