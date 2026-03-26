import type { Metadata } from 'next'
import { Orbitron, Share_Tech_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  display: 'swap',
});

const shareTechMono = Share_Tech_Mono({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-share-tech-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Andres Felipe Navas Alvear | Portfolio',
  description: 'Desarrollador Front-end y músico independiente. Enfocado en crear interfaces con ritmo, armonía y una estética gaming única.',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${shareTechMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
