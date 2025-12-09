# Changelog

All notable changes to the Looka VPN Dashboard project.

## [1.0.8] - 2025-12-09

### Fixed
- 🐛 **Critical:** Resolved black screen issue on filtered networks by removing external CDN dependencies
- 🐛 Fixed `vite.config.ts` corruption from failed automated edits
- 🐛 Fixed duplicate imports in `src/main.tsx`
- 🐛 Fixed duplicate DOCTYPE tags in `index.html`
- 🐛 Removed conflicting `inlineDynamicImports` option in Rollup config

### Changed
- ⚡ Migrated from Tailwind CDN to local Tailwind CSS v4 with `@tailwindcss/vite`
- ⚡ All styles now bundled into single HTML file (no external dependencies)
- 📦 Updated build output: 646KB (gzipped: 191KB)
- 🔧 Improved `install.sh` to specifically target `template.zip` asset

### Added
- ✨ Local Tailwind CSS configuration in `tailwind.config.js`
- ✨ CSS entry point `src/index.css` with `@import "tailwindcss"`
- 📝 Comprehensive README with screenshots and changelog

## [1.0.7] - 2025-12-09

### Fixed
- 🐛 Removed `output.manualChunks` configuration that conflicted with `inlineDynamicImports`
- 🐛 Fixed build error: "Unknown input options: inlineDynamicImports"

### Changed
- 🔧 Cleaned up `vite.config.ts` build configuration

## [1.0.6] - 2025-12-08

### Changed
- 🔧 Build configuration adjustments

## [1.0.5] - 2025-12-08

### Changed
- 🎨 UI refinements

## [1.0.3] - 2025-12-08

### Changed
- 🐛 Bug fixes and improvements

## [1.0.1] - 2025-12-08

### Changed
- 🔧 Configuration updates

## [1.0.0] - 2025-12-08

### Added
- 🎉 Initial release
- 🎨 Spotify-inspired dark theme with glassmorphism
- 🌍 Multi-language support (Persian/English)
- 📱 Fully responsive design
- 📊 Usage statistics and charts
- 📥 Direct VPN client download links
- 🔗 QR code generation for subscription links
- 📖 Integrated FAQ and troubleshooting guide
- ⚡ Single-file HTML output via `vite-plugin-singlefile`

---

## Legend

- 🎉 New feature
- ⚡ Performance improvement
- 🐛 Bug fix
- 🔧 Configuration change
- 📝 Documentation
- 🎨 UI/UX improvement
- 📦 Build/dependency update
- 🔒 Security fix
