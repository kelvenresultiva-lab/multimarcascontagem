// Estoque da VR Multimarcas Contagem — motos 0 km, montado a partir dos posts de apresentação do Instagram
// (@vrmultimarcas.contagem.oficial). Só entra o que a loja publicou nas legendas e nas artes; preço e ano ficam
// em branco quando não foram divulgados (o site mostra "Consulte").
// Fotos em fotos/<slug>/01.jpg, 02.jpg... e capa.jpg (600x450) para os cards.
window.ESTOQUE = [
  {
    slug: "shineray-shi-175", tipo: "moto", marca: "SHINERAY", modelo: "SHI 175",
    versao: "TRAIL 175CC", ano: "", km: 0, preco: null,
    cambio: "Manual", combustivel: "", carroceria: "Trail", fotos: 3,
    opcionais: ["Motor 175 cc", "Painel 100% digital", "Farol Full LED", "Freio a disco"],
    observacoes: ["Pronta entrega"],
    descricao: "A Shineray SHI 175 é uma trail versátil e acessível, feita para quem vai do trânsito da cidade à estrada de terra. Tem motor 175 cc, painel 100% digital, farol Full LED e freio a disco. Está em pronta entrega na VR Multimarcas, em Contagem/MG.",
  },
  {
    slug: "shineray-new-jet-125", tipo: "moto", marca: "SHINERAY", modelo: "NEW JET 125",
    versao: "MOTONETA 125CC", ano: "", km: 0, preco: null,
    cambio: "Semiautomático", combustivel: "", carroceria: "Motoneta", fotos: 2,
    opcionais: ["Motor 125 cc", "Câmbio semiautomático", "Farol em LED", "Baixo consumo"],
    observacoes: [],
    descricao: "A Shineray New Jet 125 é uma motoneta urbana pensada para quem busca praticidade, economia e conforto no dia a dia. Tem visual moderno, câmbio semiautomático, farol em LED e baixo consumo.",
  },
  {
    slug: "shineray-jef-150", tipo: "moto", marca: "SHINERAY", modelo: "JEF 150",
    versao: "STREET 150CC", ano: "", km: 0, preco: null,
    cambio: "Manual", combustivel: "", carroceria: "Street", fotos: 6,
    opcionais: ["Painel digital", "Farol em LED", "Rodas de liga leve"],
    observacoes: [],
    descricao: "A nova Shineray Jef 150 mantém o design moderno do modelo e traz mais tecnologia: painel digital mais intuitivo, farol em LED e rodas de liga leve, que dão mais estabilidade e aderência em diferentes tipos de terreno.",
  },
  {
    slug: "shineray-urban-150", tipo: "moto", marca: "SHINERAY", modelo: "URBAN 150",
    versao: "SCOOTER 150CC EFI", ano: "", km: 0, preco: null,
    cambio: "Automático", combustivel: "", carroceria: "Scooter", fotos: 3,
    opcionais: ["Injeção eletrônica (EFI)"],
    observacoes: [],
    descricao: "A Shineray Urban 150 EFI é uma scooter moderna, com tecnologia, potência e conforto na medida certa. Um avanço na mobilidade urbana com custo-benefício surpreendente.",
  },
  {
    slug: "shineray-storm-200", tipo: "moto", marca: "SHINERAY", modelo: "STORM 200",
    versao: "200CC", ano: "", km: 0, preco: null,
    cambio: "Manual", combustivel: "", carroceria: "", fotos: 1,
    opcionais: [],
    observacoes: [],
    descricao: "A Shineray Storm 200 está na VR Multimarcas, em Contagem/MG. Fale com a gente para conhecer de perto e saber as condições de financiamento.",
  },
  {
    slug: "haojue-dr-160", tipo: "moto", marca: "HAOJUE", modelo: "DR 160",
    versao: "STREET 160CC", ano: "", km: 0, preco: null,
    cambio: "Manual", combustivel: "", carroceria: "Street", fotos: 3,
    opcionais: ["Motor 160 cc", "Injeção eletrônica", "Freio ABS", "Iluminação Full LED", "Suspensão dianteira invertida", "Design esportivo"],
    observacoes: [],
    descricao: "A Haojue DR 160 é uma street urbana de visual agressivo e acabamento premium. Destaca-se pela suspensão dianteira invertida e pela iluminação Full LED, com motor 160 cc, injeção eletrônica e freio ABS.",
  },
  {
    slug: "shineray-jet-50", tipo: "moto", marca: "SHINERAY", modelo: "JET 50",
    versao: "MOTONETA 50CC", ano: "", km: 0, preco: null,
    cambio: "", combustivel: "", carroceria: "Motoneta", fotos: 3,
    opcionais: ["Motor 50 cc"],
    observacoes: [],
    descricao: "A Shineray Jet 50, a cinquentinha mais vendida do Brasil, une desempenho e economia inteligente. Na VR Multimarcas tem financiamento facilitado e parcelas que cabem no bolso.",
  },
  {
    slug: "honda-biz-125", tipo: "moto", marca: "HONDA", modelo: "BIZ 125",
    versao: "125CC", ano: "", km: 0, preco: null,
    cambio: "", combustivel: "", carroceria: "Motoneta", fotos: 3,
    opcionais: [],
    observacoes: [],
    descricao: "A Honda Biz 125 é uma opção prática para o dia a dia. Fale com a VR Multimarcas para conhecer os detalhes e as condições.",
  },
  {
    slug: "honda-pcx-2027", tipo: "moto", marca: "HONDA", modelo: "PCX",
    versao: "SCOOTER — MODELO 2027", ano: "2027", km: 0, preco: null,
    cambio: "Automático", combustivel: "", carroceria: "Scooter", fotos: 3,
    opcionais: [],
    observacoes: [],
    descricao: "A Honda PCX se destaca pela tecnologia avançada. Na VR Multimarcas Contagem você já encontra o modelo 2027.",
  },
].map((v, i) => ({
  ...v,
  id: i + 1,
  foto: `${v.slug}/capa.jpg`, // capa leve (600x450) para os cards; as fotos grandes são 01.jpg, 02.jpg...
  link: `/${v.slug}`, // página da moto: endereço do site + slug
}));
