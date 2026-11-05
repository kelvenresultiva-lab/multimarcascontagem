# VR Multimarcas — site

Site da VR Multimarcas (Contagem/MG), loja de motos 0 km Shineray, Haojue e Honda, no estilo da Webmotors.

- `index.html` — página inicial (`/`): banners das motos, busca por marca e modelo, marcas, vitrine por estilo, vantagens e faixa de financiamento. Arquivos em `modelos/inicio/` (as artes dos banners ficam em `modelos/inicio/banners/<slug>-computador.webp` e `-celular.webp`).
- `motos/index.html` — catálogo (`/motos`), com filtros e ordenação. Aceita `?marca=` e `?modelo=` no endereço.
- `modelos/catalogo/` — estoque (`estoque.js`), fotos (`fotos/<slug>/`: `capa.jpg` para os cards e `01.jpg`, `02.jpg`... para a galeria), estilos, menu e a logo (`logo-vr.svg`, `simbolo-vr.svg`).
- `modelos/pagina-veiculo/` — página de cada moto, aberta em `/<slug>` (ex.: `/honda-pcx-2027`). Os dados vêm do mesmo `estoque.js`.
- `vercel.json` — leva `/motos` ao catálogo e `/<slug>` à página da moto.

Para adicionar uma moto: criar a pasta de fotos com o slug e acrescentar o bloco dela em `modelos/catalogo/estoque.js`.

WhatsApp e telefone da loja: (31) 2118-5662.

Pós-venda: oficina credenciada LSE Motos (R. Mte. Pedrinho, 35 — Nossa Sra. do Carmo, Contagem/MG, tel. (31) 98456-8694), SAC só WhatsApp (48) 99161-1671 e 1ª revisão com 1.000 km ou 3 meses. Aparecem na seção `#pos-venda` da página inicial, na coluna "Pós-venda" do rodapé e no menu.

Simular financiamento: todo link do WhatsApp cuja mensagem fala em "simular" abre antes um formulário (nome, CPF, telefone e e-mail) em `modelos/catalogo/financiamento.js` e `.css`; ao enviar, o WhatsApp abre com esses dados e a moto. Nada fica guardado no site. A foto da prévia de links (WhatsApp, Instagram) é `modelos/catalogo/compartilhar.jpg`, com endereço absoluto em `https://multimarcascontagem.vercel.app` nas etiquetas `og:image`; se o domínio mudar, trocar nas três páginas.

Site estático: não precisa de build. Basta servir a pasta (ex.: Vercel).
