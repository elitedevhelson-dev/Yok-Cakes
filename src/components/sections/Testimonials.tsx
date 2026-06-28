'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { TESTIMONIALS } from '@/data/content'

export default function Testimonials() {
  return (
    <section id="testemunhos" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Testemunhos"
          title="O que dizem os nossos"
          titleAccent="clientes"
          subtitle="A melhor prova do nosso trabalho é a felicidade de quem já confiou em nós."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="card-premium p-7 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 text-rose-200 flex-shrink-0" />

              {/* Rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-sm flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-cream-100">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                  {t.occasion}
                </span>
              </div>
            </motion.div>
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
          <p className="text-gray-400 text-sm">Média de 500+ avaliações verificadas</p>
        </motion.div>
      </div>
    </section>
  )
}
