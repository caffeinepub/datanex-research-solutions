# Specification

## Summary
**Goal:** Full rebuild of the DataNex Research Solutions website with updated branding details, several new interactive sections, enhanced existing sections, and backend contact form storage.

**Planned changes:**
- Update all experience references to "3+ years" and founding year to "2023" site-wide (hero badge, about section, hero stat panel, footer, meta descriptions)
- Rebuild Hero section with animated SVG data-pipeline motif, typewriter effect cycling through specialties, retaining particle canvas, stats panel, ticker, and scroll hint
- Add "Live Data Feed" marquee/ticker strip between Hero and About sections showing animated mock data rows (Source, Records, Status, Accuracy) in monospace/gold-green terminal style
- Redesign About section with a profile card (animated gold ring avatar, name "Jay Gohil", title, founding badge, Upwork/Fiverr/LinkedIn platform badges, 99.2% accuracy deco card)
- Add "Data Scope Estimator" interactive tool section between Services and Projects: dropdown for website type, volume slider (1K–1M), output format selector, frequency selector, with dynamic delivery timeline and complexity badge, plus CTA linking to contact
- Enhance Projects section with filter tab bar (All / E-commerce / B2B Research / Lead Gen / Automation), smooth filtering transitions, and two new project cards (Real Estate Listing Intelligence, News & Media Sentiment Dataset)
- Add "Client Testimonials" carousel section (4+ cards with name, company, flag, stars, quote, metric) with auto-advance every 5s, prev/next arrows, and dot indicators
- Add "Pricing & Packages" section after Testimonials with three tiered cards (Starter $49, Professional $149 recommended, Enterprise Custom), feature lists, CTA buttons, and USD disclaimer note
- Add animated "Terminal / Code Window" component in Technologies section with macOS-style title bar, self-typing mock Python scraping script, and syntax highlighting in gold/slate/green
- Add sticky floating "Get a Free Quote" pill button (gold background, navy text) that appears after 300px scroll and links to contact section
- Update contact form to call Motoko backend `submitContactMessage` (name, email, company, budget, service, message) stored in a stable array; expose `getMessages` query; show success/error toast and reset form on submission
- Update Counter Strip values: Records Scraped 2.4M+, Projects Delivered 60+, Data Accuracy Rate 99.2%, Industries Served 7+; ensure scroll-triggered counter animations work
- Update footer copyright to "© 2023–2026 DataNex Research Solutions · Jay Gohil · All Rights Reserved" with "Founded 2023" badge in brand column; verify all nav anchor links
- Ensure full mobile responsiveness (375px, 768px, 1200px) across all new and existing sections using Tailwind responsive prefixes

**User-visible outcome:** Visitors see a visually striking, fully responsive DataNex website with correct branding (3+ years, founded 2023), new interactive sections (estimator tool, testimonials carousel, pricing packages, live data feed ticker, animated terminal), enhanced projects with filtering, a persistent "Get a Free Quote" button, and a contact form that stores submissions in the backend.
