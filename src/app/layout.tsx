import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Yok Cakes | Bolos Artesanais em Vila Nova de Gaia',
    template: '%s | Yok Cakes',
  },
  description:
    'Confeitaria artesanal em Vila Nova de Gaia. Bolos personalizados para aniversários, festas infantis, chá de bebé, comunhões e eventos familiares. Feitos com amor e ingredientes naturais.',
  keywords: [
    'bolos personalizados Vila Nova de Gaia',
    'confeitaria Vila Nova de Gaia',
    'bolo de aniversário Vila Nova de Gaia',
    'bolo para festa infantil',
    'bolo chá de bebé',
    'bolo de comunhão',
    'bolos artesanais Gaia',
    'bolo personalizado Gaia',
    'Yok Cakes',
    'confeitaria artesanal',
    'cake design aniversário',
    'bolos para eventos familiares',
    'bolo temático personalizado',
  ],
  metadataBase: new URL('https://yokcakes.pt'),
  authors: [{ name: 'Yok Cakes' }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/icon.png',
  },
  creator: 'Yok Cakes',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://yokcakes.pt',
    siteName: 'Yok Cakes',
    title: 'Yok Cakes | Bolos Artesanais em Vila Nova de Gaia',
    description:
      'Confeitaria artesanal em Vila Nova de Gaia. Bolos personalizados para aniversários, festas infantis, chá de bebé e comunhões. Feitos com amor.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yok Cakes — Bolos Artesanais Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yok Cakes | Bolos Artesanais em Vila Nova de Gaia',
    description: 'Confeitaria artesanal em Vila Nova de Gaia. Bolos personalizados para aniversários, festas infantis, chá de bebé e comunhões.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#E91E8C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Yok Cakes',
  description: 'Confeitaria artesanal em Vila Nova de Gaia especializada em bolos personalizados para aniversários, festas infantis, chá de bebé, comunhões e eventos familiares.',
  url: 'https://yokcakes.pt',
  telephone: '+351912775295',
  email: 'yoknaldineo@gmail.com',
  image: 'https://yokcakes.pt/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vila Nova de Gaia',
    addressRegion: 'Porto',
    addressCountry: 'PT',
  },
  sameAs: [
    'https://instagram.com/yokcakesoficial',
  ],
  servesCuisine: 'Confeitaria Artesanal',
  priceRange: '€€',
  openingHours: ['Mo-Sa 09:00-19:00'],
  hasMap: 'https://maps.google.com/?q=Lisboa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
