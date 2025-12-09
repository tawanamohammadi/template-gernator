/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                spotify: {
                    base: '#000000',
                    highlight: '#121212',
                    card: '#181818',
                    elevated: '#282828',
                    green: '#1DB954',
                    greenHover: '#1ed760',
                    subtext: '#b3b3b3',
                    white: '#ffffff',
                    border: '#ffffff1a',
                }
            },
            fontFamily: {
                sans: ['Vazirmatn', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'deep-gradient': 'linear-gradient(145deg, #121212 0%, #000000 100%)',
                'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                'glow-green': 'radial-gradient(circle at center, rgba(29, 185, 84, 0.15) 0%, transparent 70%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(29, 185, 84, 0.1)' },
                    '50%': { boxShadow: '0 0 40px rgba(29, 185, 84, 0.2)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}
