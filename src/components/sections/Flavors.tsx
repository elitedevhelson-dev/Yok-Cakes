'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { FLAVORS, WHATSAPP_URL } from '@/data/content'
import { ArrowRight } from 'lucide-react'

export default function Flavors() {
  return (
    <section id="sabores" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Os Nossos Sabores"
          title="Escolha o seu"
          titleAccent="favorito"
          subtitle="Seis sabores irresistíveis, todos disponíveis em qualquer tamanho e com personalização completa."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {FLAVORS.map((flavor, i) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="relative group"
            >
              {flavor.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full bg-rose-600 text-white text-xs font-bold shadow-rose tracking-wide">
                  ✦ Mais Popular
                </div>
              )}
              <div
                className={`relative rounded-3xl p-6 border transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-card-hover overflow-hidden`}
                style={{ backgroundColor: flavor.bg, borderColor: flavor.accent + '25' }}
              >
                {/* Decorative gradient top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${flavor.colorFrom}, ${flavor.colorTo})` }}
                />

                {/* Emoji */}
                <div className="text-4xl mb-4">{flavor.emoji}</div>

                {/* Name */}
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">{flavor.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{flavor.description}</p>

                {/* Layers */}
                <div className="space-y-2 mb-6">
                  {flavor.layers.map((layer, li) => (
                    <div key={li} className="flex items-center gap-2.5">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: flavor.accent }}
                      />
                      <span className="text-sm font-medium text-gray-600">{layer}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`${WHATSAPP_URL}&text=Olá! Gostaria de encomendar um bolo ${flavor.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/link"
                  style={{ color: flavor.accent }}
                >
                  Encomendar este sabor
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
