
import React from 'react';

export type Language = 'fa' | 'en';

export interface UsageHistoryPoint {
  time: string;
  usage: number; // in MB
}

export interface UserData {
  username: string;
  plan: string;
  status: 'active' | 'inactive';
  usedTraffic: string;
  totalTraffic: string;
  usedPercentage: number;
  expiryDate: string;
  daysRemaining: string | number;
  supportLink: string;
  channelLink: string;
  subscriptionUrl: string;
  userId: string;
  usageHistory24h: UsageHistoryPoint[];
  usageHistory30d: UsageHistoryPoint[];
  whatsappLink: string;
  email: string;
  phone: string;
}

export interface ConfigItem {
  id: string;
  name: string;
  url: string;
  countryCode?: string; // ISO 2-letter code
}

export interface TutorialStep {
  title: string;
  description: string;
  icon?: string; // lucide icon name
}

export interface AppRecommendation {
  id: string; 
  name: string;
  icon?: string;
  description?: string;
  downloadLink: string;
  addLink?: string;
  minOsVersion?: string;
  tutorialSteps?: TutorialStep[];
}

export interface OsData {
  id: 'ios' | 'android' | 'windows';
  label: string;
  icon: string; 
  apps: AppRecommendation[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
