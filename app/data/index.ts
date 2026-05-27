export const meta = {
  name: "Utkarsh Mittal",
  title: "Software Engineer",
  location: "Brooklyn, NY",
  email: "utkarshm272@gmail.com",
  phone: "917-635-2486",
  github: "https://github.com/Utkarsh272",
  linkedin: "https://www.linkedin.com/in/utkarsh-mittal27/",
  careerStart: new Date(2020, 6, 1), // Jul 2020
};

export const heroTags = [
  { label: "Full-Stack", color: "green" },
  { label: "Distributed Systems", color: "blue" },
  { label: "AI & LLMs", color: "purple" },
  { label: "Platform Engineering", color: "yellow" },
] as const;

export const terminalLines = [
  { type: "cmd" as const, text: "utkarsh@dev:~$ whoami" },
  { type: "out" as const, text: "Utkarsh Mittal  |  Software Engineer  |  NYU '26" },
  { type: "cmd" as const, text: "utkarsh@dev:~$ ls projects/" },
  { type: "out" as const, text: "rag-grounded/   mini-kafka/   crdt-collab/   rate-limiter/" },
  { type: "cmd" as const, text: "utkarsh@dev:~$ cat stack.txt" },
  { type: "out" as const, text: "Go  Python  TypeScript  Java  C#  AWS  Docker  Terraform" },
];

export const stats = [
  { value: 5, suffix: "+ yrs", label: "Industry experience" },
  { value: 500, suffix: "K+", label: "Daily transactions unlocked" },
  { value: 40, suffix: "%", label: "Sev-1 recurrence reduced" },
  { value: 37, suffix: "%", label: "Throughput lift at Dell" },
  { value: 60, suffix: "%", label: "Analyst time saved at Locomex" },
];

export const skills = [
  {
    category: "Languages",
    tags: ["Python", "Go", "TypeScript", "Java", "C#", "SQL", "JavaScript", "HTML/CSS"],
    highlights: ["Python", "Go", "TypeScript"],
  },
  {
    category: "Frameworks",
    tags: ["FastAPI", "Spring Boot", ".NET / Orleans", "Flask", "Django", "Node.js", "React / Redux", "Next.js", "JUnit"],
    highlights: ["FastAPI", "Next.js"],
  },
  {
    category: "Databases & Messaging",
    tags: ["PostgreSQL", "Redis", "RabbitMQ", "MSSQL", "MySQL", "Oracle", "pgvector"],
    highlights: ["PostgreSQL", "Redis"],
  },
  {
    category: "Cloud & Infra",
    tags: ["Docker", "AWS Lambda", "AWS Bedrock / RDS / S3", "GCP", "Terraform", "GitHub Actions", "TravisCI"],
    highlights: ["Docker", "Terraform"],
  },
  {
    category: "AI / LLM",
    tags: ["Anthropic Claude", "Groq", "Prompt Engineering", "RAG", "Jina AI", "GitHub Copilot"],
    highlights: ["Anthropic Claude", "Groq"],
  },
  {
    category: "Practices",
    tags: ["OpenTelemetry", "Microservices", "REST API design", "System Design", "Agile / Scrum", "Code Review"],
    highlights: ["OpenTelemetry"],
  },
];

export const projects = [
  {
    num: "01",
    name: "RAG with Grounded Citations",
    status: "live" as const,
    gradient: "green",
    demo: "https://rag-grounded.vercel.app",
    github: "https://github.com/Utkarsh272/rag-grounded",
    insights: {
      solves:
        "Off-the-shelf RAG systems hallucinate without warning. Users get confident-sounding wrong answers with no way to verify them. This system traces every claim back to an exact source span and quantifies how sure it is.",
      matters:
        "In regulated industries like legal, finance, and healthcare, a wrong answer with a citation is worse than no answer. Grounded retrieval with measurable precision lets companies actually deploy AI on internal documents.",
      works:
        "Hybrid BM25 and vector retrieval fused via RRF, cross-encoder reranking, SOURCE_X citation injection into the LLM prompt, then claim-level confidence scoring via cosine similarity against cited chunks.",
    },
    tags: ["Python", "FastAPI", "Next.js 14", "pgvector", "Jina AI", "Groq Llama 3.3 70B", "Supabase", "Vercel + Render"],
    metrics: [
      { value: 100, suffix: "%", decimals: 0, label: "Recall@5" },
      { value: 92.5, suffix: "%", decimals: 1, label: "Answer accuracy" },
      { value: 100, suffix: "%", decimals: 0, label: "Citation precision" },
      { value: 0, suffix: "%", decimals: 0, label: "Hallucination rate" },
    ],
    target: null,
  },
  {
    num: "02",
    name: "Mini-Kafka",
    status: "building" as const,
    gradient: "blue",
    demo: null,
    github: "https://github.com/Utkarsh272/mini-kafka",
    insights: {
      solves:
        "High-throughput event streaming is critical infrastructure for modern data pipelines, microservice communication, and real-time analytics. Most teams use Kafka as a black box with no visibility into what happens at the storage and replication layer.",
      matters:
        "When Kafka goes wrong at scale, engineers who understand segment files, ISR shrinkage, and high-watermark semantics fix it in hours. Engineers who only know the client API spend days. This project demonstrates that depth.",
      works:
        "Segment files on disk with sparse index files for O(1) seeks, a custom binary TCP wire protocol, ISR replication with high-watermark tracking, and a consumer group coordinator with JoinGroup and SyncGroup state machine.",
    },
    tags: ["Go 1.22", "Custom TCP protocol", "BoltDB", "Next.js + TypeScript", "Docker Compose", "Prometheus + Grafana"],
    metrics: null,
    target: ">100K msg/sec sustained · p99 <15ms · 3-broker cluster with ISR replication · TypeScript dashboard",
  },
  {
    num: "03",
    name: "CRDT Collaborative Document",
    status: "planned" as const,
    gradient: "purple",
    demo: null,
    github: "https://github.com/Utkarsh272/crdt-collab",
    insights: {
      solves:
        "Collaborative software requires multiple users to edit shared state simultaneously without conflicts, lost updates, or stale reads. Traditional locking breaks under network partitions and does not support offline editing.",
      matters:
        "CRDTs power the real-time layer in Notion, Figma, and Linear. Understanding the algorithm well enough to implement a WebSocket sync server and offline-first client is a meaningful signal for product-facing engineering roles.",
      works:
        "Custom WebSocket server with Yjs binary sync protocol, IndexedDB offline persistence on the client, Postgres snapshots every 30 seconds for durability, and cursor presence via the Awareness protocol.",
    },
    tags: ["TypeScript", "Yjs", "Tiptap + ProseMirror", "WebSockets", "Next.js 14", "Neon Postgres", "Fly.io"],
    metrics: null,
    target: null,
  },
  {
    num: "04",
    name: "Distributed Rate Limiter",
    status: "planned" as const,
    gradient: "yellow",
    demo: null,
    github: "https://github.com/Utkarsh272/distributed-rate-limiter",
    insights: {
      solves:
        "Every API needs rate limiting. Most implementations use a naive check-then-set pattern that has race conditions under concurrency: two simultaneous requests can both read under limit and both get through, breaking the contract.",
      matters:
        "Rate limiting is security-critical infrastructure in any multi-tenant SaaS product. Getting the algorithm and atomicity right under load, then proving it with benchmarks and IaC, is the kind of ownership companies look for in senior engineers.",
      works:
        "Three algorithms as atomic Redis Lua scripts with zero race conditions, per-tenant config with 30-second in-memory cache and Redis pub/sub invalidation, Terraform-deployed to Fly.io, and load-tested to 8K+ RPS with k6.",
    },
    tags: ["Go 1.22", "Redis Lua", "Terraform", "k6", "Fly.io + Upstash", "OpenTelemetry", "Prometheus + Grafana"],
    metrics: null,
    target: ">8K RPS · p50 <2ms · p99 <20ms · zero race conditions under concurrency",
  },
];

export const experience = [
  {
    id: "nokia",
    role: "Software Development Co-op",
    company: "Nokia",
    location: "Murray Hill, NJ",
    period: "Jan 2026 – May 2026",
    bullets: [
      "Shipped a Bandwidth Scheduler for Nokia WaveSuite in Spring Boot, React/Redux, and Oracle DB, replacing a manual reservation workflow for advance allocation of optical network capacity.",
      "Modeled real-world optical constraints (path conflicts, wavelength contention, 1+1 protection rules) into a normalized data model and REST API, eliminating an entire class of double-booking errors caught in testing.",
      "Converted tribal domain rules from network engineers into deterministic backend validations and contract tests, unblocking sign-off from 5 stakeholder teams.",
    ],
    collapse: 0,
  },
  {
    id: "locomex",
    role: "Software Developer Intern",
    company: "Locomex Inc.",
    location: "New York, NY",
    period: "Jun 2025 – Dec 2025",
    bullets: [
      "Built AWS Lambda + Bedrock (Anthropic Claude) pipelines that auto-generate ESG feedback across E, S, and G pillars, cutting manual analyst review time by 60%.",
      "Integrated Lambda with PostgreSQL on AWS RDS to serve structured JSON metric and sector-benchmark responses in under 1.5s, sustaining 100+ daily dashboard sessions.",
      "Designed SASB/IFRS-aligned prompt chains achieving 100% ESG KPI coverage across onboarded pilot companies, replacing ad-hoc manual scoring.",
    ],
    collapse: 0,
  },
  {
    id: "dell2",
    role: "Software Engineer II",
    company: "Dell Technologies",
    location: "Bangalore, India",
    period: "Oct 2021 – Aug 2024",
    bullets: [
      "Architected backend services for a distributed inventory platform, accelerating feature delivery from quarterly to bi-weekly across interconnected microservices.",
      "Owned RCA on 15+ Sev-1 production incidents and shipped durable fixes, reducing recurring outages by 40% in a high-reliability environment.",
      "Re-engineered hot paths in C#/.NET microservices, lifting throughput by 37% and unlocking 500K+ additional daily transactions without horizontal scale-out.",
      "Introduced Microsoft Orleans-based distributed caching in front of MSSQL, improving response time on critical endpoints under peak load by ~70%.",
      "Standardized code-review checklists, test gates, and design-doc templates. Pre-release defect detection rose 25% and cross-team onboarding ramp shortened by 32%.",
    ],
    collapse: 2,
  },
  {
    id: "dell1",
    role: "Software Engineer I",
    company: "Dell Technologies",
    location: "Bangalore, India",
    period: "Jul 2020 – Oct 2021",
    bullets: [
      "Migrated 15+ legacy modules to .NET microservices and React frontends, cutting latency by 22% and lifting deployment frequency by 60%.",
      "Implemented RabbitMQ-based async event flows that decoupled services and eliminated a recurring backpressure failure pattern under load.",
      "Shipped modular React micro-frontends with a shared component library, enabling independent biweekly deploys across 5-8 applications with lower release risk.",
      "Improved end-to-end responsiveness of internal tools by 23% via SQL query tuning, REST batching, and front-end render optimization.",
    ],
    collapse: 2,
  },
];
