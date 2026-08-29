const STORAGE_KEY = "hs_fortress_defenders_v1";

const RANKS = [
  [0, "Recruit"],
  [80, "Watch Cadet"],
  [180, "Gatekeeper"],
  [300, "Wall Warden"],
  [450, "Shield Bearer"],
  [650, "Fortress Knight"],
  [900, "Haven Guardian"],
];

const SHIELDS = [
  {
    id: "passwords",
    icon: "🛡️",
    title: "Passwords",
    blurb: "The first gate of the fortress. Weak keys invite every thief.",
    missions: [
      {
        type: "choice",
        q: "Which password is strongest for a family streaming account?",
        prompt: "Pick the key that would take longest to crack.",
        options: [
          { t: "Sunshine123", ok: false, why: "A common word plus numbers is easy for attackers to guess." },
          { t: "Flute-Maple-River-91!", ok: true, why: "A long unique passphrase is much harder to crack and easier to remember." },
          { t: "Password2026", ok: false, why: "Dictionary words plus the year are among the first things attackers try." },
          { t: "familyname", ok: false, why: "Names and personal details are weak and easy to research." },
        ],
      },
      {
        type: "choice",
        q: "What should a family do instead of reusing one password everywhere?",
        prompt: "Reused passwords turn one leak into many break-ins.",
        options: [
          { t: "Write every password on a sticky note by the router", ok: false, why: "Physical notes near devices are easy for visitors or thieves to find." },
          { t: "Use a password manager and unique passwords", ok: true, why: "A manager stores unique strong passwords so one leak does not open every door." },
          { t: "Use the same password but add the site name at the end", ok: false, why: "Predictable patterns still fail when one site is breached." },
          { t: "Never change passwords once they work", ok: false, why: "Known-breached passwords should be replaced immediately." },
        ],
      },
    ],
  },
  {
    id: "mfa",
    icon: "🔐",
    title: "2-Step Verification",
    blurb: "A second lock on the gate. Even stolen keys are not enough.",
    missions: [
      {
        type: "choice",
        q: "A text says: Your bank froze your account. Reply with the 6-digit code we just sent. What do you do?",
        prompt: "Attackers often trick people into handing over their own 2-step codes.",
        options: [
          { t: "Reply with the code so the account can be unlocked", ok: false, why: "That hands the attacker the second lock. Banks do not ask you to text codes back." },
          { t: "Ignore it and sign in only through the official app or website", ok: true, why: "Never share one-time codes. Open the official app yourself if anything looks wrong." },
          { t: "Forward the code to a friend for advice", ok: false, why: "Codes should never leave the device that requested them." },
          { t: "Call the number in the text", ok: false, why: "The number in a scam text belongs to the attacker." },
        ],
      },
    ],
  },
  {
    id: "wifi",
    icon: "📶",
    title: "Wi-Fi",
    blurb: "The digital front door. An open network is an unlocked gate.",
    missions: [
      {
        type: "choice",
        q: "Which home Wi-Fi setup is safest?",
        prompt: "Your router is the front door of the house network.",
        options: [
          { t: "Network name: FamilyWiFi  Password: 12345678", ok: false, why: "Default-style short numeric passwords are trivial to break." },
          { t: "Open network with no password so guests can hop on easily", ok: false, why: "Anyone nearby can join and watch traffic." },
          { t: "WPA3 or WPA2 with a long unique passphrase, guest network for visitors", ok: true, why: "Modern encryption plus a guest network keeps strangers off family devices." },
          { t: "Hide the network name and use WEP", ok: false, why: "Hiding the name does little, and WEP is obsolete and breakable." },
        ],
      },
    ],
  },
  {
    id: "devices",
    icon: "📱",
    title: "Devices",
    blurb: "Phones, tablets, and laptops are the walls. Updates patch the cracks.",
    missions: [
      {
        type: "choice",
        q: "A pop-up on a phone says Storage full — tap to install cleaner now. The app is not from the official store. What now?",
        prompt: "Fake cleaners are a classic way malware walks through the gate.",
        options: [
          { t: "Install it. Storage warnings are urgent.", ok: false, why: "Urgency is the bait. Sideloaded cleaners are often malware." },
          { t: "Close it and only install apps from the official store / trusted source", ok: true, why: "Official stores plus device updates are the safest default for families." },
          { t: "Give it every permission so it can optimize the phone", ok: false, why: "Extra permissions are exactly what attackers want." },
          { t: "Email the APK to yourself so you can install it later", ok: false, why: "That spreads a risky file instead of deleting it." },
        ],
      },
    ],
  },
  {
    id: "scams",
    icon: "🎣",
    title: "Scam Awareness",
    blurb: "Phishers wear borrowed uniforms. Spot the costume before you open the gate.",
    missions: [
      {
        type: "choice",
        q: "Which email is the phishing attempt?",
        prompt: "From: PayPal Security <support@paypa1-secure-login.com>\nSubject: Unusual login — confirm in 15 minutes or your funds freeze\n\nHello customer,\nClick here immediately to verify your identity:\nhttp://paypa1-secure-login.com/verify",
        options: [
          { t: "This is legitimate because it uses the PayPal name", ok: false, why: "Anyone can put a brand name in the From field." },
          { t: "This is phishing: misspelled domain, urgency, and a look-alike link", ok: true, why: "paypa1 with a 1, a countdown, and a non-official link are classic tells." },
          { t: "It is safe if you hover and the link looks close enough", ok: false, why: "Close is not official. Always type the real site yourself." },
          { t: "Safe because it asks you to verify identity", ok: false, why: "Verification language is one of the most common lures." },
        ],
      },
      {
        type: "choice",
        q: "A caller says they are from Microsoft and your PC has a virus. They want remote access. What do you do?",
        prompt: "Tech-support scams try to get inside the fortress by sounding official.",
        options: [
          { t: "Give access so they can remove the virus", ok: false, why: "Real Microsoft does not cold-call homes for this." },
          { t: "Hang up. If needed, contact the company through a number you look up yourself", ok: true, why: "Never accept unsolicited remote access. You start the call on a number you verify." },
          { t: "Pay the $299 cleanup license with a gift card", ok: false, why: "Gift-card payment is a bright-red scam flag." },
          { t: "Read them your Windows product key", ok: false, why: "Do not share license keys or codes with strangers." },
        ],
      },
    ],
  },
  {
    id: "backups",
    icon: "💾",
    title: "Backups",
    blurb: "A second copy of the treasury. Ransomware loses if you can restore.",
    missions: [
      {
        type: "choice",
        q: "What is the strongest simple backup plan for a family?",
        prompt: "One copy in one place is not a backup.",
        options: [
          { t: "Keep photos only on one phone", ok: false, why: "Lost, stolen, or encrypted phones take everything with them." },
          { t: "3-2-1 idea: copies on the device, another local drive, and one offsite/cloud copy", ok: true, why: "Multiple copies in different places survive theft, fire, and ransomware." },
          { t: "Email yourself the files once and never again", ok: false, why: "A single old copy goes stale and still lives in one account." },
          { t: "Screenshot everything instead of backing up", ok: false, why: "Screenshots are incomplete and hard to restore." },
        ],
      },
    ],
  },
  {
    id: "browsing",
    icon: "🌐",
    title: "Safe Browsing",
    blurb: "Every link is a drawbridge. Check it before you lower the gate.",
    missions: [
      {
        type: "choice",
        q: "Which address is the real lock screen for a bank named northstar-bank.com?",
        prompt: "Look-alike URLs are built to fool hurried eyes.",
        options: [
          { t: "https://northstar-bank.com/login", ok: true, why: "Exact official domain plus HTTPS is the one you want." },
          { t: "http://northstar-bank.com.secure-check.net/login", ok: false, why: "The real site is hidden. The actual domain here is secure-check.net." },
          { t: "https://northstar-bank.com.secure-login.ru", ok: false, why: "Everything before the last two parts is decoration." },
          { t: "https://n0rthstar-bank.com/login", ok: false, why: "A zero instead of an o is a classic look-alike trick." },
        ],
      },
    ],
  },
  {
    id: "kids",
    icon: "👧",
    title: "Kids Online",
    blurb: "Young defenders need training, not just filters. Talk beats silence.",
    missions: [
      {
        type: "choice",
        q: "A child gets a message from a new friend asking to keep a secret and move the chat off the game. Best family move?",
        prompt: "Grooming and scams both start with secrecy and a platform switch.",
        options: [
          { t: "Tell the child never to mention it so they are not embarrassed", ok: false, why: "Silence is what the stranger wants. Kids need an easy way to tell a trusted adult." },
          { t: "Stay on the official app, do not switch chats, tell a trusted adult, and report the account", ok: true, why: "No secrets, no off-platform moves, and an adult in the loop is the fortress rule." },
          { t: "Send a photo so the friend knows they are real", ok: false, why: "Photos and personal details should never be the price of a friendship." },
          { t: "Give out the home address so they can send a gift", ok: false, why: "Location and identity stay inside the family fortress." },
        ],
      },
    ],
  },
];

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { score: 0, completed: {}, answers: 0, correct: 0 };
  } catch {
    return { score: 0, completed: {}, answers: 0, correct: 0 };
  }
}
function saveState(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}
let state = loadState();

function rankFor(score) {
  let rank = RANKS[0][1];
  for (const [min, name] of RANKS) if (score >= min) rank = name;
  return rank;
}
function shieldsCleared() {
  return SHIELDS.filter((s) => (state.completed[s.id] || 0) >= s.missions.length).length;
}
function updateHud() {
  document.getElementById("hud-score").textContent = state.score;
  document.getElementById("hud-shields").textContent = `${shieldsCleared()}/8`;
  document.getElementById("hud-rank").textContent = rankFor(state.score);
}

function el(html) {
  const d = document.createElement("div");
  d.innerHTML = html.trim();
  return d.firstElementChild;
}

function showScreen(name, extra) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  if (name === "home") app.appendChild(renderHome());
  if (name === "map") app.appendChild(renderMap());
  if (name === "mission") app.appendChild(renderMission(extra.shieldIndex, extra.missionIndex));
  if (name === "complete") app.appendChild(renderComplete());
  updateHud();
}

function renderHome() {
  const cleared = shieldsCleared();
  const node = el(`
    <section class="hero">
      <div class="badge">Public training app · Free for everyone</div>
      <h1>Defend the Digital Fortress</h1>
      <p>Cyber threats do not wait for a specialist. Fortress Defenders turns HavenShield’s 8 Shields of Digital Safety into short missions anyone can play — kids, parents, and small teams.</p>
      <div class="cta-row">
        <button onclick="showScreen('map')">Enter the Fortress</button>
        <button class="ghost" onclick="resetProgress()">Reset progress</button>
      </div>
      <div class="progress"><span style="width:${(cleared / 8) * 100}%"></span></div>
      <p class="tiny">${cleared} of 8 shields secured · Rank: ${rankFor(state.score)}</p>
      <div class="grid">
        <article class="card"><h3>Spot the phish</h3><p>Read real-style lures and mark the trap before it opens the gate.</p></article>
        <article class="card"><h3>Build stronger habits</h3><p>Passwords, 2-step verification, Wi-Fi, backups, and kids-online rules.</p></article>
        <article class="card"><h3>Play anywhere</h3><p>Works in the browser on phones and computers. Progress stays on this device.</p></article>
      </div>
    </section>
  `);
  return node;
}

function renderMap() {
  const cards = SHIELDS.map((s, i) => {
    const done = state.completed[s.id] || 0;
    const locked = i > 0 && (state.completed[SHIELDS[i - 1].id] || 0) < SHIELDS[i - 1].missions.length;
    const status = done >= s.missions.length ? "done" : locked ? "locked" : "";
    const label = done >= s.missions.length ? "Secured" : locked ? "Locked" : `${done}/${s.missions.length} missions`;
    return `
      <article class="card">
        <span class="badge ${status}">${s.icon} ${label}</span>
        <h3>${s.title}</h3>
        <p>${s.blurb}</p>
        <div style="margin-top:12px">
          <button ${locked ? "disabled style='opacity:.45'" : ""} onclick="startShield(${i})">
            ${done >= s.missions.length ? "Replay" : locked ? "Clear previous shield" : "Defend"}
          </button>
        </div>
      </article>`;
  }).join("");
  return el(`
    <section>
      <div class="hero" style="margin-bottom:16px">
        <h1>The 8 Shields</h1>
        <p>Clear each shield to raise the fortress walls. Missions are short on purpose — finish one at the dinner table.</p>
        <div class="cta-row">
          <button class="ghost" onclick="showScreen('home')">Back</button>
          ${shieldsCleared() === 8 ? `<button onclick="showScreen('complete')">View commander seal</button>` : ""}
        </div>
      </div>
      <div class="grid">${cards}</div>
    </section>
  `);
}

function startShield(i) {
  const done = state.completed[SHIELDS[i].id] || 0;
  const idx = done >= SHIELDS[i].missions.length ? 0 : done;
  showScreen("mission", { shieldIndex: i, missionIndex: idx });
}

function renderMission(si, mi) {
  const shield = SHIELDS[si];
  const mission = shield.missions[mi];
  const wrap = el(`
    <section class="mission">
      <div class="tiny">${shield.icon} ${shield.title} · Mission ${mi + 1} of ${shield.missions.length}</div>
      <h2>${mission.q}</h2>
      <div class="prompt">${escapeHtml(mission.prompt)}</div>
      <div class="choices" id="choices"></div>
      <div id="feedback"></div>
    </section>
  `);
  const box = wrap.querySelector("#choices");
  mission.options.forEach((opt, idx) => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = opt.t;
    b.onclick = () => answer(si, mi, idx, wrap);
    box.appendChild(b);
  });
  return wrap;
}

function answer(si, mi, idx, wrap) {
  const shield = SHIELDS[si];
  const mission = shield.missions[mi];
  const chosen = mission.options[idx];
  const buttons = [...wrap.querySelectorAll(".choice")];
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (mission.options[i].ok) b.classList.add("correct");
    if (i === idx && !chosen.ok) b.classList.add("wrong");
  });
  state.answers += 1;
  if (chosen.ok) {
    state.correct += 1;
    state.score += 40;
    state.completed[shield.id] = Math.max(state.completed[shield.id] || 0, mi + 1);
  } else {
    state.score = Math.max(0, state.score + 10);
  }
  saveState(state);
  updateHud();
  const nextMi = mi + 1;
  const shieldDone = (state.completed[shield.id] || 0) >= shield.missions.length;
  const more = nextMi < shield.missions.length;
  wrap.querySelector("#feedback").innerHTML = `
    <div class="result">
      <h3>${chosen.ok ? "Gate held." : "Breach spotted — study the lesson."}</h3>
      <p>${escapeHtml(chosen.why)}</p>
      <div class="cta-row" style="justify-content:flex-start;margin-top:14px">
        ${more && chosen.ok ? `<button onclick="showScreen('mission', {shieldIndex:${si}, missionIndex:${nextMi}})">Next mission</button>` : ""}
        ${more && !chosen.ok ? `<button onclick="showScreen('mission', {shieldIndex:${si}, missionIndex:${mi}})">Try this gate again</button>` : ""}
        ${!more || shieldDone ? `<button onclick="${shieldsCleared() === 8 ? "showScreen('complete')" : "showScreen('map')"}">${shieldsCleared() === 8 ? "Claim commander seal" : "Return to shields"}</button>` : ""}
        <button class="ghost" onclick="showScreen('map')">Map</button>
      </div>
    </div>`;
}

function renderComplete() {
  return el(`
    <section class="hero">
      <div class="badge done">Commander seal earned</div>
      <h1>The fortress stands.</h1>
      <p>You cleared all 8 HavenShields. Share this free trainer with a family, a classroom, or a small team. Real security is a habit, not a product page.</p>
      <p class="tiny">Score ${state.score} · Accuracy ${state.answers ? Math.round((state.correct / state.answers) * 100) : 0}% · Rank ${rankFor(state.score)}</p>
      <div class="cta-row">
        <button onclick="showScreen('map')">Replay any shield</button>
        <a class="btn ghost" href="https://hvnshield.com" target="_blank" rel="noopener">Visit HavenShield</a>
      </div>
    </section>
  `);
}

function resetProgress() {
  if (!confirm("Reset local fortress progress on this device?")) return;
  state = { score: 0, completed: {}, answers: 0, correct: 0 };
  saveState(state);
  showScreen("home");
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">");
}

window.showScreen = showScreen;
window.startShield = startShield;
window.resetProgress = resetProgress;
showScreen("home");
