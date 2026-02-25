import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: number;
    category: string;
    title: string;
    desc: string;
    result: string;
    tech: string[];
    details: {
      challenge: string;
      solution: string;
      outcome: string;
    };
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-card border border-gold/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-gold/30 hover:bg-gold hover:text-navy transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-10">
          <div className="text-xs text-gold uppercase tracking-[0.18em] mb-3">{project.category} · Project #{String(project.id).padStart(2, '0')}</div>
          <h2 className="text-3xl font-display font-light mb-6">{project.title}</h2>
          <p className="text-white/60 leading-relaxed mb-8">{project.desc}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-navy-2 p-6 border-l-3 border-gold">
              <h3 className="text-sm font-medium text-gold mb-3">Challenge</h3>
              <p className="text-xs text-white/60 leading-relaxed">{project.details.challenge}</p>
            </div>
            <div className="bg-navy-2 p-6 border-l-3 border-gold">
              <h3 className="text-sm font-medium text-gold mb-3">Solution</h3>
              <p className="text-xs text-white/60 leading-relaxed">{project.details.solution}</p>
            </div>
            <div className="bg-navy-2 p-6 border-l-3 border-gold">
              <h3 className="text-sm font-medium text-gold mb-3">Outcome</h3>
              <p className="text-xs text-white/60 leading-relaxed">{project.details.outcome}</p>
            </div>
          </div>

          <div className="bg-green/10 border border-green/30 p-6 mb-8">
            <div className="text-sm font-medium text-green mb-2">Project Result</div>
            <div className="text-lg font-mono text-green">{project.result}</div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-2 bg-gold/10 border border-gold/30 text-sm text-gold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
