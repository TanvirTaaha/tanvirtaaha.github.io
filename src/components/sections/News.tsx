import { NewsItem } from '@/types';

interface NewsProps {
  news: NewsItem[];
}

export default function News({ news }: NewsProps) {
  // Sort by date, latest first
  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="news" className="py-8 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">Latest Updates</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">News & Updates</h2>
        </div>

        <div className="max-h-96 overflow-y-auto space-y-3 pr-2">
          {sortedNews.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-[var(--accent)] font-medium uppercase tracking-wide">
                  {item.category}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1.5">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

