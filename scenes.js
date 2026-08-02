/* ============================================================
   SCENES — animated illustrations, one per kind of moment.
   Pure SVG + CSS. No images, no downloads, no tracking.
   Every scene is 400x300 and animates only while on screen.
   ============================================================ */

const SCENES = {

  /* ---------- sunrise / good morning ---------- */
  dawn: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs>
      <linearGradient id="dSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FBD8C4"/><stop offset=".55" stop-color="#F6C0B6"/>
        <stop offset="1" stop-color="#E9A6A6"/></linearGradient>
      <radialGradient id="dGlow"><stop offset="0" stop-color="#FFF3D6" stop-opacity=".95"/>
        <stop offset="1" stop-color="#FFF3D6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#dSky)"/>
    <circle cx="200" cy="196" r="120" fill="url(#dGlow)" class="a-breathe"/>
    <g class="a-rise">
      <circle cx="200" cy="196" r="40" fill="#FFEFC9"/>
      <circle cx="200" cy="196" r="40" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.5" class="a-halo"/>
    </g>
    <g class="a-rays" style="transform-origin:200px 196px">
      ${Array.from({length:12},(_,i)=>`<rect x="199" y="120" width="2" height="18" rx="1" fill="#FFF6DE" opacity=".55" transform="rotate(${i*30} 200 196)"/>`).join("")}
    </g>
    <path d="M0 210 Q70 178 140 208 T280 204 T400 216 V300 H0Z" fill="#D98E92" opacity=".65"/>
    <path d="M0 236 Q90 210 180 234 T400 240 V300 H0Z" fill="#B96F79" opacity=".8"/>
    <path d="M0 262 Q110 244 220 262 T400 266 V300 H0Z" fill="#8E5560"/>
    <g fill="none" stroke="#7A4551" stroke-width="1.6" stroke-linecap="round" opacity=".75">
      <path d="M96 84 q7 -6 14 0" class="a-fly1"/>
      <path d="M118 74 q6 -5 12 0" class="a-fly2"/>
      <path d="M300 98 q8 -6 16 0" class="a-fly3"/>
    </g>
  </svg>`,

  /* ---------- night / late messages ---------- */
  night: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="nSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2B2544"/><stop offset=".6" stop-color="#4A3556"/>
      <stop offset="1" stop-color="#7E4F60"/></linearGradient>
      <radialGradient id="nMoon"><stop offset="0" stop-color="#FFF6E0"/><stop offset="1" stop-color="#F3DDB8"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#nSky)"/>
    ${Array.from({length:34},(_,i)=>{const x=(i*97)%390+5,y=(i*61)%170+12,r=(i%3)*0.5+0.8;
      return `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFF8E7" class="a-twinkle" style="animation-delay:${(i%9)*0.42}s"/>`}).join("")}
    <circle cx="312" cy="66" r="30" fill="url(#nMoon)" class="a-breathe"/>
    <circle cx="300" cy="58" r="26" fill="#37294F" opacity=".92"/>
    <g opacity=".5"><circle cx="312" cy="66" r="44" fill="none" stroke="#FFF6E0" stroke-width=".8" class="a-halo"/></g>
    <path d="M0 232 L44 206 L86 232 L128 198 L176 232 L220 210 L268 236 L318 204 L362 234 L400 214 V300 H0Z" fill="#241D38"/>
    ${[46,92,140,196,248,300,346].map((x,i)=>`<rect x="${x}" y="${236+(i%3)*6}" width="5" height="7" rx="1" fill="#FFD79A" opacity=".8" class="a-twinkle" style="animation-delay:${i*.7}s"/>`).join("")}
  </svg>`,

  /* ---------- moon / longing, dreams ---------- */
  moon: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="mSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3B2E52"/><stop offset="1" stop-color="#8A5C6B"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#mSky)"/>
    ${Array.from({length:22},(_,i)=>`<circle cx="${(i*133)%385+8}" cy="${(i*79)%230+10}" r="1" fill="#FFF3DC" class="a-twinkle" style="animation-delay:${(i%7)*.5}s"/>`).join("")}
    <circle cx="200" cy="140" r="62" fill="#FFF4DA" class="a-breathe"/>
    <g fill="#EBD8B4" opacity=".55">
      <circle cx="182" cy="122" r="10"/><circle cx="216" cy="150" r="7"/>
      <circle cx="196" cy="166" r="5"/><circle cx="222" cy="118" r="4"/>
    </g>
    <g fill="#fff" opacity=".16">
      <ellipse cx="120" cy="176" rx="90" ry="17" class="a-drift1"/>
      <ellipse cx="290" cy="206" rx="110" ry="19" class="a-drift2"/>
      <ellipse cx="200" cy="238" rx="140" ry="20" class="a-drift1" style="animation-delay:-9s"/>
    </g>
  </svg>`,

  /* ---------- love ---------- */
  hearts: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="hBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FDE7E7"/><stop offset="1" stop-color="#F3BFC6"/></linearGradient>
      <linearGradient id="hFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E27B8C"/><stop offset="1" stop-color="#C05A72"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#hBg)"/>
    <g class="a-beat" style="transform-origin:200px 152px">
      <path d="M200 196 L154 150 a30 30 0 0 1 46-40 a30 30 0 0 1 46 40 Z" fill="url(#hFill)"/>
      <path d="M200 196 L154 150 a30 30 0 0 1 46-40 a30 30 0 0 1 46 40 Z" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.5"/>
    </g>
    ${[[54,0],[110,1.4],[168,2.6],[236,0.7],[300,2.0],[348,3.3]].map(([x,d])=>
      `<path d="M${x} 280 l-11 -11 a7.5 7.5 0 0 1 11 -10 a7.5 7.5 0 0 1 11 10 Z" fill="#C05A72" opacity=".45" class="a-float" style="animation-delay:${d}s"/>`).join("")}
  </svg>`,

  /* ---------- birthday ---------- */
  cake: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="cBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFF2E2"/><stop offset="1" stop-color="#F6D3C8"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#cBg)"/>
    ${Array.from({length:16},(_,i)=>`<rect x="${(i*53)%376+8}" y="${-20-(i%5)*40}" width="5" height="9" rx="2"
      fill="${["#E27B8C","#E8B44A","#7FA9A0","#C05A72"][i%4]}" opacity=".8" class="a-confetti" style="animation-delay:${(i%8)*.65}s"/>`).join("")}
    <ellipse cx="200" cy="248" rx="104" ry="12" fill="#D9A9A0" opacity=".5"/>
    <rect x="112" y="188" width="176" height="58" rx="8" fill="#F7E3CE"/>
    <rect x="112" y="188" width="176" height="16" rx="8" fill="#E9A9AE"/>
    <path d="M112 202 q22 16 44 0 t44 0 t44 0 t44 0 v-6 H112Z" fill="#E9A9AE"/>
    <rect x="134" y="160" width="132" height="34" rx="7" fill="#FBEEDD"/>
    <rect x="134" y="160" width="132" height="12" rx="6" fill="#F0BDBD"/>
    <rect x="196" y="128" width="8" height="34" rx="3" fill="#F5F0E4"/>
    <g class="a-flame" style="transform-origin:200px 126px">
      <ellipse cx="200" cy="119" rx="6" ry="11" fill="#F5B342"/>
      <ellipse cx="200" cy="122" rx="3" ry="6" fill="#FFF0BE"/>
    </g>
    <circle cx="200" cy="120" r="26" fill="#FFE9A8" opacity=".3" class="a-breathe"/>
  </svg>`,

  /* ---------- fight / hard days ---------- */
  storm: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="sSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#4C4757"/><stop offset="1" stop-color="#7E7080"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#sSky)"/>
    <g fill="#3B3746" opacity=".85">
      <ellipse cx="130" cy="96" rx="72" ry="30" class="a-drift1"/>
      <ellipse cx="262" cy="84" rx="86" ry="34" class="a-drift2"/>
      <ellipse cx="196" cy="110" rx="98" ry="26"/>
    </g>
    ${Array.from({length:22},(_,i)=>`<line x1="${(i*41)%390+6}" y1="140" x2="${(i*41)%390-6}" y2="176"
      stroke="#C9C2D2" stroke-width="1.4" stroke-linecap="round" opacity=".55" class="a-rain" style="animation-delay:${(i%6)*.22}s"/>`).join("")}
    <path d="M206 132 l-26 46 h20 l-12 42 40 -56 h-22 z" fill="#F5D98F" class="a-flash"/>
    <path d="M0 250 Q100 234 200 250 T400 248 V300 H0Z" fill="#3B3746" opacity=".9"/>
  </svg>`,

  /* ---------- distance / not meeting ---------- */
  distance: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="rSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E8CFC9"/><stop offset="1" stop-color="#C79A9C"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#rSky)"/>
    <circle cx="200" cy="150" r="26" fill="#F6DCC0" opacity=".9"/>
    <path d="M0 176 Q100 152 200 172 T400 168 V300 H0Z" fill="#A87B84"/>
    <path d="M168 300 L192 176 L208 176 L232 300 Z" fill="#8E646F"/>
    ${[0,1,2,3,4].map(i=>`<rect x="197" y="${186+i*24}" width="6" height="${11-i*1.6}" rx="1" fill="#F3E2D6" opacity=".85"
      class="a-dash" style="animation-delay:${i*.4}s"/>`).join("")}
    <circle cx="200" cy="182" r="4" fill="#5E3A47" class="a-breathe"/>
    <circle cx="200" cy="286" r="6" fill="#5E3A47" class="a-breathe" style="animation-delay:-1.4s"/>
    <g opacity=".5" fill="#6E4854">
      <path d="M44 174 l10 -22 10 22z"/><path d="M336 172 l9 -20 9 20z"/>
    </g>
  </svg>`,

  /* ---------- illness / looking after each other ---------- */
  care: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="tBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#EFF3EA"/><stop offset="1" stop-color="#DCE6DC"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#tBg)"/>
    <g stroke="#9FB8A8" stroke-width="3" fill="none" stroke-linecap="round" opacity=".75">
      <path d="M172 132 q-12 -20 0 -36 q12 -18 0 -34" class="a-steam" style="animation-delay:0s"/>
      <path d="M200 128 q-13 -22 0 -40 q13 -20 0 -38" class="a-steam" style="animation-delay:1.1s"/>
      <path d="M228 132 q-12 -20 0 -36 q12 -18 0 -34" class="a-steam" style="animation-delay:2.1s"/>
    </g>
    <ellipse cx="200" cy="238" rx="86" ry="12" fill="#BFCFC0" opacity=".55"/>
    <path d="M136 146 h128 v44 a48 48 0 0 1 -48 48 h-32 a48 48 0 0 1 -48 -48 z" fill="#FBF8F3"/>
    <path d="M136 146 h128 v10 h-128z" fill="#E0A9A9"/>
    <path d="M264 160 h16 a22 22 0 0 1 0 44 h-16" fill="none" stroke="#FBF8F3" stroke-width="9"/>
    <path d="M200 196 l-14 -14 a9 9 0 0 1 14 -12 a9 9 0 0 1 14 12 Z" fill="#D98692" class="a-beat" style="transform-origin:200px 186px"/>
  </svg>`,

  /* ---------- photo days ---------- */
  photos: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="pBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F7EFE8"/><stop offset="1" stop-color="#E7D4CE"/></linearGradient>
      <linearGradient id="pIn" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E9B7B4"/><stop offset="1" stop-color="#B98793"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#pBg)"/>
    <g transform="rotate(-9 150 160)"><rect x="96" y="104" width="108" height="122" rx="4" fill="#fff" opacity=".92"/>
      <rect x="104" y="112" width="92" height="82" fill="url(#pIn)" opacity=".75"/></g>
    <g transform="rotate(6 250 156)"><rect x="200" y="96" width="112" height="128" rx="4" fill="#fff" opacity=".96"/>
      <rect x="208" y="104" width="96" height="86" fill="url(#pIn)"/></g>
    <g transform="rotate(-2 200 168)" class="a-lift">
      <rect x="146" y="122" width="120" height="136" rx="4" fill="#fff"/>
      <rect x="155" y="131" width="102" height="92" fill="url(#pIn)"/>
      <path d="M155 200 l26 -28 22 22 18 -18 36 34 v13 h-102z" fill="#8E5F6E" opacity=".55"/>
      <circle cx="230" cy="150" r="8" fill="#FFF0D4" opacity=".9"/>
      <rect x="155" y="131" width="102" height="92" fill="#fff" opacity=".0" class="a-shine"/>
    </g>
  </svg>`,

  /* ---------- festival / celebration ---------- */
  festival: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="fBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3A2A44"/><stop offset="1" stop-color="#8B5560"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#fBg)"/>
    <path d="M-10 46 Q100 104 200 60 T410 74" fill="none" stroke="#C9AFA0" stroke-width="1.6" opacity=".7"/>
    ${Array.from({length:11},(_,i)=>{const x=12+i*38, y=[60,78,92,98,94,80,66,62,68,74,78][i];
      return `<g class="a-glow" style="animation-delay:${i*.34}s">
        <circle cx="${x}" cy="${y+10}" r="16" fill="#FFD79A" opacity=".18"/>
        <circle cx="${x}" cy="${y+10}" r="5" fill="#FFE6B4"/></g>`}).join("")}
    <path d="M-10 122 Q110 176 210 134 T410 148" fill="none" stroke="#C9AFA0" stroke-width="1.4" opacity=".5"/>
    ${Array.from({length:9},(_,i)=>{const x=24+i*46, y=[136,152,164,166,158,146,136,134,140][i];
      return `<circle cx="${x}" cy="${y}" r="4" fill="#F6C48E" class="a-glow" style="animation-delay:${1.2+i*.3}s"/>`}).join("")}
    ${Array.from({length:14},(_,i)=>`<circle cx="${(i*89)%390+6}" cy="${190+(i*53)%100}" r="${2+(i%3)}" fill="#FFDCA8" opacity=".2" class="a-float" style="animation-delay:${(i%7)*.9}s"/>`).join("")}
    <path d="M0 262 Q100 246 200 262 T400 258 V300 H0Z" fill="#2C2036"/>
  </svg>`,

  /* ---------- exams / studying ---------- */
  study: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><radialGradient id="lGlow"><stop offset="0" stop-color="#FFE9B0" stop-opacity=".85"/>
      <stop offset="1" stop-color="#FFE9B0" stop-opacity="0"/></radialGradient></defs>
    <rect width="400" height="300" fill="#F3EDE3"/>
    <ellipse cx="238" cy="150" rx="150" ry="130" fill="url(#lGlow)" class="a-breathe"/>
    <rect x="0" y="238" width="400" height="62" fill="#C8A98F"/>
    <rect x="0" y="238" width="400" height="5" fill="#B08F76"/>
    <g>
      <rect x="86" y="216" width="132" height="12" rx="2" fill="#B4707E"/>
      <rect x="92" y="204" width="120" height="12" rx="2" fill="#7E9AA6"/>
      <rect x="98" y="192" width="108" height="12" rx="2" fill="#D0A45C"/>
    </g>
    <g class="a-page" style="transform-origin:214px 190px">
      <path d="M148 190 q52 -16 104 0 v42 q-52 -14 -104 0z" fill="#FBF7EF" stroke="#DED2C0"/>
      <path d="M200 178 v54" stroke="#DED2C0"/>
      ${[0,1,2,3].map(i=>`<line x1="${158+0}" y1="${196+i*9}" x2="192" y2="${194+i*9}" stroke="#CFC2AE" stroke-width="1.4"/>
        <line x1="208" y1="${194+i*9}" x2="244" y2="${196+i*9}" stroke="#CFC2AE" stroke-width="1.4"/>`).join("")}
    </g>
    <g>
      <rect x="282" y="146" width="8" height="92" rx="3" fill="#8A6D5A"/>
      <path d="M258 146 h56 l-14 -30 h-28z" fill="#E7C98C"/>
      <ellipse cx="286" cy="238" rx="26" ry="6" fill="#8A6D5A"/>
      <circle cx="286" cy="140" r="9" fill="#FFF2C6" class="a-breathe"/>
    </g>
  </svg>`,

  /* ---------- calls ---------- */
  call: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="clBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E4EDEA"/><stop offset="1" stop-color="#CFDDD9"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#clBg)"/>
    ${[0,1,2].map(i=>`<circle cx="200" cy="150" r="52" fill="none" stroke="#8FAEA5" stroke-width="1.6" class="a-ring" style="animation-delay:${i*1.1}s"/>`).join("")}
    <rect x="164" y="88" width="72" height="124" rx="14" fill="#3E4A50"/>
    <rect x="170" y="96" width="60" height="108" rx="9" fill="#EDF3F1"/>
    <circle cx="200" cy="130" r="15" fill="#C7DAD3"/>
    <circle cx="200" cy="126" r="5.5" fill="#8FAEA5"/>
    <path d="M188 142 q12 -12 24 0 v4 h-24z" fill="#8FAEA5"/>
    <rect x="180" y="158" width="40" height="4" rx="2" fill="#D2DEDA"/>
    <rect x="186" y="168" width="28" height="4" rx="2" fill="#D2DEDA"/>
    <circle cx="200" cy="190" r="9" fill="#C0736F" class="a-beat" style="transform-origin:200px 190px"/>
    <path d="M196 187 l3 3 6 -6" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </svg>`,

  /* ---------- songs sent ---------- */
  music: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="muBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#EDE6F1"/><stop offset="1" stop-color="#D8C6DA"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#muBg)"/>
    ${Array.from({length:19},(_,i)=>`<rect x="${34+i*18}" y="130" width="8" height="40" rx="4" fill="#9A7BA0" opacity=".8"
      class="a-bar" style="animation-delay:${(i%9)*.16}s"/>`).join("")}
    <g class="a-float" style="animation-delay:.4s" opacity=".55">
      <circle cx="92" cy="252" r="8" fill="#7E5F88"/><rect x="98" y="212" width="3" height="42" fill="#7E5F88"/>
      <path d="M101 212 q16 4 20 14 q-8 -6 -20 -4z" fill="#7E5F88"/>
    </g>
    <g class="a-float" style="animation-delay:2.3s" opacity=".45">
      <circle cx="300" cy="252" r="6" fill="#7E5F88"/><rect x="304" y="220" width="2.5" height="34" fill="#7E5F88"/>
      <path d="M306.5 220 q13 3 16 11 q-6 -5 -16 -3z" fill="#7E5F88"/>
    </g>
  </svg>`,

  /* ---------- silence / the end ---------- */
  silence: `
  <svg viewBox="0 0 400 300" class="sc">
    <defs><linearGradient id="siBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EFEAE6"/><stop offset="1" stop-color="#DAD1CE"/></linearGradient></defs>
    <rect width="400" height="300" fill="url(#siBg)"/>
    <g opacity=".75">
      <path d="M92 96 h150 a12 12 0 0 1 12 12 v42 a12 12 0 0 1 -12 12 h-118 l-20 18 v-18 h-12 a12 12 0 0 1 -12 -12 v-42 a12 12 0 0 1 12 -12z"
        fill="#fff" class="a-fadeslow"/>
      <line x1="112" y1="118" x2="216" y2="118" stroke="#CFC5C0" stroke-width="4" stroke-linecap="round"/>
      <line x1="112" y1="134" x2="186" y2="134" stroke="#CFC5C0" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g opacity=".38">
      <path d="M308 172 h-150 a12 12 0 0 0 -12 12 v40 a12 12 0 0 0 12 12 h118 l20 17 v-17 h12 a12 12 0 0 0 12 -12 v-40 a12 12 0 0 0 -12 -12z"
        fill="#fff" class="a-fadeslow" style="animation-delay:-4s"/>
    </g>
    <g>
      <circle cx="176" cy="204" r="4.5" fill="#B6AAA5" class="a-dot" style="animation-delay:0s"/>
      <circle cx="196" cy="204" r="4.5" fill="#B6AAA5" class="a-dot" style="animation-delay:.24s"/>
      <circle cx="216" cy="204" r="4.5" fill="#B6AAA5" class="a-dot" style="animation-delay:.48s"/>
    </g>
  </svg>`,
};
