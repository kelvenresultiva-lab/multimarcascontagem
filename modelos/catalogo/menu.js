// Menu de três traços (catálogo e página do carro): tira o WhatsApp do cabeçalho e abre um painel com as seções do site.
(function () {
  const naPaginaDoCarro = !!document.querySelector(".DetailCarousel"); // a página do carro abre em /<slug>
  const BASE = "/motos"; // catálogo (a página inicial fica em /)
  const WHATS = "5500000000000";
  const wa = (msg) => `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;

  const SECOES = [
    ["Início", "/", '<path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" />'],
    ["Todas as motos", BASE, '<path d="M5 17a3 3 0 1 0 0-.01M19 17a3 3 0 1 0 0-.01M8 17h5l3-6h-4l-2-3H7m9 3l3 6M14 6h2l1 2" />'],
    ["Shineray", `${BASE}?marca=SHINERAY`, '<path d="M4 6h16M4 12h16M4 18h10" />'],
    ["Haojue", `${BASE}?marca=HAOJUE`, '<path d="M4 6h16M4 12h16M4 18h10" />'],
    ["Honda", `${BASE}?marca=HONDA`, '<path d="M4 6h16M4 12h16M4 18h10" />'],
    ["Financiamento", wa("Olá! Quero simular um financiamento."), '<rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" />', true],
    ["Como chegar", "https://www.google.com/maps/search/?api=1&query=Rua%20Almerinda%20da%20Costa%20Ribeiro%2C%2021%2C%20Canad%C3%A1%2C%20Contagem%20-%20MG", '<path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" />', true],
    ["Contato", "#contato", '<path d="M6.6 3.5l2.6 4-1.8 1.9a12 12 0 0 0 7.2 7.2l1.9-1.8 4 2.6-1.1 3.1c-.3.8-1.1 1.3-2 1.2C9.6 20.9 3.1 14.4 2.3 6.6c-.1-.9.4-1.7 1.2-2z" />'],
  ];

  // 1) tira o WhatsApp do cabeçalho
  document.querySelectorAll("header .botao-whatsapp, .topo .botao-whatsapp").forEach((b) => b.remove());

  // 2) botão de três traços no cabeçalho (catálogo: .topo__conteudo; página do carro: cabeçalho mobile)
  const lugares = naPaginaDoCarro
    ? [...document.querySelectorAll('[class*="_headerMobileActions_"]')]
    : [...document.querySelectorAll(".topo__conteudo")];
  const botoes = lugares.map((lugar) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "menu-tracos";
    b.setAttribute("aria-label", "Abrir menu");
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-controls", "menu-painel");
    b.innerHTML = "<span></span><span></span><span></span>";
    lugar.appendChild(b);
    return b;
  });

  // 3) painel lateral
  const icone = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="menu-fundo" hidden></div>
    <aside class="menu-painel" id="menu-painel" aria-label="Menu do site" aria-hidden="true">
      <div class="menu-painel__topo">
        <a class="menu-painel__marca" href="/"><img class="logo-vr" src="/modelos/catalogo/logo-vr.svg" alt="VR Multimarcas Contagem" width="230" height="30"></a>
        <button type="button" class="menu-painel__fechar" aria-label="Fechar menu">${icone('<path d="M6 6l12 12M18 6L6 18" />')}</button>
      </div>
      <nav class="menu-painel__secoes">
        ${SECOES.map(([t, h, d, externo]) => `<a href="${h}"${externo ? ' target="_blank" rel="noopener"' : ""}>${icone(d)}<span>${t}</span>
          <svg class="menu-painel__seta" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`).join("")}
      </nav>
      <div class="menu-painel__contato">
        <a class="menu-painel__whats" href="${wa("Olá! Vim pelo site e quero saber mais sobre as motos.")}" target="_blank" rel="noopener">Chamar no WhatsApp</a>
        <a class="menu-painel__ligar" href="https://www.google.com/maps/search/?api=1&query=Rua%20Almerinda%20da%20Costa%20Ribeiro%2C%2021%2C%20Canad%C3%A1%2C%20Contagem%20-%20MG" target="_blank" rel="noopener">Rua Almerinda da Costa Ribeiro, 21 — Bairro Canadá</a>
        <a class="menu-painel__insta" href="https://www.instagram.com/vrmultimarcas.contagem.oficial/" target="_blank" rel="noopener">Instagram @vrmultimarcas.contagem.oficial</a>
        <p>Contagem, MG</p>
      </div>
    </aside>`);

  const painel = document.getElementById("menu-painel");
  const fundo = document.querySelector(".menu-fundo");
  let ultimoBotao = null;
  function abrir(b) {
    ultimoBotao = b;
    fundo.hidden = false;
    void fundo.offsetWidth; // força o navegador a desenhar o fundo antes, para a transição funcionar
    painel.classList.add("aberto");
    fundo.classList.add("aberto");
    painel.setAttribute("aria-hidden", "false");
    botoes.forEach((x) => x.setAttribute("aria-expanded", "true"));
    document.documentElement.classList.add("menu-aberto");
    painel.querySelector(".menu-painel__fechar").focus();
  }
  function fechar() {
    painel.classList.remove("aberto");
    fundo.classList.remove("aberto");
    painel.setAttribute("aria-hidden", "true");
    botoes.forEach((x) => x.setAttribute("aria-expanded", "false"));
    document.documentElement.classList.remove("menu-aberto");
    setTimeout(() => { if (!painel.classList.contains("aberto")) fundo.hidden = true; }, 250);
    if (ultimoBotao) ultimoBotao.focus();
  }
  botoes.forEach((b) => b.addEventListener("click", () => abrir(b)));
  painel.querySelector(".menu-painel__fechar").addEventListener("click", fechar);
  fundo.addEventListener("click", fechar);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && painel.classList.contains("aberto")) fechar(); });
  // links internos (Contato, mesma página) fecham o painel
  painel.querySelectorAll('a[href^="#"], a[href^="/"]').forEach((a) => a.addEventListener("click", fechar));
})();
