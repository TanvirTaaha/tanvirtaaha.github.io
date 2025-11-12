import { PersonalInfo } from '@/types';

interface ContactProps {
  info: PersonalInfo;
}

export default function Contact({ info }: ContactProps) {
  return (
    <section id="contact" className="py-8 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
            Contact With Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-base">📞</span>
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] text-sm font-medium mb-0.5">Phone</h3>
                <p className="text-[var(--text-secondary)] text-sm">{info.phone || 'Not provided'}</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-base">✉️</span>
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] text-sm font-medium mb-0.5">Email</h3>
                <a href={`mailto:${info.email}`} className="text-[var(--accent)] hover:underline text-sm">
                  {info.email}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-base">📍</span>
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] text-sm font-medium mb-0.5">Address</h3>
                <p className="text-[var(--text-secondary)] text-sm">{info.address || info.location || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

