// component
import { About, Contact, Home, NavItemMobile, Projects, Skills } from "@/components";
// i18n
import { Locale } from "@/lib/i18n.config";
// next
import { notFound } from "next/navigation";
import { Metadata } from "next";

// types
type Props = {
  params: { lang: Locale };
};

// dynamic MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { lang } = params;

  let meta = {
    title: {
      en: "Ali Seyedi",
      fa: "علی سیدی",
    },
  };

  return {
    title: `${meta.title[lang]}`,
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const { lang } = params;
  if (!lang) {
    notFound();
  }

  return (
    <main className="h-full">
      <Home lang={params.lang} />
      <About lang={params.lang} />
      <Skills lang={params.lang} />
      <Projects lang={params.lang} />
      <Contact lang={params.lang} />
      <NavItemMobile lang={params.lang} />
    </main>
  );
};

export default Page;
