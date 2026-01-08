// Shared TypeScript interfaces for the application

export interface ReviewItem {
  id: number;
  name: string;
  designation: string;
  message: string;
}

export interface AnnouncementItem {
  id: number;
  title: string;
  date: string;
  category: string;
  type: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface AnnouncementItem {
  id: number;
  title: string;
  date: string;
  category: string;
  type: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface ReviewData {
  students: ReviewItem[];
  faculty: ReviewItem[];
  vips: ReviewItem[];
}

export type ReviewCategory = keyof ReviewData;

export interface TopBarSubmenuItem {
  name: string;
  url: string;
}

export interface TopBarMenuItem {
  name: string;
  submenu: TopBarSubmenuItem[];
}

export interface MainMenuItem {
  name: string;
  link?: string;
  column?: boolean;
  submenu?: string[] | {
    col1: string[];
    col2: string[];
  };
}

export interface BadgeItem {
  logo: string;
  title: string;
  description?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TopBarSubmenuItem {
  name: string;
  url: string;
}

export interface TopBarMenuItem {
  name: string;
  submenu: TopBarSubmenuItem[];
}

export interface MainMenuItem {
  name: string;
  link?: string;
  column?: boolean;
  submenu?: string[] | {
    col1: string[];
    col2: string[];
  };
}

export interface BadgeItem {
  logo: string;
  title: string;
  description?: string;
}