
import { ReactNode } from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  category: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
