import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoGrid from "@/components/contact/ContactInfoGrid";
import ContactMap from "@/components/contact/ContactMap";
import Reveal from "@/components/home/Reveal";
import { contactHero } from "@/lib/contactData";

export const metadata = {
  title: "تواصل معنا | سوق مجاز",
  description:
    "تواصل مع فريق سوق مجاز عبر واتساب أو الهاتف أو البريد الإلكتروني، أو زُر معرضنا. نسعد بخدمتك يوميًا من 9 صباحًا حتى 11 مساءً.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "تواصل معنا" },
          ]}
        />
      </div>

      <main className="w-full">
        <PageHero
          image={contactHero.image}
          label={contactHero.label}
          title={contactHero.title}
          text={contactHero.text}
        />

        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-start">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={80}>
              <ContactInfoGrid />
            </Reveal>
          </div>
        </section>

        <ContactMap />
      </main>

      <Footer />
    </div>
  );
}