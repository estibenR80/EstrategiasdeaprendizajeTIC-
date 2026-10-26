/* ============================================================
   DATOS DEL CURSO
   Competencias Digitales y Seguridad en Internet
   Estructura tipo SENA (formación complementaria virtual)
   Cada objeto = una "estación" / sección navegable
   ============================================================ */

const COURSE = [
  /* ---------- 0. BIENVENIDA ---------- */
  {
    id: "bienvenida",
    icon: "🏠",
    label: "Bienvenida",
    render: () => `
      <section>
        <span class="eyebrow">Formación Complementaria Virtual</span>
        <h1>Competencias Digitales y Seguridad en Internet</h1>
        <p class="lead">Un recorrido práctico para aprender a usar la tecnología de forma segura, responsable y provechosa, tanto en la vida personal como laboral.</p>

        <div class="card">
          <h2>🎯 Propósito de la experiencia</h2>
          <p>Al finalizar este programa de formación, estarás en capacidad de <strong>aplicar competencias digitales básicas y buenas prácticas de seguridad</strong> para proteger tu información, tus cuentas y tu identidad en los entornos digitales, reconociendo riesgos y actuando con criterio frente a ellos.</p>
        </div>

        <div class="grid grid--3">
          <div class="feature">
            <div class="feature__icon">🧭</div>
            <h3>Modalidad</h3>
            <p>100% virtual y autogestionada. Avanza a tu ritmo por las estaciones.</p>
          </div>
          <div class="feature">
            <div class="feature__icon">⏱️</div>
            <h3>Duración</h3>
            <p>40 horas de formación distribuidas en 4 módulos.</p>
          </div>
          <div class="feature">
            <div class="feature__icon">👥</div>
            <h3>Dirigido a</h3>
            <p>Estudiantes, trabajadores y público general que use internet a diario.</p>
          </div>
        </div>

        <div class="teacher-card">
          <div class="teacher-card__avatar">👩‍🏫</div>
          <div>
            <span class="teacher-card__role">Docente facilitadora</span>
            <strong class="teacher-card__name">Melba Camacho</strong>
            <span class="teacher-card__desc">Te acompañará durante todo el recorrido de aprendizaje.</span>
          </div>
        </div>

        <div class="callout callout--info">
          <strong>¿Cómo recorrer el curso?</strong>
          Usa el menú lateral <em>Ruta de aprendizaje</em> o los botones <em>Anterior / Siguiente</em>. Cada estación que visitas se marca con ✓ y suma a tu barra de progreso.
        </div>
      </section>`
  },

  /* ---------- 1. INFORMACIÓN DEL PROGRAMA ---------- */
  {
    id: "programa",
    icon: "📋",
    label: "El programa",
    render: () => `
      <section>
        <span class="eyebrow">Información general</span>
        <h1>Estructura del programa de formación</h1>
        <p class="lead">Este curso sigue la lógica de una formación por competencias: partimos de una competencia general y la desarrollamos a través de resultados de aprendizaje (RAP).</p>

        <table class="data">
          <tr><th>Denominación del programa</th><td>Competencias Digitales y Seguridad en Internet</td></tr>
          <tr><th>Docente facilitadora</th><td>Melba Camacho</td></tr>
          <tr><th>Tipo de formación</th><td>Complementaria virtual</td></tr>
          <tr><th>Duración</th><td>40 horas</td></tr>
          <tr><th>Competencia</th><td>Aplicar herramientas digitales y prácticas de seguridad de la información de acuerdo con buenas prácticas y normativa vigente.</td></tr>
        </table>

        <h2>Resultados de aprendizaje (RAP)</h2>
        <ul class="rap-list">
          <li><span class="rap-num">1</span><div><strong>Reconocer</strong> las competencias digitales básicas necesarias para desenvolverse en entornos virtuales de manera eficiente.</div></li>
          <li><span class="rap-num">2</span><div><strong>Aplicar</strong> medidas de protección de cuentas y datos personales, como contraseñas robustas y verificación en dos pasos.</div></li>
          <li><span class="rap-num">3</span><div><strong>Identificar</strong> amenazas frecuentes (phishing, fraudes, malware) y actuar de forma segura ante ellas, protegiendo la privacidad y la huella digital.</div></li>
        </ul>

        <div class="callout">
          <strong>Evidencias que entregarás</strong>
          Conocimiento (quiz final), desempeño (análisis de un caso de phishing) y producto (creación de una contraseña robusta verificada). Las encontrarás distribuidas en las estaciones de actividades.
        </div>
      </section>`
  },

  /* ---------- 2. MÓDULO 1: COMPETENCIAS DIGITALES ---------- */
  {
    id: "mod1",
    icon: "💻",
    label: "Módulo 1 · Competencias digitales",
    render: () => `
      <section>
        <span class="eyebrow">Módulo 1 · RAP 1</span>
        <h1>Competencias digitales básicas</h1>
        <p class="lead">Las competencias digitales son el conjunto de conocimientos y habilidades para usar la tecnología de forma segura, crítica y creativa en el trabajo, el estudio y la vida diaria.</p>

        <h2>Las 5 áreas de la competencia digital</h2>
        <p>El marco europeo <strong>DigComp</strong> organiza las competencias digitales en cinco áreas que te servirán como mapa. 👉 <strong>Haz clic en cada tarjeta</strong> para descubrir más:</p>
        <div class="grid grid--3" id="digcompGrid">
          <button class="flip-card" data-area="0">
            <span class="flip-card__icon">🔎</span>
            <span class="flip-card__title">1. Información y datos</span>
            <span class="flip-card__hint">Clic para saber más</span>
          </button>
          <button class="flip-card" data-area="1">
            <span class="flip-card__icon">💬</span>
            <span class="flip-card__title">2. Comunicación</span>
            <span class="flip-card__hint">Clic para saber más</span>
          </button>
          <button class="flip-card" data-area="2">
            <span class="flip-card__icon">🎨</span>
            <span class="flip-card__title">3. Creación de contenido</span>
            <span class="flip-card__hint">Clic para saber más</span>
          </button>
          <button class="flip-card" data-area="3">
            <span class="flip-card__icon">🛡️</span>
            <span class="flip-card__title">4. Seguridad</span>
            <span class="flip-card__hint">Clic para saber más</span>
          </button>
          <button class="flip-card" data-area="4">
            <span class="flip-card__icon">🧩</span>
            <span class="flip-card__title">5. Resolución de problemas</span>
            <span class="flip-card__hint">Clic para saber más</span>
          </button>
        </div>

        <div class="area-detail" id="areaDetail">
          <div class="area-detail__inner">
            <span class="area-detail__icon" id="adIcon">👆</span>
            <div>
              <h3 id="adTitle">Selecciona un área arriba</h3>
              <p id="adText">Al hacer clic en cualquiera de las 5 tarjetas verás aquí una explicación ampliada, un ejemplo real y un consejo práctico.</p>
              <div id="adExtra"></div>
            </div>
          </div>
        </div>

        <h2>Material de formación</h2>
        <p>Refuerza lo aprendido con estos recursos audiovisuales. Haz clic para abrirlos:</p>
        <div class="grid grid--2">
          <a class="res-card" href="https://www.youtube.com/results?search_query=qu%C3%A9+son+las+competencias+digitales+explicaci%C3%B3n" target="_blank" rel="noopener">
            <span class="res-card__play">▶</span>
            <div>
              <strong>Video: ¿Qué son las competencias digitales?</strong>
              <span>Introducción en video (YouTube)</span>
            </div>
          </a>
          <a class="res-card" href="https://www.youtube.com/results?search_query=marco+digcomp+competencias+digitales" target="_blank" rel="noopener">
            <span class="res-card__play">▶</span>
            <div>
              <strong>Video: El marco europeo DigComp</strong>
              <span>Las 5 áreas explicadas (YouTube)</span>
            </div>
          </a>
        </div>

        <h3>📖 Lectura complementaria</h3>
        <div class="card">
          <ul style="margin-bottom:0;">
            <li><strong>¿Qué es DigComp?</strong> Es el Marco Europeo de Competencias Digitales para la Ciudadanía, una referencia para saber qué habilidades digitales necesita una persona hoy.</li>
            <li><strong>¿Por qué importa en el trabajo?</strong> Cada vez más empleos exigen manejar herramientas digitales, cuidar la información y colaborar en línea de forma segura.</li>
            <li><strong>Aprendizaje continuo:</strong> la tecnología cambia rápido; desarrollar estas competencias es un proceso permanente, no un destino.</li>
          </ul>
        </div>

        <div class="callout callout--info">
          <strong>Para reflexionar</strong>
          De estas 5 áreas, ¿en cuál te sientes más fuerte y en cuál crees que necesitas mejorar? Identificarlo es el primer paso del aprendizaje autónomo.
        </div>
      </section>`
  },

  /* ---------- 3. MÓDULO 2: CONTRASEÑAS ---------- */
  {
    id: "mod2",
    icon: "🔑",
    label: "Módulo 2 · Contraseñas seguras",
    render: () => `
      <section>
        <span class="eyebrow">Módulo 2 · RAP 2</span>
        <h1>Contraseñas seguras y protección de cuentas</h1>
        <p class="lead">Tu contraseña es la llave de tu vida digital. Una contraseña débil es como dejar la puerta de tu casa abierta.</p>

        <h2>¿Qué hace fuerte a una contraseña?</h2>
        <ul>
          <li><strong>Longitud:</strong> mínimo 12 caracteres. Mientras más larga, mejor.</li>
          <li><strong>Variedad:</strong> combina mayúsculas, minúsculas, números y símbolos.</li>
          <li><strong>Imprevisibilidad:</strong> evita datos personales (nombre, fecha de nacimiento, "123456").</li>
          <li><strong>Única:</strong> no reutilices la misma contraseña en varios servicios.</li>
        </ul>

        <div class="callout callout--warn">
          <strong>Truco: usa frases de contraseña</strong>
          En lugar de "Pedro2024", crea una frase fácil de recordar y difícil de adivinar: <em>"MiPerro#Come3Veces!AlDia"</em>. Es larga, variada y memorable.
        </div>

        <h2>Capas extra de protección</h2>
        <div class="grid grid--2">
          <div class="feature"><div class="feature__icon">📲</div><h3>Verificación en dos pasos (2FA)</h3><p>Añade un segundo factor (un código al celular o una app como Google Authenticator). Aunque roben tu clave, no entran sin el segundo paso.</p></div>
          <div class="feature"><div class="feature__icon">🗄️</div><h3>Gestor de contraseñas</h3><p>Apps como Bitwarden o el gestor del navegador crean y guardan claves únicas por ti. Solo memorizas una clave maestra.</p></div>
        </div>

        <div class="callout callout--danger">
          <strong>Nunca hagas esto</strong>
          Compartir tu contraseña por mensaje, anotarla en papeles visibles, usar la misma para el banco y las redes, o guardarla en un archivo llamado "claves.txt".
        </div>
      </section>`
  },

  /* ---------- 4. ACTIVIDAD: VERIFICADOR DE CONTRASEÑA ---------- */
  {
    id: "act-pw",
    icon: "🧪",
    label: "Actividad · Crea tu contraseña",
    isActivity: true,
    render: () => `
      <section>
        <span class="eyebrow">Evidencia de producto</span>
        <h1>Laboratorio: crea una contraseña robusta</h1>
        <p class="lead">Escribe una contraseña y observa en tiempo real qué tan segura es. Ajústala hasta alcanzar el nivel <strong>Fuerte</strong>.</p>

        <div class="card pwtool">
          <label for="pwInput"><strong>Escribe tu contraseña de práctica:</strong></label>
          <input type="text" id="pwInput" placeholder="Empieza a escribir..." autocomplete="off" />
          <div class="pwmeter"><div class="pwmeter__bar" id="pwBar"></div></div>
          <p id="pwLabel" style="font-weight:600; margin-bottom:12px;">Nivel: —</p>
          <ul class="pwchecks" id="pwChecks">
            <li data-k="len">◻️ Al menos 12 caracteres</li>
            <li data-k="upper">◻️ Contiene mayúsculas</li>
            <li data-k="lower">◻️ Contiene minúsculas</li>
            <li data-k="num">◻️ Contiene números</li>
            <li data-k="sym">◻️ Contiene símbolos (!@#$...)</li>
          </ul>
        </div>

        <div class="callout callout--info">
          <strong>💡 Consejo</strong>
          No uses aquí una contraseña real que utilices en tus cuentas. Es solo un ejercicio de práctica.
        </div>
      </section>`
  },

  /* ---------- 5. MÓDULO 3: AMENAZAS ---------- */
  {
    id: "mod3",
    icon: "🎣",
    label: "Módulo 3 · Phishing y fraudes",
    render: () => `
      <section>
        <span class="eyebrow">Módulo 3 · RAP 3</span>
        <h1>Phishing, fraudes y malware</h1>
        <p class="lead">Los ciberdelincuentes no suelen "romper" la tecnología: engañan a las personas. Aprender a reconocer sus trucos es tu mejor defensa.</p>

        <h2>Amenazas más frecuentes</h2>
        <table class="data">
          <tr><th>Amenaza</th><th>¿En qué consiste?</th><th>Señal de alerta</th></tr>
          <tr><td><strong>Phishing</strong></td><td>Correos o mensajes que suplantan a una entidad real para robar tus datos.</td><td>Urgencia, enlaces raros, pide contraseñas.</td></tr>
          <tr><td><strong>Smishing</strong></td><td>Phishing por SMS o WhatsApp.</td><td>"Ganaste un premio", links acortados.</td></tr>
          <tr><td><strong>Malware</strong></td><td>Software malicioso (virus, troyanos, ransomware).</td><td>Archivos adjuntos y descargas no confiables.</td></tr>
          <tr><td><strong>Ingeniería social</strong></td><td>Manipulación psicológica para que entregues información.</td><td>Alguien "de soporte" pide tus claves.</td></tr>
        </table>

        <h2>Material de formación</h2>
        <div class="video-wrap">
          <iframe src="https://www.youtube.com/embed/Y7zNlEMDmI4" title="Qué es el phishing" allowfullscreen loading="lazy"></iframe>
        </div>

        <div class="callout callout--danger">
          <strong>Regla de oro</strong>
          Ninguna entidad seria (banco, empresa, gobierno) te pedirá tu contraseña completa o un código de verificación por correo, SMS o llamada. Ante la duda, no hagas clic: entra escribiendo tú mismo la dirección oficial.
        </div>
      </section>`
  },

  /* ---------- 6. ACTIVIDAD: SIMULADOR PHISHING ---------- */
  {
    id: "act-phish",
    icon: "🕵️",
    label: "Actividad · Detecta el phishing",
    isActivity: true,
    render: () => `
      <section>
        <span class="eyebrow">Evidencia de desempeño</span>
        <h1>Caso práctico: ¿correo legítimo o phishing?</h1>
        <p class="lead">Analiza el siguiente correo. Pasa el cursor sobre las zonas <span class="clue">resaltadas</span> para descubrir las pistas, y luego responde.</p>

        <div class="mail">
          <div class="mail__head">
            <div><strong>De:</strong> <span class="clue" title="El dominio no es el oficial del banco (bancodigital.com ≠ banco-digital-seguro.net). ¡Alerta!">soporte@banco-digital-seguro.net</span></div>
            <div><strong>Para:</strong> usuario@correo.com</div>
            <div><strong>Asunto:</strong> <span class="clue" title="El tono de urgencia y amenaza es una táctica típica del phishing.">⚠️ URGENTE: Su cuenta será bloqueada en 24 horas</span></div>
          </div>
          <div class="mail__body">
            <p>Estimado cliente,</p>
            <p>Hemos detectado actividad sospechosa en su cuenta. Para evitar el bloqueo <span class="clue" title="Crear urgencia y miedo empuja a actuar sin pensar.">debe verificar sus datos inmediatamente</span>.</p>
            <p>Haga clic aquí: <span class="clue" title="El texto dice banco oficial, pero el enlace real apunta a otro sitio. Nunca hagas clic sin verificar.">www.banco-digital.verificacion-cuenta.net/login</span></p>
            <p>Ingrese su <span class="clue" title="Un banco JAMÁS pide la contraseña completa ni el PIN por correo.">usuario, contraseña y PIN</span> para confirmar su identidad.</p>
            <p>Atentamente,<br/>El equipo de <span class="clue" title="Mensaje genérico, sin tu nombre real. Las entidades suelen personalizar.">Seguridad</span></p>
          </div>
        </div>

        <div class="card">
          <p class="quiz__q-text">Según las pistas, ¿qué deberías hacer con este correo?</p>
          <div id="phishOpts">
            <button class="quiz__opt" data-correct="false">Hacer clic en el enlace e ingresar mis datos rápido para no perder la cuenta.</button>
            <button class="quiz__opt" data-correct="false">Responder el correo preguntando si es verdadero.</button>
            <button class="quiz__opt" data-correct="true">No hacer clic, eliminarlo y, si tengo dudas, entrar al banco escribiendo yo mismo la dirección oficial.</button>
            <button class="quiz__opt" data-correct="false">Reenviarlo a mis contactos para advertirles con el mismo enlace.</button>
          </div>
          <div class="quiz__feedback" id="phishFb"></div>
        </div>
      </section>`
  },

  /* ---------- 7. MÓDULO 4: PRIVACIDAD ---------- */
  {
    id: "mod4",
    icon: "🌐",
    label: "Módulo 4 · Privacidad y huella digital",
    render: () => `
      <section>
        <span class="eyebrow">Módulo 4 · RAP 3</span>
        <h1>Privacidad, huella digital y ciudadanía digital</h1>
        <p class="lead">Todo lo que publicas, buscas o compartes deja un rastro: tu huella digital. Aprende a gestionarla para proteger tu reputación y tu futuro.</p>

        <h2>¿Qué es la huella digital?</h2>
        <p>Es el conjunto de datos que dejas al navegar: publicaciones, fotos, comentarios, ubicaciones, compras y búsquedas. Puede ser <strong>activa</strong> (lo que publicas a propósito) o <strong>pasiva</strong> (lo que se recoge sin que lo notes, como cookies).</p>

        <div class="grid grid--2">
          <div class="feature"><div class="feature__icon">🔒</div><h3>Cuida tu privacidad</h3><p>Revisa la configuración de privacidad de tus redes. Comparte solo con quien decidas y limita datos sensibles (dirección, teléfono, ubicación en tiempo real).</p></div>
          <div class="feature"><div class="feature__icon">🤝</div><h3>Ciudadanía digital</h3><p>Trata a los demás con respeto, verifica antes de compartir y no participes en el ciberacoso. Lo que es delito fuera de línea, también lo es en internet.</p></div>
        </div>

        <h2>Buenas prácticas de privacidad</h2>
        <ul>
          <li>Piensa antes de publicar: ¿estarías cómodo si lo viera tu familia o un empleador?</li>
          <li>Desconfía de cuestionarios y apps que piden permisos excesivos.</li>
          <li>Cierra sesión en equipos compartidos y usa navegación privada cuando sea necesario.</li>
          <li>Mantén tus dispositivos actualizados y con antivirus.</li>
        </ul>

        <div class="callout callout--warn">
          <strong>Dato clave</strong>
          La información en internet es difícil de borrar por completo. La mejor estrategia es prevenir: piensa dos veces antes de compartir.
        </div>
      </section>`
  },

  /* ---------- 8. QUIZ FINAL ---------- */
  {
    id: "quiz",
    icon: "✅",
    label: "Evaluación final",
    isActivity: true,
    render: () => `
      <section>
        <span class="eyebrow">Evidencia de conocimiento</span>
        <h1>Evaluación final del curso</h1>
        <p class="lead">Responde las 6 preguntas. Necesitas acertar al menos 4 para aprobar. ¡Mucho éxito!</p>
        <div id="quizBox"></div>
        <button class="btn btn--primary" id="quizSubmit" style="margin-top:8px;">Calificar evaluación</button>
        <div class="quiz__result" id="quizResult">
          <div class="score" id="quizScore"></div>
          <p id="quizMsg"></p>
        </div>
      </section>`
  },

  /* ---------- 9. EVALUACIÓN / RÚBRICA ---------- */
  {
    id: "rubrica",
    icon: "📊",
    label: "Rúbrica de evaluación",
    render: () => `
      <section>
        <span class="eyebrow">Criterios de evaluación</span>
        <h1>Rúbrica y lista de chequeo</h1>
        <p class="lead">Así se valora el aprendizaje alcanzado en el curso. Estos criterios están alineados con los resultados de aprendizaje (RAP).</p>

        <table class="data">
          <tr><th>Criterio de evaluación</th><th>Evidencia</th><th>Peso</th></tr>
          <tr><td>Reconoce las áreas de la competencia digital.</td><td>Quiz final (conocimiento)</td><td>25%</td></tr>
          <tr><td>Crea una contraseña robusta aplicando los requisitos.</td><td>Laboratorio de contraseña (producto)</td><td>25%</td></tr>
          <tr><td>Identifica correctamente un intento de phishing y actúa de forma segura.</td><td>Caso práctico (desempeño)</td><td>25%</td></tr>
          <tr><td>Aplica buenas prácticas de privacidad y ciudadanía digital.</td><td>Quiz final + reflexión</td><td>25%</td></tr>
        </table>

        <h2>Lista de chequeo (autoevaluación)</h2>
        <div class="card">
          <ul class="pwchecks" style="font-size:.98rem;">
            <li class="ok">✔️ Reconozco las 5 áreas de la competencia digital.</li>
            <li class="ok">✔️ Sé crear y gestionar contraseñas seguras.</li>
            <li class="ok">✔️ Activo la verificación en dos pasos en mis cuentas.</li>
            <li class="ok">✔️ Identifico correos y mensajes de phishing.</li>
            <li class="ok">✔️ Gestiono mi privacidad y mi huella digital.</li>
          </ul>
        </div>

        <div class="callout">
          <strong>Escala de valoración sugerida</strong>
          Superior (90-100), Alto (80-89), Básico (60-79), Bajo (menos de 60). Se aprueba con nivel Básico o superior.
        </div>
      </section>`
  },

  /* ---------- 10. CIERRE ---------- */
  {
    id: "cierre",
    icon: "🎓",
    label: "Cierre y reflexión",
    render: () => `
      <section>
        <span class="eyebrow">Fin del recorrido</span>
        <div class="badge-final">
          <div class="emoji">🎓</div>
          <h2>¡Felicitaciones!</h2>
          <p>Has completado el recorrido de <strong>Competencias Digitales y Seguridad en Internet</strong>.</p>
        </div>

        <h2>Reflexión final</h2>
        <p>Para cerrar tu proceso, tómate un momento para responder (mentalmente o por escrito):</p>
        <ul>
          <li>¿Qué fortaleza identificaste en tus competencias digitales?</li>
          <li>¿Qué práctica de seguridad vas a aplicar desde hoy?</li>
          <li>¿Cómo esta experiencia protege tu información y tu identidad digital?</li>
        </ul>

        <div class="callout callout--info">
          <strong>Sigue aprendiendo</strong>
          La seguridad digital evoluciona constantemente. Mantente curioso, actualiza tus dispositivos y comparte estas buenas prácticas con tu familia y tu equipo de trabajo.
        </div>

        <p style="margin-top:20px; color:var(--texto-suave);">Gracias por recorrer este ambiente de aprendizaje. 🛡️<br/><strong>Docente facilitadora:</strong> Melba Camacho</p>
      </section>`
  }
];

/* Detalle ampliado de las 5 áreas DigComp (Módulo 1) */
const DIGCOMP_AREAS = [
  {
    icon: "🔎",
    title: "1. Información y alfabetización de datos",
    text: "Es la capacidad de buscar, filtrar, evaluar y organizar información digital, distinguiendo fuentes confiables de la desinformación (fake news).",
    extra: "<strong>Ejemplo real:</strong> antes de compartir una noticia, verificas la fuente, la fecha y si otros medios serios la confirman.<br/><strong>Consejo:</strong> desconfía de titulares alarmistas y contrasta siempre con al menos dos fuentes."
  },
  {
    icon: "💬",
    title: "2. Comunicación y colaboración",
    text: "Interactuar, compartir y colaborar con otras personas usando herramientas digitales, aplicando normas de respeto conocidas como netiqueta.",
    extra: "<strong>Ejemplo real:</strong> trabajar un documento en equipo por Google Docs o coordinar tareas por correo con un tono respetuoso.<br/><strong>Consejo:</strong> cuida el tono, evita escribir en MAYÚSCULAS (equivale a gritar) y respeta la privacidad de los demás."
  },
  {
    icon: "🎨",
    title: "3. Creación de contenido digital",
    text: "Producir y editar contenidos (textos, imágenes, videos, presentaciones) y conocer los derechos de autor y las licencias de uso.",
    extra: "<strong>Ejemplo real:</strong> diseñar una infografía en Canva usando imágenes con licencia libre y citando tus fuentes.<br/><strong>Consejo:</strong> no uses cualquier imagen de internet; busca recursos de libre uso (Creative Commons)."
  },
  {
    icon: "🛡️",
    title: "4. Seguridad",
    text: "Proteger tus dispositivos, tus datos personales, tu privacidad y tu bienestar digital frente a riesgos y amenazas. ¡Es el foco central de este curso!",
    extra: "<strong>Ejemplo real:</strong> usar contraseñas robustas, activar la verificación en dos pasos y reconocer correos de phishing.<br/><strong>Consejo:</strong> mantén tus equipos actualizados y nunca compartas tus claves."
  },
  {
    icon: "🧩",
    title: "5. Resolución de problemas",
    text: "Usar la tecnología para resolver necesidades reales, tomar decisiones informadas y seguir aprendiendo de forma autónoma.",
    extra: "<strong>Ejemplo real:</strong> cuando una app falla, buscas la solución en tutoriales o foros y la aplicas por tu cuenta.<br/><strong>Consejo:</strong> no temas experimentar; equivocarse y buscar soluciones es parte del aprendizaje digital."
  }
];

/* Preguntas del quiz final */
const QUIZ_QUESTIONS = [
  {
    q: "¿Cuál de estas es una característica de una contraseña segura?",
    opts: ["Usar tu fecha de nacimiento", "Tener al menos 12 caracteres combinando tipos", "Usar '123456' para recordarla fácil", "Usar la misma en todas tus cuentas"],
    answer: 1
  },
  {
    q: "El phishing consiste principalmente en...",
    opts: ["Mejorar la velocidad de internet", "Suplantar entidades para robar tus datos", "Un tipo de antivirus", "Una red social"],
    answer: 1
  },
  {
    q: "¿Qué es la verificación en dos pasos (2FA)?",
    opts: ["Escribir la contraseña dos veces", "Un segundo factor de seguridad además de la clave", "Cambiar la clave cada dos días", "Compartir la clave con un amigo"],
    answer: 1
  },
  {
    q: "Si un banco te pide por correo tu contraseña completa y tu PIN, deberías...",
    opts: ["Enviarlos de inmediato", "Desconfiar: un banco nunca los pide así", "Llamar a un amigo para que los envíe", "Publicarlos en redes"],
    answer: 1
  },
  {
    q: "La huella digital es...",
    opts: ["Tu contraseña principal", "El rastro de datos que dejas al usar internet", "Un virus informático", "El nombre de tu red wifi"],
    answer: 1
  },
  {
    q: "¿Cuál NO es una de las 5 áreas de la competencia digital (DigComp)?",
    opts: ["Información y datos", "Seguridad", "Comunicación", "Reparación de hardware"],
    answer: 3
  }
];
