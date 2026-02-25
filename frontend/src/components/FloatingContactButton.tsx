import { useState } from 'react';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Contact Options */}
      {open && (
        <div className="flex flex-col gap-2 items-end">
          <a
            href="mailto:info@datanex.com"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold shadow-gold-md transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'oklch(0.16 0.03 240)',
              color: 'oklch(0.85 0.01 240)',
              border: '1px solid oklch(0.26 0.035 240)',
            }}
          >
            <Mail size={14} style={{ color: 'oklch(0.78 0.15 75)' }} />
            Email Us
          </a>
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold shadow-gold-md transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'oklch(0.16 0.03 240)',
              color: 'oklch(0.85 0.01 240)',
              border: '1px solid oklch(0.26 0.035 240)',
            }}
          >
            <Phone size={14} style={{ color: 'oklch(0.78 0.15 75)' }} />
            Call Us
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-gold-lg transition-all duration-300 hover:scale-110 animate-pulse-gold"
        style={{
          background: 'linear-gradient(135deg, oklch(0.85 0.16 80), oklch(0.70 0.14 70))',
          color: 'oklch(0.12 0.025 240)',
        }}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
