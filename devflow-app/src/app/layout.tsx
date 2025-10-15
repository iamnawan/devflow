// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers'; // <-- Import komponen Providers yang baru

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevFlow - Your Developer Productivity Tool',
  description: 'A productivity tool for developers, built with Notion API & Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Gunakan komponen Providers di sini */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}