// Página inicial: banners, busca, marcas e vitrine por estilo, montados a partir do window.ESTOQUE.
(function () {
  const $ = (id) => document.getElementById(id);
  const WHATS = "5531921185662"; // WhatsApp da VR: (31) 92118-5662
  const wa = (msg) => `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;
  const ESTOQUE = (window.ESTOQUE || []).filter((v) => !v.vendido);
  const titulo = (t) => String(t).toLowerCase().replace(/(^|[\s(/-])(\p{L})/gu, (m, a, b) => a + b.toUpperCase()).replace(/(\d)Cc\b/g, "$1cc");
  // ---------- Banners (artes prontas em modelos/inicio/banners/<slug>-computador.webp e -celular.webp) ----------
  // Os botões "Ver detalhes" e "Simular financiamento" fazem parte da arte; por cima deles ficam áreas clicáveis
  // invisíveis. No computador os botões estão no mesmo lugar em todas as artes; no celular a altura muda um pouco,
  // então cada arte guarda o topo (em % da altura) do "Ver detalhes" e do "Simular financiamento".
  const BANNERS = [
    { slug: "honda-pcx-2027", cel: [33.7, 40.2] },
    { slug: "haojue-dr-160", cel: [30.9, 36.7] },
    { slug: "shineray-shi-175", cel: [32.4, 39.0] },
    { slug: "shineray-jef-150", cel: [31.2, 37.9] },
    { slug: "shineray-urban-150", cel: [31.6, 37.8] },
    { slug: "shineray-new-jet-125", cel: [31.3, 36.8] },
    { slug: "honda-biz-125", cel: [31.3, 37.5] },
    { slug: "shineray-jet-50", cel: [30.7, 36.5] },
    { slug: "shineray-storm-200", cel: [34.9, 41.7], soCelular: true }, // ainda sem arte para computador
  ].map((b) => ({ ...b, v: ESTOQUE.find((v) => v.slug === b.slug) })).filter((b) => b.v);
  const celular = matchMedia("(max-width: 860px)");
  const trilho = $("banner-trilho");
  let slides = [], pontos = [], atual = 0, timer;

  function montarBanners() {
    const lista = BANNERS.filter((b) => celular.matches || !b.soCelular);
    trilho.innerHTML = lista.map((b, i) => {
      const nome = `${titulo(b.v.marca)} ${titulo(b.v.modelo)}`;
      const arte = `/modelos/inicio/banners/${b.slug}`;
      const [ver, sim] = b.cel;
      return `
      <article class="banner__slide${i === 0 ? " ativo" : ""}" aria-roledescription="slide" aria-label="${nome}, ${i + 1} de ${lista.length}"${i ? ' aria-hidden="true"' : ""} style="--ver:${ver}%;--sim:${sim}%">
        <picture>
          <source media="(max-width: 860px)" srcset="${arte}-celular.webp">
          <img class="banner__arte" src="${arte}-${b.soCelular ? "celular" : "computador"}.webp" alt="${nome} 0 km no showroom da VR Multimarcas, com financiamento facilitado e capacete por nossa conta"${i ? ' loading="lazy"' : ' fetchpriority="high"'}>
        </picture>
        <a class="banner__area banner__area--tudo" href="${b.v.link}" tabindex="-1" aria-hidden="true"></a>
        <a class="banner__area banner__area--ver" href="${b.v.link}">Ver detalhes da ${nome}</a>
        <a class="banner__area banner__area--simular" href="${wa(`Olá, VR Multimarcas! Quero simular o financiamento da ${titulo(b.v.marca)} ${b.v.modelo} 0 km que vi no site. Qual a entrada e o valor das parcelas?\n${location.origin}${b.v.link}`)}" target="_blank" rel="noopener">Simular financiamento da ${nome}</a>
      </article>`;
    }).join("");
    slides = [...trilho.children];
    $("banner-pontos").innerHTML = slides.map((_, i) => `<button type="button" aria-label="Ir para o banner ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}></button>`).join("");
    pontos = [...$("banner-pontos").children];
    pontos.forEach((p, i) => p.addEventListener("click", () => { ir(i); reiniciar(); }));
    atual = 0;
    carregarVizinhos();
    document.querySelector(".banner").classList.toggle("banner--unico", slides.length < 2);
    reiniciar();
  }
  function ir(n) {
    atual = (n + slides.length) % slides.length;
    slides.forEach((s, i) => { s.classList.toggle("ativo", i === atual); s.toggleAttribute("aria-hidden", i !== atual); });
    pontos.forEach((p, i) => (i === atual ? p.setAttribute("aria-current", "true") : p.removeAttribute("aria-current")));
    carregarVizinhos();
  }
  // as artes começam com loading="lazy"; o próximo e o anterior já são baixados antes de aparecer (sem piscar em preto)
  function carregarVizinhos() {
    [atual + 1, atual - 1].forEach((n) => {
      const img = slides[(n + slides.length) % slides.length]?.querySelector("img");
      if (img) img.loading = "eager";
    });
  }
  function reiniciar() {
    clearInterval(timer);
    if (slides.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(() => ir(atual + 1), 6000);
  }
  $("banner-ant").addEventListener("click", () => { ir(atual - 1); reiniciar(); });
  $("banner-prox").addEventListener("click", () => { ir(atual + 1); reiniciar(); });
  montarBanners();
  // a Storm só tem arte de celular: ao passar de uma largura para a outra, a lista de banners muda
  celular.addEventListener("change", montarBanners);
  // arrastar com o dedo no celular
  let x0 = null;
  trilho.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  trilho.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { ir(atual + (dx < 0 ? 1 : -1)); reiniciar(); }
    x0 = null;
  });

  // ---------- Busca ----------
  const selMarca = $("busca-marca"), selModelo = $("busca-modelo"), botao = $("busca-botao");
  const marcas = [...new Set(ESTOQUE.map((v) => v.marca))].sort();
  selMarca.insertAdjacentHTML("beforeend", marcas.map((m) => `<option value="${m}">${titulo(m)}</option>`).join(""));
  function atualizarBusca() {
    const m = selMarca.value;
    const modelos = [...new Set(ESTOQUE.filter((v) => v.marca === m).map((v) => v.modelo))].sort();
    const antes = selModelo.value;
    selModelo.innerHTML = '<option value="">Todos os modelos</option>' + modelos.map((x) => `<option value="${x}">${titulo(x)}</option>`).join("");
    selModelo.value = modelos.includes(antes) ? antes : "";
    selModelo.disabled = !m;
    const n = ESTOQUE.filter((v) => (!m || v.marca === m) && (!selModelo.value || v.modelo === selModelo.value)).length;
    botao.textContent = `Ver ${n} ${n === 1 ? "moto" : "motos"}`;
  }
  selMarca.addEventListener("change", atualizarBusca);
  selModelo.addEventListener("change", atualizarBusca);
  // o catálogo lê ?marca=&modelo= da URL; campos vazios não vão para o endereço
  $("busca").addEventListener("submit", (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (selMarca.value) p.set("marca", selMarca.value);
    if (selModelo.value) p.set("modelo", selModelo.value);
    location.href = "/motos" + (p.toString() ? "?" + p : "");
  });
  atualizarBusca();

  // ---------- Marcas ----------
  $("marcas").innerHTML = marcas.map((m) => {
    const n = ESTOQUE.filter((v) => v.marca === m).length;
    return `<a class="marca" href="/motos?marca=${encodeURIComponent(m)}">
      <span class="marca__circulo marca__circulo--${m.toLowerCase()}">${m}</span>
      <span class="marca__nome">${titulo(m)}</span>
      <span class="marca__qtd">${n} ${n === 1 ? "modelo" : "modelos"}</span>
    </a>`;
  }).join("");

  // ---------- Vitrine por estilo ----------
  const estilos = ["Todas", ...[...new Set(ESTOQUE.map((v) => v.carroceria).filter(Boolean))].sort()];
  $("estilos").innerHTML = estilos.map((e, i) => `<button type="button" class="estilo" role="tab" aria-selected="${i === 0}">${e}</button>`).join("");
  const iconeLocal = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>';
  const card = (v) => `
    <article class="card">
      <a class="card__foto" href="${v.link}"><img src="/modelos/catalogo/fotos/${v.foto}" alt="${titulo(v.marca)} ${titulo(v.modelo)}" loading="lazy"></a>
      <a class="card__corpo" href="${v.link}">
        <div class="card__selos"><span class="selo selo--verde">0 KM</span>${v.carroceria ? `<span class="selo selo--estilo">${v.carroceria}</span>` : ""}</div>
        <h3 class="card__nome">${v.marca} ${v.modelo}</h3>
        <p class="card__versao">${titulo(v.versao)}</p>
        <p class="card__local">${iconeLocal}Contagem (MG)</p>
        <strong class="card__preco card__preco--consulta">Consulte o preço</strong>
        <span class="botao-escuro card__botao">Ver detalhes</span>
      </a>
    </article>`;
  function mostrar(estilo) {
    const lista = estilo === "Todas" ? ESTOQUE : ESTOQUE.filter((v) => v.carroceria === estilo);
    // até 8 (duas fileiras de 4 no computador); o resto está em "Ver todas"
    $("vitrine").innerHTML = lista.slice(0, 8).map(card).join("");
  }
  $("estilos").addEventListener("click", (e) => {
    const b = e.target.closest(".estilo");
    if (!b) return;
    $("estilos").querySelectorAll(".estilo").forEach((x) => x.setAttribute("aria-selected", x === b));
    mostrar(b.textContent);
  });
  mostrar("Todas");
})();
