'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { EXTRAS, WHATSAPP_URL } from '@/data/content'

export default function Extras() {
  return (
    <section id="extras" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Personalização"
          title="Detalhes que fazem a"
          titleAccent="diferença"
          subtitle="Eleve o seu bolo ao próximo nível com os nossos extras exclusivos. Cada detalhe pensado para impressionar."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {EXTRAS.map((extra, i) => (
            <motion.div
              key={extra.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="card-premium p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{extra.icon}</span>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                  {extra.price}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">{extra.name}</h3>
                <p className="text-sm text-gray-500">{extra.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm mb-5">Não encontra o que procura? Temos ainda mais opções!</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Perguntar sobre extras
          </a>
        </div>
      </div>
    </section>
  )
}
