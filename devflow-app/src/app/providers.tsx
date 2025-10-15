// src/app/providers.tsx
'use client'; // <-- INI SANGAT PENTING! Deklarasikan sebagai Client Component

import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}