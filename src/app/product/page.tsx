import type { Metadata } from "next";
import MajazApp from "@/components/majaz-app";

export const metadata: Metadata = {
  title: "تفاصيل القطعة — سوق مجاز",
  description: "تفاصيل القطعة وخيارات تخصيصها من سوق مجاز.",
};

export default function ProductPage() {
  return (
    <>
<main id="main"><nav className="breadcrumb" aria-label="مسار الصفحة"><a href="/">الرئيسية</a><span>/</span><a href="/shop">القطع</a><span>/</span><span id="crumb-name"></span></nav>
<section className="product-detail"><div className="product-gallery"><div className="main-photo"><img id="detail-photo" src="/assets/shomoukh.jpg" alt="" fetchPriority="high" /><span className="product-name-overlay" id="product-name-preview" hidden></span><small className="product-preview-note" id="product-preview-note" hidden>تصوّر تقريبي للتطريز</small><button className="icon-btn zoom-button" id="zoom-photo" aria-label="تكبير الصورة"></button></div><div className="photo-thumbs" id="photo-thumbs"></div><p className="gallery-note">صور التفاصيل الإضافية مرجع للمجموعة.</p></div><div className="product-info"><span className="kicker" id="detail-collection"></span><h1 id="detail-name"></h1><p id="detail-description"></p><div className="price-line"><strong id="detail-price"></strong><del id="detail-old-price"></del><span id="offer" className="tag">سعر العرض</span></div><div id="product-config"><fieldset className="personal-config" id="personal-config"><legend>اجعلها أقرب لك</legend><label className="check-option"><input type="checkbox" id="enable-personal" /><span>أضف تطريز اسم <small>+30 ر.س</small></span></label><div id="personal-input" hidden><label htmlFor="product-name">الاسم على القطعة</label><input id="product-name" maxLength={12} placeholder="اكتب الاسم أو الحروف" autoComplete="off" /><small>حتى 12 حرفًا · المعاينة تقريبية</small><div className="thread-options" role="group" aria-label="لون خيط التطريز"><button data-product-thread="gold" type="button" aria-pressed="true"><i className="gold-dot"></i>ذهبي</button><button data-product-thread="silver" type="button" aria-pressed="false"><i className="silver-dot"></i>فضي</button></div></div></fieldset><label className="check-option gift-wrap"><input type="checkbox" id="gift-wrap" /><span>أرغب في تغليف هدية <small>تؤكد رسوم التغليف مع المتجر</small></span></label><div className="purchase-line"><div className="quantity"><button id="decrease" aria-label="تقليل الكمية">−</button><output id="quantity">1</output><button id="increase" aria-label="زيادة الكمية">+</button></div><button className="btn" id="detail-add">أضف إلى السلة <span>+</span></button><button className="icon-btn favorite-detail" id="detail-favorite" aria-label="حفظ في المفضلة" aria-pressed="false"></button></div><div className="shipping-hint"><span id="delivery-icon"></span><p>شحن داخل المملكة<small>شحن مجاني للطلبات فوق 300 ر.س بحسب المتجر المرجعي</small></p></div></div><div className="accordions"><details open><summary>حكاية القطعة <span>+</span></summary><p id="detail-story"></p></details><details><summary>الخامة والعناية <span>+</span></summary><p>تفاصيل الخامة والمقاسات وتعليمات العناية تؤكد من بيانات المتجر قبل الطلب. الصور توضح التصميم وتفاصيل المجموعة.</p></details><details><summary>الشحن والاستبدال <span>+</span></summary><p>المتجر المرجعي يعرض شحنًا داخل المملكة والاستبدال خلال 14 يومًا. تكلفة الشحن وشروط التطبيق تؤكد قبل إتمام الطلب.</p></details></div></div></section>
<section className="section related"><div className="section-head"><div><span className="kicker">من نفس الحكاية</span><h2>تفاصيل تكمل <em>اختيارك.</em></h2></div><a className="text-link" href="/shop">كل القطع <span>←</span></a></div><div className="product-grid" id="related-products"></div></section>
</main>
<div className="mobile-buy" id="mobile-buy"><span id="mobile-price"></span><button className="btn" id="mobile-add">أضف إلى السلة <span>+</span></button></div>
      <MajazApp page="product" />
    </>
  );
}
