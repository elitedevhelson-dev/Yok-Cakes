'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, MessageCircle, ZoomIn, ChevronLeft, ChevronRight, Ruler, Users } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { BOLOS_CASEIROS, WHATSAPP_NUMBER } from '@/data/content'

function buildWhatsAppUrl(name: string, forma: string, price: number) {
  const msg = encodeURIComponent(
    `Olá! Vi o seu website e gostaria de encomendar o "${name}" (forma ${forma}, ${price}€). Pode ajudar-me?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export default function BolosCaseiros() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const nav = (dir: 1 | -1) => {
    if (lightbox === null) return
    setLightbox((lightbox + dir + BOLOS_CASEIROS.length) % BOLOS_CASEIROS.length)
  }

  const current = lightbox !== null ? BOLOS_CASEIROS[lightbox] : null

  return (
    <section id="bolos-caseiros" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Bolos Tradicionais"
          title="Bolos Caseiros"
          titleAccent="Tradicionais"
          subtitle="Receitas artesanais com ingredientes selecionados. Prontos para encomendar, entregues frescos e com amor."
          center
        />

        {/* Grid — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BOLOS_CASEIROS.map((bolo, i) => (
            <motion.article
              key={bolo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: Math.min(i * 0.05, 0.35) }}
              className="card-premium flex flex-col overflow-hidden group"
            >
              {/* Image — fixed square ratio, same size for all */}
              <div
                className="relative aspect-square overflow-hidden cursor-zoom-in flex-shrink-0"
                onClick={() => setLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`Ver foto de ${bolo.name}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
              >
                <Image
                  src={bolo.src}
                  alt={`${bolo.name} — bolo artesanal Yok Cakes`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Hover zoom hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-white/90 rounded-full p-2.5 shadow-lg">
                    <ZoomIn className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Card body — flex-col so equal height in grid row */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
                {/* Name */}
                <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight">
                  {bolo.name}
                </h3>

                {/* Description — flex-1 to push footer down */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {bolo.description}
                </p>

                {/* Details pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-cream-50 border border-cream-200 px-2.5 py-1 rounded-full">
                    <Ruler className="w-3 h-3 text-rose-400 flex-shrink-0" />
                    {bolo.forma}
                  </span>
                  {bolo.serves && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-cream-50 border border-cream-200 px-2.5 py-1 rounded-full">
                      <Users className="w-3 h-3 text-rose-400 flex-shrink-0" />
                      {bolo.serves}
                    </span>
                  )}
                </div>

                {/* Footer — price + button */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-cream-100">
                  <div>
                    <p className="text-xs text-gray-400 font-medium leading-none mb-0.5">Preço</p>
                    <p className="font-serif text-2xl font-bold text-rose-600 leading-none">
                      {bolo.price}&thinsp;€
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(bolo.name, bolo.forma, bolo.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-colors min-h-[44px] flex-shrink-0"
                    aria-label={`Encomendar ${bolo.name} pelo WhatsApp`}
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    Encomendar
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Visualizar ${current.name}`}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: '1/1', maxHeight: '75vh' }}
              >
                <Image
                  src={current.src}
                  alt={current.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 95vw, 70vw"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
                <p className="text-white font-semibold text-sm drop-shadow text-center whitespace-nowrap">
                  {current.name}
                </p>
                <span className="text-rose-300 font-bold text-lg drop-shadow">
                  {current.price}&thinsp;€
                </span>
              </div>

              {/* Prev */}
              <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors min-h-[48px] min-w-[48px]"
                onClick={() => nav(-1)}
                aria-label="Bolo anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next */}
              <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors min-h-[48px] min-w-[48px]"
                onClick={() => nav(1)}
                aria-label="Próximo bolo"
              >
                <ChevronRight size={20} />
              </button>
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
        )}
      </AnimatePresence>
    </section>
  )
}
