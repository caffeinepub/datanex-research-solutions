export default function DataPipelineSVG() {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      className="pipeline-svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
          <stop offset="50%" stopColor="#C9A84C" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background grid */}
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(201,168,76,0.05)" strokeWidth="0.5" />
      </pattern>
      <rect width="400" height="320" fill="url(#grid)" />

      {/* Node: Web Source */}
      <g className="pipeline-node" style={{ animation: 'nodePulse 3s ease-in-out infinite' }}>
        <rect x="20" y="130" width="70" height="40" rx="4" fill="#0C1B30" stroke="#C9A84C" strokeWidth="1.5" />
        <text x="55" y="147" textAnchor="middle" fill="#C9A84C" fontSize="7" fontFamily="JetBrains Mono, monospace">WEB</text>
        <text x="55" y="158" textAnchor="middle" fill="#7A8FA8" fontSize="6" fontFamily="JetBrains Mono, monospace">SOURCE</text>
      </g>

      {/* Arrow 1 */}
      <line x1="90" y1="150" x2="130" y2="150" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="130,146 138,150 130,154" fill="#C9A84C" />

      {/* Node: Scraper */}
      <g className="pipeline-node" style={{ animation: 'nodePulse 3s ease-in-out 0.5s infinite' }}>
        <rect x="138" y="120" width="70" height="60" rx="4" fill="#0C1B30" stroke="#C9A84C" strokeWidth="1.5" />
        <text x="173" y="142" textAnchor="middle" fill="#C9A84C" fontSize="7" fontFamily="JetBrains Mono, monospace">SCRAPER</text>
        <text x="173" y="153" textAnchor="middle" fill="#2ECC71" fontSize="6" fontFamily="JetBrains Mono, monospace">Selenium</text>
        <text x="173" y="163" textAnchor="middle" fill="#7A8FA8" fontSize="6" fontFamily="JetBrains Mono, monospace">BS4</text>
        <circle cx="173" cy="172" r="3" fill="#2ECC71">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Arrow 2 */}
      <line x1="208" y1="150" x2="248" y2="150" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="248,146 256,150 248,154" fill="#C9A84C" />

      {/* Node: Processor */}
      <g className="pipeline-node" style={{ animation: 'nodePulse 3s ease-in-out 1s infinite' }}>
        <rect x="256" y="120" width="70" height="60" rx="4" fill="#0C1B30" stroke="#C9A84C" strokeWidth="1.5" />
        <text x="291" y="142" textAnchor="middle" fill="#C9A84C" fontSize="7" fontFamily="JetBrains Mono, monospace">PROCESS</text>
        <text x="291" y="153" textAnchor="middle" fill="#E8C97A" fontSize="6" fontFamily="JetBrains Mono, monospace">Pandas</text>
        <text x="291" y="163" textAnchor="middle" fill="#7A8FA8" fontSize="6" fontFamily="JetBrains Mono, monospace">NumPy</text>
        <circle cx="291" cy="172" r="3" fill="#E8C97A">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Arrow 3 */}
      <line x1="326" y1="150" x2="366" y2="150" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="366,146 374,150 366,154" fill="#C9A84C" />

      {/* Node: Output */}
      <g className="pipeline-node" style={{ animation: 'nodePulse 3s ease-in-out 1.5s infinite' }}>
        <rect x="374" y="130" width="20" height="40" rx="4" fill="#C9A84C" />
        <text x="384" y="148" textAnchor="middle" fill="#060F1E" fontSize="6" fontFamily="JetBrains Mono, monospace" transform="rotate(-90, 384, 150)">OUT</text>
      </g>

      {/* Data flow particles */}
      <circle r="3" fill="#C9A84C" opacity="0.8">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 90,150 L 370,150" />
      </circle>
      <circle r="2" fill="#2ECC71" opacity="0.6">
        <animateMotion dur="2s" begin="0.7s" repeatCount="indefinite" path="M 90,150 L 370,150" />
      </circle>
      <circle r="2" fill="#E8C97A" opacity="0.6">
        <animateMotion dur="2s" begin="1.4s" repeatCount="indefinite" path="M 90,150 L 370,150" />
      </circle>

      {/* Bottom labels */}
      <text x="55" y="185" textAnchor="middle" fill="#4A6080" fontSize="6" fontFamily="JetBrains Mono, monospace">HTML/JS</text>
      <text x="173" y="195" textAnchor="middle" fill="#4A6080" fontSize="6" fontFamily="JetBrains Mono, monospace">Extract</text>
      <text x="291" y="195" textAnchor="middle" fill="#4A6080" fontSize="6" fontFamily="JetBrains Mono, monospace">Transform</text>
      <text x="384" y="185" textAnchor="middle" fill="#4A6080" fontSize="6" fontFamily="JetBrains Mono, monospace">CSV</text>

      {/* Top decorative code lines */}
      <text x="20" y="50" fill="#4A90D9" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.6">
        <tspan>import scrapy, pandas as pd</tspan>
      </text>
      <text x="20" y="62" fill="#C9A84C" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.6">
        <tspan>from selenium import webdriver</tspan>
      </text>
      <text x="20" y="74" fill="#2ECC71" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.6">
        <tspan># 2.4M+ records extracted ✓</tspan>
      </text>
      <text x="20" y="86" fill="#7A8FA8" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.6">
        <tspan>df.to_csv('output.csv', index=False)</tspan>
      </text>

      {/* Bottom decorative */}
      <text x="20" y="240" fill="#4A90D9" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.5">
        <tspan>accuracy = 99.2%  # validated ✓</tspan>
      </text>
      <text x="20" y="252" fill="#2ECC71" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.5">
        <tspan>status: RUNNING | Founded: 2023</tspan>
      </text>
      <text x="20" y="264" fill="#C9A84C" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.5">
        <tspan>experience: 3+ years | projects: 60+</tspan>
      </text>
    </svg>
  );
}
