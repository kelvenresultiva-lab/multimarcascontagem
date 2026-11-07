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
  {
    slug: "shineray-shi-400sc", tipo: "moto", marca: "SHINERAY", modelo: "SHI 400SC",
    versao: "SCRAMBLER 400CC ABS", ano: "", km: 0, preco: null,
    cambio: "Manual, 5 marchas", combustivel: "", carroceria: "Scrambler", fotos: 3,
    opcionais: ["Freio ABS de duplo canal", "Freio a disco nas duas rodas", "Painel TFT", "Iluminação full LED", "Porta USB", "Sensor de cavalete lateral", "Rodas raiadas aro 19\" e 18\""],
    observacoes: [],
    descricao: "A Shineray SHI 400SC é uma scrambler de visual clássico, com banco em matelassê, rodas raiadas e escapamento duplo, para rodar na cidade e na estrada. O motor de 400 cc entrega 26,5 cv com câmbio de 5 marchas, e os freios a disco têm ABS de duplo canal. Tem painel TFT, iluminação full LED, porta USB e tanque de 14 litros.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/shi-400sc/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos, 4 válvulas, SOHC", "Cilindrada: 399,7 cc", "Potência máxima: 26,5 cv a 7.000 rpm", "Torque máximo: 30 N·m a 5.500 rpm", "Câmbio de 5 marchas", "Embreagem manual, multidisco em banho de óleo"],
      dimensoes: ["Comprimento: 2.140 mm", "Largura: 760 mm", "Altura: 1.430 mm", "Altura do assento: 815 mm", "Distância entre eixos: 1.400 mm", "Distância do solo: 160 mm", "Peso líquido: 155 kg", "Peso em ordem de marcha: 168 kg", "Carga máxima: 150 kg (piloto, passageiro, bagagem e acessórios)", "Tanque: 14 litros (com reserva)"],
      suspensao: ["Dianteira: garfo telescópico convencional, curso de 100 mm", "Traseira: dois amortecedores, curso na roda de 80 mm"],
      rodas: ["Rodas raiadas", "Pneu dianteiro: 110/90 aro 19\"", "Pneu traseiro: 130/70 aro 18\"", "Freio dianteiro: disco de 275 mm, hidráulico, com ABS", "Freio traseiro: disco de 240 mm, hidráulico, com ABS", "ABS de duplo canal"],
      eletrica: ["Bateria: 12 V / 9 Ah", "Partida elétrica", "Painel TFT", "Iluminação full LED", "Porta USB", "Sensor de cavalete lateral"],
    },
  },
  {
    slug: "shineray-atv-200-efi", tipo: "moto", marca: "SHINERAY", modelo: "NEW ATV 200 EFI",
    versao: "QUADRICICLO 200CC EFI", ano: "", km: 0, preco: null,
    cambio: "Automático", combustivel: "", carroceria: "Quadriciclo", fotos: 3,
    opcionais: ["Injeção eletrônica (EFI)", "Câmbio automático com marcha ré", "Freios a disco hidráulicos", "Painel 100% digital", "Duas portas USB", "Suspensão dianteira Double Wishbone"],
    observacoes: [],
    descricao: "O Shineray New ATV 200 EFI é um quadriciclo robusto para trilha, sítio e lazer. Tem motor de 199 cc com injeção eletrônica e câmbio automático com marcha ré, o que deixa a pilotagem e as manobras fáceis. Os freios são a disco com acionamento hidráulico, a suspensão dianteira é Double Wishbone e a traseira monoshock. O painel é 100% digital e há duas portas USB para carregar o celular.",
    // ficha técnica oficial: https://www.shineray.com.br/produto/atv-200-efi/
    ficha: {
      motor: ["Motor monocilíndrico, 4 tempos, OHC, refrigerado a ar", "Cilindrada: 199 cc", "Injeção eletrônica (EFI)", "Potência máxima: 10 cv a 7.500 rpm", "Torque máximo: 1,0 kgfm a 6.000 rpm", "Câmbio automático com marcha ré"],
      dimensoes: ["Comprimento: 1.850 mm", "Largura: 1.060 mm", "Altura: 1.130 mm", "Altura do assento: 820 mm", "Distância do solo: 130 mm", "Peso bruto total: 330 kg", "Carga máxima: 150 kg (incluindo o condutor)", "Tanque: 5 litros"],
      suspensao: ["Dianteira: Double Wishbone", "Traseira: balança monoamortecedora (monoshock)"],
      rodas: ["Pneu dianteiro: 23x7 aro 10\"", "Pneu traseiro: 22x10 aro 10\"", "Freio dianteiro: disco de 160 mm, hidráulico", "Freio traseiro: disco de 210 mm, hidráulico"],
      eletrica: ["Bateria: 12 V / 9 Ah", "Partida elétrica", "Painel 100% digital: velocímetro, odômetro, indicador de neutro e conta-giros", "Duas portas USB de 5 V"],
    },
  },
  // Scooters elétricas: especificações do catálogo do fornecedor (06.10.2026); fotos enviadas pela loja.
  // Preço no site = valor de pronta entrega do catálogo + R$ 3.500 (pedido da loja em 2026-11-07). A Thunder não está no catálogo.
  {
    slug: "scooter-x13", tipo: "moto", marca: "SCOOTERS", modelo: "X13",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: 8700,
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
    slug: "scooter-pop", tipo: "moto", marca: "SCOOTERS", modelo: "POP",
    versao: "BIKE ELÉTRICA", ano: "", km: 0, preco: 6199,
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
  {
    slug: "scooter-capuccino", tipo: "moto", marca: "SCOOTERS", modelo: "CAPUCCINO",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: 9000,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de 60 a 70 km", "Bateria de lítio 60 V / 20 Ah", "Baú traseiro", "Farol circular", "Banco amplo"],
    observacoes: ["Pronta entrega"],
    descricao: "A Capuccino é uma scooter elétrica de estilo retrô, com farol circular e acabamento elegante. É feita para passeios tranquilos pela cidade: chega a 25 km/h e a bateria de lítio de 60 V / 20 Ah rende de 60 a 70 km por carga. Vem com baú traseiro para levar suas coisas e banco amplo, mais confortável no dia a dia.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 25 km/h", "Bateria de lítio: 60 V / 20 Ah", "Autonomia: de 60 a 70 km por carga"],
      dimensoes: ["Peso suportado: até 120 kg"],
      itens: ["Baú traseiro", "Farol circular", "Banco amplo"],
    },
  },
  {
    slug: "scooter-future-v8-pro", tipo: "moto", marca: "SCOOTERS", modelo: "FUTURE V8 PRO",
    versao: "BIKE ELÉTRICA", ano: "", km: 0, preco: 8000,
    cambio: "7 marchas", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de até 50 km", "Freios a disco", "Câmbio de 7 marchas", "Bateria removível", "Suporta até 150 kg"],
    observacoes: ["Pronta entrega"],
    descricao: "A Future V8 Pro é uma bike elétrica de visual retrô e pneus largos, que roda bem na cidade e encara ruas de terra. Tem motor de 1.000 W, chega a 32 km/h e a bateria de 48 V / 15,6 Ah rende até 50 km por carga. Os freios são a disco e o câmbio tem 7 marchas para quem quiser pedalar. A bateria é removível, para carregar onde for mais prático.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria: 48 V / 15,6 Ah, removível", "Autonomia: até 50 km por carga", "Câmbio de 7 marchas"],
      dimensoes: ["Peso suportado: até 150 kg"],
      rodas: ["Freios a disco"],
      itens: ["Bateria removível", "Câmbio de 7 marchas", "Freios a disco"],
    },
  },
  {
    slug: "scooter-speed-plus", tipo: "moto", marca: "SCOOTERS", modelo: "SPEED PLUS",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: 9500,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de 40 a 50 km", "Bateria de lítio 48 V (20 Ah ou 30 Ah)", "Baú traseiro", "Banco amplo", "Iluminação frontal"],
    observacoes: ["Pronta entrega"],
    descricao: "A Speed Plus é uma scooter elétrica com cara de moto: carenagem esportiva, iluminação frontal e baú traseiro de série. Tem motor de 1.000 W, chega a 32 km/h e a bateria de lítio de 48 V, de 20 Ah ou 30 Ah, rende de 40 a 50 km por carga. O banco amplo deixa a pilotagem mais confortável, e ela aguenta até 150 kg.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria de lítio: 48 V / 20 Ah ou 48 V / 30 Ah", "Autonomia: de 40 a 50 km por carga"],
      dimensoes: ["Peso suportado: até 150 kg"],
      itens: ["Baú traseiro", "Banco amplo", "Iluminação frontal"],
    },
  },
  {
    slug: "scooter-conquest-kaudunski", tipo: "moto", marca: "SCOOTERS", modelo: "CONQUEST KAUDUNSKI",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: 9500,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de 40 a 50 km", "Bateria de lítio 48 V / 20 Ah", "Rodas de liga", "Banco amplo", "Iluminação frontal", "Suporta até 200 kg"],
    observacoes: ["Pronta entrega"],
    descricao: "A Conquest Kaudunski é uma scooter elétrica de linhas modernas e iluminação frontal marcante, para o dia a dia na cidade. Tem motor de 1.000 W, chega a 32 km/h e a bateria de lítio de 48 V / 20 Ah rende de 40 a 50 km por carga. Vem com rodas de liga e banco amplo, e aguenta até 200 kg.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria de lítio: 48 V / 20 Ah", "Autonomia: de 40 a 50 km por carga"],
      dimensoes: ["Peso suportado: até 200 kg"],
      rodas: ["Rodas de liga"],
      itens: ["Banco amplo", "Iluminação frontal", "Rodas de liga"],
    },
  },
  {
    slug: "scooter-conquest-van", tipo: "moto", marca: "SCOOTERS", modelo: "CONQUEST VAN",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: 9500,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de 40 a 50 km", "Bateria de lítio 48 V / 20 Ah", "Baú traseiro", "Banco amplo", "Iluminação frontal", "Suporta até 200 kg"],
    observacoes: ["Pronta entrega"],
    descricao: "A Conquest Van é uma scooter elétrica robusta e prática para o dia a dia, com baú traseiro de série para levar compras, documentos ou o capacete. Tem motor de 1.000 W, chega a 32 km/h e a bateria de lítio de 48 V / 20 Ah rende de 40 a 50 km por carga. Tem banco amplo e iluminação frontal, e aguenta até 200 kg.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria de lítio: 48 V / 20 Ah", "Autonomia: de 40 a 50 km por carga"],
      dimensoes: ["Peso suportado: até 200 kg"],
      itens: ["Baú traseiro", "Banco amplo", "Iluminação frontal"],
    },
  },
  {
    slug: "scooter-triciclo-fenix-duos", tipo: "moto", marca: "SCOOTERS", modelo: "FENIX DUOS",
    versao: "TRICICLO ELÉTRICO", ano: "", km: 0, preco: 9500,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Autonomia de 50 a 70 km", "Bateria de lítio 48 V / 24 Ah", "Assento duplo", "Encosto e apoio de braços", "Cesto dianteiro", "Suporta até 180 kg"],
    observacoes: ["Pronta entrega"],
    descricao: "O Fenix Duos é um triciclo elétrico de três rodas, estável e fácil de conduzir, ideal para quem quer mais estabilidade e conforto no dia a dia. Tem motor de 1.000 W, chega a 35 km/h e a bateria de lítio de 48 V / 24 Ah rende de 50 a 70 km por carga. O assento é duplo, com encosto e apoio de braços para o passageiro, e o cesto dianteiro ajuda a levar compras. Aguenta até 180 kg.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho", dimensoes: "Capacidade" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 35 km/h", "Bateria de lítio: 48 V / 24 Ah", "Autonomia: de 50 a 70 km por carga"],
      dimensoes: ["Peso suportado: até 180 kg", "Assento duplo"],
      itens: ["Assento duplo", "Encosto e apoio de braços", "Cesto dianteiro"],
    },
  },
  {
    slug: "scooter-tank-bolin", tipo: "moto", marca: "SCOOTERS", modelo: "TANK BOLIN",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: 9999,
    cambio: "", combustivel: "Elétrica", potencia: "1.000 W", carroceria: "Elétrica", fotos: 3,
    opcionais: ["Motor elétrico de 1.000 W", "Bateria 60 V / 21 Ah", "Recarga em 5 horas", "Para-brisa alto", "Farol duplo", "Proteção frontal"],
    observacoes: ["Pronta entrega"],
    descricao: "A Tank Bolin é uma scooter elétrica de visual aventureiro, com para-brisa alto, farol duplo e proteção frontal. Tem motor de 1.000 W, chega a 32 km/h e usa bateria de 60 V / 21 Ah, que recarrega em cerca de 5 horas com o carregador de 2 A. É uma boa escolha para quem quer uma elétrica com presença e cara de scooter maior.",
    ficha: {
      titulos: { motor: "Motor, bateria e desempenho" },
      motor: ["Motor elétrico de 1.000 W", "Velocidade máxima: 32 km/h", "Bateria: 60 V / 21 Ah", "Carregador: 2 A", "Tempo de recarga: 5 horas"],
      itens: ["Para-brisa alto", "Farol duplo", "Proteção frontal"],
    },
  },
  // Thunder: não está no catálogo do fornecedor nem foi achada na internet; entra só com as fotos, sem ficha técnica.
  {
    slug: "scooter-thunder", tipo: "moto", marca: "SCOOTERS", modelo: "THUNDER",
    versao: "SCOOTER ELÉTRICA", ano: "", km: 0, preco: null,
    cambio: "", combustivel: "Elétrica", potencia: "", carroceria: "Elétrica", fotos: 3,
    opcionais: [],
    observacoes: ["Pronta entrega"],
    descricao: "A Thunder é uma scooter elétrica de visual moderno, com carenagem branca e detalhes em verde. Fale com a VR Multimarcas para saber a autonomia, a velocidade e as condições de pagamento.",
    ficha: {}, // vazia: a página não mostra a Ficha Técnica
  },
].map((v, i) => ({
  ...v,
  id: i + 1,
  foto: `${v.slug}/capa.jpg`, // capa leve (600x450) para os cards; as fotos grandes são 01.jpg, 02.jpg...
  link: `/${v.slug}`, // página da moto: endereço do site + slug
}));
