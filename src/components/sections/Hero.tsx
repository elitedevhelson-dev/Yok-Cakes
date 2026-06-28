'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/content'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
}

const itemUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const DOTS = [
  { top: '12%', left: '4%', size: 10, dur: 5, del: 0 },
  { top: '72%', left: '6%', size: 14, dur: 7, del: 1.2 },
  { top: '28%', right: '4%', size: 8, dur: 4.5, del: 0.6 },
  { top: '82%', right: '10%', size: 11, dur: 6, del: 1.8 },
  { top: '50%', left: '48%', size: 6, dur: 5.5, del: 0.9 },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-rose-100/60 to-rose-200/25 blur-3xl" />
        <div className="absolute -bottom-56 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cream-200/60 to-gold-300/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gold-300/15 to-transparent blur-2xl" />

        {DOTS.map((d, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-rose-300/50"
            style={{
              top: d.top,
              left: ('left' in d) ? d.left : undefined,
              right: ('right' in d) ? d.right : undefined,
              width: d.size,
              height: d.size,
            }}
            animate={{ y: [0, -16, 0], opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: d.dur, delay: d.del, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-24 pt-36 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemUp}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/85 border border-rose-100 shadow-sm mb-8">
                <span className="text-rose-500 text-sm animate-pulse-soft">♥</span>
                <span className="text-sm font-semibold text-rose-600 tracking-wide">
                  Amor em forma de bolo
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemUp}
              className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.08] mb-6 text-balance"
            >
              Cada Bolo é{' '}
              <em className="gradient-text not-italic">Uma Obra</em>
              <br />
              de Arte
            </motion.h1>

            <motion.p
              variants={itemUp}
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-[480px]"
            >
              Criamos experiências únicas para os seus momentos mais especiais.
              Bolos artesanais com ingredientes selecionados e acabamento
              profissional.
            </motion.p>

            <motion.div variants={itemUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Pedir Orçamento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#galeria" className="btn-secondary">
                Ver Galeria
              </a>
            </motion.div>

            <motion.div
              variants={itemUp}
              className="flex flex-wrap gap-8 pt-8 border-t border-rose-100/70"
            >
              {[
                { value: '500+', label: 'Bolos Criados' },
                { value: '100%', label: 'Natural' },
                { value: '5★', label: 'Avaliação' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold font-serif text-rose-600 leading-none">{s.value}</p>
                  <p className="text-sm text-gray-400 font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[44%_56%_62%_38%/42%_38%_62%_58%] bg-gradient-to-br from-rose-200 to-cream-200 blur-2xl opacity-55 scale-110" />

              {/* Main blob image */}
              <div className="relative rounded-[44%_56%_62%_38%/42%_38%_62%_58%] overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85"
                  alt="Bolo artesanal premium Yok Cakes"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 80vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent" />
              </div>

              {/* Floating: Rating */}
              <motion.div
                className="absolute -top-4 -left-4 md:-left-8 glass-card rounded-2xl px-4 py-3"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                  <span className="text-sm font-bold text-gray-900 ml-1">5.0</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">500+ avaliações</p>
              </motion.div>

              {/* Floating: Handmade */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:-right-8 glass-card rounded-2xl px-4 py-3"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">Artesanal</p>
                    <p className="text-xs text-gray-400 mt-0.5">Feito com amor</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating: Premium */}
              <motion.div
                className="absolute top-1/2 -right-6 md:-right-12 glass-card rounded-2xl px-3 py-2 hidden md:block"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span className="text-sm font-semibold text-gray-800">Premium</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
