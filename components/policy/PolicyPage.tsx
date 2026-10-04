import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import PolicyLayout from "@/components/policy/PolicyLayout";
import SectionLabel from "@/components/ui/SectionLabel";
import { getPolicy } from "@/lib/policyData";

export default function PolicyPage({ slug }: { slug: string }) {
  const policy = getPolicy(slug);

  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: policy.label },
          ]}
        />
      </div>

      <main className="w-full">
        <section className="w-full border-y border-[#E8DFD3] bg-[#FFFDF9]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl">
              <SectionLabel>{policy.label}</SectionLabel>
              <h1 className="mt-0 font-heading text-[30px] lg:text-[44px] font-semibold text-[#2B211B]">
                {policy.title}
              </h1>
              <p className="mt-5 text-[16px] leading-9 text-[#8A7B6E]">{policy.intro}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[13px] text-[#A99C8E]">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-refresh-line"></i>
                </span>
                آخر تحديث: {policy.updated}
              </span>
            </div>
          </div>
        </section>

        <PolicyLayout policy={policy} />
      </main>

      <Footer />
    </div>
  );
}