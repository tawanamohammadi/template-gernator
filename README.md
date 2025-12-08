<div align="center">
  <img src="https://raw.githubusercontent.com/tawanamohammadi/template-gernator/master/screenshots/banner.png" alt="Looka VPN Dashboard Banner" width="100%" />
</div>

<h1 align="center">Looka VPN Dashboard</h1>

<p align="center">
  <strong>A premium, dark-themed user dashboard template for Marzban Panel.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#development">Development</a> •
  <a href="#screenshots">Screenshots</a>
</p>

---

## ✨ Features

- **🎨 Modern Aesthetics:** Sleek dark mode design inspired by Spotify, featuring glassmorphism and smooth animations.
- **🌍 Multi-Language Support:** Full support for **Persian (FA)** and **English (EN)** with automatic RTL/LTR adjustment.
- **📱 Responsive & Mobile-First:** Perfectly optimized for all devices, from mobile phones to desktops.
- **⚡ Smart Config Management:**
  - One-click copy for subscription links and configs.
  - Automatic OS detection for tutorials.
  - QR Code display for easy scanning.
- **📥 Direct App Downloads:** Built-in direct download links for the latest stable VPN clients (v2rayNG, v2rayN, V2Box, etc.) for Android, iOS, and Windows.
- **📊 User Stats:** Real-time display of usage, remaining traffic, and expiration date.
- **🛠 Troubleshooting Guide:** Integrated FAQ and step-by-step connection tutorials.

## 🚀 Installation

You can easily install this template on your Marzban server using the provided installer script.

### One-Command Installation

Run the following command on your server:

```bash
bash <(curl -sL https://raw.githubusercontent.com/tawanamohammadi/template-gernator/main/install.sh)
```

### Manual Installation

1. Download the latest `template.zip` from the [Releases](https://github.com/tawanamohammadi/template-gernator/releases) page.
2. Extract the contents to `/var/lib/marzban/templates/looka-dashboard`.
3. Update your `.env` file in Marzban to point to this directory (if required by your setup) or simply select it in the panel settings if available.

## 💻 Local Development

To run this project locally for development or customization:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tawanamohammadi/template-gernator.git
   cd template-gernator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Access the dashboard at `http://localhost:3000`.

   *Note: In development mode, the app uses mock data defined in `src/constants.ts` since it doesn't have access to Marzban's Jinja2 context.*

## 📸 Screenshots

| Desktop View | Mobile View |
|:---:|:---:|
| <img src="https://via.placeholder.com/600x400?text=Desktop+Dashboard" alt="Desktop" /> | <img src="https://via.placeholder.com/300x600?text=Mobile+Dashboard" alt="Mobile" /> |

<div align="center">
  <p>Made with ❤️ for the Free Internet</p>
</div>
