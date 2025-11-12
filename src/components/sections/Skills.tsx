import { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-8 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Technical Expertise</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all duration-200"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

