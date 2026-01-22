import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category?: string;
}

export interface NavLink {
  label: string;
  href: string;
}