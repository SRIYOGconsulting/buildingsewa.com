export type BlogReference = {
  label: string;
  href: string;
};

export type BlogMeta = {
  serviceSlug?: string;
  tags: string[];
  references?: BlogReference[];
};

const DUDBC_BUILDING_CODES =
  "https://dudbc.gov.np/pages/building-code/";

const KMC_EBPS =
  "https://ebps.kathmandu.gov.np/";

const KMC_PERMIT_PROCESS =
  "https://ebps.kathmandu.gov.np/Hom/BuildingPermit";

export const blogMeta: Record<string, BlogMeta> = {
  "choosing-the-right-contractor": {
    serviceSlug: "civil-construction",
    tags: [
      "contractor",
      "hiring",
      "construction",
      "contract",
      "BOQ",
    ],
  },

  "interior-finishing-trends": {
    serviceSlug: "interior-designing",
    tags: [
      "interior",
      "design",
      "finishing",
      "kitchen",
      "flooring",
    ],
  },

  "post-construction-cleanup-tips": {
    serviceSlug: "annual-home-maintenance",
    tags: [
      "cleanup",
      "handover",
      "maintenance",
      "move-in",
    ],
  },

  "budgeting-your-construction-project": {
    serviceSlug: "project-management",
    tags: [
      "budget",
      "cost",
      "BOQ",
      "construction",
      "planning",
    ],
  },

  "understanding-building-permits": {
    serviceSlug: "building-approval-documentation",
    tags: [
      "permit",
      "approval",
      "municipality",
      "legal",
      "naksha",
    ],
    references: [
      {
        label: "DUDBC — National Building Codes",
        href: DUDBC_BUILDING_CODES,
      },
      {
        label: "Kathmandu eBPS",
        href: KMC_EBPS,
      },
      {
        label: "Kathmandu Municipal Building Permit Process",
        href: KMC_PERMIT_PROCESS,
      },
    ],
  },

  "sustainable-building-materials": {
    serviceSlug: "materials-supply",
    tags: [
      "materials",
      "sustainable",
      "AAC",
      "brick",
      "bamboo",
    ],
    references: [
      {
        label: "DUDBC — National Building Codes",
        href: DUDBC_BUILDING_CODES,
      },
    ],
  },

  "how-to-get-your-naksha-passed": {
    serviceSlug: "building-approval-documentation",
    tags: [
      "naksha",
      "permit",
      "approval",
      "municipality",
      "documents",
    ],
    references: [
      {
        label: "DUDBC — National Building Codes",
        href: DUDBC_BUILDING_CODES,
      },
      {
        label: "Kathmandu eBPS",
        href: KMC_EBPS,
      },
      {
        label: "Kathmandu Municipal Building Permit Process",
        href: KMC_PERMIT_PROCESS,
      },
    ],
  },

  "construction-cost-per-square-foot-nepal": {
    serviceSlug: "project-management",
    tags: [
      "construction cost",
      "square foot",
      "BOQ",
      "budget",
    ],
  },

  "checking-land-before-you-build": {
    serviceSlug: "land-survey-site-inspection",
    tags: [
      "land",
      "kitta",
      "site",
      "survey",
      "road access",
    ],
  },

  "earthquake-resistant-house-nepal": {
    serviceSlug: "structural-engineering",
    tags: [
      "earthquake",
      "structural",
      "RCC",
      "safety",
      "building code",
    ],
    references: [
      {
        label: "DUDBC — National Building Codes",
        href: DUDBC_BUILDING_CODES,
      },
    ],
  },

  "how-long-does-it-take-to-build-a-house": {
    serviceSlug: "project-management",
    tags: [
      "timeline",
      "planning",
      "construction",
      "project management",
    ],
  },

  "grey-structure-vs-turnkey": {
    serviceSlug: "civil-construction",
    tags: [
      "grey structure",
      "turnkey",
      "construction",
      "contractor",
    ],
  },

  "building-a-house-in-nepal-from-abroad": {
    serviceSlug: "project-management",
    tags: [
      "NRN",
      "abroad",
      "remote construction",
      "supervision",
    ],
  },

  "choosing-cement-rebar-and-bricks": {
    serviceSlug: "materials-supply",
    tags: [
      "cement",
      "rebar",
      "bricks",
      "materials",
      "quality",
    ],
    references: [
      {
        label: "DUDBC — National Building Codes",
        href: DUDBC_BUILDING_CODES,
      },
    ],
  },

  "house-completion-certificate-nepal": {
    serviceSlug: "building-approval-documentation",
    tags: [
      "completion certificate",
      "permit",
      "approval",
      "handover",
    ],
    references: [
      {
        label: "Kathmandu eBPS",
        href: KMC_EBPS,
      },
      {
        label: "Kathmandu Municipal Building Permit Process",
        href: KMC_PERMIT_PROCESS,
      },
    ],
  },
};