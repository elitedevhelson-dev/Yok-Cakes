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

const ICON_GRADIENTS: Record<string, string> = {
  Leaf: 'from-emerald-50 to-emerald-100',
  Heart: 'from-rose-50 to-rose-100',
  Sparkles: 'from-amber-50 to-amber-100',
  Clock: 'from-blue-50 to-blue-100',
  Award: 'from-purple-50 to-purple-100',
  MessageCircle: 'from-teal-50 to-teal-100',
}

export default function WhyUs() {
  return (
    <section
      id="porque-nos"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #fff8f3 45%, #fff2f5 100%)' }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(248,180,200,0.16) 0%, transparent 68%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(237,217,184,0.22) 0%, transparent 68%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,84,122,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(248,180,200,0.10) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Title area with subtle glow */}
        <div className="relative">
          <div
            className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-28 pointer-events-none mx-auto"
            style={{
              maxWidth: '34rem',
              background: 'radial-gradient(ellipse, rgba(212,84,122,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <SectionTitle
            label="As Nossas Promessas"
            title="Porque escolher a"
            titleAccent="Yok Cakes?"
            subtitle="Cada detalhe é pensado para que a sua experiência seja absolutamente perfeita, do primeiro contacto à última fatia."
            center
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            const iconGrad = ICON_GRADIENTS[item.icon] || 'from-rose-50 to-rose-100'
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className="group cursor-default"
              >
                {/* Gradient border wrapper */}
                <div className="p-px rounded-3xl bg-gradient-to-br from-rose-100/50 via-white to-cream-100/40 group-hover:from-rose-200/80 group-hover:via-rose-50/20 group-hover:to-cream-200/70 shadow-card group-hover:shadow-[0_16px_48px_rgba(212,84,122,0.14)] group-hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Card body */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-7 h-full relative overflow-hidden">
                    {/* Hover shimmer overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,240,243,0.55) 0%, rgba(255,248,240,0.30) 60%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconGrad} border border-white/70 flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}
                      >
                        {Icon && <Icon className={`w-6 h-6 ${item.color}`} />}
                      </div>

                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
