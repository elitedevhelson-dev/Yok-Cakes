'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { PRICING, WHATSAPP_URL } from '@/data/content'

const INCLUDED = [
  'Recheio à sua escolha',
  'Cobertura personalizada',
  'Design exclusivo',
  'Caixinha de oferta',
]

export default function Pricing() {
  return (
    <section id="precos" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Tabela de Preços"
          title="Preços"
          titleAccent="transparentes"
          subtitle="Sem surpresas. Valores fixos por peso, com personalização total incluída em todos os tamanhos."
          center
        />

        <div className="max-w-4xl mx-auto">
          {/* Main price cards — 2 cols on mobile, 4 on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {PRICING.slice(0, 4).map((p, i) => (
              <motion.div
                key={p.weight}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  p.popular
                    ? 'bg-rose-600 border-rose-500 text-white shadow-rose'
                    : 'bg-white border-cream-200 text-gray-900 shadow-card'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-gold-500 text-white text-[10px] sm:text-xs font-bold shadow-gold whitespace-nowrap">
                    <Star size={9} className="fill-white" />
                    Popular
                  </div>
                )}
                <p className={`text-xs sm:text-sm font-semibold mb-1 ${p.popular ? 'text-rose-100' : 'text-gray-400'}`}>
                  {p.weight}
                </p>
                <p className={`font-serif text-3xl sm:text-4xl font-bold leading-none mb-1 ${p.popular ? 'text-white' : 'text-gray-900'}`}>
                  {p.price}€
                </p>
                <p className={`text-[10px] sm:text-xs mt-2 ${p.popular ? 'text-rose-100' : 'text-gray-400'}`}>
                  {p.serves}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Remaining sizes — 2 cols mobile, 3 cols sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cream-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cream-200 mb-6 sm:mb-8"
          >
            <p className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
              Tamanhos adicionais
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {PRICING.slice(4).map((p) => (
                <div key={p.weight} className="text-center py-1">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">{p.price}€</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-0.5">{p.weight}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{p.serves}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-rose-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-rose-100 mb-8 sm:mb-10"
          >
            <p className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-wider mb-4 sm:mb-5">
              ✦ Incluído em todos os bolos
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-rose-600" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-5">
              Preço de extras a partir de 5€ · Entrega mediante consulta
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm sm:text-base px-7 sm:px-9 w-full sm:w-auto justify-center"
            >
              Pedir Orçamento Personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
