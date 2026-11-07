/* Interacciones locales del concesionario. No necesita backend. */
const catalogData = [
  {id:"gratis",name:"Gama Gratis",desc:"Vehículos gratuitos para comenzar",categories:[
    {name:"Selección gratuita",icon:"✦",vehicles:[
      ["Moto Bagger",0,"Moto de estilo cruiser, cómoda y con una presencia clásica. Una opción gratuita para moverte por la ciudad."],
      ["Dinka Blista Compact",0,"Compacto ágil y fácil de llevar en calles estrechas. Tuneo opcional indicado por el servidor: 12.000$."],
      ["Declasse Stallion",0,"Muscle car de carácter clásico y conducción contundente. Tuneo opcional indicado por el servidor: 15.000$."]
    ]}
  ]},
  {id:"baja",name:"Gama Baja",desc:"Opciones accesibles para el día a día",categories:[
    {name:"Motos",icon:"🏍",vehicles:[
      ["Enduro",15000,"Moto ligera de orientación todoterreno, pensada para caminos y rutas fuera del asfalto."],
      ["Sánchez",17000,"Moto de campo versátil, adecuada para pistas irregulares y desplazamientos aventureros."],
      ["Sánchez Libery",17000,"Una variante de la Sánchez para quienes buscan una moto práctica con estilo propio."],
      ["Manchez",30000,"Moto de campo con carácter robusto, ideal para explorar terrenos variados."]
    ]},
    {name:"Coches de 2 puertas",icon:"🚘",vehicles:[
      ["ASBO",10000,"Compacto urbano de aspecto desenfadado, práctico para moverte y aparcar con facilidad."],
      ["Blista Kanjo",20000,"Compacto inspirado en la cultura tuning, ágil en ciudad y con personalidad deportiva."],
      ["Blade",28000,"Muscle car clásico de líneas largas y estilo americano, pensado para disfrutar de la carretera."],
      ["Sabre Turbo",30000,"Un clásico muscle con presencia y sonido contundente, ideal para un perfil de conducción tradicional."],
      ["Dukes",40000,"Muscle car de aspecto agresivo y carrocería robusta, con estética americana muy marcada."],
      ["Brioso R/A",45000,"Pequeño deportivo de respuesta vivaz, perfecto para calles estrechas y recorridos urbanos."],
      ["Sabre Turbo Custom",55000,"Versión personalizada del Sabre Turbo con un aspecto más distintivo y presencia de muscle clásico."],
      ["Bifta",85000,"Buggy ligero y abierto, especialmente apropiado para escapadas y conducción fuera de carretera."]
    ]},
    {name:"Coches de 4 puertas",icon:"🚗",vehicles:[
      ["Benefactor Schaffer V12",38000,"Berlina de lujo con carácter potente, adecuada para desplazamientos ejecutivos y uso diario."],
      ["Gallivanter Baller",45000,"SUV espacioso con postura elevada, pensado para combinar comodidad y presencia."],
      ["Enus Huntley",46000,"SUV de lujo con un diseño elegante, buena presencia y enfoque confortable."],
      ["Benefactor XLF",48000,"Berlina de estilo premium, sobria y adecuada para un personaje que busca elegancia."],
      ["Enus Cognocenti",50000,"Sedán de representación con aspecto distinguido, ideal para un perfil ejecutivo."],
      ["Karin Sultán",52000,"Berlina deportiva versátil, con una imagen inspirada en los coches de rally y conducción dinámica."]
    ]},
    {name:"Furgonetas",icon:"▰",vehicles:[
      ["Bravado Rumpo",15000,"Furgoneta funcional con espacio para tareas cotidianas y desplazamientos de trabajo."],
      ["BF Surfer",13000,"Furgoneta de aire clásico y playero, ideal para personajes con un estilo relajado."],
      ["Bravado Youga",17000,"Furgoneta práctica y espaciosa, adecuada para pequeños negocios y transporte cotidiano."],
      ["Brute Taco Van",50000,"Furgoneta de reparto de comida con aspecto comercial, perfecta para dar vida a un negocio de rol."],
      ["Zirconium Journey",16000,"Autocaravana amplia para viajes, escapadas y personajes que viven sobre ruedas."],
      ["Brute Boxville",50000,"Vehículo de reparto con caja cerrada, pensado para transportar mercancía dentro del rol."],
      ["Brute Boxville (PostOP)",50000,"Versión de reparto postal, ideal para representar trabajos logísticos y entregas."]
    ]}
  ]},
  {id:"media",name:"Gama Media",desc:"Más prestaciones, estilo y variedad",categories:[
    {name:"Motos",icon:"🏍",vehicles:[
      ["FCR - 1.000",50000,"Moto de estilo custom con una silueta marcada, para una conducción con personalidad."],
      ["Lectro",53000,"Moto eléctrica deportiva de diseño moderno, ideal para desplazamientos ágiles."],
      ["BF400",55000,"Moto de supermotard versátil, adecuada para moverse con soltura por ciudad y caminos."],
      ["Carbon RS",65000,"Moto deportiva ligera de aspecto exclusivo, centrada en una estética agresiva."],
      ["FCR1000 Custom",80000,"Versión personalizada de la FCR1000 con una imagen más exclusiva y detalles distintivos."]
    ]},
    {name:"Coches de 2 puertas",icon:"🚘",vehicles:[
      ["Futo",17000,"Coupé compacto de espíritu callejero, popular entre quienes disfrutan de la conducción técnica."],
      ["Futo GTX",23000,"Interpretación moderna y deportiva del Futo, con estética tuning y líneas más marcadas."],
      ["Banshee",80000,"Deportivo de alto rendimiento con silueta baja y una imagen clásica de coche americano."],
      ["Coquette D10",100000,"Deportivo moderno de diseño afilado, con presencia de supercoche y enfoque prestacional."],
      ["Calico GTF",125000,"Coupé deportivo inspirado en los coches de competición, con un estilo compacto y agresivo."],
      ["Jester RR",127000,"Deportivo moderno de aspecto racing, pensado para quienes buscan una estética de alto rendimiento."],
      ["Coquette D5",175000,"Deportivo elegante y potente, con una carrocería de líneas marcadas y presencia premium."],
      ["Bestia GTS",180000,"Gran turismo de aspecto exótico, ideal para combinar estilo y viajes por carretera."],
      ["10F",190000,"Coupé de lujo con diseño contemporáneo y una silueta deportiva muy reconocible."],
      ["10F Widebody",190000,"Versión de carrocería ancha del 10F, con una presencia más musculosa y deportiva."],
      ["Italy GTO",450000,"Superdeportivo de inspiración italiana, líneas esculturales y una imagen de alto nivel."]
    ]},
    {name:"Coches de 4 puertas",icon:"🚗",vehicles:[
      ["Pegassi Toros",170000,"SUV de lujo con diseño agresivo y una presencia imponente en carretera."],
      ["Cannis Frewcrawler",110000,"Todoterreno robusto con aspecto aventurero, pensado para rutas y caminos exigentes."],
      ["Ubermatch Revolter",69000,"Berlina deportiva de aspecto moderno, que combina una silueta elegante con carácter."],
      ["Ocelot Jugular",155000,"Sedán deportivo de líneas refinadas, adecuado para un perfil dinámico y sofisticado."],
      ["Obey Tailgater S",90000,"Berlina deportiva discreta y moderna, ideal para uso diario con un toque de rendimiento."],
      ["Pegassi Cimquemilla",107000,"SUV de lujo con presencia distinguida y un diseño llamativo para la ciudad."],
      ["Ubermatch Rebla GTS",165000,"SUV premium de aspecto deportivo, espacioso y preparado para destacar en la carretera."],
      ["Lampadaty Komoda",148000,"Berlina deportiva de estilo europeo, elegante y con una silueta contemporánea."],
      ["Albany V STR",155000,"Sedán de lujo con aspecto potente, ideal para un personaje que busca presencia."],
      ["Ubermatch Rhinehard",175000,"Familiar premium de líneas modernas, combina espacio y una imagen deportiva."]
    ]},
    {name:"Furgonetas",icon:"▰",vehicles:[
      ["Bravado Bison",32000,"Pick-up práctica con espacio de carga, apropiada para trabajos y actividades comerciales."],
      ["Vapid Bobcat XL",25000,"Pick-up de trabajo resistente, ideal para transportar herramientas y materiales."],
      ["Vapid Minivan",33000,"Monovolumen espacioso para transporte familiar o actividades profesionales."],
      ["Vapid Minivan (Custom)",75000,"Versión personalizada del Minivan, con un acabado más distintivo para uso diario."],
      ["Bravado Paradise",25000,"Furgoneta de estilo recreativo, perfecta para viajes y personajes de espíritu libre."],
      ["Bravado Youga Classic",77000,"Furgoneta de estilo clásico, espaciosa y con posibilidades para distintos negocios de rol."],
      ["Bravado Youga Classic (4x4)",500000,"Versión todoterreno de la Youga Classic, pensada para rutas y terrenos más complicados."],
      ["Bravado Rumpo (Custom)",90000,"Rumpo personalizada con una imagen más exclusiva, ideal para un negocio o personaje con estilo."]
    ]}
  ]},
  {id:"alta",name:"Gama Alta / VIP",desc:"Vehículos exclusivos y prestaciones superiores",categories:[
    {name:"Motos",icon:"🏍",vehicles:[
      ["Bati 801",87000,"Moto deportiva ligera, de aceleración vivaz y estética de competición."],
      ["Bati 801 RR",87000,"Versión de aspecto racing de la Bati 801, con una imagen deportiva y agresiva."],
      ["Akuma",98000,"Moto naked deportiva, ágil y directa, con un diseño compacto y musculoso."],
      ["Hakuchou Drag",170000,"Moto de gran potencia y perfil alargado, diseñada para una experiencia deportiva intensa."],
      ["Shinobi",200000,"Moto deportiva moderna con líneas afiladas y un aspecto premium."],
      ["Powersurge",300000,"Moto eléctrica de gama alta, con un diseño futurista y una presencia exclusiva."]
    ]},
    {name:"Coches de 2 puertas",icon:"🚘",vehicles:[
      ["Ardiente",155000,"Deportivo exótico con un diseño llamativo, ideal para destacar por las calles de la ciudad."],
      ["Champion",166000,"Coupé de lujo con estética refinada y una presencia deportiva de alta gama."],
      ["811",185000,"Superdeportivo de líneas aerodinámicas y silueta baja, pensado para amantes de la velocidad."],
      ["Issi Sport",190000,"Compacto deportivo con aspecto atrevido y una conducción de carácter dinámico."],
      ["Banshee GTS",300000,"Versión de alto nivel de la Banshee, con imagen moderna y carácter de superdeportivo."],
      ["Adder",500000,"Superdeportivo icónico de gran presencia, asociado al lujo y al alto rendimiento."],
      ["Enus Windsor",650000,"Coupé de lujo elegante y distinguido, pensado para una imagen sofisticada."],
      ["Enus Windsor Drop",800000,"Versión descapotable de lujo para recorrer la ciudad con estilo y exclusividad."]
    ]},
    {name:"Coches de 4 puertas",icon:"🚗",vehicles:[
      ["Ubermatch Sentinel GTS",220000,"Berlina premium con líneas deportivas, ideal para combinar elegancia y presencia."],
      ["Enus Super Diamond",750000,"Sedán de representación de lujo, con una imagen clásica y muy distinguida."],
      ["Enus Cognoscenti 55",850000,"Berlina ejecutiva de gama alta, diseñada para transmitir autoridad y refinamiento."]
    ]},
    {name:"Furgonetas",icon:"▰",vehicles:[
      ["Vapid Guardian",384000,"Pick-up de gran tamaño y aspecto imponente, apropiada para trabajos exigentes."],
      ["Benefactor Läufer",710000,"Vehículo de gama alta con una imagen exclusiva; confirma la configuración exacta disponible en el servidor."],
      ["Vapid Caracara 4x4",400000,"Pick-up todoterreno de gran presencia, preparada para caminos complicados y uso aventurero."]
    ]},
    {name:"Coche VIP · Unidad extremadamente limitada",icon:"✦",vip:true,vehicles:[
      ["Benefactor Krieger",30000000,"Superdeportivo VIP de disponibilidad extraordinaria. Según el concesionario, solo existen 4 unidades en el mundo del servidor."]
    ]}
  ]}
];

const catalogue = document.getElementById("catalogue");
const searchInput = document.getElementById("vehicle-search");
const vehicleSelect = document.getElementById("vehicle-select");
const selectedVehicle = document.getElementById("selected-vehicle");
const requestForm = document.getElementById("request-form");
const generatedWrap = document.getElementById("generated-wrap");
const generatedMessage = document.getElementById("generated-message");
const copyButton = document.getElementById("copy-message");
const copyStatus = document.getElementById("copy-status");
const clearSavedButton = document.getElementById("clear-saved");
const saveStatus = document.getElementById("save-status");
const STORAGE_KEY = "los-angeles-rp-concesionario-v3";
let restoringSavedData = false;

function saveLocalState() {
  if (restoringSavedData) return;
  try {
    const fields = {};
    requestForm.querySelectorAll("input[name], select[name], textarea[name]").forEach(field => {
      fields[field.name] = field.type === "checkbox" ? field.checked : field.value;
    });
    const state = { fields, generated: generatedMessage.value, generatedVisible: !generatedWrap.hidden, savedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (saveStatus) saveStatus.textContent = "Cambios guardados en este navegador.";
  } catch (error) {
    if (saveStatus) saveStatus.textContent = "No se pudo guardar en este navegador. Copia el ticket para conservarlo.";
  }
}

function restoreLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);
    if (!state || typeof state !== "object") return;
    restoringSavedData = true;
    Object.entries(state.fields || {}).forEach(([name, value]) => {
      const field = requestForm.elements.namedItem(name);
      if (!field) return;
      if (field.type === "checkbox") field.checked = Boolean(value);
      else field.value = String(value ?? "");
    });
    if (typeof state.generated === "string" && state.generated) {
      generatedMessage.value = state.generated;
      generatedWrap.hidden = !state.generatedVisible;
    }
    updateSelectedVehicle();
    if (saveStatus) saveStatus.textContent = "Se han recuperado los datos guardados en este navegador.";
  } catch (error) {
    if (saveStatus) saveStatus.textContent = "No se pudieron recuperar los datos guardados.";
  } finally {
    restoringSavedData = false;
  }
}

requestForm.addEventListener("input", saveLocalState);
requestForm.addEventListener("change", saveLocalState);
restoreLocalState();
const money = amount => new Intl.NumberFormat("es-ES").format(amount) + "$";
const allVehicles = [];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[char]);
}
function priceLabel(vehicle) {
  let text = money(vehicle.price);
  if (vehicle.name === "Dinka Blista Compact") text += ' <span class="price-note">(12.000$ tuneo)</span>';
  if (vehicle.name === "Declasse Stallion") text += ' <span class="price-note">(15.000$ tuneo)</span>';
  return text;
}
function buildCatalogue(query = "") {
  const q = query.trim().toLocaleLowerCase("es");
  let totalVisible = 0;
  catalogue.innerHTML = "";
  catalogData.forEach((tier, tierIndex) => {
    const tierDetails = document.createElement("details");
    tierDetails.className = "tier";
    tierDetails.open = Boolean(q);
    const tierVehicles = tier.categories.flatMap(category => category.vehicles.map(item => ({
      name:item[0],price:item[1],description:item[2],category:category.name,tier:tier.name,icon:category.icon,vip:Boolean(category.vip)
    })));
    const visibleTierVehicles = tierVehicles.filter(v => !q || `${v.name} ${v.category} ${v.tier}`.toLocaleLowerCase("es").includes(q));
    if (!visibleTierVehicles.length) return;
    totalVisible += visibleTierVehicles.length;
    tierDetails.innerHTML = `
      <summary class="tier-summary">
        <span class="tier-number">0${tierIndex+1}</span>
        <span class="tier-name">${escapeHTML(tier.name)}<span class="tier-description">${escapeHTML(tier.desc)}</span></span>
        <span class="tier-count">${visibleTierVehicles.length} ${visibleTierVehicles.length===1?"VEHÍCULO":"VEHÍCULOS"}</span>
        <span class="tier-arrow" aria-hidden="true">+</span>
      </summary>
      <div class="tier-content"></div>`;
    const content = tierDetails.querySelector(".tier-content");
    tier.categories.forEach(category => {
      const vehicles = category.vehicles.map(item => ({
        name:item[0],price:item[1],description:item[2],category:category.name,tier:tier.name,icon:category.icon,vip:Boolean(category.vip)
      })).filter(v => !q || `${v.name} ${v.category} ${v.tier}`.toLocaleLowerCase("es").includes(q));
      if (!vehicles.length) return;
      const section = document.createElement("section");
      section.className = "category";
      const heading = document.createElement("h3");
      heading.textContent = category.name;
      section.appendChild(heading);
      const grid = document.createElement("div");
      grid.className = "vehicle-grid";
      vehicles.forEach(v => {
        const card = document.createElement("details");
        card.className = `vehicle${v.vip ? " vip-vehicle" : ""}`;
        const tuneText = v.name === "Dinka Blista Compact" ? " · Tuneo: 12.000$" : v.name === "Declasse Stallion" ? " · Tuneo: 15.000$" : "";
        card.innerHTML = `
          <summary>
            <span class="vehicle-icon" aria-hidden="true">${v.vip ? "✦" : category.icon}</span>
            <span class="vehicle-name">${escapeHTML(v.name)}${v.vip ? '<span class="vip-tag">VIP · SOLO 4 UNIDADES</span>' : ''}</span>
            <span class="vehicle-price">${money(v.price)}</span>
            <span class="vehicle-chevron" aria-hidden="true">⌄</span>
          </summary>
          <div class="vehicle-description">
            <p>${escapeHTML(v.description)}${tuneText ? `<br><strong>Coste de tuneo:</strong>${escapeHTML(tuneText.replace(" · Tuneo:",""))}` : ""}</p>
            <a href="#solicitud" class="choose-vehicle" data-vehicle="${escapeHTML(v.name)}">Elegir este vehículo <span aria-hidden="true">↗</span></a>
          </div>`;
        grid.appendChild(card);
      });
      section.appendChild(grid);
      content.appendChild(section);
    });
    catalogue.appendChild(tierDetails);
  });
  document.getElementById("no-results").hidden = totalVisible > 0;
  if (!q) {
    // Mantener todas las gamas cerradas al cargar para facilitar la navegación.
    catalogue.querySelectorAll(".tier").forEach(tier => tier.open = false);
  }
}

catalogData.forEach(tier => tier.categories.forEach(category => category.vehicles.forEach(item => {
  const vehicle = {name:item[0],price:item[1],description:item[2],category:category.name,tier:tier.name,vip:Boolean(category.vip)};
  allVehicles.push(vehicle);
  const option = document.createElement("option");
  option.value = vehicle.name;
  option.textContent = `${vehicle.name} — ${money(vehicle.price)} · ${tier.name}`;
  vehicleSelect.appendChild(option);
})));

buildCatalogue();
searchInput.addEventListener("input", () => buildCatalogue(searchInput.value));
catalogue.addEventListener("click", event => {
  const link = event.target.closest("[data-vehicle]");
  if (!link) return;
  const name = link.getAttribute("data-vehicle");
  vehicleSelect.value = name;
  updateSelectedVehicle();
});
vehicleSelect.addEventListener("change", updateSelectedVehicle);

function updateSelectedVehicle() {
  const vehicle = allVehicles.find(v => v.name === vehicleSelect.value);
  if (!vehicle) {
    selectedVehicle.hidden = true;
    selectedVehicle.textContent = "";
    return;
  }
  selectedVehicle.hidden = false;
  selectedVehicle.textContent = `${vehicle.tier} · ${vehicle.category} · Precio indicado: ${money(vehicle.price)}${vehicle.name === "Dinka Blista Compact" ? " (tuneo opcional: 12.000$)" : vehicle.name === "Declasse Stallion" ? " (tuneo opcional: 15.000$)" : ""}`;
}

requestForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!requestForm.reportValidity()) return;
  const data = new FormData(requestForm);
  const vehicle = allVehicles.find(v => v.name === data.get("vehicle"));
  if (!vehicle) return;
  const notes = String(data.get("notes") || "").trim();
  const time = String(data.get("timeRange") || "").trim();
  const message = [
    "🎫 **SOLICITUD DE VEHÍCULO — LOS ÁNGLES RP**",
    "",
    "**Nombre real:** " + String(data.get("realName")).trim(),
    "**Nombre y apellido IC:** " + String(data.get("characterName")).trim(),
    "**ID / datos IC:** " + (String(data.get("characterId") || "").trim() || "No indicado"),
    "",
    "**Vehículo solicitado:** " + vehicle.name,
    "**Gama:** " + vehicle.tier,
    "**Categoría:** " + vehicle.category,
    "**Precio indicado:** " + money(vehicle.price) + ((vehicle.name === "Dinka Blista Compact") ? " (tuneo opcional: 12.000$)" : (vehicle.name === "Declasse Stallion") ? " (tuneo opcional: 15.000$)" : ""),
    vehicle.name === "Benefactor Krieger" ? "**Disponibilidad:** Unidad limitada; confirmar existencia y condiciones con el equipo." : "",
    "",
    "**Disponibilidad para realizar el trámite:** " + data.get("availability"),
    "**Hora aproximada:** " + (time || "Flexible / por acordar"),
    notes ? "**Notas adicionales:** " + notes : "",
    "",
    "Entiendo que esta solicitud no confirma una compra ni reserva el vehículo. Espero la revisión del equipo y seguiré el procedimiento oficial del servidor."
  ].filter(line => line !== "").join("\n");
  generatedMessage.value = message;
  generatedWrap.hidden = false;
  saveLocalState();
  copyStatus.textContent = "";
  generatedWrap.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",block:"nearest"});
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(generatedMessage.value);
    copyStatus.textContent = "Mensaje copiado. Ya puedes pegarlo en tu ticket de Discord.";
  } catch (error) {
    generatedMessage.focus();
    generatedMessage.select();
    const copied = document.execCommand("copy");
    copyStatus.textContent = copied ? "Mensaje copiado. Ya puedes pegarlo en tu ticket de Discord." : "No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente.";
  }
});

clearSavedButton.addEventListener("click", () => {
  const confirmed = window.confirm("¿Quieres borrar los datos del formulario y el ticket guardado en este navegador? Esta acción no se puede deshacer.");
  if (!confirmed) return;
  try { localStorage.removeItem(STORAGE_KEY); } catch (error) { /* El formulario se limpia igualmente. */ }
  requestForm.reset();
  generatedMessage.value = "";
  generatedWrap.hidden = true;
  selectedVehicle.hidden = true;
  selectedVehicle.textContent = "";
  copyStatus.textContent = "";
  if (saveStatus) saveStatus.textContent = "Datos guardados borrados de este navegador.";
});

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.getElementById("main-nav");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  mainNav.classList.toggle("is-open", open);
});
mainNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
document.getElementById("current-year").textContent = new Date().getFullYear();
