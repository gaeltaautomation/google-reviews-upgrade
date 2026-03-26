const G_SVG=(w=26)=>`<svg viewBox="0 0 48 48" width="${w}" height="${w}"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
const STAR=(w=14)=>`<svg viewBox="0 0 20 20" width="${w}" height="${w}"><path fill="#f59e0b" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

const LANGS={
  sk:{label:"Recenzie Google",reviews:"recenzií",writeReview:"Napísať recenziu",allReviews:"Všetky recenzie",barText:"Naši zákazníci nás milujú",ctaText:"Napísať recenziu"},
  cz:{label:"Recenze Google",reviews:"recenzí",writeReview:"Napsat recenzi",allReviews:"Všechny recenze",barText:"Naši zákazníci nás milují",ctaText:"Napsat recenzi"},
  en:{label:"Google Reviews",reviews:"reviews",writeReview:"Write a review",allReviews:"All reviews",barText:"Our customers love us",ctaText:"Write a review"},
  de:{label:"Google Bewertungen",reviews:"Bewertungen",writeReview:"Bewertung schreiben",allReviews:"Alle Bewertungen",barText:"Unsere Kunden lieben uns",ctaText:"Bewertung schreiben"},
  hu:{label:"Google vélemények",reviews:"vélemény",writeReview:"Vélemény írása",allReviews:"Összes vélemény",barText:"Ügyfeleink szeretnek minket",ctaText:"Vélemény írása"},
  ro:{label:"Recenzii Google",reviews:"recenzii",writeReview:"Scrieți o recenzie",allReviews:"Toate recenziile",barText:"Clienții noștri ne iubesc",ctaText:"Scrieți o recenzie"},
  pl:{label:"Opinie Google",reviews:"opinii",writeReview:"Napisz opinię",allReviews:"Wszystkie recenzje",barText:"Nasi klienci nas kochają",ctaText:"Napisz opinię"},
  it:{label:"Recensioni Google",reviews:"recensioni",writeReview:"Scrivi una recensione",allReviews:"Tutte le recensioni",barText:"I nostri clienti ci amano",ctaText:"Scrivi una recensione"}
};

const WIDGET_TYPES = {
  c0: { label: 'Floating', icon: '💬', sections: ['appearance','position','content','reviews-logic','display'] },
  c1: { label: 'Karusel', icon: '🎠', sections: ['appearance','content-c1','reviews-logic-c1','display-pages'] },
  c2: { label: 'Lišta', icon: '📌', sections: ['appearance-c2','position-c2','content-c2','display-devices','display-pages'] },
  c3: { label: 'Embed', icon: '🧩', sections: ['appearance','content-c3','reviews-logic','display-pages'] },
  c4: { label: 'CTA button', icon: '✍️', sections: ['appearance-c4','position','content-c4','display'] }
};

const SECTIONS = {

  'appearance': () => `
    <div class="cfg-group"><span>🎨</span> Vzhľad</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✦</span> Štýl</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.style==='classic'?'active':''}" data-style="classic" onclick="setStyle('classic',this)">Classic</div>
        <div class="pill-btn ${S.style==='modern'?'active':''}" data-style="modern" onclick="setStyle('modern',this)">Modern</div>
        <div class="pill-btn ${S.style==='glass'?'active':''}" data-style="glass" onclick="setStyle('glass',this)">Glass</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">◉</span> Farba</div>
      <div class="cfg-row" id="color-row">${renderColorRow()}</div>
    </div>
    <div class="cfg-section" id="mode-section">
      <div class="cfg-label"><span class="cfg-label-icon">◐</span> Režim</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.mode==='light'?'active':''}" onclick="setMode('light',this)">☀️ Light</div>
        <div class="toggle-btn ${S.mode==='dark'?'active':''}" onclick="setMode('dark',this)">🌙 Dark</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">⌀</span> Border radius</div>
        <span class="cfg-slider-val" id="radius-val">${S.radius}px</span>
      </div>
      <input type="range" class="cfg-slider" min="0" max="30" value="${S.radius}" oninput="setRadius(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊡</span> Veľkosť</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.size==='S'?'active':''}" data-size="S" onclick="setSize('S',this)">S — Malý</div>
        <div class="pill-btn ${S.size==='M'?'active':''}" data-size="M" onclick="setSize('M',this)">M — Stredný</div>
        <div class="pill-btn ${S.size==='L'?'active':''}" data-size="L" onclick="setSize('L',this)">L — Veľký</div>
      </div>
    </div>`,

  'appearance-c2': () => `
    <div class="cfg-group"><span>🎨</span> Vzhľad</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">◉</span> Farba</div>
      <div class="cfg-row" id="color-row">${renderColorRow()}</div>
    </div>
    <div class="cfg-section" id="mode-section">
      <div class="cfg-label"><span class="cfg-label-icon">◐</span> Režim</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.mode==='light'?'active':''}" onclick="setMode('light',this)">☀️ Light</div>
        <div class="toggle-btn ${S.mode==='dark'?'active':''}" onclick="setMode('dark',this)">🌙 Dark</div>
      </div>
    </div>`,

  'appearance-c4': () => `
    <div class="cfg-group"><span>🎨</span> Vzhľad</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">◉</span> Farba</div>
      <div class="cfg-row" id="color-row">${renderColorRow()}</div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">⌀</span> Border radius</div>
        <span class="cfg-slider-val" id="radius-val">${S.radius}px</span>
      </div>
      <input type="range" class="cfg-slider" min="0" max="30" value="${S.radius}" oninput="setRadius(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊡</span> Veľkosť</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.size==='S'?'active':''}" data-size="S" onclick="setSize('S',this)">S — Malý</div>
        <div class="pill-btn ${S.size==='M'?'active':''}" data-size="M" onclick="setSize('M',this)">M — Stredný</div>
        <div class="pill-btn ${S.size==='L'?'active':''}" data-size="L" onclick="setSize('L',this)">L — Veľký</div>
      </div>
    </div>`,

  'position': () => `
    <div class="cfg-group"><span>📍</span> Umiestnenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊕</span> Pozícia</div>
      <div class="pos-grid">
        <div class="pos-btn ${S.pos==='top-left'?'active':''}" data-pos="top-left" onclick="setPos(this)">↖ Hore<br>vľavo</div>
        <div class="pos-btn hb"></div>
        <div class="pos-btn ${S.pos==='top-right'?'active':''}" data-pos="top-right" onclick="setPos(this)">↗ Hore<br>vpravo</div>
        <div class="pos-btn hb"></div><div class="pos-btn hb"></div><div class="pos-btn hb"></div>
        <div class="pos-btn ${S.pos==='bottom-left'?'active':''}" data-pos="bottom-left" onclick="setPos(this)">↙ Dole<br>vľavo</div>
        <div class="pos-btn hb"></div>
        <div class="pos-btn ${S.pos==='bottom-right'?'active':''}" data-pos="bottom-right" onclick="setPos(this)">↘ Dole<br>vpravo</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">↔</span> Odsadenie</div>
      <div class="offset-tabs">
        <div class="offset-tab active" onclick="setOffsetTab('desktop',this)">🖥 Desktop</div>
        <div class="offset-tab" onclick="setOffsetTab('mobile',this)">📱 Mobile</div>
      </div>
      <div id="offset-desktop-fields"></div>
      <div id="offset-mobile-fields" style="display:none"></div>
    </div>`,

  'position-c2': () => `
    <div class="cfg-group"><span>📍</span> Umiestnenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊕</span> Pozícia lišty</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.barPos==='top'?'active':''}" onclick="setBarPos('top',this)">▲ Navrchu</div>
        <div class="toggle-btn ${S.barPos==='bottom'?'active':''}" onclick="setBarPos('bottom',this)">▼ Dole</div>
      </div>
    </div>`,

  'content': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Texty tlačidiel</div>
      <span class="cfg-input-label">Napísať recenziu</span>
      <input id="inp-write" class="cfg-input" type="text" value="${S.ctaWrite}" oninput="S.ctaWrite=this.value;updateTexts()">
      <span class="cfg-input-label">Zobraziť všetky</span>
      <input id="inp-all" class="cfg-input" type="text" value="${S.ctaAll}" oninput="S.ctaAll=this.value;updateTexts()">
    </div>`,

  'content-c1': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Text tlačidla</div>
      <input id="inp-write" class="cfg-input" type="text" value="${S.ctaWrite}" oninput="S.ctaWrite=this.value;buildCarousel()">
    </div>`,

  'content-c2': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Text lišty</div>
      <input id="inp-bar" class="cfg-input" type="text" value="${S.barCustomText||''}" placeholder="${LANGS[S.lang].barText}" oninput="S.barCustomText=this.value;buildBar()">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✖</span> Zatvárateľná</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.barDismissible?'active':''}" onclick="setBarDismissible(true,this)">Áno</div>
        <div class="toggle-btn ${!S.barDismissible?'active':''}" onclick="setBarDismissible(false,this)">Nie</div>
      </div>
    </div>`,

  'content-c3': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>`,

  'content-c4': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Text tlačidla</div>
      <input id="inp-cta" class="cfg-input" type="text" value="${S.ctaWrite}" oninput="S.ctaWrite=this.value;buildCTA()">
    </div>`,

  'reviews-logic': () => `
    <div class="cfg-group"><span>🔧</span> Logika recenzií</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⭐</span> Minimálne hodnotenie</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.minRating===0?'active':''}" data-minrating="0" onclick="setMinRating(0,this)">Všetky</div>
        <div class="pill-btn ${S.minRating===4?'active':''}" data-minrating="4" onclick="setMinRating(4,this)">4★ a viac</div>
        <div class="pill-btn ${S.minRating===5?'active':''}" data-minrating="5" onclick="setMinRating(5,this)">Len 5★</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">#</span> Koľko recenzií zobraziť</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.reviewCount===3?'active':''}" data-count="3" onclick="setReviewCount(3,this)">3 <span style="opacity:.55;font-size:9px">lite</span></div>
        <div class="pill-btn ${S.reviewCount===5?'active':''}" data-count="5" onclick="setReviewCount(5,this)">5 <span style="opacity:.55;font-size:9px">default</span></div>
        <div class="pill-btn ${S.reviewCount===10?'active':''}" data-count="10" onclick="setReviewCount(10,this)">10 <span style="opacity:.55;font-size:9px">pro</span></div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">✂</span> Dĺžka textu</div>
        <span class="cfg-slider-val" id="textlen-val">${S.textLen} znakov</span>
      </div>
      <input type="range" class="cfg-slider" min="60" max="400" value="${S.textLen}" step="10" oninput="setTextLen(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📅</span> Dátum recenzie</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.dateFormat==='relative'?'active':''}" onclick="setDateFormat('relative',this)">Relatívny</div>
        <div class="toggle-btn ${S.dateFormat==='absolute'?'active':''}" onclick="setDateFormat('absolute',this)">Presný dátum</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">🗣</span> Odpoveď majiteľa</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.ownerReply==='show'?'active':''}" onclick="setOwnerReply('show',this)">Zobraziť</div>
        <div class="toggle-btn ${S.ownerReply==='hide'?'active':''}" onclick="setOwnerReply('hide',this)">Skryť</div>
      </div>
    </div>`,

  'reviews-logic-c1': () => `
    <div class="cfg-group"><span>🔧</span> Logika recenzií</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⭐</span> Minimálne hodnotenie</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.minRating===0?'active':''}" data-minrating="0" onclick="setMinRating(0,this)">Všetky</div>
        <div class="pill-btn ${S.minRating===4?'active':''}" data-minrating="4" onclick="setMinRating(4,this)">4★ a viac</div>
        <div class="pill-btn ${S.minRating===5?'active':''}" data-minrating="5" onclick="setMinRating(5,this)">Len 5★</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">#</span> Koľko kariet zobraziť</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.reviewCount===3?'active':''}" data-count="3" onclick="setReviewCount(3,this)">3</div>
        <div class="pill-btn ${S.reviewCount===5?'active':''}" data-count="5" onclick="setReviewCount(5,this)">5</div>
        <div class="pill-btn ${S.reviewCount===8?'active':''}" data-count="8" onclick="setReviewCount(8,this)">8</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">✂</span> Dĺžka textu</div>
        <span class="cfg-slider-val" id="textlen-val">${S.textLen} znakov</span>
      </div>
      <input type="range" class="cfg-slider" min="60" max="300" value="${S.textLen}" step="10" oninput="setTextLen(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📅</span> Dátum recenzie</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.dateFormat==='relative'?'active':''}" onclick="setDateFormat('relative',this)">Relatívny</div>
        <div class="toggle-btn ${S.dateFormat==='absolute'?'active':''}" onclick="setDateFormat('absolute',this)">Presný dátum</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">🗣</span> Odpoveď majiteľa</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.ownerReply==='show'?'active':''}" onclick="setOwnerReply('show',this)">Zobraziť</div>
        <div class="toggle-btn ${S.ownerReply==='hide'?'active':''}" onclick="setOwnerReply('hide',this)">Skryť</div>
      </div>
    </div>`,

  'display': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📊</span> Doplnky</div>
      <label class="chk-single"><input type="checkbox" ${S.showCount?'checked':''} onchange="S.showCount=this.checked;buildBadge();"><span>Zobraziť počet recenzií</span></label>
      <div class="cfg-label" style="margin-top:10px"><span class="cfg-label-icon">📺</span> Zobraziť na zariadeniach</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked"><span>📱 Mobil</span></label>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📄</span> Zobraziť na stránkach</div>
      ${renderPagesGrid()}
    </div>`,

  'display-devices': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📺</span> Zobraziť na zariadeniach</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked"><span>📱 Mobil</span></label>
    </div>`,

  'display-pages': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📺</span> Zobraziť na zariadeniach</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked"><span>📱 Mobil</span></label>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📄</span> Zobraziť na stránkach</div>
      ${renderPagesGrid()}
    </div>`
};

function renderColorRow(){
  const colors=['#4285F4','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#111827'];
  return colors.map(c=>`<div class="color-swatch ${S.accent===c?'active':''}" style="background:${c}" data-color="${c}" onclick="setColor(this)"></div>`).join('')
    + `<div class="color-custom">+<input type="color" value="${S.accent}" oninput="setColorHex(this.value)"></div>`;
}

function renderLangSection(){
  const langs=[
    ['sk','🇸🇰 Slovenčina'],['cz','🇨🇿 Čeština'],['en','🇬🇧 English'],['de','🇩🇪 Deutsch'],
    ['hu','🇭🇺 Magyar'],['ro','🇷🇴 Română'],['pl','🇵🇱 Polski'],['it','🇮🇹 Italiano']
  ];
  return `<div class="cfg-label"><span class="cfg-label-icon">🌍</span> Jazyk widgetu</div>
    <div class="lang-grid">${langs.map(([v,l])=>`<label class="lang-opt"><input type="radio" name="lang" value="${v}" ${S.lang===v?'checked':''} onchange="setLang(this.value)"><span>${l}</span></label>`).join('')}</div>`;
}

function renderPagesGrid(){
  const pages=['Homepage','Kategórie','Detail produktu','Články','Košík','Doprava &amp; platba','Objednávka','Ďakovná str.'];
  return `<div class="chk-grid">${pages.map(p=>`<label class="chk-item"><input type="checkbox" checked><span>${p}</span></label>`).join('')}</div>`;
}

// ── SWITCH TYPE ───────────────────────────────────────────────────────────────
function switchType(type, el) {
  S.widgetType = type;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const dyn = document.getElementById('cfg-dynamic');
  dyn.innerHTML = WIDGET_TYPES[type].sections.map(s => SECTIONS[s] ? SECTIONS[s]() : '').join('');

  ['c0','c1','c2','c3','c4'].forEach(t => {
    const el2 = document.getElementById(t === 'c0' ? 'gr-badge' : `preview-${t}`);
    const panel = document.getElementById('gr-panel');
    if (t === 'c0') {
      if (el2) el2.style.display = type === 'c0' ? '' : 'none';
      if (panel) panel.style.display = type === 'c0' ? '' : 'none';
    } else {
      if (el2) el2.style.display = type === t ? 'flex' : 'none';
    }
  });

  if (type === 'c0') {
    buildOffsetFields(); applyTheme(); buildBadge(); applyPosition();
  } else if (type === 'c1') {
    applyTheme(); buildCarousel();
  } else if (type === 'c2') {
    applyTheme(); buildBar();
  } else if (type === 'c3') {
    applyTheme(); buildEmbed();
  } else if (type === 'c4') {
    buildOffsetFields(); applyTheme(); buildCTA(); applyCTAPosition();
  }

  updatePreviewLabel();
}

function updatePreviewLabel() {
  const typeLabel = WIDGET_TYPES[S.widgetType].label;
  const posL = {"bottom-right":"Dole vpravo","bottom-left":"Dole vľavo","top-right":"Hore vpravo","top-left":"Hore vľavo"};
  const modeLabel = S.mode === 'dark' ? ' · Dark' : ' · Light';
  document.getElementById('preview-dot').style.background = S.accent;
  document.getElementById('preview-dot').style.boxShadow = `0 0 8px ${S.accent}`;
  let label = typeLabel + modeLabel;
  if (S.widgetType === 'c0') label += ` · ${S.size} · ${posL[S.pos]}`;
  if (S.widgetType === 'c2') label += ` · ${S.barPos === 'top' ? '▲ Navrchu' : '▼ Dole'}`;
  if (S.widgetType === 'c4') label += ` · ${S.size} · ${posL[S.pos]}`;
  document.getElementById('preview-text').textContent = label;
}

// ── THEMES ───────────────────────────────────────────────────────────────────
const THEMES={
  classic:{
    light:{"--gr-bg":"#fff","--gr-border-style":"1.5px solid #e5e7eb","--gr-border-raw":"#e5e7eb","--gr-logo-bg":"#f3f4f6","--gr-text":"#111","--gr-text-muted":"#6b7280","--gr-text-body":"#4b5563","--gr-divider":"#f3f4f6","--gr-chip":"#f9fafb","--gr-score-color":"#111","--gr-panel-header-bg":"transparent","--gr-review-hover":"#fafafa","--gr-close-bg":"#f9fafb","--gr-close-border":"#e5e7eb","--gr-close-icon":"#6b7280","--gr-close-blur":"none","--gr-btn-outline-bg":"#f9fafb","--gr-btn-outline-border":"#e5e7eb","--gr-btn-outline-color":"#374151","--gr-btn-outline-shadow":"none","--gr-btn-outline-blur":"none","--gr-btn-primary-shadow":"none","--gr-badge-shadow":"0 4px 20px rgba(0,0,0,.10)","--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,.16)","--gr-blur":"none","--gr-blur-hover":"none","--gr-avatar-radius":"50%","--gr-panel-border-radius":"14px"},
    dark:{"--gr-bg":"#1f2937","--gr-border-style":"1.5px solid #374151","--gr-border-raw":"#374151","--gr-logo-bg":"#374151","--gr-text":"#f9fafb","--gr-text-muted":"#9ca3af","--gr-text-body":"#d1d5db","--gr-divider":"#374151","--gr-chip":"#374151","--gr-score-color":"#f9fafb","--gr-panel-header-bg":"transparent","--gr-review-hover":"#374151","--gr-close-bg":"#374151","--gr-close-border":"#4b5563","--gr-close-icon":"#9ca3af","--gr-close-blur":"none","--gr-btn-outline-bg":"#374151","--gr-btn-outline-border":"#4b5563","--gr-btn-outline-color":"#f9fafb","--gr-btn-outline-shadow":"none","--gr-btn-outline-blur":"none","--gr-btn-primary-shadow":"none","--gr-badge-shadow":"0 4px 20px rgba(0,0,0,.4)","--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,.55)","--gr-blur":"none","--gr-blur-hover":"none","--gr-avatar-radius":"50%","--gr-panel-border-radius":"14px"}
  },
  modern:{
    light:{"--gr-bg":"#ffffff","--gr-border-style":"none","--gr-border-raw":"transparent","--gr-logo-bg":"MODERN_LOGO_BG","--gr-text":"#0f172a","--gr-text-muted":"#64748b","--gr-text-body":"#475569","--gr-divider":"transparent","--gr-chip":"#f8fafc","--gr-score-color":"ACCENT","--gr-panel-header-bg":"MODERN_HEADER_BG_L","--gr-review-hover":"MODERN_L_HOVER","--gr-close-bg":"rgba(255,255,255,0.70)","--gr-close-border":"MODERN_CLOSE_BORDER","--gr-close-icon":"ACCENT","--gr-close-blur":"none","--gr-btn-outline-bg":"#f8fafc","--gr-btn-outline-border":"MODERN_BTN_OL_BORDER","--gr-btn-outline-color":"#0f172a","--gr-btn-outline-shadow":"none","--gr-btn-outline-blur":"none","--gr-btn-primary-shadow":"MODERN_BTN_P_SHADOW","--gr-badge-shadow":"MODERN_L_S","--gr-badge-shadow-hover":"MODERN_L_SH","--gr-blur":"none","--gr-blur-hover":"none","--gr-avatar-radius":"8px","--gr-panel-border-radius":"20px"},
    dark:{"--gr-bg":"#020617","--gr-border-style":"none","--gr-border-raw":"transparent","--gr-logo-bg":"MODERN_LOGO_BG","--gr-text":"#e2e8f0","--gr-text-muted":"#64748b","--gr-text-body":"#94a3b8","--gr-divider":"transparent","--gr-chip":"#0f172a","--gr-score-color":"ACCENT","--gr-panel-header-bg":"MODERN_HEADER_BG_D","--gr-review-hover":"MODERN_D_HOVER","--gr-close-bg":"rgba(255,255,255,0.06)","--gr-close-border":"MODERN_CLOSE_BORDER","--gr-close-icon":"ACCENT","--gr-close-blur":"none","--gr-btn-outline-bg":"rgba(255,255,255,0.04)","--gr-btn-outline-border":"MODERN_BTN_OL_BORDER","--gr-btn-outline-color":"#e2e8f0","--gr-btn-outline-shadow":"none","--gr-btn-outline-blur":"none","--gr-btn-primary-shadow":"MODERN_BTN_P_SHADOW","--gr-badge-shadow":"MODERN_D_S","--gr-badge-shadow-hover":"MODERN_D_SH","--gr-blur":"none","--gr-blur-hover":"none","--gr-avatar-radius":"8px","--gr-panel-border-radius":"20px"}
  },
  glass:{
    light:{"--gr-bg":"rgba(255,255,255,0.45)","--gr-border-style":"1px solid rgba(255,255,255,0.60)","--gr-border-raw":"rgba(255,255,255,0.60)","--gr-logo-bg":"rgba(255,255,255,0.50)","--gr-text":"#0f172a","--gr-text-muted":"#64748b","--gr-text-body":"#334155","--gr-divider":"rgba(15,23,42,0.08)","--gr-chip":"rgba(15,23,42,0.05)","--gr-score-color":"#0f172a","--gr-panel-header-bg":"rgba(255,255,255,0.30)","--gr-review-hover":"rgba(15,23,42,0.04)","--gr-close-bg":"rgba(255,255,255,0.50)","--gr-close-border":"rgba(15,23,42,0.12)","--gr-close-icon":"#64748b","--gr-close-blur":"blur(10px)","--gr-btn-outline-bg":"rgba(255,255,255,0.40)","--gr-btn-outline-border":"rgba(15,23,42,0.15)","--gr-btn-outline-color":"#0f172a","--gr-btn-outline-shadow":"inset 0 1px 0 rgba(255,255,255,0.80)","--gr-btn-outline-blur":"blur(10px)","--gr-btn-primary-shadow":"GLASS_BTN_P_SHADOW","--gr-badge-shadow":"0 4px 24px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.80) inset","--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.90) inset","--gr-blur":"blur(20px)","--gr-blur-hover":"blur(24px)","--gr-avatar-radius":"50%","--gr-panel-border-radius":"14px"},
    dark:{"--gr-bg":"rgba(0,0,0,0.20)","--gr-border-style":"1px solid rgba(255,255,255,0.15)","--gr-border-raw":"rgba(255,255,255,0.15)","--gr-logo-bg":"rgba(255,255,255,0.10)","--gr-text":"#ffffff","--gr-text-muted":"rgba(255,255,255,0.60)","--gr-text-body":"rgba(255,255,255,0.75)","--gr-divider":"rgba(255,255,255,0.10)","--gr-chip":"rgba(255,255,255,0.07)","--gr-score-color":"#ffffff","--gr-panel-header-bg":"rgba(0,0,0,0.10)","--gr-review-hover":"rgba(255,255,255,0.06)","--gr-close-bg":"rgba(255,255,255,0.12)","--gr-close-border":"rgba(255,255,255,0.18)","--gr-close-icon":"rgba(255,255,255,0.70)","--gr-close-blur":"blur(10px)","--gr-btn-outline-bg":"rgba(255,255,255,0.08)","--gr-btn-outline-border":"rgba(255,255,255,0.18)","--gr-btn-outline-color":"#ffffff","--gr-btn-outline-shadow":"inset 0 1px 0 rgba(255,255,255,0.15)","--gr-btn-outline-blur":"blur(10px)","--gr-btn-primary-shadow":"GLASS_BTN_P_SHADOW","--gr-badge-shadow":"0 4px 24px rgba(0,0,0,0.40), 0 1px 0 rgba(255,255,255,0.12) inset","--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.15) inset","--gr-blur":"blur(20px)","--gr-blur-hover":"blur(24px)","--gr-avatar-radius":"50%","--gr-panel-border-radius":"14px"}
  }
};

function rgba(hex,a){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

const reviews=[
  {name:"Jana Klincová",init:"JK",col:"#8b5cf6",r:5,date:"pred týždňom",absDate:"19.3.2026",text:"Spoluprácu s firmou pri migrácii na Shoptet hodnotím veľmi pozitívne. Celý proces prebehol hladko, profesionálne a bez zbytočných komplikácií.",ownerReply:"Ďakujeme za krásne slová! Teší nás, že migrácia prebehla hladko."},
  {name:"Erik Svitek",init:"ES",col:"#059669",r:5,date:"pred týždňom",absDate:"18.3.2026",text:"Maximálna spokojnosť. Na všetko našli riešenie rýchlo. Vrelo odporúčam!",ownerReply:null},
  {name:"Dimo Van",init:"DV",col:"#2563eb",r:5,date:"pred mesiacom",absDate:"26.2.2026",text:"S firmou Gaelta som mal výbornú skúsenosť. Oceňujem promptnú komunikáciu, profesionalitu a precízne spracovanie každého detailu.",ownerReply:"Ďakujeme, Dimo! Radi sme pomohli."},
  {name:"Sarah Ivičičová",init:"SI",col:"#db2777",r:5,date:"pred mesiacom",absDate:"14.2.2026",text:"Skvelá práca, veľmi odporúčam!",ownerReply:null},
  {name:"Amer Arslan",init:"AA",col:"#d97706",r:5,date:"pred mesiacom",absDate:"10.2.2026",text:"Profesionálni, efektívni a ľahko sa s nimi spolupracuje. Vrelo odporúčam!",ownerReply:"Veľa vďaka, Amer!"}
];

const SIZES={S:.82,M:1,L:1.22};
const GAP=10;
let panelOpen=false,currentDevice='desktop',activeOffsetTab='desktop';
let carouselIndex=0;
let S={
  widgetType:'c0',
  style:'classic',accent:'#4285F4',mode:'light',radius:14,size:'M',pos:'bottom-right',
  offsetDesktop:{bottom:28,right:28},offsetMobile:{bottom:16,right:16},
  lang:'sk',ctaWrite:'Napísať recenziu',ctaAll:'Všetky recenzie',
  showCount:true,devDesktop:true,devTablet:true,devMobile:true,
  minRating:0,reviewCount:5,textLen:150,dateFormat:'relative',ownerReply:'show',
  barPos:'top',barDismissible:true,barCustomText:''
};

function isTop(){return S.pos.startsWith('top');}
function isLeft(){return S.pos.endsWith('left');}

function resolveTokens(vars){
  const a=S.accent;
  const map={
    'ACCENT':a,
    'MODERN_LOGO_BG':rgba(a,.10),
    'MODERN_HEADER_BG_L':`linear-gradient(135deg, ${rgba(a,.08)} 0%, rgba(248,250,252,0) 100%)`,
    'MODERN_HEADER_BG_D':`linear-gradient(135deg, ${rgba(a,.18)} 0%, rgba(2,6,23,0) 100%)`,
    'MODERN_L_HOVER':rgba(a,.04),
    'MODERN_D_HOVER':rgba(a,.07),
    'MODERN_CLOSE_BORDER':rgba(a,.20),
    'MODERN_BTN_OL_BORDER':rgba(a,.22),
    'MODERN_BTN_P_SHADOW':`0 4px 20px ${rgba(a,.45)}, 0 1px 0 ${rgba(a,.60)} inset`,
    'MODERN_L_S':`0 0 0 2px ${rgba(a,.12)}, 0 8px 32px rgba(15,23,42,0.10)`,
    'MODERN_L_SH':`0 0 0 3px ${rgba(a,.30)}, 0 12px 40px ${rgba(a,.22)}, 0 4px 12px rgba(15,23,42,0.08)`,
    'MODERN_D_S':`0 0 0 1px ${rgba(a,.20)}, 0 0 40px ${rgba(a,.40)}, 0 4px 24px rgba(0,0,0,0.70)`,
    'MODERN_D_SH':`0 0 0 2px ${rgba(a,.80)}, 0 0 60px ${rgba(a,.60)}, 0 8px 32px rgba(0,0,0,0.80)`,
    'GLASS_BTN_P_SHADOW':`0 2px 12px ${rgba(a,.45)}`
  };
  const out={};
  for(const [k,v] of Object.entries(vars)) out[k]=(map[v]||v);
  return out;
}

function applyTheme(){
  const root=document.documentElement;
  const themeSet=THEMES[S.style]||THEMES.classic;
  const raw=themeSet[S.mode]||themeSet.light;
  const vars=resolveTokens(raw);
  for(const [k,v] of Object.entries(vars)) root.style.setProperty(k,v);
  root.style.setProperty('--accent',S.accent);
  root.style.setProperty('--radius',S.radius+'px');
  const panel=document.getElementById('gr-panel');
  panel.classList.toggle('modern-panel', S.style==='modern');
  panel.classList.toggle('modern-dark', S.style==='modern' && S.mode==='dark');
  const stage=document.getElementById('preview-stage');
  stage.classList.remove('glass-bg-light','glass-bg-dark');
  if(S.style==='glass') stage.classList.add(S.mode==='dark'?'glass-bg-dark':'glass-bg-light');
  if(S.widgetType==='c1') buildCarousel();
  if(S.widgetType==='c2') buildBar();
  if(S.widgetType==='c3') buildEmbed();
  if(S.widgetType==='c4') buildCTA();
  updatePreviewLabel();
}

function buildBadge(){
  const badge=document.getElementById('gr-badge');
  const top=isTop(),left=isLeft();
  const t=LANGS[S.lang];
  badge.className=top?'vert':'horiz';
  if(top) badge.classList.add(left?'side-left':'side-right');
  if(S.style==='modern') badge.classList.add('modern-badge');
  if(top){
    badge.innerHTML=`<div class="vert-stars">${Array(5).fill(STAR(14)).join('')}</div>`
      +(S.showCount?`<span class="vert-count">47 ${t.reviews}</span>`:'')+
      `<div class="vert-divider"></div><span class="vert-score">5.0</span>`
      +`<div class="gr-logo-wrap" style="width:26px;height:26px;margin-top:2px">${G_SVG(16)}</div>`;
  } else {
    badge.innerHTML=`<div class="gr-logo-wrap" style="width:42px;height:42px">${G_SVG(26)}</div>`
      +`<div class="gr-badge-info"><span class="gr-badge-label">${t.label}</span>`
      +`<div class="gr-score-block"><span class="gr-badge-score">5.0</span>`
      +`<div class="gr-stars-count"><div class="gr-badge-stars">${Array(5).fill(STAR(14)).join('')}</div>`
      +(S.showCount?`<span class="gr-badge-count">47 ${t.reviews}</span>`:'')+
      `</div></div></div>`;
  }
}

// ── CTA BUTTON (c4) ──────────────────────────────────────────────────────────
function buildCTA(){
  const wrap = document.getElementById('preview-c4');
  if(!wrap) return;

  const t = LANGS[S.lang];
  const sc = SIZES[S.size];

  // resolve variant class based on style + mode
  let variantClass = 'cta-btn';
  if(S.style === 'classic'){
    variantClass += S.mode === 'dark' ? ' cta-outline' : ' cta-outline';
  } else if(S.style === 'modern'){
    variantClass += ' cta-modern';
  } else if(S.style === 'glass'){
    variantClass += S.mode === 'dark' ? ' cta-glass-dark' : ' cta-glass';
  }

  const sizeClass = `cta-size-${S.size.toLowerCase()}`;

  wrap.innerHTML = `
    <button class="${variantClass} ${sizeClass} cta-pop-in"
      style="--accent:${S.accent};border-radius:${S.radius}px;"
      onclick="this.blur()">
      <span class="cta-logo-wrap">${G_SVG(18)}</span>
      <span class="cta-text-block">
        <span class="cta-label">${t.label}</span>
        <span class="cta-stars">${Array(5).fill(STAR(11)).join('')}
          <span class="cta-score">5.0</span>
        </span>
      </span>
      <span class="cta-divider"></span>
      <span class="cta-action">✏️ ${S.ctaWrite}</span>
    </button>`;

  applyCTAPosition();
}

function applyCTAPosition(){
  const wrap = document.getElementById('preview-c4');
  if(!wrap) return;
  const top = isTop(), left = isLeft();
  const o = currentDevice === 'mobile' ? S.offsetMobile : S.offsetDesktop;
  wrap.style.position = 'absolute';
  wrap.style.top    = top    ? (o.top    || 100) + 'px' : 'auto';
  wrap.style.bottom = !top   ? (o.bottom || 28)  + 'px' : 'auto';
  wrap.style.left   = left   ? (o.left   || 28)  + 'px' : 'auto';
  wrap.style.right  = !left  ? (o.right  || 28)  + 'px' : 'auto';
}

// ── STICKY BAR (c2) ──────────────────────────────────────────────────────────
function buildBar(){
  const wrap = document.getElementById('preview-c2');
  if(!wrap) return;

  const t = LANGS[S.lang];
  const barText = S.barCustomText || t.barText;

  wrap.className = '';
  wrap.style.display = 'flex';
  wrap.classList.add(S.barPos === 'top' ? 'bar-top' : 'bar-bottom');

  const dismissHtml = S.barDismissible
    ? `<button class="gr-bar-dismiss" onclick="dismissBar()" title="Zavrieť">
         <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
           <path d="M5 5l10 10M15 5L5 15"/>
         </svg>
       </button>`
    : '';

  wrap.innerHTML = `
    <div class="gr-bar gr-bar-enter">
      <div class="gr-bar-left">
        <div class="gr-bar-logo">${G_SVG(18)}</div>
        <span class="gr-bar-score">5.0</span>
        <div style="display:flex;flex-direction:column;gap:2px">
          <div class="gr-bar-stars">${Array(5).fill(STAR(13)).join('')}</div>
          <span class="gr-bar-count">47 ${t.reviews}</span>
        </div>
      </div>
      <div class="gr-bar-center">${barText}</div>
      <div class="gr-bar-right">
        <button class="gr-bar-cta">✏️ ${t.ctaText}</button>
        ${dismissHtml}
      </div>
    </div>`;
}

function dismissBar(){
  const wrap = document.getElementById('preview-c2');
  if(!wrap) return;
  wrap.style.display = 'none';
  setTimeout(() => { if(S.widgetType === 'c2') { wrap.style.display = 'flex'; buildBar(); } }, 1500);
}

// ── EMBED WIDGET (c3) ────────────────────────────────────────────────────────
function buildEmbed(){
  const wrap = document.getElementById('preview-c3');
  if(!wrap) return;

  const t = LANGS[S.lang];
  const MAX = S.textLen;
  const filtered = reviews.filter(rv => rv.r >= S.minRating).slice(0, S.reviewCount);

  const isModern = S.style === 'modern';
  const scoreCol = isModern ? S.accent : 'var(--gr-score-color, var(--gr-text, #111))';
  const avatarRadius = S.style === 'classic' ? '50%' : (S.style === 'modern' ? '8px' : '50%');

  const headerBg = isModern
    ? (S.mode === 'dark'
        ? `linear-gradient(135deg, ${rgba(S.accent,.18)} 0%, rgba(2,6,23,0) 100%)`
        : `linear-gradient(135deg, ${rgba(S.accent,.08)} 0%, rgba(248,250,252,0) 100%)`)
    : 'var(--gr-panel-header-bg, transparent)';

  const logoRadius = isModern ? '10px' : '50%';

  const cards = filtered.map((rv, i) => {
    const short = rv.text.length > MAX ? rv.text.slice(0, MAX) + '...' : rv.text;
    const dateStr = S.dateFormat === 'absolute' ? rv.absDate : rv.date;
    const replyHtml = (S.ownerReply === 'show' && rv.ownerReply)
      ? `<div class="emb-card-reply">
           <div class="emb-reply-label">💬 Odpoveď</div>
           <div class="emb-reply-text">${rv.ownerReply}</div>
         </div>`
      : '';
    return `<div class="emb-card emb-card-enter" style="animation-delay:${i * 0.05}s">
      <div class="emb-card-top">
        <div class="emb-avatar" style="background:${rv.col};border-radius:${avatarRadius}">${rv.init}</div>
        <div>
          <div class="emb-name">${rv.name}</div>
          <div class="emb-date">${dateStr}</div>
        </div>
        <div class="emb-g-logo">${G_SVG(16)}</div>
      </div>
      <div class="emb-card-stars">${Array(rv.r).fill(STAR(13)).join('')}</div>
      <div class="emb-card-text">${short}</div>
      ${replyHtml}
    </div>`;
  }).join('');

  wrap.innerHTML = `
    <div class="emb-shell">
      <div class="emb-header" style="background:${headerBg}">
        <div class="emb-header-left">
          <div class="emb-logo-wrap" style="border-radius:${logoRadius}">${G_SVG(26)}</div>
          <div>
            <div class="emb-biz-name" style="color:${isModern ? S.accent : 'var(--gr-text,#111827)'}">${t.label}</div>
            <div class="emb-meta">
              <span class="emb-score" style="color:${scoreCol}">5.0</span>
              <div class="emb-stars-wrap">
                <div class="emb-stars">${Array(5).fill(STAR(14)).join('')}</div>
                <span class="emb-count">47 ${t.reviews}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="emb-header-right">
          <button class="emb-btn-write">✏️ ${S.ctaWrite}</button>
          <button class="emb-btn-all">${S.ctaAll}</button>
        </div>
      </div>
      <div class="emb-grid">${cards}</div>
    </div>`;
}

// ── CAROUSEL ─────────────────────────────────────────────────────────────────
function buildCarousel(){
  const wrap = document.getElementById('preview-c1');
  if(!wrap) return;
  const t = LANGS[S.lang];
  const MAX = S.textLen;
  const filtered = reviews.filter(rv => rv.r >= S.minRating).slice(0, S.reviewCount);
  carouselIndex = Math.min(carouselIndex, Math.max(0, filtered.length - 1));

  const isDark = S.mode === 'dark';
  const isGlass = S.style === 'glass';
  const isModern = S.style === 'modern';

  const cardBg = isDark
    ? (isGlass ? 'rgba(255,255,255,0.07)' : isModern ? '#0f172a' : '#1f2937')
    : (isGlass ? 'rgba(255,255,255,0.55)' : '#fff');
  const cardBorder = isDark
    ? (isGlass ? '1px solid rgba(255,255,255,0.14)' : '1.5px solid #374151')
    : (isGlass ? '1px solid rgba(255,255,255,0.65)' : '1.5px solid #e5e7eb');
  const textCol = isDark ? '#f1f5f9' : '#111827';
  const mutedCol = isDark ? '#94a3b8' : '#6b7280';
  const bodyCol = isDark ? '#cbd5e1' : '#4b5563';
  const headerBg = isDark
    ? (isGlass ? 'rgba(0,0,0,0.25)' : isModern ? `linear-gradient(135deg,${rgba(S.accent,.18)} 0%,rgba(2,6,23,0) 100%)` : '#1e293b')
    : (isGlass ? 'rgba(255,255,255,0.35)' : isModern ? `linear-gradient(135deg,${rgba(S.accent,.08)} 0%,rgba(248,250,252,0) 100%)` : '#f8fafc');
  const wrapBg = isDark
    ? (isGlass ? 'transparent' : isModern ? '#020617' : '#111827')
    : (isGlass ? 'transparent' : isModern ? '#f8fafc' : '#f3f4f6');
  const navBg = isDark ? rgba(S.accent,.18) : rgba(S.accent,.10);
  const navCol = S.accent;
  const blur = isGlass ? 'blur(18px)' : 'none';

  const cards = filtered.map((rv,i) => {
    const short = rv.text.length > MAX ? rv.text.slice(0,MAX)+'...' : rv.text;
    const dateStr = S.dateFormat==='absolute' ? rv.absDate : rv.date;
    const replyHtml = (S.ownerReply==='show' && rv.ownerReply)
      ? `<div class="cr-reply" style="background:${rgba(S.accent,.08)};border-left:3px solid ${S.accent};margin-top:10px;padding:8px 10px;border-radius:6px">
           <div style="font-size:10px;font-weight:700;color:${S.accent};text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">💬 Odpoveď</div>
           <p style="font-size:12px;color:${bodyCol};margin:0;line-height:1.5">${rv.ownerReply}</p>
         </div>` : '';
    const active = i === carouselIndex;
    return `<div class="cr-card${active?' cr-active':''}" style="
      min-width:280px;max-width:320px;padding:20px;
      background:${cardBg};border:${cardBorder};
      border-radius:${S.radius+4}px;
      backdrop-filter:${blur};-webkit-backdrop-filter:${blur};
      box-shadow:${isDark?'0 4px 24px rgba(0,0,0,.45)':'0 4px 20px rgba(0,0,0,.08)'};
      flex-shrink:0;
      transition:transform .3s ease,opacity .3s ease;
      opacity:${active?1:.45};
      transform:${active?'scale(1)':'scale(0.93)'};
    ">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div style="width:36px;height:36px;border-radius:${S.style==='classic'?'50%':'8px'};background:${rv.col};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0">${rv.init}</div>
        <div>
          <div style="font-size:13px;font-weight:700;color:${textCol}">${rv.name}</div>
          <div style="font-size:11px;color:${mutedCol};margin-top:1px">${dateStr}</div>
        </div>
        <div style="margin-left:auto;opacity:.8">${G_SVG(16)}</div>
      </div>
      <div style="display:flex;gap:1px;margin-bottom:9px">${Array(rv.r).fill(STAR(13)).join('')}</div>
      <p style="font-size:13px;color:${bodyCol};line-height:1.55;margin:0">${short}</p>
      ${replyHtml}
    </div>`;
  }).join('');

  const total = filtered.length;
  const dots = filtered.map((_,i) =>
    `<div onclick="carouselGo(${i})" style="width:${i===carouselIndex?18:7}px;height:7px;border-radius:999px;background:${i===carouselIndex?S.accent:isDark?'rgba(255,255,255,0.25)':'#d1d5db'};cursor:pointer;transition:all .25s"></div>`
  ).join('');

  const scoreCol = isModern ? S.accent : textCol;

  wrap.innerHTML = `
    <div class="cr-shell" style="width:100%;max-width:820px;background:${wrapBg};border-radius:${S.radius+8}px;overflow:hidden;backdrop-filter:${blur};-webkit-backdrop-filter:${blur}">
      <div class="cr-header" style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 14px;background:${headerBg};gap:12px">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:38px;height:38px;border-radius:${isModern?'10px':'50%'};background:${rgba(S.accent,.12)};display:flex;align-items:center;justify-content:center">${G_SVG(22)}</div>
          <div>
            <div style="font-size:12px;font-weight:800;color:${isModern?S.accent:mutedCol};text-transform:uppercase;letter-spacing:.8px;margin-bottom:2px">${t.label}</div>
            <div style="display:flex;align-items:center;gap:6px">
              <span style="font-size:22px;font-weight:900;color:${scoreCol};letter-spacing:-.5px">5.0</span>
              <div style="display:flex;flex-direction:column;gap:2px">
                <div style="display:flex;gap:1px">${Array(5).fill(STAR(13)).join('')}</div>
                <span style="font-size:11px;color:${mutedCol}">47 ${t.reviews}</span>
              </div>
            </div>
          </div>
        </div>
        <button onclick="this.blur()" style="padding:8px 16px;background:${S.accent};color:#fff;border:none;border-radius:${S.radius}px;font-size:12px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif">✏️ ${S.ctaWrite}</button>
      </div>
      <div class="cr-track-wrap" style="padding:20px 24px 16px;position:relative;overflow:hidden">
        <div class="cr-track" id="cr-track" style="display:flex;gap:16px;transition:transform .35s cubic-bezier(.4,0,.2,1)">${cards}</div>
      </div>
      <div class="cr-footer" style="display:flex;align-items:center;justify-content:space-between;padding:10px 24px 18px">
        <div style="display:flex;gap:6px;align-items:center">${dots}</div>
        <div style="display:flex;gap:8px">
          <button onclick="carouselPrev()" style="width:34px;height:34px;border-radius:50%;background:${navBg};border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;color:${navCol}" title="Predchádzajúci">‹</button>
          <button onclick="carouselNext(${total})" style="width:34px;height:34px;border-radius:50%;background:${navBg};border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;color:${navCol}" title="Nasledujúci">›</button>
        </div>
      </div>
    </div>`;

  updateCarouselTrack(filtered.length);
}

function updateCarouselTrack(total){
  const track = document.getElementById('cr-track');
  if(!track) return;
  const cardW = 320 + 16;
  const offset = carouselIndex * cardW;
  track.style.transform = `translateX(-${offset}px)`;
}

function carouselGo(i){
  const filtered = reviews.filter(rv => rv.r >= S.minRating).slice(0, S.reviewCount);
  carouselIndex = Math.max(0, Math.min(i, filtered.length-1));
  buildCarousel();
}
function carouselPrev(){
  const filtered = reviews.filter(rv => rv.r >= S.minRating).slice(0, S.reviewCount);
  carouselIndex = Math.max(0, carouselIndex-1);
  buildCarousel();
}
function carouselNext(total){
  const filtered = reviews.filter(rv => rv.r >= S.minRating).slice(0, S.reviewCount);
  carouselIndex = Math.min(filtered.length-1, carouselIndex+1);
  buildCarousel();
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
  const df=document.getElementById('offset-desktop-fields');
  const mf=document.getElementById('offset-mobile-fields');
  if(df) df.innerHTML=fields('offsetDesktop',S.offsetDesktop);
  if(mf) mf.innerHTML=fields('offsetMobile',S.offsetMobile);
}

function setDevice(dev,el){
  currentDevice=dev;
  document.querySelectorAll('.dev-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active');
  const frame=document.getElementById('device-frame');
  const label=document.getElementById('device-label');
  const stage=document.getElementById('preview-stage');
  frame.className=''; frame.style.display='none'; stage.classList.remove('device-mode');
  if(dev==='desktop'){ label.textContent='🖥 Desktop preview'; }
  else { frame.classList.add(dev==='mobile'?'mobile':'tablet','visible'); label.textContent=dev==='mobile'?'📱 Mobile preview':'⬜ Tablet preview'; stage.classList.add('device-mode'); }
  if(S.widgetType==='c0') applyPosition();
  if(S.widgetType==='c4') applyCTAPosition();
}

function updateTexts(){
  const bw=document.getElementById('btn-write');
  const ba=document.getElementById('btn-all');
  if(bw) bw.textContent='✏️ '+S.ctaWrite;
  if(ba) ba.textContent=S.ctaAll;
}

function setLang(lang){
  S.lang=lang; const t=LANGS[lang];
  S.ctaWrite=t.writeReview; S.ctaAll=t.allReviews;
  const iw=document.getElementById('inp-write'); if(iw) iw.value=t.writeReview;
  const ia=document.getElementById('inp-all'); if(ia) ia.value=t.allReviews;
  const ic=document.getElementById('inp-cta'); if(ic) ic.value=t.writeReview;
  const pc=document.getElementById('panel-count'); if(pc) pc.textContent=`· 47 ${t.reviews}`;
  updateTexts();
  if(S.widgetType==='c0') buildBadge();
  if(S.widgetType==='c1') buildCarousel();
  if(S.widgetType==='c2') buildBar();
  if(S.widgetType==='c3') buildEmbed();
  if(S.widgetType==='c4') buildCTA();
}

function setStyle(s,el){ document.querySelectorAll('[data-style]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.style=s; applyTheme(); if(S.widgetType==='c0') buildBadge(); }
function setColor(el){ document.querySelectorAll('.color-swatch').forEach(c=>c.classList.remove('active')); el.classList.add('active'); S.accent=el.dataset.color; applyTheme(); if(S.widgetType==='c0') buildBadge(); if(S.widgetType==='c1') buildCarousel(); if(S.widgetType==='c2') buildBar(); if(S.widgetType==='c3') buildEmbed(); if(S.widgetType==='c4') buildCTA(); }
function setColorHex(v){ S.accent=v; applyTheme(); if(S.widgetType==='c0') buildBadge(); if(S.widgetType==='c1') buildCarousel(); if(S.widgetType==='c2') buildBar(); if(S.widgetType==='c3') buildEmbed(); if(S.widgetType==='c4') buildCTA(); }
function setMode(m,el){ document.querySelectorAll('#mode-section .toggle-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.mode=m; applyTheme(); }
function setRadius(v){ S.radius=parseInt(v); const rv=document.getElementById('radius-val'); if(rv) rv.textContent=v+'px'; applyTheme(); if(S.widgetType==='c0') applyPosition(); if(S.widgetType==='c3') buildEmbed(); if(S.widgetType==='c4') buildCTA(); }
function setSize(s,el){ document.querySelectorAll('[data-size]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.size=s; applyTheme(); if(S.widgetType==='c0') applyPosition(); if(S.widgetType==='c4'){ buildCTA(); applyCTAPosition(); } }
function setPos(el){ document.querySelectorAll('.pos-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.pos=el.dataset.pos; const top=isTop(),left=isLeft(); S.offsetDesktop={[top?'top':'bottom']:top?100:28,...(top?{}:{[left?'left':'right']:28})}; S.offsetMobile={[top?'top':'bottom']:top?80:16,...(top?{}:{[left?'left':'right']:16})}; buildOffsetFields(); if(S.widgetType==='c0'){ buildBadge(); applyPosition(); panelOpen=false; const gp=document.getElementById('gr-panel'); if(gp) gp.classList.remove('open'); } if(S.widgetType==='c4') applyCTAPosition(); }
function setOffset(key,field,val){ S[key][field]=parseInt(val)||0; applyPosition(); if(S.widgetType==='c4') applyCTAPosition(); }
function setOffsetTab(tab,el){ activeOffsetTab=tab; document.querySelectorAll('.offset-tab').forEach(b=>b.classList.remove('active')); el.classList.add('active'); const df=document.getElementById('offset-desktop-fields'); const mf=document.getElementById('offset-mobile-fields'); if(df) df.style.display=tab==='desktop'?'block':'none'; if(mf) mf.style.display=tab==='mobile'?'block':'none'; }
function setBarPos(pos,el){ S.barPos=pos; document.querySelectorAll('[onclick^="setBarPos"]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); buildBar(); updatePreviewLabel(); }
function setBarDismissible(val,el){ S.barDismissible=val; document.querySelectorAll('[onclick^="setBarDismissible"]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); buildBar(); }
function togglePanel(){ panelOpen=!panelOpen; const gp=document.getElementById('gr-panel'); if(gp) gp.classList.toggle('open',panelOpen); }

function setMinRating(val,el){ document.querySelectorAll('[data-minrating]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.minRating=val; if(S.widgetType==='c1'){carouselIndex=0;buildCarousel();}else if(S.widgetType==='c3'){buildEmbed();}else renderReviews(); }
function setReviewCount(val,el){ document.querySelectorAll('[data-count]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.reviewCount=val; if(S.widgetType==='c1'){carouselIndex=0;buildCarousel();}else if(S.widgetType==='c3'){buildEmbed();}else renderReviews(); }
function setTextLen(val){ S.textLen=parseInt(val); const tv=document.getElementById('textlen-val'); if(tv) tv.textContent=val+' znakov'; if(S.widgetType==='c1') buildCarousel(); else if(S.widgetType==='c3') buildEmbed(); else renderReviews(); }
function setDateFormat(fmt,el){ document.querySelectorAll('[onclick^="setDateFormat"]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.dateFormat=fmt; if(S.widgetType==='c1') buildCarousel(); else if(S.widgetType==='c3') buildEmbed(); else renderReviews(); }
function setOwnerReply(val,el){ document.querySelectorAll('[onclick^="setOwnerReply"]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.ownerReply=val; if(S.widgetType==='c1') buildCarousel(); else if(S.widgetType==='c3') buildEmbed(); else renderReviews(); }

function renderReviews(){
  const MAX=S.textLen;
  const filtered=reviews.filter(rv=>rv.r>=S.minRating).slice(0,S.reviewCount);
  const list=document.getElementById('gr-reviews-list');
  if(!list) return;
  list.innerHTML=filtered.map((rv,i)=>{
    const long=rv.text.length>MAX;
    const short=long?rv.text.slice(0,MAX)+'...':rv.text;
    const dateStr=S.dateFormat==='absolute'?rv.absDate:rv.date;
    const replyHtml=(S.ownerReply==='show' && rv.ownerReply)
      ?`<div class="gr-owner-reply"><span class="gr-owner-label">💬 Odpoveď majiteľa</span><p>${rv.ownerReply}</p></div>`
      :'';
    return `<div class="gr-review-item">`
      +`<div class="gr-review-top"><div class="gr-avatar" style="background:${rv.col};border-radius:var(--gr-avatar-radius,50%)">${rv.init}</div>`
      +`<div><div class="gr-reviewer-name">${rv.name}</div><div class="gr-review-date">${dateStr}</div></div></div>`
      +`<div class="gr-review-stars">${Array(rv.r).fill(STAR(12)).join('')}</div>`
      +`<div class="gr-review-text">`
      +`<span id="s${i}" class="gr-text-short">${short}${long?`<span class="gr-read-more" onclick="exp(${i})"> Čítať viac</span>`:''}</span>`
      +(long?`<span id="f${i}" class="gr-text-full">${rv.text}<span class="gr-read-more" onclick="col(${i})"> Menej</span></span>`:'')
      +`</div>${replyHtml}</div>`;
  }).join('');
}
function exp(i){ document.getElementById('s'+i).classList.add('hidden'); document.getElementById('f'+i).classList.add('visible'); }
function col(i){ document.getElementById('s'+i).classList.remove('hidden'); document.getElementById('f'+i).classList.remove('visible'); }

// ── INIT ─────────────────────────────────────────────────────────────────────
document.getElementById('panel-stars').innerHTML=Array(5).fill(STAR(12)).join('');

const dyn = document.getElementById('cfg-dynamic');
dyn.innerHTML = WIDGET_TYPES['c0'].sections.map(s => SECTIONS[s] ? SECTIONS[s]() : '').join('');
buildOffsetFields();

renderReviews(); buildBadge(); applyTheme(); applyPosition();
window.addEventListener('resize', applyPosition);
