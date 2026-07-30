import { experiences } from "@/utils/data/experience";
import ExperienceDetail from "@/app/components/experience/experience-detail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export function generateMetadata({ params }) {
  const experience = experiences.find((e) => e.slug === params.slug);
  if (!experience) return {};
  return {
    title: `${experience.company} — ${experience.title} | Mohammad Fahad`,
    description: experience.description,
  };
}

export default function ExperiencePage({ params }) {
  const experience = experiences.find((e) => e.slug === params.slug);
  if (!experience) notFound();
  return <ExperienceDetail experience={experience} />;
}
