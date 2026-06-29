'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { GALLERY_IMAGES, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/data/content'

const PER_PAGE = 12
const INTERVAL = 5000
const TOTAL = GALLERY_IMAGES.length
const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE)

function getPageSlice(pageIdx: number) {
  const items = []
  for (let i = 0; i < PER_PAGE; i++) {
    items.push(GALLERY_IMAGES[(pageIdx * PER_PAGE + i) % TOTAL])
  }
  return items
}

export default function Gallery() {
  const [page, setPage] = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const advance = useCallback((dir: 1 | -1) => {
    setPage(p => (p + dir + TOTAL_PAGES) % TOTAL_PAGES)
  }, [])

  // Auto-rotation — pauses on hover or when lightbox is open
  useEffect(() => {
    if (paused || lightboxIdx !== null) return
    const t = setInterval(() => advance(1), INTERVAL)
    return () => clearInterval(t)
  }, [paused, lightboxIdx, advance])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setLightboxIdx(i => i !== null ? (i - 1 + TOTAL) % TOTAL : null)
      if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? (i + 1) % TOTAL : null)
      if (e.key === 'Escape')     setLightboxIdx(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIdx])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIdx])

  const visibleImages = getPageSlice(page)
  const nextPageImages = getPageSlice((page + 1) % TOTAL_PAGES)
  const current = lightboxIdx !== null ? GALLERY_IMAGES[lightboxIdx] : null

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Portfólio"
          title="Galeria de"
          titleAccent="Criações"
          subtitle="Cada bolo conta uma história. Descobre as minhas criações mais especiais."
          center
        />

        {/* Gallery grid with auto-rotation */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3"
            >
              {visibleImages.map((img, i) => {
                const globalIdx = (page * PER_PAGE + i) % TOTAL
                return (
                  <motion.div
                    key={`${page}-${i}`}
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="relative aspect-square overflow-hidden rounded-md sm:rounded-lg lg:rounded-xl cursor-pointer group shadow-sm hover:shadow-lg transition-shadow duration-300"
                    onClick={() => setLightboxIdx(globalIdx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver criação ${globalIdx + 1} de ${TOTAL}`}
                    onKeyDown={(e) => e.key === 'Enter' && setLightboxIdx(globalIdx)}
                  >
                    <Image
                      src={img.src}
                      alt={`Bolo artesanal Yok Cakes — criação ${img.id}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Hidden preload for next page */}
          <div
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', zIndex: -1 }}
            aria-hidden="true"
          >
            {nextPageImages.map(img => (
              <div key={img.id} style={{ width: 1, height: 1, overflow: 'hidden' }}>
                <Image src={img.src} alt="" fill sizes="1px" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination controls */}
        <div className="flex flex-col items-center gap-3 mt-6 sm:mt-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => advance(-1)}
              className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 flex items-center justify-center transition-colors"
              aria-label="Página anterior da galeria"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1.5" role="tablist" aria-label="Páginas da galeria">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Página ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === page
                      ? 'w-6 h-2.5 bg-rose-500'
                      : 'w-2.5 h-2.5 bg-rose-200 hover:bg-rose-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => advance(1)}
              className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 flex items-center justify-center transition-colors"
              aria-label="Próxima página da galeria"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="text-xs text-gray-400">
            {TOTAL} criações · roda automaticamente a cada 5 segundos
          </p>
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4 text-sm">Quer ver mais criações?</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Ver mais no Instagram
            <span className="text-sm opacity-80">{INSTAGRAM_HANDLE}</span>
          </a>
        </motion.div>
      </div>

      {/* ── Lightbox ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {current !== null && lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Galeria de imagens em ecrã completo"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 55) {
                  const dir = info.offset.x < 0 ? 1 : -1
                  setLightboxIdx(i => i !== null ? (i + dir + TOTAL) % TOTAL : null)
                }
              }}
            >
              {/* Image */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={lightboxIdx}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-2xl overflow-hidden bg-black/60"
                  style={{ aspectRatio: '4/3', maxHeight: '72vh' }}
                >
                  <Image
                    src={current.src}
                    alt={`Bolo artesanal Yok Cakes — criação ${lightboxIdx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96vw, 72vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Counter */}
              <p className="text-center text-white/45 text-xs mt-2.5 select-none">
                {lightboxIdx + 1} / {TOTAL}
              </p>

              {/* Prev button */}
              <button
                className="absolute left-2 sm:-left-14 top-[45%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors min-h-[48px] min-w-[48px]"
                onClick={() => setLightboxIdx(i => i !== null ? (i - 1 + TOTAL) % TOTAL : null)}
                aria-label="Imagem anterior (seta esquerda)"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next button */}
              <button
                className="absolute right-2 sm:-right-14 top-[45%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors min-h-[48px] min-w-[48px]"
                onClick={() => setLightboxIdx(i => i !== null ? (i + 1) % TOTAL : null)}
                aria-label="Próxima imagem (seta direita)"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors min-h-[48px] min-w-[48px]"
              onClick={() => setLightboxIdx(null)}
              aria-label="Fechar galeria (ESC)"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
