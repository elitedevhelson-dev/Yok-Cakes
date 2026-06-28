import { Instagram, Facebook, Mail, MessageCircle, Heart } from 'lucide-react'
import { INSTAGRAM_URL, FACEBOOK_URL, EMAIL, WHATSAPP_URL, NAV_LINKS } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 pb-10 sm:pb-12 border-b border-gray-800">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-serif font-bold">Y</span>
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="font-serif font-bold text-xl text-white">Yok Cakes</span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-gold-400 font-medium">Bolos Artesanais</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[260px]">
              Criamos momentos doces e inesquecíveis através de bolos artesanais feitos com
              carinho e ingredientes premium.
            </p>
            <p className="text-xs text-gray-500 italic font-serif">&quot;Amor em forma de bolo.&quot;</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4 sm:mb-5">
              Navegação
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-rose-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4 sm:mb-5">
              Contactos
            </h3>
            <ul className="space-y-3">
              {[
                { Icon: MessageCircle, label: 'WhatsApp', href: WHATSAPP_URL, external: true },
                { Icon: Mail, label: EMAIL, href: `mailto:${EMAIL}`, external: false },
                { Icon: Instagram, label: '@yokcakes', href: INSTAGRAM_URL, external: true },
                { Icon: Facebook, label: 'Yok Cakes', href: FACEBOOK_URL, external: true },
              ].map(({ Icon, label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-rose-300 transition-colors group min-h-[36px]"
                  >
                    <Icon
                      size={16}
                      className="text-gray-600 group-hover:text-rose-400 transition-colors flex-shrink-0"
                    />
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Yok Cakes. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Feito com <Heart size={12} className="fill-rose-500 text-rose-500" /> em Portugal
          </p>
        </div>
      </div>
    </footer>
  )
}
