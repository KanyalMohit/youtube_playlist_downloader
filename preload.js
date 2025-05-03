// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  downloadAudio: (url, format, isPlaylist) => ipcRenderer.send('download-audio', { url, format, isPlaylist }),
  selectDownloadFolder: () => ipcRenderer.invoke('select-download-folder'),
  getSavedFolder: () => ipcRenderer.invoke('get-saved-folder'),
  onProgress: (callback) => ipcRenderer.on('download-progress', (event, data) => callback(data)),
  onComplete: (callback) => ipcRenderer.on('download-complete', callback),
  onCancelled: (callback) => ipcRenderer.on('download-cancelled', callback),
  onError: (callback) => ipcRenderer.on('download-error', (event, message) => {
    console.error('Download error:', message);
    callback(message);
  }),
});
