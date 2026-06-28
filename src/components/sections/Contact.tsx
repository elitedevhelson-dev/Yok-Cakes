'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Facebook, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL, EMAIL } from '@/data/content'

const OCCASIONS = [
  'Aniversário', 'Casamento', 'Batizado', 'Chá de Bebé',
  'Festa Infantil', 'Evento Empresarial', 'Surpresa Romântica', 'Outro',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', occasion: '', message: '', size: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá Yok Cakes! 👋\n\nNome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\nOcasião: ${form.occasion}\nTamanho: ${form.size}\n\n${form.message}`
    )
    window.open(`https://wa.me/351XXXXXXXXX?text=${msg}`, '_blank')
    setSent(true)
  }

  const CONTACTS = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+351 XXX XXX XXX', href: WHATSAPP_URL, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Instagram, label: 'Instagram', value: '@yokcakes', href: INSTAGRAM_URL, color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Facebook, label: 'Facebook', value: 'Yok Cakes', href: FACEBOOK_URL, color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, color: 'text-rose-600', bg: 'bg-rose-50' },
    { icon: MapPin, label: 'Localização', value: 'Lisboa, Portugal', href: '#', color: 'text-gold-600', bg: 'bg-amber-50' },
  ]

  return (
    <section id="contactos" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <SectionTitle
          label="Fale Connosco"
          title="Vamos criar o seu"
          titleAccent="bolo perfeito"
          subtitle="Entre em contacto hoje e dê o primeiro passo para um momento inesquecível."
          center
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card-premium p-8">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Contactos</h3>
              <div className="space-y-4">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                      <c.icon className={`w-5 h-5 ${c.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{c.label}</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-rose-600 transition-colors">{c.value}</p>
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
              className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-200"
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-base leading-none">WhatsApp</p>
                <p className="text-emerald-100 text-sm mt-1">Resposta rápida garantida</p>
              </div>
            </motion.a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="card-premium p-8">
              {!sent ? (
                <>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">
                    Enviar Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Nome *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="O seu nome"
                          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Telefone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+351 9XX XXX XXX"
                          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="o.seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Ocasião</label>
                        <select
                          value={form.occasion}
                          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                        >
                          <option value="">Selecionar...</option>
                          {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Tamanho</label>
                        <select
                          value={form.size}
                          onChange={(e) => setForm({ ...form, size: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                        >
                          <option value="">Selecionar...</option>
                          {['1 kg', '1,5 kg', '2 kg', '2,5 kg', '3 kg', '4 kg', '5 kg'].map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Mensagem *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Descreva o seu bolo ideal: tema, cores, data do evento..."
                        className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4 gap-3">
                      <Send size={16} />
                      Enviar pelo WhatsApp
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      A mensagem será enviada diretamente para o nosso WhatsApp
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      O WhatsApp foi aberto com a sua mensagem. Respondemos em breve com o orçamento.
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
      </div>
    </section>
  )
}
