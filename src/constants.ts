
import { ConfigItem, OsData, UserData, FAQItem } from './types';

// Marzban Types
interface MarzbanData {
  user: {
    username: string;
    used_traffic: number;
    data_limit: number | null;
    expire: number | null;
    status: string;
  };
  sub_url: string;
  sub_token: string;
  links: { remark: string; url: string; }[];
}

declare global {
  interface Window {
    MARZBAN_DATA?: MarzbanData;
  }
}

// Utility Functions
const formatBytes = (bytes: number, decimals = 2): string => {
    if (!+bytes) return '0 MB';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const calculateDaysRemaining = (expireTimestamp: number | null): string | number => {
    if (!expireTimestamp) return '∞';
    // Marzban usually sends seconds timestamp, ensuring consistency
    const now = Math.floor(Date.now() / 1000);
    const diff = expireTimestamp - now;
    if (diff <= 0) return 0;
    return Math.ceil(diff / (60 * 60 * 24));
}

const formatExpiryDate = (expireTimestamp: number | null): string => {
    if (!expireTimestamp) return '∞';
    // Multiply by 1000 because JS Date uses milliseconds
    return new Date(expireTimestamp * 1000).toLocaleDateString('fa-IR');
}

// Default Mock Data (Fallback for local development)
const MOCK_USER_DATA: UserData = {
  username: 'LocalDev_User',
  plan: 'VIP Premium', 
  status: 'active',
  usedTraffic: '303.9 MB',
  totalTraffic: '350.0 GB',
  usedPercentage: 10,
  expiryDate: '1403/12/29',
  daysRemaining: 30,
  supportLink: 'https://t.me/support',
  channelLink: 'https://t.me/channel',
  subscriptionUrl: 'https://sub.example.com/api/v1/client/subscribe?token=mock-token',
  userId: 'mock-uuid-1234',
  whatsappLink: 'https://wa.me/123456789',
  email: 'mailto:support@lookavpn.com',
  phone: 'tel:+1234567890',
  usageHistory24h: [
    { time: '00:00', usage: 10 }, { time: '04:00', usage: 5 }, { time: '08:00', usage: 25 },
    { time: '12:00', usage: 80 }, { time: '16:00', usage: 120 }, { time: '20:00', usage: 150 }, { time: '24:00', usage: 90 }
  ],
  usageHistory30d: [
    { time: '1', usage: 500 }, { time: '5', usage: 800 }, { time: '10', usage: 1200 },
    { time: '15', usage: 2000 }, { time: '20', usage: 1500 }, { time: '25', usage: 2500 }, { time: '30', usage: 3000 }
  ]
};

const MOCK_CONFIGS: ConfigItem[] = [
  { id: '1', name: 'NEWS | اطلاع رسانی', url: 'https://t.me/channel', countryCode: 'ir' },
  { id: '2', name: 'Test Server', countryCode: 'de', url: 'vless://uuid@ip:port?security=reality&sni=google.com&fp=chrome&type=grpc&serviceName=grpc#Test_Server' }
];

// Data Processing Logic
let activeUserData = MOCK_USER_DATA;
let activeConfigs = MOCK_CONFIGS;

// Check if we are in Marzban environment (window.MARZBAN_DATA exists)
// Note: In local development, the Jinja tags in index.html might not render valid JS, 
// causing window.MARZBAN_DATA to be undefined or the script to fail. 
// The try-catch block in a real scenario or simple undefined check handles this.
if (typeof window !== 'undefined' && window.MARZBAN_DATA && window.MARZBAN_DATA.user.username !== "{{ user.username }}") {
  const m = window.MARZBAN_DATA;
  
  // Status mapping
  const statusMap: Record<string, 'active' | 'inactive'> = {
    'active': 'active',
    'on_hold': 'active',
    'expired': 'inactive',
    'limited': 'inactive',
    'disabled': 'inactive'
  };

  const totalBytes = m.user.data_limit || 0;
  const usedBytes = m.user.used_traffic || 0;
  
  // Logic to determine plan name based on limits
  let planName = 'Standard';
  if (!m.user.data_limit) planName = 'Unlimited';
  else if (m.user.data_limit > 50 * 1024 * 1024 * 1024) planName = 'VIP Premium';
  
  activeUserData = {
    ...MOCK_USER_DATA, // Keep static links (support, telegram, etc.)
    username: m.user.username,
    plan: planName,
    status: statusMap[m.user.status] || 'inactive',
    usedTraffic: formatBytes(usedBytes),
    totalTraffic: m.user.data_limit ? formatBytes(m.user.data_limit) : '∞',
    usedPercentage: (m.user.data_limit && m.user.data_limit > 0)
      ? Math.min(100, Math.round((usedBytes / m.user.data_limit) * 100))
      : 0,
    expiryDate: formatExpiryDate(m.user.expire),
    daysRemaining: calculateDaysRemaining(m.user.expire),
    subscriptionUrl: m.sub_url,
    userId: m.sub_token || m.user.username,
    // We keep mock usage history for charts because Marzban doesn't provide history arrays in the standard template
    usageHistory24h: MOCK_USER_DATA.usageHistory24h,
    usageHistory30d: MOCK_USER_DATA.usageHistory30d,
  };

  activeConfigs = m.links.map((link, idx) => ({
    id: String(idx),
    name: link.remark,
    url: link.url,
    countryCode: '' // Marzban doesn't provide country code by default, UI will handle fallback
  }));
}

export const USER_DATA = activeUserData;
export const CONFIGS = activeConfigs;

// Tutorial Data Steps
const androidTutorial = [
    { title: 'step1_title', description: 'step1_desc', icon: 'Copy' },
    { title: 'step2_title', description: 'step2_desc', icon: 'Plus' },
    { title: 'step3_title', description: 'step3_desc', icon: 'Download' },
    { title: 'step4_title', description: 'step4_desc', icon: 'Zap' },
];

const windowsTutorial = [
    { title: 'step1_title', description: 'step1_desc', icon: 'Copy' },
    { title: 'step2_title', description: 'step2_win_desc', icon: 'Monitor' },
    { title: 'step3_title', description: 'step3_win_desc', icon: 'CheckSquare' },
    { title: 'step4_title', description: 'step4_win_desc', icon: 'Zap' },
];

const iosTutorial = [
    { title: 'step1_title', description: 'step1_desc', icon: 'Copy' },
    { title: 'step2_title', description: 'step2_ios_desc', icon: 'Smartphone' },
    { title: 'step3_title', description: 'step3_ios_desc', icon: 'Download' },
    { title: 'step4_title', description: 'step4_ios_desc', icon: 'Zap' },
];

export const OS_DATA: OsData[] = [
  {
    id: 'ios',
    label: 'iOS / Mac',
    icon: 'https://img.icons8.com/3d-fluency/94/mac-os.png',
    apps: [
      { id:'v2box', name: 'v2Box', minOsVersion: 'iOS 14+', downloadLink: '#', addLink: '#', tutorialSteps: iosTutorial },
      { id:'streisand', name: 'Streisand', minOsVersion: 'iOS 14+', downloadLink: '#', addLink: '#' },
      { id:'foxray', name: 'FoXray', minOsVersion: 'iOS 16+', downloadLink: '#', addLink: '#' },
      { id:'shadowrocket', name: 'Shadowrocket', minOsVersion: 'iOS 12+', downloadLink: '#', addLink: '#' },
    ]
  },
  {
    id: 'android',
    label: 'Android',
    icon: 'https://img.icons8.com/3d-fluency/94/android-os.png',
    apps: [
      { id:'v2rayng', name: 'v2rayNG', downloadLink: '#', addLink: '#', tutorialSteps: androidTutorial },
      { id:'nekobox', name: 'NekoBox', downloadLink: '#', addLink: '#' },
      { id:'singbox', name: 'Sing-Box', downloadLink: '#', addLink: '#' },
    ]
  },
  {
    id: 'windows',
    label: 'Windows',
    icon: 'https://img.icons8.com/3d-fluency/94/windows-11.png',
    apps: [
      { id:'v2rayn', name: 'v2rayN', downloadLink: '#', addLink: '#', tutorialSteps: windowsTutorial },
      { id:'nekoray', name: 'Nekoray', downloadLink: '#', addLink: '#' },
      { id:'clashverge', name: 'Clash Verge', downloadLink: '#', addLink: '#' },
    ]
  }
];

export const getFaqData = (lang: 'fa' | 'en'): FAQItem[] => {
    if (lang === 'fa') {
        return [
            { question: 'چگونه اشتراک خود را تمدید کنم؟', answer: 'برای تمدید اشتراک، کافیست در بخش وضعیت اشتراک روی دکمه "تمدید اشتراک" کلیک کنید تا به پشتیبانی تلگرام متصل شوید.' },
            { question: 'چگونه به سرویس متصل شوم؟', answer: 'ابتدا نرم‌افزار مناسب سیستم عامل خود را از بخش "دانلود و اتصال" دریافت کنید. سپس لینک اشتراک یا یکی از کانفیگ‌ها را کپی کرده و در برنامه وارد کنید.' },
            { question: 'چرا سرعتم کم شده است؟', answer: 'ممکن است سروری که به آن متصل هستید شلوغ باشد. لطفا کانفیگ دیگری (مثلا از کشور دیگر) را امتحان کنید و حتما اشتراک خود را بروزرسانی کنید.' },
            { question: 'آیا حجم مصرفی دقیق است؟', answer: 'بله، نمودار مصرف به صورت آنی بروزرسانی می‌شود و دقیقاً مقدار ترافیک مصرف شده از بسته شما را نمایش می‌دهد.' }
        ];
    } else {
        return [
            { question: 'How do I renew my subscription?', answer: 'To renew, simply click the "Renew Subscription" button in the Usage status section to contact support via Telegram.' },
            { question: 'How do I connect?', answer: 'First, download the app for your OS from the "Download & Connect" section. Then copy the subscription link or one of the configs and add it to the app.' },
            { question: 'Why is my speed slow?', answer: 'The server you are connected to might be busy. Please try another config (e.g., from a different country) and make sure to update your subscription.' },
            { question: 'Is data usage accurate?', answer: 'Yes, the usage chart is updated in real-time and shows exactly how much data you have consumed from your plan.' }
        ];
    }
}
