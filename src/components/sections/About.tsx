'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/content'

const values = [
  'Ingredientes naturais sem conservantes',
  'Cada bolo é feito à encomenda',
  'Personalização total do design',
  'Entrega segura e pontual',
]

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Image side ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-4xl overflow-hidden aspect-[4/5] shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=85"
                  alt="Confeiteira Yok Cakes a decorar um bolo artesanal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating card: years */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-card rounded-3xl p-5 max-w-[180px] shadow-card-hover"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-serif text-4xl font-bold text-rose-600 leading-none">5+</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Anos de paixão pela confeitaria</p>
              </motion.div>

              {/* Decorative blob */}
              <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-rose-50 -z-10" />
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-cream-100 -z-10" />
            </div>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-7"
          >
            <div>
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse-soft" />
                A Nossa História
              </span>
              <h2 className="section-title">
                Nascemos de uma{' '}
                <em className="gradient-text not-italic font-serif">paixão</em>
                <br />
                por bolos perfeitos
              </h2>
            </div>

            <div className="space-y-5 text-gray-500 leading-relaxed">
              <p>
                A Yok Cakes nasceu de um sonho simples: criar bolos que sejam tão bonitos
                por fora quanto deliciosos por dentro. Cada criação é uma expressão de amor,
                atenção ao detalhe e compromisso com a qualidade.
              </p>
              <p>
                Acreditamos que um bolo não é apenas sobremesa — é a peça central de um
                momento que ficará para sempre na memória. Por isso, tratamos cada encomenda
                como se fosse única, porque é mesmo.
              </p>
              <p>
                Com ingredientes cuidadosamente selecionados e uma produção 100% artesanal,
                garantimos que cada bolo supere as suas expectativas — na aparência, no sabor
                e na experiência.
              </p>
            </div>

            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">{v}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Falar Connosco
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
