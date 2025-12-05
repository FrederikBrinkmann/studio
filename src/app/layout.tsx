import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'RAUM5 Digital',
  description:
    'RAUM5 ist Ihr Partner für Data Science, Softwareentwicklung und KI-Consulting – von der Idee bis zur skalierbaren Lösung.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-foreground antialiased">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
