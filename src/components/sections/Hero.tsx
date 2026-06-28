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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Background blobs — decorative only, hidden on small mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[400px] sm:w-[600px] lg:w-[700px] h-[400px] sm:h-[600px] lg:h-[700px] rounded-full bg-gradient-to-br from-rose-100/60 to-rose-200/25 blur-3xl" />
        <div className="absolute -bottom-56 -left-40 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-tr from-cream-200/60 to-gold-300/20 blur-3xl" />

        {/* Floating dots — only visible on md+ to avoid mobile clutter */}
        <div className="hidden md:block">
          {[
            { top: '12%', left: '4%', size: 10, dur: 5, del: 0 },
            { top: '72%', left: '6%', size: 14, dur: 7, del: 1.2 },
            { top: '28%', right: '4%', size: 8, dur: 4.5, del: 0.6 },
            { top: '82%', right: '10%', size: 11, dur: 6, del: 1.8 },
          ].map((d, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-rose-300/50"
              style={{
                top: d.top,
                left: 'left' in d ? d.left : undefined,
                right: 'right' in d ? (d as { right: string }).right : undefined,
                width: d.size,
                height: d.size,
              }}
              animate={{ y: [0, -16, 0], opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: d.dur, delay: d.del, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 py-8 pt-24 sm:pt-28 lg:pt-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Right: Image (order-1 on mobile = shows first) ── */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative mx-auto"
              style={{ maxWidth: 'min(420px, 85vw)' }}
            >
              {/* Main blob image — glow ring contained inside overflow-hidden */}
              <div className="relative rounded-[44%_56%_62%_38%/42%_38%_62%_58%] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              >
                {/* Glow ring inside the clipped container */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-cream-200 blur-2xl opacity-55 scale-110" />
                <Image
                  src="/bolos/bolo-nude-floral.png"
                  alt="Bolo artesanal premium Yok Cakes — naked cake com rosas e laço de cetim"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent" />
              </div>

              {/* Floating: Rating — visible sm+ */}
              <motion.div
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 glass-card rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                  <span className="text-xs sm:text-sm font-bold text-gray-900 ml-1">5.0</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">500+ avaliações</p>
              </motion.div>

              {/* Floating: Handmade */}
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-6 glass-card rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-400 text-rose-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 leading-none">Artesanal</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Feito com amor</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating: Premium — desktop only */}
              <motion.div
                className="absolute top-1/2 -right-10 lg:-right-14 glass-card rounded-2xl px-3 py-2 hidden lg:block"
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

          {/* ── Left: Content (order-2 on mobile) ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/85 border border-rose-100 shadow-sm mb-6 sm:mb-8">
                <span className="text-rose-500 text-xs sm:text-sm animate-pulse-soft">♥</span>
                <span className="text-xs sm:text-sm font-semibold text-rose-600 tracking-wide">
                  Amor em forma de bolo
                </span>
              </div>
            </motion.div>

            {/* H1 with clamp() */}
            <motion.h1
              variants={itemUp}
              className="font-serif font-bold text-gray-900 leading-[1.08] mb-5 sm:mb-6 text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw + 0.75rem, 4.5rem)' }}
            >
              Cada Bolo é{' '}
              <em className="gradient-text not-italic">Uma Obra</em>
              <br />
              de Arte
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemUp}
              className="text-gray-500 leading-relaxed mb-8 sm:mb-10 max-w-[480px]"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw + 0.4rem, 1.2rem)' }}
            >
              Crio experiências únicas para os seus momentos mais especiais.
              Bolos artesanais com ingredientes selecionados e acabamento profissional.
            </motion.p>

            {/* CTAs — stacked on mobile, row on sm+ */}
            <motion.div
              variants={itemUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full sm:w-auto justify-center"
              >
                Pedir Orçamento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>
              <a href="#galeria" className="btn-secondary w-full sm:w-auto justify-center">
                Ver Galeria
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemUp}
              className="flex gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-rose-100/70"
            >
              {[
                { value: '500+', label: 'Bolos Criados' },
                { value: '100%', label: 'Natural' },
                { value: '5★', label: 'Avaliação' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl sm:text-2xl font-bold font-serif text-rose-600 leading-none">{s.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden sm:flex"
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
