import { experiences } from "@/utils/data/experience";
import { projectsData } from "@/utils/data/projects-data";

const baseUrl = "https://portfolio-of-mohammadfahad.netlify.app";

export default function sitemap() {
  const staticRoutes = ["/", "/blog", "/work/eduflow"].map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const projectRoutes = projectsData.map(({ slug }) => ({
    url: new URL(`/work/${slug}`, baseUrl).toString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const experienceRoutes = experiences.map(({ slug }) => ({
    url: new URL(`/experience/${slug}`, baseUrl).toString(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes];
}
