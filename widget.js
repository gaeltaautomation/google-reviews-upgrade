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
      <label class="chk-single"><input type="checkbox" ${S.showCount?'checked':''} onchange="S.showCount=this.checked;buildBadge();\"><span>Zobraziť počet recenzií (napr. 47)</span></label>
      <div class="cfg-label" style="margin-top:10px"><span class="cfg-label-icon">📺</span> Na ktorých zariadeniach zobrazovať</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked\"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked\"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked\"><span>📱 Mobil</span></label>
    </div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📄</span> Na ktorých stránkach zobrazovať</div>
      ${renderPagesGrid()}
    </div>`,

  'display-devices': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📺</span> Na ktorých zariadeniach zobrazovať</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked\"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked\"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked\"><span>📱 Mobil</span></label>
    </div>`,

  'display-pages': () => `
    <div class="cfg-group"><span>👁</span> Zobrazenie</div>
    <div class="cfg-section">
      <div class="cfg-label"><span class="cfg-label-icon">📺</span> Na ktorých zariadeniach zobrazovať</div>
      <label class="chk-single"><input type="checkbox" ${S.devDesktop?'checked':''} onchange="S.devDesktop=this.checked\"><span>🖥 Počítač</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devTablet?'checked':''} onchange="S.devTablet=this.checked\"><span>⬜ Tablet</span></label>
      <label class="chk-single"><input type="checkbox" ${S.devMobile?'checked':''} onchange="S.devMobile=this.checked\"><span>📱 Mobil</span></label>
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
    <div class="lang-grid">${langs.map(([v,l])=>`<label class="lang-opt"><input type="radio" name="lang" value="${v}" ${S.lang===v?'checked':''} onchange="setLang(this.value)\"><span>${l}</span></label>`).join('')}</div>`;
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
        text: 'Ideálne miesto je po predstavení benefi tov produktu/služby alebo pred sekciou „O nás".'
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

// ── SWITCH TYPE ───────────────────────────────────────────────────────────────
function switchType(type, el) {
  S.widgetType = type;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const dyn = document.getElementById('cfg-dynamic');
  dyn.innerHTML = WIDGET_TYPES[type].sections.map(s => SECTIONS[s] ? SECTIONS[s]() : '').join('');

  // update best practices / context copy for selected widget
  buildContextCopy(type);

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
    applyTheme();
  } else if (type === 'c4') {
    applyTheme(); buildCTA();
  }
}
