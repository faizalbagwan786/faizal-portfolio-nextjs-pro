type Project = { title: string; summary: string; tags: string[]; link?: string; repo?: string; featured?: boolean; };
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative card p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 blur-lg transition group-hover:opacity-100"
           style={{ background:'linear-gradient(120deg, rgba(99,102,241,.25), rgba(34,211,238,.2))' }} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.featured && <span className="text-xs rounded-full border px-2 py-0.5">Featured</span>}
        </div>
        <p className="opacity-80 text-sm mt-1">{project.summary}</p>
        <div className="text-xs opacity-70 mt-2">{project.tags.join(' • ')}</div>
        <div className="flex gap-3 pt-3">
          {project.link && <a className="link" href={project.link} target="_blank">Live</a>}
          {project.repo && <a className="link" href={project.repo} target="_blank">Code</a>}
        </div>
      </div>
    </article>
  );
}
