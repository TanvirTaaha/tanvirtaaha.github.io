'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PersonalInfo } from '@/types';

interface LayoutProps {
  children: ReactNode;
  info: PersonalInfo;
  cvUrl: string;
}

export default function Layout({ children, info, cvUrl }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar cvUrl={cvUrl} info={info} />
      <main>{children}</main>
      <Footer info={info} />
    </div>
  );
}
