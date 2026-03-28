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
  c4: { label: 'CTA tlačidlo', icon: '✍️', sections: ['appearance-c4','position','content-c4','display'] }
};

const SECTIONS = {

  'appearance': () => `
    <div class="cfg-group"><span>🎨</span> Vzhľad</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✦</span> Štýl</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.style==='classic'?'active':''}\" data-style="classic" onclick="setStyle('classic',this)">Classic</div>
        <div class="pill-btn ${S.style==='modern'?'active':''}\" data-style="modern" onclick="setStyle('modern',this)">Modern</div>
        <div class="pill-btn ${S.style==='glass'?'active':''}\" data-style="glass" onclick="setStyle('glass',this)">Glass</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">◉</span> Farba</div>
      <div class="cfg-row" id="color-row">${renderColorRow()}</div>
    </div>
    <div class="cfg-section" id="mode-section">
      <div class="cfg-label"><span class="cfg-label-icon">◐</span> Farebná schéma</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.mode==='light'?'active':''}\" onclick="setMode('light',this)">☀️ Svetlá</div>
        <div class="toggle-btn ${S.mode==='dark'?'active':''}\" onclick="setMode('dark',this)">🌙 Tmavá</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">⌀</span> Zaoblenie rohov</div>
        <span class="cfg-slider-val" id="radius-val">${S.radius}px</span>
      </div>
      <input type="range" class="cfg-slider" min="0" max="30" value="${S.radius}" oninput="setRadius(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊡</span> Veľkosť</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.size==='S'?'active':''}\" data-size="S" onclick="setSize('S',this)">S · Malý</div>
        <div class="pill-btn ${S.size==='M'?'active':''}\" data-size="M" onclick="setSize('M',this)">M · Stredný</div>
        <div class="pill-btn ${S.size==='L'?'active':''}\" data-size="L" onclick="setSize('L',this)">L · Veľký</div>
      </div>
    </div>`,

  'appearance-c2': () => `
    <div class="cfg-group"><span>🎨</span> Vzhľad</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">◉</span> Farba</div>
      <div class="cfg-row" id="color-row">${renderColorRow()}</div>
    </div>
    <div class="cfg-section" id="mode-section">
      <div class="cfg-label"><span class="cfg-label-icon">◐</span> Farebná schéma</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.mode==='light'?'active':''}\" onclick="setMode('light',this)">☀️ Svetlá</div>
        <div class="toggle-btn ${S.mode==='dark'?'active':''}\" onclick="setMode('dark',this)">🌙 Tmavá</div>
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
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">⌀</span> Zaoblenie rohov</div>
        <span class="cfg-slider-val" id="radius-val">${S.radius}px</span>
      </div>
      <input type="range" class="cfg-slider" min="0" max="30" value="${S.radius}" oninput="setRadius(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊡</span> Veľkosť</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.size==='S'?'active':''}\" data-size="S" onclick="setSize('S',this)">S · Malý</div>
        <div class="pill-btn ${S.size==='M'?'active':''}\" data-size="M" onclick="setSize('M',this)">M · Stredný</div>
        <div class="pill-btn ${S.size==='L'?'active':''}\" data-size="L" onclick="setSize('L',this)">L · Veľký</div>
      </div>
    </div>`,

  'position': () => `
    <div class="cfg-group"><span>📍</span> Umiestnenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⊕</span> Pozícia na stránke</div>
      <div class="pos-grid">
        <div class="pos-btn ${S.pos==='top-left'?'active':''}\" data-pos="top-left" onclick="setPos(this)">↖ Hore<br>vľavo</div>
        <div class="pos-btn hb"></div>
        <div class="pos-btn ${S.pos==='top-right'?'active':''}\" data-pos="top-right" onclick="setPos(this)">↗ Hore<br>vpravo</div>
        <div class="pos-btn hb"></div><div class="pos-btn hb"></div><div class="pos-btn hb"></div>
        <div class="pos-btn ${S.pos==='bottom-left'?'active':''}\" data-pos="bottom-left" onclick="setPos(this)">↙ Dole<br>vľavo</div>
        <div class="pos-btn hb"></div>
        <div class="pos-btn ${S.pos==='bottom-right'?'active':''}\" data-pos="bottom-right" onclick="setPos(this)">↘ Dole<br>vpravo</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">↔</span> Odsadenie od okraja</div>
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
      <div class="cfg-label"><span class="cfg-label-icon">⊕</span> Kde sa lišta zobrazí</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.barPos==='top'?'active':''}\" onclick="setBarPos('top',this)">▲ Nad hlavičkou</div>
        <div class="toggle-btn ${S.barPos==='bottom'?'active':''}\" onclick="setBarPos('bottom',this)">▼ Pod hlavičkou</div>
      </div>
    </div>`,

  'content': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Upraviť texty</div>
      <span class="cfg-input-label">Tlačidlo — napísať recenziu</span>
      <input id="inp-write" class="cfg-input" type="text" value="${S.ctaWrite}" oninput="S.ctaWrite=this.value;updateTexts()">
      <span class="cfg-input-label">Tlačidlo — zobraziť všetky</span>
      <input id="inp-all" class="cfg-input" type="text" value="${S.ctaAll}" oninput="S.ctaAll=this.value;updateTexts()">
    </div>`,

  'content-c1': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Upraviť texty</div>
      <span class="cfg-input-label">Tlačidlo — napísať recenziu</span>
      <input id="inp-write" class="cfg-input" type="text" value="${S.ctaWrite}" oninput="S.ctaWrite=this.value;buildCarousel()">
    </div>`,

  'content-c2': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Upraviť texty</div>
      <span class="cfg-input-label">Text v lište</span>
      <input id="inp-bar" class="cfg-input" type="text" value="${S.barCustomText||''}" placeholder="${LANGS[S.lang].barText}" oninput="S.barCustomText=this.value;buildBar()">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✖</span> Návštevník môže zatvoriť</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.barDismissible?'active':''}\" onclick="setBarDismissible(true,this)">Áno</div>
        <div class="toggle-btn ${!S.barDismissible?'active':''}\" onclick="setBarDismissible(false,this)">Nie</div>
      </div>
    </div>`,

  'content-c3': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>`,

  'content-c4': () => `
    <div class="cfg-group"><span>💬</span> Obsah</div>
    <div class="cfg-section">${renderLangSection()}</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">✏️</span> Upraviť texty</div>
      <span class="cfg-input-label">Text na tlačidle</span>
      <input id="inp-cta" class="cfg-input" type="text" value="${S.ctaWrite}" oninput="S.ctaWrite=this.value;buildCTA()">
    </div>`,

  'reviews-logic': () => `
    <div class="cfg-group"><span>🔧</span> Filtre recenzií</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⭐</span> Minimálne hodnotenie</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.minRating===0?'active':''}\" data-minrating="0" onclick="setMinRating(0,this)">Všetky</div>
        <div class="pill-btn ${S.minRating===4?'active':''}\" data-minrating="4" onclick="setMinRating(4,this)">4★ a viac</div>
        <div class="pill-btn ${S.minRating===5?'active':''}\" data-minrating="5" onclick="setMinRating(5,this)">Len 5★</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">#</span> Počet zobrazených recenzií</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.reviewCount===3?'active':''}\" data-count="3" onclick="setReviewCount(3,this)">3 <span style="opacity:.55;font-size:9px">lite</span></div>
        <div class="pill-btn ${S.reviewCount===5?'active':''}\" data-count="5" onclick="setReviewCount(5,this)">5 <span style="opacity:.55;font-size:9px">default</span></div>
        <div class="pill-btn ${S.reviewCount===10?'active':''}\" data-count="10" onclick="setReviewCount(10,this)">10 <span style="opacity:.55;font-size:9px">pro</span></div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">✂</span> Skrátiť text recenzie</div>
        <span class="cfg-slider-val" id="textlen-val">${S.textLen} znakov</span>
      </div>
      <input type="range" class="cfg-slider" min="60" max="400" value="${S.textLen}" step="10" oninput="setTextLen(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📅</span> Dátum recenzie</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.dateFormat==='relative'?'active':''}\" onclick="setDateFormat('relative',this)">pred X dňami</div>
        <div class="toggle-btn ${S.dateFormat==='absolute'?'active':''}\" onclick="setDateFormat('absolute',this)">Konkrétny dátum</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">🗣</span> Zobraziť odpoveď obchodu</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.ownerReply==='show'?'active':''}\" onclick="setOwnerReply('show',this)">Zobraziť</div>
        <div class="toggle-btn ${S.ownerReply==='hide'?'active':''}\" onclick="setOwnerReply('hide',this)">Skryť</div>
      </div>
    </div>`,

  'reviews-logic-c1': () => `
    <div class="cfg-group"><span>🔧</span> Filtre recenzií</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">⭐</span> Minimálne hodnotenie</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.minRating===0?'active':''}\" data-minrating="0" onclick="setMinRating(0,this)">Všetky</div>
        <div class="pill-btn ${S.minRating===4?'active':''}\" data-minrating="4" onclick="setMinRating(4,this)">4★ a viac</div>
        <div class="pill-btn ${S.minRating===5?'active':''}\" data-minrating="5" onclick="setMinRating(5,this)">Len 5★</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">#</span> Počet kariet v karuseli</div>
      <div class="cfg-row">
        <div class="pill-btn ${S.reviewCount===3?'active':''}\" data-count="3" onclick="setReviewCount(3,this)">3</div>
        <div class="pill-btn ${S.reviewCount===5?'active':''}\" data-count="5" onclick="setReviewCount(5,this)">5</div>
        <div class="pill-btn ${S.reviewCount===8?'active':''}\" data-count="8" onclick="setReviewCount(8,this)">8</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="slider-row">
        <div class="cfg-label" style="margin:0"><span class="cfg-label-icon">✂</span> Skrátiť text recenzie</div>
        <span class="cfg-slider-val" id="textlen-val">${S.textLen} znakov</span>
      </div>
      <input type="range" class="cfg-slider" min="60" max="300" value="${S.textLen}" step="10" oninput="setTextLen(this.value)">
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📅</span> Dátum recenzie</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.dateFormat==='relative'?'active':''}\" onclick="setDateFormat('relative',this)">pred X dňami</div>
        <div class="toggle-btn ${S.dateFormat==='absolute'?'active':''}\" onclick="setDateFormat('absolute',this)">Konkrétny dátum</div>
      </div>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">🗣</span> Zobraziť odpoveď obchodu</div>
      <div class="toggle-wrap">
        <div class="toggle-btn ${S.ownerReply==='show'?'active':''}\" onclick="setOwnerReply('show',this)">Zobraziť</div>
        <div class="toggle-btn ${S.ownerReply==='hide'?'active':''}\" onclick="setOwnerReply('hide',this)">Skryť</div>
      </div>
    </div>`,

  'display': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📊</span> Doplnky</div>
      <label class="chk-single"><input type="checkbox" ${S.showCount?'checked':''} onchange="S.showCount=this.checked;buildBadge();"><span>Zobraziť počet recenzií (napr. 47)</span></label>
      <div class="cfg-label" style="margin-top:10px"><span class="cfg-label-icon">📺</span> Na ktorých zariadeniach zobrazovať</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked"><span>📱 Mobil</span></label>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📄</span> Na ktorých stránkach zobrazovať</div>
      ${renderPagesGrid()}
    </div>`,

  'display-devices': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📺</span> Na ktorých zariadeniach zobrazovať</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked"><span>📱 Mobil</span></label>
    </div>`,

  'display-pages': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📺</span> Na ktorých zariadeniach zobrazovať</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked"><span>📱 Mobil</span></label>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📄</span> Na ktorých stránkach zobrazovať</div>
      ${renderPagesGrid()}
    </div>`
};

function renderColorRow(){
  const colors=['#4285F4','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#111827'];
  return colors.map(c=>`<div class="color-swatch ${S.accent===c?'active':''}\" style="background:${c}" data-color="${c}" onclick="setColor(this)"></div>`).join('')
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

// ── CONTEXT COPY ─────────────────────────────────────────────────────────────
const CONTEXT_COPY = {
  c0: {
    title: 'Floating badge + panel',
    lead: 'Ideálna kombinácia pre budovanie dôvery v rohu stránky bez agresívneho zásahu do layoutu.',
    tips: [
      {
        icon: '📍',
        title: 'Umiestniť do pravého dolného rohu',
        text: 'Je to vzorové miesto pre chaty a widgety – používatelia ho intuitívne hľadajú a neprekryje hlavnú navigáciu.'
      },
      {
        icon: '🧱',
        title: 'Nerušiť nákupný proces',
        text: 'Na mobiloch dávaj pozor, aby badge neprekrýval tlačidlo do košíka alebo fixnú spodnú lištu.'
      },
      {
        icon: '✨',
        title: 'Použiť farbu značky',
        text: 'Zvoľ farbu, ktorá ladí s primárnym CTA na webe. Vyhni sa dvom rôznym dominantným farbám vedľa seba.'
      },
      {
        icon: '🧪',
        title: 'Najprv desktop, potom mobile',
        text: 'Začni s nastavením na desktope, až potom dolaď správanie na mobile – vyhneš sa chaosu v pozíciách.'
      }
    ]
  },
  c1: {
    title: 'Karusel recenzií',
    lead: 'Sekcia vhodná do homepage, landing page alebo pod produktové benefity.',
    tips: [
      {
        icon: '🧱',
        title: 'Tvoriť blok, nie rušivý prvok',
        text: 'Karusel je obsahová sekcia – umiestni ho medzi bloky, nie ako prekryvný prvok nad obsahom.'
      },
      {
        icon: '📐',
        title: '2–3 karty na šírku',
        text: 'Na desktope nech je viditeľných aspoň 2, max. 3 karty. Viac kariet znižuje čitateľnosť.'
      },
      {
        icon: '✂️',
        title: 'Skrátiť dlhé texty',
        text: 'Dlhé recenzie orež posuvníkom dĺžky textu a nechaj používateľa prescrollovať karusel, nie čítať „stenu textu".'
      },
      {
        icon: '📲',
        title: 'Na mobile jedna karta',
        text: 'Na mobile by mala byť v karuseli vždy jedna karta na šírku – používateľ ľahko pochopí swipe správanie.'
      }
    ]
  },
  c2: {
    title: 'Sticky lišta hore/dole',
    lead: 'Silný prvok pre zvýraznenie hodnotenia v košíku alebo pri promo akciách.',
    tips: [
      {
        icon: '🛒',
        title: 'Primárne do košíka a objednávky',
        text: 'V krokoch objednávky lišta znižuje obavy pred nákupom. Na homepage ju používaj striedmo, aby nevyrušovala.'
      },
      {
        icon: '📏',
        title: 'Nepridávaj druhú sticky lištu',
        text: 'Ak tvoj šablónový header používa fixnú lištu, testuj, aby sa dve lišty nezlili a neschovali dôležité CTA.'
      },
      {
        icon: '✖',
        title: 'Rozumne nastaviť zavretie',
        text: 'Možnosť zatvoriť je fajn, ale pri kritických stránkach (košík, objednávka) zvaž radšej nezatvárateľnú verziu.'
      },
      {
        icon: '📱',
        title: 'Špeciálne pozor na mobil',
        text: 'Na mobiloch používaj kratší text a sleduj, či lišta neprekrýva spodnú navigáciu alebo cookie lištu.'
      }
    ]
  },
  c3: {
    title: 'Embed blok recenzií',
    lead: 'Najuniverzálnejší widget – využi ho ako samostatnú sekciu s recenziami kdekoľvek na webe.',
    tips: [
      {
        icon: '📍',
        title: 'Zaradiť medzi obsahové bloky',
        text: 'Ideálne miesto je po predstavení benefitov produktu/služby alebo pred sekciou „O nás".'
      },
      {
        icon: '🧩',
        title: 'Použiť rovnaký grid ako zvyšok webu',
        text: 'Drž šírku embed bloku v rámci layoutu (container) – vyhni sa full‑width bez dôvodu, aby sekcia nepôsobila vytrhnuto.'
      },
      {
        icon: '🗣',
        title: 'Ukázať aj odpovede majiteľa',
        text: 'Zapni zobrazenie odpovedí pri aspoň časti recenzií – pôsobí to profesionálne a zvyšuje dôveryhodnosť.'
      },
      {
        icon: '🔢',
        title: 'Menej je niekedy viac',
        text: 'Na homepage stačí 3–6 recenzií. Celý zoznam odporúčame nechať na samostatnú stránku s filtrami.'
      }
    ]
  },
  c4: {
    title: 'CTA tlačidlo na recenzie',
    lead: 'Jednoduchý spôsob, ako motivovať existujúcich zákazníkov k pridaniu novej recenzie.',
    tips: [
      {
        icon: '🧭',
        title: 'Použiť v zákazníckej zóne',
        text: 'Najlepšie funguje v sekcii „Môj účet", na ďakovnej stránke alebo v e‑maili po doručení objednávky.'
      },
      {
        icon: '🎯',
        title: 'Jasný mikrokopík CTA',
        text: 'Namiesto všeobecného „Hodnotenia" použi priame CTA typu „Napísať recenziu na Google".'
      },
      {
        icon: '🎨',
        title: 'Ladiť s primárnym CTA',
        text: 'CTA na recenzie by vizuálne nemalo prebíjať hlavné konverzné tlačidlá (napr. „Pridať do košíka").'
      },
      {
        icon: '🧪',
        title: 'Testovať umiestnenie',
        text: 'Začni konzervatívne – napr. iba ďakovná stránka. Až keď vidíš výsledky, rozšír CTA na ďalšie miesta.'
      }
    ]
  }
};

function buildContextCopy(type){
  const cfg = CONTEXT_COPY[type] || CONTEXT_COPY.c0;
  const container = document.querySelector('.preview-copy');
  const grid = document.querySelector('.tip-grid');
  if(!container || !grid) return;

  const h1 = container.querySelector('h1');
  const lead = container.querySelector('p.lead');
  if(h1) h1.textContent = cfg.title;
  if(lead) lead.textContent = cfg.lead;

  grid.innerHTML = cfg.tips.map(t => `
    <div class="tip-card">
      <h3><span>${t.icon}</span>${t.title}</h3>
      <p>${t.text}</p>
    </div>`
  ).join('');

  // Hide context copy for types where widget takes full space
  if (['c1', 'c2'].includes(type)) {
    container.style.display = 'none';
  } else {
    container.style.display = '';
  }
}


// ── WIDGET CORE (themes, state, badge, position) ─────────────────────────────
const THEMES={
  classic:{
    light:{"--gr-bg":"#fff","--gr-border-style":"1.5px solid #e5e7eb","--gr-border-raw":"#e5e7eb","--gr-logo-bg":"#f3f4f6","--gr-text":"#111","--gr-text-muted":"#6b7280","--gr-text-body":"#4b5563","--gr-divider":"#f3f4f6","--gr-chip":"#f9fafb","--gr-badge-shadow":"0 4px 20px rgba(0,0,0,.10)","--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,.16)","--gr-blur":"none"},
    dark:{"--gr-bg":"#1f2937","--gr-border-style":"1.5px solid #374151","--gr-border-raw":"#374151","--gr-logo-bg":"#374151","--gr-text":"#f9fafb","--gr-text-muted":"#9ca3af","--gr-text-body":"#d1d5db","--gr-divider":"#374151","--gr-chip":"#374151","--gr-badge-shadow":"0 4px 20px rgba(0,0,0,.4)","--gr-badge-shadow-hover":"0 8px 32px rgba(0,0,0,.55)","--gr-blur":"none"}
  },
  modern:{base:{"--gr-bg":"#020617","--gr-border-style":"1.5px solid rgba(15,23,42,.9)","--gr-border-raw":"rgba(15,23,42,.9)","--gr-logo-bg":"#020617","--gr-text":"#e5e7eb","--gr-text-muted":"#9ca3af","--gr-text-body":"#cbd5e1","--gr-divider":"rgba(148,163,184,.3)","--gr-chip":"#020617","--gr-badge-shadow":"MODERN_S","--gr-badge-shadow-hover":"MODERN_SH","--gr-blur":"none"}},
  glass:{base:{"--gr-bg":"rgba(255,255,255,.86)","--gr-border-style":"1px solid rgba(255,255,255,.95)","--gr-border-raw":"rgba(209,213,219,1)","--gr-logo-bg":"rgba(243,244,246,.96)","--gr-text":"#111827","--gr-text-muted":"#6b7280","--gr-text-body":"#4b5563","--gr-divider":"rgba(209,213,219,.9)","--gr-chip":"rgba(249,250,251,.9)","--gr-badge-shadow":"0 10px 32px rgba(15,23,42,.16)","--gr-badge-shadow-hover":"0 16px 46px rgba(15,23,42,.2)","--gr-blur":"blur(26px) saturate(1.9)"}}
};

function rgba(hex,a){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return`rgba(${r},${g},${b},${a})`;}

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
  showCount:true,devDesktop:true,devTablet:true,devMobile:true,
  widgetType:'c0',
  minRating:0,reviewCount:5,textLen:130,dateFormat:'relative',ownerReply:'show',
  barPos:'top',barCustomText:'',barDismissible:true
};


// ── Read config from <script data-config="..."> tag ─────────────────────────
(function() {
  try {
    const scripts = document.querySelectorAll('script[data-config]');
    const me = scripts[scripts.length - 1]; // last = this script
    if (me && me.dataset.config) {
      const cfg = JSON.parse(atob(me.dataset.config));
      Object.keys(cfg).forEach(k => { if (k in S || ['type','widgetType','minRating','reviewCount','textLen','dateFormat','ownerReply','barPos','barCustomText','barDismissible','ctaWrite','ctaAll'].includes(k)) S[k] = cfg[k]; });
      if (cfg.widgetType) S._initType = cfg.widgetType;
      if (cfg.type) S._initType = cfg.type;
    }
  } catch(e) {}
})();

function isTop(){return S.pos.startsWith('top');}
function isLeft(){return S.pos.endsWith('left');}

function applyTheme(){
  const root=document.documentElement; let vars;
  if(S.style==='classic') vars={...THEMES.classic[S.mode]};
  else if(S.style==='modern') vars={...THEMES.modern.base};
  else vars={...THEMES.glass.base};
  for(const [k,v] of Object.entries(vars)){
    let val=v;
    if(val==='MODERN_S') val=`0 0 0 1px rgba(15,23,42,.9), 0 0 26px ${rgba(S.accent,.45)}`;
    if(val==='MODERN_SH') val=`0 0 0 1px ${rgba(S.accent,.75)}, 0 0 40px ${rgba(S.accent,.6)}`;
    root.style.setProperty(k,val);
  }
  root.style.setProperty('--accent',S.accent);
  root.style.setProperty('--radius',S.radius+'px');
  document.getElementById('mode-section').style.display=S.style==='classic'?'block':'none';
  const posL={"bottom-right":"Dole vpravo","bottom-left":"Dole vľavo","top-right":"Hore vpravo","top-left":"Hore vľavo"};
  const modeL=S.style==='classic'?(S.mode==='dark'?' · Dark':' · Light'):'';
  document.getElementById('preview-dot').style.background=S.accent;
  document.getElementById('preview-dot').style.boxShadow=`0 0 8px ${S.accent}`;
  document.getElementById('preview-text').textContent=`${S.style[0].toUpperCase()+S.style.slice(1)}${modeL} · ${S.size} · ${posL[S.pos]}`;
}

function buildBadge(){
  const badge=document.getElementById('gr-badge');
  const top=isTop(),left=isLeft(); const t=LANGS[S.lang];
  badge.className=top?'vert':'horiz'; if(top) badge.classList.add(left?'side-left':'side-right');
  if(top){
    badge.innerHTML=`<div class="vert-stars">${Array(5).fill(STAR(14)).join('')}</div>`+(S.showCount?`<span class="vert-count">47 ${t.reviews}</span>`:'')+`<div class="vert-divider"></div><span class="vert-score">5.0</span><div class="gr-logo-wrap" style="width:26px;height:26px;margin-top:2px">${G_SVG(16)}</div>`;
  }else{
    const scoreColor=S.style==='modern'?S.accent:'var(--gr-text,#111)';
    badge.innerHTML=`<div class="gr-logo-wrap" style="width:42px;height:42px">${G_SVG(26)}</div><div class="gr-badge-info"><span class="gr-badge-label">${t.label}</span><div class="gr-score-block"><span class="gr-badge-score" style="color:${scoreColor}">5.0</span><div class="gr-stars-count"><div class="gr-badge-stars">${Array(5).fill(STAR(14)).join('')}</div>${S.showCount?`<span class="gr-badge-count">47 ${t.reviews}</span>`:''}</div></div></div>`;
  }
}

function applyPosition(){
  const badge=document.getElementById('gr-badge'); const panel=document.getElementById('gr-panel');
  const top=isTop(),left=isLeft(); const o=currentDevice==='mobile'?S.offsetMobile:S.offsetDesktop; const sc=SIZES[S.size];

  if(currentDevice==='desktop'){
    if(top){
      badge.style.position='absolute'; badge.style.top=(o.top||100)+'px'; badge.style.bottom='auto'; badge.style.left=left?'0':'auto'; badge.style.right=!left?'0':'auto';
      badge.style.transform=`scale(${sc})`; badge.style.transformOrigin=`top ${left?'left':'right'}`;
    }else{
      badge.style.position='absolute'; badge.style.top='auto'; badge.style.bottom=(o.bottom||28)+'px'; badge.style.left=left?'0':'auto'; badge.style.right=!left?'0':'auto';
      badge.style.transform=`scale(${sc})`; badge.style.transformOrigin=`bottom ${left?'left':'right'}`;
    }
    setTimeout(()=>{
      const stage=document.getElementById('preview-stage')||document.body;
      const sr=stage.getBoundingClientRect();
      const br=badge.getBoundingClientRect();
      const relBottom=sr.bottom-br.bottom; const relRight=sr.right-br.right;
      const relLeft=br.left-sr.left; const relTop=br.top-sr.top;
      if(top){
        if(left){ panel.style.left=(relLeft+br.width+GAP)+'px'; panel.style.right='auto'; }
        else{ panel.style.right=(relRight+br.width+GAP)+'px'; panel.style.left='auto'; }
        panel.style.top=Math.max(8,relTop)+'px'; panel.style.bottom='auto';
      }else{
        panel.style.bottom=(relBottom+br.height+GAP)+'px'; panel.style.top='auto';
        panel.style.left=left?(o.left||28)+'px':'auto'; panel.style.right=!left?(o.right||28)+'px':'auto';
      }
    },40);
  }else{
    const stage=document.getElementById('device-stage'); const sRect=stage.getBoundingClientRect();
    badge.style.position='absolute'; badge.style.transform=`scale(${sc})`;
    if(top){
      badge.style.top=(o.top||40)+'px'; badge.style.bottom='auto'; badge.style.left=left?'0':'auto'; badge.style.right=!left?'0':'auto';
    }else{
      badge.style.top='auto'; badge.style.bottom=(o.bottom||32)+'px'; badge.style.left=left?(o.left||24)+'px':'auto'; badge.style.right=!left?(o.right||24)+'px':'auto';
    }
    setTimeout(()=>{
      const br=badge.getBoundingClientRect();
      if(top){
        if(left){ panel.style.left=(br.right+GAP)+'px'; panel.style.right='auto'; }
        else{ panel.style.right=(sRect.right-br.left+GAP)+'px'; panel.style.left='auto'; }
        panel.style.top=Math.max(sRect.top+8,br.top)+'px'; panel.style.bottom='auto';
      }else{
        panel.style.bottom=(sRect.bottom-br.bottom+GAP)+'px'; panel.style.top='auto'; panel.style.left=left?br.left+'px':'auto'; panel.style.right=!left?(sRect.right-br.right)+'px':'auto';
      }
    },40);
  }
}

function buildOffsetFields(){
  const top=isTop(),left=isLeft(); const vKey=top?'top':'bottom',hKey=left?'left':'right';
  function fields(prefix,obj){
    let h=`<div class="offset-row"><label>${top?'Od vrchu':'Od spodu'}</label><input class="offset-input" type="number" value="${obj[vKey]||28}" min="0" max="400" oninput="setOffset('${prefix}','${vKey}',this.value)"> px</div>`;
    if(!top) h+=`<div class="offset-row" style="margin-top:6px"><label>${left?'Od ľava':'Od prava'}</label><input class="offset-input" type="number" value="${obj[hKey]||28}" min="0" max="400" oninput="setOffset('${prefix}','${hKey}',this.value)"> px</div>`;
    else h+=`<p style="font-size:11px;color:#9ca3af;margin-top:8px">Tab je prichytený k hrane – horizontálny offset sa nenastavuje.</p>`;
    return h;
  }
  document.getElementById('offset-desktop-fields').innerHTML=fields('offsetDesktop',S.offsetDesktop);
  document.getElementById('offset-mobile-fields').innerHTML=fields('offsetMobile',S.offsetMobile);
}


// ── SWITCH TYPE ───────────────────────────────────────────────────────────────
function switchType(type, el) {
  S.widgetType = type;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const dyn = document.getElementById('cfg-dynamic');
  dyn.innerHTML = WIDGET_TYPES[type].sections.map(s => SECTIONS[s] ? SECTIONS[s]() : '').join('');

  // update best practices / context copy for selected widget
  buildContextCopy(type);

  // Reset preview stage visibility
  const badge = document.getElementById('gr-badge');
  const panel = document.getElementById('gr-panel');
  
  ['c0','c1','c2','c3','c4'].forEach(t => {
    const el2 = t === 'c0' ? null : document.getElementById(`preview-${t}`);
    if (t === 'c0') {
      if (badge) badge.style.display = type === 'c0' ? '' : 'none';
      if (panel) panel.style.display = type === 'c0' ? '' : 'none';
    } else {
      if (el2) el2.style.display = type === t ? 'flex' : 'none';
    }
  });

  // Rebuild widget preview
  if (type === 'c0') {
    buildOffsetFields();
    applyTheme();
    buildBadge();
    applyPosition();
  } else if (type === 'c1') {
    applyTheme();
    buildCarousel();
  } else if (type === 'c2') {
    applyTheme();
    buildBar();
  } else if (type === 'c3') {
    applyTheme();
  } else if (type === 'c4') {
    applyTheme();
    buildCTA();
  }
}

// ── SET LANGUAGE ──────────────────────────────────────────────────────────────
function setLang(lang){
  S.lang=lang;
  const t=LANGS[lang];
  S.ctaWrite=t.writeReview; S.ctaAll=t.allReviews;
  const inpW=document.getElementById('inp-write'); if(inpW) inpW.value=t.writeReview;
  const inpA=document.getElementById('inp-all'); if(inpA) inpA.value=t.allReviews;
  const cnt=document.getElementById('panel-count'); if(cnt) cnt.textContent=`· 47 ${t.reviews}`;
  buildContextCopy(S.widgetType);
  if(S.widgetType==='c0'){ updateTexts(); buildBadge(); }
  else if(S.widgetType==='c1'){ buildCarousel(); }
  else if(S.widgetType==='c2'){ buildBar(); }
}
// ── TOGGLE PANEL ─────────────────────────────────────────────────────────────
function togglePanel(){ panelOpen=!panelOpen; document.getElementById('gr-panel').classList.toggle('open',panelOpen); }

// ── DEVICE SWITCHER ──────────────────────────────────────────────────────────
function setDevice(dev,el){
  currentDevice=dev; document.querySelectorAll('.dev-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active');
  const frame=document.getElementById('device-frame'); const label=document.getElementById('device-label'); const stage=document.getElementById('preview-stage');
  frame.className=''; frame.style.display='none'; stage.classList.remove('device-mode');
  if(dev==='desktop'){ label.textContent='🖥 Desktop preview'; badgeToFixed(); }
  else{
    frame.classList.add(dev==='mobile'?'mobile':'tablet','visible'); label.textContent=dev==='mobile'?'📱 Mobile preview':'⬜ Tablet preview'; stage.classList.add('device-mode'); badgeToDevice();
  }
}

function badgeToFixed(){ document.getElementById('gr-badge').style.position='fixed'; applyPosition(); }
function badgeToDevice(){ document.getElementById('gr-badge').style.position='absolute'; applyPosition(); }

function updateTexts(){ document.getElementById('btn-write').textContent='✏️ '+S.ctaWrite; document.getElementById('btn-all').textContent=S.ctaAll; }


/* CONTROLS */
function setStyle(s,el){ document.querySelectorAll('[data-style]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.style=s; applyTheme(); buildBadge(); }
function setColor(el){ document.querySelectorAll('.color-swatch').forEach(c=>c.classList.remove('active')); el.classList.add('active'); S.accent=el.dataset.color; applyTheme(); }
function setColorHex(v){ S.accent=v; applyTheme(); }
function setMode(m,el){ document.querySelectorAll('#mode-section .toggle-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.mode=m; applyTheme(); }
function setRadius(v){ S.radius=parseInt(v); document.getElementById('radius-val').textContent=v+'px'; applyTheme(); applyPosition(); }
function setSize(s,el){ document.querySelectorAll('[data-size]').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.size=s; applyTheme(); applyPosition(); }
function setPos(el){ document.querySelectorAll('.pos-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); S.pos=el.dataset.pos; const top=isTop(),left=isLeft(); S.offsetDesktop={[top?'top':'bottom']:top?100:28,...(top?{}:{[left?'left':'right']:28})}; S.offsetMobile={[top?'top':'bottom']:top?80:16,...(top?{}:{[left?'left':'right']:16})}; buildOffsetFields(); buildBadge(); applyPosition(); panelOpen=false; document.getElementById('gr-panel').classList.remove('open'); }
function setOffset(key,field,val){ S[key][field]=parseInt(val)||0; applyPosition(); }
function setOffsetTab(tab,el){ activeOffsetTab=tab; document.querySelectorAll('.offset-tab').forEach(b=>b.classList.remove('active')); el.classList.add('active'); document.getElementById('offset-desktop-fields').style.display=tab==='desktop'?'block':'none'; document.getElementById('offset-mobile-fields').style.display=tab==='mobile'?'block':'none'; }

// ── REVIEWS RENDERER + INIT ──────────────────────────────────────────────────
document.getElementById('panel-stars').innerHTML=Array(5).fill(STAR(12)).join('');

function renderReviews(){
  const MAX=130; document.getElementById('gr-reviews-list').innerHTML=reviews.map((rv,i)=>{ const long=rv.text.length>MAX,short=long?rv.text.slice(0,MAX)+'...':rv.text; return `<div class="gr-review-item"><div class="gr-review-top"><div class="gr-avatar" style="background:${rv.col}">${rv.init}</div><div><div class="gr-reviewer-name">${rv.name}</div><div class="gr-review-date">${rv.date}</div></div></div><div class="gr-review-stars">${Array(rv.r).fill(STAR(12)).join('')}</div><div class="gr-review-text"><span id="s${i}" class="gr-text-short">${short}${long?`<span class="gr-read-more" onclick="exp(${i})"> Čítať viac</span>`:''}</span>${long?`<span id="f${i}" class="gr-text-full">${rv.text}<span class="gr-read-more" onclick="col(${i})"> Menej</span></span>`:''}</div></div>`; }).join('');
}

function setMinRating(v, el) {
  document.querySelectorAll('[data-minrating]').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  S.minRating = v;
}

function setReviewCount(v, el) {
  document.querySelectorAll('[data-count]').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  S.reviewCount = v;
  renderReviews();
}

function setTextLen(v) {
  S.textLen = parseInt(v);
  const el = document.getElementById('textlen-val');
  if (el) el.textContent = S.textLen + ' znakov';
  renderReviews();
}

function setDateFormat(v, el) {
  document.querySelectorAll('[data-datefmt]').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  S.dateFormat = v;
  renderReviews();
}

function setOwnerReply(v, el) {
  document.querySelectorAll('[data-ownerreply]').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  S.ownerReply = v;
}

function exp(i){ document.getElementById('s'+i).classList.add('hidden'); document.getElementById('f'+i).classList.add('visible'); }
function col(i){ document.getElementById('s'+i).classList.remove('hidden'); document.getElementById('f'+i).classList.remove('visible'); }

renderReviews(); buildBadge(); buildOffsetFields(); applyTheme(); applyPosition();
if (S._initType) switchType(S._initType, document.querySelector(`.type-btn[data-type="${S._initType}"]`));
window.addEventListener('resize', applyPosition);


// ── IFRAME POSTMESSAGE BRIDGE (pre admin konfigurátor) ───────────────────────
// Admin posiela LOAD_CONFIG → načítame stav do S a prestavíme UI
// Admin posiela GET_CONFIG  → odpovieme CONFIG_DATA so stavom S
window.addEventListener('message', function(e) {
  if (!e.data || !e.data.type) return;

  if (e.data.type === 'LOAD_CONFIG') {
    const cfg = e.data.config;
    if (!cfg) return;
    // Merge config into S
    const keys = ['style','accent','mode','radius','size','pos','lang',
                  'minRating','reviewCount','textLen','dateFormat','ownerReply',
                  'devDesktop','devTablet','devMobile','showCount',
                  'ctaWrite','ctaAll','barPos','barCustomText','barDismissible',
                  'widgetType','offsetDesktop','offsetMobile'];
    keys.forEach(k => { if (cfg[k] !== undefined) S[k] = cfg[k]; });
    // Rebuild UI with loaded config
    const type = cfg.widgetType || cfg.type || 'c0';
    switchType(type, document.querySelector(`.type-btn[data-type="${type}"]`));
    applyTheme();
    applyPosition();
    // Sync sidebar controls to loaded values
    const radEl = document.getElementById('radius-val');
    if (radEl) radEl.textContent = S.radius + 'px';
    const tlEl = document.getElementById('textlen-val');
    if (tlEl) tlEl.textContent = S.textLen + ' znakov';
  }

  if (e.data.type === 'GET_CONFIG') {
    const config = Object.assign({}, S, {
      widgetType: S.widgetType || 'c0',
      type: S.widgetType || 'c0'
    });
    window.parent.postMessage({ type: 'CONFIG_DATA', config: config }, '*');
  }
});
