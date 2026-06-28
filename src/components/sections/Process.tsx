'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { PROCESS_STEPS, WHATSAPP_URL } from '@/data/content'

export default function Process() {
  return (
    <section id="processo" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          label="Como Funciona"
          title="Do sonho ao"
          titleAccent="bolo perfeito"
          subtitle="Um processo simples e transparente para que a sua encomenda seja uma experiência agradável do início ao fim."
          center
        />

        {/* Mobile: vertical timeline / Desktop: horizontal steps */}
        <div className="max-w-4xl mx-auto">

          {/* ── Desktop layout: 5 columns ── */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

            <div className="grid grid-cols-5 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-5 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-rose-200 shadow-card flex items-center justify-center relative z-10">
                      <span className="text-xl leading-none">{step.icon}</span>
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-sm mb-1.5 leading-snug">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile layout: vertical timeline ── */}
          <div className="md:hidden relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-rose-200 via-rose-100 to-transparent" />

            <div className="flex flex-col gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Circle on the line */}
                  <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-white border-2 border-rose-200 shadow-card flex items-center justify-center z-10">
                    <span className="text-lg leading-none">{step.icon}</span>
                  </div>
                  <span className="absolute -left-[44px] -top-2 w-5 h-5 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center z-20">
                    {step.step}
                  </span>

                  {/* Text */}
                  <div className="pl-4 pt-1">
                    <h3 className="font-serif font-bold text-gray-900 text-base mb-1.5">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 sm:px-9"
          >
            Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
