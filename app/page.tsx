import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0,6);
  return (
    <div className="space-y-12">
      <Hero />

      <Section title="Skills" subtitle="Primary tools & platforms">
        <div className="flex flex-wrap gap-2 text-sm">
          {['Linux','Networking','Docker','Kubernetes','CI/CD','GitHub Actions','Jenkins','AWS (basics)','Git','Shell Scripting'].map(s => (
            <span key={s} className="badge">{s}</span>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="Stuff I'm proud of recently.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p,i) => <ProjectCard key={i} project={p as any} />)}
        </div>
      </Section>

      <Section title="About" subtitle="Who am I?">
        <div className="card p-6 leading-7 space-y-3">
          <p>
            Faizal Bagwan is a passionate DevOps Engineer and Linux enthusiast focused on automation, infrastructure management, and cloud technologies. He’s always eager to learn new tools that make systems faster, more secure, and more reliable.
          </p>
          <p>
            Along with his technical expertise, Faizal is an Adobe-certified professional (2020) skilled in Premiere Pro and After Effects, combining his love for tech with creativity. He believes in continuous learning, hands-on practice, and building meaningful solutions that blend technology and innovation.
          </p>
        </div>
      </Section>
    </div>
  );
}
