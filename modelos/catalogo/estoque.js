// Estoque da VR Multimarcas Contagem — motos 0 km, montado a partir dos posts de apresentação do Instagram
// (@vrmultimarcas.contagem.oficial). Só entra o que a loja publicou nas legendas e nas artes; preço e ano ficam
// em branco quando não foram divulgados (o site mostra "Consulte").
// Shineray: ficha técnica, itens e versão tirados do site oficial (shineray.com.br) em 2026-11-06; o campo ficha
// alimenta a "Ficha Técnica" da página da moto.
// Preços: lista de estoque enviada pela loja em 2026-11-06 (SHI 175 EFI, New Jet 125, Jef 150 EFI, Storm 200 EFI, PCX 160 CBS).
// Fotos em fotos/<slug>/01.jpg, 02.jpg... e capa.jpg (600x450) para os cards.
window.ESTOQUE = [
  {
    slug: "shineray-shi-175", tipo: "moto", marca: "SHINERAY", modelo: "SHI 175",
    versao: "TRAIL 175CC EFI", ano: "", km: 0, preco: 21590,
    cambio: "Manual, 5 marchas", combustivel: "", carroceria: "Trail", fotos: 3,
    opcionais: ["Injeção eletrônica (EFI)","Painel 100% digital","Freio a disco nas duas rodas","Rodas raiadas aro 19\" e 17\"","Suspensão traseira monoshock","Partida elétrica e a pedal"],
    observacoes: ["Pronta entrega"],
    descricao: "A Shineray SHI 175 EFI é uma trail para quem divide a semana entre o asfalto da cidade e a estrada de terra. Tem motor 175 cc com injeção eletrônica, painel 100% digital, freio a disco na frente e atrás e rodas raiadas, com aro 19 na dianteira e 17 na traseira. A altura do assento é de 875 mm e o tanque leva 14,5 litros.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/shi-175s-efi/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos, 2 válvulas, SOHC","Cilindrada: 175,11 cc","Injeção eletrônica (EFI)","Potência máxima: 15,63 cv a 8.500 rpm","Torque máximo: 14 N·m a 6.500 rpm","Câmbio de 5 marchas","Embreagem manual, multidisco em banho de óleo"],
      dimensoes: ["Comprimento: 2.080 mm","Largura: 860 mm","Altura: 1.270 mm","Altura do assento: 875 mm","Distância entre eixos: 1.365 mm","Distância do solo: 260 mm","Peso líquido: 129 kg","Peso em ordem de marcha: 145 kg","Carga máxima: 150 kg (piloto, passageiro e bagagem)","Tanque: 14,5 litros"],
      suspensao: ["Dianteira: garfo telescópico, curso de 176 mm","Traseira: balança monoamortecedora (monoshock)"],
      rodas: ["Rodas raiadas","Pneu dianteiro: 90/90 aro 19\"","Pneu traseiro: 110/90 aro 17\"","Freio dianteiro: disco de 265 mm, hidráulico","Freio traseiro: disco de 220 mm, hidráulico"],
      eletrica: ["Bateria: 12 V / 6,5 Ah","Partida elétrica e a pedal","Painel 100% digital: combustível, velocidade, marcha, neutro e conta-giros"],
    },
  },
  {
    slug: "shineray-new-jet-125", tipo: "moto", marca: "SHINERAY", modelo: "NEW JET 125",
    versao: "MOTONETA 125CC", ano: "", km: 0, preco: 14490,
    cambio: "Semiautomático, 4 marchas", combustivel: "", carroceria: "Motoneta", fotos: 2,
    opcionais: ["Painel 100% digital","Farol full LED e setas em LED","Freio dianteiro a disco","Rodas de liga leve","Guarda-volume sob o banco","Baixo consumo"],
    observacoes: [],
    descricao: "A Shineray New Jet 125 é uma motoneta para o dia a dia na cidade: leve, econômica e fácil de pilotar. Tem motor 125 cc, câmbio de 4 marchas, painel 100% digital, farol full LED, freio dianteiro a disco e rodas de liga leve. Embaixo do banco há um guarda-volume para documentos e objetos pessoais.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/jet-125/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos","Cilindrada: 123,67 cc","Potência máxima: 8,15 cv a 7.500 rpm","Torque máximo: 8,0 N·m a 6.000 rpm","Câmbio de 4 marchas"],
      dimensoes: ["Comprimento: 1.910 mm","Largura: 660 mm","Altura: 1.105 mm","Altura do assento: 750 mm","Distância entre eixos: 1.275 mm","Distância do solo: 110 mm","Peso líquido: 92 kg","Peso em ordem de marcha: 96 kg","Tanque: 3 litros"],
      suspensao: ["Dianteira: garfo telescópico","Traseira: dois amortecedores (bi-shock)"],
      rodas: ["Rodas de liga leve","Pneu dianteiro: 2.50 aro 17\"","Pneu traseiro: 80/100 aro 14\"","Freio dianteiro: disco de 220 mm, hidráulico","Freio traseiro: tambor de 111 mm"],
      eletrica: ["Bateria: 12 V / 5,0 Ah","Partida elétrica e a pedal","Farol full LED, setas em LED","Painel 100% digital"],
    },
  },
  {
    slug: "shineray-jef-150", tipo: "moto", marca: "SHINERAY", modelo: "JEF 150",
    versao: "STREET 150CC EFI", ano: "", km: 0, preco: 19490,
    cambio: "Manual, 5 marchas", combustivel: "", carroceria: "Street", fotos: 6,
    opcionais: ["Injeção eletrônica (EFI)","Painel 100% digital","Lanternas full LED","Freio dianteiro a disco","Rodas de liga leve aro 17\"","Suspensão traseira monoshock","Porta USB"],
    observacoes: [],
    descricao: "A Shineray Jef 150 EFI é uma street de visual esportivo para o uso diário. Tem motor 150 cc com injeção eletrônica, câmbio de 5 marchas, painel 100% digital, lanternas full LED, freio dianteiro a disco e rodas de liga leve aro 17. O tanque leva 12 litros.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/jef-150s-efi/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos, OHC","Cilindrada: 149 cc","Injeção eletrônica (EFI)","Potência máxima: 13,5 cv a 7.500 rpm","Torque máximo: 14 N·m a 6.000 rpm","Câmbio de 5 marchas"],
      dimensoes: ["Comprimento: 1.990 mm","Largura: 770 mm","Altura: 1.100 mm","Altura do assento: 780 mm","Distância entre eixos: 1.330 mm","Distância do solo: 190 mm","Peso bruto: 271 kg","Carga máxima: 150 kg","Tanque: 12 litros"],
      suspensao: ["Dianteira: garfo telescópico","Traseira: balança monoamortecedora (monoshock)"],
      rodas: ["Rodas de liga leve","Pneu dianteiro: 90/90 aro 17\"","Pneu traseiro: 120/80 aro 17\"","Freio dianteiro: disco de 235 mm, hidráulico","Freio traseiro: tambor de 128 mm"],
      eletrica: ["Bateria: 12 V / 7 Ah","Partida elétrica e a pedal","Farol halógeno e lanternas full LED","Painel 100% digital","Porta USB"],
    },
  },
  {
    slug: "shineray-urban-150", tipo: "moto", marca: "SHINERAY", modelo: "URBAN 150",
    versao: "SCOOTER 150CC", ano: "", km: 0, preco: null,
    cambio: "Automático", combustivel: "", carroceria: "Scooter", fotos: 3,
    opcionais: ["Freio ABS de dois canais","Sistema Start/Stop","Painel 100% digital com espelhamento do celular","Iluminação full LED","Pneus de uso misto","Freio a disco nas duas rodas"],
    observacoes: [],
    descricao: "A Shineray Urban 150 é uma scooter automática com bastante tecnologia para o preço. Tem freio ABS de dois canais com disco nas duas rodas, sistema Start/Stop que desliga o motor nas paradas para economizar combustível, iluminação full LED e painel 100% digital que espelha a tela do celular. Os pneus de uso misto e o tanque de 13,5 litros completam o conjunto.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/urban-150/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos, OHC","Cilindrada: 149 cc","Potência máxima: 12,9 cv a 8.500 rpm","Torque máximo: 13 N·m a 5.000 rpm","Câmbio automático","Embreagem centrífuga automática seca","Sistema Start/Stop"],
      dimensoes: ["Comprimento: 1.950 mm","Largura: 745 mm","Altura: 1.180 mm","Altura do assento: 795 mm","Distância entre eixos: 1.340 mm","Distância do solo: 165 mm","Peso bruto: 145 kg","Carga máxima: 150 kg","Tanque: 13,5 litros"],
      suspensao: ["Dianteira: garfo telescópico","Traseira: duplo amortecedor a gás"],
      rodas: ["Pneus de uso misto","Pneu dianteiro: 100/80 aro 14\"","Pneu traseiro: 130/70 aro 13\"","Freio dianteiro: disco de 240 mm, hidráulico, com ABS","Freio traseiro: disco de 220 mm, hidráulico, com ABS","ABS de dois canais"],
      eletrica: ["Bateria: 12 V / 8,6 Ah","Partida elétrica","Iluminação full LED","Painel 100% digital com indicador de bateria","Espelhamento da tela do celular no painel"],
    },
  },
  {
    slug: "shineray-storm-200", tipo: "moto", marca: "SHINERAY", modelo: "STORM 200",
    versao: "CROSSOVER 200CC EFI ABS", ano: "", km: 0, preco: 25990,
    cambio: "Manual, 6 marchas", combustivel: "", carroceria: "Crossover", fotos: 1,
    opcionais: ["Injeção eletrônica (EFI)","Freio ABS de dois canais","Freio a disco nas duas rodas","Suspensão dianteira invertida","Painel 100% digital com cores ajustáveis","Rodas de liga leve aro 17\""],
    observacoes: [],
    descricao: "A Shineray Storm 200 EFI é uma crossover de visual arrojado. Tem motor de 198 cc com 4 válvulas e injeção eletrônica, câmbio de 6 marchas, freio ABS de dois canais com disco nas duas rodas e suspensão dianteira invertida. O painel é 100% digital e permite trocar as cores.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/storm-200/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos, 4 válvulas, SOHC, balanceado","Cilindrada: 198,1 cc","Injeção eletrônica (EFI)","Potência máxima: 20,4 cv a 9.000 rpm","Torque máximo: 18 N·m a 7.500 rpm","Câmbio de 6 marchas","Embreagem manual, multidisco em banho de óleo"],
      dimensoes: ["Comprimento: 2.000 mm","Largura: 780 mm","Altura: 1.285 mm","Altura do assento: 790 mm","Distância entre eixos: 1.340 mm","Distância do solo: 180 mm","Peso líquido: 153 kg","Peso em ordem de marcha: 167,3 kg","Tanque: 13 litros","Chassi Diamond Frame"],
      suspensao: ["Dianteira: garfo telescópico invertido","Traseira: balança monoamortecedora (monoshock)"],
      rodas: ["Rodas de liga leve","Pneu dianteiro: 100/80 aro 17\"","Pneu traseiro: 130/70 aro 17\"","Freio dianteiro: disco de 300 mm, hidráulico","Freio traseiro: disco de 220 mm, hidráulico","ABS de dois canais"],
      eletrica: ["Bateria: 12 V / 9,0 Ah","Partida elétrica","Painel 100% digital com cores ajustáveis: combustível, marcha, neutro e conta-giros"],
    },
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
    cambio: "Semiautomático, 4 marchas", combustivel: "", carroceria: "Motoneta", fotos: 3,
    opcionais: ["Painel 100% digital","Farol full LED e setas em LED","Freio dianteiro a disco","Rodas de liga leve","Guarda-volume sob o banco"],
    observacoes: [],
    descricao: "A Shineray Jet 50 é a cinquentinha para rodar na cidade gastando pouco. Tem motor 50 cc, câmbio de 4 marchas, painel 100% digital, farol full LED, freio dianteiro a disco e rodas de liga leve, além de guarda-volume embaixo do banco. Na VR Multimarcas tem financiamento facilitado e parcelas que cabem no bolso.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/jet-50/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos","Cilindrada: 49,4 cc","Potência máxima: 2,71 cv a 5.000 rpm","Torque máximo: 2,6 N·m a 6.000 rpm","Câmbio de 4 marchas"],
      dimensoes: ["Comprimento: 1.910 mm","Largura: 660 mm","Altura: 1.105 mm","Altura do assento: 750 mm","Distância do solo: 110 mm","Peso líquido: 91 kg","Peso em ordem de marcha: 95 kg","Tanque: 3 litros"],
      suspensao: ["Dianteira: garfo telescópico","Traseira: dois amortecedores"],
      rodas: ["Rodas de liga leve","Pneu dianteiro: 2.50 aro 17\"","Pneu traseiro: 80/100 aro 14\"","Freio dianteiro: disco de 220 mm, hidráulico","Freio traseiro: tambor de 111 mm"],
      eletrica: ["Bateria: 12 V / 5,0 Ah","Partida elétrica e a pedal","Farol full LED, setas em LED","Painel 100% digital"],
    },
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
    versao: "SCOOTER — MODELO 2027", ano: "2027", km: 0, preco: 25130,
    cambio: "Automático", combustivel: "", carroceria: "Scooter", fotos: 3,
    opcionais: [],
    observacoes: [],
    descricao: "A Honda PCX se destaca pela tecnologia avançada. Na VR Multimarcas Contagem você já encontra o modelo 2027.",
  },
  // Elétricas: especificações do catálogo do Grupo Voltrix (06.10.2026); fotos enviadas pela loja.
  // Os valores do catálogo são de revenda (sócios Voltrix) e NÃO vão para o site: o preço vem da loja.
  {
    slug: "voltrix-x13", tipo: "moto", marca: "VOLTRIX", modelo: "X13",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: null,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de até 60 km", "Som Bluetooth", "Marcha ré", "Suporte para celular", "Suporta até 200 kg"],
    observacoes: ["Pronta entrega"],
    descricao: "A X13 é uma scooter elétrica de pneus largos e visual robusto, para rodar na cidade sem gastar com gasolina. O motor de 1.000 W chega a 32 km/h e a bateria de 48 V / 20 Ah garante até 60 km por carga. Tem som Bluetooth, marcha ré para manobrar com facilidade, suporte para celular e aguenta até 200 kg.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria: 48 V / 20 Ah", "Autonomia: até 60 km por carga"],
      dimensoes: ["Peso suportado: até 200 kg"],
      itens: ["Som Bluetooth", "Marcha ré", "Suporte para celular"],
    },
  },
  {
    slug: "voltrix-pop", tipo: "moto", marca: "VOLTRIX", modelo: "POP",
    versao: "BIKE ELÉTRICA", ano: "", km: 0, preco: null,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de até 40 km", "Bateria removível", "Cesto dianteiro", "Banco para passageiro", "Rodas aro 14"],
    observacoes: ["Pronta entrega"],
    descricao: "A Pop é uma bike elétrica compacta e prática para o dia a dia: ir ao trabalho, à escola ou fazer compras sem depender de gasolina. Tem motor de 1.000 W, velocidade de até 32 km/h e bateria de 48 V / 20 Ah com autonomia de até 40 km. A bateria é removível, para carregar fora da bike, e ela vem com cesto dianteiro, banco para passageiro e rodas aro 14.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria: 48 V / 20 Ah, removível", "Autonomia: até 40 km por carga"],
      rodas: ["Rodas aro 14"],
      itens: ["Bateria removível", "Cesto dianteiro", "Banco para passageiro"],
    },
  },
].map((v, i) => ({
  ...v,
  id: i + 1,
  foto: `${v.slug}/capa.jpg`, // capa leve (600x450) para os cards; as fotos grandes são 01.jpg, 02.jpg...
  link: `/${v.slug}`, // página da moto: endereço do site + slug
}));
