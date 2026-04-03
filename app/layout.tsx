import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design Process Portfolio | Cultural Experience Design',
  description: 'A process portfolio documenting the HCI design methodology applied to creating an engaging cultural tourism experience. Explores user research, personas, design decisions, and the iterative design process.',
  keywords: ['design portfolio', 'UX design', 'HCI', 'user research', 'case study', 'AI design'],
  openGraph: {
    title: 'Portfolio | Suzhou Maple Bridge',
    description: 'A comprehensive process portfolio documenting user-centered design methodology',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-serif antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
