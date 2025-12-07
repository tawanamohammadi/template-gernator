import { ConfigItem, OsData, UserData } from './types';
import { Apple, Smartphone, Monitor } from 'lucide-react';
import React from 'react';

export const USER_DATA: UserData = {
  username: 'ZakiKam',
  status: 'active',
  usedTraffic: '303.9 MB',
  totalTraffic: '350.0 GB',
  usedPercentage: 0.1,
  expiryDate: '∞',
  daysRemaining: '∞'
};

export const CONFIGS: ConfigItem[] = [
  {
    id: '1',
    name: 'اگر اتصال قطع شد، اشتراک را آپدیت کنید 📲',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@TAWANAPROXY.COM:1111?security=none&type=tcp&headerType=&path=&host=#%D8%A7%DA%AF%D8%B1%20%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D9%82%D8%B7%D8%B9%20%D8%B4%D8%AF%D8%8C%20%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%DA%A9%20%D8%B1%D8%A7%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%20%D8%A2%D9%BE%D8%AF%DB%8C%D8%AA%20%DA%A9%D9%86%DB%8C%D8%AF%20%F0%9F%93%B2',
  },
  {
    id: '2',
    name: 'اطلاعات کاربر: ZakiKam',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@TAWANAPROXY.COM:1111?security=none&type=tcp&headerType=&path=&host=#%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%3A%20ZakiKam%20%20%20%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE%20%D8%A7%D9%86%D9%82%D8%B6%D8%A7%3A%20%E2%88%9E%20%20%20%D8%AD%D8%AC%D9%85%20%D9%85%D8%B5%D8%B1%D9%81%20%D8%B4%D8%AF%D9%87%3A%20303.9%20MB%20%D8%A7%D8%B2%20350.0%20GB',
  },
  {
    id: '3',
    name: 'USA 3 | توانا پروکسی',
    flag: '🇺🇸',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@Tawanarubika.panbehpanel.ir:8080?security=reality&type=tcp&headerType=&path=&host=&sni=yahoo&fp=chrome&pbk=89k_GeNAta4HE_jN21mGc7hUl1j2UksyobhfffvpoBw&sid=#%F0%9F%87%BA%F0%9F%87%B8%20USA%203%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%BA%F0%9F%87%B8',
  },
  {
    id: '4',
    name: 'GER | توانا پروکسی',
    flag: '🇩🇪',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@ger.cdn.panbehpanel.ir:8080?security=reality&type=tcp&headerType=&path=&host=&sni=yahoo&fp=chrome&pbk=89k_GeNAta4HE_jN21mGc7hUl1j2UksyobhfffvpoBw&sid=#%F0%9F%87%A9%F0%9F%87%AA%20GER%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%A9%F0%9F%87%AA',
  },
  {
    id: '5',
    name: 'ENG | توانا پروکسی',
    flag: '🇬🇧',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@eng.panbehpanel.ir:8080?security=reality&type=tcp&headerType=&path=&host=&sni=www.yahoo.com&fp=chrome&pbk=89k_GeNAta4HE_jN21mGc7hUl1j2UksyobhfffvpoBw&sid=#%F0%9F%87%AC%F0%9F%87%A7%20ENG%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%AC%F0%9F%87%A7',
  },
  {
    id: '6',
    name: 'USA 1 | توانا پروکسی',
    flag: '🇺🇸',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@TAWANANET.PANBEHPANEL.IR:80?security=none&type=xhttp&headerType=&path=%2F&host=free.panbehpanel.ir&mode=auto&extra=%7B%22scMaxEachPostBytes%22%3A+%221000000%22%2C+%22scMaxConcurrentPosts%22%3A+100%2C+%22scMinPostsIntervalMs%22%3A+30%2C+%22xPaddingBytes%22%3A+%22100-1000%22%2C+%22noGRPCHeader%22%3A+false%7D#%F0%9F%87%BA%F0%9F%87%B8%20USA%201%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%BA%F0%9F%87%B8',
  },
  {
    id: '7',
    name: 'USA 2 | توانا پروکسی',
    flag: '🇺🇸',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@TAWANARUBIKA.PANBEHPANEL.IR:443?security=tls&type=tcp&headerType=&path=&host=&sni=panbehpanel.ir&fp=#%F0%9F%87%BA%F0%9F%87%B8%20USA%202%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%BA%F0%9F%87%B8',
  },
  {
    id: '8',
    name: 'Netherlands 1 | توانا پروکسی',
    flag: '🇳🇱',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@ams.cdn.panbehpanel.ir:443?security=tls&type=tcp&headerType=&path=&host=&sni=panbehpanel.ir&fp=#%F0%9F%87%B3%F0%9F%87%B1%20Netherlands%201%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%B3%F0%9F%87%B1',
  },
  {
    id: '9',
    name: 'Netherlands 2 | توانا پروکسی',
    flag: '🇳🇱',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@am-ircdn.panbehpanel.ir:443?security=tls&type=tcp&headerType=&path=&host=&sni=429553130f331327.panbehpanel.ir&fp=#%F0%9F%87%B3%F0%9F%87%B1%20Netherlands%202%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%B3%F0%9F%87%B1',
  },
  {
    id: '10',
    name: 'GERMANY 1 | توانا پروکسی',
    flag: '🇩🇪',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@ger.cdn.panbehpanel.ir:443?security=tls&type=tcp&headerType=&path=&host=&sni=panbehpanel.ir&fp=#%F0%9F%87%A9%F0%9F%87%AA%20%20GERMANY%201%20%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%A9%F0%9F%87%AA',
  },
  {
    id: '11',
    name: 'ENG 2| توانا پروکسی',
    flag: '🇬🇧',
    url: 'vless://c9662d7f-e82a-4d2b-9be5-26bc012a90f4@eng.panbehpanel.ir:443?security=tls&type=tcp&headerType=&path=&host=&sni=panbehpanel.ir&fp=#%F0%9F%87%AC%F0%9F%87%A7%20ENG%202%7C%20%D8%AA%D9%88%D8%A7%D9%86%D8%A7%20%D9%BE%D8%B1%D9%88%DA%A9%D8%B3%DB%8C%20%F0%9F%87%AC%F0%9F%87%A7',
  }
];

export const OS_DATA: OsData[] = [
  {
    id: 'ios',
    label: 'آی او اِس',
    icon: React.createElement(Apple, { size: 20 }),
    apps: [
      { name: 'Streisand', minOsVersion: '14+', downloadLink: '#', addLink: '#' },
      { name: 'FoXray', minOsVersion: '16+', downloadLink: '#', addLink: '#' },
      { name: 'v2Box', minOsVersion: '14+', downloadLink: '#', addLink: '#' },
      { name: 'Shadowrocket', minOsVersion: '12+', downloadLink: '#', addLink: '#' },
      { name: 'Sing-Box', minOsVersion: '15+', downloadLink: '#', addLink: '#' },
    ]
  },
  {
    id: 'android',
    label: 'اندروید',
    icon: React.createElement(Smartphone, { size: 20 }),
    apps: [
      { name: 'v2rayNG', downloadLink: '#', addLink: '#' },
      { name: 'NekoBox', downloadLink: '#', addLink: '#' },
      { name: 'Sing-Box', downloadLink: '#', addLink: '#' },
    ]
  },
  {
    id: 'windows',
    label: 'ویندوز',
    icon: React.createElement(Monitor, { size: 20 }),
    apps: [
      { name: 'v2rayN', downloadLink: '#', addLink: '#' },
      { name: 'Nekoray', downloadLink: '#', addLink: '#' },
      { name: 'Clash Verge', downloadLink: '#', addLink: '#' },
    ]
  }
];