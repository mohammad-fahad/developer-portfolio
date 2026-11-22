import { experiences } from "@/utils/data/experience";
import ExperienceDetail from "@/app/components/experience/experience-detail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) return {};
  return {
    title: `${experience.company} — ${experience.title} | Mohammad Fahad`,
    description: experience.description,
  };
}

export default async function ExperiencePage({ params }) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) notFound();
  return <ExperienceDetail experience={experience} />;
}
