const { app, BrowserWindow, ipcMain } = require('electron')
const youtube = require('./youtube')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // no menu bar
  win.setMenuBarVisibility(false)
  win.loadFile('index.html')

  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


ipcMain.on('youtube-search-perform', async(event, arg) => {
    const result = await youtube.find(arg)
    event.reply('youtube-search-result', result)
})

ipcMain.on('youtube-search-query', async(event, arg) => {
    const result = await youtube.findByUrl(arg)
    event.reply('youtube-search-result', result)
})

const setProgressBar = () => {
    mainWin.setProgressBar(2) // intermediate mode
}

const endProgressBar = () => {
    mainWin.setProgressBar(-1) // end progress bar
}

const server = require('./server')

export { setProgressBar, endProgressBar }
