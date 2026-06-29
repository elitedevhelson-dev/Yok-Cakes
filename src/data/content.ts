export const WHATSAPP_NUMBER = '351912775295'
export const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vi o seu website e gostaria de pedir informações sobre um bolo personalizado.')
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
export const INSTAGRAM_URL = 'https://instagram.com/yokcakesoficial'
export const INSTAGRAM_HANDLE = '@yokcakesoficial'
export const FACEBOOK_URL = 'https://facebook.com/yokcakes'
export const EMAIL = 'yoknaldineo@gmail.com'
export const LOCATION = 'Vila Nova de Gaia, Portugal'

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
    id: 1,
    text: 'Confirmo que os bolos são mesmo feitos com amor. Simplesmente incrível. A confeiteira é muito amável e prestativa. Recomendo a 1000%.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Encomendei, provei e aprovei. Texturas incríveis, sabor único, atenção aos detalhes e entrega exatamente no tempo combinado.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Já tive oportunidade de encomendar vários sabores e o meu preferido é massa de leite com recheio belga e morangos frescos. Uma delícia! Recomendo 100%.',
    rating: 5,
  },
  {
    id: 4,
    text: 'Já provei e aprovei! Bolo delicioso, decoração linda. Super recomendo!',
    rating: 5,
  },
  {
    id: 5,
    text: 'Já provei e recomendo de olhos fechados! Bolos deliciosos, lindos e feitos com muito carinho.',
    rating: 5,
  },
  {
    id: 6,
    text: 'Os bolos são incríveis, muito saborosos e feitos com enorme dedicação. Recomendo.',
    rating: 5,
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
    src: '/bolos/bolo-brigadeiro.png',
    alt: 'Bolo Brigadeiro rectangular com ganache, rosetas de creme e morangos frescos',
    name: 'Bolo Brigadeiro',
    category: 'Sabores',
    span: 'medium',
  },
  {
    id: 2,
    src: '/bolos/bolo-aniversario-tricolor.png',
    alt: 'Bolo de aniversário tricolor branco, azul claro e azul marinho com topper Feliz Aniversário',
    name: 'Feliz Aniversário',
    category: 'Aniversário',
    span: 'large',
  },
  {
    id: 3,
    src: '/bolos/bolo-cachopo-borboletas.png',
    alt: 'Bolo cachepô bicolor rosa e branco com borboletas e corrente de pérolas',
    name: 'Bolo das Borboletas',
    category: 'Aniversário',
    span: 'large',
  },
  {
    id: 4,
    src: '/bolos/bolo-poder-intersecao.png',
    alt: 'Bolo personalizado Poder d\'Interseção com flores e laço de cetim lilás',
    name: 'Poder d\'Interseção',
    category: 'Personalizado',
    span: 'large',
  },
  {
    id: 5,
    src: '/bolos/bolo-morango.png',
    alt: 'Bolo de Morango com chantilly texturizado e morangos frescos',
    name: 'Bolo de Morango',
    category: 'Sabores',
    span: 'medium',
  },
  {
    id: 6,
    src: '/bolos/bolo-naked-aniversario.png',
    alt: 'Naked cake de aniversário com cobertura rosa e laço pink',
    name: 'Naked Cake Aniversário',
    category: 'Aniversário',
    span: 'large',
  },
  {
    id: 7,
    src: '/bolos/bolo-drip-parabens.png',
    alt: 'Drip cake branco e azul royal com topper Parabéns e rosetas azuis',
    name: 'Drip Cake Parabéns',
    category: 'Aniversário',
    span: 'medium',
  },
  {
    id: 8,
    src: '/bolos/bolo-letras-ilustres.png',
    alt: 'Bolo temático Letras Ilustres — tema livros e leitura',
    name: 'Letras Ilustres',
    category: 'Temático',
    span: 'large',
  },
  {
    id: 9,
    src: '/bolos/bolo-nude-floral.png',
    alt: 'Naked cake elegante com rosas púrpura e laço de cetim',
    name: 'Nude Floral Elegante',
    category: 'Elegante',
    span: 'large',
  },
  {
    id: 10,
    src: '/bolos/bolo-thiago-galaxy.png',
    alt: 'Bolo personalizado Thiago com pintura galáxia azul e topper dourado',
    name: 'Bolo Thiago',
    category: 'Personalizado',
    span: 'large',
  },
  {
    id: 11,
    src: '/bolos/bolo-drip-lilas.png',
    alt: 'Drip cake lilás com topper Feliz Aniversário dourado e balões',
    name: 'Drip Lilás Aniversário',
    category: 'Aniversário',
    span: 'medium',
  },
  {
    id: 12,
    src: '/bolos/bolo-fabia-borboletas.png',
    alt: 'Bolo infantil primeiro aniversário Fábia com borboletas e decorações cor-de-rosa',
    name: 'Fábia — 1.º Aniversário',
    category: 'Infantil',
    span: 'large',
  },
]

export const BOLOS_PERSONALIZADOS = [
  {
    id: 1,
    name: 'Bolo Brigadeiro',
    src: '/bolos/bolo-brigadeiro.png',
    description: 'Bolo personalizado com acabamento elegante, recheado e coberto com brigadeiro gourmet. Ideal para aniversários e celebrações especiais.',
    weight: '2,5 kg',
    price: 62,
  },
  {
    id: 2,
    name: 'Drip Cake',
    src: '/bolos/drip-cake.png',
    description: 'Bolo moderno decorado com efeito drip e acabamento premium, perfeito para aniversários, festas e eventos especiais.',
    weight: '2 kg',
    price: 55,
  },
  {
    id: 3,
    name: 'Bolo Cachêpo com Glitter',
    src: '/bolos/bolo-cachepo-glitter.png',
    description: 'Bolo decorado em estilo cachêpo com acabamento em glitter alimentar, proporcionando um visual elegante e sofisticado.',
    weight: '3 kg',
    price: 75,
  },
  {
    id: 4,
    name: 'Bolo Degradê Lilás',
    src: '/bolos/bolo-degrade-lilas.png',
    description: 'Bolo com decoração em degradê lilás, perfeito para aniversários, chás de bebé e celebrações delicadas.',
    weight: '1,5 kg',
    price: 40,
  },
  {
    id: 5,
    name: 'Bolo Cachêpo Lateral',
    src: '/bolos/bolo-cachepo-lateral.png',
    description: 'Bolo premium em estilo cachêpo lateral, ideal para festas maiores e eventos familiares.',
    weight: '5 kg',
    price: 110,
  },
  {
    id: 6,
    name: 'Naked Cake',
    src: '/bolos/bolo-neked-cake.png',
    description: 'Naked Cake com decoração minimalista e elegante, perfeito para quem procura um estilo moderno e sofisticado.',
    weight: '1 kg',
    price: 32,
  },
  {
    id: 7,
    name: 'Bolo de Morango',
    src: '/bolos/bolo-morango.png',
    description: 'Bolo personalizado decorado com morangos frescos e acabamento artesanal, combinando elegância e sabor.',
    weight: '2 kg',
    price: 60,
  },
]

export const BOLOS_CASEIROS = [
  {
    id: 1,
    name: 'Vulcão Brigadeiro',
    src: '/bolos/vulcao-brigadeiro.png',
    description: 'Bolo de chocolate extremamente fofo com uma generosa cobertura cremosa de brigadeiro gourmet, perfeito para os amantes de chocolate.',
    forma: '18 cm',
    serves: '8 a 10 pessoas',
    price: 25,
  },
  {
    id: 2,
    name: 'Red Velvet Gourmet',
    src: '/bolos/red-velvet-gourmet.png',
    description: 'Massa macia de Red Velvet, coberta com um creme gourmet de chocolate branco e finalizada com morangos frescos.',
    forma: '20 cm',
    serves: '10 a 12 pessoas',
    price: 28,
  },
  {
    id: 3,
    name: 'Bolo Pistache',
    src: '/bolos/bolo-pistache.png',
    description: 'Massa fofinha de laranja com uma cobertura cremosa de pistache.',
    forma: '20 cm',
    serves: '10 a 12 pessoas',
    price: 28,
  },
  {
    id: 4,
    name: 'Vulcão Mesclado',
    src: '/bolos/vulcao-mesclado.png',
    description: 'Massa de cenoura com chocolate premium, cobertura generosa de chocolate branco e brigadeiro, decorada com morangos frescos e pérolas.',
    forma: '22 cm',
    serves: '15 pessoas',
    price: 35,
  },
  {
    id: 5,
    name: 'Laranja com Chocolate',
    src: '/bolos/laranja-com-chocolate.png',
    description: 'Deliciosa massa de laranja coberta com um irresistível creme de chocolate.',
    forma: '22 cm',
    serves: '15 pessoas',
    price: 30,
  },
  {
    id: 6,
    name: 'Choco Ninho',
    src: '/bolos/choco-ninho.png',
    description: 'Massa macia com uma cobertura cremosa de leite Ninho, perfeita para quem aprecia sabores suaves e intensos.',
    forma: '24 cm',
    serves: '18 a 20 pessoas',
    price: 40,
  },
  {
    id: 7,
    name: 'Charlote Kinder Bueno',
    src: '/bolos/charlote-kinder-bueno.png',
    description: 'Massa de coco, recheio delicioso de coco, decorada com morangos frescos e chocolates Kinder.',
    forma: '24 cm',
    serves: '18 a 20 pessoas',
    price: 45,
  },
  {
    id: 8,
    name: 'Cenoura com Brigadeiro',
    src: '/bolos/cenoura-com-brigadeiro.png',
    description: 'Clássico bolo de cenoura coberto com um brigadeiro cremoso e intenso.',
    forma: '22 cm',
    serves: null,
    price: 30,
  },
  {
    id: 9,
    name: 'Bolo Piscina Gourmet',
    src: '/bolos/bolo-piscina-gourmet.png',
    description: 'Massa de fubá com goiabada, recheada com uma generosa cobertura cremosa no centro.',
    forma: '22 cm',
    serves: null,
    price: 28,
  },
  {
    id: 10,
    name: 'Vulcão Prestígio',
    src: '/bolos/vulcao-prestigio.png',
    description: 'Combinação premium de chocolate com coco, com uma cobertura cremosa e abundante.',
    forma: '22 cm',
    serves: null,
    price: 35,
  },
  {
    id: 11,
    name: 'ChocoMax Supreme',
    src: '/bolos/chocomax-supreme.png',
    description: 'Massa de chocolate, cobertura de chocolate ao leite e chocolate branco, finalizada com granulado, brigadeiros e morangos frescos.',
    forma: '22 cm',
    serves: null,
    price: 40,
  },
]
