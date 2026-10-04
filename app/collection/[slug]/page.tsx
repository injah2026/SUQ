import { notFound } from "next/navigation";
import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import CollectionView from "@/components/collection/CollectionView";
import { collectionConfigs } from "@/lib/collectionData";

export const metadata = {
  title: "المجموعات | سوق مجاز",
  description:
    "تصفّح مجموعات سوق مجاز الفاخرة: مجموعة البشت، مجموعة السدو، ومجموعة اليوم الوطني بتصاميم تراثية وتطريز ذهبي.",
};

export function generateStaticParams() {
  return [{ slug: "bisht" }, { slug: "sadu" }, { slug: "national-day" }];
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cfg = collectionConfigs[slug];
  if (!cfg) notFound();

  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "المجموعات", href: "/shop" },
            { label: cfg.title },
          ]}
        />
      </div>

      <CollectionView slug={slug} />

      <Footer />
    </div>
  );
}