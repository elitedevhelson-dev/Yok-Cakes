'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { WHATSAPP_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, LOCATION } from '@/data/content'

const OCCASIONS = [
  'Aniversário', 'Festa Infantil', 'Chá de Bebé', 'Comunhão',
  'Batizado', 'Festa Temática', 'Surpresa Especial', 'Outro',
]

const SIZES = ['1 kg', '1,5 kg', '2 kg', '2,5 kg', '3 kg', '4 kg', '5 kg']

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', occasion: '', message: '', size: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! 👋\n\nNome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\nOcasião: ${form.occasion}\nTamanho: ${form.size}\n\n${form.message}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    setSent(true)
  }

  const CONTACTS = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+351 912 775 295', href: WHATSAPP_URL, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Instagram, label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, color: 'text-rose-600', bg: 'bg-rose-50' },
    { icon: MapPin, label: 'Localização', value: LOCATION, href: 'https://maps.google.com/?q=Vila+Nova+de+Gaia,Portugal', color: 'text-gold-600', bg: 'bg-amber-50' },
  ]

  const inputClass = "w-full px-4 py-3 min-h-[48px] rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"

  return (
    <section id="contactos" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Fale Comigo"
          title="Vamos criar o seu"
          titleAccent="bolo perfeito"
          subtitle="Entre em contacto hoje e dê o primeiro passo para um momento inesquecível."
          center
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 max-w-6xl mx-auto">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="card-premium p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-5 sm:mb-6">Contactos</h3>
              <div className="space-y-3 sm:space-y-4">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 group min-h-[44px]"
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                      <c.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${c.color}`} />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide">{c.label}</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-rose-600 transition-colors truncate">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-200 min-h-[72px]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base leading-none">WhatsApp</p>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1">Resposta rápida garantida</p>
              </div>
            </motion.a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="card-premium p-6 sm:p-8">
              {!sent ? (
                <>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-5 sm:mb-6">Enviar Mensagem</h3>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                          Nome *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="O seu nome"
                          autoComplete="name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                          Telefone
                        </label>
                        <input
                          id="contact-phone"
                          name="tel"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+351 9XX XXX XXX"
                          autoComplete="tel"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="o.seu@email.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-occasion" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                          Ocasião
                        </label>
                        <select
                          id="contact-occasion"
                          name="occasion"
                          value={form.occasion}
                          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                          className={inputClass}
                        >
                          <option value="">Selecionar...</option>
                          {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-size" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                          Tamanho
                        </label>
                        <select
                          id="contact-size"
                          name="size"
                          value={form.size}
                          onChange={(e) => setForm({ ...form, size: e.target.value })}
                          className={inputClass}
                        >
                          <option value="">Selecionar...</option>
                          {SIZES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                        Mensagem *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Descreva o seu bolo ideal: tema, cores, data do evento..."
                        className={`${inputClass} min-h-[120px] resize-none`}
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center gap-3 py-4">
                      <Send size={16} aria-hidden="true" />
                      Enviar pelo WhatsApp
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      A mensagem será enviada diretamente para o meu WhatsApp
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 sm:py-16 gap-5 text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-50 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      O WhatsApp foi aberto com a sua mensagem. Respondo em breve com o seu orçamento.
                    </p>
                  </div>
                  <button onClick={() => setSent(false)} className="btn-secondary text-sm">
                    Enviar outra mensagem
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl overflow-hidden shadow-card-hover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-cream-50 px-5 sm:px-8 py-4 sm:py-5 border-b border-cream-200 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Zona de Serviço</p>
              <p className="text-xs text-gray-500">{LOCATION}</p>
            </div>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Vila+Nova+de+Gaia,+Portugal&t=m&z=13&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vila Nova de Gaia — Zona de Serviço da Yok Cakes"
          />
        </motion.div>
      </div>
    </section>
  )
}
