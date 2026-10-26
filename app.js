/* ============================================================
   LÓGICA DEL CURSO INTERACTIVO
   Navegación · progreso · quizzes · herramientas
   ============================================================ */

(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const content = document.getElementById("content");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");

  let current = 0;
  const visited = new Set();

  /* ---------- Construir menú lateral ---------- */
  COURSE.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.className = "nav__item";
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="nav__icon">${item.icon}</span>
      <span class="nav__label">${item.label}</span>
      <span class="nav__check">✓</span>`;
    btn.addEventListener("click", () => goTo(i));
    nav.appendChild(btn);
  });

  /* ---------- Renderizar sección ---------- */
  function goTo(index) {
    if (index < 0 || index >= COURSE.length) return;
    current = index;
    const item = COURSE[index];

    content.innerHTML = item.render();
    content.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
    content.focus();

    visited.add(index);
    updateNav();
    updateProgress();
    updateFooter();
    initInteractions(item);

    // cerrar menú en móvil
    sidebar.classList.remove("open");
  }

  function updateNav() {
    document.querySelectorAll(".nav__item").forEach((b, i) => {
      b.classList.toggle("is-active", i === current);
      b.classList.toggle("is-done", visited.has(i));
    });
  }

  function updateProgress() {
    const pct = Math.round((visited.size / COURSE.length) * 100);
    progressBar.style.width = pct + "%";
    progressLabel.textContent = "Progreso: " + pct + "%";
  }

  function updateFooter() {
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === COURSE.length - 1;
    nextBtn.textContent = current === COURSE.length - 1 ? "Finalizado ✓" : "Siguiente ▶";
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));
  menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

  /* ---------- Inicializar interacciones por sección ---------- */
  function initInteractions(item) {
    if (item.id === "act-pw") initPasswordTool();
    if (item.id === "act-phish") initPhish();
    if (item.id === "quiz") initQuiz();
  }

  /* ---------- Verificador de contraseñas ---------- */
  function initPasswordTool() {
    const input = document.getElementById("pwInput");
    const bar = document.getElementById("pwBar");
    const label = document.getElementById("pwLabel");
    const checks = document.getElementById("pwChecks");
    if (!input) return;

    // Guardar el texto base (sin el ícono) de cada ítem
    checks.querySelectorAll("li").forEach((li) => {
      li.dataset.text = li.textContent.replace("◻️", "").replace("✅", "").trim();
    });

    input.addEventListener("input", () => {
      const v = input.value;
      const rules = {
        len: v.length >= 12,
        upper: /[A-Z]/.test(v),
        lower: /[a-z]/.test(v),
        num: /[0-9]/.test(v),
        sym: /[^A-Za-z0-9]/.test(v)
      };
      let score = 0;
      Object.keys(rules).forEach((k) => {
        const li = checks.querySelector(`[data-k="${k}"]`);
        if (rules[k]) {
          score++;
          li.classList.add("ok");
          li.textContent = "✅ " + li.dataset.text;
        } else {
          li.classList.remove("ok");
          li.textContent = "◻️ " + li.dataset.text;
        }
      });

      const levels = [
        { w: "10%", c: "#d93030", t: "Muy débil" },
        { w: "30%", c: "#ff7900", t: "Débil" },
        { w: "55%", c: "#f4b400", t: "Media" },
        { w: "78%", c: "#8bc34a", t: "Buena" },
        { w: "100%", c: "#39a900", t: "Fuerte 💪" }
      ];
      const lvl = v.length === 0 ? { w: "0%", c: "#eee", t: "—" } : levels[score - 1] || levels[0];
      bar.style.width = lvl.w;
      bar.style.background = lvl.c;
      label.textContent = "Nivel: " + lvl.t;
      label.style.color = lvl.c === "#eee" ? "var(--texto)" : lvl.c;
    });
  }

  /* ---------- Simulador de phishing ---------- */
  function initPhish() {
    const opts = document.querySelectorAll("#phishOpts .quiz__opt");
    const fb = document.getElementById("phishFb");
    opts.forEach((btn) => {
      btn.addEventListener("click", () => {
        const correct = btn.dataset.correct === "true";
        opts.forEach((b) => {
          b.disabled = true;
          if (b.dataset.correct === "true") b.classList.add("correct");
        });
        if (!correct) btn.classList.add("wrong");
        fb.classList.add("show", correct ? "ok" : "no");
        fb.textContent = correct
          ? "✅ ¡Correcto! Nunca hagas clic en enlaces sospechosos. Verifica siempre entrando tú mismo al sitio oficial."
          : "❌ Cuidado. Esa acción pone en riesgo tus datos. La opción segura es no hacer clic y verificar por tu cuenta.";
      });
    });
  }

  /* ---------- Quiz final ---------- */
  function initQuiz() {
    const box = document.getElementById("quizBox");
    const submit = document.getElementById("quizSubmit");
    const result = document.getElementById("quizResult");
    const scoreEl = document.getElementById("quizScore");
    const msgEl = document.getElementById("quizMsg");
    if (!box) return;

    box.innerHTML = QUIZ_QUESTIONS.map((q, qi) => `
      <div class="card quiz__q" data-q="${qi}">
        <p class="quiz__q-text">${qi + 1}. ${q.q}</p>
        ${q.opts.map((o, oi) => `
          <button class="quiz__opt" data-q="${qi}" data-o="${oi}">${o}</button>
        `).join("")}
      </div>
    `).join("");

    const selected = {};
    box.querySelectorAll(".quiz__opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qi = btn.dataset.q;
        selected[qi] = parseInt(btn.dataset.o, 10);
        box.querySelectorAll(`.quiz__opt[data-q="${qi}"]`).forEach((b) => {
          b.style.borderColor = "";
          b.style.background = "";
        });
        btn.style.borderColor = "var(--verde)";
        btn.style.background = "var(--verde-claro)";
      });
    });

    submit.addEventListener("click", () => {
      let correct = 0;
      QUIZ_QUESTIONS.forEach((q, qi) => {
        const chosen = selected[qi];
        box.querySelectorAll(`.quiz__opt[data-q="${qi}"]`).forEach((b) => {
          b.disabled = true;
          const oi = parseInt(b.dataset.o, 10);
          if (oi === q.answer) b.classList.add("correct");
          else if (oi === chosen) b.classList.add("wrong");
        });
        if (chosen === q.answer) correct++;
      });

      const total = QUIZ_QUESTIONS.length;
      const pct = Math.round((correct / total) * 100);
      const passed = correct >= 4;
      result.classList.add("show");
      result.style.background = passed ? "var(--verde-claro)" : "#fdeaea";
      scoreEl.textContent = correct + " / " + total + "  (" + pct + "%)";
      scoreEl.style.color = passed ? "var(--verde-osc)" : "var(--rojo)";
      msgEl.textContent = passed
        ? "🎉 ¡Aprobaste! Has demostrado las competencias del curso."
        : "Repasa los módulos y vuelve a intentarlo. ¡Tú puedes!";
      submit.disabled = true;
      result.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------- Teclado: flechas ← → ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });

  /* ---------- Inicio ---------- */
  goTo(0);
})();
