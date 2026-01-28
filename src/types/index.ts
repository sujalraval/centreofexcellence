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

interface SubmenuObjectItem {
  label: string;
  link: string;
}

interface SubmenuColumnLayout {
  col1: string[] | SubmenuObjectItem[];
  col2: string[] | SubmenuObjectItem[];
}

export interface MainMenuItem {
  name: string;
  link?: string;
  column?: boolean;
  submenu?: string[] | SubmenuObjectItem[] | SubmenuColumnLayout;
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

export interface FacultyMember {
  id: number;
  salutation: string;
  name: string;
  designation: string;
  department: string;
  education?: string;
  experience?: string;
  email: string;
  phone?: string;
  image: string;
  specialties?: string[];
  profileUrl?: string;
}
