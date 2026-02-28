/* Tarh Bledna - Final Pro Site (3 Lang) */

const COMPANY = {
  arName: "شركة طرح بلدنا للمحاصيل الزراعية",
  arSub: "أبويوسف للتجارة والتصنيع",
  phones: ["01126773698", "01020508423"],
  whatsapp: "201126773698",
  email: "tarhbladna@gmail.com",
  addressAr: "أبورواش – الجيزة – مصر",
  addressEn: "Abu Rawash – Giza – Egypt",
};

// Visitors counter (CountAPI) — عالمي وسهل
const COUNTER = { namespace: "tarhbladna-bot", key: "tarehbaldna_visits" };

// ====== IMPORTANT ======
const IMG_EXT = "jpg"; // لو صورك png خليها "png"
const BANNER_PATH = "banner.png";

// 6 منتجات × 8 صور
const PRODUCTS = [
  { id:"p1", type:"shell",
    title:{ar:"فول بقشره", en:"Peanuts in Shell", tr:"Kabuklu Yer Fıstığı"},
    desc:{ar:"مناسب للتحميص والتعبئة والتصدير.", en:"Ideal for roasting, packing, and export.", tr:"Kavurma, paketleme ve ihracat için ideal."},
  },
  { id:"p2", type:"shelled",
    title:{ar:"فول مقشر (بالقشرة الحمرا)", en:"Shelled Peanuts (Red Skin)", tr:"Kabuksuz Yer Fıstığı (Kırmızı Kabuğu)"},
    desc:{ar:"جاهز للتصنيع أو التعبئة — مناسب للمكسرات والمقالى.", en:"Ready for manufacturing or packaging.", tr:"Üretim ve paketleme için hazır."},
  },
  { id:"p3", type:"confection",
    title:{ar:"فول حلواني (أبيض أنصاص)", en:"Confectionery Peanuts (White Halves)", tr:"Şekerleme Tipi Fıstık (Beyaz Yarı)"},
    desc:{ar:"مخصص للحلويات والمنتجات الغذائية عالية الجودة.", en:"High-grade peanuts for sweets and premium foods.", tr:"Tatlı ve premium gıda üretimi için."},
  },
  { id:"p4", type:"crushed",
    title:{ar:"فول مجروش", en:"Crushed Peanuts", tr:"Kırık Yer Fıstığı"},
    desc:{ar:"مناسب للحلويات والطعوم والتغطية.", en:"Perfect for toppings, flavors, and confectionery.", tr:"Kaplama, aroma ve tatlılar için."},
  },
  { id:"p5", type:"industry",
    title:{ar:"فول لشغل الطعوم والشيكولاتة", en:"Peanuts for Coating & Chocolate", tr:"Çikolata & Kaplama İçin"},
    desc:{ar:"مثالي للمصانع المتخصصة في الطعوم والشيكولاتة.", en:"Ideal for coating and chocolate factories.", tr:"Çikolata ve kaplama üretimi için ideal."},
  },
  { id:"p6", type:"industry",
    title:{ar:"فول بيور لعمل زبدة الفول", en:"Pure Peanuts for Peanut Butter", tr:"Fıstık Ezmesi İçin Saf"},
    desc:{ar:"جودة نقية 100% مناسبة لإنتاج زبدة الفول السوداني.", en:"100% pure quality for peanut butter production.", tr:"Fıstık ezmesi üretimi için %100 saf kalite."},
  },
];

function productImages(pid){
  return Array.from({length:8}, (_,i)=> `products/${pid}/${i+1}.${IMG_EXT}`);
}

// Reviews (بدون ربط بفيسبوك)
const REVIEWS = [
  { name:{ar:"محمد",en:"Mohamed",tr:"Muhammed"}, stars:5, text:{ar:"تعامل محترم وجودة ممتازة والتزام بالمواعيد.",en:"Professional handling, excellent quality, on-time delivery.",tr:"Profesyonel yaklaşım, mükemmel kalite, zamanında teslim."}},
  { name:{ar:"أحمد",en:"Ahmed",tr:"Ahmet"}, stars:5, text:{ar:"أفضل خامة فول سوداني للمصانع. شكراً.",en:"Best peanuts for factories. Thanks.",tr:"Fabrikalar için en iyi fıstık. Teşekkürler."}},
  { name:{ar:"محمود",en:"Mahmoud",tr:"Mahmut"}, stars:5, text:{ar:"التعبئة فاكيوم ممتازة والتواصل سريع.",en:"Great vacuum packaging and fast communication.",tr:"Vakum ambalaj harika, iletişim hızlı."}},
  { name:{ar:"يوسف",en:"Youssef",tr:"Yusuf"}, stars:5, text:{ar:"سعر مناسب مقابل الجودة + شحن سريع.",en:"Good value for quality + fast shipping.",tr:"Kaliteye göre iyi fiyat + hızlı sevkiyat."}},
  { name:{ar:"سارة",en:"Sara",tr:"Sara"}, stars:5, text:{ar:"منتج نظيف وفرز ممتاز. أنصح.",en:"Clean product, excellent sorting. Recommended.",tr:"Temiz ürün, mükemmel ayıklama. Tavsiye ederim."}},
  { name:{ar:"علي",en:"Ali",tr:"Ali"}, stars:5, text:{ar:"ثقة وتعامل شركة كبيرة فعلاً.",en:"Trusted, truly corporate-level service.",tr:"Güvenilir, gerçekten kurumsal hizmet."}},
];

const I18N = {
  ar: {
    brandName: COMPANY.arName,
    brandSub: COMPANY.arSub,
    sales: "المبيعات",
    whatsApp: "واتساب",
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
    whatsApp: "WhatsApp",
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
    whatsApp: "WhatsApp",
    cart: "Sepet",
    total: "Toplam",
    clearCart: "Sepeti Boşalt",
    sendOrder: "Siparişi Gönder",
    cartHint: "Sipariş WhatsApp üzerinden hazır mesajla gönderilir.",
    kicker: "Yerli Tedarik • Dünya Çapında İhracat",
    heroTitle1: "Kaliteli Yer Fıstığı",
    heroTitle2: "Fabrika Standartlarında",
    heroTitle3: "— Garantili Kalite",
    heroDesc: "50/25 kg çuvallar ve 10 kg kolide vakumlu ambalaj seçenekleri. Mısır genelinde teslimat ve tüm dünyaya ihracat. Fiyat teklifi ile.",
    ctaProducts: "Ürünleri Gör",
    ctaContact: "Hızlı İletişim",
    ctaQuote: "Teklif Al",
    ctaCall: "Satışı Ara",
    addToCart: "Sepete Ekle",
    back: "Geri",
    location: "Abu Rawash – Giza – Mısır",
    delivery: "Hızlı Teslimat",
    export: "Dünya Çapında İhracat",
    quickTitle: "Ambalaj & İşleme",
    pack1: "50 kg & 25 kg çuvallar",
    pack2: "10 kg kolide vakumlu ambalaj",
    pack3: "Talebe göre özel ambalaj",
    priceNote: "Fiyat teklifi ile",
    visitors: "Ziyaretçi Sayacı",
    productsCount: "Ürünler",
    support: "Destek",
    whyTitle: "Neden Biz?",
    whyDesc: "Tecrübe, kalite, rekabetçi fiyat ve güvenilir teslimat — yerel ve ihracat için kurumsal standartlar.",
    w1t:"Uzun Tecrübe", w1d:"Fabrika ve şirketlere yönelik yer fıstığı işleme ve ticarette güçlü tecrübe.",
    w2t:"Garantili Kalite", w2d:"Sıkı eleme, işleme ve paketleme standartları.",
    w3t:"Rekabetçi Fiyat", w3d:"Esnek miktar ve anlaşmalarla en iyi değer.",
    w4t:"Hızlı Teslimat", w4d:"Mısır içinde zamanında teslimat ve hızlı ihracata hazırlık.",
    prodTitle:"Ürünler",
    prodDesc:"Arama ve filtreyle ürünleri inceleyin — görüntüyü büyütmek için tıklayın.",
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
    searchPh:"Ürünlerde ara..."
  }
};

// ---------- Helpers ----------
const $ = (s, r=document)=> r.querySelector(s);
const $$ = (s, r=document)=> Array.from(r.querySelectorAll(s));

function setTextI18n(lang){
  const dict = I18N[lang] || I18N.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  document.body.style.fontFamily = (lang === "ar")
    ? '"Cairo","Inter",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif'
    : '"Inter","Cairo",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';

  $$("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(dict[k]) el.textContent = dict[k];
  });

  $$("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if(dict[k]) el.setAttribute("placeholder", dict[k]);
  });

  $$(".lang button").forEach(b=>{
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
}

function stars(n){
  return "★★★★★".slice(0,n) + "☆☆☆☆☆".slice(0,5-n);
}

function moneyTotal(cart){
  // السعر عند الطلب -> إجمالي = عدد القطع
  let qty = 0;
  Object.values(cart).forEach(v=> qty += v.qty);
  return qty;
}

// ---------- State ----------
let lang = localStorage.getItem("tb_lang") || "ar";
let filter = "all";
let searchQ = "";
let cart = JSON.parse(localStorage.getItem("tb_cart") || "{}");

// ---------- Counter ----------
async function updateCounter(){
  const el = $("#visitsVal");
  if(!el) return;
  try{
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(COUNTER.namespace)}/${encodeURIComponent(COUNTER.key)}`;
    const res = await fetch(url, {cache:"no-store"});
    const data = await res.json();
    el.textContent = (data && typeof data.value === "number") ? data.value.toLocaleString() : "—";
  }catch(e){
    el.textContent = "—";
  }
}

// ---------- Products Rendering ----------
function buildProductCard(p){
  const dict = I18N[lang] || I18N.ar;
  const imgs = productImages(p.id);

  const card = document.createElement("article");
  card.className = "prod";
  card.setAttribute("data-type", p.type);
  card.setAttribute("data-title", (p.title[lang] || p.title.ar).toLowerCase());

  const top = document.createElement("div");
  top.className = "prodTop";
  top.innerHTML = `
    <h3 class="prodTitle">${p.title[lang] || p.title.ar}</h3>
    <p class="prodSub">${p.desc[lang] || p.desc.ar}</p>
    <span class="price"><i class="fa-solid fa-circle-info"></i><span data-i18n="priceNote">${dict.priceNote}</span></span>
  `;

  const gallery = document.createElement("div");
  gallery.className = "gallery";

  imgs.forEach((src, idx)=>{
    const shot = document.createElement("div");
    shot.className = "shot";
    shot.innerHTML = `<img loading="lazy" alt="${p.id}-${idx+1}" src="${src}" />`;
    shot.addEventListener("click", ()=> openLightbox(imgs, idx));
    gallery.appendChild(shot);
  });

  const actions = document.createElement("div");
  actions.style.padding = "0 16px 16px";
  actions.innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a class="btn small" href="product.html?id=${encodeURIComponent(p.id)}"><i class="fa-solid fa-up-right-from-square"></i> التفاصيل</a>
      <button class="btn btnPrimary small" type="button"><i class="fa-solid fa-plus"></i> ${dict.addToCart}</button>
    </div>
  `;
  actions.querySelector("button").addEventListener("click", ()=> addToCart(p.id));

  card.appendChild(top);
  card.appendChild(gallery);
  card.appendChild(actions);
  return card;
}

function renderProducts(){
  const grid = $("#productsGrid");
  if(!grid) return;

  grid.innerHTML = "";
  const q = searchQ.trim().toLowerCase();

  PRODUCTS.forEach(p=>{
    const title = (p.title[lang] || p.title.ar).toLowerCase();
    const okFilter = (filter === "all") ? true : (p.type === filter);
    const okSearch = q ? title.includes(q) : true;
    if(okFilter && okSearch){
      grid.appendChild(buildProductCard(p));
    }
  });
}

// ---------- Reviews ----------
function renderReviews(){
  const grid = $("#reviewsGrid");
  if(!grid) return;
  grid.innerHTML = "";

  REVIEWS.forEach(r=>{
    const name = r.name[lang] || r.name.ar;
    const text = r.text[lang] || r.text.ar;

    const card = document.createElement("div");
    card.className = "review";
    card.innerHTML = `
      <div class="rHead">
        <div class="avatar">${name.trim().slice(0,1)}</div>
        <div>
          <div class="rName">${name}</div>
          <div class="stars">${stars(r.stars)}</div>
        </div>
      </div>
      <div class="rText">${text}</div>
    `;
    grid.appendChild(card);
  });
}

// ---------- Cart ----------
function saveCart(){
  localStorage.setItem("tb_cart", JSON.stringify(cart));
}

function setCartCount(){
  const countEl = $("#cartCount");
  const countEl2 = $("#cartCount2");
  let c = 0;
  Object.values(cart).forEach(v=> c += v.qty);
  if(countEl) countEl.textContent = c;
  if(countEl2) countEl2.textContent = c;
}

function addToCart(pid){
  if(!cart[pid]) cart[pid] = { qty: 0 };
  cart[pid].qty += 1;
  saveCart();
  setCartCount();
  renderCart();
  openCart();
}

function decCart(pid){
  if(!cart[pid]) return;
  cart[pid].qty -= 1;
  if(cart[pid].qty <= 0) delete cart[pid];
  saveCart();
  setCartCount();
  renderCart();
}

function incCart(pid){
  if(!cart[pid]) cart[pid] = { qty: 0 };
  cart[pid].qty += 1;
  saveCart();
  setCartCount();
  renderCart();
}

function clearCart(){
  cart = {};
  saveCart();
  setCartCount();
  renderCart();
}

function cartTitle(pid){
  const p = PRODUCTS.find(x=> x.id === pid);
  return p ? (p.title[lang] || p.title.ar) : pid;
}

function cartThumb(pid){
  // أول صورة من المنتج
  return `products/${pid}/1.${IMG_EXT}`;
}

function renderCart(){
  const itemsEl = $("#cartItems");
  const totalEl = $("#cartTotal");
  if(!itemsEl || !totalEl) return;

  itemsEl.innerHTML = "";

  const keys = Object.keys(cart);
  if(keys.length === 0){
    itemsEl.innerHTML = `<div style="color:rgba(243,244,246,.72);font-weight:800;line-height:1.8">—</div>`;
    totalEl.textContent = "0";
    return;
  }

  keys.forEach(pid=>{
    const row = document.createElement("div");
    row.className = "cItem";
    row.innerHTML = `
      <div class="cThumb"><img loading="lazy" src="${cartThumb(pid)}" alt="${pid}" /></div>
      <div class="cMeta">
        <div class="cName">${cartTitle(pid)}</div>
        <div class="cQty">
          <button class="qBtn" type="button" aria-label="minus"><i class="fa-solid fa-minus"></i></button>
          <div class="qNum">${cart[pid].qty}</div>
          <button class="qBtn" type="button" aria-label="plus"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="qBtn" type="button" aria-label="remove"><i class="fa-solid fa-trash"></i></button>
    `;

    const btns = row.querySelectorAll("button.qBtn");
    btns[0].addEventListener("click", ()=> decCart(pid));
    btns[1].addEventListener("click", ()=> incCart(pid));
    btns[2].addEventListener("click", ()=> { delete cart[pid]; saveCart(); setCartCount(); renderCart(); });

    itemsEl.appendChild(row);
  });

  totalEl.textContent = String(moneyTotal(cart));
}

function sendOrder(){
  const keys = Object.keys(cart);
  if(keys.length === 0){
    openCart();
    return;
  }

  const lines = keys.map(pid=>{
    const qty = cart[pid].qty;
    return `- ${cartTitle(pid)} × ${qty}`;
  });

  const msgAr =
`طلب جديد من موقع شركة طرح بلدنا
${COMPANY.arName}
${COMPANY.arSub}

المنتجات:
${lines.join("\n")}

الاسم:
الهاتف:
المحافظة/العنوان:
ملاحظات:`;

  const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msgAr)}`;
  window.open(url, "_blank", "noopener");
}

// ---------- Drawer open/close ----------
function openCart(){
  const d = $("#cartDrawer");
  if(!d) return;
  d.classList.add("show");
  d.setAttribute("aria-hidden", "false");
}

function closeCart(){
  const d = $("#cartDrawer");
  if(!d) return;
  d.classList.remove("show");
  d.setAttribute("aria-hidden", "true");
}

// ---------- Lightbox ----------
let lightImgs = [];
let lightIndex = 0;

function openLightbox(imgs, startIdx){
  const box = $("#lightbox");
  const imgEl = $("#lightImg");
  if(!box || !imgEl) return;
  lightImgs = imgs;
  lightIndex = startIdx;
  imgEl.src = lightImgs[lightIndex];
  box.classList.add("show");
  box.setAttribute("aria-hidden", "false");
}
function closeLightbox(){
  const box = $("#lightbox");
  if(!box) return;
  box.classList.remove("show");
  box.setAttribute("aria-hidden", "true");
}
function lightPrev(){
  if(!lightImgs.length) return;
  lightIndex = (lightIndex - 1 + lightImgs.length) % lightImgs.length;
  $("#lightImg").src = lightImgs[lightIndex];
}
function lightNext(){
  if(!lightImgs.length) return;
  lightIndex = (lightIndex + 1) % lightImgs.length;
  $("#lightImg").src = lightImgs[lightIndex];
}

// ---------- Product page ----------
function initProductPage(){
  const params = new URLSearchParams(location.search);
  const pid = params.get("id");
  if(!pid) return;

  const p = PRODUCTS.find(x=> x.id === pid);
  if(!p) return;

  const title = p.title[lang] || p.title.ar;
  const desc  = p.desc[lang]  || p.desc.ar;

  const tEl = $("#pTitle");
  const dEl = $("#pDesc");
  const gEl = $("#pGallery");
  if(tEl) tEl.textContent = title;
  if(dEl) dEl.textContent = desc;

  // SEO-ish title
  document.title = `${title} | ${COMPANY.arName}`;

  if(gEl){
    const imgs = productImages(pid);
    gEl.innerHTML = "";
    imgs.forEach((src, idx)=>{
      const shot = document.createElement("div");
      shot.className = "shot";
      shot.innerHTML = `<img loading="lazy" src="${src}" alt="${pid}-${idx+1}" />`;
      shot.addEventListener("click", ()=> openLightbox(imgs, idx));
      gEl.appendChild(shot);
    });
  }

  const addBtn = $("#addToCartBtn");
  if(addBtn) addBtn.addEventListener("click", ()=> addToCart(pid));
}

// ---------- Quick modal ----------
function openQuick(){
  const m = $("#quickModal");
  if(!m) return;
  m.classList.add("show");
  m.setAttribute("aria-hidden","false");
}
function closeQuick(){
  const m = $("#quickModal");
  if(!m) return;
  m.classList.remove("show");
  m.setAttribute("aria-hidden","true");
}

// ---------- Init ----------
function init(){
  // year
  const y = $("#year");
  if(y) y.textContent = String(new Date().getFullYear());

  // banner path
  const hero = $("#heroBannerImg");
  if(hero) hero.src = BANNER_PATH;

  // lang switch
  $$(".lang button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      lang = btn.getAttribute("data-lang");
      localStorage.setItem("tb_lang", lang);
      setTextI18n(lang);
      renderProducts();
      renderReviews();
      renderCart();
      initProductPage();
    });
  });

  setTextI18n(lang);

  // filters
  $$(".chip").forEach(ch=>{
    ch.addEventListener("click", ()=>{
      $$(".chip").forEach(x=> x.classList.remove("active"));
      ch.classList.add("active");
      filter = ch.getAttribute("data-filter");
      renderProducts();
    });
  });

  // search
  const sIn = $("#searchInput");
  if(sIn){
    sIn.addEventListener("input", ()=>{
      searchQ = sIn.value || "";
      renderProducts();
    });
  }

  // cart buttons
  const openCartBtn = $("#openCartBtn");
  const openCartFab = $("#openCartFab");
  const closeCartBtn = $("#closeCartBtn");
  const overlay = $("#cartOverlay");
  if(openCartBtn) openCartBtn.addEventListener("click", openCart);
  if(openCartFab) openCartFab.addEventListener("click", openCart);
  if(closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if(overlay) overlay.addEventListener("click", closeCart);

  const clearBtn = $("#clearCartBtn");
  const sendBtn = $("#sendOrderBtn");
  if(clearBtn) clearBtn.addEventListener("click", clearCart);
  if(sendBtn) sendBtn.addEventListener("click", sendOrder);

  // lightbox
  const lb = $("#lightbox");
  if(lb){
    lb.addEventListener("click", (e)=>{
      const t = e.target;
      if(t && t.getAttribute && t.getAttribute("data-close")) closeLightbox();
    });
  }
  const lp = $("#lightPrev");
  const ln = $("#lightNext");
  if(lp) lp.addEventListener("click", (e)=>{ e.stopPropagation(); lightPrev(); });
  if(ln) ln.addEventListener("click", (e)=>{ e.stopPropagation(); lightNext(); });

  // quick contact
  const qc = $("#quickContactBtn");
  const qm = $("#quickModal");
  if(qc) qc.addEventListener("click", openQuick);
  if(qm){
    qm.addEventListener("click", (e)=>{
      const t = e.target;
      if(t && t.getAttribute && t.getAttribute("data-close")) closeQuick();
    });
  }

  // toTop
  const toTop = $("#toTop");
  if(toTop){
    window.addEventListener("scroll", ()=>{
      if (window.scrollY > 700) toTop.classList.add("show");
      else toTop.classList.remove("show");
    });
  }

  // render
  setCartCount();
  renderProducts();
  renderReviews();
  renderCart();
  initProductPage();

  // counter
  updateCounter();
}

document.addEventListener("DOMContentLoaded", init);
