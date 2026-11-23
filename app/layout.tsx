import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maple Bridge (枫桥) — HCI Design Process Portfolio & Case Study',
  description:
    'An editorial HCI case study documenting the user research, design iterations, and evaluation of Maple Bridge: an audio-first cultural heritage companion in Suzhou.',
  keywords: [
    'HCI case study',
    'Maple Bridge',
    'Suzhou',
    'Cultural Heritage',
    'Audio-first UX',
    'User Research',
    'Interaction Design',
  ],
  openGraph: {
    title: 'Maple Bridge — HCI Design Process Portfolio',
    description:
      'Designing a quieter, audio-first way to experience cultural heritage in Suzhou Maple Bridge.',
    type: 'website',
  },
  icons: {
    icon: '/sitelogo.png',
    apple: '/sitelogo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#F4EEE3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Noto+Serif+SC:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-secondary/20 selection:text-secondary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
