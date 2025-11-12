'use client';

import { useState } from 'react';
import { Publication } from '@/types';

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <section id="publications" className="py-8 px-4 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Research</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Publications</h2>
            </div>
            <button
              onClick={() => setIsVisible(true)}
              className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all duration-200 text-sm font-medium"
            >
              Show Publications
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-8 px-4 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Research</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Publications</h2>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all duration-200 text-sm font-medium"
          >
            Hide Publications
          </button>
        </div>

        <div className="space-y-3">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200"
            >
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1.5">
                {pub.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-1">{pub.authors}</p>
              <p className="text-xs text-[var(--text-muted)] mb-2">
                <span className="italic">{pub.venue}</span> • {pub.year}
              </p>
              {pub.doi && (
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  DOI: <a href={`https://doi.org/${pub.doi}`} className="text-[var(--accent)] hover:underline" target="_blank" rel="noopener noreferrer">{pub.doi}</a>
                </p>
              )}
              {pub.abstract && (
                <div className="text-xs text-[var(--text-secondary)] mb-2 mt-2 pt-2 border-t border-[var(--border)] line-clamp-2">
                  <strong className="text-[var(--text-primary)]">Abstract:</strong> {pub.abstract}
                </div>
              )}
              {pub.pdfUrl && (
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1.5 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-hover)] transition-all duration-200 text-xs font-medium"
                >
                  View PDF
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

