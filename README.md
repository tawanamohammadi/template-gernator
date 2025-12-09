<div align="center">
  <h1>🚀 Looka VPN Dashboard</h1>
  <p><strong>A premium, dark-themed subscription dashboard for Marzban Panel</strong></p>
  
  ![Dashboard Preview](https://raw.githubusercontent.com/tawanamohammadi/template-gernator/main/screenshots/dashboard.png)
</div>

---

## ✨ Features

- **🎨 Modern Aesthetics:** Sleek dark mode design inspired by Spotify, featuring glassmorphism and smooth animations
- **🌍 Multi-Language Support:** Full support for **Persian (FA)** and **English (EN)** with automatic RTL/LTR adjustment
- **📱 Responsive & Mobile-First:** Perfectly optimized for all devices, from mobile phones to desktops
- **⚡ Smart Config Management:**
  - One-click copy for subscription links and configs
  - Automatic OS detection for tutorials
  - QR Code display for easy scanning
- **📥 Direct App Downloads:** Built-in direct download links for the latest stable VPN clients (v2rayNG, v2rayN, V2Box, etc.)
- **📊 User Stats:** Real-time display of usage, remaining traffic, and expiration date
- **🛠 Troubleshooting Guide:** Integrated FAQ and step-by-step connection tutorials
- **🔒 Fully Offline:** All assets bundled into a single HTML file (no external CDN dependencies)

## 🚀 Quick Installation

Run this command on your Marzban server:

```bash
bash <(curl -sL https://raw.githubusercontent.com/tawanamohammadi/template-gernator/main/install.sh)
```

The installer will:
1. Download the latest release
2. Extract to `/var/lib/marzban/templates/looka-dashboard`
3. Ready to use!

Then configure Marzban to use the template:
```bash
nano /opt/marzban/.env
```

Add or update:
```env
CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/looka-dashboard"
```

Restart Marzban:
```bash
marzban restart
```

## 💻 Local Development

```bash
# Clone repository
git clone https://github.com/tawanamohammadi/template-gernator.git
cd template-gernator

# Install dependencies
npm install

# Start dev server
npm run dev
```

Access at `http://localhost:5173`

*Note: Development mode uses mock data from `src/constants.ts`*

## 🏗️ Build

```bash
npm run build
```

Output: Single-file HTML in `dist/index.html` (~646KB, gzipped: ~191KB)

## 📦 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling (fully bundled, no CDN)
- **Vite** - Build tool
- **Lucide React** - Icons
- **Recharts** - Usage charts
- **vite-plugin-singlefile** - Single HTML output

## 🔄 Changelog

### v1.0.8 (Latest)
- ✅ Migrated to local Tailwind CSS (no external CDN dependencies)
- ✅ Fixed black screen issue on filtered networks
- ✅ Improved build performance
- ✅ Single-file output with all assets inlined

[View full changelog](./CHANGELOG.md)

## 📝 License

MIT License - Free to use and modify

---

<div align="center">
  <p>Made with ❤️ for the Free Internet</p>
  <p>
    <a href="https://github.com/tawanamohammadi/template-gernator/issues">Report Bug</a> •
    <a href="https://github.com/tawanamohammadi/template-gernator/releases">Releases</a>
  </p>
</div>
