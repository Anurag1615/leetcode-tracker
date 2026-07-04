/* ═══════════════════════════════════════════════════════════
   dp-shared.js  —  Shared logic for all DP module pages
   ═══════════════════════════════════════════════════════════ */

// ── MODULE REGISTRY ──────────────────────────────────────────
const DP_MODULES = [
  { id:'foundations',  icon:'🧱', title:'DP Foundations',        url:'dp-foundations.html',  desc:'Why DP? Conditions & mindset' },
  { id:'recursion',    icon:'🌿', title:'Recursive Thinking',    url:'dp-recursion.html',    desc:'IBH Method — think top-down' },
  { id:'memoization',  icon:'💾', title:'Memoization',          url:'dp-memoization.html',  desc:'Top-down with caching' },
  { id:'tabulation',   icon:'📊', title:'Tabulation',           url:'dp-tabulation.html',   desc:'Bottom-up table filling' },
  { id:'state-design', icon:'🎛️', title:'DP State Design',       url:'dp-state-design.html', desc:'What to put in dp[]' },
  { id:'patterns',     icon:'🗺️', title:'Pattern Recognition',   url:'dp-patterns.html',     desc:'Identify which DP to use' },
  { id:'knapsack',     icon:'🎒', title:'0/1 Knapsack',          url:'dp-knapsack.html',     desc:'9 problems' },
  { id:'unbounded',    icon:'♾️', title:'Unbounded Knapsack',    url:'dp-unbounded.html',    desc:'7 problems' },
  { id:'fibonacci',    icon:'🌱', title:'Fibonacci / 1D DP',     url:'dp-fibonacci.html',    desc:'9 problems' },
  { id:'lcs',          icon:'🔡', title:'LCS & Variants',        url:'dp-lcs.html',          desc:'11 problems' },
  { id:'lis',          icon:'📈', title:'LIS & Variants',        url:'dp-lis.html',          desc:'8 problems' },
  { id:'kadane',       icon:'⚡', title:"Kadane's Algorithm",    url:'dp-kadane.html',       desc:'4 problems' },
  { id:'mcm',          icon:'🔗', title:'Interval / MCM DP',     url:'dp-mcm.html',          desc:'9 problems' },
  { id:'grid',         icon:'🗺️', title:'DP on Grid',            url:'dp-grid.html',         desc:'8 problems' },
  { id:'trees',        icon:'🌳', title:'DP on Trees',           url:'dp-trees.html',        desc:'5 problems' },
  { id:'stocks',       icon:'💹', title:'DP on Stocks',          url:'dp-stocks.html',       desc:'6 problems' },
  { id:'mistakes',     icon:'⚠️', title:'Common Mistakes',       url:'dp-mistakes.html',     desc:'8 mistakes to avoid' },
  { id:'faang',        icon:'🎯', title:'FAANG Prep',            url:'dp-faang.html',        desc:'Interview strategy' },
  { id:'tracker',      icon:'✅', title:'Problem Tracker',       url:'dp-tracker.html',      desc:'All 102 problems' },
];

const SECTION_GROUPS = {
  'Foundations':  ['foundations','recursion','memoization','tabulation','state-design'],
  'Recognition':  ['patterns'],
  'Patterns':     ['knapsack','unbounded','fibonacci','lcs','lis','kadane','mcm','grid','trees','stocks'],
  'Interview':    ['mistakes','faang'],
  'Practice':     ['tracker'],
};

// ── BUILD SIDEBAR ──────────────────────────────────────────
function buildSidebar(currentId) {
  const el = document.getElementById('dp-sidebar');
  if (!el) return;
  const done = getDoneModules();
  const total = DP_MODULES.length;
  const doneCount = done.size;

  let html = `<div style="padding:0 16px 12px">
    <div style="font-size:11px;color:var(--t3);margin-bottom:6px;font-family:var(--mono)">${doneCount}/${total} modules</div>
    <div class="sidebar-progress"><div class="sidebar-progress-fill" style="width:${Math.round(doneCount/total*100)}%"></div></div>
  </div>`;

  Object.entries(SECTION_GROUPS).forEach(([group, ids]) => {
    html += `<div class="sidebar-section">${group}</div>`;
    ids.forEach(id => {
      const m = DP_MODULES.find(x => x.id === id);
      if (!m) return;
      const isCurrent = m.id === currentId;
      const isDone = done.has(m.id);
      html += `<a href="${m.url}" class="sidebar-item${isCurrent?' active':''}${isDone?' done':''}">
        <span class="sidebar-icon">${m.icon}</span>
        <span>${m.title}</span>
      </a>`;
    });
  });
  el.innerHTML = html;
}

// ── BUILD PREV/NEXT ──────────────────────────────────────────
function buildPrevNext(currentId) {
  const el = document.getElementById('pn-nav');
  if (!el) return;
  const flat = DP_MODULES;
  const idx = flat.findIndex(m => m.id === currentId);
  const prev = idx > 0 ? flat[idx-1] : null;
  const next = idx < flat.length-1 ? flat[idx+1] : null;

  el.innerHTML = `
    ${prev ? `<a href="${prev.url}" class="pn-btn prev">
      <span class="pn-arrow">←</span>
      <span><div class="pn-label">Previous</div><div class="pn-title">${prev.icon} ${prev.title}</div></span>
    </a>` : '<div></div>'}
    ${next ? `<a href="${next.url}" class="pn-btn next">
      <span class="pn-arrow">→</span>
      <span><div class="pn-label">Next</div><div class="pn-title">${next.icon} ${next.title}</div></span>
    </a>` : '<div></div>'}
  `;
}

// ── DONE MODULE TRACKING ──────────────────────────────────────
function getDoneModules() {
  try {
    const raw = localStorage.getItem('dp_modules_done') || '[]';
    return new Set(JSON.parse(raw));
  } catch { return new Set(); }
}
function markModuleDone(id) {
  const done = getDoneModules();
  done.add(id);
  localStorage.setItem('dp_modules_done', JSON.stringify([...done]));
}
function toggleModuleDone(id) {
  const done = getDoneModules();
  if (done.has(id)) done.delete(id); else done.add(id);
  localStorage.setItem('dp_modules_done', JSON.stringify([...done]));
}

// ── GLOBAL NAV ──────────────────────────────────────────────
function buildGlobalNav(currentId) {
  const el = document.getElementById('gnav');
  if (!el) return;
  el.innerHTML = `
    <a href="/" class="gnav-logo">⚡ <span>LC</span>Pattern</a>
    <a href="/index.html" class="gnav-link">Tracker</a>
    <a href="/dp-index.html" class="gnav-link${!currentId||currentId==='index'?' active':''}">📚 DP Guide</a>
    <a href="/dp-tracker.html" class="gnav-link${currentId==='tracker'?' active':''}">✅ Problems</a>
    <a href="/backtracking.html" class="gnav-link">🌳 Backtracking</a>
  `;
}

// ── TAB SWITCHER ──────────────────────────────────────────────
function sw(tab, panelId) {
  const bar = tab.parentElement;
  bar.querySelectorAll('.ctab').forEach(t => t.classList.remove('on'));
  const wrap = bar.closest('.code-wrap') || bar.parentElement;
  wrap.querySelectorAll('.cpanel').forEach(p => { p.classList.remove('on'); p.style.display='none'; });
  tab.classList.add('on');
  const panel = document.getElementById(panelId);
  if (panel) { panel.classList.add('on'); panel.style.display='block'; }
}

// ── QUIZ ──────────────────────────────────────────────────────
function qans(btn, correct, explainId) {
  if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
  btn.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) {
    btn.closest('.quiz-opts').querySelectorAll('.quiz-opt').forEach(o => {
      if (o.getAttribute('onclick').includes('true')) o.classList.add('correct');
    });
  }
  const ex = document.getElementById(explainId);
  if (ex) ex.classList.add('show');
}

// ── CODE COPY ────────────────────────────────────────────────
function copyCode(btn) {
  const pre = btn.closest('.code-wrap').querySelector('.cpanel.on pre, pre');
  if (!pre) return;
  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.textContent = '✓ copied';
    setTimeout(() => btn.textContent = 'copy', 1500);
  });
}

// ── PROGRESS TRACKING (problems) ─────────────────────────────
const PAGE_PATTERN = 'dp';
function getKey(p) {
  return p.lc || p.gfg || (p.title||'').toLowerCase().replace(/\s+/g,'-');
}
function isDone(p) {
  if (window.isDone) return window.isDone(PAGE_PATTERN, getKey(p));
  try {
    const st = JSON.parse(localStorage.getItem('lc_tracker_v2')||'{}');
    return !!(st[PAGE_PATTERN]?.[getKey(p)]);
  } catch { return false; }
}
function dpToggle(key, el) {
  let done;
  if (window.toggleDone) {
    done = window.toggleDone(PAGE_PATTERN, key);
  } else {
    try {
      const st = JSON.parse(localStorage.getItem('lc_tracker_v2')||'{}');
      if (!st[PAGE_PATTERN]) st[PAGE_PATTERN] = {};
      st[PAGE_PATTERN][key] = !st[PAGE_PATTERN][key];
      done = st[PAGE_PATTERN][key];
      localStorage.setItem('lc_tracker_v2', JSON.stringify(st));
    } catch { done = false; }
  }
  if (el) {
    el.classList.toggle('done', done);
    el.innerHTML = done
      ? '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>'
      : '';
    const row = el.closest('tr');
    if (row) row.classList.toggle('done-row', done);
  }
  return done;
}

// ── INIT (called by each page) ────────────────────────────────
function initDPPage(moduleId) {
  buildGlobalNav(moduleId);
  buildSidebar(moduleId);
  buildPrevNext(moduleId);
}

window.refreshPageUI = function() {
  document.querySelectorAll('[data-prob-key]').forEach(function(chk) {
    const key  = chk.dataset.probKey;
    const done = window.isDone ? window.isDone(PAGE_PATTERN, key)
      : !!(JSON.parse(localStorage.getItem('lc_tracker_v2')||'{}')[PAGE_PATTERN]?.[key]);
    chk.classList.toggle('done', done);
    chk.innerHTML = done
      ? '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>'
      : '';
    const row = chk.closest('tr');
    if (row) row.classList.toggle('done-row', done);
  });
};
