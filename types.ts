import React from 'react';

export interface UserData {
  username: string;
  status: 'active' | 'inactive';
  usedTraffic: string;
  totalTraffic: string;
  usedPercentage: number;
  expiryDate: string;
  daysRemaining: string | number;
}

export interface ConfigItem {
  id: string;
  name: string;
  url: string;
  flag?: string; // Emoji flag
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
  // Fix: React namespace requires import from 'react'
  icon: React.ReactNode;
  apps: AppRecommendation[];
}