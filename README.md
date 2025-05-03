# YouTube Music Downloader 🎵

A modern desktop application for downloading high-quality audio from YouTube videos and playlists. Built with Electron for Windows.



## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎧 Audio Download | Download high-quality audio from YouTube videos and playlists |
| 🎵 Format Options | Choose between MP3 (converted) or WebM (original audio) |
| 📁 Folder Management | Set and remember your download folder across sessions |
| 📊 Progress Tracking | Real-time progress with song counter |
| 💾 Local Storage | All preferences stored locally, no cloud dependencies |
| 💡 Modern UI | Clean, dark-themed interface |
| ✅ Self-Contained | No additional software required |
| 🔄 Playlist Support | Download entire playlists with organized folders |


### Build from Source
```bash
# Clone the repository
git clone https://github.com/kanyalmohit/youtube-music-download.git
cd youtube-music-download

# Install dependencies
npm install

# Create bin folder and add required files
mkdir bin
# Download ffmpeg.exe and yt-dlp.exe into bin folder

# Run in development
npm start

# Build for Windows
npm run dist
```

## 📦 Required Binaries

Place these files in the `bin/` folder:

- **ffmpeg.exe**: [Download](https://github.com/BtbN/FFmpeg-Builds/releases/latest/download/ffmpeg-n7.1-latest-win64-gpl-7.1.zip)
- **yt-dlp.exe**: [Download](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe)

## 🛠️ Technical Details

This application is a user-friendly interface built on top of powerful open-source tools:

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Handles YouTube downloads
- [ffmpeg](https://ffmpeg.org/) - Manages audio conversion

The app is built with:
- Electron for the desktop interface
- electron-builder for packaging
- Local storage for preferences

## ⚠️ Legal Notice

This application is intended for personal and educational use only. Users are responsible for ensuring they have the right to download and use any content.

> The developer does not condone piracy or copyright infringement and takes no responsibility for how this tool is used.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

<div align="center">
  <p>If you find this project useful, please consider giving it a ⭐️</p>
</div>
