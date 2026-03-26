const G_SVG=(w=26)=>`<svg viewBox="0 0 48 48" width="${w}" height="${w}"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
const STAR=(w=14)=>`<svg viewBox="0 0 20 20" width="${w}" height="${w}"><path fill="#f59e0b" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

const LANGS={
  sk:{label:"Recenzie Google",reviews:"recenzií",writeReview:"Napísať recenziu",allReviews:"Všetky recenzie"},
  cz:{label:"Recenze Google",reviews:"recenzí",writeReview:"Napsat recenzi",allReviews:"Všechny recenze"},
  en:{label:"Google Reviews",reviews:"reviews",writeReview:"Write a review",allReviews:"All reviews"},
  de:{label:"Google Bewertungen",reviews:"Bewertungen",writeReview:"Bewertung schreiben",allReviews:"Alle Bewertungen"},
  hu:{label:"Google vélemények",reviews:"vélemény",writeReview:"Vélemény írása",allReviews:"Összes vélemény"},
  ro:{label:"Recenzii Google",reviews:"recenzii",writeReview:"Scrieți o recenzie",allReviews:"Toate recenziile"},
  pl:{label:"Opinie Google",reviews:"opinii",writeReview:"Napisz opinię",allReviews:"Wszystkie recenzje"},
  it:{label:"Recensioni Google",reviews:"recensioni",writeReview:"Scrivi una recensione",allReviews:"Tutte le recensioni"}
};

const THEMES={
  classic:{
    light:{
      "--gr-bg":"#fff",
      "--gr-border-style":"1.5px solid #e5e7eb",
      "--gr-border-raw":"#e5e7eb",
      "--gr-logo-bg":"#f3f4f6",
      "--gr-text":"#111",
      "--gr-text-muted":"#6b7280",
      "--gr-text-body":"#4b5563",
      "--gr-divider":"#f3f4f6",
      "--gr-chip":"#f9fafb",
      "--gr-score-color":"#111",
      "--gr-panel-header-bg":"transparent",
      "--gr-review-hover":"#fafafa",
      "--gr-close-bg":"#f9fafb",
      "--gr-close-border":"#e5e7eb",
      "--gr-close-icon":"#6b7280",
      "--gr-close-blur":"none",
      "--gr-btn-outline-bg":"#f9fafb",
      "--gr-btn-outline-border":"#e5e7eb",
      "--gr-btn-outline-color":"#374151",
      "--gr-btn-outline-shadow":"none",
      "--gr-btn-outline-blur":"none",
      "--gr-btn-primary-shadow":"none",
      "--gr-badge-shadow":"0 4px 20px rgba(0,0,0,.10)",
      "--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,.16)",
      "--gr-blur":"none",
      "--gr-blur-hover":"none"
    },
    dark:{
      "--gr-bg":"#1f2937",
      "--gr-border-style":"1.5px solid #374151",
      "--gr-border-raw":"#374151",
      "--gr-logo-bg":"#374151",
      "--gr-text":"#f9fafb",
      "--gr-text-muted":"#9ca3af",
      "--gr-text-body":"#d1d5db",
      "--gr-divider":"#374151",
      "--gr-chip":"#374151",
      "--gr-score-color":"#f9fafb",
      "--gr-panel-header-bg":"transparent",
      "--gr-review-hover":"#374151",
      "--gr-close-bg":"#374151",
      "--gr-close-border":"#4b5563",
      "--gr-close-icon":"#9ca3af",
      "--gr-close-blur":"none",
      "--gr-btn-outline-bg":"#374151",
      "--gr-btn-outline-border":"#4b5563",
      "--gr-btn-outline-color":"#f9fafb",
      "--gr-btn-outline-shadow":"none",
      "--gr-btn-outline-blur":"none",
      "--gr-btn-primary-shadow":"none",
      "--gr-badge-shadow":"0 4px 20px rgba(0,0,0,.4)",
      "--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,.55)",
      "--gr-blur":"none",
      "--gr-blur-hover":"none"
    }
  },
  modern:{
    light:{
      "--gr-bg":"#ffffff",
      "--gr-border-style":"MODERN_L_BORDER",
      "--gr-border-raw":"MODERN_L_BORDER_RAW",
      "--gr-logo-bg":"MODERN_LOGO_BG",
      "--gr-text":"#0f172a",
      "--gr-text-muted":"#64748b",
      "--gr-text-body":"#475569",
      "--gr-divider":"MODERN_DIVIDER",
      "--gr-chip":"#f8fafc",
      "--gr-score-color":"ACCENT",
      "--gr-panel-header-bg":"#fafafa",
      "--gr-review-hover":"MODERN_L_HOVER",
      "--gr-close-bg":"MODERN_CLOSE_BG",
      "--gr-close-border":"MODERN_CLOSE_BORDER",
      "--gr-close-icon":"ACCENT",
      "--gr-close-blur":"none",
      "--gr-btn-outline-bg":"MODERN_BTN_OL_BG",
      "--gr-btn-outline-border":"MODERN_BTN_OL_BORDER",
      "--gr-btn-outline-color":"ACCENT",
      "--gr-btn-outline-shadow":"none",
      "--gr-btn-outline-blur":"none",
      "--gr-btn-primary-shadow":"MODERN_BTN_P_SHADOW",
      "--gr-badge-shadow":"MODERN_L_S",
      "--gr-badge-shadow-hover":"MODERN_L_SH",
      "--gr-blur":"none",
      "--gr-blur-hover":"none"
    },
    dark:{
      "--gr-bg":"#020617",
      "--gr-border-style":"MODERN_D_BORDER",
      "--gr-border-raw":"MODERN_D_BORDER_RAW",
      "--gr-logo-bg":"MODERN_LOGO_BG",
      "--gr-text":"#e5e7eb",
      "--gr-text-muted":"#9ca3af",
      "--gr-text-body":"#cbd5e1",
      "--gr-divider":"MODERN_DIVIDER",
      "--gr-chip":"#020617",
      "--gr-score-color":"ACCENT",
      "--gr-panel-header-bg":"#080f1e",
      "--gr-review-hover":"MODERN_D_HOVER",
      "--gr-close-bg":"MODERN_CLOSE_BG",
      "--gr-close-border":"MODERN_CLOSE_BORDER",
      "--gr-close-icon":"ACCENT",
      "--gr-close-blur":"none",
      "--gr-btn-outline-bg":"MODERN_BTN_OL_BG",
      "--gr-btn-outline-border":"MODERN_BTN_OL_BORDER",
      "--gr-btn-outline-color":"ACCENT",
      "--gr-btn-outline-shadow":"none",
      "--gr-btn-outline-blur":"none",
      "--gr-btn-primary-shadow":"MODERN_BTN_P_SHADOW",
      "--gr-badge-shadow":"MODERN_D_S",
      "--gr-badge-shadow-hover":"MODERN_D_SH",
      "--gr-blur":"none",
      "--gr-blur-hover":"none"
    }
  },
  glass:{
    light:{
      /* Leadhub-style glassmorphism Light
         Nizka opacita pozadia + cistý blur(20px) bez saturate/brightness extremov */
      "--gr-bg":"rgba(255,255,255,0.15)",
      "--gr-border-style":"1px solid rgba(255,255,255,0.25)",
      "--gr-border-raw":"rgba(255,255,255,0.25)",
      "--gr-logo-bg":"rgba(255,255,255,0.20)",
      "--gr-text":"#ffffff",
      "--gr-text-muted":"rgba(255,255,255,0.70)",
      "--gr-text-body":"rgba(255,255,255,0.85)",
      "--gr-divider":"rgba(255,255,255,0.12)",
      "--gr-chip":"rgba(255,255,255,0.10)",
      "--gr-score-color":"#ffffff",
      "--gr-panel-header-bg":"rgba(255,255,255,0.05)",
      "--gr-review-hover":"rgba(255,255,255,0.08)",
      "--gr-close-bg":"rgba(255,255,255,0.15)",
      "--gr-close-border":"rgba(255,255,255,0.25)",
      "--gr-close-icon":"rgba(255,255,255,0.80)",
      "--gr-close-blur":"blur(10px)",
      "--gr-btn-outline-bg":"rgba(255,255,255,0.12)",
      "--gr-btn-outline-border":"rgba(255,255,255,0.25)",
      "--gr-btn-outline-color":"#ffffff",
      "--gr-btn-outline-shadow":"inset 0 1px 0 rgba(255,255,255,0.30)",
      "--gr-btn-outline-blur":"blur(10px)",
      "--gr-btn-primary-shadow":"GLASS_BTN_P_SHADOW",
      "--gr-badge-shadow":"0 4px 24px rgba(0,0,0,0.20), 0 1px 0 rgba(255,255,255,0.30) inset",
      "--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.35) inset",
      "--gr-blur":"blur(20px)",
      "--gr-blur-hover":"blur(24px)"
    },
    dark:{
      /* Leadhub-style glassmorphism Dark */
      "--gr-bg":"rgba(0,0,0,0.20)",
      "--gr-border-style":"1px solid rgba(255,255,255,0.15)",
      "--gr-border-raw":"rgba(255,255,255,0.15)",
      "--gr-logo-bg":"rgba(255,255,255,0.10)",
      "--gr-text":"#ffffff",
      "--gr-text-muted":"rgba(255,255,255,0.60)",
      "--gr-text-body":"rgba(255,255,255,0.75)",
      "--gr-divider":"rgba(255,255,255,0.10)",
      "--gr-chip":"rgba(255,255,255,0.07)",
      "--gr-score-color":"#ffffff",
      "--gr-panel-header-bg":"rgba(0,0,0,0.10)",
      "--gr-review-hover":"rgba(255,255,255,0.06)",
      "--gr-close-bg":"rgba(255,255,255,0.12)",
      "--gr-close-border":"rgba(255,255,255,0.18)",
      "--gr-close-icon":"rgba(255,255,255,0.70)",
      "--gr-close-blur":"blur(10px)",
      "--gr-btn-outline-bg":"rgba(255,255,255,0.08)",
      "--gr-btn-outline-border":"rgba(255,255,255,0.18)",
      "--gr-btn-outline-color":"#ffffff",
      "--gr-btn-outline-shadow":"inset 0 1px 0 rgba(255,255,255,0.15)",
      "--gr-btn-outline-blur":"blur(10px)",
      "--gr-btn-primary-shadow":"GLASS_BTN_P_SHADOW",
      "--gr-badge-shadow":"0 4px 24px rgba(0,0,0,0.40), 0 1px 0 rgba(255,255,255,0.12) inset",
      "--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.15) inset",
      "--gr-blur":"blur(20px)",
      "--gr-blur-hover":"blur(24px)"
    }
  }
};

function rgba(hex,a){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

const reviews=[
  {name:"Jana Klincová",init:"JK",col:"#8b5cf6",r:5,date:"pred týždňom",text:"Spoluprácu s firmou pri migrácii na Shoptet hodnotím veľmi pozitívne. Celý proces prebehol hladko, profesionálne a bez zbytočných komplikácií."},
  {name:"Erik Svitek",init:"ES",col:"#059669",r:5,date:"pred týždňom",text:"Maximálna spokojnosť. Na všetko našli riešenie rýchlo. Vrelo odporúčam!"},
  {name:"Dimo Van",init:"DV",col:"#2563eb",r:5,date:"pred mesiacom",text:"S firmou Gaelta som mal výbornú skúsenosť. Oceňujem promptnú komunikáciu, profesionalitu a precízne spracovanie každého detailu."},
  {name:"Sarah Ivičičová",init:"SI",col:"#db2777",r:5,date:"pred mesiacom",text:"Skvelá práca, veľmi odporúčam!"},
  {name:"Amer Arslan",init:"AA",col:"#d97706",r:5,date:"pred mesiacom",text:"Profesionálni, efektívni a ľahko sa s nimi spolupracuje. Vrelo odporúčam!"}
];

const SIZES={S:.82,M:1,L:1.22};
const GAP=10;
let panelOpen=false,currentDevice='desktop',activeOffsetTab='desktop';
let S={
  style:'classic',accent:'#4285F4',mode:'light',radius:14,size:'M',pos:'bottom-right',
  offsetDesktop:{bottom:28,right:28},offsetMobile:{bottom:16,right:16},
  lang:'sk',ctaWrite:'Napísať recenziu',ctaAll:'Všetky recenzie',
  showCount:true,devDesktop:true,devTablet:true,devMobile:true
};

function isTop(){return S.pos.startsWith('top');}
function isLeft(){return S.pos.endsWith('left');}

function resolveTokens(vars){
  const a=S.accent;
  const map={
    'ACCENT':a,
    'MODERN_L_BORDER':`1.5px solid ${rgba(a,.20)}`,
    'MODERN_L_BORDER_RAW':rgba(a,.20),
    'MODERN_D_BORDER':`1px solid ${rgba(a,.25)}`,
    'MODERN_D_BORDER_RAW':rgba(a,.25),
    'MODERN_LOGO_BG':rgba(a,.08),
    'MODERN_DIVIDER':rgba(a,.12),
    'MODERN_L_HOVER':rgba(a,.04),
    'MODERN_D_HOVER':rgba(a,.06),
    'MODERN_CLOSE_BG':rgba(a,.10),
    'MODERN_CLOSE_BORDER':rgba(a,.20),
    'MODERN_BTN_OL_BG':rgba(a,.08),
    'MODERN_BTN_OL_BORDER':rgba(a,.25),
    'MODERN_BTN_P_SHADOW':`0 4px 16px ${rgba(a,.4)}`,
    'MODERN_L_S':`0 0 0 3px ${rgba(a,.06)}, 0 4px 24px rgba(15,23,42,0.08)`,
    'MODERN_L_SH':`0 0 0 4px ${rgba(a,.15)}, 0 8px 32px ${rgba(a,.20)}, 0 0 20px ${rgba(a,.12)}`,
    'MODERN_D_S':`0 0 0 1px ${rgba(a,.15)}, 0 0 32px ${rgba(a,.35)}, 0 4px 20px rgba(0,0,0,0.6)`,
    'MODERN_D_SH':`0 0 0 1px ${rgba(a,.7)}, 0 0 48px ${rgba(a,.55)}, 0 8px 32px rgba(0,0,0,0.7)`,
    'GLASS_BTN_P_SHADOW':`0 2px 12px ${rgba(a,.45)}`
  };
  const out={};
  for(const [k,v] of Object.entries(vars)) out[k]=(map[v]||v);
  return out;
}

function applyTheme(){
  const root=document.documentElement;
  const themeSet=THEMES[S.style];
  const raw=themeSet[S.mode]||themeSet.light;
  const vars=resolveTokens(raw);
  for(const [k,v] of Object.entries(vars)) root.style.setProperty(k,v);
  root.style.setProperty('--accent',S.accent);
  root.style.setProperty('--radius',S.radius+'px');
  document.getElementById('mode-section').style.display='block';

  const stage=document.getElementById('preview-stage');
  stage.classList.remove('glass-bg-light','glass-bg-dark');
  if(S.style==='glass'){
    stage.classList.add(S.mode==='dark'?'glass-bg-dark':'glass-bg-light');
  }

  const posL={"bottom-right":"Dole vpravo","bottom-left":"Dole vľavo","top-right":"Hore vpravo","top-left":"Hore vľavo"};
  const modeLabel=S.mode==='dark'?' · Dark':' · Light';
  document.getElementById('preview-dot').style.background=S.accent;
  document.getElementById('preview-dot').style.boxShadow=`0 0 8px ${S.accent}`;
  document.getElementById('preview-text').textContent=`${S.style[0].toUpperCase()+S.style.slice(1)}${modeLabel} · ${S.size} · ${posL[S.pos]}`;
}

function buildBadge(){
  const badge=document.getElementById('gr-badge');
  const top=isTop(),left=isLeft();
  const t=LANGS[S.lang];
  badge.className=top?'vert':'horiz';
  if(top) badge.classList.add(left?'side-left':'side-right');
  if(top){
    badge.innerHTML=`<div class="vert-stars">${Array(5).fill(STAR(14)).join('')}</div>`
      +(S.showCount?`<span class="vert-count">47 ${t.reviews}</span>`:'')
      +`<div class="vert-divider"></div><span class="vert-score">5.0</span>`
      +`<div class="gr-logo-wrap" style="width:26px;height:26px;margin-top:2px">${G_SVG(16)}</div>`;
  } else {
    badge.innerHTML=`<div class="gr-logo-wrap" style="width:42px;height:42px">${G_SVG(26)}</div>`
      +`<div class="gr-badge-info">`
      +`<span class="gr-badge-label">${t.label}</span>`
      +`<div class="gr-score-block">`
      +`<span class="gr-badge-score">5.0</span>`
      +`<div class="gr-stars-count">`
      +`<div class="gr-badge-stars">${Array(5).fill(STAR(14)).join('')}</div>`
      +(S.showCount?`<span class="gr-badge-count">47 ${t.reviews}</span>`:'')
      +`</div></div></div>`;
  }
}

function applyPosition(){
  const badge=document.getElementById('gr-badge');
  const panel=document.getElementById('gr-panel');
  const stage=document.getElementById('preview-stage');
  const top=isTop(),left=isLeft();
  const o=currentDevice==='mobile'?S.offsetMobile:S.offsetDesktop;
  const sc=SIZES[S.size];

  badge.style.position='absolute';
  badge.style.transform=`scale(${sc})`;

  if(top){
    badge.style.top=(o.top||100)+'px'; badge.style.bottom='auto';
    badge.style.left=left?'0':'auto'; badge.style.right=!left?'0':'auto';
    badge.style.transformOrigin=`top ${left?'left':'right'}`;
  } else {
    badge.style.top='auto'; badge.style.bottom=(o.bottom||28)+'px';
    badge.style.left=left?(o.left||28)+'px':'auto';
    badge.style.right=!left?(o.right||28)+'px':'auto';
    badge.style.transformOrigin=`bottom ${left?'left':'right'}`;
  }

  setTimeout(()=>{
    const sRect=stage.getBoundingClientRect();
    const br=badge.getBoundingClientRect();
    if(top){
      panel.style.left=left?(br.right-sRect.left+GAP)+'px':'auto';
      panel.style.right=!left?(sRect.right-br.left+GAP)+'px':'auto';
      panel.style.top=(br.top-sRect.top)+'px'; panel.style.bottom='auto';
    } else {
      const fromBottom=sRect.bottom-br.bottom;
      panel.style.bottom=(fromBottom+br.height*sc+GAP)+'px'; panel.style.top='auto';
      panel.style.left=left?(br.left-sRect.left)+'px':'auto';
      panel.style.right=!left?(sRect.right-br.right)+'px':'auto';
    }
  },40);
}

function buildOffsetFields(){
  const top=isTop(),left=isLeft();
  const vKey=top?'top':'bottom', hKey=left?'left':'right';
  function fields(prefix,obj){
    let h=`<div class="offset-row"><label>${top?'Od vrchu':'Od spodu'}</label><input class="offset-input" type="number" value="${obj[vKey]||28}" min="0" max="400" oninput="setOffset('${prefix}','${vKey}',this.value)"> px</div>`;
    if(!top) h+=`<div class="offset-row" style="margin-top:6px"><label>${left?'Od ľava':'Od prava'}</label><input class="offset-input" type="number" value="${obj[hKey]||28}" min="0" max="400" oninput="setOffset('${prefix}','${hKey}',this.value)"> px</div>`;
    else h+=`<p style="font-size:11px;color:#9ca3af;margin-top:8px">Tab je prichytený k hrane – horizontálny offset sa nenastavuje.</p>`;
    return h;
  }
  document.getElementById('offset-desktop-fields').innerHTML=fields('offsetDesktop',S.offsetDesktop);
  document.getElementById('offset-mobile-fields').innerHTML=fields('offsetMobile',S.offsetMobile);
}

function setDevice(dev,el){
  currentDevice=dev;
  document.querySelectorAll('.dev-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active');
  const frame=document.getElementById('device-frame');
  const label=document.getElementById('device-label');
  const stage=document.getElementById('preview-stage');
  frame.className=''; frame.style.display='none'; stage.classList.remove('device-mode');
  if(dev==='desktop'){
    label.textContent='🖥 Desktop preview';
  } else {
    frame.classList.add(dev==='mobile'?'mobile':'tablet','visible');
    label.textContent=dev==='mobile'?'📱 Mobile preview':'⬜ Tablet preview';
    stage.classList.add('device-mode');
  }
  applyPosition();
}

function updateTexts(){
  document.getElementById('btn-write').textContent='✏️ '+S.ctaWrite;
  document.getElementById('btn-all').textContent=S.ctaAll;
}

function setLang(lang){
  S.lang=lang; const t=LANGS[lang];
  S.ctaWrite=t.writeReview; S.ctaAll=t.allReviews;
  document.getElementById('inp-write').value=t.writeReview;
  document.getElementById('inp-all').value=t.allReviews;
  document.getElementById('panel-count').textContent=`· 47 ${t.reviews}`;
  updateTexts(); buildBadge();
}

function setStyle(s,el){ document.querySelectorAll('[data-style]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.style=s; applyTheme(); buildBadge(); }
function setColor(el){ document.querySelectorAll('.color-swatch').forEach(c=>c.classList.remove('active')); el.classList.add('active'); S.accent=el.dataset.color; applyTheme(); buildBadge(); }
function setColorHex(v){ S.accent=v; applyTheme(); buildBadge(); }
function setMode(m,el){ document.querySelectorAll('#mode-section .toggle-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.mode=m; applyTheme(); }
function setRadius(v){ S.radius=parseInt(v); document.getElementById('radius-val').textContent=v+'px'; applyTheme(); applyPosition(); }
function setSize(s,el){ document.querySelectorAll('[data-size]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.size=s; applyTheme(); applyPosition(); }
function setPos(el){ document.querySelectorAll('.pos-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.pos=el.dataset.pos; const top=isTop(),left=isLeft(); S.offsetDesktop={[top?'top':'bottom']:top?100:28,...(top?{}:{[left?'left':'right']:28})}; S.offsetMobile={[top?'top':'bottom']:top?80:16,...(top?{}:{[left?'left':'right']:16})}; buildOffsetFields(); buildBadge(); applyPosition(); panelOpen=false; document.getElementById('gr-panel').classList.remove('open'); }
function setOffset(key,field,val){ S[key][field]=parseInt(val)||0; applyPosition(); }
function setOffsetTab(tab,el){ activeOffsetTab=tab; document.querySelectorAll('.offset-tab').forEach(b=>b.classList.remove('active')); el.classList.add('active'); document.getElementById('offset-desktop-fields').style.display=tab==='desktop'?'block':'none'; document.getElementById('offset-mobile-fields').style.display=tab==='mobile'?'block':'none'; }
function togglePanel(){ panelOpen=!panelOpen; document.getElementById('gr-panel').classList.toggle('open',panelOpen); }

function renderReviews(){
  const MAX=130;
  document.getElementById('gr-reviews-list').innerHTML=reviews.map((rv,i)=>{
    const long=rv.text.length>MAX, short=long?rv.text.slice(0,MAX)+'...':rv.text;
    return `<div class="gr-review-item"><div class="gr-review-top"><div class="gr-avatar" style="background:${rv.col}">${rv.init}</div><div><div class="gr-reviewer-name">${rv.name}</div><div class="gr-review-date">${rv.date}</div></div></div><div class="gr-review-stars">${Array(rv.r).fill(STAR(12)).join('')}</div><div class="gr-review-text"><span id="s${i}" class="gr-text-short">${short}${long?`<span class="gr-read-more" onclick="exp(${i})"> Čítať viac</span>`:''}</span>${long?`<span id="f${i}" class="gr-text-full">${rv.text}<span class="gr-read-more" onclick="col(${i})"> Menej</span></span>`:''}</div></div>`;
  }).join('');
}
function exp(i){ document.getElementById('s'+i).classList.add('hidden'); document.getElementById('f'+i).classList.add('visible'); }
function col(i){ document.getElementById('s'+i).classList.remove('hidden'); document.getElementById('f'+i).classList.remove('visible'); }

document.getElementById('panel-stars').innerHTML=Array(5).fill(STAR(12)).join('');
renderReviews(); buildBadge(); buildOffsetFields(); applyTheme(); applyPosition();
window.addEventListener('resize',applyPosition);
