// components/ClientLayout.tsx
'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="container1 !mx-auto">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}