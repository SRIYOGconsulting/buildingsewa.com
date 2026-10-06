export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "steps";
      items: {
        title: string;
        text: string;
      }[];
    }
  | {
      type: "tip";
      title?: string;
      text: string;
    }
  | {
      type: "warning";
      title?: string;
      text: string;
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    };

export type BlogSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type BlogContent = {
  summary: string[];
  sections: BlogSection[];
  checklist?: {
    title: string;
    items: string[];
  };
  faqs: {
    q: string;
    a: string;
  }[];
};

export const blogContent: Record<string, BlogContent> = {

  "choosing-the-right-contractor": {
    summary: [
      "Never choose a contractor on the lowest price alone.",
      "Visit at least two finished projects and speak to the owners.",
      "Get a written contract with drawings, material specs, timeline and payment milestones.",
      "Pay for completed work, not promises.",
    ],
    sections: [
      {
        heading: "Why this choice matters more than anything else",
        blocks: [
          {
            type: "p",
            text: "A house is usually the biggest purchase of a family's life. The contractor decides the quality of concrete, the amount of steel that actually goes into your columns, and whether the project finishes on time. A weak choice here cannot be fixed later without breaking walls and spending double.",
          },
        ],
      },
      {
        heading: "What to verify before you meet",
        blocks: [
          {
            type: "list",
            items: [
              "Business registration: ask for company registration and PAN/VAT details so you know you are dealing with a real, traceable business.",
              "Technical team: is there a registered civil engineer (Nepal Engineering Council) supervising, or only a foreman?",
              "Past work: ask for addresses of 2-3 completed and 1 ongoing project. Visit them and speak to the owners, not just the contractor.",
              "Reputation: ask neighbours, ward offices and local material suppliers what they know about the firm.",
            ],
          },
          {
            type: "tip",
            title: "Ask the ongoing-site question",
            text: "A finished house always looks good. An ongoing site shows the truth: is the site clean, are bars tied properly, is concrete being cured with water, are workers using basic safety gear?",
          },
        ],
      },
      {
        heading: "How to compare quotes properly",
        blocks: [
          {
            type: "p",
            text: "Two quotes are only comparable if they are based on the same drawings and the same material specifications. Ask every contractor to quote from the same set of drawings and to list brands and grades of cement, rebar, bricks, tiles, paint and fittings.",
          },
          {
            type: "warning",
            title: "The very cheap quote",
            text: "If one quote is far lower than the others, something has been left out: thinner steel, weaker concrete mix, missing items, or extra charges that will appear later.",
          },
        ],
      },
      {
        heading: "What your contract must contain",
        blocks: [
          {
            type: "list",
            items: [
              "Full scope of work with approved drawings attached",
              "Material brands, grades and quantities (a BOQ, or bill of quantities)",
              "Start date, completion date and a penalty or review process for delays",
              "Payment schedule linked to finished stages",
              "How changes and extra work will be priced and approved in writing",
              "Defect liability period, meaning who fixes leaks and cracks after handover and for how long",
              "Who pays for labour insurance, water, electricity and site security",
            ],
          },
        ],
      },
      {
        heading: "Example of a safe payment structure",
        blocks: [
          {
            type: "table",
            headers: ["Stage", "Typical share of payment"],
            rows: [
              ["Signing / mobilisation", "5-10%"],
              ["Foundation complete", "15-20%"],
              ["Each slab completed", "15-20% each"],
              ["Brickwork and plaster", "15-20%"],
              ["Finishing", "15-20%"],
              ["Final handover after inspection", "5-10% (held back)"],
            ],
          },
          {
            type: "p",
            text: "These shares are only an example. The important rule is that you always hold back a final portion until everything is inspected and working.",
          },
        ],
      },
    ],
    checklist: {
      title: "Contractor checklist",
      items: [
        "Registered business with PAN/VAT",
        "Visited two finished projects and one ongoing site",
        "Same drawings and specs used for all quotes",
        "Written contract signed by both sides",
        "Payments tied to stages, final amount held back",
        "Defect liability period agreed in writing",
      ],
    },
    faqs: [
      {
        q: "Should I hire a contractor company or an individual mistri?",
        a: "An individual mistri can work for small repairs, but for a full house a registered company with an engineer gives you accountability, a written contract and a team that can handle drawings, approvals and supervision.",
      },
      {
        q: "How much advance is reasonable?",
        a: "Keep the advance small, roughly 5-10%, and enough only to start mobilisation. Large advances remove your leverage if the work slows down.",
      },
      {
        q: "What if I want to change the design in the middle?",
        a: "Changes are normal, but each one should be priced and approved in writing before the work is done. Verbal changes are the biggest source of disputes.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "interior-finishing-trends": {
    summary: [
      "Warm wood tones, clean lines and good lighting are the most popular choices.",
      "Choose finishes that suit Nepal's dust, humidity and cold, not just what looks good in photos.",
      "Plan interiors before the structure is finished so wiring points and niches are right.",
    ],
    sections: [
      {
        heading: "Styles homeowners are choosing",
        blocks: [
          {
            type: "list",
            items: [
              "Warm minimalism: neutral walls with wooden textures, few decorative items and lots of natural light.",
              "Wood and stone accents: feature walls, staircase railings and entrance doors using timber or natural stone.",
              "Modern Newari touches: carved window frames or traditional patterns used in one or two places, not everywhere.",
              "False ceilings with cove lighting: gypsum or similar ceilings that hide wiring and give soft, indirect light.",
              "Large-format tiles: fewer joints, easier cleaning and a more spacious look.",
              "Modular kitchens: built-in storage, chimney and a clear work triangle between sink, stove and fridge.",
              "Built-in storage: wardrobes, shoe racks and study niches that use wall space instead of floor space.",
            ],
          },
        ],
      },
      {
        heading: "Choose for the climate, not only for looks",
        blocks: [
          {
            type: "table",
            headers: ["Area", "What to think about"],
            rows: [
              [
                "Kathmandu Valley and hills",
                "Cold winters: warm flooring, curtains and good window sealing. Dust: easy-to-clean surfaces.",
              ],
              [
                "Terai",
                "Heat and humidity: light colours, ventilation, moisture-resistant paints and cupboards.",
              ],
              [
                "Bathrooms and kitchens",
                "Anti-skid tiles, waterproofing and moisture-resistant materials.",
              ],
            ],
          },
          {
            type: "tip",
            title: "Fix electrical points early",
            text: "Decide where beds, TV, sofa, kitchen appliances and AC will go before wiring is done. Adding sockets after plaster means cutting walls.",
          },
        ],
      },
      {
        heading: "Where to spend and where to save",
        blocks: [
          {
            type: "list",
            items: [
              "Spend on: waterproofing, electrical wiring, plumbing fittings, kitchen and bathroom quality, and flooring in high-traffic areas.",
              "Save on: decorative items, furniture (you can buy later), and expensive wall coverings in low-use rooms.",
            ],
          },
          {
            type: "warning",
            title: "Common mistake",
            text: "Copying a photo without checking size and light. A dark wall colour that looks stylish in a large room can make a small Nepali flat feel cramped.",
          },
        ],
      },
    ],
    checklist: {
      title: "Before you finalise interiors",
      items: [
        "Furniture layout marked on the floor plan",
        "Electrical and plumbing points confirmed",
        "Samples of tiles, paint and wood seen in daylight",
        "Waterproofing plan for bathrooms, kitchen and roof",
        "Budget set aside for finishing (it often costs more than expected)",
      ],
    },
    faqs: [
      {
        q: "Should I plan interiors before construction starts?",
        a: "Yes, at least the basic layout. Kitchen positions, wardrobes, niches and lighting decide where pipes and wires go, and changing them later is costly.",
      },
      {
        q: "Is a false ceiling worth it?",
        a: "It hides wires and allows lighting design, but it costs money and needs maintenance. It is best for living rooms and bedrooms, and is often skipped in service areas.",
      },
      {
        q: "Which flooring lasts longest?",
        a: "Good-quality vitrified tiles and natural stone are durable for daily use. Wood looks warm but needs more care against moisture and termites.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "post-construction-cleanup-tips": {
    summary: [
      "A new house is never move-in ready straight after painting: it needs deep cleaning and a snag check.",
      "Inspect first, clean second, so you do not clean the same area twice.",
      "Allow fresh paint and plaster to dry and air out before living inside.",
    ],
    sections: [
      {
        heading: "Do a snag inspection before cleaning",
        blocks: [
          {
            type: "p",
            text: "A snag list is a list of small defects, such as chipped tiles, loose sockets, leaking taps or paint marks, that the contractor must fix before final payment. Do this walk-through first so repairs do not create dust after you clean.",
          },
          {
            type: "list",
            items: [
              "Open and close every door and window",
              "Test all switches, sockets, fans and lights",
              "Run every tap and flush every toilet, then check for leaks",
              "Check tiles for hollow sound (tap gently) and cracks",
              "Look at ceilings and wall corners for damp patches",
            ],
          },
        ],
      },
      {
        heading: "The cleaning process, step by step",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Remove debris and leftover material",
                text: "Clear bricks, sand, bags, wood pieces and packaging from rooms, terrace and around the house.",
              },
              {
                title: "Dry dusting from top to bottom",
                text: "Start with ceilings and fans, then walls, windows and finally floors so dust falls downward and is cleaned last.",
              },
              {
                title: "Remove paint and cement stains",
                text: "Use a soft scraper on glass and tiles. Avoid hard scraping on polished surfaces, which can scratch them.",
              },
              {
                title: "Wash floors and tiles",
                text: "Mop with mild cleaner. Clean tile grout lines with a soft brush to remove cement residue.",
              },
              {
                title: "Deep clean kitchen and bathrooms",
                text: "Wash fixtures, remove adhesive from sanitary ware, and flush drains to clear construction dust.",
              },
              {
                title: "Clean water tanks and pipes",
                text: "Wash the overhead tank and let taps run for a while before you drink or cook with the water.",
              },
            ],
          },
        ],
      },
      {
        heading: "Before you move in",
        blocks: [
          {
            type: "list",
            items: [
              "Keep windows open for several days so paint smell and moisture reduce.",
              "Check the roof and terrace for waterlogging after rain.",
              "Keep manuals, warranties and the electrical and plumbing layout drawings in one folder.",
              "Plan your griha pravesh date only after major work and cleaning are finished.",
            ],
          },
          {
            type: "tip",
            title: "Consider professional cleaning",
            text: "Fine construction dust gets into corners and cupboards. A professional post-construction cleaning team has the tools to clear it faster than family members can.",
          },
        ],
      },
    ],
    checklist: {
      title: "Move-in readiness checklist",
      items: [
        "Snag list completed and fixed",
        "Debris removed inside and outside",
        "Floors, windows and fixtures cleaned",
        "Water tank cleaned and water tested",
        "Rooms ventilated for several days",
        "Final payment made only after sign-off",
      ],
    },
    faqs: [
      {
        q: "How long after painting can we move in?",
        a: "Ventilate for several days at least. Fresh paint and plaster hold moisture and fumes, and rushing in can cause headaches, damp smell and peeling.",
      },
      {
        q: "Who is responsible for cleaning, the contractor or me?",
        a: "It should be written in the contract. Many contractors include basic debris removal, while deep cleaning is often separate. Agree on it before work begins.",
      },
      {
        q: "What if I find defects after moving in?",
        a: "Report them in writing within the defect liability period in your contract. This is why a contract with such a period is important.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "budgeting-your-construction-project": {
    summary: [
      "Structure usually takes the biggest share, but finishing is where budgets often blow up.",
      "Keep 10-15% aside as a contingency fund.",
      "Count non-construction costs too: approvals, soil test, boundary wall, septic tank and connections.",
    ],
    sections: [
      {
        heading: "Where the money actually goes",
        blocks: [
          {
            type: "p",
            text: "Every project is different, but the table below gives a rough idea of how a typical residential budget is spread. Use it as a starting point and ask your contractor or engineer for a proper BOQ.",
          },
          {
            type: "table",
            headers: ["Item", "Rough share of budget"],
            rows: [
              ["Structure (foundation, columns, slabs, walls)", "40-50%"],
              [
                "Finishing (plaster, paint, flooring, doors, windows)",
                "25-35%",
              ],
              ["Electrical and plumbing", "10-15%"],
              ["Design, approval and supervision", "3-6%"],
              ["Contingency", "10-15%"],
            ],
          },
        ],
      },
      {
        heading: "Costs many people forget",
        blocks: [
          {
            type: "list",
            items: [
              "Naksha drawing, structural design and municipality fees",
              "Soil testing and land levelling",
              "Boundary wall and gate",
              "Septic tank or sewer connection, and underground water tank",
              "Electricity, water and internet connections",
              "Rent for the place you live in while the house is being built",
              "Furniture, curtains, appliances and shifting",
            ],
          },
          {
            type: "warning",
            title: "Prices change",
            text: "Cement, steel and labour prices move during a project. Ask how price changes will be handled in your contract so you are not surprised halfway through.",
          },
        ],
      },
      {
        heading: "How to plan your budget step by step",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Decide your total limit",
                text: "Include your savings, loan amount and any family support. Be honest about what you can spend without stress.",
              },
              {
                title: "Split it by stage",
                text: "Divide the total into design, structure, finishing and extras so you can track each stage.",
              },
              {
                title: "Get a detailed BOQ",
                text: "A bill of quantities lists every material and work item with quantities and rates. This is the base for all cost control.",
              },
              {
                title: "Add a contingency",
                text: "Keep 10-15% aside for price increases and surprises. If you do not need it, that is a bonus.",
              },
              {
                title: "Track spending monthly",
                text: "Compare what you paid against the plan. Small overspends found early are easy to fix.",
              },
            ],
          },
        ],
      },
      {
        heading: "Smart ways to save without weakening the house",
        blocks: [
          {
            type: "list",
            items: [
              "Finalise the design before starting. Changes after slab casting are the most expensive.",
              "Prefer simple shapes and standard room sizes over complicated designs.",
              "Buy bulk materials early if you have safe storage, especially when prices are stable.",
              "Compromise on finishing items you can upgrade later, never on structure, steel or concrete quality.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why do most houses go over budget?",
        a: "The usual reasons are design changes during construction, upgrades to finishing, rising material prices and forgotten costs. A contingency and a firm design reduce all of them.",
      },
      {
        q: "Should I take a bank loan for construction?",
        a: "Many people do. Banks release money in stages and often need approved drawings and later a completion certificate, so plan your paperwork early. Compare interest rates and terms carefully.",
      },
      {
        q: "Can I save by buying materials myself?",
        a: "It can save money if you know quality and quantities, but it also means you handle storage, waste and delivery delays. Decide this in the contract so responsibility is clear.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "understanding-building-permits": {
    summary: [
      "You need approval from your municipality before you start building.",
      "There are usually several stages: building permit, inspections during construction, and a completion certificate at the end.",
      "Each municipality has its own bylaws on setbacks, height and ground coverage, so always check locally.",
    ],
    sections: [
      {
        heading: "Why permits exist",
        blocks: [
          {
            type: "p",
            text: "Permits are not just paperwork. They check that your house is safe, that it does not block public roads, rivers or neighbours, and that it follows the National Building Code. Skipping them can lead to fines, stop-work orders, refusal of electricity or loan, and in serious cases demolition of illegal parts.",
          },
        ],
      },
      {
        heading: "The main approvals you should know",
        blocks: [
          {
            type: "table",
            headers: ["Approval", "What it is for"],
            rows: [
              [
                "Building permit (naksha pass)",
                "Permission to start construction based on approved drawings.",
              ],
              [
                "Inspections during construction",
                "Many municipalities check the work at stages, often at plinth or DPC level.",
              ],
              [
                "Revision approval",
                "Needed if you change the design or add a floor after approval.",
              ],
              [
                "Completion certificate",
                "Confirms the house was built as approved and is safe to use.",
              ],
              [
                "Special zone clearance",
                "Heritage, riverside or protected areas may need extra permission.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Rules that decide whether your design is approved",
        blocks: [
          {
            type: "list",
            items: [
              "Setback: the minimum distance between your building and the road, boundary or river.",
              "Ground coverage: how much of the plot the building may cover.",
              "Floor area ratio (FAR): the total floor area allowed compared to plot size.",
              "Height limit: maximum number of floors or height allowed in your area.",
              "Road width and right-of-way: the road in front of your plot decides how far you must leave open.",
              "Structural safety: the design must follow the National Building Code.",
            ],
          },
          {
            type: "tip",
            title: "Ask the ward first",
            text: "Before your architect draws anything, ask your ward or municipality for the local bylaw limits. It can save you weeks of redrawing.",
          },
        ],
      },
      {
        heading: "What happens if you build without permission?",
        blocks: [
          {
            type: "warning",
            title: "The risks are real",
            text: "You may face penalties, be forced to stop, and find that banks, insurers and future buyers will not accept your house. Some municipalities allow regularisation of old buildings, but it costs time and money and is not guaranteed.",
          },
          {
            type: "p",
            text: "For the exact step-by-step process to get your naksha passed, read our guide 'How to Get Your House Naksha Passed in Nepal'.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is a permit needed in villages and rural municipalities?",
        a: "Most local governments now have building rules and many require approval, even outside big cities. Rules vary, so check with your own ward or rural municipality office.",
      },
      {
        q: "Do I need a new permit for adding a floor later?",
        a: "Yes, an added floor needs approval, and your foundation and structure must be designed to carry it. Plan future floors in the original design if possible.",
      },
      {
        q: "Who can prepare the drawings for approval?",
        a: "Drawings are normally prepared and signed by a registered architect or engineer. Your municipality can tell you exactly what qualifications and documents it accepts.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "sustainable-building-materials": {
    summary: [
      "Sustainable does not mean weaker: many green materials are strong, affordable and suit Nepal's climate.",
      "Good options include AAC blocks, CSEB (compressed earth blocks), local stone, bamboo and efficient bricks.",
      "Small choices like rainwater harvesting and LED lighting also cut long-term costs.",
    ],
    sections: [
      {
        heading: "What makes a material sustainable?",
        blocks: [
          {
            type: "list",
            items: [
              "Made locally, so less transport and lower cost",
              "Uses less energy and produces less pollution to make",
              "Lasts long and needs little repair",
              "Improves comfort by keeping the house cooler or warmer",
              "Does not harm forests, rivers or health",
            ],
          },
        ],
      },
      {
        heading: "Materials worth considering in Nepal",
        blocks: [
          {
            type: "table",
            headers: ["Material", "Benefit", "Watch out for"],
            rows: [
              [
                "AAC blocks",
                "Light, good insulation, faster wall construction",
                "Needs proper mortar and plastering technique.",
              ],
              [
                "CSEB (compressed stabilised earth blocks)",
                "Made from local soil, low energy, good for comfort",
                "Needs quality control and protection from heavy moisture.",
              ],
              [
                "Improved or cleaner-kiln bricks",
                "Familiar material with lower pollution than old kilns",
                "Check strength and uniformity.",
              ],
              [
                "Local stone",
                "Durable, natural, good for foundations and walls in hill areas",
                "Needs skilled masons and proper structural design.",
              ],
              [
                "Bamboo",
                "Fast-growing and strong for suitable uses",
                "Must be treated against insects and moisture.",
              ],
              [
                "Certified timber",
                "Warm, beautiful and long-lasting when sourced legally",
                "Use only legal, responsibly sourced wood.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Beyond materials: sustainable features",
        blocks: [
          {
            type: "list",
            items: [
              "Rainwater harvesting for gardens and washing",
              "Solar water heaters and rooftop solar for lower electricity bills",
              "LED lighting and good natural ventilation and daylight",
              "Roof and wall insulation in cold areas",
              "Low-VOC paints for healthier indoor air",
            ],
          },
          {
            type: "tip",
            title: "Think lifetime cost",
            text: "A material that costs slightly more today but lowers electricity or repair costs for 20 years is usually the cheaper choice.",
          },
        ],
      },
      {
        heading: "An important reminder on safety",
        blocks: [
          {
            type: "warning",
            title: "Green must still be safe",
            text: "Any material must be used according to the National Building Code and designed by an engineer, especially in an earthquake-prone country like Nepal. Never use an unfamiliar material without professional design advice.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are sustainable materials more expensive?",
        a: "Some are cheaper (local stone, soil blocks), some cost a little more upfront but save money later through lower energy use and less maintenance.",
      },
      {
        q: "Can I mix sustainable materials with normal RCC construction?",
        a: "Yes. Many modern homes use an RCC frame with AAC or earth-block walls. The key is that the structural design accounts for the materials used.",
      },
      {
        q: "Where do I find these materials?",
        a: "Availability varies by district. Ask your contractor or local suppliers, and check for quality reports or tests before buying in bulk.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "how-to-get-your-naksha-passed": {
    summary: [
      "Naksha pass is the municipality's approval of your house drawings. You must have it before construction.",
      "Start with land documents, hire a licensed architect or engineer, then apply at your municipality or ward.",
      "Most rejections are caused by setback errors, incomplete land papers, or drawings that break local rules.",
    ],
    sections: [
      {
        heading: "What is naksha pass?",
        blocks: [
          {
            type: "p",
            text: "Naksha means map or drawing. A naksha pass is the official approval from your local government (municipality or rural municipality) that your building design follows local bylaws and the National Building Code. It is also called a building permit. Without it, your house is treated as unauthorised.",
          },
          {
            type: "tip",
            title: "Rules differ from place to place",
            text: "Steps, fees and time can be different in each municipality, and many now have online systems. Treat this guide as a general map and confirm details with your own ward office.",
          },
        ],
      },
      {
        heading: "Step-by-step process",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Check your land documents",
                text: "Make sure your lalpurja (ownership certificate) is in your name, land tax (malpot) is paid up to date, and you have the land map (blueprint) from the survey office.",
              },
              {
                title: "Learn the local bylaws",
                text: "Ask the ward or municipality about setback, road width, ground coverage, floor area ratio and height limits for your plot.",
              },
              {
                title: "Hire a licensed architect or engineer",
                text: "They will prepare architectural drawings, structural design, and electrical and plumbing plans that meet the National Building Code.",
              },
              {
                title: "Prepare the documents",
                text: "Usually: land ownership copy, land tax receipt, land map, citizenship copy, drawings and design reports, and the designer's professional details.",
              },
              {
                title: "Submit the application",
                text: "Apply at the municipality office or through its online system and pay the required fees.",
              },
              {
                title: "Technical review and site inspection",
                text: "Municipal officers check the drawings and may visit the plot to verify boundary, road and setback.",
              },
              {
                title: "Fix comments and receive approval",
                text: "If the office asks for corrections, update the drawings and resubmit. After approval you receive the permit and stamped drawings.",
              },
              {
                title: "Build exactly as approved",
                text: "Keep the approved drawings on site. Many municipalities inspect at plinth or DPC level, so do not continue upward without required clearance.",
              },
            ],
          },
        ],
      },
      {
        heading: "Why applications get rejected",
        blocks: [
          {
            type: "list",
            items: [
              "Setback from road, river, boundary or high-tension line is not respected",
              "Road width shown in drawings does not match reality",
              "Building covers more of the plot than allowed",
              "Land papers are incomplete, outdated or in a different name",
              "Drawings or structural design are unsigned or do not follow the code",
              "Plot overlaps public land, riverbank or disputed boundary",
            ],
          },
          {
            type: "warning",
            title: "Do not start digging early",
            text: "Starting construction before approval can lead to fines, a stop-work notice, and problems with loans, electricity connection and later selling. Wait for the permit.",
          },
        ],
      },
      {
        heading: "How to make it faster and smoother",
        blocks: [
          {
            type: "list",
            items: [
              "Choose a designer who has worked with your municipality before",
              "Visit the ward office early to confirm road width and setback",
              "Keep photocopies and digital scans of every document",
              "Follow up politely and respond to comments quickly",
            ],
          },
        ],
      },
    ],
    checklist: {
      title: "Naksha documents checklist",
      items: [
        "Lalpurja (land ownership certificate)",
        "Updated land tax (malpot) receipt",
        "Land map / blueprint",
        "Citizenship certificate copy",
        "Architectural and structural drawings",
        "Designer's registration details and signature",
        "Application form and fee receipt",
      ],
    },
    faqs: [
      {
        q: "How long does naksha pass take?",
        a: "It depends on the municipality, the size of the building and how complete your documents are. It can range from a few days to several weeks. Applying with complete papers is the best way to save time.",
      },
      {
        q: "Can I change the design after approval?",
        a: "Yes, but changes must be submitted for revision approval. Building something different from the approved drawing can cause problems when you apply for the completion certificate.",
      },
      {
        q: "How much does it cost?",
        a: "Fees depend on plot size, building area and municipality, and designer charges are separate. Ask the ward or municipality for the exact fee schedule.",
      },
      {
        q: "Do I need naksha pass if I only add a room?",
        a: "Additions usually need approval as well, since they affect structure and area limits. Confirm with your municipality before starting.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "construction-cost-per-square-foot-nepal": {
    summary: [
      "There is no single price per sq ft: it depends on location, design, materials and what is included.",
      "Always ask what the rate includes (structure only, or full finishing) and how the area is measured.",
      "Compare quotes using the same drawings and a detailed BOQ.",
    ],
    sections: [
      {
        heading: "Why one number does not exist",
        blocks: [
          {
            type: "p",
            text: "People often ask, 'What is the rate per square foot?' The honest answer is that it varies. A simple grey-structure house in one place can cost far less per square foot than a fully finished, designer home in another. Prices also change with cement, steel and labour rates, so any fixed number you read online may already be outdated.",
          },
        ],
      },
      {
        heading: "What affects the rate",
        blocks: [
          {
            type: "list",
            items: [
              "Scope: structure only (grey), or complete with finishing and fixtures (turnkey)",
              "Location: transport of materials to hill or remote areas costs more than in the city",
              "Design: simple boxes are cheaper than curves, cantilevers and complex roofs",
              "Materials: the brand and grade of cement, steel, tiles, paint and fittings",
              "Number of floors and height: taller buildings need stronger structure",
              "Soil and site: poor soil needs deeper or special foundations",
              "Labour availability and season",
            ],
          },
        ],
      },
      {
        heading: "How area is measured",
        blocks: [
          {
            type: "p",
            text: "Most contractors charge on built-up area, which includes walls, balconies, staircases and sometimes the terrace. This is larger than the usable room area you actually walk in. Always ask whether balconies, staircase, parking and terrace are counted and at what rate.",
          },
          {
            type: "tip",
            title: "Simple formula",
            text: "Estimated cost = built-up area x rate + extras. Extras include design and approval, boundary wall, septic tank, connections and any work not covered by the rate.",
          },
        ],
      },
      {
        heading: "What a rate usually includes and excludes",
        blocks: [
          {
            type: "table",
            headers: ["Usually included", "Often excluded"],
            rows: [
              [
                "Excavation, foundation, columns, beams, slabs",
                "Naksha drawing and municipality fees",
              ],
              ["Brickwork and plaster", "Boundary wall and gate"],
              [
                "Basic electrical and plumbing rough-in",
                "Furniture, modular kitchen, wardrobes",
              ],
              [
                "Labour and supervision",
                "Premium fixtures, chandeliers, false ceiling",
              ],
            ],
          },
          {
            type: "warning",
            title: "Read what is not written",
            text: "Two quotes with the same per-sq-ft rate can be very different. One may include tiles and paint, the other may not.",
          },
        ],
      },
      {
        heading: "How to get an accurate cost",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Finish the design first",
                text: "You cannot price a house that is not yet drawn.",
              },
              {
                title: "Ask for an itemised BOQ",
                text: "It should list every work item, quantity, material and rate.",
              },
              {
                title: "Compare like with like",
                text: "Give the same drawings and specifications to each contractor.",
              },
              {
                title: "Agree how changes are priced",
                text: "Set rates for extra work before you start.",
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why is my final cost higher than the first quote?",
        a: "Usually due to design changes, upgraded finishing, price increases, or items that were not in the original quote. A detailed BOQ and contingency fund prevent most surprises.",
      },
      {
        q: "Is a fixed-price contract better than an item-rate contract?",
        a: "Fixed-price gives certainty if the design and specifications are final. Item-rate is flexible but needs more tracking. Choose based on how settled your design is.",
      },
      {
        q: "Do rates differ for grey structure and finishing?",
        a: "Yes. Grey structure covers the frame and walls, while finishing covers floors, paint, doors, windows, fixtures and more. Always ask for the two costs separately.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "checking-land-before-you-build": {
    summary: [
      "Verify the land before you pay or design anything: a bad plot can waste your entire investment.",
      "Check lalpurja, kitta number, boundaries, tax records, road access and any restrictions.",
      "Also check setbacks from roads, rivers and power lines that reduce the buildable area.",
    ],
    sections: [
      {
        heading: "Why land checks come first",
        blocks: [
          {
            type: "p",
            text: "Many building problems begin with land, not construction. A plot may have disputed ownership, no legal road access, or restrictions that reduce how much you can build. Finding this out after buying or after drawing plans is expensive and stressful.",
          },
        ],
      },
      {
        heading: "Documents to verify",
        blocks: [
          {
            type: "table",
            headers: ["Document", "What it tells you"],
            rows: [
              [
                "Lalpurja (land ownership certificate)",
                "Who legally owns the land, its area and kitta number.",
              ],
              [
                "Kitta number and sheet number",
                "The unique identity of the plot on the survey map.",
              ],
              [
                "Land map (blueprint / trace)",
                "Exact shape, boundary and adjoining plots.",
              ],
              [
                "Land tax (malpot) receipts",
                "Whether taxes have been paid regularly.",
              ],
              [
                "Citizenship of owner",
                "Confirms the seller's identity matches the lalpurja.",
              ],
              [
                "Ward recommendation letters",
                "Confirmation of location, road and other local facts when needed.",
              ],
            ],
          },
          {
            type: "tip",
            title: "Verify at the source",
            text: "Do not rely only on copies given by the seller. Confirm details at the land revenue or survey office and match the physical boundary with the map.",
          },
        ],
      },
      {
        heading: "Check the ground reality",
        blocks: [
          {
            type: "list",
            items: [
              "Boundary: walk the plot and match it with the land map. Confirm pillars or markers.",
              "Road access: is there a legal, recorded road to the plot, and how wide is it?",
              "Neighbour disputes: ask nearby residents about boundary or ownership conflicts.",
              "Water, drainage and flooding: check how the plot behaves in heavy rain.",
              "Slope and soil: unstable or filled-up land needs stronger foundations.",
              "Utilities: distance to electricity, water and sewage.",
            ],
          },
        ],
      },
      {
        heading: "Rules that reduce your buildable area",
        blocks: [
          {
            type: "list",
            items: [
              "Road setback: you must leave space from the road edge, based on road width.",
              "River and stream setbacks: buildings near riverbanks must keep a safe distance.",
              "High-tension line clearance: buildings cannot be placed too close to power lines.",
              "Public land or guthi land: some land categories cannot be sold or built on freely.",
              "Protected, heritage or forest areas may have extra restrictions.",
            ],
          },
          {
            type: "warning",
            title: "Watch for these red flags",
            text: "Owner unwilling to show original documents, plots with several unresolved names, price far below the market, land that is in someone else's possession, or sellers who pressure you to pay quickly.",
          },
        ],
      },
    ],
    checklist: {
      title: "Land verification checklist",
      items: [
        "Original lalpurja checked at the land office",
        "Kitta number matches the land map",
        "Land tax paid to date",
        "Physical boundary matches map",
        "Legal road access confirmed",
        "Setbacks and restrictions confirmed with ward or municipality",
        "Soil condition and drainage observed",
      ],
    },
    faqs: [
      {
        q: "What is a kitta number?",
        a: "It is the unique number given to each land parcel on the survey map. It helps identify your exact plot in official records.",
      },
      {
        q: "Should I hire someone to check the land?",
        a: "For a large purchase, yes. A lawyer can check legal documents and an engineer or architect can judge buildability, setbacks and soil.",
      },
      {
        q: "Can I build on any land I own?",
        a: "Not always. Zoning, road access, setbacks and special-area rules decide what and how much you can build.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "earthquake-resistant-house-nepal": {
    summary: [
      "Nepal is in a high seismic zone, so every house must be designed and built for earthquakes.",
      "A code-compliant house is designed to protect lives, not to be 100% damage-proof.",
      "Design, steel detailing and concrete quality decide safety far more than the paint or the look.",
    ],
    sections: [
      {
        heading: "Why this matters in Nepal",
        blocks: [
          {
            type: "p",
            text: "The 2015 Gorkha earthquake killed thousands of people and damaged or destroyed hundreds of thousands of homes. Many failures were not caused by the earthquake alone but by poor design, weak materials and careless building. The National Building Code (NBC) exists to prevent this.",
          },
        ],
      },
      {
        heading: "What makes a house earthquake resistant",
        blocks: [
          {
            type: "list",
            items: [
              "Proper design by a registered engineer following the National Building Code",
              "Good foundation suited to the soil, tied together well",
              "Simple, regular shape: square or rectangular plans behave better than L or irregular shapes",
              "Strong columns and well-connected beams, so the frame works as one unit",
              "Closely spaced stirrups (ties) in columns and beams, with proper hooks",
              "Good-quality concrete and steel, correctly mixed and cured",
              "Well-connected walls, with masonry infill that is tied to the frame",
            ],
          },
        ],
      },
      {
        heading: "Common dangerous mistakes",
        blocks: [
          {
            type: "list",
            items: [
              "Open ground floor (parking) with no walls but heavy floors above, which creates a soft storey",
              "Adding floors later without checking the foundation and columns",
              "Cutting steel or spacing stirrups too widely to save money",
              "Weak concrete from too much water, poor mixing or no curing",
              "Heavy overhangs and cantilevers without proper design",
              "Cutting into columns for pipes or wires after construction",
            ],
          },
          {
            type: "warning",
            title: "Steel is the hidden part",
            text: "Once concrete is poured, nobody can see what is inside. Inspect the reinforcement before every pour.",
          },
        ],
      },
      {
        heading: "What to check on your site",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Approved drawings on site",
                text: "Workers must follow the structural drawings, not memory or habit.",
              },
              {
                title: "Check reinforcement before concreting",
                text: "Bar sizes, number of bars, stirrup spacing, hooks and cover blocks should match the drawing.",
              },
              {
                title: "Watch the concrete",
                text: "Proper mix ratio, clean water and aggregates, good compaction and no extra water added on site.",
              },
              {
                title: "Curing",
                text: "Keep concrete wet for several days after casting so it gains strength.",
              },
              {
                title: "Have an engineer inspect key stages",
                text: "Foundation, columns, beams and slabs should be checked by a qualified engineer.",
              },
            ],
          },
        ],
      },
    ],
    checklist: {
      title: "Safety checklist for your builder",
      items: [
        "Structural drawings signed by a registered engineer",
        "Soil condition considered in foundation design",
        "Reinforcement checked before every concrete pour",
        "Concrete cube tests planned",
        "Curing followed for all structural members",
        "No structural changes without engineer approval",
      ],
    },
    faqs: [
      {
        q: "Can any house be fully earthquake-proof?",
        a: "No house is completely damage-proof in a very strong earthquake. A well-designed and well-built house aims to protect people's lives by avoiding collapse and allowing safe escape.",
      },
      {
        q: "Can I strengthen an old house?",
        a: "Often yes, through retrofitting. An engineer must first assess the building's condition and then recommend suitable strengthening methods.",
      },
      {
        q: "Does approved naksha mean the house is safe?",
        a: "Approval checks the design on paper. Safety also depends on whether the house is built exactly as designed, with good materials and supervision.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "how-long-does-it-take-to-build-a-house": {
    summary: [
      "A typical two to three storey home often takes around 9 to 15 months from start to handover, but it varies.",
      "Design and approval can take as long as the construction of the frame.",
      "Monsoon, festivals, payment delays and design changes are the biggest schedule killers.",
    ],
    sections: [
      {
        heading: "A realistic timeline",
        blocks: [
          {
            type: "p",
            text: "The table below shows common ranges for a mid-sized residential building. Actual time depends on size, contractor capacity, weather and approvals, so treat these as guidance only.",
          },
          {
            type: "table",
            headers: ["Stage", "Typical duration"],
            rows: [
              ["Design and drawings", "2-4 weeks"],
              ["Naksha approval", "A few weeks, depends on municipality"],
              ["Excavation and foundation", "3-6 weeks"],
              [
                "Structure (columns, beams, slabs)",
                "3-6 months for 2-3 floors",
              ],
              [
                "Brickwork, plaster, rough electrical and plumbing",
                "2-3 months, overlapping with structure",
              ],
              ["Finishing (tiles, paint, doors, fixtures)", "3-5 months"],
              ["Cleaning, snagging and handover", "2-3 weeks"],
            ],
          },
        ],
      },
      {
        heading: "What causes delays in Nepal",
        blocks: [
          {
            type: "list",
            items: [
              "Monsoon (roughly June to September): heavy rain slows excavation, concreting and roof work.",
              "Festivals: labour often travels home during Dashain and Tihar, and work may stop for weeks.",
              "Material supply: price jumps, shortages or transport problems, especially in remote areas.",
              "Payment gaps: workers slow down or leave when payments are late.",
              "Design changes: changing rooms or layout after work starts wastes time and money.",
              "Approval or inspection delays.",
            ],
          },
        ],
      },
      {
        heading: "How to keep the project on schedule",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Finalise design before digging",
                text: "Spend more time in planning, and less time fixing on site.",
              },
              {
                title: "Plan around the seasons",
                text: "Try to finish foundation and roof work outside the heaviest rain, and plan finishing indoors during wet weeks.",
              },
              {
                title: "Order long-lead items early",
                text: "Windows, doors, tiles and special fittings can take weeks to arrive.",
              },
              {
                title: "Agree on a written schedule",
                text: "Include milestone dates and how delays will be handled.",
              },
              {
                title: "Pay on time",
                text: "A stage-wise payment plan keeps workers motivated and the site active.",
              },
            ],
          },
          {
            type: "tip",
            title: "Do not rush concrete",
            text: "Concrete needs time to gain strength. Skipping curing days or removing shuttering too early to save time can weaken the structure.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I move in before finishing is complete?",
        a: "It is possible but not comfortable or always safe, with dust, noise and unfinished electrical or plumbing work. Try to complete at least the essential rooms and safety items first.",
      },
      {
        q: "Does a bigger team mean a faster build?",
        a: "Only up to a point. Some stages need waiting, such as concrete curing and plaster drying, and more workers cannot speed that up.",
      },
      {
        q: "What is the best time to start?",
        a: "Many people start after the monsoon so foundation and structure work happen in drier months, but a good plan can work in any season.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "grey-structure-vs-turnkey": {
    summary: [
      "Grey structure covers the building shell; turnkey covers everything up to a ready-to-live-in house.",
      "Grey structure gives more control and flexibility; turnkey gives convenience and single responsibility.",
      "Whichever you choose, get the exact inclusions written in the contract.",
    ],
    sections: [
      {
        heading: "What is grey structure?",
        blocks: [
          {
            type: "p",
            text: "Grey structure usually means the bare building: foundation, columns, beams, slabs, brick walls and often plaster and basic electrical and plumbing pipes. It does not include the final finishing, such as flooring, paint, doors, windows and fixtures. The exact list varies by contractor, so always ask for it in writing.",
          },
        ],
      },
      {
        heading: "What is turnkey?",
        blocks: [
          {
            type: "p",
            text: "In a turnkey project, one company takes responsibility for the whole job: design, approval support, construction, finishing and handover. You receive a ready-to-use house, like receiving the keys to open the door and move in.",
          },
        ],
      },
      {
        heading: "Side-by-side comparison",
        blocks: [
          {
            type: "table",
            headers: ["", "Grey structure", "Turnkey"],
            rows: [
              [
                "Scope",
                "Shell of the building",
                "Complete house, ready to live in",
              ],
              [
                "Your involvement",
                "High: you choose and manage finishing",
                "Lower: the contractor manages most decisions",
              ],
              [
                "Flexibility",
                "High, you can pick different suppliers",
                "Medium, depends on package and specs",
              ],
              [
                "Coordination",
                "You coordinate finishing trades",
                "One company coordinates everything",
              ],
              [
                "Cost control",
                "Easy to spread cost over time",
                "Clearer total cost upfront",
              ],
              [
                "Responsibility if something goes wrong",
                "Split between different parties",
                "Single point of responsibility",
              ],
            ],
          },
        ],
      },
      {
        heading: "Which one is right for you?",
        blocks: [
          {
            type: "list",
            items: [
              "Choose grey structure if you want to control finishing choices, spread spending over time, or already have trusted finishing workers.",
              "Choose turnkey if you live abroad, are busy, or want one team responsible for quality, time and cost.",
              "Consider a middle path: turnkey for structure and major services, with your own choice of tiles, paint and fixtures.",
            ],
          },
          {
            type: "warning",
            title: "Define 'grey' and 'turnkey' in writing",
            text: "Different companies use these words differently. Ask for a checklist of exactly what is included: plaster, waterproofing, wiring, pipes, tiles, paint, doors, windows, sanitary items and cleaning.",
          },
        ],
      },
    ],
    checklist: {
      title: "Ask your contractor",
      items: [
        "What exactly is included in this package?",
        "Which brands and grades of materials will be used?",
        "What is excluded and priced separately?",
        "Who handles approvals, inspections and utility connections?",
        "What warranty or defect period is offered?",
      ],
    },
    faqs: [
      {
        q: "Is turnkey always more expensive?",
        a: "Not necessarily. The contractor may charge for management, but you also avoid delays, rework and coordination errors. Compare full costs, not just headline rates.",
      },
      {
        q: "Can I finish the interior myself after grey structure?",
        a: "Yes, and many families do. Just plan the finishing budget early, since it is a large part of the total cost.",
      },
      {
        q: "Which is better for people living abroad?",
        a: "Turnkey is often easier because one team handles everything, but you still need clear specifications, milestones and a trusted person to check progress.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "building-a-house-in-nepal-from-abroad": {
    summary: [
      "You can build safely from abroad, but you need a trusted local representative and strong paperwork.",
      "Use a written contract, stage-wise payments through banks and regular photo or video updates.",
      "Hire an independent engineer to check quality, separate from your contractor.",
    ],
    sections: [
      {
        heading: "The biggest risks of building remotely",
        blocks: [
          {
            type: "list",
            items: [
              "Paying money without seeing progress",
              "Relying on verbal promises from relatives or agents",
              "Poor quality that is hidden inside concrete and walls",
              "Design or cost changes made without your approval",
              "Land or paper problems discovered too late",
            ],
          },
        ],
      },
      {
        heading: "A safe way to manage the project",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Verify land and paperwork first",
                text: "Have a trusted lawyer or family member check the land documents in person before you invest.",
              },
              {
                title: "Appoint a trusted representative",
                text: "This can be a family member or friend. If they need to sign or act for you, get legal advice on a proper power of attorney.",
              },
              {
                title: "Finalise design through video calls",
                text: "Review drawings on screen, mark changes and approve in writing, for example by email.",
              },
              {
                title: "Sign a detailed contract",
                text: "Include drawings, BOQ, materials, timeline, payment stages and defect period.",
              },
              {
                title: "Pay in stages through bank transfer",
                text: "Avoid cash. Keep receipts and link each payment to a completed stage confirmed by photos or an engineer.",
              },
              {
                title: "Hire independent supervision",
                text: "A third-party engineer visiting key stages protects you when you cannot be there.",
              },
              {
                title: "Track progress regularly",
                text: "Ask for weekly photos and short videos, and keep them in a shared folder with dates.",
              },
            ],
          },
        ],
      },
      {
        heading: "Stages when checking matters most",
        blocks: [
          {
            type: "table",
            headers: ["Stage", "What to verify"],
            rows: [
              [
                "Before foundation",
                "Approved naksha, boundary, marking and soil condition.",
              ],
              [
                "Before each concrete pour",
                "Steel size, spacing and cover, checked by an engineer.",
              ],
              ["After each slab", "Curing, levels and any cracks."],
              [
                "Before plaster",
                "Electrical and plumbing pipes and pressure tests.",
              ],
              [
                "Before final payment",
                "Full snag inspection and working of all systems.",
              ],
            ],
          },
          {
            type: "tip",
            title: "Visit if you can",
            text: "Even one visit during the structure stage can uncover problems that photos cannot show.",
          },
        ],
      },
      {
        heading: "Legal points to keep in mind",
        blocks: [
          {
            type: "warning",
            title: "Check the rules for your status",
            text: "Rules about owning land and property can differ for Nepali citizens living abroad, Non-Resident Nepalis (NRN) and foreign citizens. Confirm your situation with a lawyer before buying land or investing.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it safe to give all the money to a relative?",
        a: "Even with a trusted relative, keep records. Pay per stage, make transfers through a bank, and let a qualified engineer confirm progress.",
      },
      {
        q: "Should I choose a turnkey contractor while abroad?",
        a: "Often yes, because one team is responsible for the entire project. You still need clear specifications and independent checks.",
      },
      {
        q: "How can I know quality without visiting?",
        a: "Use an independent engineer, ask for dated photos of steel before concreting, and request test reports for materials such as concrete cubes.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "choosing-cement-rebar-and-bricks": {
    summary: [
      "Cement, steel and bricks decide the strength of your house: buy quality and check it.",
      "Look for standard marks, fresh stock, and proof of strength such as test results.",
      "Save money on decoration, not on structural materials.",
    ],
    sections: [
      {
        heading: "Cement",
        blocks: [
          {
            type: "list",
            items: [
              "Buy from a reliable dealer and check the manufacturing date, since old cement loses strength.",
              "Bags should be sealed, dry and free of hard lumps.",
              "Store bags on a raised platform in a dry place, away from walls and rain.",
              "Ask your engineer whether OPC or PPC cement is right for each part of your building.",
            ],
          },
        ],
      },
      {
        heading: "Steel reinforcement (rebar)",
        blocks: [
          {
            type: "list",
            items: [
              "Use the grade shown in the structural drawing, commonly high-strength deformed bars such as Fe500 or better.",
              "Look for clear manufacturer marking and a quality mark on the bars.",
              "Bars should be free of loose, flaky rust and be straight and uniform.",
              "Ask for the manufacturer's test certificate for large purchases.",
            ],
          },
          {
            type: "warning",
            title: "Thickness must match the drawing",
            text: "A bar that is even slightly thinner than the drawing calls for has much less strength. Check diameters on delivery.",
          },
        ],
      },
      {
        heading: "Bricks, sand and aggregate",
        blocks: [
          {
            type: "list",
            items: [
              "Bricks should have uniform size, sharp edges and a clear ringing sound when two are tapped together.",
              "Avoid over-burnt, cracked or very crumbly bricks.",
              "Soak bricks in water before use so they do not draw water from the mortar.",
              "Sand should be clean with little silt or clay. Aggregate should be clean and well graded.",
            ],
          },
        ],
      },
      {
        heading: "Quick quality checks",
        blocks: [
          {
            type: "table",
            headers: ["Material", "What to check", "Useful test or proof"],
            rows: [
              [
                "Cement",
                "Fresh, dry, no lumps",
                "Manufacturing date, brand and storage",
              ],
              [
                "Rebar",
                "Correct grade and diameter, low rust",
                "Test certificate, weight and diameter check",
              ],
              [
                "Bricks",
                "Uniform, strong, ring sound",
                "Crushing strength and water absorption tests",
              ],
              [
                "Sand and aggregate",
                "Clean, low silt",
                "Simple silt test and visual check",
              ],
              ["Concrete", "Correct mix and strength", "Cube test at 28 days"],
            ],
          },
          {
            type: "tip",
            title: "Get concrete cubes tested",
            text: "Casting a few concrete cubes on site and testing them at a lab is a low-cost way to confirm your concrete has the required strength.",
          },
        ],
      },
      {
        heading: "Where you can save and where you should not",
        blocks: [
          {
            type: "list",
            items: [
              "Never compromise on: steel, cement, concrete quality, waterproofing and electrical wiring.",
              "Can be flexible on: tile brand, paint brand, fixtures, decorative finishes and furniture.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How can I know if steel is genuine?",
        a: "Buy from reliable suppliers, check markings and grade, verify diameter and unit weight, and ask for a test certificate. Your engineer can guide you on acceptable checks.",
      },
      {
        q: "Are cheaper bricks always bad?",
        a: "Not always, but strength varies widely. Ask for test results or check a sample before buying a large quantity.",
      },
      {
        q: "Who should buy the materials, me or the contractor?",
        a: "Either can work if responsibilities are written in the contract. If the contractor buys, specify brands and grades. If you buy, you take responsibility for quantity, storage and quality.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "house-completion-certificate-nepal": {
    summary: [
      "The completion certificate confirms your house was built as approved and is safe to use.",
      "You may need it for bank loans, selling the property, insurance and other services.",
      "Building differently from approved drawings can make it hard or costly to get.",
    ],
    sections: [
      {
        heading: "What is a completion certificate?",
        blocks: [
          {
            type: "p",
            text: "A completion certificate (in Nepali often called sampanna praman patra) is issued by the municipality after it checks that your finished house matches the approved naksha and building rules. It is the final piece of the legal process, after the naksha pass at the start.",
          },
        ],
      },
      {
        heading: "Why you should not skip it",
        blocks: [
          {
            type: "list",
            items: [
              "Bank loans: banks may need it before releasing final loan installments or for future loans against the property.",
              "Selling: buyers and their banks often ask for it, and its absence lowers trust and value.",
              "Legal safety: it proves your house is recognised and not treated as unauthorised construction.",
              "Insurance and utilities: some services and claims may depend on proper approvals.",
              "Avoiding penalties: unapproved extra floors or area can attract fines.",
            ],
          },
        ],
      },
      {
        heading: "How to get it",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Build according to the approved drawing",
                text: "Keep the approved naksha and any revision approvals safe and follow them on site.",
              },
              {
                title: "Complete required inspections",
                text: "Pass any stage inspections your municipality requires, for example at plinth or DPC level.",
              },
              {
                title: "Prepare the documents",
                text: "Usually the original permit and drawings, land papers, tax receipts, and the engineer's report or as-built drawings if required.",
              },
              {
                title: "Apply at the municipality",
                text: "Submit the application with required fees, either at the office or online if available.",
              },
              {
                title: "Site verification",
                text: "Officials visit to measure and compare the building with the approved plan.",
              },
              {
                title: "Receive the certificate",
                text: "If everything matches, the certificate is issued. If not, you may be asked to correct or regularise differences.",
              },
            ],
          },
        ],
      },
      {
        heading: "What if my building differs from the drawing?",
        blocks: [
          {
            type: "warning",
            title: "Deviations create problems",
            text: "Extra floors, bigger area, or changed setbacks can block approval or lead to penalties. Try to get revision approval before making major changes.",
          },
          {
            type: "tip",
            title: "Old houses without certificate",
            text: "Some municipalities offer regularisation for older buildings from time to time. Ask your ward or municipality what options and requirements apply.",
          },
        ],
      },
    ],
    checklist: {
      title: "Completion certificate checklist",
      items: [
        "Approved naksha and any revision approvals",
        "Building matches the approved drawing",
        "Required inspection records",
        "Land ownership and tax documents",
        "Engineer's report or as-built drawing if required",
        "Application and fee receipt",
      ],
    },
    faqs: [
      {
        q: "Is the completion certificate mandatory?",
        a: "It is part of the legal building process, and many banks, buyers and services expect it. Requirements can vary, so confirm with your municipality.",
      },
      {
        q: "When should I apply?",
        a: "After construction is substantially complete and matches the approved plan. Do not wait years, since delays can make it harder to fix differences.",
      },
      {
        q: "Can I get it if I built more than approved?",
        a: "It may be difficult. You may need to regularise the extra construction or pay penalties, depending on your municipality's rules.",
      },
    ],
  },
};
