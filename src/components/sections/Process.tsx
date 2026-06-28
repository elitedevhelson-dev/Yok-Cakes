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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
              >
                {/* Step circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 md:mb-5 rounded-full bg-white border-2 border-rose-200 shadow-card flex flex-col items-center justify-center relative z-10">
                    <span className="text-xl leading-none">{step.icon}</span>
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-base md:text-sm mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (mobile only, between steps) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="md:hidden absolute left-7 h-6 w-px bg-rose-200 top-full translate-y-1" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-9 py-4"
          >
            Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
