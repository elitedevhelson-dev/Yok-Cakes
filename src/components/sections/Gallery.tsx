'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { GALLERY_IMAGES } from '@/data/content'

const CATEGORIES = ['Todos', 'Aniversário', 'Casamento', 'Festas', 'Especial', 'Decoração']

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered =
    active === 'Todos'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active)

  const nav = (dir: 1 | -1) => {
    if (lightbox === null) return
    const idx = filtered.findIndex((i) => i.id === lightbox)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next].id)
  }

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="O Meu Portfólio"
          title="Criações que"
          titleAccent="encantam"
          subtitle="Cada bolo conta uma história. Deixe-se inspirar pelas minhas criações mais recentes."
          center
        />

        {/* Filter Tabs — horizontally scrollable on mobile */}
        <div className="scroll-x-mobile mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                active === cat
                  ? 'bg-rose-600 text-white shadow-rose'
                  : 'bg-cream-100 text-gray-600 hover:bg-rose-50 hover:text-rose-600'
              }`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid — 1 col mobile / 2 col sm / 3 col lg */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group break-inside-avoid ${
                  img.span === 'large' ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                onClick={() => setLightbox(img.id)}
                role="button"
                tabIndex={0}
                aria-label={`Ver ${img.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(img.id)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Hover/tap overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 sm:p-5">
                  <div className="flex flex-col items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    <span className="text-xs text-white font-semibold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4 text-sm">Quer ver o seu bolo aqui?</p>
          <a
            href="https://instagram.com/yokcakes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver mais no Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const current = filtered.find((i) => i.id === lightbox)!
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
              onClick={() => setLightbox(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Visualizador de imagem"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl max-h-[88vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ aspectRatio: '4/5', maxHeight: '80vh' }}
                >
                  <Image
                    src={current.src.replace('w=600', 'w=1200').replace('w=800', 'w=1400')}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 95vw, 70vw"
                  />
                </div>

                {/* Nav prev */}
                <button
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm min-h-[48px] min-w-[48px]"
                  onClick={() => nav(-1)}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Nav next */}
                <button
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm min-h-[48px] min-w-[48px]"
                  onClick={() => nav(1)}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Category badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2">
                  <span className="text-xs text-white font-semibold tracking-widest uppercase bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    {current.category}
                  </span>
                </div>
              </motion.div>

              {/* Close */}
              <button
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors min-h-[48px] min-w-[48px]"
                onClick={() => setLightbox(null)}
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </section>
  )
}
