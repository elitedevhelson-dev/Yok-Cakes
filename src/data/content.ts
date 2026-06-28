export const WHATSAPP_NUMBER = '351XXXXXXXXX'
export const WHATSAPP_MESSAGE = 'Olá%20Yok%20Cakes!%20Gostaria%20de%20encomendar%20um%20bolo.%20Pode%20ajudar-me%3F'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
export const INSTAGRAM_URL = 'https://instagram.com/yokcakes'
export const FACEBOOK_URL = 'https://facebook.com/yokcakes'
export const EMAIL = 'info@yokcakes.pt'

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Sabores', href: '#sabores' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Preços', href: '#precos' },
  { label: 'Contactos', href: '#contactos' },
]

export const FLAVORS = [
  {
    id: 'choco-premium',
    name: 'Yok Choco Premium',
    emoji: '🍫',
    layers: ['Massa de Chocolate', 'Brigadeiro', 'Creme de Chocolate'],
    colorFrom: '#6B2D0E',
    colorTo: '#A0522D',
    bg: '#FDF3EC',
    accent: '#92400e',
    description: 'Para os amantes de chocolate. Intenso, indulgente e irresistível.',
    popular: false,
  },
  {
    id: 'ninho',
    name: 'Yok Ninho',
    emoji: '🤍',
    layers: ['Massa de Leite', 'Recheio Ninho', 'Chantininho'],
    colorFrom: '#D4B896',
    colorTo: '#EDD9B8',
    bg: '#FFFBF4',
    accent: '#9A7840',
    description: 'Cremoso e suave. O preferido das crianças e adultos nostálgicos.',
    popular: true,
  },
  {
    id: 'red-velvet',
    name: 'Yok Red Velvet',
    emoji: '❤️',
    layers: ['Red Velvet', 'Creme Belga', 'Ganache'],
    colorFrom: '#7D1A35',
    colorTo: '#B83A60',
    bg: '#FFF0F3',
    accent: '#B83A60',
    description: 'Clássico atemporal. Elegante, sofisticado e sempre impressionante.',
    popular: false,
  },
  {
    id: 'prestígio',
    name: 'Yok Prestígio',
    emoji: '🥥',
    layers: ['Massa de Chocolate', 'Brigadeiro', 'Coco'],
    colorFrom: '#3D2B1F',
    colorTo: '#6B4226',
    bg: '#F5F0EB',
    accent: '#6B4226',
    description: 'A combinação perfeita de chocolate e coco. Um clássico reinventado.',
    popular: false,
  },
  {
    id: 'tropical',
    name: 'Yok Tropical',
    emoji: '🥭',
    layers: ['Massa Amanteigada', 'Maracujá', 'Chantininho'],
    colorFrom: '#D97706',
    colorTo: '#F59E0B',
    bg: '#FFFBEB',
    accent: '#D97706',
    description: 'Fresco e vibrante. Perfeito para festas de verão e ocasiões especiais.',
    popular: false,
  },
  {
    id: 'brigadeiro',
    name: 'Yok Brigadeiro',
    emoji: '🍫',
    layers: ['Massa Chocolate', 'Creme Belga', 'Brigadeiro'],
    colorFrom: '#4A2810',
    colorTo: '#7B4120',
    bg: '#F9F0E8',
    accent: '#7B4120',
    description: 'O sabor mais brasileiro do mundo, elevado a um novo nível de sofisticação.',
    popular: false,
  },
]

export const PRICING = [
  { weight: '1 kg', price: 32, serves: '5–8 pessoas' },
  { weight: '1,5 kg', price: 40, serves: '8–12 pessoas' },
  { weight: '2 kg', price: 55, serves: '12–18 pessoas', popular: true },
  { weight: '2,5 kg', price: 62, serves: '18–22 pessoas' },
  { weight: '3 kg', price: 70, serves: '22–28 pessoas' },
  { weight: '4 kg', price: 90, serves: '28–38 pessoas' },
  { weight: '5 kg', price: 110, serves: '38–50 pessoas' },
]

export const EXTRAS = [
  { name: 'Topper Personalizado', description: 'Nome, data ou mensagem especial', price: 'A partir de 5€', icon: '✨' },
  { name: 'Flores Naturais', description: 'Flores frescas decorativas', price: 'A partir de 12€', icon: '🌸' },
  { name: 'Decoração Premium', description: 'Elementos decorativos exclusivos', price: 'A partir de 8€', icon: '👑' },
  { name: 'Glitter Alimentar', description: 'Brilho dourado ou prateado', price: 'A partir de 5€', icon: '✦' },
  { name: 'Folha de Ouro', description: 'Acabamento dourado artístico', price: 'A partir de 15€', icon: '🥇' },
  { name: 'Pérolas Especiais', description: 'Decoração com pérolas comestíveis', price: 'A partir de 7€', icon: '🫧' },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Escolhe o Bolo',
    description: 'Navega pelos meus sabores e estilos. Deixa-te inspirar pela galeria.',
    icon: '🎂',
  },
  {
    step: '02',
    title: 'Conta a Tua Ideia',
    description: 'Fala comigo pelo WhatsApp e partilha a tua visão para o bolo perfeito.',
    icon: '💬',
  },
  {
    step: '03',
    title: 'Recebe Orçamento',
    description: 'Elaboro um orçamento personalizado, sem compromisso e rapidamente.',
    icon: '📋',
  },
  {
    step: '04',
    title: 'Produção Artesanal',
    description: 'O teu bolo é feito à mão, com ingredientes premium e muito amor.',
    icon: '👩‍🍳',
  },
  {
    step: '05',
    title: 'Entrega ou Recolha',
    description: 'Recebe o teu bolo fresco e perfeito na data e hora combinadas.',
    icon: '🎁',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Ana Rodrigues',
    occasion: 'Casamento',
    text: 'O bolo do nosso casamento foi absolutamente perfeito. Todos os convidados adoraram. A Yok Cakes superou todas as expectativas — tanto na apresentação como no sabor.',
    rating: 5,
    location: 'Lisboa',
  },
  {
    name: 'Pedro Alves',
    occasion: 'Aniversário',
    text: 'Encomendei um bolo Red Velvet para o aniversário da minha mãe e ela ficou emocionada. O sabor é incomparável e a decoração estava deslumbrante. Vou encomendar sempre aqui!',
    rating: 5,
    location: 'Cascais',
  },
  {
    name: 'Sofia Martins',
    occasion: 'Batizado',
    text: 'Serviço impecável desde o primeiro contacto até à entrega. O bolo chegou perfeito, na hora certa. Obrigada por tornares o batizado do meu filho ainda mais especial.',
    rating: 5,
    location: 'Oeiras',
  },
  {
    name: 'Miguel Ferreira',
    occasion: 'Evento Empresarial',
    text: 'Encomendámos para um evento corporativo e o resultado foi extraordinário. Profissionalismo total, bolo delicioso e apresentação de alto nível. Recomendo vivamente.',
    rating: 5,
    location: 'Lisboa',
  },
  {
    name: 'Inês Costa',
    occasion: 'Chá de Bebé',
    text: 'O bolo para o meu chá de bebé estava absolutamente lindo e delicioso. A personalização foi perfeita e o atendimento foi carinhoso do início ao fim.',
    rating: 5,
    location: 'Sintra',
  },
  {
    name: 'Carlos Santos',
    occasion: 'Surpresa Romântica',
    text: 'Pedi um bolo para surpreender a minha namorada e a reação dela disse tudo. O cuidado nos detalhes é impressionante. Muito obrigado pela tua dedicação.',
    rating: 5,
    location: 'Setúbal',
  },
]

export const FAQS = [
  {
    question: 'Como faço uma encomenda?',
    answer:
      'É muito simples! Entre em contacto comigo pelo WhatsApp, Instagram ou formulário do website. Partilhe a sua ideia, a data do evento e as preferências de sabor. Eu trato de tudo com atenção e carinho.',
  },
  {
    question: 'Com quanto tempo de antecedência devo encomendar?',
    answer:
      'Recomendo um mínimo de 7 dias de antecedência para bolos padrão e 14 dias para bolos com decoração mais elaborada ou para eventos de grande dimensão. Para datas festivas (Natal, Páscoa), peço que encomende com 3–4 semanas de antecedência.',
  },
  {
    question: 'Posso personalizar completamente o meu bolo?',
    answer:
      'Absolutamente! Cada bolo é único. Pode personalizar o sabor, o tamanho, as cores, a decoração, o topper e qualquer outro detalhe. Trabalho para tornar a sua visão em realidade.',
  },
  {
    question: 'Como funciona a entrega?',
    answer:
      'Faço entregas mediante consulta e disponibilidade. O valor e as condições de entrega dependem da localização. Também pode vir recolher pessoalmente ao meu atelier, com marcação prévia.',
  },
  {
    question: 'Quais são os métodos de pagamento?',
    answer:
      'Aceito transferência bancária e MB Way. Peço um sinal de 50% no momento da confirmação da encomenda, sendo o restante pago até 48h antes da data de entrega.',
  },
  {
    question: 'Os ingredientes são naturais?',
    answer:
      'Sim! Trabalho apenas com ingredientes de qualidade selecionados, sem corantes artificiais. Cada bolo é feito artesanalmente, sem pressa e com muito carinho.',
  },
]

export const WHY_US = [
  {
    title: 'Ingredientes Selecionados',
    description: 'Utilizo apenas ingredientes premium, frescos e de qualidade, sem corantes artificiais.',
    icon: 'Leaf',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Produção Artesanal',
    description: 'Cada bolo é feito à mão, com atenção obsessiva aos detalhes e muito amor em cada camada.',
    icon: 'Heart',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    title: 'Personalização Total',
    description: 'Do sabor à decoração, crio o bolo exatamente como imagina, sem compromissos.',
    icon: 'Sparkles',
    color: 'text-gold-600',
    bg: 'bg-amber-50',
  },
  {
    title: 'Pontualidade Garantida',
    description: 'O seu bolo chega perfeito e na hora combinada. A sua paz de espírito é prioritária.',
    icon: 'Clock',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Acabamento Profissional',
    description: 'Presenteie com um bolo que impressiona à vista antes de encantar ao paladar.',
    icon: 'Award',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Atenção Personalizada',
    description: 'Acompanho todo o processo, do orçamento à entrega, com dedicação e cuidado total.',
    icon: 'MessageCircle',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    alt: 'Bolo de camadas elegante com creme branco',
    category: 'Aniversário',
    span: 'large',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80',
    alt: 'Bolo de casamento com flores brancas',
    category: 'Casamento',
    span: 'medium',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80',
    alt: 'Bolo de aniversário colorido',
    category: 'Aniversário',
    span: 'medium',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1488477181228-c84c5bc4e0f5?w=600&q=80',
    alt: 'Bolo rosa elegante para celebração',
    category: 'Festas',
    span: 'medium',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551404973-761c83cd8339?w=600&q=80',
    alt: 'Bolo de chocolate drip',
    category: 'Aniversário',
    span: 'medium',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80',
    alt: 'Fatia de bolo premium',
    category: 'Especial',
    span: 'large',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80',
    alt: 'Bolo naked com flores naturais',
    category: 'Casamento',
    span: 'medium',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&q=80',
    alt: 'Bolo minimalista branco',
    category: 'Especial',
    span: 'medium',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
    alt: 'Detalhe decorativo de bolo premium',
    category: 'Decoração',
    span: 'medium',
  },
]
