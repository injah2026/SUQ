import type { Metadata } from "next";
import MajazApp from "@/components/majaz-app";

export const metadata: Metadata = {
  title: "اختر هديتك — سوق مجاز",
  description: "اختر هدية من مجاز حسب النوع والميزانية وأضف لمستك الشخصية.",
};

export default function GiftsPage() {
  return (
    <>
<main id="main">
<section className="gift-hero"><div><span className="kicker">فنّ الإهداء</span><h1>هدية تقول<br /><em>أكثر من الكلام.</em></h1><p>اختيارات مدروسة، وتفاصيل تعبّر عنك.<br />لنجد معًا هدية تليق بهم.</p><a className="btn" href="#gift-finder">لنختَر الهدية <span>↓</span></a></div><img src="/assets/gift.jpg" alt="حقيبة ومسبحة وكوب في صندوق هدية" fetchPriority="high" /></section>
<section className="section gift-finder" id="gift-finder"><div className="section-head"><div><span className="kicker">اختيار أبسط</span><h2>ما الذي <em>تبحث عنه؟</em></h2></div><p>غيّر اختياراتك، وشاهد القطع المناسبة.</p></div><div className="finder-controls"><fieldset><legend><span>01</span> شكل الهدية</legend><div className="choice-row"><button data-gift-kind="all" aria-pressed="true">كل الاختيارات</button><button data-gift-kind="gifts" aria-pressed="false">بكج متكامل</button><button data-gift-kind="bisht" aria-pressed="false">قطعة مميزة</button></div></fieldset><fieldset><legend><span>02</span> ميزانيتك</legend><div className="choice-row"><button data-budget="all" aria-pressed="true">بدون تحديد</button><button data-budget="200" aria-pressed="false">حتى 200 ر.س</button><button data-budget="400" aria-pressed="false">حتى 400 ر.س</button></div></fieldset></div><div className="finder-count" id="gift-count" role="status"></div><div className="product-grid" id="gift-products"></div><div id="gift-empty" className="empty-state" hidden><h3>البكج المتكامل أعلى من الميزانية المحددة.</h3><p>اختر «قطعة مميزة»، أو غيّر الميزانية لرؤية البكج.</p></div></section>
<section className="gift-personal"><span className="kicker">شخصية أكثر</span><h2>الاسم الذي تحبه،<br /><em>على القطعة التي تختارها.</em></h2><a className="btn" href="/product?id=bisht-gold&personalize=1">أضف لمسة شخصية <span>↖</span></a><p>تطريز الاسم على حقائب البشت +30 ر.س</p></section>
<section className="business-section"><div><span className="kicker">هدايا الشركات</span><h2>للأسماء التي<br /><em>تصنع الفرق.</em></h2></div><div><p>سواء لفريق صغير أو مناسبة كبيرة،<br />جهّز تفاصيل طلبك في خطوة واحدة.</p><button className="btn" data-dialog="corporate-dialog">جهّز طلب شركتك <span>↖</span></button></div><span className="business-icon" aria-hidden="true">✦</span></section>
</main>
      <MajazApp page="gifts" />
    </>
  );
}
