/* ================================
   Tarh Bledna - Pro Site (3 Lang)
   - Products: search + filter
   - Product page (SEO-ish)
   - Cart drawer (+/-/clear/send)
   - Lightbox for images
   - Visitors counter (CountAPI)
================================== */

// ----------------------
// CONFIG
// ----------------------
const COMPANY = {
  arName: "شركة طرح بلدنا للمحاصيل الزراعية",
  arSub: "أبويوسف للتجارة والتصنيع",
  phones: ["01126773698", "01020508423"],
  whatsapp: "201126773698",
  email: "tarhbladna@gmail.com",
  addressAr: "أبورواش – الجيزة – مصر",
  addressEn: "Abu Rawash – Giza – Egypt",
};

const COUNTER = {
  namespace: "tarhbladna-bot",
  key: "tarehbaldna_visits",
};
// CountAPI endpoint example hit increments and returns value. :contentReference[oaicite:0]{index=0}

/*
  IMPORTANT:
  - الصور لو عندك JPG: سيبها "jpg"
  - لو هترفع PNG: خليها "png"
  - لو WEBP: خليها "webp"
*/
const IMG_EXT = "jpg";

// ----------------------
// PRODUCTS (6 × 8 صور)
// ----------------------
const PRODUCTS = [
  {
    id: "p1",
    type: "shell",
    title: {
      ar: "فول بقشره",
      en: "Peanuts in Shell",
      tr: "Kabuklu Yer Fıstığı",
    },
    desc: {
      ar: "مناسب للتحميص والتعبئة والتصدير.",
      en: "Ideal for roasting, packing, and export.",
      tr: "Kavurma, paketleme ve ihracat için ideal.",
    },
  },
  {
    id: "p2",
    type: "shelled",
    title: {
      ar: "فول مقشر (بالقشرة الحمرا)",
      en: "Shelled Peanuts (Red Skin)",
      tr: "Kabuksuz Yer Fıstığı (Kırmızı Kabuğu)",
    },
    desc: {
      ar: "جاهز للتصنيع أو التعبئة — مناسب للمكسرات والمقالى.",
      en: "Ready for manufacturing or packaging.",
      tr: "Üretim ve paketleme için hazır.",
    },
  },
  {
    id: "p3",
    type: "confection",
    title: {
      ar: "فول حلواني (أبيـض أنصاص)",
      en: "Confectionery Peanuts (White Halves)",
      tr: "Şekerleme Tipi Fıstık (Beyaz Yarı)",
    },
    desc: {
      ar: "مخصص للحلويات والمنتجات الغذائية عالية الجودة.",
      en: "High-grade peanuts for sweets and premium foods.",
      tr: "Tatlı ve premium gıda üretimi için.",
    },
  },
  {
    id: "p4",
    type: "crushed",
    title: {
      ar: "فول مجروش",
      en: "Crushed Peanuts",
      tr: "Kırık Yer Fıstığı",
    },
    desc: {
      ar: "مناسب للحلويات والطعوم والتغطية.",
      en: "Perfect for toppings, flavors, and confectionery.",
      tr: "Kaplama, aroma ve tatlılar için.",
    },
  },
  {
    id: "p5",
    type: "industry",
    title: {
      ar: "فول لشغل الطعوم والشيكولاتة",
      en: "Peanuts for Coating & Chocolate",
      tr: "Çikolata & Kaplama İçin",
    },
    desc: {
      ar: "مثالي للمصانع المتخصصة في الطعوم والشيكولاتة.",
      en: "Ideal for coating and chocolate factories.",
      tr: "Çikolata ve kaplama üretimi için ideal.",
    },
  },
  {
    id: "p6",
    type: "industry",
    title: {
      ar: "فول بيور لعمل زبدة الفول",
      en: "Pure Peanuts for Peanut Butter",
      tr: "Fıstık Ezmesi İçin Saf",
    },
    desc: {
      ar: "جودة نقية 100% مناسبة لإنتاج زبدة الفول السوداني.",
      en: "100% pure quality for peanut butter production.",
      tr: "Fıstık ezmesi üretimi için %100 saf kalite.",
    },
  },
];

function productImages(pid){
  // products/p1/1.jpg ... 8.jpg
  return Array.from({length:8}, (_,i)=> `products/${pid}/${i+1}.${IMG_EXT}`);
}

// ----------------------
// Reviews (صور افاتار رسمية بسيطة بدون ما ننسبها لفيسبوك)
// ----------------------
const REVIEWS = [
  { name:{ar:"محمد",en:"Mohamed",tr:"Muhammed"}, stars:5, text:{ar:"تعامل محترم وجودة ممتازة والتزام بالمواعيد.",en:"Professional handling, excellent quality, on-time delivery.",tr:"Profesyonel yaklaşım, mükemmel kalite, zamanında teslim."}},
  { name:{ar:"أحمد",en:"Ahmed",tr:"Ahmet"}, stars:5, text:{ar:"أفضل خامة فول سوداني للمصانع.. شكراً.",en:"Best peanuts for factories. Thanks.",tr:"Fabrikalar için en iyi fıstık. Teşekkürler."}},
  { name:{ar:"محمود",en:"Mahmoud",tr:"Mahmut"}, stars:5, text:{ar:"التعبئة فاكيوم ممتازة والتواصل سريع.",en:"Great vacuum packaging and fast communication.",tr:"Vakum ambalaj harika, iletişim hızlı."}},
  { name:{ar:"يوسف",en:"Youssef",tr:"Yusuf"}, stars:5, text:{ar:"سعر مناسب مقابل الجودة + شحن سريع.",en:"Good value for quality + fast shipping.",tr:"Kaliteye göre iyi fiyat + hızlı sevkiyat."}},
  { name:{ar:"سارة",en:"Sara",tr:"Sara"}, stars:5, text:{ar:"منتج نظيف وفرز ممتاز.. أنصح.",en:"Clean product, excellent sorting. Recommended.",tr:"Temiz ürün, mükemmel ayıklama. Tavsiye ederim."}},
  { name:{ar:"علي",en:"Ali",tr:"Ali"}, stars:5, text:{ar:"ثقة وتعامل شركة كبيرة فعلاً.",en:"Trusted, truly corporate-level service.",tr:"Güvenilir, gerçekten kurumsal hizmet."}},
];

// ----------------------
// i18n
// ----------------------
const I18N = {
  ar: {
    brandName: COMPANY.arName,
    brandSub: COMPANY.arSub,
    sales: "المبيعات",
    cart: "السلة",
    total: "الإجمالي",
    clearCart: "تفريغ السلة",
    sendOrder: "إرسال الطلب",
    cartHint: "إرسال الطلب يتم على واتساب برسالة جاهزة.",
    kicker: "توريد محلي • تصدير عالمي",
    heroTitle1: "فول سوداني",
    heroTitle2: "بمواصفات مصانع",
    heroTitle3: "— جودة مضمونة",
    heroDesc: "تصنيع وتجهيز وتوريد شكاير 50/25 كجم، وعبوات فاكيوم داخل كرتونة 10 كجم. توريد لجميع محافظات مصر وتصدير لأي مكان في العالم. السعر عند الطلب.",
    ctaProducts: "شاهد المنتجات",
    ctaContact: "تواصل سريع",
    ctaQuote: "اطلب عرض سعر",
    ctaCall: "اتصال بالمبيعات",
    addToCart: "إضافة للسلة",
    back: "رجوع",
    location: COMPANY.addressAr,
    delivery: "سرعة توصيل",
    export: "تصدير لأي مكان في العالم",
    quickTitle: "التعبئة والتجهيز",
    pack1: "شكاير 50 كجم و25 كجم",
    pack2: "فاكيوم عبوات داخل كرتونة 10 كجم",
    pack3: "تجهيز حسب طلب العميل",
    priceNote: "السعر عند الطلب",
    visitors: "عداد الزوار",
    productsCount: "منتجات",
    support: "تواصل",
    whyTitle: "لماذا نحن؟",
    whyDesc: "خبرة وجودة وتسعير وتوصيل… بمعايير شركات كبيرة لخدمة السوق المحلي والتصدير.",
    w1t:"خبرة طويلة", w1d:"خبرة كبيرة في تجارة وتصنيع الفول السوداني والمفروك والتعامل مع المصانع والشركات.",
    w2t:"جودة مضمونة", w2d:"فرز وتجهيز وتعبئة بمعايير دقيقة لضمان منتج نظيف ومطابق للمواصفات.",
    w3t:"أسعار تنافسية", w3d:"أفضل قيمة مقابل الجودة مع مرونة في الكميات والتعاقدات (السعر عند الطلب).",
    w4t:"سرعة توصيل", w4d:"التزام بمواعيد التسليم داخل مصر وتجهيز سريع لطلبات التصدير لأي مكان في العالم.",
    prodTitle:"المنتجات",
    prodDesc:"تصفح المنتجات بالبحث والفلترة — اضغط على أي صورة للتكبير.",
    contactTitle:"التواصل",
    contactDesc:"للطلبات المحلية والتصدير — السعر عند الطلب.",
    contactPhone2:"تواصل",
    email:"البريد",
    serviceTitle:"خدماتنا",
    s1:"تصنيع • تجهيز • توريد",
    s2:"توريد لجميع محافظات مصر",
    s3:"تصدير لأي مكان في العالم",
    s4:"شكاير 50/25 كجم + فاكيوم 10 كجم",
    footerNote:"تصنيع • تجهيز • توريد • تصدير | السعر عند الطلب",
    revTitle:"آراء العملاء",
    revDesc:"شكرًا لعملائنا على الثقة — دي بعض الآراء بعد التعامل مع شركة طرح بلدنا.",
    fAll:"الكل", fShell:"بقشرة", fShelled:"مقشر", fConfection:"حلواني", fCrushed:"مجروش", fIndustry:"تصنيع",
    searchPh:"ابحث داخل المنتجات..."
  },
  en: {
    brandName: "Tarh Bledna Agricultural Crops Company",
    brandSub: "AbuYoussef – Trading & Manufacturing",
    sales: "Sales",
    cart: "Cart",
    total: "Total",
    clearCart: "Clear Cart",
    sendOrder: "Send Order",
    cartHint: "Order will be sent on WhatsApp as a ready message.",
    kicker: "Local Supply • Worldwide Export",
    heroTitle1: "Premium Peanuts",
    heroTitle2: "Factory-Grade Specs",
    heroTitle3: "— Guaranteed Quality",
    heroDesc: "Processing, packing, and supplying 50/25 kg bags and vacuum packs in 10 kg cartons. Nationwide delivery across Egypt and worldwide export. Price upon request.",
    ctaProducts: "View Products",
    ctaContact: "Quick Contact",
    ctaQuote: "Request a Quote",
    ctaCall: "Call Sales",
    addToCart: "Add to Cart",
    back: "Back",
    location: COMPANY.addressEn,
    delivery: "Fast Delivery",
    export: "Worldwide Export",
    quickTitle: "Packaging & Processing",
    pack1: "50 kg & 25 kg bags",
    pack2: "Vacuum packs in 10 kg cartons",
    pack3: "Custom packing upon request",
    priceNote: "Price upon request",
    visitors: "Visitors Counter",
    productsCount: "Products",
    support: "Support",
    whyTitle: "Why Choose Us?",
    whyDesc: "Experience, quality, competitive pricing, and reliable delivery — corporate standards for local & export markets.",
    w1t:"Long Experience", w1d:"Extensive experience in peanut processing and trading for factories and companies.",
    w2t:"Guaranteed Quality", w2d:"Strict sorting, processing, and packaging standards for premium-grade products.",
    w3t:"Competitive Prices", w3d:"Best value with flexible quantities and contracts (price upon request).",
    w4t:"Fast Delivery", w4d:"On-time delivery across Egypt and fast export readiness worldwide.",
    prodTitle:"Products",
    prodDesc:"Browse products with search & filters — click any image to zoom.",
    contactTitle:"Contact",
    contactDesc:"For local orders and export — price upon request.",
    contactPhone2:"Contact",
    email:"Email",
    serviceTitle:"Our Services",
    s1:"Processing • Packaging • Supply",
    s2:"Delivery across all Egypt governorates",
    s3:"Worldwide export",
    s4:"50/25 kg bags + 10 kg vacuum cartons",
    footerNote:"Processing • Packaging • Supply • Export | Price upon request",
    revTitle:"Customer Reviews",
    revDesc:"Thanks for your trust — here are some reviews after dealing with Tarh Bledna.",
    fAll:"All", fShell:"In Shell", fShelled:"Shelled", fConfection:"Confectionery", fCrushed:"Crushed", fIndustry:"Industrial",
    searchPh:"Search products..."
  },
  tr: {
    brandName: "Tarh Bledna Tarımsal Ürünler Şirketi",
    brandSub: "AbuYoussef – Ticaret & İmalat",
    sales: "Satış",
    cart: "Sepet",
    total: "Toplam",
    clearCart: "Sepeti Boşalt",
    sendOrder: "Siparişi Gönder",
    cartHint: "Sipariş WhatsApp üzerinden hazır mesajla gönderilir.",
    kicker: "Yerli Tedarik • Dünya Çapında İhracat",
    heroTitle1: "Kaliteli Yer Fıstığı",
    heroTitle2: "Fabrika Standartlarında",
    heroTitle3: "— Garantili Kalite",
    heroDesc: "50/25 kg çuvallar ve 10 kg kolide vakumlu ambalaj. Mısır genelinde teslimat ve tüm dünyaya ihracat. Fiyat teklifi ile.",
    ctaProducts: "Ürünleri Gör",
    ctaContact: "Hızlı İletişim",
    ctaQuote: "Teklif Al",
    ctaCall: "Satışı Ara",
    addToCart: "Sepete Ekle",
    back: "Geri",
    location: COMPANY.addressEn,
    delivery: "Hızlı Teslimat",
    export: "Dünya Çapında İhracat",
    quickTitle: "Ambalaj & İşleme",
    pack1: "50 kg & 25 kg çuvallar",
    pack2: "10 kg kolide vakumlu ambalaj",
    pack3: "Talebe göre özel ambalaj",
    priceNote: "Fiyat teklifi ile",
    visitors: "Ziyaretçi Sayacı",
    productsCount: "Ürünler",
    support: "İletişim",
    whyTitle: "Neden Biz?",
    whyDesc: "Tecrübe, kalite, rekabetçi fiyat ve güvenilir teslimat.",
    w1t:"Uzun Tecrübe", w1d:"Fabrika ve şirketlere yönelik yer fıstığı işleme ve ticarette güçlü tecrübe.",
    w2t:"Garantili Kalite", w2d:"Sıkı eleme, işleme ve paketleme standartları.",
    w3t:"Rekabetçi Fiyat", w3d:"Esnek miktar ve anlaşmalarla en iyi değer.",
    w4t:"Hızlı Teslimat", w4d:"Mısır içinde zamanında teslimat ve hızlı ihracata hazırlık.",
    prodTitle:"Ürünler",
    prodDesc:"Arama ve filtre ile gez — büyütmek için resme tıkla.",
    contactTitle:"İletişim",
    contactDesc:"Yerli sipariş ve ihracat için — fiyat teklifi ile.",
    contactPhone2:"İletişim",
    email:"E-posta",
    serviceTitle:"Hizmetlerimiz",
    s1:"İşleme • Ambalaj • Tedarik",
    s2:"Mısır genelinde teslimat",
    s3:"Dünya çapında ihracat",
    s4:"50/25 kg çuval + 10 kg vakum kolisi",
    footerNote:"İşleme • Ambalaj • Tedarik • İhracat | Fiyat teklifi ile",
    revTitle:"Müşteri Yorumları",
    revDesc:"Güveniniz için teşekkürler — Tarh Bledna ile çalıştıktan sonra bazı yorumlar.",
    fAll:"Tümü", fShell:"Kabuklu", fShelled:"Kabuksuz", fConfection:"Şekerleme", fCrushed:"Kırık", fIndustry:"Endüstriyel",
    searchPh:"Ürün ara..."
  }
};

let currentLang = "ar";

// ----------------------
// Helpers
// ----------------------
function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return [...document.querySelectorAll(sel)]; }
function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }

function setDirByLang(lang){
  const isRTL = (lang === "ar");
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.body.style.fontFamily = isRTL
    ? '"Cairo","Inter",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif'
    : '"Inter","Cairo",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
}

function applyLang(lang){
  currentLang = lang;
  setDirByLang(lang);

  const dict = I18N[lang] || I18N.ar;

  qsa("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  qsa("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  qsa(".lang button").forEach(b=>{
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  // rerender products/reviews if on index
  if (qs("#productsGrid")) {
    renderProducts();
    renderReviews();
  }
  if (qs("#pGrid")) {
    renderProductPage();
  }
}

// ----------------------
// Visitors Counter
// ----------------------
async function updateVisitors(){
  const el = qs("#visitsNum");
  if (!el) return;

  try{
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(COUNTER.namespace)}/${encodeURIComponent(COUNTER.key)}`;
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    if (typeof data.value === "number") el.textContent = data.value.toLocaleString();
    else el.textContent = "—";
  }catch(e){
    // fallback local counter if API blocked
    const k = "__local_visits__";
    const v = (Number(localStorage.getItem(k) || "0") + 1);
    localStorage.setItem(k, String(v));
    el.textContent = v.toLocaleString();
  }
}

// ----------------------
// Product Cards (Index)
// ----------------------
let activeFilter = "all";
let activeQuery = "";

function productTitle(p){ return (p.title[currentLang] || p.title.ar); }
function productDesc(p){ return (p.desc[currentLang] || p.desc.ar); }

function renderProducts(){
  const grid = qs("#productsGrid");
  if (!grid) return;

  const list = PRODUCTS.filter(p=>{
    const matchFilter = (activeFilter === "all") ? true : (p.type === activeFilter);
    const q = activeQuery.trim().toLowerCase();
    const matchQuery = !q ? true : (
      productTitle(p).toLowerCase().includes(q) ||
      productDesc(p).toLowerCase().includes(q)
    );
    return matchFilter && matchQuery;
  });

  grid.innerHTML = list.map(p=>{
    const imgs = productImages(p.id);
    const thumbs = imgs.slice(0,8);

    return `
      <article class="prod" data-pid="${p.id}">
        <div class="prodTop">
          <h3 class="prodTitle">${escapeHtml(productTitle(p))}</h3>
          <p class="prodSub">${escapeHtml(productDesc(p))}</p>

          <div class="prodMetaRow">
            <span class="price"><i class="fa-solid fa-circle-info"></i><span>${I18N[currentLang].priceNote}</span></span>
            <div class="prodBtns">
              <a class="miniBtn" href="product.html?id=${encodeURIComponent(p.id)}"><i class="fa-solid fa-up-right-from-square"></i> <span>${currentLang==="ar"?"تفاصيل":currentLang==="tr"?"Detay":"Details"}</span></a>
              <button class="miniBtn addToCartBtn" data-add="${p.id}" type="button"><i class="fa-solid fa-cart-plus"></i> <span>${I18N[currentLang].addToCart}</span></button>
            </div>
          </div>
        </div>

        <div class="gallery">
          ${thumbs.map((src,idx)=>`
            <div class="shot" data-lightbox="${p.id}" data-idx="${idx}">
              <img src="${src}" alt="${p.id}-${idx+1}" loading="lazy" />
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  // bind add to cart
  qsa(".addToCartBtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const pid = btn.getAttribute("data-add");
      cartAdd(pid, 1);
      openCart();
    });
  });

  // bind lightbox
  qsa("[data-lightbox]").forEach(box=>{
    box.addEventListener("click", ()=>{
      const pid = box.getAttribute("data-lightbox");
      const idx = Number(box.getAttribute("data-idx") || "0");
      openLightbox(pid, idx);
    });
  });
}

// ----------------------
// Reviews render
// ----------------------
function stars(n){
  return Array.from({length:5}, (_,i)=> i<n ? "★" : "☆").join("");
}
function renderReviews(){
  const grid = qs("#reviewsGrid");
  if (!grid) return;

  grid.innerHTML = REVIEWS.map((r, i)=>{
    const nm = r.name[currentLang] || r.name.ar;
    const tx = r.text[currentLang] || r.text.ar;
    return `
      <div class="rev">
        <div class="revHead">
          <div class="avatar" aria-hidden="true"></div>
          <div>
            <div class="revName">${escapeHtml(nm)}</div>
            <div class="revStars">${stars(r.stars)}</div>
          </div>
        </div>
        <div class="revTxt">${escapeHtml(tx)}</div>
      </div>
    `;
  }).join("");
}

// ----------------------
// Product Page
// ----------------------
function getParam(name){
  const u = new URL(window.location.href);
  return u.searchParams.get(name);
}

function renderProductPage(){
  const grid = qs("#pGrid");
  if (!grid) return;

  const pid = getParam("id");
  const p = PRODUCTS.find(x=>x.id===pid) || PRODUCTS[0];

  const nameEl = qs("#pName");
  const subEl = qs("#pSub");
  if (nameEl) nameEl.textContent = productTitle(p);
  if (subEl) subEl.textContent = productDesc(p);

  // SEO title/desc
  const t = `${productTitle(p)} | ${I18N[currentLang].brandName}`;
  const d = `${productDesc(p)} — ${I18N[currentLang].priceNote}`;
  const ptitle = qs("#ptitle");
  const pdesc = qs("#pdesc");
  if (ptitle) ptitle.textContent = t;
  if (pdesc) pdesc.setAttribute("content", d);
  document.title = t;

  const imgs = productImages(p.id);

  grid.innerHTML = imgs.map((src, idx)=>`
    <div class="pShot" data-lightbox="${p.id}" data-idx="${idx}">
      <img src="${src}" alt="${p.id}-${idx+1}" loading="lazy" />
    </div>
  `).join("");

  // add main to cart
  const addMain = qs("#addMainToCart");
  if (addMain){
    addMain.onclick = ()=>{
      cartAdd(p.id, 1);
      openCart();
    };
  }

  // bind lightbox
  qsa("[data-lightbox]").forEach(box=>{
    box.addEventListener("click", ()=>{
      const pid2 = box.getAttribute("data-lightbox");
      const idx = Number(box.getAttribute("data-idx") || "0");
      openLightbox(pid2, idx);
    });
  });
}

// ----------------------
// Lightbox
// ----------------------
let lbState = { pid:null, idx:0, imgs:[] };

function openLightbox(pid, idx){
  const lb = qs("#lightbox");
  const img = qs("#lbImg");
  if (!lb || !img) return;

  lbState.pid = pid;
  lbState.imgs = productImages(pid);
  lbState.idx = clamp(idx, 0, lbState.imgs.length-1);

  img.src = lbState.imgs[lbState.idx];
  lb.hidden = false;

  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  const lb = qs("#lightbox");
  if (!lb) return;
  lb.hidden = true;
  document.body.style.overflow = "";
}

function lbMove(step){
  const img = qs("#lbImg");
  if (!img || !lbState.imgs.length) return;
  lbState.idx = (lbState.idx + step + lbState.imgs.length) % lbState.imgs.length;
  img.src = lbState.imgs[lbState.idx];
}

// ----------------------
// CART (localStorage)
// ----------------------
const CART_KEY = "__tb_cart__";

function readCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY) || "{}");
  }catch(e){ return {}; }
}
function writeCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function cartCount(cart){
  return Object.values(cart).reduce((a,b)=>a+Number(b||0),0);
}
function cartAdd(pid, qty){
  const cart = readCart();
  cart[pid] = (Number(cart[pid]||0) + qty);
  if (cart[pid] <= 0) delete cart[pid];
  writeCart(cart);
  renderCart();
}
function cartClear(){
  writeCart({});
  renderCart();
}

function renderCart(){
  const cart = readCart();
  const countEl = qs("#cartCount");
  if (countEl) countEl.textContent = String(cartCount(cart));

  const itemsEl = qs("#cartItems");
  const totalEl = qs("#cartTotal");
  if (!itemsEl || !totalEl) return;

  const keys = Object.keys(cart);
  if (!keys.length){
    itemsEl.innerHTML = `<div style="color:rgba(243,244,246,.72);font-weight:900">${currentLang==="ar"?"السلة فارغة.":"Cart is empty."}</div>`;
    totalEl.textContent = "0";
    return;
  }

  itemsEl.innerHTML = keys.map(pid=>{
    const p = PRODUCTS.find(x=>x.id===pid);
    const title = p ? productTitle(p) : pid;
    const qty = Number(cart[pid]||0);

    return `
      <div class="cartItem">
        <div>
          <h4>${escapeHtml(title)}</h4>
          <div class="mut">${I18N[currentLang].priceNote}</div>
        </div>
        <div class="qty">
          <button type="button" data-dec="${pid}">−</button>
          <b>${qty}</b>
          <button type="button" data-inc="${pid}">+</button>
        </div>
      </div>
    `;
  }).join("");

  // total = number of items (because price is on request)
  totalEl.textContent = String(cartCount(cart));

  qsa("[data-inc]").forEach(b=> b.onclick = ()=> cartAdd(b.getAttribute("data-inc"), 1));
  qsa("[data-dec]").forEach(b=> b.onclick = ()=> cartAdd(b.getAttribute("data-dec"), -1));
}

function buildWhatsAppOrder(){
  const cart = readCart();
  const keys = Object.keys(cart);
  if (!keys.length) return "";

  const lines = [];
  lines.push(`طلب جديد من موقع: ${I18N[currentLang].brandName}`);
  lines.push(`—`);
  keys.forEach(pid=>{
    const p = PRODUCTS.find(x=>x.id===pid);
    const title = p ? productTitle(p) : pid;
    const qty = Number(cart[pid]||0);
    lines.push(`• ${title} × ${qty}`);
  });
  lines.push(`—`);
  lines.push(`السعر: عند الطلب`);
  lines.push(`هاتف: ${COMPANY.phones.join(" / ")}`);
  return encodeURIComponent(lines.join("\n"));
}

// ----------------------
// Drawer open/close
// ----------------------
function openCart(){
  const d = qs("#cartDrawer");
  const b = qs("#drawerBackdrop");
  if (!d || !b) return;
  b.hidden = false;
  d.classList.add("open");
  d.setAttribute("aria-hidden","false");
}
function closeCart(){
  const d = qs("#cartDrawer");
  const b = qs("#drawerBackdrop");
  if (!d || !b) return;
  d.classList.remove("open");
  d.setAttribute("aria-hidden","true");
  b.hidden = true;
}

// ----------------------
// Quick Contact pop
// ----------------------
function initQuickPop(){
  const btn = qs("#quickBtn");
  const pop = qs("#quickPop");
  if (!btn || !pop) return;

  let open = false;
  function setOpen(v){
    open = v;
    pop.style.display = open ? "flex" : "none";
    pop.setAttribute("aria-hidden", open ? "false" : "true");
  }
  setOpen(false);

  btn.addEventListener("click", ()=>{
    setOpen(!open);
  });

  document.addEventListener("click", (e)=>{
    if (!open) return;
    if (pop.contains(e.target) || btn.contains(e.target)) return;
    setOpen(false);
  });
}

// ----------------------
// Escape HTML
// ----------------------
function escapeHtml(str){
  return String(str || "").replace(/[&<>"']/g, (m)=>{
    return ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]);
  });
}

// ----------------------
// INIT
// ----------------------
(function init(){
  // year
  const y = qs("#year");
  if (y) y.textContent = new Date().getFullYear();

  // language buttons
  qsa(".lang button").forEach(btn=>{
    btn.addEventListener("click", ()=> applyLang(btn.getAttribute("data-lang")));
  });

  // filters
  const filters = qs("#filters");
  if (filters){
    qsa(".filter").forEach(b=>{
      b.addEventListener("click", ()=>{
        qsa(".filter").forEach(x=>x.classList.remove("active"));
        b.classList.add("active");
        activeFilter = b.getAttribute("data-filter");
        renderProducts();
      });
    });
  }

  // search
  const si = qs("#searchInput");
  if (si){
    si.addEventListener("input", ()=>{
      activeQuery = si.value || "";
      renderProducts();
    });
  }

  // cart buttons
  const openCartBtn = qs("#openCartBtn");
  const closeCartBtn = qs("#closeCartBtn");
  const clearCartBtn = qs("#clearCartBtn");
  const sendOrderBtn = qs("#sendOrderBtn");
  const backdrop = qs("#drawerBackdrop");

  if (openCartBtn) openCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);
  if (clearCartBtn) clearCartBtn.addEventListener("click", cartClear);

  if (sendOrderBtn){
    sendOrderBtn.addEventListener("click", ()=>{
      const msg = buildWhatsAppOrder();
      if (!msg){
        alert(currentLang==="ar" ? "السلة فارغة." : "Cart is empty.");
        return;
      }
      const url = `https://wa.me/${COMPANY.whatsapp}?text=${msg}`;
      window.open(url, "_blank", "noopener");
    });
  }

  // lightbox controls
  const lbClose = qs("#lbClose");
  const lbPrev = qs("#lbPrev");
  const lbNext = qs("#lbNext");
  const lb = qs("#lightbox");

  if (lbClose) lbClose.onclick = closeLightbox;
  if (lbPrev) lbPrev.onclick = ()=> lbMove(-1);
  if (lbNext) lbNext.onclick = ()=> lbMove(+1);
  if (lb){
    lb.addEventListener("click", (e)=>{
      // close when click outside image
      if (e.target === lb) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e)=>{
    if (!lb || lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbMove(-1);
    if (e.key === "ArrowRight") lbMove(+1);
  });

  // quick pop
  initQuickPop();

  // first render
  applyLang("ar");
  renderCart();

  // if on product page
  if (qs("#pGrid")) renderProductPage();

  // visitors
  updateVisitors();
})();
