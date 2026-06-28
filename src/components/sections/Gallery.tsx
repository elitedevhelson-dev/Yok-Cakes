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
          label="O Nosso Portfolio"
          title="Criações que"
          titleAccent="encantam"
          subtitle="Cada bolo conta uma história. Deixe-se inspirar pelas nossas criações mais recentes."
          center
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-rose-600 text-white shadow-rose'
                  : 'bg-cream-100 text-gray-600 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid ${
                  img.span === 'large' ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                onClick={() => setLightbox(img.id)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5">
                  <div className="flex flex-col items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-7 h-7 text-white" />
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
          className="text-center mt-14"
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
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-3xl max-h-[85vh] w-full rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/5] max-h-[80vh]">
                  <Image
                    src={current.src.replace('w=600', 'w=1200').replace('w=800', 'w=1400')}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {/* Nav: prev */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                  onClick={() => nav(-1)}
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Nav: next */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                  onClick={() => nav(1)}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Category badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="text-xs text-white font-semibold tracking-widest uppercase bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    {current.category}
                  </span>
                </div>
              </motion.div>

              {/* Close */}
              <button
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                onClick={() => setLightbox(null)}
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
