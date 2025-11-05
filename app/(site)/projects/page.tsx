import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">All Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p,i) => <ProjectCard key={i} project={p as any} />)}
      </div>
    </div>
  );
}
