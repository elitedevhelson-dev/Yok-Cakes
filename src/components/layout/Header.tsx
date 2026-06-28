'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '@/data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_1px_24px_rgba(233,30,140,0.08)] border-b border-rose-100/60'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
              onClick={() => setMenuOpen(false)}
              aria-label="Yok Cakes — Página inicial"
            >
              {/* Logo image — transparent PNG, sem fundo branco */}
              <div className="relative flex-shrink-0
                h-[48px] w-[48px]
                sm:h-[56px] sm:w-[56px]
                lg:h-[66px] lg:w-[66px]
                transition-transform duration-300 group-hover:scale-105"
              >
                <Image
                  src="/logo.png"
                  alt="Logótipo Yok Cakes"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 66px"
                  title="Yok Cakes"
                />
              </div>

              {/* Brand name */}
              <div className="flex flex-col -space-y-0.5">
                <span className="font-serif font-bold text-lg sm:text-xl leading-none text-gray-900 group-hover:text-rose-600 transition-colors duration-200">
                  Yok Cakes
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-gold-500 font-semibold">
                  Bolos Artesanais
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="btn-ghost text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* ── Desktop CTA + Mobile Toggle ── */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
              >
                Encomendar
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-cream-100 hover:bg-rose-50 text-gray-700 transition-colors"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-rose-50">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logótipo Yok Cakes"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <span className="font-serif font-bold text-gray-900">Yok Cakes</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-cream-100 text-gray-600 hover:bg-rose-50 transition-colors"
                aria-label="Fechar menu"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col p-5 gap-1 flex-1" aria-label="Menu mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-colors text-base min-h-[48px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="p-5 border-t border-cream-100">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Encomendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
