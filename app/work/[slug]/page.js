import { projectsData } from "@/utils/data/projects-data";
import ProjectDetail from "@/app/components/work/project-detail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Mohammad Fahad`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
