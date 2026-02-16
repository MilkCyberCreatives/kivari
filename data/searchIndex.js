export const searchIndex = [
  {
    id: "home",
    title: "KIVARI Construction Home",
    category: "Page",
    path: "/",
    excerpt:
      "KIVARI delivers residential construction, civil engineering, infrastructure, and turnkey project execution across Midrand, Gauteng, and South Africa.",
    keywords: [
      "construction company Midrand",
      "building contractor Gauteng",
      "construction South Africa",
      "home builder Midrand",
      "civil works contractor",
      "infrastructure projects",
      "turnkey construction",
      "project delivery partner",
      "business construction solutions",
      "property development support",
    ],
  },
  {
    id: "about",
    title: "About KIVARI",
    category: "Page",
    path: "/about",
    excerpt:
      "Learn about KIVARI's mission, vision, objectives, and experienced team delivering safe, compliant, and high-quality construction projects.",
    keywords: [
      "construction leadership team",
      "construction compliance company",
      "trusted builders South Africa",
      "experienced construction professionals",
      "commercial and residential experts",
      "construction project partner",
      "built environment specialists",
    ],
  },
  {
    id: "contact",
    title: "Contact KIVARI Construction",
    category: "Page",
    path: "/contact",
    excerpt:
      "Request a consultation, quote, or callback from KIVARI for residential, civil, maintenance, or infrastructure construction services.",
    keywords: [
      "construction quote Midrand",
      "request construction consultation",
      "construction contact Gauteng",
      "call construction company",
      "building services enquiry",
      "civil construction tenders support",
    ],
  },
  {
    id: "service-residential",
    title: "Residential Building Construction",
    category: "Service",
    path: "/services#residential-building-construction",
    excerpt:
      "Full residential construction services for houses, apartments, and estate developments from concept to completion.",
    keywords: [
      "new home construction",
      "residential contractor Midrand",
      "house building company Gauteng",
      "apartment construction South Africa",
      "estate development builder",
      "property investment builds",
      "indirect business opportunity",
    ],
  },
  {
    id: "service-civil",
    title: "Civil Engineering and Infrastructure",
    category: "Service",
    path: "/services#civil-engineering-and-infrastructure",
    excerpt:
      "Civil engineering works including roads, stormwater systems, drainage, and structural foundations.",
    keywords: [
      "civil engineering contractor",
      "road construction Midrand",
      "stormwater and drainage works",
      "infrastructure contractor Gauteng",
      "public works support",
      "industrial site development",
    ],
  },
  {
    id: "service-earthworks",
    title: "Site Preparation and Earthworks",
    category: "Service",
    path: "/services#site-preparation-and-earthworks",
    excerpt:
      "Site clearing, excavation, trenching, levelling, and compaction to prepare land for safe development.",
    keywords: [
      "earthworks contractor",
      "site clearing services",
      "excavation and trenching",
      "land preparation Gauteng",
      "construction enabling works",
      "developer site readiness",
    ],
  },
  {
    id: "service-renovations",
    title: "Renovations and Extensions",
    category: "Service",
    path: "/services#renovations-and-extensions",
    excerpt:
      "Residential and commercial renovations, upgrades, and structural extensions built to current standards.",
    keywords: [
      "home renovations Midrand",
      "office refurbishment",
      "building extensions",
      "property upgrade contractor",
      "tenant improvement works",
      "facility modernization",
    ],
  },
  {
    id: "service-finishes",
    title: "Painting, Plastering and Finishes",
    category: "Service",
    path: "/services#painting-plastering-and-finishes",
    excerpt:
      "Interior and exterior painting, plastering, and finishing services for clean, premium construction outcomes.",
    keywords: [
      "painting contractor Gauteng",
      "commercial painting",
      "residential painting services",
      "plaster and finish work",
      "fit-out finishing team",
      "property value improvement",
    ],
  },
  {
    id: "service-waterproofing",
    title: "Roof Maintenance and Waterproofing",
    category: "Service",
    path: "/services#roof-maintenance-and-waterproofing",
    excerpt:
      "Roof maintenance, leak repairs, and waterproofing services to protect buildings and reduce long-term risk.",
    keywords: [
      "roof waterproofing Midrand",
      "roof leak repair",
      "building envelope protection",
      "preventive maintenance contractor",
      "asset life extension services",
      "facility operations support",
    ],
  },
  {
    id: "service-scanning",
    title: "Scanning and Coring",
    category: "Service",
    path: "/services#scanning-and-coring",
    excerpt:
      "Concrete scanning and coring to identify embedded services before drilling and structural modifications.",
    keywords: [
      "concrete scanning services",
      "rebar detection",
      "safe coring contractor",
      "non-destructive testing support",
      "retrofit risk reduction",
      "commercial fit-out enabling",
    ],
  },
  {
    id: "service-scaffolding",
    title: "Scaffolding and Safety Systems",
    category: "Service",
    path: "/services#scaffolding-and-safety-systems",
    excerpt:
      "Compliant scaffolding and site protection systems for safe access, execution, and regulatory compliance.",
    keywords: [
      "scaffolding contractor",
      "construction safety systems",
      "temporary access solutions",
      "site compliance services",
      "industrial maintenance support",
      "shutdown project support",
    ],
  },
  {
    id: "service-project-planning",
    title: "Project Planning and Site Supervision",
    category: "Service",
    path: "/services#project-planning-and-site-supervision",
    excerpt:
      "End-to-end planning, supervision, and quality control to keep projects on schedule and on budget.",
    keywords: [
      "construction project management",
      "site supervision services",
      "construction scheduling",
      "budget and cost control",
      "developer project partner",
      "program delivery support",
    ],
  },
  {
    id: "service-maintenance",
    title: "General Maintenance and Repairs",
    category: "Service",
    path: "/services#general-maintenance-and-repairs",
    excerpt:
      "Ongoing building maintenance and repair services covering structural, plumbing, and electrical support.",
    keywords: [
      "facility maintenance contractor",
      "building repairs Midrand",
      "commercial property maintenance",
      "planned maintenance services",
      "operations and maintenance partner",
      "asset management support",
    ],
  },
];

export function searchContent(query) {
  const normalizedQuery = (query || "").toLowerCase().trim();
  if (!normalizedQuery) return [];

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return searchIndex
    .map((item) => {
      const haystack = [item.title, item.category, item.excerpt, ...(item.keywords || [])]
        .join(" ")
        .toLowerCase();

      const score = terms.reduce((total, term) => {
        if (haystack.includes(term)) return total + 1;
        return total;
      }, 0);

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
