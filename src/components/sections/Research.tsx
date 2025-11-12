import Image from 'next/image';
import { ResearchItem } from '@/types';

interface ResearchProps {
  research: ResearchItem[];
}

export default function Research({ research }: ResearchProps) {
  return (
    <section id="research" className="py-8 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Research</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Research Experience</h2>
        </div>

        <div className="space-y-4">
          {research.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Large Thumbnail - Left (or top on mobile) */}
                {item.imageUrl && (
                  <div className="lg:w-1/3 w-full h-64 lg:h-auto relative bg-[var(--bg-secondary)]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                {/* Details - Right (or bottom on mobile) */}
                <div className={`flex-1 p-4 ${item.imageUrl ? 'lg:p-6' : 'p-4'}`}>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    {item.venue && (
                      <p className="text-xs text-[var(--accent)] mb-2">
                        {item.venue}
                      </p>
                    )}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded text-xs border border-[var(--border)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {item.description && (
                    <div className="text-[var(--text-secondary)] text-sm leading-relaxed space-y-1">
                      {item.description.split('\n').map((line, idx) => (
                        <p key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-0.5 text-xs">•</span>
                          <span>{line.trim()}</span>
                        </p>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <div className="mt-3">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1.5 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-hover)] transition-all duration-200 text-xs font-medium"
                      >
                        Learn More
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

