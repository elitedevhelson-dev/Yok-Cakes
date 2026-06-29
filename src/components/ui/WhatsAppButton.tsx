'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/content'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    const tip = setTimeout(() => setShowTooltip(true), 4000)
    const hideTip = setTimeout(() => setShowTooltip(false), 9000)
    return () => { clearTimeout(timer); clearTimeout(tip); clearTimeout(hideTip) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl px-4 py-3 max-w-[200px] relative"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <X size={10} />
                </button>
                <p className="text-sm font-semibold text-gray-900 leading-tight">Fale comigo! 👋</p>
                <p className="text-xs text-gray-500 mt-0.5">Resposta rápida pelo WhatsApp</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_6px_32px_rgba(52,211,153,0.45)] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar pelo WhatsApp"
          >
            <MessageCircle size={26} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
