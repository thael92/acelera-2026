import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StrategyStep {
  number: string;
  title: string;
  description: string;
}

export interface VideoThumbnail {
  id: string;
  title?: string;
  thumbnail: string;
  isMain?: boolean;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface ServiceItem {
  icon: any; // Using any to avoid complex type passing of Lucide components in constants
  title: string;
  description: string;
}