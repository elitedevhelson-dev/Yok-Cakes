import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yok Cakes — Bolos Artesanais',
    short_name: 'Yok Cakes',
    description: 'Bolos artesanais personalizados para todos os seus momentos especiais.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF5EC',
    theme_color: '#E91E8C',
    icons: [
      {
        src: '/logo.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/logo.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
