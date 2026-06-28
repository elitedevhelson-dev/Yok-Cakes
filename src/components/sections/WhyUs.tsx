'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart, Sparkles, Clock, Award, MessageCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { WHY_US } from '@/data/content'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Heart,
  Sparkles,
  Clock,
  Award,
  MessageCircle,
}

export default function WhyUs() {
  return (
    <section id="porque-nos" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="As Nossas Promessas"
          title="Porque escolher a"
          titleAccent="Yok Cakes?"
          subtitle="Cada detalhe é pensado para que a sua experiência seja absolutamente perfeita, do primeiro contacto à última fatia."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className="card-premium p-7 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {Icon && <Icon className={`w-6 h-6 ${item.color}`} />}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
