/* ============================================================
   CONTENT — all the words.
   Anything in {{ }} still needs your input.
   ============================================================ */

const CONTENT = {

  herName: "Anuja",
  yourName: "Pascal",
  tabTitle: "Anuja — ek baat kehni thi",

  /* ---------- opening screen ---------- */
  curtain: {
    label: "Anuja ke liye",
    hint: "Padhna zaroori nahi hai. Par agar padho, to poora padhna.",
    button: "Kholo",
  },

  hero: {
    eyebrow: "11 June 2024 — 7 October 2025",
    line1: "Mere best moments — tumhare saath.",
    line2: "",
    sub: "Yeh page apne aap scroll hoga. Jitna dekhna hai dekh lena, jab mann kare band kar dena.",
    photo: "img/photo-09.jpg",
  },

  /* ---------- optional video message ---------- */
  videoMessage: {
    show: false,          // true karo agar video daalni hai
    title: "Likhne se aasan tha bol dena",
    caption: "",
    video: "",            // Google Drive FILE ID ya .mp4 link
  },

  /* ---------- about her ---------- */
  goodPoints: {
    eyebrow: "tumhare baare mein",
    title: "Jo maine kabhi theek se nahi bola",
    intro: "Har point ke neeche tumhara hi message hai. Yeh meri raay nahi hai — yeh record hai.",
    items: [
      { icon: "☾", title: "Tum sab notice karti thi",
        text: "Main raat ko 3 baje online tha — tumne dekh liya. Main off tha — tumne pooch liya. Tumse kuch chhupta hi nahi tha.",
        quote: "Raat ma 3 baja online tha" },
      { icon: "✦", title: "Pyaar ki definition tumhe mujhse behtar pata thi",
        text: "Maine ise 'jhoot' bola tha us din. Aaj samajh aata hai ki tum sahi thi.",
        quote: "sacha pyar h na to pura life v agar chuna na da to v pyar rahga" },
      { icon: "❀", title: "Tum sach bolti thi, chahe usse tumhe hi nuksaan ho",
        text: "Tumne apne baare mein wo baatein batayi jo kisi ko batana aasan nahi hota. Aur maine bas itna kaha — 'galat soch rahi ho'.",
        quote: "Mummy papa ka pyar ni mila to laga tha bestfrd h par wo badal gya" },
      { icon: "☀︎", title: "Tumne mujhse pehle bola",
        text: "Kai baar. Bina kisi wajah ke, bina kisi expectation ke.",
        quote: "Baby i love u 😘" },
      { icon: "❤︎", title: "Meri tabiyat ka dhyaan tum rakhti thi",
        text: "Main bimar hota tha to tum dawa yaad dilati thi. Tum bimar hoti thi to bhi tum mera hi poochhti thi.",
        quote: "Iska jrurat abhi tumko h" },
      { icon: "✧", title: "Tum aadat ban gayi thi, aur tumne wo maan bhi liya",
        text: "Shuru mein achha nahi lagta tha. Baad mein bina uske achha nahi lagta tha. Tumne yeh khud bola tha.",
        quote: "ab aadat ho gya ab tum bolta ni h to aacha ni lagta h" },
      { icon: "✎", title: "Padhai tumne kabhi nahi chhodi",
        text: "Board exams, classes, sab kuch iske beech chalta raha. Tumne sambhal liya.",
        quote: "Bina padha exam danga" },
      { icon: "♪", title: "Tum control kar leti thi, main nahi kar paata tha",
        text: "Tumhe bhi wahi mehsoos hota tha. Bas tum use sambhalna jaanti thi.",
        quote: "Jisa tum feel karta h hum v karta h par control karna padhta h na" },
    ],
  },

  /* ---------- amends ---------- */
  amends: {
    eyebrow: "sirf sorry nahi",
    title: "Jo main kar raha hoon",
    intro: "Yeh list tumhare liye koi option nahi hai. Tumhe kuch choose nahi karna. Yeh sirf batane ke liye hai ki sorry ke baad main kar kya raha hoon.",
    items: [
      { tag: "abhi", title: "Tumhe dobara disturb nahi karunga",
        text: "Yeh page bhej raha hoon, aur uske baad kuch nahi. Na message, na call. Agar tum kuch kehna chaho to tum jaanti ho main kahan hoon." },
      { tag: "abhi", title: "Apni tabiyat aur kaam sambhal raha hoon",
        text: "{{Yahan likho ki tum abhi kya kar rahe ho — kaam wapas shuru, doctor, jo bhi sach ho. Ek do line kaafi hai.}}" },
      { tag: "abhi", title: "Jo pressure andar rakh liya tha, uspar kaam kar raha hoon",
        text: "{{Kisi se baat kar rahe ho? Koi routine? Jo bhi sach hai wo likho. Agar kuch nahi kar rahe to yeh point hata do — jhoot yahan sabse bura lagega.}}" },
      { tag: "aage", title: "Sunna seekh raha hoon, safai dena band",
        text: "Tumne kai baar bola tha ki main poori baat padhe bina jawab de deta hoon. Sahi bola tha." },
      { tag: "aage", title: "Kisi aur ke saath yeh galti dobara nahi",
        text: "Respect, time, aur seedhi baat — yeh teen cheezein ab basic hain mere liye. Isme tumhara hi sikhaaya hua hai." },
    ],
  },

  /* ---------- reading tracker ----------
     Uski screen par kuch nahi dikhta. Reading progress seedha
     tumhare apne Google Sheet mein jaati hai (tracker.gs dekho).
     endpoint: "" rakhoge to kuch bhi kahin nahi bheja jayega.       */
  tracker: {
    endpoint: "https://script.google.com/macros/s/AKfycbwV1wgakeQ8F-vecekyexmgnU7pF8xmDPh7TbgDOxSEC08o8Fegfu76Tl1Ik7JgJYPh/exec",
    notice: "",
  },

  /* ---------- background music ----------
     img/song.mp3 ek original ambient piano loop hai — 74 second,
     seamless loop, kisi ka copyright nahi.

     Badalna ho to:
       music: "img/koi-aur.mp3"     <- file repo ke andar
       music: "1AbCdEfGhIjK"        <- Google Drive FILE ID
       music: ""                    <- music band, ♪ button chhup jayega

     Kaise chalta hai:
       · "Kholo" dabate hi dheere se fade-in hoke shuru
       · Loop mein chalta rehta hai
       · Upar ♪ button hamesha dikhta hai — ek tap se band
       · Ek baar band kiya to dobara khud se chalu nahi hoga           */
  music: "img/song.mp3",
  /* 0.12 = halka background sound. Padhne aur photos dekhne mein
     madad kare, dhyaan na bhatkaye. Zyada chahiye to 0.2 kar do,
     aur kam ke liye 0.08.                                          */
  musicVolume: 0.12,

  autoScroll: true,   // page apne aap dheere scroll hoga; touch/scroll karne par ruk jayega
};
