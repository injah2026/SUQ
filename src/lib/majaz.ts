export type MajazPage = "home" | "shop" | "gifts" | "product";

type Product = {
  id: string;
  name: string;
  price?: number;
  old?: number;
  collection: string;
  category: string;
  image: string;
  detail?: string;
  description: string;
};

type CartItem = { id: string; quantity: number; name: string; gift: boolean; thread: string };

const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T;
const $$ = <T extends Element = HTMLElement>(s: string) => [...document.querySelectorAll<T>(s)];
const icons = {search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',bag:'<path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',zoom:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',truck:'<path d="M2 5h12v12H2zM14 10h4l4 4v3h-8"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>'};
const svg = (k: keyof typeof icons) => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[k]}</svg>`;
const esc = (s: unknown) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] as string));
const money = (n: number) => `${n.toLocaleString('en-US')} ر.س`;
const products: Product[] = [{id:'bisht-gold',name:'حقيبة البشت ذهبي',price:150,old:300,collection:'مجموعة البشت',category:'bisht',image:'bisht-gold',detail:'collection-bisht',description:'تطريز ذهبي مستوحى من خيوط البشت، ولمسة تراثية هادئة.'},{id:'shomoukh',name:'حقيبة شموخ البشت',price:150,old:300,collection:'مجموعة البشت',category:'bisht',image:'shomoukh',detail:'craft-detail',description:'فخامة البشت، في تفاصيل يومك.'},{id:'fareed',name:'حقيبة فريد ذهبي',price:150,old:300,collection:'مجموعة البشت',category:'bisht',image:'fareed',detail:'craft-detail',description:'خط ذهبي واحد، وحضور هادئ.'},{id:'gift',name:'بكج الضيافة الكامل',price:320,collection:'هدايا مجاز',category:'gifts',image:'gift',description:'حقيبة، مسبحة، وكوب. تفاصيل تجتمع في هدية واحدة.'},{id:'beads',name:'المسابح',collection:'تفاصيل مجاز',category:'beads',image:'beads',description:'ألوان دافئة وتفاصيل دقيقة، من اختيارات مجاز.'}];
const byId = (id: string | null) => products.find(p => p.id === id);const brand = `<a class="brand" href="/" aria-label="سوق مجاز — الرئيسية"><span class="brand-mark" aria-hidden="true"><svg class="bisht-signature" viewBox="290 320 674 610" aria-hidden="true"><g><path class="signature-cloth" d="M507 395 483 414Q464 426 466 446C474 607 399 811 310 874Q376 900 449 910C526 908 571 792 588 663C602 551 561 483 507 395Z"/><path class="signature-gold" d="M562 339 518 385C538 453 590 507 599 610C609 734 564 873 478 910C578 908 603 864 612 792C625 694 622 602 608 551C588 473 553 416 562 339Z"/></g><g transform="translate(1254 0) scale(-1 1)"><path class="signature-cloth" d="M507 395 483 414Q464 426 466 446C474 607 399 811 310 874Q376 900 449 910C526 908 571 792 588 663C602 551 561 483 507 395Z"/><path class="signature-gold" d="M562 339 518 385C538 453 590 507 599 610C609 734 564 873 478 910C578 908 603 864 612 792C625 694 622 602 608 551C588 473 553 416 562 339Z"/></g></svg></span><span class="brand-name"><b>سوق مجاز</b><small dir="ltr">SUQ MAJAZ</small></span></a>`;
const modal = (id: string, title: string, content: string, classes = '') => `<dialog id="${id}" class="${classes}" aria-labelledby="${id}-title"><div class="dialog-top"><h2 id="${id}-title">${title}</h2><button class="dialog-close" aria-label="إغلاق" data-close>×</button></div>${content}</dialog>`;

// Runs the original page script once per mounted page; returns a cleanup so effects can safely re-run.
export function initMajaz(page: MajazPage): () => void {
  const controller = new AbortController(), { signal } = controller;
  const params = new URLSearchParams(location.search);
  document.body.dataset.page = page;

  let favorites = new Set<string>(), cart: CartItem[] = [];
  try {
    favorites = new Set((JSON.parse(localStorage.getItem('majaz-atelier-favorites') || '[]') as string[]).filter(id => byId(id)));
    cart = (JSON.parse(localStorage.getItem('majaz-atelier-cart') || '[]') as CartItem[]).filter(i => byId(i.id)?.price && Number.isInteger(i.quantity) && i.quantity > 0 && i.quantity <= 99).map(i => ({ ...i, name: String(i.name || '').slice(0, 12) }));
  } catch {}
  function persist() { try { localStorage.setItem('majaz-atelier-favorites', JSON.stringify([...favorites])); localStorage.setItem('majaz-atelier-cart', JSON.stringify(cart)); } catch {} }

  $('#header').innerHTML = `<div class="announcement"><span>من إرثنا، لتفاصيلك.</span><span>شحن مجاني للطلبات فوق 300 ر.س</span><span>قطع تُحب، وهدايا تبقى.</span></div><header class="site-header"><div class="nav-shell">${brand}<button class="icon-btn mobile-menu" aria-label="القائمة" data-dialog="menu-dialog">${svg('menu')}</button><nav class="desktop-nav" aria-label="القائمة الرئيسية"><a href="/shop" ${page==='shop'?'aria-current="page"':''}>تسوّق القطع</a><a href="/gifts" ${page==='gifts'?'aria-current="page"':''}>اختر هديتك</a><a href="/#personalize">بلمستك</a><a href="/#story">حكايتنا</a><button data-dialog="corporate-dialog">للشركات</button></nav><div class="nav-actions"><button class="icon-btn theme-toggle" data-theme-toggle aria-label="تفعيل الوضع الداكن" aria-pressed="false"><svg class="theme-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z"/></svg><svg class="theme-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/></svg></button><button class="icon-btn" aria-label="بحث" data-dialog="search-dialog">${svg('search')}</button><button class="icon-btn nav-favorites" aria-label="المفضلة" data-dialog="favorites-dialog">${svg('heart')}</button><button class="icon-btn" aria-label="السلة" data-dialog="cart-dialog">${svg('bag')}<span class="cart-count" hidden></span></button></div></div></header>`;
  // theme.js reflects the toggle state on DOMContentLoaded, which may fire before the header exists here.
  const dark = document.documentElement.dataset.theme === 'dark';
  $$('[data-theme-toggle]').forEach(button => { button.setAttribute('aria-pressed', String(dark)); button.setAttribute('aria-label', dark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'); button.title = dark ? 'الوضع الفاتح' : 'الوضع الداكن'; });
  $('#footer').innerHTML = `<footer class="site-footer"><div class="footer-top"><div class="footer-brand">${brand}<p>جذور سعودية. حضور معاصر.</p></div><div class="footer-links"><div><strong>عالم مجاز</strong><a href="/shop">تسوّق القطع</a><a href="/gifts">اختر هديتك</a><a href="/#personalize">التطريز الشخصي</a><button data-dialog="corporate-dialog">هدايا الشركات</button></div><div><strong>نحن معك</strong><a href="/#story">حكايتنا</a><button data-dialog="help-dialog">الشحن والاستبدال</button><button data-dialog="favorites-dialog">القطع المحفوظة</button><a href="https://readdy.cc/preview/4b82a102-a606-4525-be1d-d696768070e9/14522675" target="_blank" rel="noopener">المتجر الأصلي ↗</a></div></div></div><div class="footer-wordmark"><b>من هنا، مجاز.</b><span aria-hidden="true">✳</span><p>شيء من إرثنا.<br>وشيء منك.</p></div><div class="footer-bottom"><span>© 2026 سوق مجاز · معاينة مستقلة · الطلبات تجريبية</span><span dir="ltr">ROOTED HERE. MADE FOR NOW.</span></div></footer>`;
  $('#overlays').innerHTML = modal('search-dialog','ما الذي تبحث عنه؟','<input class="search-input" type="search" aria-label="اسم المنتج" placeholder="حقيبة، هدية، مسبحة…"><div id="search-results"></div>')+modal('cart-dialog','قطَعك المختارة','<div id="cart-content"></div>','drawer')+modal('favorites-dialog','ما أحببته من مجاز','<div id="favorites-content"></div>')+modal('menu-dialog','عالم مجاز','<nav class="menu-links" aria-label="قائمة الموبايل"><a href="/shop">تسوّق القطع</a><a href="/gifts">اختر هديتك</a><a href="/#personalize">بلمستك</a><a href="/#story">حكايتنا</a><button data-dialog="corporate-dialog">هدايا الشركات</button><button data-dialog="favorites-dialog">المفضلة</button></nav>')+modal('help-dialog','الشحن والاستبدال','<p>المتجر المرجعي يعرض شحنًا داخل المملكة، وشحنًا مجانيًا للطلبات فوق 300 ر.س، والاستبدال خلال 14 يومًا.</p><p class="demo-note">تؤكد شروط التطبيق والتكلفة النهائية مع المتجر. هذه معاينة مستقلة ولا تنفّذ طلبات حقيقية.</p>')+modal('quick-dialog','عن القطعة','<div id="quick-content" class="quick-content"></div>','quick-dialog')+modal('zoom-dialog','التفاصيل عن قرب','<img id="zoom-image" src="/assets/shomoukh.jpg" alt="">','zoom-dialog')+modal('sadu-dialog','السدو · حكاية الانتماء','<img class="sadu-modal-image" src="/assets/hero-sadu.jpg" alt="حقيبة السدو بنقوش هندسية"><p class="sadu-modal-text">نقوش وألوان مستوحاة من ذاكرة الصحراء. الصورة تعرض اتجاه مجموعة السدو؛ تفاصيل المنتجات والأسعار تستكمل من المتجر الأصلي.</p><a class="btn" href="/shop">اكتشف القطع المتاحة <span>←</span></a>')+modal('corporate-dialog','هدايا مجاز للأعمال',`<form class="corporate-form" id="corporate-form"><p>جهّز موجز طلبك لنراجعه معك. يُحفظ محليًا في هذه المعاينة.</p><div class="form-grid"><label>اسم الشركة<input name="company" maxlength="80" required autocomplete="organization"></label><label>عدد الهدايا<input name="quantity" type="number" min="1" max="10000" value="25" required></label><label>نوع الهدية<select name="kind"><option>بكج متكامل</option><option>حقائب البشت</option><option>أحتاج اقتراحًا</option></select></label><label>المناسبة<input name="occasion" maxlength="100" placeholder="تكريم، استقبال، مناسبة…"></label><label class="full">التخصيص المطلوب<textarea name="notes" maxlength="500" rows="3" placeholder="اسم الشركة، بطاقة إهداء، تفاصيل أخرى…"></textarea></label></div><button class="btn" type="submit">جهّز موجز الطلب <span>←</span></button><p class="demo-note">لا يتم إرسال بيانات أو حجز طلب. يمكنك تنزيل الموجز ومشاركته بنفسك.</p></form><div id="corporate-result" hidden><div class="brief-preview" id="brief-preview"></div><div class="brief-actions"><button class="btn" id="download-brief">تنزيل الموجز <span>↓</span></button><button class="btn outline" id="edit-brief">تعديل التفاصيل</button></div><p class="demo-note">الموجز محلي، وليس طلبًا مؤكدًا أو عرض سعر.</p></div>`)+modal('checkout-dialog','مراجعة اختياراتك','<div id="checkout-content"></div>');

  let lastFocus: HTMLElement | null = null, toastTimer: ReturnType<typeof setTimeout> | undefined;
  function toast(message: string) { $('.toast').textContent = message; $('.toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => $('.toast').hidden = true, 3200); }
  function countCart() { const count = cart.reduce((n, i) => n + i.quantity, 0); $$('.cart-count').forEach(el => { el.textContent = String(count); el.hidden = count === 0; }); }
  function unit(item: CartItem) { return byId(item.id)!.price! + (item.name ? 30 : 0); }
  function total() { return cart.reduce((s, i) => s + unit(i) * i.quantity, 0); }
  function add(id: string, qty = 1, extras: { name?: string; gift?: boolean; thread?: string } = {}) { const p = byId(id); if (!p?.price) return; const name = String(extras.name || '').trim().slice(0, 12), gift = !!extras.gift, thread = extras.thread || 'gold'; const item = cart.find(i => i.id === id && i.name === name && i.gift === gift && i.thread === thread); if (item) item.quantity = Math.min(99, item.quantity + qty); else cart.push({ id, quantity: Math.min(99, qty), name, gift, thread }); persist(); countCart(); toast('أُضيفت القطعة. ستجدها في سلتك.'); if ($<HTMLDialogElement>('#cart-dialog').open) renderCart(); }
  function favorite(id: string) { if (favorites.has(id)) favorites.delete(id); else favorites.add(id); persist(); $$(`[data-favorite="${id}"]`).forEach(b => b.setAttribute('aria-pressed', String(favorites.has(id)))); if (page === 'shop' && shopFilter === 'favorites') renderShop(); if ($<HTMLDialogElement>('#favorites-dialog').open) renderFavorites(); toast(favorites.has(id) ? 'حُفظت القطعة في مفضلتك.' : 'أُزيلت القطعة من المفضلة.'); }
  function card(p: Product) { const saving = p.old && p.price ? Math.round((p.old - p.price) / p.old * 100) : 0; return `<article class="product-card"><div class="product-card-tools">${saving?`<span class="tag saving-tag">توفير <b dir="ltr">${saving}%</b></span>`:'<span aria-hidden="true"></span>'}<button class="icon-btn favorite" data-favorite="${p.id}" aria-label="حفظ ${p.name} في المفضلة" aria-pressed="${favorites.has(p.id)}">${svg('heart')}</button></div><div class="product-photo"><a href="/product?id=${p.id}" aria-label="${p.name}"><img src="/assets/${p.image}.jpg" alt="${p.name}" width="1000" height="1000" loading="lazy"></a><button class="quick-view" data-quick="${p.id}" aria-label="نظرة سريعة على ${p.name}">نظرة سريعة</button></div><div class="product-meta"><span class="collection-label">${p.collection}</span><h3><a href="/product?id=${p.id}">${p.name}</a></h3><div class="card-price">${p.price?`<span>${money(p.price)}</span>`:'<span>استكشف المجموعة</span>'}${p.old?`<del>${money(p.old)}</del>`:''}</div>${p.price?`<button class="card-add" data-add="${p.id}" aria-label="أضف ${p.name} للسلة">أضف للسلة <span>+</span></button>`:`<a class="card-add" href="/product?id=${p.id}">تفاصيل المجموعة <span>↖</span></a>`}</div></article>`; }
  function result(p: Product) { return `<a class="search-result" href="/product?id=${p.id}"><img src="/assets/${p.image}.jpg" alt=""><span>${p.name}<small>${p.price?money(p.price):'استكشف المجموعة'}</small></span><span aria-hidden="true">↖</span></a>`; }
  function search(query = '') { const text = query.trim().replace(/[أإآ]/g, 'ا'); const matches = products.filter(p => (p.name + ' ' + p.collection + ' ' + p.description).replace(/[أإآ]/g, 'ا').includes(text)); $('#search-results').innerHTML = matches.length ? matches.map(result).join('') : '<div class="empty-state"><h3>لم نجد قطعة بهذا الاسم.</h3><p>جرّب «بشت» أو «هدية» أو «مسبحة».</p></div>'; }
  function renderFavorites() { const list = products.filter(p => favorites.has(p.id)); $('#favorites-content').innerHTML = list.length ? list.map(result).join('') : '<div class="cart-empty"><p>احفظ ما يعجبك بالضغط على رمز القلب.</p><a class="btn" href="/shop">اكتشف القطع <span>←</span></a></div>'; }
  function renderCart() { if (!cart.length) { $('#cart-content').innerHTML = '<div class="cart-empty"><span class="brand-mark" aria-hidden="true">✦</span><h3>سلتك تنتظر أول حكاية.</h3><p>اختر قطعة تعبّر عن ذوقك.</p><a class="btn" href="/shop">تسوّق القطع <span>←</span></a></div>'; return; } const value = total(); $('#cart-content').innerHTML = cart.map((i, n) => { const p = byId(i.id)!; return `<div class="cart-item"><img src="/assets/${p.image}.jpg" alt="${p.name}"><div class="cart-item-info"><a href="/product?id=${p.id}">${p.name}</a><small>${money(unit(i))} للقطعة</small>${i.name?`<small>التطريز: ${esc(i.name)} · ${i.thread==='silver'?'فضي':'ذهبي'}</small>`:''}${i.gift?'<small>طلب تغليف هدية</small>':''}<div class="cart-item-bottom"><div class="quantity"><button data-cart-minus="${n}" aria-label="تقليل كمية ${p.name}" ${i.quantity===1?'disabled':''}>−</button><output>${i.quantity}</output><button data-cart-plus="${n}" aria-label="زيادة كمية ${p.name}" ${i.quantity===99?'disabled':''}>+</button></div><button class="remove-item" data-remove="${n}" aria-label="إزالة ${p.name}">إزالة</button></div></div></div>`; }).join('') + `<div class="shipping-progress">${value>300?'اختياراتك تتجاوز حد الشحن المجاني.':value===300?'الشحن المجاني للطلبات التي تتجاوز 300 ر.س.':`أضف قطعًا بأكثر من ${money(300-value)} للوصول للشحن المجاني.`}<progress value="${Math.min(value,301)}" max="301" aria-label="التقدم نحو حد الشحن المجاني"></progress></div><div class="cart-total"><span>مجموع القطع</span><strong>${money(value)}</strong></div><button class="btn cart-checkout" id="review-cart">راجع اختياراتك <span>←</span></button><p class="demo-note">سلة محلية تجريبية. رسوم الشحن والتغليف غير محسوبة. لا يتم تحصيل مبلغ أو إرسال طلب.</p>`; }
  function quick(id: string) { const p = byId(id)!; $('#quick-content').innerHTML = `<img src="/assets/${p.image}.jpg" alt="${p.name}"><div><span class="kicker">${p.collection}</span><h3>${p.name}</h3><p>${p.description}</p><div class="card-price">${p.price?money(p.price):'استكشف المجموعة'} ${p.old?`<del>${money(p.old)}</del>`:''}</div>${p.price?`<button class="btn" data-add="${p.id}">أضف إلى السلة <span>+</span></button>`:''}<a class="text-link" href="/product?id=${p.id}">كل تفاصيل القطعة <span>←</span></a></div>`; openDialog('quick-dialog'); }
  function checkout() { const value = total(); $('#checkout-content').innerHTML = `<p class="inert-modal-note">هذه مراجعة لتجربة التصميم؛ لا تنفّذ طلبًا حقيقيًا.</p><div class="checkout-lines">${cart.map(i=>`<div><span>${byId(i.id)!.name} × ${i.quantity}${i.name?`<small> · ${esc(i.name)}</small>`:''}</span><span>${money(unit(i)*i.quantity)}</span></div>`).join('')}</div><div class="checkout-total">المجموع: ${money(value)}</div><p class="demo-note">رسوم الشحن والتغليف غير محسوبة. تأكيد الأسعار والمواصفات وإتمام الشراء يتم عبر المتجر الأصلي.</p><button class="btn" data-close>العودة لتجربة التصميم <span>←</span></button>`; openDialog('checkout-dialog'); }
  function openDialog(id: string) { const old = document.querySelector<HTMLDialogElement>('dialog[open]'); if (old) old.close(); else lastFocus = document.activeElement as HTMLElement | null; if (id === 'cart-dialog') renderCart(); if (id === 'favorites-dialog') renderFavorites(); if (id === 'search-dialog') search($<HTMLInputElement>('.search-input').value); (document.getElementById(id) as HTMLDialogElement).showModal(); document.body.style.overflow = 'hidden'; }
  $$<HTMLDialogElement>('dialog').forEach(d => { d.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) { document.body.style.overflow = ''; lastFocus?.focus({ preventScroll: true }); } }, { signal }); d.addEventListener('click', e => { if (e.target === d) { const r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close(); } }, { signal }); });
  document.addEventListener('click', e => { const t = e.target as Element; const d = t.closest<HTMLElement>('[data-dialog]'); if (d) openDialog(d.dataset.dialog!); const close = t.closest('[data-close]'); if (close) close.closest('dialog')!.close(); const a = t.closest<HTMLElement>('[data-add]'); if (a) add(a.dataset.add!); const f = t.closest<HTMLElement>('[data-favorite]'); if (f) favorite(f.dataset.favorite!); const q = t.closest<HTMLElement>('[data-quick]'); if (q) quick(q.dataset.quick!); const remove = t.closest<HTMLElement>('[data-remove]'); if (remove) { cart.splice(Number(remove.dataset.remove), 1); persist(); countCart(); renderCart(); } const plus = t.closest<HTMLElement>('[data-cart-plus]'), minus = t.closest<HTMLElement>('[data-cart-minus]'); if (plus || minus) { const n = Number(plus ? plus.dataset.cartPlus : minus!.dataset.cartMinus); cart[n].quantity = Math.min(99, Math.max(1, cart[n].quantity + (plus ? 1 : -1))); persist(); countCart(); renderCart(); } if (t.closest('#review-cart')) checkout(); if (t.closest('.menu-links a')) $<HTMLDialogElement>('#menu-dialog').close(); }, { signal });
  $<HTMLInputElement>('.search-input').addEventListener('input', e => search((e.target as HTMLInputElement).value), { signal });

  let homeFilter = 'all', shopFilter = params.get('category') || 'all', giftKind = 'all', budget = 'all';
  if (page === 'home') {
    const renderHome = () => { $('#home-products').innerHTML = products.filter(p => p.price && (homeFilter === 'all' || p.category === homeFilter)).map(card).join(''); };
    renderHome();
    $$('[data-home-filter]').forEach(b => b.addEventListener('click', () => { homeFilter = b.dataset.homeFilter!; $$('[data-home-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); renderHome(); }, { signal }));
    const input = $<HTMLInputElement>('#embroider-name');
    const updateHomeName = () => { $('#name-preview').textContent = input.value.trim() || 'اسمك'; $('#name-count').textContent = `${input.value.length} / 12`; try { sessionStorage.setItem('majaz-atelier-name', input.value); } catch {} };
    try { input.value = (sessionStorage.getItem('majaz-atelier-name') || '').slice(0, 12); const thread = sessionStorage.getItem('majaz-atelier-thread') || 'gold'; $('#name-preview').style.color = thread === 'gold' ? '#D7B56E' : '#D2D9D7'; $$('[data-thread]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.thread === thread))); } catch {}
    updateHomeName();
    input.addEventListener('input', updateHomeName, { signal });
    $$('[data-thread]').forEach(b => b.addEventListener('click', () => { $$('[data-thread]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); $('#name-preview').style.color = b.dataset.thread === 'gold' ? '#D7B56E' : '#D2D9D7'; try { sessionStorage.setItem('majaz-atelier-thread', b.dataset.thread!); } catch {} }, { signal }));
  }
  function renderShop() { if (page !== 'shop') return; const query = $<HTMLInputElement>('#catalog-query').value.trim(), sort = $<HTMLSelectElement>('#sort').value; const list = products.filter(p => (shopFilter === 'all' || (shopFilter === 'favorites' ? favorites.has(p.id) : p.category === shopFilter)) && (p.name + ' ' + p.collection).includes(query)); if (sort === 'price-up') list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity)); if (sort === 'price-down') list.sort((a, b) => (b.price ?? -1) - (a.price ?? -1)); if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'ar')); $('#shop-products').innerHTML = list.map(card).join(''); $('#result-count').textContent = `${list.length} ${list.length === 1 ? 'اختيار' : 'اختيارات'}`; $('#empty-state').hidden = !!list.length; $$('[data-shop-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.shopFilter === shopFilter))); }
  if (page === 'shop') {
    if (!['all', 'bisht', 'gifts', 'beads', 'favorites'].includes(shopFilter)) shopFilter = 'all';
    $$('[data-shop-filter]').forEach(b => b.addEventListener('click', () => { shopFilter = b.dataset.shopFilter!; history.replaceState(null, '', shopFilter === 'all' ? '/shop' : `/shop?category=${shopFilter}`); renderShop(); }, { signal }));
    $('#sort').addEventListener('change', renderShop, { signal });
    $('#catalog-query').addEventListener('input', renderShop, { signal });
    $('#reset-filters').addEventListener('click', () => { shopFilter = 'all'; $<HTMLInputElement>('#catalog-query').value = ''; $<HTMLSelectElement>('#sort').value = 'featured'; history.replaceState(null, '', '/shop'); renderShop(); }, { signal });
    renderShop();
  }
  function renderGifts() { const list = products.filter(p => p.price && (giftKind === 'all' || p.category === giftKind) && (budget === 'all' || p.price <= Number(budget))); $('#gift-products').innerHTML = list.map(card).join(''); $('#gift-count').textContent = `${list.length} ${list.length === 1 ? 'هدية مناسبة' : 'اختيارات مناسبة'}`; $('#gift-empty').hidden = !!list.length; }
  if (page === 'gifts') {
    $$('[data-gift-kind]').forEach(b => b.addEventListener('click', () => { giftKind = b.dataset.giftKind!; $$('[data-gift-kind]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); renderGifts(); }, { signal }));
    $$('[data-budget]').forEach(b => b.addEventListener('click', () => { budget = b.dataset.budget!; $$('[data-budget]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); renderGifts(); }, { signal }));
    renderGifts();
  }
  let stopTitle = () => {};
  if (page === 'product') {
    const p = (byId(params.get('id')) || byId('shomoukh'))!;
    const photo = $<HTMLImageElement>('#detail-photo'), nameInput = $<HTMLInputElement>('#product-name'), enablePersonal = $<HTMLInputElement>('#enable-personal');
    let qty = 1, productThread = 'gold';
    try { productThread = sessionStorage.getItem('majaz-atelier-thread') || 'gold'; } catch {}
    // Next.js applies the static metadata title after hydration, so keep restoring the product title.
    const title = p.name + ' — سوق مجاز', keepTitle = () => { if (document.title !== title) document.title = title; };
    keepTitle();
    const titleObserver = new MutationObserver(keepTitle);
    titleObserver.observe(document.head, { subtree: true, childList: true, characterData: true });
    stopTitle = () => titleObserver.disconnect();
    $('#crumb-name').textContent = p.name; $('#detail-name').textContent = p.name; $('#detail-collection').textContent = p.collection; $('#detail-description').textContent = p.description;
    photo.src = `/assets/${p.image}.jpg`; photo.alt = p.name;
    $('#detail-old-price').textContent = p.old ? money(p.old) : ''; $('#offer').hidden = !p.old;
    $('#detail-story').textContent = p.category === 'gifts' ? 'بكج يجمع الحقيبة والمسبحة وكوب القهوة العربية في صندوق جاهز للإهداء.' : p.description + ' قطعة مستوحاة من الإرث السعودي، بتكوين معاصر.';
    $('#detail-favorite').innerHTML = svg('heart'); $('#detail-favorite').dataset.favorite = p.id; $('#detail-favorite').setAttribute('aria-pressed', String(favorites.has(p.id)));
    $('#zoom-photo').innerHTML = svg('zoom'); $('#delivery-icon').innerHTML = svg('truck');
    const photos = [p.image, ...(p.detail ? [p.detail] : [])];
    $('#photo-thumbs').innerHTML = photos.map((im, i) => `<button data-photo="${im}" aria-label="${i?'تفاصيل المجموعة':'صورة القطعة'}" aria-pressed="${i===0}"><img src="/assets/${im}.jpg" alt=""></button>`).join('');
    $$('[data-photo]').forEach(b => b.addEventListener('click', () => { photo.src = `/assets/${b.dataset.photo}.jpg`; photo.alt = b.dataset.photo === p.image ? p.name : 'تفاصيل المجموعة'; $$('[data-photo]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); if (p.price) update(); }, { signal }));
    $('#zoom-photo').addEventListener('click', () => { const zoom = $<HTMLImageElement>('#zoom-image'); zoom.src = photo.src; zoom.alt = photo.alt; openDialog('zoom-dialog'); }, { signal });
    const canPersonal = p.category === 'bisht';
    $('#personal-config').hidden = !canPersonal;
    if (canPersonal && params.has('personalize')) { enablePersonal.checked = true; try { nameInput.value = sessionStorage.getItem('majaz-atelier-name') || ''; } catch {} }
    const update = () => { const enabled = canPersonal && enablePersonal.checked; $('#personal-input').hidden = !enabled; const primary = photo.src.endsWith('/' + p.image + '.jpg'), hasName = enabled && !!nameInput.value.trim(); $('#product-name-preview').hidden = !(primary && hasName); $('#product-preview-note').hidden = !(primary && hasName); $('#product-name-preview').textContent = nameInput.value.trim(); $('#product-name-preview').style.color = productThread === 'gold' ? '#D7B56E' : '#D2D9D7'; $$('[data-product-thread]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.productThread === productThread))); const value = p.price! + (enabled && nameInput.value.trim() ? 30 : 0); $('#detail-price').textContent = money(value); $('#mobile-price').textContent = money(value); $('#quantity').textContent = String(qty); $<HTMLButtonElement>('#decrease').disabled = qty === 1; $<HTMLButtonElement>('#increase').disabled = qty === 10; };
    if (p.price) {
      $$('[data-product-thread]').forEach(b => b.addEventListener('click', () => { productThread = b.dataset.productThread!; update(); }, { signal }));
      enablePersonal.addEventListener('change', update, { signal });
      nameInput.addEventListener('input', update, { signal });
      $('#decrease').addEventListener('click', () => { qty = Math.max(1, qty - 1); update(); }, { signal });
      $('#increase').addEventListener('click', () => { qty = Math.min(10, qty + 1); update(); }, { signal });
      const buy = () => { if (canPersonal && enablePersonal.checked && !nameInput.value.trim()) { nameInput.focus(); toast('اكتب الاسم الذي تريد تطريزه.'); return; } add(p.id, qty, { name: canPersonal && enablePersonal.checked ? nameInput.value : '', gift: $<HTMLInputElement>('#gift-wrap').checked, thread: productThread }); };
      $('#detail-add').addEventListener('click', buy, { signal });
      $('#mobile-add').addEventListener('click', buy, { signal });
      update();
    } else {
      $('#detail-price').textContent = 'استكشف المجموعة'; $('#product-config').hidden = true; $('#mobile-buy').hidden = true;
      $('.product-info').insertAdjacentHTML('beforeend', '<div class="no-price-note">تُستكمل أسعار وتفاصيل هذه المجموعة من المتجر الأصلي. لا يُضاف منتج بسعر غير مؤكد إلى السلة.</div>');
    }
    $('#related-products').innerHTML = products.filter(x => x.id !== p.id && x.price).slice(0, 4).map(card).join('');
  }

  let briefText = '';
  $('#corporate-form').addEventListener('submit', e => { e.preventDefault(); const form = e.currentTarget as HTMLFormElement; if (!form.reportValidity()) return; const data = new FormData(form); briefText = `موجز هدايا مجاز للأعمال\n\nالشركة: ${data.get('company')}\nعدد الهدايا: ${data.get('quantity')}\nنوع الهدية: ${data.get('kind')}\nالمناسبة: ${data.get('occasion')||'لم تحدد'}\nالتخصيص: ${data.get('notes')||'لم يحدد'}\n\nموجز محلي للمراجعة، وليس طلبًا مؤكدًا أو عرض سعر.`; $('#brief-preview').textContent = briefText; form.hidden = true; $('#corporate-result').hidden = false; $('#download-brief').focus(); }, { signal });
  $('#edit-brief').addEventListener('click', () => { $('#corporate-result').hidden = true; $('#corporate-form').hidden = false; $('#corporate-form input').focus(); }, { signal });
  $('#download-brief').addEventListener('click', () => { const url = URL.createObjectURL(new Blob([briefText], { type: 'text/plain;charset=utf-8' })); const a = document.createElement('a'); a.href = url; a.download = 'majaz-corporate-brief.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast('تم تجهيز الموجز للتنزيل.'); }, { signal });
  countCart();

  const stopHero = initHeroMotion(signal);
  return () => {
    controller.abort();
    stopHero();
    stopTitle();
    clearTimeout(toastTimer);
    document.querySelector('.no-price-note')?.remove();
    document.body.style.overflow = '';
  };
}

// Slow crossfade inside the original homepage composition.
function initHeroMotion(signal: AbortSignal): () => void {
  const hero = document.querySelector<HTMLElement>('.hero-art'), stage = document.querySelector<HTMLAnchorElement>('.hero-stage');
  if (!hero || !stage) return () => {};
  const slides = $$<HTMLImageElement>('.hero-slide'), dots = $$('[data-hero-slide]');
  const items = ['shomoukh', 'fareed', 'gift'].map(id => byId(id)!);
  const caption = $<HTMLAnchorElement>('.hero-art .art-caption'), label = caption.firstElementChild as HTMLElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, timer: ReturnType<typeof setTimeout> | undefined, visible = true, ready = false;
  const canPlay = () => ready && !reduced.matches && visible && !document.hidden;
  function schedule() {
    clearTimeout(timer);
    if (canPlay()) timer = setTimeout(() => show((current + 1) % slides.length), 2000);
  }

  function show(next: number) {
    if (next === current) { schedule(); return; }
    // Leave the current frame intact if a product image is unavailable.
    if (!slides[next].complete || !slides[next].naturalWidth) { schedule(); return; }
    current = next;
    slides.forEach((image, i) => {
      image.classList.toggle('is-active', i === current);
      image.setAttribute('aria-hidden', String(i !== current));
    });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    const product = items[current], name = product.id === 'shomoukh' ? 'حقيبة شموخ' : product.name;
    stage!.href = caption.href = `/product?id=${product.id}`;
    stage!.setAttribute('aria-label', 'اكتشف ' + product.name);
    label.innerHTML = `${esc(product.collection)}<small>${esc(name)} · ${money(product.price!)}</small>`;
    label.classList.remove('is-changing');
    // Restart the short caption entrance without changing the frame geometry.
    void label.offsetWidth;
    label.classList.add('is-changing');
    schedule();
  }
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.heroSlide)), { signal }));
  document.addEventListener('visibilitychange', schedule, { signal });
  reduced.addEventListener('change', schedule, { signal });
  const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .25; schedule(); }, { threshold: .25 });
  observer.observe(hero);
  Promise.all(slides.map(image => image.decode().catch(() => {}))).then(() => { if (signal.aborted) return; ready = true; schedule(); });
  return () => { clearTimeout(timer); observer.disconnect(); };
}
