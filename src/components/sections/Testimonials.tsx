'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { TESTIMONIALS } from '@/data/content'

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const navigate = useCallback((dir: 1 | -1) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => navigate(1), 5500)
    return () => clearInterval(timer)
  }, [navigate, paused])

  const t = TESTIMONIALS[current]

  return (
    <section id="testemunhos" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Testemunhos"
          title="O que dizem os meus"
          titleAccent="clientes"
          subtitle="A melhor prova do meu trabalho é a felicidade de quem já confiou em mim."
          center
        />

        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev */}
          <button
            onClick={() => navigate(-1)}
            className="absolute -left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-card hover:shadow-card-hover text-gray-600 hover:text-rose-600 flex items-center justify-center transition-all duration-200 min-h-[48px] min-w-[48px]"
            aria-label="Testemunho anterior"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Sliding card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 60) navigate(info.offset.x < 0 ? 1 : -1)
                }}
                className="card-premium px-8 sm:px-12 py-10 sm:py-12 flex flex-col items-center text-center gap-5 cursor-grab active:cursor-grabbing select-none"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Decorative quote */}
                <div className="font-serif text-7xl text-rose-100 leading-none -mb-4 select-none" aria-hidden="true">
                  &ldquo;
                </div>

                {/* Text */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium italic max-w-lg">
                  {t.text}
                </p>

                {/* Verified badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-emerald-700">Avaliação Verificada</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={() => navigate(1)}
            className="absolute -right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-card hover:shadow-card-hover text-gray-600 hover:text-rose-600 flex items-center justify-center transition-all duration-200 min-h-[48px] min-w-[48px]"
            aria-label="Próximo testemunho"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8" role="tablist" aria-label="Testemunhos">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testemunho ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-7 h-2.5 bg-rose-500'
                  : 'w-2.5 h-2.5 bg-rose-200 hover:bg-rose-300'
              }`}
            />
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <p className="font-serif text-5xl font-bold text-gray-900">5.0</p>
          <p className="text-gray-500 text-sm">Avaliações reais de clientes satisfeitos</p>
        </motion.div>
      </div>
    </section>
  )
}
