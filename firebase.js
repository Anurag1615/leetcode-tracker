
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  //   from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // import { getFirestore, doc, setDoc, onSnapshot }
  //   from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  // // ══════════════════════════════════════════════════════
  // // SETUP: Go to https://console.firebase.google.com
  // //   1. Create project → Add Web App → copy config values below
  // //   2. Enable Google Auth in Authentication → Sign-in methods
  // //   3. Create Firestore database in Firestore Database
  // // ══════════════════════════════════════════════════════
  // const firebaseConfig = {
  //   apiKey: "AIdfhjsfhpCqfQZav2AqVX7-6734824",
  //   authDomain: "leetcode-uiryr.firebaseapp.com",
  //   projectId: "leetcode-tkrejt",
  //   storageBucket: "leetcode-pattern.firebasestorage.app",
  //   messagingSenderId: "34567890198",
  //   appId: "1:217202927198:web:236521"
  // };

  // const isFirebaseConfigured =
  //   firebaseConfig.apiKey &&
  //   firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  //   firebaseConfig.projectId !== "YOUR_PROJECT_ID";

  // let app, auth, db, provider;
  // let currentUser = null;
  // let firestoreUnsub = null;

  // if (isFirebaseConfigured) {
  //   try {
  //     app      = initializeApp(firebaseConfig);
  //     auth     = getAuth(app);
  //     db       = getFirestore(app);
  //     provider = new GoogleAuthProvider();
  //     provider.setCustomParameters({ prompt: 'select_account' });

  //     onAuthStateChanged(auth, user => {
  //       currentUser = user;
  //       if (user) {
  //         updateAuthUI(user);
  //         loadFirestoreState(user.uid);
  //       } else {
  //         updateAuthUI(null);
  //         loadLocalState();
  //       }
  //     });
  //   } catch (initErr) {
  //     console.error("LCPatternTracker: Firebase init failed:", initErr);
  //     showFirebaseBanner("Firebase initialization failed. Running in local mode.");
  //     loadLocalState();
  //   }
  // } else {
  //   console.info("LCPatternTracker: Firebase not configured — local mode.");
  //   document.addEventListener('DOMContentLoaded', () => {
  //     showFirebaseBanner("Cloud sync disabled — sign in with Google not available in local mode.");
  //     loadLocalState();
  //   });
  // }

  // // ── Show/hide auth button after DOM ready ──
  // document.addEventListener('DOMContentLoaded', () => {
  //   const _btn = document.getElementById('auth-btn');
  //   if (_btn) _btn.style.display = isFirebaseConfigured ? 'flex' : 'none';
  // });

  // // ── Firebase info banner ──
  // function showFirebaseBanner(msg) {
  //   const b = document.getElementById('firebase-banner');
  //   if (!b) return;
  //   b.textContent = '☁️ ' + msg;
  //   b.style.display = 'block';
  //   setTimeout(() => { b.style.opacity = '0'; setTimeout(() => b.style.display = 'none', 500); }, 6000);
  // }

  // // ── SIGN IN ──
  // window.signInWithGoogle = async () => {
  //   if (!isFirebaseConfigured || !auth) return;
  //   const btn = document.getElementById('auth-btn');
  //   if (btn) { btn.textContent = 'Signing in…'; btn.disabled = true; }
  //   try {
  //     await signInWithPopup(auth, provider);
  //   } catch (e) {
  //     if (e.code !== 'auth/popup-closed-by-user') {
  //       showFirebaseBanner("Sign-in failed. Please try again.");
  //       console.error("Sign-in error:", e);
  //     }
  //   } finally {
  //     if (btn) { btn.disabled = false; }
  //   }
  // };

  // // ── SIGN OUT ──
  // window.signOutUser = async () => {
  //   if (!isFirebaseConfigured || !auth) return;
  //   if (firestoreUnsub) { firestoreUnsub(); firestoreUnsub = null; }
  //   try {
  //     await signOut(auth);
  //   } catch(e) { console.error("Sign-out error:", e); }
  //   window.state = {};
  //   loadLocalState();
  // };

  // // ── Cleanup on page unload (prevent memory leaks) ──
  // window.addEventListener('beforeunload', () => {
  //   if (firestoreUnsub) { firestoreUnsub(); firestoreUnsub = null; }
  // });

  // // ── LOAD FROM FIRESTORE (real-time) ──
  // function loadFirestoreState(uid) {
  //   if (!isFirebaseConfigured || !db) { loadLocalState(); return; }
  //   if (firestoreUnsub) firestoreUnsub();
  //   try {
  //     const ref = doc(db, "users", uid);
  //     firestoreUnsub = onSnapshot(ref,
  //       snap => {
  //         window.state = snap.exists() ? (snap.data().state || {}) : {};
  //         refreshAllUI();
  //       },
  //       err => {
  //         console.error("Firestore read error:", err);
  //         showFirebaseBanner("Could not load cloud progress. Showing local data.");
  //         loadLocalState();
  //       }
  //     );
  //   } catch(e) {
  //     console.error("Firestore setup error:", e);
  //     loadLocalState();
  //   }
  // }

  // // ── LOAD FROM LOCALSTORAGE (guest / fallback) ──
  // function loadLocalState() {
  //   try {
  //     const raw = localStorage.getItem('lc_tracker_v2');
  //     window.state = raw ? JSON.parse(raw) : {};
  //   } catch {
  //     window.state = {};
  //   }
  //   if (typeof refreshAllUI === 'function') refreshAllUI();
  // }

  // // ── SAVE STATE ──
  // window.persistState = async () => {
  //   if (isFirebaseConfigured && currentUser && db) {
  //     try {
  //       await setDoc(doc(db, "users", currentUser.uid), { state: window.state }, { merge: true });
  //     } catch(e) {
  //       console.error("Firestore save error:", e);
  //       localStorage.setItem('lc_tracker_v2', JSON.stringify(window.state));
  //       showFirebaseBanner("Cloud save failed. Progress saved locally.");
  //     }
  //   } else {
  //     localStorage.setItem('lc_tracker_v2', JSON.stringify(window.state));
  //   }
  // };

  // // ── AUTH UI ──
  // function updateAuthUI(user) {
  //   const btn       = document.getElementById('auth-btn');
  //   const avatar    = document.getElementById('auth-avatar');
  //   const nameEl    = document.getElementById('auth-name');
  //   const syncBadge = document.getElementById('sync-badge');
  //   if (!btn) return;
  //   if (user) {
  //     btn.innerHTML = 'Sign Out';
  //     btn.onclick = window.signOutUser;
  //     btn.classList.add('signed-in');
  //     btn.disabled = false;
  //     if (avatar) { avatar.src = user.photoURL || ''; avatar.style.display = 'block'; }
  //     if (nameEl)    nameEl.textContent = user.displayName || user.email;
  //     if (syncBadge) { syncBadge.textContent = '☁️ Synced'; syncBadge.style.color = '#10b981'; }
  //   } else {
  //     btn.innerHTML = '<span class="google-icon" aria-hidden="true"></span>Sign in with Google';
  //     btn.onclick = window.signInWithGoogle;
  //     btn.classList.remove('signed-in');
  //     btn.disabled = false;
  //     if (avatar)    avatar.style.display = 'none';
  //     if (nameEl)    nameEl.textContent = 'Guest';
  //     if (syncBadge) { syncBadge.textContent = '💾 Local only'; syncBadge.style.color = '#f59e0b'; }
  //   }
  // }



  /**
 * firebase.js — Cloud sync & Google Auth for LCPattern Tracker
 *
 * HOW TO CONFIGURE:
 *   1. Go to https://console.firebase.google.com
 *   2. Create project → Add Web App → copy config below
 *   3. Enable Google Auth in Authentication → Sign-in methods
 *   4. Create Firestore database in Firestore Database
 *
 * This module:
 *   - Initializes Firebase (if configured)
 *   - Overrides window.persistState with Firestore-backed save
 *   - Calls window.refreshAllUI / window.refreshPageUI after loading state
 *   - Updates auth UI elements: #auth-btn, #auth-avatar, #auth-name, #sync-badge
 *   - Shows a banner via #firebase-banner on errors
 *
 * Load order: shared.js must load BEFORE this file so window.persistState
 * (localStorage fallback) is defined. This file then replaces it when signed in.
 */

import { initializeApp }         from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, setDoc, onSnapshot }
  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';



// ── CONFIG ──────────────────────────────────────────────────────────────────
// Replace these values with your own Firebase project credentials.
  const firebaseConfig = {
    apiKey: "AIzaSyCtkBhRhmznGe5kfKwpBAU6pNzjKWUZgP0",
    authDomain: "leetcode-pattern.firebaseapp.com",
    projectId: "leetcode-pattern",
    storageBucket: "leetcode-pattern.firebasestorage.app",
    messagingSenderId: "217202927198",
    appId: "1:217202927198:web:9525938dfbd3484b2336cf"
  };
// ─────────────────────────────────────────────────────────────────────────────

const isConfigured =
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
  firebaseConfig.projectId !== 'YOUR_PROJECT_ID';

let auth, db, provider;
let currentUser   = null;
let firestoreUnsub = null;

// ── INIT ─────────────────────────────────────────────────────────────────────
if (isConfigured) {
  try {
    const app = initializeApp(firebaseConfig);
    auth     = getAuth(app);
    db       = getFirestore(app);
    provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    onAuthStateChanged(auth, user => {
      currentUser = user;
      if (user) {
        _updateAuthUI(user);
        _loadFirestoreState(user.uid);
      } else {
        _updateAuthUI(null);
        _loadLocalState();
      }
    });
  } catch (err) {
    console.error('LCPattern Firebase init failed:', err);
    _showBanner('Firebase initialization failed. Running in local mode.');
    _loadLocalState();
  }
} else {
  console.info('LCPattern: Firebase not configured — running in local mode.');
  document.addEventListener('DOMContentLoaded', () => {
    _showBanner('Cloud sync disabled — configure Firebase to enable Google sign-in.');
    _loadLocalState();
  });
}

// Show/hide auth button once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('auth-btn');
  if (btn) btn.style.display = isConfigured ? 'flex' : 'none';
});

// Cleanup listener on unload to prevent memory leaks
window.addEventListener('beforeunload', _cleanup);

// ── PUBLIC SIGN-IN / SIGN-OUT ─────────────────────────────────────────────
window.signInWithGoogle = async () => {
  if (!isConfigured || !auth) return;
  const btn = document.getElementById('auth-btn');
  if (btn) { btn.textContent = 'Signing in…'; btn.disabled = true; }
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') {
      _showBanner('Sign-in failed. Please try again.');
      console.error('Sign-in error:', e);
    }
  } finally {
    if (btn) btn.disabled = false;
  }
};

window.signOutUser = async () => {
  if (!isConfigured || !auth) return;
  _cleanup();
  try {
    await signOut(auth);
    // onAuthStateChanged will fire next and call _loadLocalState()
  } catch (e) { console.error('Sign-out error:', e); }
};

// ── PERSIST STATE (overrides shared.js localStorage-only version) ──────────
window.persistState = async () => {
  // Always write to localStorage as a cache to prevent blank-state flash on reload
  _saveLocal();
  if (isConfigured && currentUser && db) {
    try {
      await setDoc(
        doc(db, 'users', currentUser.uid),
        { state: window.state },
        { merge: true }
      );
    } catch (e) {
      console.error('Firestore save error:', e);
      _showBanner('Cloud save failed. Progress saved locally.');
    }
  }
};

// ── PRIVATE HELPERS ───────────────────────────────────────────────────────
function _loadFirestoreState(uid) {
  if (!db) { _loadLocalState(); return; }
  _cleanup();
  try {
    firestoreUnsub = onSnapshot(
      doc(db, 'users', uid),
      snap => {
        const remote = snap.exists() ? (snap.data().state || {}) : {};
        // Merge: remote wins on conflict (Firestore = source of truth),
        // local fills gaps for keys not yet pushed (e.g. offline edits)
        window.state = { ...window.state, ...remote };
        _refreshUI();
      },
      err => {
        console.error('Firestore read error:', err);
        _showBanner('Could not load cloud progress. Showing local data.');
        _loadLocalState();
      }
    );
  } catch (e) {
    console.error('Firestore setup error:', e);
    _loadLocalState();
  }
}

function _loadLocalState() {
  try {
    const raw = localStorage.getItem('lc_tracker_v2');
    window.state = raw ? JSON.parse(raw) : {};
  } catch {
    window.state = {};
  }
  _refreshUI();
}

function _saveLocal() {
  try { localStorage.setItem('lc_tracker_v2', JSON.stringify(window.state || {})); }
  catch (e) { console.error('localStorage save error:', e); }
}

function _cleanup() {
  if (firestoreUnsub) { firestoreUnsub(); firestoreUnsub = null; }
}

function _refreshUI() {
  if (typeof window.refreshAllUI  === 'function') window.refreshAllUI();
  if (typeof window.refreshPageUI === 'function') window.refreshPageUI();
}

function _showBanner(msg) {
  const b = document.getElementById('firebase-banner');
  if (!b) return;
  b.textContent = '☁️ ' + msg;
  b.style.display = 'block';
  b.style.opacity  = '1';
  setTimeout(() => {
    b.style.opacity = '0';
    setTimeout(() => { b.style.display = 'none'; }, 500);
  }, 6000);
}

function _updateAuthUI(user) {
  const btn       = document.getElementById('auth-btn');
  const avatar    = document.getElementById('auth-avatar');
  const nameEl    = document.getElementById('auth-name');
  const syncBadge = document.getElementById('sync-badge');
  if (!btn) return;

  if (user) {
    btn.innerHTML = 'Sign Out';
    btn.onclick   = window.signOutUser;
    btn.classList.add('signed-in');
    btn.disabled  = false;
    if (avatar)    { avatar.src = user.photoURL || ''; avatar.style.display = 'block'; }
    if (nameEl)    nameEl.textContent = user.displayName || user.email;
    if (syncBadge) { syncBadge.textContent = '☁️ Synced'; syncBadge.style.color = '#10b981'; }
  } else {
    btn.innerHTML = '<span class="google-icon" aria-hidden="true"></span>Sign in with Google';
    btn.onclick   = window.signInWithGoogle;
    btn.classList.remove('signed-in');
    btn.disabled  = false;
    if (avatar)    avatar.style.display = 'none';
    if (nameEl)    nameEl.textContent = 'Guest';
    if (syncBadge) { syncBadge.textContent = '💾 Local only'; syncBadge.style.color = '#f59e0b'; }
  }
}
