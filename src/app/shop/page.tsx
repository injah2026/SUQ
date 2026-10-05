import type { Metadata } from "next";
import MajazApp from "@/components/majaz-app";

export const metadata: Metadata = {
  title: "القطع — سوق مجاز",
  description: "اكتشف حقائب البشت، الهدايا والمسابح من سوق مجاز.",
};

export default function ShopPage() {
  return (
    <>
<main id="main"><div className="breadcrumb"><a href="/">الرئيسية</a><span>/</span><span>اختيارات مجاز</span></div>
<section className="shop-intro"><div><span className="kicker">THE MAJAZ COLLECTION</span><h1>قطعتك القادمة.<br /><em>حكايتك الجديدة.</em></h1></div><p>تصفّح القطع، وقارن التفاصيل.<br />ما يشبه ذوقك، ستجده هنا.</p></section>
<section className="shop-catalog section"><div className="shop-tools"><div className="filter-row" role="group" aria-label="تصنيف المنتجات"><button data-shop-filter="all" aria-pressed="true">كل القطع</button><button data-shop-filter="bisht" aria-pressed="false">البشت</button><button data-shop-filter="gifts" aria-pressed="false">الهدايا</button><button data-shop-filter="beads" aria-pressed="false">المسابح</button><button data-shop-filter="favorites" aria-pressed="false">المفضلة</button></div><label className="sort-label">ترتيب حسب <select id="sort"><option value="featured">اختيارات مجاز</option><option value="price-up">السعر: الأقل أولًا</option><option value="price-down">السعر: الأعلى أولًا</option><option value="name">الاسم</option></select></label></div><div className="catalog-meta"><span id="result-count" role="status"></span><label className="catalog-search">ابحث داخل المجموعة<input type="search" id="catalog-query" placeholder="اسم القطعة…" /></label></div><div className="product-grid" id="shop-products"></div><div className="empty-state" id="empty-state" hidden><span aria-hidden="true">◇</span><h2>لا توجد قطع مطابقة.</h2><p>جرّب اسمًا آخر أو ارجع إلى كل القطع.</p><button className="btn" id="reset-filters">عرض كل القطع</button></div></section>
<section className="shop-help"><span>تبحث عن شيء يُهدى؟</span><a className="text-link" href="/gifts">نساعدك تختار <span>←</span></a></section>
</main>
      <MajazApp page="shop" />
    </>
  );
}
