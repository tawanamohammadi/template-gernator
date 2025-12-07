import React from 'react';

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
}

export interface ConfigItem {
  id: string;
  name: string;
  url: string;
  countryCode?: string; // ISO 2-letter code (e.g., 'us', 'de')
}

export interface AppRecommendation {
  name: string;
  icon?: string;
  description?: string;
  downloadLink: string;
  addLink?: string;
  minOsVersion?: string;
}

export interface OsData {
  id: 'ios' | 'android' | 'windows';
  label: string;
  icon: React.ReactNode;
  apps: AppRecommendation[];
}

export interface FAQItem {
  question: string;
  answer: string;
}