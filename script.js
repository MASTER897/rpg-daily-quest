const STORAGE_KEY = "pixel_guild_rpg_v5";
const TODO_REWARD = { xp: 10, gold: 4 };
const SKILL_REWARD = { xp: 40, gold: 15 };
const JOURNAL_REWARD = { xp: 15, gold: 6 };
const DAILY_BONUS_GOLD = 25;

const DEMO_SPRITES = {
  potion: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="6" y="1" width="4" height="2" fill="#a855f7"/>
    <rect x="7" y="3" width="2" height="2" fill="#e2e8f0"/>
    <rect x="5" y="5" width="6" height="2" fill="#94a3b8"/>
    <rect x="4" y="7" width="8" height="6" fill="#f43f5e"/>
    <rect x="5" y="8" width="2" height="2" fill="#fda4af"/>
    <rect x="5" y="13" width="6" height="2" fill="#be123c"/>
  </svg>`,
  knight: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="5" y="2" width="6" height="5" fill="#94a3b8"/>
    <rect x="6" y="4" width="4" height="2" fill="#1e293b"/>
    <rect x="7" y="4" width="1" height="1" fill="#38bdf8"/>
    <rect x="9" y="4" width="1" height="1" fill="#38bdf8"/>
    <rect x="4" y="7" width="8" height="5" fill="#64748b"/>
    <rect x="6" y="8" width="4" height="3" fill="#facc15"/>
    <rect x="5" y="12" width="2" height="3" fill="#475569"/>
    <rect x="9" y="12" width="2" height="3" fill="#475569"/>
  </svg>`,
  tile: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="0" y="0" width="16" height="4" fill="#4ade80"/>
    <rect x="2" y="4" width="3" height="2" fill="#22c55e"/>
    <rect x="10" y="4" width="4" height="2" fill="#22c55e"/>
    <rect x="0" y="4" width="16" height="12" fill="#78350f"/>
    <rect x="2" y="7" width="3" height="2" fill="#92400e"/>
    <rect x="9" y="10" width="4" height="3" fill="#92400e"/>
    <rect x="4" y="12" width="2" height="2" fill="#451a03"/>
  </svg>`,
};

const SKILL_PATHS = [
  {
    key: "fullstack",
    title: "💻 Jalur Full Stack Developer",
    subtitle: "Selesaikan semua modul + to-do #FullStack buat buka Master of Full Stack",
    placeholder: "Tambah materi Full Stack (misal: Next.js / Docker)...",
    todoTag: "FullStack",
    fillClass: "fs-fill",
    midTitleId: "frontend",
    midCount: 3,
    midMsg: "⚡ Gelar Terbuka: Frontend Crafter!",
    masterTitleId: "master_fullstack",
    masterMsg: "👑 SELAMAT! Tag Gelar 'Master of Full Stack' Terbuka!",
  },
  {
    key: "cyber",
    title: "🛡️ Jalur Cybersecurity",
    subtitle: "Selesaikan semua modul + to-do #Cybersecurity buat buka Master of Cybersecurity",
    placeholder: "Tambah materi Cyber (misal: Pentest / Burp Suite)...",
    todoTag: "Cybersecurity",
    fillClass: "cyber-fill",
    midTitleId: "scout",
    midCount: 3,
    midMsg: "🔍 Gelar Terbuka: Security Scout!",
    masterTitleId: "master_cyber",
    masterMsg: "🛡️ SELAMAT! Tag Gelar 'Master of Cybersecurity' Terbuka!",
  },
  {
    key: "pixelart",
    title: "🎨 Jalur Pixel Art",
    subtitle: "Tamatkan latihan Pixel Art + kursus Udemy + to-do #PixelArt buat buka Master of Pixel Art",
    placeholder: "Tambah materi Pixel Art (misal: Animasi / Isometric)...",
    todoTag: "PixelArt",
    fillClass: "pixel-fill",
    midTitleId: "pixel_crafter",
    midCount: 3,
    midMsg: "🖌️ Gelar Terbuka: Pixel Crafter!",
    masterTitleId: "master_pixelart",
    masterMsg: "🎨 SELAMAT! Tag Gelar 'Master of Pixel Art' Terbuka!",
  },
  {
    key: "gamedev",
    title: "🎮 Jalur Game Developer",
    subtitle: "Tamatkan Croptails + Udemy Godot 4 + to-do #GameDev buat buka Master of Game Dev",
    placeholder: "Tambah materi Game Dev (misal: Godot GDScript / Shaders)...",
    todoTag: "GameDev",
    fillClass: "gamedev-fill",
    midTitleId: "gamedev_crafter",
    midCount: 3,
    midMsg: "🕹️ Gelar Terbuka: Game Dev Crafter!",
    masterTitleId: "master_gamedev",
    masterMsg: "🎮 SELAMAT! Tag Gelar 'Master of Game Dev' Terbuka!",
  },
];

const RPG_TITLES = [
  { id: "apprentice", label: "🌱 Guild Novice", req: "Gelar awal saat memulai perjalanan.", style: "default" },
  { id: "noob_cyber", label: "🐣 Noob Cybersecurity", req: "Gelar pemula Cybersecurity (langsung aktif & siap pakai!).", style: "cyber" },
  { id: "noob_gamedev", label: "🕹️ Noob Game Developer", req: "Gelar pemula Game Developer (langsung aktif & siap pakai!).", style: "gamedev" },
  { id: "frontend", label: "⚡ Frontend Crafter", req: "Selesaikan min. 3 modul Full Stack.", style: "default" },
  { id: "master_fullstack", label: "👑 Master of Full Stack", req: "Selesaikan 100% jalur Full Stack Developer!", style: "master" },
  { id: "scout", label: "🔍 Security Scout", req: "Selesaikan min. 3 modul Cybersecurity.", style: "cyber" },
  { id: "master_cyber", label: "🛡️ Master of Cybersecurity", req: "Selesaikan 100% jalur Cybersecurity!", style: "cyber" },
  { id: "pixel_crafter", label: "🖌️ Pixel Crafter", req: "Selesaikan min. 3 modul Pixel Art.", style: "pixel" },
  { id: "master_pixelart", label: "🎨 Master of Pixel Art", req: "Selesaikan 100% jalur Pixel Art!", style: "pixel" },
  { id: "gamedev_crafter", label: "🕹️ Game Dev Crafter", req: "Selesaikan min. 3 modul Game Dev.", style: "gamedev" },
  { id: "master_gamedev", label: "🎮 Master of Game Dev", req: "Selesaikan 100% jalur Game Developer!", style: "gamedev" },
  { id: "legendary_gamedev", label: "🏛️ Legendary Game Architect", req: "Apex di atas Master: wajib raih Master of Game Dev dulu + min. 45 modul/to-do #GameDev ATAU 2+ game di Portofolio (Lv. 10+).", style: "legend" },
  { id: "grandmaster", label: "🔥 Grandmaster All Paths", req: "Tamatkan keempat jalur Master!", style: "master" },
];

const PACK_PRICES = [
  { name: "Paket Ikon / Item", items: "15–30 ikon 16x16", minUsd: 1, maxUsd: 3 },
  { name: "Paket Karakter", items: "Sprite sheet + animasi", minUsd: 2, maxUsd: 5 },
  { name: "Paket Tileset", items: "1 set ubin map lengkap", minUsd: 3, maxUsd: 10 },
];

const COMM_PRICES = [
  { name: "Icon / Item Simpel", detail: "16x16 px (statis)", minUsd: 5, maxUsd: 15 },
  { name: "Icon / UI Detail", detail: "32x32 px (statis)", minUsd: 15, maxUsd: 25 },
  { name: "Sprite Karakter", detail: "16x16–32x32 px", minUsd: 10, maxUsd: 25 },
  { name: "Animasi Karakter", detail: "4–8 frame (idle/walk)", minUsd: 35, maxUsd: 70 },
];

const CROPTAILS_PLAYLIST_ITEMS = [
  { id: 801, title: "Pt 1: Project Setup & Assets (Croptails 2D)", done: true },
  { id: 802, title: "Pt 2: Tilemap Layers, Animated Tiles & Terrains", done: true },
  { id: 803, title: "Pt 3: Player Animations & State Machine Transitions", done: true },
  { id: 804, title: "Pt 4: Chopping, Tilling & Watering Tool States", done: true },
  { id: 805, title: "Pt 5: Houses with Tilemaps & Scene Collections", done: true },
  { id: 806, title: "Pt 6: Chop-able Trees, Damage & Log Collectables", done: true },
  { id: 807, title: "Pt 7: 2D Tree Shake with Vertex Shader Effects", done: true },
  { id: 808, title: "Pt 8: Rock Mining (Hit, Hurt, Damage Components)", done: true },
  { id: 809, title: "Pt 9: Y Sort on Scenes & Tilemap Layers", done: true },
  { id: 810, title: "Pt 10: Chicken NPC Animations & Navigation", done: true },
  { id: 811, title: "Pt 11: Cow NPC State Machine & Navigation Agents", done: true },
  { id: 812, title: "Pt 12: Multiple Navigation Regions & Collision Subtraction", done: true },
  { id: 813, title: "Pt 13: Tools Panel UI & Theme Resources", done: true },
  { id: 814, title: "Pt 14: Reusable Collectable Components", done: true },
  { id: 815, title: "Pt 15: Inventory UI & Theme Styling", done: true },
  { id: 816, title: "Pt 16: Day & Night Cycle UI Component", done: true },
  { id: 817, title: "Pt 17: Grow Crops with Day & Night Cycles", done: true },
  { id: 818, title: "Pt 18: Use Tools to Plant Crops", done: true },
  { id: 819, title: "Pt 19: Save & Load Game Data with Resources", done: true },
  { id: 820, title: "Pt 20: Character Interaction", done: true },
  { id: 821, title: "Pt 21: Custom Dialog Balloons with Scripts", done: true },
  { id: 822, title: "Pt 22: Collectables & Chests for Rewards", done: true },
  { id: 823, title: "Pt 23: Game Level with Components & Scenes", done: true },
  { id: 824, title: "Pt 24: Game Main Menu UI & Theme Components", done: true },
  { id: 825, title: "Pt 25: Audio Bus Layout for Music & SFX", done: true },
  { id: 826, title: "Export Build PC (.exe) & Android (.apk) + Virtual Controls", done: true },
];

const FALLBACK_UDEMY_SNAPSHOT = {
  syncVersion: "2026-11-21T12:12+08",
  syncLabel: "21 Nov 2026 12:12",
  courses: {
    gamedev: {
      courseTitle: "Jumpstart to 2D Game Development: Godot 4 for Beginners",
      courseUrl: "https://www.udemy.com/course/jumpstart-to-2d-game-development-godot-4-for-beginners/learn/lecture/54802875#content",
      completedLectures: 4,
      totalLectures: 439,
      currentStatus: "Bagian 1 • 5. Captions / Translations (#54802875 ✓)",
      note: "Kurikulum aktif Godot 4.6/4.7 (Bagian 1–15; Bagian 16–23 Archive 4.5)",
      idRange: [827, 841],
      sections: [
        { id: 827, title: "Udemy Sec 1: Course Introduction (4/5 - sisa Godot 4.7 Changes)", done: false },
        { id: 828, title: "Udemy Sec 2: Preflight (0/5)", done: false },
        { id: 829, title: "Udemy Sec 3: Godot 4.6 - Foundations (0/14)", done: false },
        { id: 830, title: "Udemy Sec 4: Godot 4.6 - GD Script Basics (0/6)", done: false },
        { id: 831, title: "Udemy Sec 5: Godot 4.6 - GD Script Beyond the Basics (0/5)", done: false },
        { id: 832, title: "Udemy Sec 6: Godot 4.6 Essentials (0/7)", done: false },
        { id: 833, title: "Udemy Sec 7: Godot 4.7 - Warm up! - Dice Catcher (0/13)", done: false },
        { id: 834, title: "Udemy Sec 8: Godot 4.7 - Game 1 - Tappy Plane! (0/24)", done: false },
        { id: 835, title: "Udemy Sec 9: Godot 4.6 - Game 2 - Angry Animals! Physics (0/19)", done: false },
        { id: 836, title: "Udemy Sec 10: Godot 4.6 - Game 3 - Memory Madness UI (0/18)", done: false },
        { id: 837, title: "Udemy Sec 11: Godot 4.7 - Game 4 - Fox Antics!! Platformer (0/45)", done: false },
        { id: 838, title: "Udemy Sec 12: Godot 4.7 - Game 5 - Sokoban (0/16)", done: false },
        { id: 839, title: "Udemy Sec 13: Godot 4.6 - Game 6 - NEW Space Ace!! (0/38)", done: false },
        { id: 840, title: "Udemy Sec 14: Godot 4.7 - Game 7 - Do Not Mind Me (0/21)", done: false },
        { id: 841, title: "Udemy Sec 15: Deployment on itch.io (0/1)", done: false },
      ],
    },
    pixelart: {
      courseTitle: "Pixel Art Master Course - Beginner to Professional/Freelance",
      courseUrl: "https://www.udemy.com/course/pixel-art-master-course/learn/lecture/10984442#content",
      completedLectures: 15,
      totalLectures: 222,
      currentStatus: "Bagian 3 • 15. Value and contrast basics ✓ (lanjut #16 Negative & positive space)",
      note: "Bagian 1 (8/8) & Bagian 2 (5/5) selesai! Lanjut Shading and lighting (2/12)",
      idRange: [711, 730],
      sections: [
        { id: 711, title: "Udemy Pixel Sec 1: Getting started (8/8)", done: true },
        { id: 712, title: "Udemy Pixel Sec 2: Lines and Shapes [B] (5/5)", done: true },
        { id: 713, title: "Udemy Pixel Sec 3: Shading and lighting [B] (2/12 - lanjut #16)", done: false },
        { id: 714, title: "Udemy Pixel Sec 4: Colours and textures [B] (0/11)", done: false },
        { id: 715, title: "Udemy Pixel Sec 5: Drawing simple objects [B] (0/9)", done: false },
        { id: 716, title: "Udemy Pixel Sec 6: Tiles [B] (0/8)", done: false },
        { id: 717, title: "Udemy Pixel Sec 7: Backgrounds [B] (0/5)", done: false },
        { id: 718, title: "Udemy Pixel Sec 8: Basic characters [B] (0/5)", done: false },
        { id: 719, title: "Udemy Pixel Sec 9: Simple animation [B] (0/11)", done: false },
        { id: 720, title: "Udemy Pixel Sec 10: Platformer View [I] (0/14)", done: false },
        { id: 721, title: "Udemy Pixel Sec 11: Top Down View [I] (0/14)", done: false },
        { id: 722, title: "Udemy Pixel Sec 12: RPG View [I] (0/12)", done: false },
        { id: 723, title: "Udemy Pixel Sec 13: Isometric View [I] (0/11)", done: false },
        { id: 724, title: "Udemy Pixel Sec 14: Intermediate Shading [I] (0/17)", done: false },
        { id: 725, title: "Udemy Pixel Sec 15: Materials [I] (0/40)", done: false },
        { id: 726, title: "Udemy Pixel Sec 16: Checkpoint before Advanced (0/1)", done: false },
        { id: 727, title: "Udemy Pixel Sec 17: 12 Principles of Animation [A] (0/13)", done: false },
        { id: 728, title: "Udemy Pixel Sec 18: VFX Animation [A] (0/7)", done: false },
        { id: 729, title: "Udemy Pixel Sec 19: Highly Detailed Pixel Art [A] (0/1)", done: false },
        { id: 730, title: "Udemy Pixel Sec 20: Freelancing [A] (0/18)", done: false },
      ],
    },
  },
};

function getUdemySnapshot() {
  return (typeof window !== "undefined" && window.UDEMY_COURSES_SNAPSHOT) || FALLBACK_UDEMY_SNAPSHOT;
}

function getUdemySections(pathKey) {
  const course = getUdemySnapshot().courses?.[pathKey];
  return (course?.sections || []).map((s) => ({ id: s.id, title: s.title, done: Boolean(s.done) }));
}

function buildUdemyProgressMap(snap = getUdemySnapshot()) {
  const map = {};
  Object.entries(snap.courses || {}).forEach(([k, c]) => {
    map[k] = {
      courseTitle: c.courseTitle,
      courseUrl: c.courseUrl,
      completedLectures: c.completedLectures,
      totalLectures: c.totalLectures,
      currentStatus: c.currentStatus,
      note: c.note,
      syncLabel: snap.syncLabel,
    };
  });
  return map;
}

function syncAllUdemySnapshots(targetState, { isInitialMigration = false, grantDeltaReward = true } = {}) {
  const snap = getUdemySnapshot();
  if (!isInitialMigration && targetState.udemySyncVersion === snap.syncVersion) return false;
  targetState.udemyProgress = targetState.udemyProgress || {};
  let addedDoneCount = 0;

  Object.entries(snap.courses || {}).forEach(([pathKey, course]) => {
    const existing = targetState.skillItems[pathKey] || [];
    const [minId, maxId] = course.idRange;
    const prevDoneIds = new Set(existing.filter((i) => i.done).map((i) => i.id));
    const coreAndCustom = existing.filter((i) => i.id < minId || i.id > maxId);
    const updatedSections = course.sections.map((s) => {
      const done = isInitialMigration ? Boolean(s.done) : Boolean(s.done || prevDoneIds.has(s.id));
      if (done && !prevDoneIds.has(s.id)) addedDoneCount += 1;
      return { id: s.id, title: s.title, done };
    });
    targetState.skillItems[pathKey] = [...coreAndCustom, ...updatedSections];
    targetState.udemyProgress[pathKey] = {
      courseTitle: course.courseTitle,
      courseUrl: course.courseUrl,
      completedLectures: course.completedLectures,
      totalLectures: course.totalLectures,
      currentStatus: course.currentStatus,
      note: course.note,
      syncLabel: snap.syncLabel,
    };
  });

  if (grantDeltaReward && addedDoneCount > 0) {
    targetState.xp += addedDoneCount * SKILL_REWARD.xp;
    targetState.dailyXp = Math.max(0, (targetState.dailyXp || 0) + addedDoneCount * SKILL_REWARD.xp);
    targetState.gold += addedDoneCount * SKILL_REWARD.gold;
    while (targetState.xp >= xpNeeded(targetState.level)) {
      targetState.xp -= xpNeeded(targetState.level);
      targetState.level += 1;
    }
  }

  SKILL_PATHS.forEach((path) => {
    const items = targetState.skillItems[path.key] || [];
    const matchingTodos = targetState.todos.filter((t) => t.tag === path.todoTag);
    const allComplete = items.length > 0 && [...items, ...matchingTodos].every((i) => i.done);
    if (!allComplete) {
      const lockSet = new Set([path.masterTitleId, "grandmaster"]);
      if (path.key === "gamedev") lockSet.add("legendary_gamedev");
      targetState.unlockedTitles = targetState.unlockedTitles.filter((t) => !lockSet.has(t));
      targetState.equippedTitles = targetState.equippedTitles.filter((t) => !lockSet.has(t));
    }
  });
  if (!targetState.equippedTitles.length) targetState.equippedTitles.push("apprentice");

  targetState.udemySyncVersion = snap.syncVersion;
  targetState.udemyExactSyncV2 = true;
  targetState.udemyGodotSynced = true;
  return true;
}

const DAILY_ROTATION_COUNT = 3;
const QUEST_POOL = [
  { category: "GameDev", title: "Polish / tambah fitur baru game Godot (gradin-farm)", rank: "A", xp: 60, gold: 30 },
  { category: "GameDev", title: "Playtest build & rapikan bug/collision scene Godot", rank: "B", xp: 35, gold: 15 },
  { category: "GameDev", title: "Eksperimen shader 2D / efek particle juice di Godot", rank: "A", xp: 60, gold: 30 },
  { category: "GameDev", title: "Rapikan Audio Bus / tambah SFX interaksi di game Godot", rank: "B", xp: 35, gold: 15 },
  { category: "PixelArt", title: "Latihan shading & hue-shifting pixel art 30 menit", rank: "B", xp: 35, gold: 15 },
  { category: "PixelArt", title: "Buat 3 ikon RPG 16x16 untuk Itch.io / game inventory", rank: "A", xp: 60, gold: 30 },
  { category: "PixelArt", title: "Animasi idle / walk cycle 4-6 frame sprite karakter", rank: "A", xp: 60, gold: 30 },
  { category: "PixelArt", title: "Rancang mini tileset / props top-down 16x16 baru", rank: "S", xp: 100, gold: 55 },
  { category: "FullStack", title: "Refaktor komponen UI atau tambah fitur web app RPG", rank: "B", xp: 35, gold: 15 },
  { category: "FullStack", title: "Bangun & tes 1 endpoint REST API + validasi input", rank: "A", xp: 60, gold: 30 },
  { category: "FullStack", title: "Optimalisasi CSS responsive & aksesibilitas keyboard", rank: "C", xp: 20, gold: 8 },
  { category: "FullStack", title: "Latihan query SQL / manajemen state + unit test kecil", rank: "B", xp: 35, gold: 15 },
  { category: "Cybersecurity", title: "Audit XSS, CSRF & security header HTTP pada project web", rank: "A", xp: 60, gold: 30 },
  { category: "Cybersecurity", title: "Selesaikan 1 room / tantangan CTF atau lab OWASP Top 10", rank: "S", xp: 100, gold: 55 },
  { category: "Cybersecurity", title: "Latihan analisis paket jaringan / log Linux CLI 20 menit", rank: "B", xp: 35, gold: 15 },
  { category: "Cybersecurity", title: "Review autentikasi, hashing & izin file server lokal", rank: "C", xp: 20, gold: 8 },
  { category: "Daily", title: "Stretching & minum air cukup biar fit buat shift kerja", rank: "C", xp: 20, gold: 8 },
  { category: "Daily", title: "Catat pemasukan, pengeluaran & target tabungan hari ini", rank: "B", xp: 35, gold: 15 },
  { category: "Daily", title: "Siapkan perlengkapan & jadwal shift Gacoan + tidur cukup", rank: "B", xp: 35, gold: 15 },
];

function getLocalDateStr(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function pickRotatedDailyQuests(excludeTitles = [], count = DAILY_ROTATION_COUNT) {
  const blocked = new Set(excludeTitles);
  let pool = QUEST_POOL.filter((q) => !blocked.has(q.title));
  if (pool.length < count) pool = [...QUEST_POOL];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const picked = [];
  const usedCats = new Set();
  for (const q of shuffled) {
    if (picked.length >= count) break;
    if (!usedCats.has(q.category)) {
      picked.push(q);
      usedCats.add(q.category);
    }
  }
  for (const q of shuffled) {
    if (picked.length >= count) break;
    if (!picked.includes(q)) picked.push(q);
  }
  const baseId = Date.now();
  return picked.map((q, idx) => ({
    id: baseId + idx + 1,
    title: q.title,
    category: q.category,
    rank: q.rank,
    xp: q.xp,
    gold: q.gold,
    done: false,
    autoRotated: true,
  }));
}

const PINNED_DAILY_QUESTS = [
  { id: 4, title: "Kerja shift di Mie Gacoan", category: "Kerja", rank: "S", xp: 100, gold: 55, done: false, autoRotated: false, dailyRecurring: true },
];

function ensurePinnedDailyQuests(targetState, { resetDone = false } = {}) {
  const pinnedIds = new Set(PINNED_DAILY_QUESTS.map((q) => q.id));
  const byId = new Map(targetState.quests.map((q) => [q.id, q]));
  const pinnedList = PINNED_DAILY_QUESTS.map((tpl) => {
    const existing = byId.get(tpl.id);
    if (!existing) return structuredClone(tpl);
    return {
      ...existing,
      autoRotated: false,
      dailyRecurring: true,
      category: existing.category || tpl.category,
      done: resetDone ? false : Boolean(existing.done),
    };
  });
  const rest = targetState.quests.filter((q) => !pinnedIds.has(q.id));
  targetState.quests = [...pinnedList, ...rest];
}

function rotateDailyQuests(targetState, { resetDay = false, dateStr = getLocalDateStr() } = {}) {
  const excludeTitles = targetState.quests.filter((q) => !q.dailyRecurring).map((q) => q.title);
  const pinnedIds = new Set(PINNED_DAILY_QUESTS.map((q) => q.id));
  const pinned = targetState.quests.filter((q) => q.dailyRecurring || pinnedIds.has(q.id));
  if (resetDay) {
    const customQuests = targetState.quests.filter((q) => !q.autoRotated && !q.dailyRecurring && !pinnedIds.has(q.id) && q.id > 3);
    customQuests.forEach((q) => (q.done = false));
    targetState.quests = [...pinned, ...pickRotatedDailyQuests(excludeTitles, DAILY_ROTATION_COUNT), ...customQuests];
    ensurePinnedDailyQuests(targetState, { resetDone: true });
    targetState.todos.forEach((t) => (t.done = false));
    targetState.dailyXp = 0;
    targetState.dailyBonusClaimed = false;
    targetState.holidayMode = false;
    targetState.holidayAllowFreeTime = false;
    targetState.lastQuestDate = dateStr;
    return true;
  }

  const keptDoneAuto = targetState.quests.filter((q) => q.autoRotated && q.done);
  const needed = Math.max(0, DAILY_ROTATION_COUNT - keptDoneAuto.length);
  if (needed === 0) return false;
  const customQuests = targetState.quests.filter((q) => !q.autoRotated && !q.dailyRecurring && !pinnedIds.has(q.id));
  const fresh = pickRotatedDailyQuests(excludeTitles, needed);
  targetState.quests = [...pinned, ...keptDoneAuto, ...fresh, ...customQuests];
  ensurePinnedDailyQuests(targetState, { resetDone: false });
  return true;
}

function applyAutoDayRollover(targetState, dateStr = getLocalDateStr()) {
  const hadProgress = (targetState.dailyXp || 0) > 0 || Boolean(targetState.holidayMode) || targetState.quests.some((q) => q.done) || targetState.todos.some((t) => t.done);
  if (hadProgress) targetState.streak += 1;
  rotateDailyQuests(targetState, { resetDay: true, dateStr });
}

function isHolidayReward(reward) {
  return Boolean(reward && (reward.id === 206 || /hari libur/i.test(reward.title || "")));
}

function isTaskLockedByHoliday(item, mode) {
  if (!state.holidayMode) return false;
  if (mode === "quest" && (item.dailyRecurring || item.id === 4)) return "shift";
  if ((mode === "quest" || mode === "todo") && !state.holidayAllowFreeTime) return "holiday";
  return false;
}

function holidayLockToast(lockKind) {
  if (lockKind === "shift") {
    showToast("🏖️ Hari Libur aktif — Shift Mie Gacoan dikunci biar lo istirahat total!");
  } else {
    showToast("🏖️ Mode Libur aktif (bebas tugas). Klik '🔓 Lagi Senggang' di atas kalau mau tetap ngerjain!");
  }
}

const DEFAULT_STATE = {
  level: 5,
  xp: 80,
  gold: 405,
  streak: 1,
  dailyXp: 0,
  dailyTarget: 100,
  dailyBonusClaimed: false,
  holidayMode: false,
  holidayAllowFreeTime: false,
  lastQuestDate: getLocalDateStr(),
  usdRate: 18280,
  activeTab: "skills",
  activeTagFilter: "Semua",
  activeProjectFilter: "Semua",
  gradinPlaylistSynced: true,
  udemyGodotSynced: true,
  udemyExactSyncV2: true,
  udemySyncVersion: getUdemySnapshot().syncVersion,
  udemyProgress: buildUdemyProgressMap(),
  gacoanQuestAdded: true,
  equippedTitles: ["apprentice", "noob_cyber", "noob_gamedev", "gamedev_crafter"],
  unlockedTitles: ["apprentice", "noob_cyber", "noob_gamedev", "gamedev_crafter"],
  profileName: "Studio Pixel Gue",
  profileBio: "Pixel Artist • Godot Game Dev (PC/Android) • Full Stack & Cyber Learner",
  profileAvatar: null,
  quests: [
    { id: 4, title: "Kerja shift di Mie Gacoan", category: "Kerja", rank: "S", xp: 100, gold: 55, done: false, autoRotated: false, dailyRecurring: true },
    { id: 1, title: "Latihan shading pixel art 30 menit", category: "PixelArt", rank: "B", xp: 35, gold: 15, done: false, autoRotated: true },
    { id: 2, title: "Buat 3 ikon RPG 16x16 untuk Itch.io", category: "PixelArt", rank: "A", xp: 60, gold: 30, done: false, autoRotated: true },
    { id: 3, title: "Polish / tambah fitur baru game Godot (gradin-farm)", category: "GameDev", rank: "A", xp: 60, gold: 30, done: false, autoRotated: true },
  ],
  todos: [
    { id: 101, title: "Rapikan palet warna di Aseprite", tag: "PixelArt", done: false },
    { id: 102, title: "Latihan fetch JSON di JavaScript", tag: "FullStack", done: false },
    { id: 103, title: "Cek header keamanan HTTP & CORS", tag: "Cybersecurity", done: false },
  ],
  skillItems: {
    fullstack: [
      { id: 501, title: "HTML5 Semantic & Struktur Dokumen", done: false },
      { id: 502, title: "CSS3 Layout (Flexbox, Grid & Responsive)", done: false },
      { id: 503, title: "JavaScript Modern (DOM, Event, Async/Fetch)", done: false },
      { id: 504, title: "Backend & REST API (Node.js / Express)", done: false },
      { id: 505, title: "Database (SQL / PostgreSQL atau MongoDB)", done: false },
      { id: 506, title: "Git, Integrasi Full-Stack & Deployment", done: false },
    ],
    cyber: [
      { id: 601, title: "Jaringan Dasar (TCP/IP, DNS, HTTP/HTTPS & Wireshark)", done: false },
      { id: 602, title: "Linux CLI, File Permissions & System Hardening", done: false },
      { id: 603, title: "Web Security & OWASP Top 10 (XSS, SQLi, CSRF)", done: false },
      { id: 604, title: "Authentication, Hashing, JWT & Enkripsi Dasar", done: false },
      { id: 605, title: "Vulnerability Scanning & Pentest (Nmap / Burp Suite)", done: false },
      { id: 606, title: "Log Analysis, Incident Response & Secure Deploy", done: false },
    ],
    pixelart: [
      { id: 701, title: "Dasar Grid 16x16 / 32x32 & Line Art (Hindari Jaggies)", done: false },
      { id: 702, title: "Teori Warna, Palet Lospec & Hue Shifting", done: false },
      { id: 703, title: "Shading, Light Source & Anti-Aliasing Dasar", done: false },
      { id: 704, title: "Item RPG Icons & Tileset Lingkungan", done: false },
      { id: 705, title: "Desain Karakter & Animasi Sprite (Idle / Walk)", done: false },
      { id: 706, title: "Export Sprite Sheet & Publish Asset Pack di Itch.io", done: false },
      ...getUdemySections("pixelart"),
    ],
    gamedev: [...structuredClone(CROPTAILS_PLAYLIST_ITEMS), ...getUdemySections("gamedev")],
  },
  journals: [
    {
      id: 302,
      date: new Date().toLocaleDateString("id-ID", { dateStyle: "medium" }),
      mood: "🎮 Bikin Game",
      title: "Tamat 25 Episode Croptails Farming Game (Gradin Farm)",
      body: "Semua 25 episode tutorial Godot 4 Farming Game selesai dibangun di folder gradin-farm-pc (lengkap dengan export Windows .exe, Android .apk, dan virtual controls)!",
    },
    {
      id: 301,
      date: new Date().toLocaleDateString("id-ID", { dateStyle: "medium" }),
      mood: "🎨 Fokus Berkarya",
      title: "Hari 1: Setup Guild, Full Stack & Cybersecurity",
      body: "Mulai bangun rutinitas latihan pixel art dan target belajar buat buka semua gelar Master!",
    },
  ],
  rewards: [
    { id: 201, title: "Dengerin Musik / Istirahat 15 Menit", cost: 15 },
    { id: 202, title: "Main Game Santai 30 Menit", cost: 25 },
    { id: 203, title: "Nonton 1 Episode Anime / YouTube", cost: 30 },
    { id: 204, title: "Beli Kopi / Camilan Favorit", cost: 50 },
    { id: 205, title: "Nabung $1 Buat Beli Asset / Game", cost: 90 },
    { id: 206, title: "Hari Libur Santai Bebas Tugas", cost: 150 },
  ],
  projects: [
    {
      id: 901,
      title: "Gradin Farm — 2D Farming Game (Godot 4)",
      category: "Game Dev",
      status: "✅ Selesai",
      completedDate: "17 Nov 2026",
      description: "Tamat 25 episode Croptails Farming Game! Sudah jadi build Windows (.exe) & Android (.apk), lengkap dengan virtual controls & farming system.",
      tags: ["Godot4", "GDScript", "PixelArt", "PC/Android"],
      link: "",
    },
    {
      id: 902,
      title: "Pixel Guild — RPG Daily Quest & Udemy Tracker",
      category: "Web / Full Stack",
      status: "✅ Selesai",
      completedDate: "19 Nov 2026",
      description: "Website RPG harian mobile-ready dengan sistem XP, Streak, Mode Hari Libur, sinkronisasi 2 kursus Udemy, dan live di GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript", "GitHubPages"],
      link: "https://master897.github.io/rpg-daily-quest/",
    },
  ],
  portfolio: [
    { id: 404, title: "Gradin Farm (Godot 2D Farming Game PC/APK)", category: "Game Dev", tags: ["Godot", "GameDev", "PixelArt"], priceUsd: 10, svgKey: "tile" },
    { id: 401, title: "Potion & RPG Icons Pack", category: "Asset Pack", tags: ["16x16", "RPG", "Icons"], priceUsd: 3, svgKey: "potion" },
    { id: 402, title: "Pixel Knight Character Sprite", category: "Sprite / Animasi", tags: ["Karakter", "Idle", "FullStack"], priceUsd: 5, svgKey: "knight" },
    { id: 403, title: "Cyber Shield & Tileset Kit", category: "Dev & Security", tags: ["16x16", "Cybersecurity", "Tileset"], priceUsd: 8, svgKey: "tile" },
  ],
};

let state = loadState();

const el = {
  heroLevel: document.getElementById("hero-level"),
  heroActiveTitles: document.getElementById("hero-active-titles"),
  streak: document.getElementById("streak-count"),
  gold: document.getElementById("gold-count"),
  xpText: document.getElementById("xp-text"),
  xpFill: document.getElementById("xp-bar-fill"),
  targetText: document.getElementById("target-text"),
  targetFill: document.getElementById("target-bar-fill"),
  targetInput: document.getElementById("daily-target-input"),
  claimDailyBtn: document.getElementById("claim-daily-btn"),
  resetDailyBtn: document.getElementById("reset-daily-btn"),
  rerollQuestsBtn: document.getElementById("reroll-quests-btn"),
  holidayBanner: document.getElementById("holiday-banner"),
  holidayBannerText: document.getElementById("holiday-banner-text"),
  holidayFreetimeBtn: document.getElementById("holiday-freetime-btn"),
  holidayEndBtn: document.getElementById("holiday-end-btn"),
  questForm: document.getElementById("quest-form"),
  questInput: document.getElementById("quest-input"),
  questRank: document.getElementById("quest-rank"),
  questList: document.getElementById("quest-list"),
  questSummary: document.getElementById("quest-summary"),
  questEmpty: document.getElementById("quest-empty"),
  todoForm: document.getElementById("todo-form"),
  todoInput: document.getElementById("todo-input"),
  todoTag: document.getElementById("todo-tag"),
  todoList: document.getElementById("todo-list"),
  todoSummary: document.getElementById("todo-summary"),
  todoEmpty: document.getElementById("todo-empty"),
  skillPathsGrid: document.getElementById("skill-paths-grid"),
  titlesGrid: document.getElementById("titles-grid"),
  journalForm: document.getElementById("journal-form"),
  journalMood: document.getElementById("journal-mood"),
  journalTitle: document.getElementById("journal-title"),
  journalBody: document.getElementById("journal-body"),
  journalList: document.getElementById("journal-list"),
  journalCount: document.getElementById("journal-count"),
  journalEmpty: document.getElementById("journal-empty"),
  rewardForm: document.getElementById("reward-form"),
  rewardInput: document.getElementById("reward-input"),
  rewardCost: document.getElementById("reward-cost"),
  rewardList: document.getElementById("reward-list"),
  profileAvatarPreview: document.getElementById("profile-avatar-preview"),
  profileNameDisplay: document.getElementById("profile-name-display"),
  portfolioTitleBadges: document.getElementById("portfolio-title-badges"),
  profileBioDisplay: document.getElementById("profile-bio-display"),
  toggleProfileEditBtn: document.getElementById("toggle-profile-edit-btn"),
  profileEditForm: document.getElementById("profile-edit-form"),
  profileNameInput: document.getElementById("profile-name-input"),
  profileBioInput: document.getElementById("profile-bio-input"),
  profileAvatarFile: document.getElementById("profile-avatar-file"),
  usdRateInput: document.getElementById("usd-rate-input"),
  projectCount: document.getElementById("project-count"),
  projectForm: document.getElementById("project-form"),
  projEditId: document.getElementById("proj-edit-id"),
  projTitle: document.getElementById("proj-title"),
  projCategory: document.getElementById("proj-category"),
  projStatus: document.getElementById("proj-status"),
  projDate: document.getElementById("proj-date"),
  projTags: document.getElementById("proj-tags"),
  projLink: document.getElementById("proj-link"),
  projDesc: document.getElementById("proj-desc"),
  projSubmitBtn: document.getElementById("proj-submit-btn"),
  projCancelBtn: document.getElementById("proj-cancel-btn"),
  projectFilterBar: document.getElementById("project-filter-bar"),
  projectGrid: document.getElementById("project-grid"),
  projectEmpty: document.getElementById("project-empty"),
  portfolioForm: document.getElementById("portfolio-form"),
  artEditId: document.getElementById("art-edit-id"),
  artTitle: document.getElementById("art-title"),
  artCategory: document.getElementById("art-category"),
  artTags: document.getElementById("art-tags"),
  artPrice: document.getElementById("art-price"),
  artFile: document.getElementById("art-file"),
  artSubmitBtn: document.getElementById("art-submit-btn"),
  artCancelBtn: document.getElementById("art-cancel-btn"),
  tagFilterBar: document.getElementById("tag-filter-bar"),
  portfolioGrid: document.getElementById("portfolio-grid"),
  portfolioEmpty: document.getElementById("portfolio-empty"),
  packPriceBody: document.getElementById("pack-price-body"),
  commPriceBody: document.getElementById("comm-price-body"),
  toast: document.getElementById("toast"),
};

function xpNeeded(level) {
  return level * 100;
}

function formatIdr(usd) {
  return "Rp" + Math.round(usd * state.usdRate).toLocaleString("id-ID");
}

function parseTags(raw) {
  return raw.split(",").map((t) => t.trim().replace(/^#/, "")).filter(Boolean);
}

function loadState() {
  const todayStr = getLocalDateStr();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    const merged = { ...structuredClone(DEFAULT_STATE), ...parsed };
    merged.skillItems = { ...structuredClone(DEFAULT_STATE.skillItems), ...(parsed.skillItems || {}) };
    if (!parsed.udemyExactSyncV2 && !(parsed.skillItems?.pixelart || []).some((i) => i.id === 711)) {
      merged.skillItems.pixelart = merged.skillItems.pixelart.filter((i) => i.id < 711 || i.id > 730);
    }
    ["noob_cyber", "noob_gamedev"].forEach((starterId) => {
      if (!merged.unlockedTitles.includes(starterId)) {
        merged.unlockedTitles.push(starterId);
        if (!merged.equippedTitles.includes(starterId)) {
          merged.equippedTitles.push(starterId);
        }
      }
    });
    if (!parsed.gradinPlaylistSynced) {
      merged.skillItems.gamedev = structuredClone(CROPTAILS_PLAYLIST_ITEMS);
      const earnedXp = CROPTAILS_PLAYLIST_ITEMS.length * SKILL_REWARD.xp;
      const earnedGold = CROPTAILS_PLAYLIST_ITEMS.length * SKILL_REWARD.gold;
      merged.xp += earnedXp;
      merged.gold += earnedGold;
      while (merged.xp >= xpNeeded(merged.level)) {
        merged.xp -= xpNeeded(merged.level);
        merged.level += 1;
      }
      if (!merged.unlockedTitles.includes("gamedev_crafter")) merged.unlockedTitles.push("gamedev_crafter");
      if (!merged.equippedTitles.includes("gamedev_crafter")) merged.equippedTitles.push("gamedev_crafter");
      if (!merged.portfolio.some((p) => p.id === 404)) {
        merged.portfolio.unshift(structuredClone(DEFAULT_STATE.portfolio[0]));
      }
      if (!merged.journals.some((j) => j.id === 302)) {
        merged.journals.unshift(structuredClone(DEFAULT_STATE.journals[0]));
      }
      merged.gradinPlaylistSynced = true;
    }
    syncAllUdemySnapshots(merged, { isInitialMigration: !parsed.udemyExactSyncV2, grantDeltaReward: true });
    if (merged.unlockedTitles.includes("indie_rookie")) {
      merged.unlockedTitles = merged.unlockedTitles.map((t) => (t === "indie_rookie" ? "gamedev_crafter" : t));
      merged.equippedTitles = merged.equippedTitles.map((t) => (t === "indie_rookie" ? "gamedev_crafter" : t));
    }
    if (!parsed.gacoanQuestAdded) {
      const gacoanQuest = DEFAULT_STATE.quests.find((q) => q.id === 4);
      if (gacoanQuest && !merged.quests.some((q) => q.id === 4)) {
        merged.quests.unshift(structuredClone(gacoanQuest));
      }
      merged.gacoanQuestAdded = true;
    }
    if (!parsed.lastQuestDate) {
      const catById = { 1: "PixelArt", 2: "PixelArt", 3: "GameDev", 4: "Kerja" };
      merged.quests.forEach((q) => {
        if (q.id <= 3) {
          q.autoRotated = true;
          if (!q.category) q.category = catById[q.id];
        } else if (q.id === 4) {
          q.autoRotated = false;
          q.dailyRecurring = true;
          if (!q.category) q.category = "Kerja";
        }
      });
      const godotQuest = DEFAULT_STATE.quests.find((q) => q.id === 3);
      if (godotQuest && !merged.quests.some((q) => q.id === 3)) {
        merged.quests.push(structuredClone(godotQuest));
      }
      merged.lastQuestDate = todayStr;
    } else if (parsed.lastQuestDate !== todayStr) {
      applyAutoDayRollover(merged, todayStr);
    }
    ensurePinnedDailyQuests(merged, { resetDone: false });
    if (!Array.isArray(parsed.projects)) {
      merged.projects = structuredClone(DEFAULT_STATE.projects);
    }
    if (!merged.activeProjectFilter) merged.activeProjectFilter = "Semua";
    return merged;
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast("⚠️ Penyimpanan penuh (gambar terlalu besar).");
  }
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.toast.classList.add("hidden"), 2800);
}

function applyReward(xpDelta, goldDelta) {
  state.xp += xpDelta;
  state.dailyXp = Math.max(0, state.dailyXp + xpDelta);
  state.gold = Math.max(0, state.gold + goldDelta);

  while (state.xp >= xpNeeded(state.level)) {
    state.xp -= xpNeeded(state.level);
    state.level += 1;
    showToast(`🎉 LEVEL UP! Sekarang lo Level ${state.level}!`);
  }
  while (state.xp < 0 && state.level > 1) {
    state.level -= 1;
    state.xp += xpNeeded(state.level);
  }
  state.xp = Math.max(0, state.xp);
}

function unlockTitle(id, msg) {
  if (!state.unlockedTitles.includes(id)) {
    state.unlockedTitles.push(id);
    if (!state.equippedTitles.includes(id)) state.equippedTitles.push(id);
    showToast(msg);
  }
}

function evaluateSkillTitles() {
  SKILL_PATHS.forEach((path) => {
    const items = state.skillItems[path.key] || [];
    const matchingTodos = state.todos.filter((t) => t.tag === path.todoTag);
    const doneCount = items.filter((i) => i.done).length;
    const allComplete = items.length > 0 && [...items, ...matchingTodos].every((i) => i.done);

    if (doneCount >= path.midCount) unlockTitle(path.midTitleId, path.midMsg);
    if (allComplete) unlockTitle(path.masterTitleId, path.masterMsg);
  });

  if (SKILL_PATHS.every((p) => state.unlockedTitles.includes(p.masterTitleId))) {
    unlockTitle("grandmaster", "🔥 GRANDMASTER! Semua 4 jalur skill utama tamat!");
  }

  const gamedevDoneCount = (state.skillItems.gamedev || []).filter((i) => i.done).length;
  const gamedevTodoDone = state.todos.filter((t) => t.tag === "GameDev" && t.done).length;
  const gamedevShowcaseKeys = new Set([
    ...state.portfolio
      .filter((p) => p.category === "Game Dev")
      .map((p) => (p.title || "").split(/[—(]/)[0].trim().toLowerCase()),
    ...(state.projects || [])
      .filter((p) => p.category === "Game Dev")
      .map((p) => (p.title || "").split(/[—(]/)[0].trim().toLowerCase()),
  ].filter(Boolean));
  if (
    state.unlockedTitles.includes("master_gamedev") &&
    (gamedevDoneCount + gamedevTodoDone >= 45 || (gamedevShowcaseKeys.size >= 2 && state.level >= 10))
  ) {
    unlockTitle("legendary_gamedev", "🏛️ APEX GAME DEV! Gelar Tertinggi 'Legendary Game Architect' Terbuka!");
  }
}

function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabName}`);
  });
  saveState();
}

function renderTaskList({ items, listEl, emptyEl, summaryEl, mode, fixedXp, onToggle, onDelete }) {
  const doneCount = items.filter((i) => i.done).length;
  if (summaryEl) summaryEl.textContent = `${doneCount}/${items.length}`;
  if (emptyEl) emptyEl.classList.toggle("hidden", items.length > 0);
  listEl.innerHTML = "";

  items.forEach((item) => {
    const lockKind = isTaskLockedByHoliday(item, mode);
    const li = document.createElement("li");
    li.className = `quest-item${item.done ? " done" : ""}${lockKind ? " locked" : ""}`;

    const left = document.createElement("div");
    left.className = "quest-left";
    left.onclick = () => (lockKind ? holidayLockToast(lockKind) : onToggle(item.id));

    const box = document.createElement("span");
    box.className = "quest-checkbox";
    box.textContent = lockKind ? "🔒" : item.done ? "✓" : "";
    left.append(box);

    if (mode === "quest") {
      const rank = document.createElement("span");
      rank.className = `rank-tag rank-${item.rank}`;
      rank.textContent = item.rank;
      left.append(rank);
      if (item.category) {
        const catChip = document.createElement("span");
        catChip.className = "todo-tag-chip";
        catChip.textContent = `#${item.category}`;
        left.append(catChip);
      }
    } else if (mode === "todo" && item.tag) {
      const tag = document.createElement("span");
      tag.className = "todo-tag-chip";
      tag.textContent = `#${item.tag}`;
      left.append(tag);
    }

    const title = document.createElement("span");
    title.className = "quest-title";
    title.textContent = item.title;
    left.append(title);

    const right = document.createElement("div");
    right.className = "quest-right";

    const reward = document.createElement("span");
    reward.className = "reward-text";
    reward.textContent = `+${item.xp || fixedXp} XP`;

    if (item.dailyRecurring) {
      const pin = document.createElement("span");
      pin.className = `pin-badge${lockKind === "shift" ? " holiday-lock" : ""}`;
      pin.title = lockKind === "shift" ? "Shift dikunci karena Mode Hari Libur aktif" : "Quest wajib harian — selalu muncul setiap hari";
      pin.textContent = lockKind === "shift" ? "🔒 Libur" : "📌 Tetap";
      right.append(reward, pin);
    } else {
      const del = document.createElement("button");
      del.className = "icon-btn danger";
      del.textContent = "×";
      del.onclick = () => onDelete(item.id);
      right.append(reward, del);
    }
    li.append(left, right);
    listEl.appendChild(li);
  });
}

function renderSkillPathsAndTitles() {
  el.skillPathsGrid.innerHTML = "";

  SKILL_PATHS.forEach((path) => {
    const items = state.skillItems[path.key] || [];
    const doneCount = items.filter((i) => i.done).length;
    const pct = items.length ? Math.round((doneCount / items.length) * 100) : 0;

    const panel = document.createElement("div");
    panel.className = "pixel-panel";

    const head = document.createElement("div");
    head.className = "board-header";
    const info = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.className = "section-heading";
    h2.textContent = path.title;
    const sub = document.createElement("p");
    sub.className = "muted-label";
    sub.textContent = path.subtitle;
    info.append(h2, sub);

    const sum = document.createElement("span");
    sum.className = "mono summary-tag";
    sum.textContent = `${doneCount}/${items.length} (${pct}%)`;
    head.append(info, sum);

    const progWrap = document.createElement("div");
    progWrap.className = "bar-block fs-progress-wrap";
    progWrap.innerHTML = `<div class="bar-track"><div class="bar-fill ${path.fillClass}" style="width: ${pct}%"></div></div>`;

    const form = document.createElement("form");
    form.className = "inline-form";
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.maxLength = 80;
    input.placeholder = path.placeholder;
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.className = "pixel-btn primary";
    btn.textContent = "+ Materi (+40 XP)";
    form.append(input, btn);
    form.onsubmit = (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      state.skillItems[path.key].push({ id: Date.now(), title: val, done: false });
      evaluateSkillTitles();
      render();
    };

    const list = document.createElement("ul");
    list.className = "item-list";
    renderTaskList({
      items,
      listEl: list,
      emptyEl: null,
      summaryEl: null,
      mode: "skill",
      fixedXp: SKILL_REWARD.xp,
      onToggle: (id) => {
        const target = state.skillItems[path.key].find((x) => x.id === id);
        if (!target) return;
        target.done = !target.done;
        applyReward(target.done ? SKILL_REWARD.xp : -SKILL_REWARD.xp, target.done ? SKILL_REWARD.gold : -SKILL_REWARD.gold);
        if (target.done) showToast(`🎯 Materi Selesai! +${SKILL_REWARD.xp} XP, +${SKILL_REWARD.gold} G`);
        evaluateSkillTitles();
        render();
      },
      onDelete: (id) => {
        state.skillItems[path.key] = state.skillItems[path.key].filter((x) => x.id !== id);
        evaluateSkillTitles();
        render();
      },
    });

    const udemyData = state.udemyProgress && state.udemyProgress[path.key];
    let udemyBox = null;
    if (udemyData && udemyData.totalLectures > 0) {
      const uPct = ((udemyData.completedLectures / udemyData.totalLectures) * 100).toFixed(1);
      udemyBox = document.createElement("div");
      udemyBox.className = "udemy-sync-box";

      const uHead = document.createElement("div");
      uHead.className = "udemy-sync-head";
      const uTitle = document.createElement("span");
      uTitle.textContent = `🎓 ${udemyData.courseTitle}`;
      const uBadge = document.createElement("span");
      uBadge.className = "mono";
      uBadge.textContent = `${udemyData.completedLectures}/${udemyData.totalLectures} Lecture (${uPct}%)`;
      uHead.append(uTitle, uBadge);

      const uTrack = document.createElement("div");
      uTrack.className = "bar-track";
      const uFill = document.createElement("div");
      uFill.className = `bar-fill ${path.fillClass}`;
      uFill.style.width = `${Math.max(1, Math.round((udemyData.completedLectures / udemyData.totalLectures) * 100))}%`;
      uTrack.appendChild(uFill);

      const uMeta = document.createElement("div");
      uMeta.className = "udemy-sync-meta";
      const uStatus = document.createElement("span");
      uStatus.textContent = `${udemyData.currentStatus} • Sync: ${udemyData.syncLabel || "-"}`;
      const uLink = document.createElement("a");
      uLink.className = "udemy-sync-link";
      uLink.href = udemyData.courseUrl;
      uLink.target = "_blank";
      uLink.rel = "noopener noreferrer";
      uLink.textContent = "Buka Udemy ↗";
      uMeta.append(uStatus, uLink);

      udemyBox.append(uHead, uTrack, uMeta);
    }

    panel.append(...[head, progWrap, udemyBox, form, list].filter(Boolean));
    el.skillPathsGrid.appendChild(panel);
  });

  el.titlesGrid.innerHTML = "";
  RPG_TITLES.forEach((t) => {
    const unlocked = state.unlockedTitles.includes(t.id);
    const equipped = state.equippedTitles.includes(t.id);

    const card = document.createElement("div");
    card.className = `title-card ${unlocked ? "unlocked" : "locked"}${equipped ? " equipped" : ""}`;

    const top = document.createElement("div");
    const name = document.createElement("p");
    name.className = "title-card-name";
    name.textContent = t.label;
    const req = document.createElement("p");
    req.className = "title-card-req";
    req.textContent = t.req;
    top.append(name, req);

    const btn = document.createElement("button");
    btn.className = `pixel-btn ${equipped ? "gold-btn" : "ghost"}`;
    if (!unlocked) {
      btn.textContent = "🔒 Terkunci";
      btn.disabled = true;
    } else {
      btn.textContent = equipped ? "✓ Terpasang (Klik Lepas)" : "Pasang Tag Gelar";
      btn.onclick = () => {
        if (equipped) {
          if (state.equippedTitles.length <= 1) {
            showToast("⚠️ Minimal 1 gelar tetap terpasang.");
            return;
          }
          state.equippedTitles = state.equippedTitles.filter((x) => x !== t.id);
        } else {
          state.equippedTitles.push(t.id);
        }
        render();
      };
    }

    card.append(top, btn);
    el.titlesGrid.appendChild(card);
  });
}

function renderTitleBadges(container) {
  container.innerHTML = "";
  const activeIds = state.equippedTitles.length ? state.equippedTitles : ["apprentice"];
  activeIds.forEach((id) => {
    const t = RPG_TITLES.find((item) => item.id === id);
    if (!t) return;
    const span = document.createElement("span");
    span.className = `title-tag${t.style !== "default" ? ` ${t.style}` : ""}`;
    span.textContent = t.label;
    container.appendChild(span);
  });
}

function renderJournal() {
  el.journalCount.textContent = `${state.journals.length} Catatan`;
  el.journalEmpty.classList.toggle("hidden", state.journals.length > 0);
  el.journalList.innerHTML = "";

  state.journals.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "journal-entry";
    const head = document.createElement("div");
    head.className = "journal-entry-head";
    const meta = document.createElement("span");
    meta.className = "journal-meta";
    meta.textContent = `${entry.date} • ${entry.mood}`;
    const del = document.createElement("button");
    del.className = "icon-btn danger";
    del.textContent = "×";
    del.onclick = () => {
      state.journals = state.journals.filter((j) => j.id !== entry.id);
      render();
    };
    head.append(meta, del);

    const title = document.createElement("h3");
    title.className = "journal-entry-title";
    title.textContent = entry.title;
    const body = document.createElement("p");
    body.className = "journal-entry-body";
    body.textContent = entry.body;

    card.append(head, title, body);
    el.journalList.appendChild(card);
  });
}

function renderRewards() {
  el.rewardList.innerHTML = "";
  state.rewards.forEach((reward) => {
    const card = document.createElement("div");
    card.className = "reward-card";
    const top = document.createElement("div");
    top.className = "reward-card-top";
    const name = document.createElement("span");
    name.className = "reward-name";
    name.textContent = reward.title;
    const del = document.createElement("button");
    del.className = "icon-btn danger";
    del.textContent = "×";
    del.onclick = () => {
      state.rewards = state.rewards.filter((r) => r.id !== reward.id);
      render();
    };
    top.append(name, del);

    const isHoliday = isHolidayReward(reward);
    const alreadyHoliday = isHoliday && state.holidayMode;
    const btn = document.createElement("button");
    btn.className = "pixel-btn gold-btn";
    btn.textContent = alreadyHoliday ? "🏖️ Sedang Libur ✓" : `Tukar (${reward.cost} G)`;
    btn.disabled = alreadyHoliday || state.gold < reward.cost;
    btn.onclick = () => {
      if (alreadyHoliday || state.gold < reward.cost) return;
      state.gold -= reward.cost;
      if (isHoliday) {
        state.holidayMode = true;
        state.holidayAllowFreeTime = false;
        showToast("🏖️ Mode Hari Libur Aktif! Shift Gacoan terkunci & semua tugas bebas (streak aman!).");
      } else {
        showToast(`🎁 Reward diklaim: ${reward.title}!`);
      }
      render();
    };

    card.append(top, btn);
    el.rewardList.appendChild(card);
  });
}

function startEditProject(proj) {
  el.projEditId.value = String(proj.id);
  el.projTitle.value = proj.title;
  el.projCategory.value = proj.category || "Game Dev";
  el.projStatus.value = proj.status || "✅ Selesai";
  el.projDate.value = proj.completedDate || "";
  el.projTags.value = (proj.tags || []).join(", ");
  el.projLink.value = proj.link || "";
  el.projDesc.value = proj.description || "";
  el.projSubmitBtn.textContent = "💾 Update Project";
  el.projCancelBtn.classList.remove("hidden");
  el.projTitle.focus();
}

function resetProjectForm() {
  el.projEditId.value = "";
  el.projTitle.value = "";
  el.projDate.value = "";
  el.projTags.value = "";
  el.projLink.value = "";
  el.projDesc.value = "";
  el.projSubmitBtn.textContent = "+ Tambah My Project";
  el.projCancelBtn.classList.add("hidden");
}

function renderProjects() {
  if (!el.projectGrid) return;
  const projects = state.projects || [];
  if (el.projectCount) el.projectCount.textContent = `${projects.length} Proyek`;

  const filters = new Set(["Semua"]);
  projects.forEach((p) => {
    if (p.category) filters.add(p.category);
  });
  if (!filters.has(state.activeProjectFilter)) state.activeProjectFilter = "Semua";

  el.projectFilterBar.innerHTML = "";
  filters.forEach((label) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-pill${state.activeProjectFilter === label ? " active" : ""}`;
    btn.textContent = label;
    btn.onclick = () => {
      state.activeProjectFilter = label;
      renderProjects();
    };
    el.projectFilterBar.appendChild(btn);
  });

  const visible = projects.filter(
    (p) => state.activeProjectFilter === "Semua" || p.category === state.activeProjectFilter
  );

  el.projectGrid.innerHTML = "";
  el.projectEmpty.classList.toggle("hidden", visible.length > 0);

  visible.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const head = document.createElement("div");
    head.className = "project-card-head";

    const badges = document.createElement("div");
    badges.className = "project-badges";
    const statusBadge = document.createElement("span");
    statusBadge.className = "project-status-badge";
    statusBadge.textContent = proj.status || "✅ Selesai";
    const catBadge = document.createElement("span");
    catBadge.className = "art-badge";
    catBadge.textContent = proj.category || "Project";
    badges.append(statusBadge, catBadge);

    const actions = document.createElement("div");
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "icon-btn";
    editBtn.title = "Edit proyek";
    editBtn.textContent = "✏️";
    editBtn.onclick = () => startEditProject(proj);

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "icon-btn danger";
    delBtn.title = "Hapus proyek";
    delBtn.textContent = "×";
    delBtn.onclick = () => {
      state.projects = (state.projects || []).filter((p) => p.id !== proj.id);
      evaluateSkillTitles();
      render();
    };
    actions.append(editBtn, delBtn);
    head.append(badges, actions);

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = proj.title;

    const dateEl = document.createElement("p");
    dateEl.className = "project-date";
    dateEl.textContent = `📅 Selesai: ${proj.completedDate || "-"}`;

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = proj.description || "";

    const tagsRow = document.createElement("div");
    tagsRow.className = "art-tags-row";
    (proj.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "art-tag-chip";
      chip.textContent = `#${tag}`;
      tagsRow.appendChild(chip);
    });

    card.append(head, title, dateEl, desc, tagsRow);

    if (proj.link && /^https?:\/\//i.test(proj.link)) {
      const linkEl = document.createElement("a");
      linkEl.className = "project-link";
      linkEl.href = proj.link;
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
      linkEl.textContent = "🔗 Buka Proyek ↗";
      card.appendChild(linkEl);
    }

    el.projectGrid.appendChild(card);
  });
}

function startEditArt(art) {
  el.artEditId.value = String(art.id);
  el.artTitle.value = art.title;
  el.artCategory.value = art.category;
  el.artTags.value = (art.tags || []).join(", ");
  el.artPrice.value = art.priceUsd;
  el.artSubmitBtn.textContent = "💾 Update Karya";
  el.artCancelBtn.classList.remove("hidden");
  el.artTitle.focus();
}

function resetArtForm() {
  el.artEditId.value = "";
  el.artTitle.value = "";
  el.artTags.value = "";
  el.artPrice.value = "5";
  el.artFile.value = "";
  el.artSubmitBtn.textContent = "+ Pajang Karya";
  el.artCancelBtn.classList.add("hidden");
}

function renderPortfolioAndPrices() {
  el.profileNameDisplay.textContent = state.profileName;
  el.profileBioDisplay.textContent = state.profileBio;
  el.profileNameInput.value = state.profileName;
  el.profileBioInput.value = state.profileBio;
  el.profileAvatarPreview.innerHTML = "";
  if (state.profileAvatar) {
    const img = document.createElement("img");
    img.src = state.profileAvatar;
    img.alt = state.profileName;
    el.profileAvatarPreview.appendChild(img);
  } else {
    el.profileAvatarPreview.innerHTML = DEMO_SPRITES.knight;
  }

  const filters = new Set(["Semua"]);
  state.portfolio.forEach((art) => {
    filters.add(art.category);
    (art.tags || []).forEach((t) => filters.add(`#${t}`));
  });
  if (!filters.has(state.activeTagFilter)) state.activeTagFilter = "Semua";

  el.tagFilterBar.innerHTML = "";
  filters.forEach((filterLabel) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-pill${state.activeTagFilter === filterLabel ? " active" : ""}`;
    btn.textContent = filterLabel;
    btn.onclick = () => {
      state.activeTagFilter = filterLabel;
      renderPortfolioAndPrices();
    };
    el.tagFilterBar.appendChild(btn);
  });

  const visibleItems = state.portfolio.filter((art) => {
    if (state.activeTagFilter === "Semua") return true;
    if (state.activeTagFilter.startsWith("#")) {
      const clean = state.activeTagFilter.slice(1).toLowerCase();
      return (art.tags || []).some((t) => t.toLowerCase() === clean);
    }
    return art.category === state.activeTagFilter;
  });

  el.usdRateInput.value = state.usdRate;
  el.portfolioGrid.innerHTML = "";
  el.portfolioEmpty.classList.toggle("hidden", visibleItems.length > 0);

  visibleItems.forEach((art) => {
    const card = document.createElement("article");
    card.className = "art-card";

    const preview = document.createElement("div");
    preview.className = "art-preview";
    if (art.imageData) {
      const img = document.createElement("img");
      img.src = art.imageData;
      img.alt = art.title;
      preview.appendChild(img);
    } else {
      preview.innerHTML = DEMO_SPRITES[art.svgKey] || DEMO_SPRITES.potion;
    }

    const head = document.createElement("div");
    head.className = "art-card-head";
    const badge = document.createElement("span");
    badge.className = "art-badge";
    badge.textContent = art.category;

    const actions = document.createElement("div");
    const editBtn = document.createElement("button");
    editBtn.className = "icon-btn";
    editBtn.title = "Edit karya";
    editBtn.textContent = "✏️";
    editBtn.onclick = () => startEditArt(art);

    const delBtn = document.createElement("button");
    delBtn.className = "icon-btn danger";
    delBtn.title = "Hapus karya";
    delBtn.textContent = "×";
    delBtn.onclick = () => {
      state.portfolio = state.portfolio.filter((p) => p.id !== art.id);
      render();
    };
    actions.append(editBtn, delBtn);
    head.append(badge, actions);

    const title = document.createElement("h3");
    title.className = "art-title";
    title.textContent = art.title;

    const tagsRow = document.createElement("div");
    tagsRow.className = "art-tags-row";
    (art.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "art-tag-chip";
      chip.textContent = `#${tag}`;
      tagsRow.appendChild(chip);
    });

    const price = document.createElement("p");
    price.className = "art-price";
    price.textContent = `$${art.priceUsd} USD • ${formatIdr(art.priceUsd)}`;

    card.append(preview, head, title, tagsRow, price);
    el.portfolioGrid.appendChild(card);
  });

  el.packPriceBody.innerHTML = PACK_PRICES.map(
    (p) => `<tr><td><strong>${p.name}</strong></td><td>${p.items}</td><td class="num">$${p.minUsd}–$${p.maxUsd}</td><td class="num">${formatIdr(p.minUsd)} – ${formatIdr(p.maxUsd)}</td></tr>`
  ).join("");
  el.commPriceBody.innerHTML = COMM_PRICES.map(
    (c) => `<tr><td><strong>${c.name}</strong></td><td>${c.detail}</td><td class="num">$${c.minUsd}–$${c.maxUsd}</td><td class="num">${formatIdr(c.minUsd)} – ${formatIdr(c.maxUsd)}</td></tr>`
  ).join("");
}

function render() {
  const needed = xpNeeded(state.level);
  const xpPct = Math.min(100, Math.round((state.xp / needed) * 100));
  const targetPct = Math.min(100, Math.round((state.dailyXp / state.dailyTarget) * 100));

  renderTitleBadges(el.heroActiveTitles);
  renderTitleBadges(el.portfolioTitleBadges);

  el.heroLevel.textContent = `LV. ${state.level}`;
  el.streak.textContent = `${state.streak} Hari`;
  el.gold.textContent = `${state.gold} G`;
  el.xpText.textContent = `${state.xp} / ${needed} XP`;
  el.xpFill.style.width = `${xpPct}%`;

  el.targetText.textContent = `${state.dailyXp} / ${state.dailyTarget} XP`;
  el.targetFill.style.width = `${targetPct}%`;
  el.targetInput.value = state.dailyTarget;

  const targetReached = state.dailyXp >= state.dailyTarget;
  el.claimDailyBtn.disabled = !targetReached || state.dailyBonusClaimed;
  el.claimDailyBtn.textContent = state.dailyBonusClaimed ? "Bonus Diklaim ✓" : `Klaim Bonus (+${DAILY_BONUS_GOLD} G)`;

  if (el.holidayBanner) {
    el.holidayBanner.classList.toggle("hidden", !state.holidayMode);
    if (state.holidayMode) {
      el.holidayBannerText.textContent = state.holidayAllowFreeTime
        ? "🏖️ Mode Hari Libur (Senggang Aktif): Shift Mie Gacoan tetap terkunci 🔒 — Quest lain & Habit bebas dikerjain kalau lagi senggang! Streak tetap aman."
        : "🏖️ Mode Hari Libur Aktif (Bebas Tugas): Shift Mie Gacoan & semua tugas terkunci 🔒 — santai full, streak tetap aman! Klik 'Lagi Senggang' kalau mau tetap ngerjain quest/habit lain.";
      el.holidayFreetimeBtn.textContent = state.holidayAllowFreeTime
        ? "🔒 Kunci Lagi (Santai Full)"
        : "🔓 Lagi Senggang (Buka Quest & Habit)";
    }
  }

  renderTaskList({
    items: state.quests,
    listEl: el.questList,
    emptyEl: el.questEmpty,
    summaryEl: el.questSummary,
    mode: "quest",
    onToggle: (id) => {
      const q = state.quests.find((item) => item.id === id);
      if (!q) return;
      const lockKind = isTaskLockedByHoliday(q, "quest");
      if (lockKind) {
        holidayLockToast(lockKind);
        return;
      }
      q.done = !q.done;
      applyReward(q.done ? q.xp : -q.xp, q.done ? q.gold : -q.gold);
      if (q.done) showToast(`⚔️ Quest Clear! +${q.xp} XP, +${q.gold} G`);
      evaluateSkillTitles();
      render();
    },
    onDelete: (id) => {
      state.quests = state.quests.filter((item) => item.id !== id);
      render();
    },
  });

  renderTaskList({
    items: state.todos,
    listEl: el.todoList,
    emptyEl: el.todoEmpty,
    summaryEl: el.todoSummary,
    mode: "todo",
    fixedXp: TODO_REWARD.xp,
    onToggle: (id) => {
      const t = state.todos.find((item) => item.id === id);
      if (!t) return;
      const lockKind = isTaskLockedByHoliday(t, "todo");
      if (lockKind) {
        holidayLockToast(lockKind);
        return;
      }
      t.done = !t.done;
      applyReward(t.done ? TODO_REWARD.xp : -TODO_REWARD.xp, t.done ? TODO_REWARD.gold : -TODO_REWARD.gold);
      if (t.done) showToast(`✅ Habit Selesai! +${TODO_REWARD.xp} XP, +${TODO_REWARD.gold} G`);
      if (["FullStack", "Cybersecurity", "PixelArt", "GameDev"].includes(t.tag)) evaluateSkillTitles();
      render();
    },
    onDelete: (id) => {
      state.todos = state.todos.filter((item) => item.id !== id);
      evaluateSkillTitles();
      render();
    },
  });

  renderSkillPathsAndTitles();
  renderJournal();
  renderRewards();
  renderProjects();
  renderPortfolioAndPrices();
  switchTab(state.activeTab || "tracker");
  saveState();
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

el.questForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = el.questInput.value.trim();
  if (!title) return;
  const opt = el.questRank.options[el.questRank.selectedIndex];
  state.quests.unshift({
    id: Date.now(),
    title,
    rank: opt.value,
    xp: Number(opt.dataset.xp),
    gold: Number(opt.dataset.gold),
    done: false,
  });
  el.questInput.value = "";
  render();
});

el.todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = el.todoInput.value.trim();
  if (!title) return;
  state.todos.unshift({ id: Date.now(), title, tag: el.todoTag.value, done: false });
  el.todoInput.value = "";
  render();
});

el.journalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = el.journalTitle.value.trim();
  const body = el.journalBody.value.trim();
  if (!title || !body) return;
  state.journals.unshift({
    id: Date.now(),
    date: new Date().toLocaleDateString("id-ID", { dateStyle: "medium" }),
    mood: el.journalMood.value,
    title,
    body,
  });
  applyReward(JOURNAL_REWARD.xp, JOURNAL_REWARD.gold);
  el.journalTitle.value = "";
  el.journalBody.value = "";
  showToast(`📓 Jurnal Tersimpan! +${JOURNAL_REWARD.xp} XP, +${JOURNAL_REWARD.gold} G`);
  render();
});

el.rewardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = el.rewardInput.value.trim();
  const cost = Math.max(5, Number(el.rewardCost.value) || 25);
  if (!title) return;
  state.rewards.push({ id: Date.now(), title, cost });
  el.rewardInput.value = "";
  render();
});

el.toggleProfileEditBtn.addEventListener("click", () => {
  el.profileEditForm.classList.toggle("hidden");
});

el.profileAvatarFile.addEventListener("change", () => {
  const file = el.profileAvatarFile.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.profileAvatar = reader.result;
    showToast("📷 Foto profil diupdate!");
    render();
  };
  reader.readAsDataURL(file);
});

el.profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = el.profileNameInput.value.trim();
  const bio = el.profileBioInput.value.trim();
  if (name) state.profileName = name;
  if (bio) state.profileBio = bio;
  el.profileEditForm.classList.add("hidden");
  showToast("✅ Profil portofolio disimpan!");
  render();
});

if (el.projCancelBtn) {
  el.projCancelBtn.addEventListener("click", resetProjectForm);
}

if (el.projectForm) {
  el.projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editId = el.projEditId.value ? Number(el.projEditId.value) : null;
    const title = el.projTitle.value.trim();
    const category = el.projCategory.value;
    const status = el.projStatus.value;
    const completedDate =
      el.projDate.value.trim() ||
      new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
    const tags = parseTags(el.projTags.value);
    const link = el.projLink.value.trim();
    const description = el.projDesc.value.trim();
    if (!title || !description) return;

    if (!Array.isArray(state.projects)) state.projects = [];
    if (editId) {
      const target = state.projects.find((p) => p.id === editId);
      if (target) {
        target.title = title;
        target.category = category;
        target.status = status;
        target.completedDate = completedDate;
        target.tags = tags;
        target.link = link;
        target.description = description;
      }
      showToast("✏️ My Project berhasil diperbarui!");
    } else {
      state.projects.unshift({
        id: Date.now(),
        title,
        category,
        status,
        completedDate,
        description,
        tags: tags.length ? tags : [category.replace(/\s+/g, "")],
        link,
      });
      showToast("🚀 Proyek baru ditambahkan ke My Project!");
    }
    resetProjectForm();
    evaluateSkillTitles();
    render();
  });
}

el.artCancelBtn.addEventListener("click", resetArtForm);

el.portfolioForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const editId = el.artEditId.value ? Number(el.artEditId.value) : null;
  const title = el.artTitle.value.trim();
  const category = el.artCategory.value;
  const tags = parseTags(el.artTags.value);
  const priceUsd = Math.max(1, Number(el.artPrice.value) || 5);
  const file = el.artFile.files[0];
  if (!title) return;

  const commit = (imageData) => {
    if (editId) {
      const target = state.portfolio.find((p) => p.id === editId);
      if (target) {
        target.title = title;
        target.category = category;
        target.tags = tags;
        target.priceUsd = priceUsd;
        if (imageData) target.imageData = imageData;
      }
      showToast("✏️ Karya berhasil diperbarui!");
    } else {
      state.portfolio.unshift({
        id: Date.now(),
        title,
        category,
        tags: tags.length ? tags : ["PixelArt"],
        priceUsd,
        imageData: imageData || null,
        svgKey: "knight",
      });
      showToast("🎨 Karya berhasil dipajang di Portofolio!");
    }
    resetArtForm();
    evaluateSkillTitles();
    render();
  };

  if (file) {
    const reader = new FileReader();
    reader.onload = () => commit(reader.result);
    reader.readAsDataURL(file);
  } else {
    commit(null);
  }
});

el.usdRateInput.addEventListener("change", () => {
  state.usdRate = Math.max(10000, Number(el.usdRateInput.value) || 18280);
  render();
});

el.targetInput.addEventListener("change", () => {
  state.dailyTarget = Math.max(20, Number(el.targetInput.value) || 100);
  render();
});

el.claimDailyBtn.addEventListener("click", () => {
  if (state.dailyXp < state.dailyTarget || state.dailyBonusClaimed) return;
  state.dailyBonusClaimed = true;
  state.gold += DAILY_BONUS_GOLD;
  showToast(`🏆 Target Harian Tercapai! +${DAILY_BONUS_GOLD} Gold!`);
  render();
});

if (el.rerollQuestsBtn) {
  el.rerollQuestsBtn.addEventListener("click", () => {
    const changed = rotateDailyQuests(state, { resetDay: false });
    if (!changed) {
      showToast("✅ Semua quest rotasi hari ini sudah kelar! Klik Reset Hari atau tambah quest custom.");
      return;
    }
    showToast("🎲 Quest harian diacak ulang dengan misi baru!");
    render();
  });
}

if (el.holidayFreetimeBtn) {
  el.holidayFreetimeBtn.addEventListener("click", () => {
    if (!state.holidayMode) return;
    state.holidayAllowFreeTime = !state.holidayAllowFreeTime;
    showToast(
      state.holidayAllowFreeTime
        ? "🔓 Mode Senggang aktif! Quest & Habit lain bisa dikerjain, Shift Gacoan tetap terkunci."
        : "🔒 Kembali ke Santai Full! Semua Quest & Habit dikunci lagi."
    );
    render();
  });
}

if (el.holidayEndBtn) {
  el.holidayEndBtn.addEventListener("click", () => {
    if (!state.holidayMode) return;
    state.holidayMode = false;
    state.holidayAllowFreeTime = false;
    showToast("⚡ Mode Hari Libur diakhiri! Semua Quest & Shift Mie Gacoan kembali normal.");
    render();
  });
}

el.resetDailyBtn.addEventListener("click", () => {
  rotateDailyQuests(state, { resetDay: true });
  state.streak += 1;
  showToast("🌅 Hari baru dimulai! Quest otomatis dirotasi & Habit di-reset.");
  render();
});

function checkAutoDayRollover() {
  const todayStr = getLocalDateStr();
  if (state.lastQuestDate === todayStr) return;
  applyAutoDayRollover(state, todayStr);
  showToast("🌅 Hari baru terdeteksi! Quest harian otomatis dirotasi.");
  render();
}

function pollUdemySnapshotFile() {
  if (typeof document === "undefined" || !document.head || !document.head.appendChild) return;
  const loader = document.createElement("script");
  loader.src = `udemy-progress.js?v=${Date.now()}`;
  loader.onload = () => {
    loader.remove();
    const changed = syncAllUdemySnapshots(state, { isInitialMigration: false, grantDeltaReward: true });
    if (changed) {
      evaluateSkillTitles();
      showToast("🎓 Progres Udemy tersinkron real-time!");
      render();
    }
  };
  loader.onerror = () => loader.remove();
  document.head.appendChild(loader);
}

setInterval(checkAutoDayRollover, 60000);
setInterval(pollUdemySnapshotFile, 20000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    checkAutoDayRollover();
    pollUdemySnapshotFile();
  }
});
if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("focus", pollUdemySnapshotFile);
}

render();
