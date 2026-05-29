/* ============================================
   MODFORGE — script.js
   ============================================
   HOW TO ADD / EDIT A MOD:
   1. Find the MODS array below
   2. Copy any existing object and paste it at the end
   3. Fill in: name, image, category, description, downloadUrl
   4. Save and deploy — done!
   ============================================ */

/* ── ✏️  EDIT YOUR MODS HERE ── */
const MODS = [
  {
    id: 1,
    name: "Swight Texture Pack V3",
    image: "swight-pack.png",
    category: "Texture Pack",
    description: "A sleek, high-performance PvP texture pack built for Bedrock Edition. Swight Pack V3 delivers ultra-clean item textures and weapon models that keep your eyes on the fight — not the clutter. Designed for competitive players who want every visual advantage.",
    downloadUrl: "https://www.mediafire.com/file/r8d46c42rqx1mz0/NotJunaid_Swight_Pack_V3.mcpack/file"
  },
  {
    id: 2,
    name: "Fast Totem",
    image: "fast-totem.png",
    category: "PvP",
    description: "Replaces the default totem of undying animation with a blazing-fast version. In intense PvP moments every frame counts — Fast Totem ensures the revival animation never slows you down. A must-have for any serious Bedrock PvP player.",
    downloadUrl: "https://www.mediafire.com/file/timbkktk7dpvhvg/Fast_Totem.mcpack/file"
  },
  {
    id: 3,
    name: "Glacier Client V6",
    image: "glacier-client.png",
    category: "Performance",
    description: "Glacier Client V6 is a powerful client-side optimisation and visual pack. Featuring the iconic bear logo, it brings smoother gameplay, improved rendering, and a cleaner UI to Minecraft Bedrock Edition. Compete at the highest level with Glacier.",
    downloadUrl: "https://www.mediafire.com/file/1bqs0cieksqkq2a/Glacier_Client_V6_%5BMain%5D.mcpack/file"
  },
  {
    id: 4,
    name: "Armor Durability Viewer",
    image: "durability-viewer.png",
    category: "Utility",
    description: "See the exact durability numbers for all your equipped armour, tools, and weapons at a glance — right on your HUD. Never be caught off guard by breaking gear mid-fight again. A simple but essential utility pack for any serious player.",
    downloadUrl: "https://www.mediafire.com/file/41l6zgvfo3f4tfu/DurabilityViewer.mcpack/file"
  },
  {
    id: 5,
    name: "FPS Counter",
    image: "fps-counter.png",
    category: "Utility",
    description: "Display your real-time FPS count directly on screen with this lightweight MCBE pack. Know exactly how your game is performing at every moment. Clean, minimal display that won't distract you from the action.",
    downloadUrl: "https://www.mediafire.com/file/oprnmfbraup68v2/Star_FPS_Counter_V-1.20.mcpack/file"
  },
  {
    id: 6,
    name: "Theobaldthebird Texture Pack",
    image: "theobaldthebird.png",
    category: "Texture Pack",
    description: "A unique and refined PvP texture pack inspired by Theobaldthebird's iconic style. Features clean, distinctive weapon and item textures that set you apart from the crowd. A fresh look for Minecraft Bedrock Edition with great in-game clarity.",
    downloadUrl: "https://www.mediafire.com/file/ng47vxgeky6ao98/Theobaldthebird_MCPE.mcpack/file"
  },
  {
    id: 7,
    name: "Sodium V5",
    image: "sodium-V5.png",
    category: "Performance",
    description: "The ultimate FPS booster for MCPE 1.21. Sodium V5 dramatically improves your frame rate, reduces stuttering and lag, and keeps your gameplay silky smooth even on lower-end devices. Get 999+ FPS and dominate without limits.",
    downloadUrl: "https://www.mediafire.com/file/i1t8n3mlywhmkq9/Sodium-Mod-V5-MCPE-1.21.mcpack/file"
  },
  {
    id: 8,
    name: "No Particles",
    image: "no-particles.png",
    category: "Performance",
    description: "Eliminate all distracting particle effects for a cleaner, faster, and smoother gameplay experience. Significantly reduces GPU load and stabilises your FPS — especially valuable during large battles where particle spam can tank your frames.",
    downloadUrl: "https://www.mediafire.com/file/5wdiiyv10fi9flk/No_Particles_%28MCPE%29.mcpack/file"
  },
  {
    id: 9,
    name: "Custom Crit Particles",
    image: "crit-particles.png",
    category: "PvP",
    description: "Replace the default hit particles with bold custom 'Crit!' text indicators. Every critical hit becomes satisfying and immediately visible. Perfect for tracking your damage output in the heat of battle — clean, clear, and impactful.",
    downloadUrl: "https://www.mediafire.com/file/jyafcbagp41bmt7/Crit_Particles.mcpack/file"
  },
  {
    id: 10,
    name: "Actions & Stuff",
    image: "actions-and-stuff.png",
    category: "Texture Pack",
    description: "A feature-rich addon that introduces new animations, interactions and behaviours to your Minecraft world. Actions & Stuff brings personality and life to everyday gameplay moments, making your Bedrock Edition experience feel fresh and dynamic.",
    downloadUrl: "https://www.mediafire.com/file/socbhp1wttg7l9t/Actions_And_Stuff.mcpack/file"
  },
  {
    id: 11,
    name: "Java Sweep Attack",
    image: "java-sweep.png",
    category: "PvP",
    description: "Bring the legendary Java Edition sweep attack mechanic to Bedrock Edition. Hit multiple enemies simultaneously with a wide sweeping sword strike — just like PC players do. A game-changing PvP advantage that Bedrock players have wanted for years.",
    downloadUrl: "https://www.mediafire.com/file/zcxngm1i5dg1l78/Sweeping_Swords_RP.mcpack/file"
  },
  {
    id: 12,
    name: "Leatherback 16x",
    image: "leatherback-16x.png",
    category: "Texture Pack",
    description: "A smooth, clean 16x PvP texture pack with crisp weapon and armour textures. Leatherback 16x is designed for high visual clarity and maximum FPS — the iconic teal aesthetic makes every item pop in the heat of combat.",
    downloadUrl: "https://www.mediafire.com/file/fxyeiawwq8m8oc5/Leatherback_16x.mcpack/file"
  },
  {
    id: 13,
    name: "Dahlia 16x",
    image: "dahila-16x.png",
    category: "Texture Pack",
    description: "A dark and dramatic 16x texture pack drenched in deep reds, purples, and smoky greys. Dahlia 16x turns every weapon into a menacing work of art. Stand out from every opponent with this striking, atmosphere-heavy visual overhaul.",
    downloadUrl: "https://www.mediafire.com/file/03uc7iauqbhha7a/Dahila_16x.mcpack/file"
  },
  {
    id: 14,
    name: "Fluorite 16x",
    image: "fluorite-16x.png",
    category: "Texture Pack",
    description: "A beautiful 16x pack with cool blue, grey and aqua tones inspired by the fluorite mineral. Crisp, clean weapon textures that look stunning under any lighting conditions. Smooth performance without sacrificing visual quality.",
    downloadUrl: "https://www.mediafire.com/file/4k01iwm35h9rnvo/Fluorite_16x.mcpack/file"
  },
  {
    id: 15,
    name: "RBW 16x",
    image: "rbw-16x.png",
    category: "Texture Pack",
    description: "One of the most popular 16x PvP texture packs available for Bedrock Edition. RBW 16x features ultra-sharp, clean textures with a distinctive style that gives you maximum visual clarity in any competitive scenario.",
    downloadUrl: "https://www.mediafire.com/file/7ei6k7iwv4a0xez/RBW_16x.mcpack/file"
  },
  {
    id: 16,
    name: "Mirage 16x",
    image: "mirage-16x.png",
    category: "Texture Pack",
    description: "A stunning 16x texture pack with beautiful deep-ocean aqua and cyan tones. Mirage 16x delivers clean PvP textures wrapped in a unique, atmospheric visual style. The sword looks absolutely incredible in action.",
    downloadUrl: "https://www.mediafire.com/file/8rj5iu38o81e5no/Mirage_16x.mcpack/file"
  },
  {
    id: 17,
    name: "Small Items",
    image: "small-items.png",
    category: "Utility",
    description: "Shrinks all dropped and held item models to a smaller, more compact size. Reduces visual clutter on the battlefield and makes it significantly easier to see enemies and the environment around you during intense combat scenarios.",
    downloadUrl: "https://www.mediafire.com/file/msyzsn5jshr1ho9/Small_Items.mcpack/file"
  },
  {
    id: 18,
    name: "3D Mace",
    image: "3d-mace.png",
    category: "PvP",
    description: "Transforms the Mace weapon into a fully realised, detailed 3D model with real depth and weight. The 3D Mace makes Minecraft's newest weapon look as powerful as it feels. A visual upgrade that makes every smash attack more satisfying.",
    downloadUrl: "https://www.mediafire.com/file/x1n2j2skr1xqlmc/3d_Mace.mcpack/file"
  },
  {
    id: 19,
    name: "PYES King 25K Pack",
    image: "pyes-king.png",
    category: "Texture Pack",
    description: "The legendary PYES King 25K texture pack — created to celebrate a massive milestone. Featuring custom animated swords, premium PvP textures and the iconic PYES KING branding. A collector's pack that also delivers serious competitive performance.",
    downloadUrl: "https://www.mediafire.com/file/953uow4vyaop6qn/PYES_KING_25K.mcpack/file"
  },
  {
    id: 20,
    name: "Marlow Vanilla V2",
    image: "marlow-vanilla.png",
    category: "Texture Pack",
    description: "A comprehensive vanilla+ texture pack that polishes Minecraft's classic look without losing its soul. Marlow Vanilla V2 features enhanced items, tools, weapons and armour with improved visual clarity — perfect for players who love the base game but want a clean edge.",
    downloadUrl: "https://www.mediafire.com/file/t7vhwc6ljyk1yjn/VANILLA_V2.mcpack/file"
  }
];

/* ─────────────────────────────────────────
   RENDER CARDS
───────────────────────────────────────── */
const grid = document.getElementById('modsGrid');

function renderCards(filter) {
  grid.innerHTML = '';
  const list = filter === 'all'
    ? MODS
    : MODS.filter(m => m.category === filter);

  if (list.length === 0) {
    grid.innerHTML = '<p style="color:var(--white-dim);grid-column:1/-1;text-align:center;padding:40px 0;">No mods found in this category.</p>';
    return;
  }

  list.forEach((mod, i) => {
    const card = document.createElement('div');
    card.className = 'mod-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.dataset.category = mod.category;
    card.innerHTML = `
      <div class="card__img-wrap">
        <img class="card__img" src="${mod.image}" alt="${mod.name}" loading="lazy" />
        <div class="card__overlay">
          <div class="card__overlay-icon">▶</div>
        </div>
      </div>
      <div class="card__body">
        <span class="card__category">${mod.category}</span>
        <h3 class="card__name">${mod.name}</h3>
        <p class="card__hint">Click to view &amp; download</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(mod));
    grid.appendChild(card);
  });
}

renderCards('all');

/* ─────────────────────────────────────────
   FILTER TABS
───────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
const overlay   = document.getElementById('modalOverlay');
const modalImg  = document.getElementById('modalImg');
const modalCat  = document.getElementById('modalCategory');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalDl   = document.getElementById('modalDownload');
const closeBtn  = document.getElementById('modalClose');

function openModal(mod) {
  modalImg.src        = mod.image;
  modalImg.alt        = mod.name;
  modalCat.textContent  = mod.category;
  modalName.textContent = mod.name;
  modalDesc.textContent = mod.description;
  modalDl.href        = mod.downloadUrl;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────── */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ─────────────────────────────────────────
   SCROLL-REVEAL
   Cards fade in as they enter the viewport
───────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll('.mod-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.45s ease, transform 0.45s ease, box-shadow 0.25s ease, border-color 0.25s';
    observer.observe(card);
  });
}

// Re-observe after filter re-render
const origRender = renderCards;
window.renderCardsObserved = function(filter) {
  origRender(filter);
  requestAnimationFrame(observeCards);
};

// Patch filter buttons to use observed render
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
    requestAnimationFrame(observeCards);
  };
});

// Initial observe
requestAnimationFrame(observeCards);

/* ─────────────────────────────────────────
   SMOOTH NAV HIGHLIGHT ON SCROLL
───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--green-light)'
      : '';
  });
}, { passive: true });
