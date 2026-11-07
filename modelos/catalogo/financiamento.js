// Simular financiamento: em vez de abrir o WhatsApp direto, os botões de "simular" abrem um formulário
// (nome, CPF, data de nascimento, telefone e e-mail). Ao enviar, o WhatsApp da loja abre com tudo preenchido para o consultor.
// Funciona em qualquer link wa.me cuja mensagem fale em "simular"; sem JavaScript, o link continua indo direto ao WhatsApp.
// Os dados não ficam guardados no site: vão só na mensagem do WhatsApp.
(function () {
  const WHATS = "553121185662"; // WhatsApp da VR: (31) 2118-5662
  const so = (s) => String(s).replace(/\D/g, "");
  const titulo = (t) => String(t).toLowerCase().replace(/(^|[\s(/-])(\p{L})/gu, (m, a, b) => a + b.toUpperCase()).replace(/(\d)Cc\b/g, "$1cc");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const motos = (window.ESTOQUE || []).filter((v) => !v.vendido)
    .map((v) => ({ nome: `${titulo(v.marca)} ${v.modelo}${v.ano ? ` ${v.ano}` : ""}`, link: v.link }));

  // ---------- validações ----------
  function cpfValido(c) {
    c = so(c);
    if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return false;
    for (const t of [9, 10]) {
      let soma = 0;
      for (let i = 0; i < t; i++) soma += +c[i] * (t + 1 - i);
      if (((soma * 10) % 11) % 10 !== +c[t]) return false;
    }
    return true;
  }
  const mascaraCpf = (v) => so(v).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  const mascaraData = (v) => so(v).slice(0, 8).replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2");
  // data real (dd/mm/aaaa) e idade entre 18 e 100 anos
  function nascimentoValido(v) {
    const m = String(v).match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!m) return false;
    const [d, mes, a] = [+m[1], +m[2], +m[3]];
    const data = new Date(a, mes - 1, d);
    if (data.getFullYear() !== a || data.getMonth() !== mes - 1 || data.getDate() !== d) return false;
    const hoje = new Date();
    let idade = hoje.getFullYear() - a;
    if (hoje.getMonth() < mes - 1 || (hoje.getMonth() === mes - 1 && hoje.getDate() < d)) idade--;
    return idade >= 18 && idade <= 100;
  }
  function mascaraTel(v) {
    const d = so(v).slice(0, 11);
    if (d.length <= 2) return d.length ? `(${d}` : "";
    const meio = d.length === 11 ? 7 : 6; // celular (31) 99999-9999 · fixo (31) 2118-5662
    return `(${d.slice(0, 2)}) ${d.slice(2, meio)}${d.length > meio ? "-" + d.slice(meio) : ""}`;
  }

  // ---------- formulário ----------
  document.body.insertAdjacentHTML("beforeend", `
    <dialog class="fin" id="fin" aria-labelledby="fin-titulo">
      <form class="fin__caixa" novalidate>
        <button type="button" class="fin__fechar" aria-label="Fechar">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <h2 class="fin__titulo" id="fin-titulo">Simular financiamento</h2>
        <p class="fin__moto" id="fin-moto"></p>
        <p class="fin__texto">Preencha seus dados. O WhatsApp abre com tudo pronto para o nosso consultor fazer a simulação.</p>
        <label class="fin__campo fin__campo--moto">
          <span>Moto de interesse</span>
          <select name="moto">
            <option value="">Ainda não escolhi</option>
            ${motos.map((m, i) => `<option value="${i}">${esc(m.nome)}</option>`).join("")}
          </select>
        </label>
        <label class="fin__campo">
          <span>Nome completo</span>
          <input name="nome" autocomplete="name" required>
          <small class="fin__erro">Digite seu nome.</small>
        </label>
        <label class="fin__campo">
          <span>CPF</span>
          <input name="cpf" inputmode="numeric" placeholder="000.000.000-00" maxlength="14" required>
          <small class="fin__erro">Confira o CPF.</small>
        </label>
        <label class="fin__campo">
          <span>Data de nascimento</span>
          <input name="nascimento" inputmode="numeric" autocomplete="bday" placeholder="dd/mm/aaaa" maxlength="10" required>
          <small class="fin__erro">Digite a data no formato dd/mm/aaaa (é preciso ter 18 anos ou mais).</small>
        </label>
        <label class="fin__campo">
          <span>Telefone / WhatsApp</span>
          <input name="tel" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="(31) 99999-9999" maxlength="15" required>
          <small class="fin__erro">Digite o telefone com DDD.</small>
        </label>
        <label class="fin__campo">
          <span>E-mail</span>
          <input name="email" type="email" autocomplete="email" placeholder="seuemail@exemplo.com" required>
          <small class="fin__erro">Confira o e-mail.</small>
        </label>
        <button type="submit" class="fin__enviar">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>
          Enviar e abrir o WhatsApp
        </button>
        <p class="fin__aviso">Seus dados vão só para a VR Multimarcas, pelo WhatsApp, para fazer a simulação.</p>
      </form>
    </dialog>`);

  const dlg = document.getElementById("fin");
  const form = dlg.querySelector("form");
  const campo = (n) => form.elements[n];
  let motoAtual = null; // { nome, link } quando o botão já é de uma moto

  const checagens = {
    nome: (v) => v.trim().length >= 3,
    cpf: cpfValido,
    nascimento: nascimentoValido,
    tel: (v) => [10, 11].includes(so(v).length),
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  };
  function conferir(n) {
    const ok = checagens[n](campo(n).value);
    campo(n).closest(".fin__campo").classList.toggle("fin__campo--erro", !ok);
    campo(n).setAttribute("aria-invalid", String(!ok));
    return ok;
  }
  campo("cpf").addEventListener("input", (e) => (e.target.value = mascaraCpf(e.target.value)));
  campo("nascimento").addEventListener("input", (e) => (e.target.value = mascaraData(e.target.value)));
  campo("tel").addEventListener("input", (e) => (e.target.value = mascaraTel(e.target.value)));
  Object.keys(checagens).forEach((n) => {
    campo(n).addEventListener("blur", () => campo(n).value && conferir(n));
    campo(n).addEventListener("input", () => campo(n).closest(".fin__campo--erro") && conferir(n));
  });

  function abrir(moto) {
    motoAtual = moto;
    const temMoto = !!moto;
    document.getElementById("fin-moto").textContent = temMoto ? `${moto.nome} 0 km` : "";
    document.getElementById("fin-moto").hidden = !temMoto;
    form.querySelector(".fin__campo--moto").hidden = temMoto || !motos.length;
    dlg.showModal();
    document.documentElement.classList.add("fin-aberto");
  }
  function fechar() { dlg.close(); }
  dlg.addEventListener("close", () => document.documentElement.classList.remove("fin-aberto"));
  dlg.querySelector(".fin__fechar").addEventListener("click", fechar);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) fechar(); }); // clique fora da caixa

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const erros = Object.keys(checagens).filter((n) => !conferir(n));
    if (erros.length) { campo(erros[0]).focus(); return; }
    const escolhida = motoAtual || motos[campo("moto").value] || null;
    const linhas = [
      escolhida
        ? `Olá, VR Multimarcas! Quero simular o financiamento da ${escolhida.nome} 0 km.`
        : "Olá, VR Multimarcas! Quero simular o financiamento de uma moto 0 km.",
      "",
      `Nome: ${campo("nome").value.trim()}`,
      `CPF: ${mascaraCpf(campo("cpf").value)}`,
      `Data de nascimento: ${campo("nascimento").value}`,
      `Telefone: ${mascaraTel(campo("tel").value)}`,
      `E-mail: ${campo("email").value.trim()}`,
    ];
    if (escolhida?.link) linhas.push("", `${location.origin}${escolhida.link}`); // link no formato /<slug>
    const url = `https://wa.me/${WHATS}?text=${encodeURIComponent(linhas.join("\n"))}`;
    const janela = window.open(url, "_blank");
    if (!janela) location.href = url;
    fechar();
    form.reset();
  });

  // ---------- botões de simular ----------
  // pega qualquer link do WhatsApp cuja mensagem fale em simular (banner, menu, faixa, "Ver parcelas" da moto...)
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href*="wa.me/"]');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
    let msg = "";
    try { msg = new URL(a.href).searchParams.get("text") || ""; } catch { return; }
    if (!/simular/i.test(msg)) return;
    e.preventDefault();
    // "...financiamento da Honda PCX 2027 0 km..." ou "...parcelas da Honda PCX 2027 0 km..."; o link da moto vem na última linha
    const nome = msg.match(/(?:financiamento|parcelas) da (.+?) 0 km/i)?.[1];
    const link = msg.match(/\n(https?:\/\/\S+)\s*$/)?.[1];
    if (document.querySelector(".menu-painel.aberto")) document.querySelector(".menu-painel__fechar")?.click();
    abrir(nome ? { nome, link: link ? new URL(link).pathname : "" } : null);
  }, true);
})();
