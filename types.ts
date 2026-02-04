import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  category: 'construction' | 'materials';
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Homeowner" or "CEO"
  content: string;
  avatar?: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: ReactNode;
}