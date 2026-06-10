# Portfolio Website Build Brief — Murali Ponnada
> Give this file + the resume DOCX to Cursor/Claude as your full context. This IS your prompt.

---

## 🧑‍💻 Who I Am

My name is **Murali Venkateswara Gopi Krishna Ponnada** — go by **Murali Ponnada**.
I am a **Software Engineer with ~5 years of experience**, currently based in **Harrison, NJ** (NYC metro area).

My background sits at the intersection of **high-performance trading systems** and **financial engineering** — I build the infrastructure that makes real-time trading work at scale. I have experience in front-office equities derivatives trading, regulatory reporting, research (neuroimaging), and applied ML.

**Contact / Links:**
- Email: gopisai2421@gmail.com
- LinkedIn: linkedin.com/in/pmvgk/
- GitHub: github.com/gopimurali
- Location: Harrison, NJ (open to NYC / Jersey City roles, hybrid or in-person)

---

## 🎯 What I'm Looking For (Career Goal — This Must Come Through in the Portfolio)

I am **actively job hunting** for:
- **Quantitative Developer** (Python/Java, trading systems, risk infrastructure)
- **Senior Software Engineer** — trading platforms, fintech, capital markets
- **Platform/Infrastructure Engineer** — high-throughput, low-latency systems

Target companies: **hedge funds, investment banks, fintech firms, and systematic trading firms** in the NYC/Jersey City area. Think: Goldman Sachs, Morgan Stanley, Two Sigma, Citadel, Jane Street, Bloomberg, Fidelity, JPMorgan, and similar.

**The portfolio must signal: "I am a serious, production-proven engineer who operates at the intersection of software engineering and quantitative finance."** It should NOT look like a generic full-stack web dev portfolio.

---

## 💼 Work Experience (Detailed — Use This for the Experience Section)

### Bank of America (Contract via Collabera) | Software Engineer | Oct 2024 – Present | New York, NY
**Project: RAM EQTRADES — Front Office Equities Derivatives Trading Platform**
- Built the **Astrid Rester API** for real-time trade position data across downstream consumers using parallel processing and caching; handles high-volume requests with sub-second latency, protects P&L and dividend workflows
- Led design and launched a new **Financial Regulatory Reporting flow** within a legacy system — improved data handling for instruments, transactions, and position data with zero SLA breaches
- Developed solutions handling **~1M trades/day with <1% error rate**, leveraging concurrency and Quartz scheduling for sub-second latencies
- **Migrated multiple AMPS servers**, improving latency by 10% and reliability by 12% in critical trading workflows
- Implemented observability via **Grafana, Kibana, and Splunk**, cutting production incidents by 8%
- **Stack:** Java, Python, AMPS, Kafka, Quartz, Elasticsearch, Splunk, Grafana, Kibana, Docker, CI/CD

### Binghamton University | Research Associate | Jul 2024 – Oct 2024 | Binghamton, NY
**Project: Brain Aging Study — Neuroimaging Data Analysis**
- Enhanced MATLAB code to process raw brain scan sequences from 54 subjects into **blood flow heatmaps**
- Surfaced statistically meaningful insights on **neural aging dynamics** across age/demographic segments

### Infosys | Senior Systems Engineer | Dec 2019 – Aug 2022 | Hyderabad, India
**Project: CIRRUS — Middle Office Regulatory Reporting for Bank of America**
- Improved trade processing and end-of-day risk systems on the **QUARTZ platform**; resolved issues with currency conversions, FX trades, and trade record masking
- Enhanced valuations processing: improved **exposure reporting accuracy by 20%**, reduced errors by ~30%, increased transaction reporting accuracy by 10%; resolved issues affecting ~100K daily trades
- Implemented **CFTC, MiFID, HKMA, SEC, ASIC, EMIR** compliance across FX, EQ, IR, and CR asset classes
- Served as **Level 3 (L3) escalation point** for production incidents; traced impact across hardware, network, and service operations

---

## 🚀 Projects (Use These as Portfolio Project Cards)

### 1. Spotted Lanternfly Detection — Cornell University Hackathon
- **What:** Computer vision model built in a **12-hour hackathon** at Cornell University to detect spotted lanternflies and egg masses from consumer drone video feeds
- **How:** YOLOv8 with custom-tuned detection thresholds; iterated rapidly across model variants and reinforcement learning experiments; validated against real-world drone footage
- **Impact:** Coordinated with government officials and researchers across multiple universities; built for practical deployment readiness beyond training distribution
- **Tags:** Python, YOLOv8, Computer Vision, Drone Data, ML

### 2. Blood Bank Management System — Binghamton University
- **What:** Scalable cloud system for blood bank inventory and request management
- **How:** AWS (Lambda, DynamoDB, S3, API Gateway), React/Node.js frontend, role-based access control, automated inventory tracking
- **Impact:** Reduced manual errors in blood request workflows
- **Tags:** AWS, React, Node.js, DynamoDB, Serverless

### 3. Analysis of Health Reddit Data — Binghamton University
- **What:** Data analysis on health discussions from Reddit
- **How:** Python, Matplotlib, MongoDB; sentiment analysis and topic modeling
- **Impact:** Revealed insights into user engagement and sentiment trends across health communities
- **Tags:** Python, NLP, MongoDB, Sentiment Analysis, Topic Modeling

### 4. Healthcare Voice Navigation App — Infosys
- **What:** Voice-assisted navigation system for physically handicapped patients
- **How:** Django/MySQL healthcare application; caregiver proxy interface; accessible design across multiple user personas
- **Impact:** Improved accessibility for patients with physical disabilities
- **Tags:** Django, MySQL, Accessibility, Voice UI

---

## 🎓 Education

**MS in Computer Science** — Binghamton University, SUNY (Thomas J. Watson College of Engineering)
- CGPA: 3.8 / 4.0 | Aug 2022 – May 2024

**BE in Electronics and Communication Engineering** — Chaitanya Bharathi Institute of Technology, Osmania University
- Aug 2015 – May 2019 | Hyderabad, India

---

## 🛠️ Technical Skills (Organize These Into Visual Skill Badges/Tags)

| Category | Skills |
|---|---|
| **Languages** | Python, JavaScript, TypeScript, Java, C++, MATLAB |
| **Frameworks** | Angular, Flask, Django, Node.js, Express.js, React |
| **ML / AI / NLP** | YOLOv8, NLTK, scikit-learn, pandas, numpy, Gensim (Word2Vec, Doc2Vec, TF-IDF) |
| **Trading/Finance Tech** | AMPS, Quartz, Kafka |
| **Databases** | Oracle, MySQL, MongoDB, CassandraDB |
| **Observability** | Grafana, Kibana, Splunk, Elasticsearch |
| **DevOps/Cloud** | Docker, AWS (Lambda, DynamoDB, S3, API Gateway), Git, CI/CD |
| **Concepts** | Distributed Systems, Large-Scale System Design, Microservices, REST APIs, Concurrency, Messaging Systems, Agile |

---

## 📐 Website Architecture (Sections to Build)

Build a **single-page application** with smooth scroll navigation. Sections in order:

1. **Hero** — Name, title ("Software Engineer | Trading Systems & Quantitative Finance"), a one-liner about what I do, CTA buttons: [Download Resume] [View Projects] [Contact]
2. **About** — 2-3 sentence bio, what I do, what I'm targeting. Include a professional photo placeholder (or abstract avatar).
3. **Experience** — Timeline or card layout. Three entries (BofA, Binghamton Research, Infosys). Show company, role, dates, bullet highlights. Use tech tags per role.
4. **Projects** — Card grid. 4 project cards, each with: title, description, tech stack tags, GitHub link placeholder.
5. **Skills** — Grouped visual display of the tech stack table above (not just a flat list — use category groupings with visual treatment).
6. **Education** — Two entries, clean and minimal.
7. **Contact** — Email, LinkedIn, GitHub links. Optional: contact form (can be a mailto form).

---

## 🎨 Design Direction

**Aesthetic:** Professional, modern, dark-mode-first, with a subtle "trading terminal / quant finance" feel. Think: dark backgrounds, clean monospace accents for numbers/tech terms, sharp typography. NOT generic web-dev colorful. NOT flashy animations. Sharp, intelligent, credible.

**Color Palette (suggested):**
- Background: `#0d1117` (near-black, like GitHub dark)
- Surface/cards: `#161b22`
- Primary accent: `#58a6ff` (electric blue — data, precision)
- Secondary accent: `#3fb950` (green — think trading P&L, terminal green)
- Text: `#e6edf3` (near-white)
- Muted text: `#8b949e`

**Typography:**
- Display/headings: **Inter** or **Plus Jakarta Sans** (clean, modern)
- Body: **Inter**
- Code/tech tags/numbers: **JetBrains Mono** or **Fira Code** (monospace for terminal feel)

**Signature design element:** Use a subtle **animated terminal cursor** or a **live trade-ticker-style scrolling tag line** in the hero section to reinforce the trading systems identity. This should feel purposeful, not gimmicky.

**Motion:** Subtle scroll-reveal animations on section entry. No excessive parallax. Reduced-motion respected.

**Responsive:** Fully mobile-responsive. Mobile-first CSS.

---

## ⚙️ Tech Stack for the Build

Use **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. This is the gold standard for 2025 portfolio sites — fast, SEO-friendly, easy to deploy.

- Framework: **Next.js 14** with App Router
- Styling: **Tailwind CSS** + custom CSS variables for theming
- Animations: **Framer Motion** (for scroll reveals, hero entrance)
- Icons: **Lucide React** or **React Icons**
- Fonts: Google Fonts (Inter + JetBrains Mono)
- Deployment: **Vercel** (free tier, one-click deploy)
- No CMS needed — all content hardcoded from this brief

---

## 📁 File / Folder Structure Expected

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout, metadata, fonts
│   ├── page.tsx           # Main single-page export, imports all sections
│   └── globals.css        # CSS variables, base styles
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Navbar.tsx
├── data/
│   └── portfolio.ts       # All content as typed TypeScript constants (name, jobs, projects, skills, etc.)
├── public/
│   └── resume.pdf         # Place the resume PDF here for download
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

All content (job data, project data, skills) MUST be in `data/portfolio.ts` as typed TypeScript — NOT hardcoded inline in JSX. This makes it easy for me to edit content later without touching component code.

---

## 🔍 SEO + Meta

- Page title: `Murali Ponnada | Software Engineer — Trading Systems & Quant Finance`
- Meta description: `Software Engineer with 5+ years building real-time trading platforms at Bank of America. Specializing in high-throughput distributed systems, quantitative finance infrastructure, and regulatory reporting.`
- OG image: auto-generated or simple text card
- `robots.txt` and `sitemap.xml` — include
- Canonical URL: set to `https://muraliponnada.dev` (or whatever domain I end up using — leave as a placeholder)

---

## ✅ Definition of Done

The agent should produce a complete, runnable Next.js project that:
- [ ] Runs with `npm install && npm run dev` with zero errors
- [ ] All 7 sections render correctly on desktop and mobile
- [ ] Resume PDF download works (links to `/public/resume.pdf`)
- [ ] All LinkedIn, GitHub, email links are correct and use the values from this brief
- [ ] No placeholder lorem ipsum text — all content populated from this brief
- [ ] Dark mode only (no light/dark toggle needed)
- [ ] Lighthouse score target: Performance ≥ 90, Accessibility ≥ 95
- [ ] All content is in `data/portfolio.ts`, not hardcoded in components

---

## 🗒️ Notes for the Agent

- Do NOT use a pre-built template or theme. Build from scratch using the stack specified.
- Do NOT add a blog section or CMS.
- Do NOT add unnecessary pages — this is a single-page portfolio.
- The "Download Resume" CTA should link to `/resume.pdf`.
- For the hero section, use a short impactful tagline like: **"Building the infrastructure that moves markets."** or **"5 years shipping trading systems at scale."** — pick the one that reads stronger.
- Use real numbers where available: ~1M trades/day, <1% error rate, 10% latency improvement, ~100K daily trades, 20% accuracy improvement — these are impressive and should appear prominently.
- GitHub and LinkedIn URLs are real: `github.com/gopimurali` and `linkedin.com/in/pmvgk/`
