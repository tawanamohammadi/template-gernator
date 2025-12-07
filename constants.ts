import { ConfigItem, OsData, UserData, FAQItem } from './types';
import { Apple, Smartphone, Monitor } from 'lucide-react';
import React from 'react';

export const USER_DATA: UserData = {
  username: 'ZakiKam',
  plan: 'اشتراک VIP نامحدود',
  status: 'active',
  usedTraffic: '303.9 MB',
  totalTraffic: '350.0 GB',
  usedPercentage: 0.1,
  expiryDate: '∞',
  daysRemaining: '∞',
  supportLink: 'https://t.me/support', // Replace with actual support ID
  channelLink: 'https://t.me/channel', // Replace with actual channel ID
  subscriptionUrl: 'https://sub.lookavpn.com/api/v1/client/subscribe?token=c9662d7f-e82a-4d2b-9be5-26bc012a90f4',
  userId: 'c9662d7f-e82a'
};

export const CONFIGS: ConfigItem[] = [
  {
    id: '1',
    name: 'کانال اطلاع رسانی | برای آپدیت کلیک کنید',
    url: 'https://t.me/channel',
    countryCode: 'ir' 
  },
  {
    id: '3',
    name: 'USA 3 | سرور اختصاصی',
    countryCode: 'us',
    url: 'vless://...',
  },
  {
    id: '4',
    name: 'GER | سرور آلمان',
    countryCode: 'de',
    url: 'vless://...',
  },
  {
    id: '5',
    name: 'ENG | سرور انگلیس',
    countryCode: 'gb',
    url: 'vless://...',
  },
  {
    id: '6',
    name: 'USA 1 | نیویورک',
    countryCode: 'us',
    url: 'vless://...',
  },
  {
    id: '7',
    name: 'USA 2 | کالیفرنیا',
    countryCode: 'us',
    url: 'vless://...',
  },
  {
    id: '8',
    name: 'NL 1 | آمستردام',
    countryCode: 'nl',
    url: 'vless://...',
  },
  {
    id: '9',
    name: 'NL 2 | هلند پلاس',
    countryCode: 'nl',
    url: 'vless://...',
  },
  {
    id: '10',
    name: 'GER 2 | برلین',
    countryCode: 'de',
    url: 'vless://...',
  },
  {
    id: '11',
    name: 'ENG 2 | لندن',
    countryCode: 'gb',
    url: 'vless://...',
  }
];

export const OS_DATA: OsData[] = [
  {
    id: 'ios',
    label: 'آی او اِس (iPhone)',
    icon: React.createElement(Apple, { size: 20 }),
    apps: [
      { name: 'Streisand', minOsVersion: 'iOS 14+', downloadLink: '#', addLink: '#' },
      { name: 'FoXray', minOsVersion: 'iOS 16+', downloadLink: '#', addLink: '#' },
      { name: 'v2Box', minOsVersion: 'iOS 14+', downloadLink: '#', addLink: '#' },
      { name: 'Shadowrocket', minOsVersion: 'iOS 12+', downloadLink: '#', addLink: '#' },
      { name: 'Sing-Box', minOsVersion: 'iOS 15+', downloadLink: '#', addLink: '#' },
    ]
  },
  {
    id: 'android',
    label: 'اندروید (Android)',
    icon: React.createElement(Smartphone, { size: 20 }),
    apps: [
      { name: 'v2rayNG', downloadLink: '#', addLink: '#' },
      { name: 'NekoBox', downloadLink: '#', addLink: '#' },
      { name: 'Sing-Box', downloadLink: '#', addLink: '#' },
    ]
  },
  {
    id: 'windows',
    label: 'ویندوز (Windows)',
    icon: React.createElement(Monitor, { size: 20 }),
    apps: [
      { name: 'v2rayN', downloadLink: '#', addLink: '#' },
      { name: 'Nekoray', downloadLink: '#', addLink: '#' },
      { name: 'Clash Verge', downloadLink: '#', addLink: '#' },
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'چگونه اشتراک خود را تمدید کنم؟',
    answer: 'برای تمدید اشتراک، کافیست در بخش وضعیت اشتراک روی دکمه "تمدید اشتراک" کلیک کنید تا به پشتیبانی تلگرام متصل شوید.'
  },
  {
    question: 'چگونه به سرویس متصل شوم؟',
    answer: 'ابتدا نرم‌افزار مناسب سیستم عامل خود را از بخش "دانلود و اتصال" دریافت کنید. سپس لینک اشتراک یا یکی از کانفیگ‌ها را کپی کرده و در برنامه وارد کنید.'
  },
  {
    question: 'چرا سرعتم کم شده است؟',
    answer: 'ممکن است سروری که به آن متصل هستید شلوغ باشد. لطفا کانفیگ دیگری (مثلا از کشور دیگر) را امتحان کنید و حتما اشتراک خود را بروزرسانی کنید.'
  },
  {
    question: 'آیا حجم مصرفی دقیق است؟',
    answer: 'بله، نمودار مصرف به صورت آنی بروزرسانی می‌شود و دقیقاً مقدار ترافیک مصرف شده از بسته شما را نمایش می‌دهد.'
  }
];