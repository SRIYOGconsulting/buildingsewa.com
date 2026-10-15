"use client";

import { useState } from "react";

type Term = {
  term: string;
  definition: string;
};

type TermsByLetter = Record<string, Term[]>;

const glossaryTerms: TermsByLetter = Object.fromEntries(
  Object.entries({
  "A": [
    [
      "Architect",
      "A professional who plans and designs buildings for function, safety, structure, and appearance."
    ],
    [
      "Aggregate",
      "Sand, gravel, or crushed stone used in concrete and other construction work."
    ],
    [
      "Asphalt",
      "A bituminous material commonly used for roads, driveways, and paved surfaces."
    ],
    [
      "Attic",
      "The space directly below a building’s roof, often used for storage or building services."
    ],
    [
      "Anchor Bolt",
      "A bolt used to secure structural elements to concrete or masonry."
    ],
    [
      "Air Barrier",
      "A layer designed to limit uncontrolled air leakage through a building envelope."
    ],
    [
      "Acoustic Insulation",
      "Material used to reduce sound transmission between rooms or from outside."
    ],
    [
      "Arch",
      "A curved structural form that transfers loads toward its supports."
    ],
    [
      "As-Built Drawing",
      "A drawing updated to show the final conditions and dimensions of completed work."
    ],
    [
      "Access Panel",
      "A removable panel that provides access to concealed pipes, wiring, or equipment."
    ]
  ],
  "B": [
    [
      "Beam",
      "A structural member that carries loads across a span and transfers them to supports."
    ],
    [
      "Brickwork",
      "Construction made by laying bricks and joining them with mortar."
    ],
    [
      "Backfill",
      "Soil or other material returned to an excavated area after construction."
    ],
    [
      "Building Inspection",
      "An examination of building work, condition, or safety against specified requirements."
    ],
    [
      "Building Contractor",
      "A person or company engaged to manage or carry out construction work."
    ],
    [
      "Base Course",
      "A supporting layer placed beneath pavement, flooring, or another construction layer."
    ],
    [
      "Balustrade",
      "A protective barrier made of a row of supports and a rail, often beside stairs or balconies."
    ],
    [
      "Batten",
      "A narrow strip of timber or metal used to support cladding, roofing, or finishes."
    ],
    [
      "Bearing Wall",
      "A wall that supports structural loads from floors, roofs, or other parts of a building."
    ],
    [
      "Building Envelope",
      "The roof, walls, windows, doors, and foundation that separate indoors from outdoors."
    ]
  ],
  "C": [
    [
      "Carpentry",
      "Work involving cutting, shaping, and installing timber for building components."
    ],
    [
      "Concrete",
      "A material made from cement, water, and aggregates that hardens into a solid mass."
    ],
    [
      "Construction",
      "The process of building, altering, repairing, or maintaining structures."
    ],
    [
      "Contractor",
      "A person or company hired to perform specified construction work."
    ],
    [
      "Cladding",
      "A protective or decorative layer fitted to a building’s exterior or interior."
    ],
    [
      "Column",
      "A vertical structural member that transfers loads to a foundation or lower structure."
    ],
    [
      "Cement",
      "A binding material used in mortar, concrete, and other construction products."
    ],
    [
      "Curing",
      "Maintaining suitable moisture and temperature so concrete or mortar can gain strength."
    ],
    [
      "Ceiling Joist",
      "A horizontal member that supports a ceiling and may help carry roof or floor loads."
    ],
    [
      "Cavity Wall",
      "A wall made of two leaves separated by a gap that can help manage moisture and heat transfer."
    ]
  ],
  "D": [
    [
      "Damp Proofing",
      "Methods and materials used to limit moisture entering or rising through a building."
    ],
    [
      "Drainage",
      "A system that collects and carries away surface water or wastewater."
    ],
    [
      "Drywall",
      "Board material commonly used to form interior walls and ceilings."
    ],
    [
      "Door Frame",
      "The frame surrounding a doorway that supports the door and its hardware."
    ],
    [
      "Demolition",
      "The controlled dismantling or removal of a building or part of a structure."
    ],
    [
      "Ductwork",
      "Channels that distribute or extract air in heating, ventilation, and air-conditioning systems."
    ],
    [
      "Dead Load",
      "The permanent weight of a building and its fixed components."
    ],
    [
      "Deflection",
      "The movement or bending of a structural element under load."
    ],
    [
      "Dimension Line",
      "A drawing line that indicates the measured length, width, height, or distance of an element."
    ],
    [
      "Downpipe",
      "A pipe that carries rainwater from a roof gutter toward drainage or ground level."
    ]
  ],
  "E": [
    [
      "Electrical Work",
      "Installation, repair, and maintenance of wiring, outlets, lighting, and electrical systems."
    ],
    [
      "Excavation",
      "Removal of soil or rock to prepare a site or create space for foundations and services."
    ],
    [
      "Elevation",
      "A drawing showing one side of a building and its visible features."
    ],
    [
      "Estimation",
      "Calculation of expected project costs, quantities, labour, and time."
    ],
    [
      "Exterior",
      "The outside surfaces and components of a building."
    ],
    [
      "Expansion Joint",
      "A joint that allows building materials to move as temperatures or loads change."
    ],
    [
      "Eaves",
      "The lower edges of a roof that extend beyond the exterior walls."
    ],
    [
      "Earthworks",
      "Activities such as excavation, filling, grading, and moving soil on a site."
    ],
    [
      "Emergency Exit",
      "A designated route or doorway used to leave a building safely during an emergency."
    ],
    [
      "Engineering Drawing",
      "A technical drawing that communicates dimensions, details, and construction requirements."
    ]
  ],
  "F": [
    [
      "Foundation",
      "The structural base that transfers a building’s loads safely into the ground."
    ],
    [
      "Flooring",
      "The finished surface installed over a floor structure, such as tile, timber, or vinyl."
    ],
    [
      "Formwork",
      "A temporary mould that holds fresh concrete in shape until it gains sufficient strength."
    ],
    [
      "Finishing",
      "Final work such as plastering, painting, tiling, and fitting fixtures."
    ],
    [
      "Facade",
      "The exterior face of a building, especially its principal front."
    ],
    [
      "Footing",
      "The widened base of a foundation that distributes loads to the supporting soil."
    ],
    [
      "Firestop",
      "A fire-resistant material or system used to seal openings and joints in fire-rated construction."
    ],
    [
      "Flashing",
      "Thin waterproof material installed at joints to direct water away from vulnerable areas."
    ],
    [
      "Floor Plan",
      "A scaled drawing showing the arrangement of rooms, walls, doors, and other features from above."
    ],
    [
      "Framing",
      "The assembly of structural members that form a building’s walls, floors, and roof."
    ]
  ],
  "G": [
    [
      "General Contractor",
      "A contractor who coordinates and manages multiple construction activities and trades."
    ],
    [
      "Grouting",
      "Filling joints, gaps, or voids with grout to secure or seal construction components."
    ],
    [
      "Gutter",
      "A channel at a roof edge that collects and directs rainwater."
    ],
    [
      "Gypsum Board",
      "A board with a gypsum core commonly used for interior walls and ceilings."
    ],
    [
      "Groundwork",
      "Work at or below ground level, including site preparation, drainage, and foundations."
    ],
    [
      "Girder",
      "A major beam that supports smaller beams or other structural members."
    ],
    [
      "Grade",
      "The ground level or the slope of a surface around a construction site."
    ],
    [
      "Glazing",
      "Glass installed in windows, doors, partitions, or facades."
    ],
    [
      "Geotechnical Investigation",
      "Study of soil and rock conditions to inform foundation and earthwork design."
    ],
    [
      "Green Building",
      "A building designed or operated to reduce resource use and environmental impacts."
    ]
  ],
  "H": [
    [
      "Home Renovation",
      "Work that repairs, updates, or improves an existing home."
    ],
    [
      "HVAC",
      "Systems for heating, ventilation, and air conditioning inside a building."
    ],
    [
      "Home Inspection",
      "A review of a home’s visible condition to identify defects or maintenance needs."
    ],
    [
      "Handrail",
      "A rail beside stairs, ramps, or walkways that provides support for users."
    ],
    [
      "Hinge",
      "A joint that allows a door, window, or panel to swing open and closed."
    ],
    [
      "Hardscape",
      "Non-living landscape features such as paving, retaining walls, and steps."
    ],
    [
      "Header",
      "A horizontal member that spans an opening and supports loads above it."
    ],
    [
      "Hoist",
      "Equipment used to lift materials or people vertically on a construction site."
    ],
    [
      "Heat Pump",
      "Equipment that transfers heat to provide heating or cooling in a building."
    ],
    [
      "Hydraulic Cement",
      "Cement that sets and hardens through a reaction with water."
    ]
  ],
  "I": [
    [
      "Interior Design",
      "Planning interior spaces to improve their function, comfort, and appearance."
    ],
    [
      "Insulation",
      "Material that reduces heat transfer or sound transmission."
    ],
    [
      "Inspection",
      "A check of construction work or building conditions for defects and compliance."
    ],
    [
      "Installation",
      "Fitting or setting up building materials, fixtures, equipment, or systems."
    ],
    [
      "Irrigation",
      "A system that supplies water to planted or landscaped areas."
    ],
    [
      "Ingress",
      "A route or means of entering a building or site."
    ],
    [
      "Impact Driver",
      "A powered tool used to drive screws and fasteners during construction."
    ],
    [
      "Impervious Surface",
      "A surface that allows little or no water to pass through it."
    ],
    [
      "Infill",
      "Material placed into a gap, cavity, or space within a construction assembly."
    ],
    [
      "Ironmongery",
      "Metal fittings such as hinges, handles, locks, and latches used on doors and windows."
    ]
  ],
  "J": [
    [
      "Joinery",
      "Skilled work making and fitting timber components such as doors, cabinets, and frames."
    ],
    [
      "Joist",
      "A horizontal structural member supporting a floor or ceiling."
    ],
    [
      "Jamb",
      "The vertical side member of a door or window frame."
    ],
    [
      "Junction",
      "The point where building components, surfaces, or systems meet."
    ],
    [
      "Joint Sealant",
      "A flexible material used to seal gaps between construction components."
    ],
    [
      "Junction Box",
      "An enclosure that protects electrical wire connections."
    ],
    [
      "Jacking",
      "Using a jack to lift, position, or support a structure or heavy component."
    ],
    [
      "Jack Rafter",
      "A shorter rafter that meets a hip or valley rafter in a roof frame."
    ],
    [
      "Jobsite",
      "The location where construction or renovation work is being carried out."
    ],
    [
      "Joist Hanger",
      "A metal connector used to support and secure the end of a joist."
    ]
  ],
  "K": [
    [
      "Kitchen Renovation",
      "Improving a kitchen through changes to cabinets, surfaces, fixtures, lighting, or layout."
    ],
    [
      "Kerb",
      "A raised edge separating a road, pavement, driveway, or landscaped area."
    ],
    [
      "Keyway",
      "A groove formed between concrete sections to help create a mechanical connection."
    ],
    [
      "Kitchen Worktop",
      "A durable work surface fitted above kitchen cabinets."
    ],
    [
      "Kiln-Dried Timber",
      "Wood dried in a controlled kiln to reduce moisture before use."
    ],
    [
      "Knockout Panel",
      "A removable or pre-scored section that creates an opening for services or access."
    ],
    [
      "Kicker",
      "A short concrete upstand or a brace used to position or support construction elements."
    ],
    [
      "King Post",
      "A central vertical member used in certain roof trusses or structural frames."
    ],
    [
      "Kick Plate",
      "A protective plate fitted near the bottom of a door to reduce damage."
    ],
    [
      "Knee Wall",
      "A short wall often used in roof spaces, lofts, or beneath sloping ceilings."
    ]
  ],
  "L": [
    [
      "Landscaping",
      "Planning and improving outdoor areas around a building or property."
    ],
    [
      "Lintel",
      "A horizontal support placed above a door, window, or other wall opening."
    ],
    [
      "Load-Bearing Wall",
      "A wall that supports loads from the structure above it."
    ],
    [
      "Lighting",
      "The selection and installation of lights for indoor and outdoor spaces."
    ],
    [
      "Levelling",
      "Making a surface even and checking its height or alignment."
    ],
    [
      "Laminate Flooring",
      "A layered floor covering designed to resemble timber, stone, or other materials."
    ],
    [
      "Ledger",
      "A horizontal member attached to a structure to support another component, such as a deck."
    ],
    [
      "Lintel Beam",
      "A beam spanning an opening to support the wall or loads above it."
    ],
    [
      "Lath",
      "A narrow strip or mesh used as a backing for plaster or other finishes."
    ],
    [
      "Life Safety System",
      "Building systems such as alarms, emergency lighting, and exits that support safe evacuation."
    ]
  ],
  "M": [
    [
      "Masonry",
      "Construction using bricks, blocks, or stone joined with mortar."
    ],
    [
      "Mortar",
      "A mixture used to bond masonry units together and fill joints."
    ],
    [
      "Maintenance",
      "Routine work that keeps a building, system, or property in serviceable condition."
    ],
    [
      "Mezzanine",
      "An intermediate partial floor between the main floors of a building."
    ],
    [
      "Manhole",
      "An access opening to underground drainage or utility systems."
    ],
    [
      "Millwork",
      "Factory-made or custom wooden building components such as trim, doors, and cabinets."
    ],
    [
      "Moisture Barrier",
      "A layer designed to limit the movement of moisture through a building assembly."
    ],
    [
      "Mix Design",
      "Specified proportions of concrete ingredients chosen to meet performance requirements."
    ],
    [
      "Modular Construction",
      "Building using sections or modules manufactured partly off-site and assembled on-site."
    ],
    [
      "Mullion",
      "A vertical or horizontal member separating and supporting window or glass units."
    ]
  ],
  "N": [
    [
      "New Construction",
      "Building a new structure on a prepared site."
    ],
    [
      "Non-Load-Bearing Wall",
      "A wall that divides spaces but does not carry the main structural loads."
    ],
    [
      "Nosing",
      "The projecting front edge of a stair tread."
    ],
    [
      "Natural Ventilation",
      "Air movement through a building using openings such as windows and vents."
    ],
    [
      "Nailer",
      "A piece of timber or other material provided to give a fixing point for finishes or fittings."
    ],
    [
      "Nominal Size",
      "A stated or standardised size that may differ from the actual measured dimension."
    ],
    [
      "Noise Control",
      "Design and construction measures used to reduce unwanted sound transmission."
    ],
    [
      "Network Cabling",
      "Cables installed to support data and communications systems in a building."
    ],
    [
      "Neutral Wire",
      "An electrical conductor that provides a return path in a circuit, as designed for the system."
    ],
    [
      "Niche",
      "A recessed space in a wall, often used for storage or architectural detailing."
    ]
  ],
  "O": [
    [
      "Occupancy Permit",
      "Approval from the relevant authority allowing a building to be occupied, where required."
    ],
    [
      "Open Floor Plan",
      "A layout with fewer dividing walls and more connected interior spaces."
    ],
    [
      "Overhang",
      "A part of a roof or structure that projects beyond the wall or support below."
    ],
    [
      "On-Site Inspection",
      "A physical check of construction work or site conditions at the property."
    ],
    [
      "Orientation",
      "The positioning of a building in relation to sun, wind, views, and access."
    ],
    [
      "Open-Web Truss",
      "A truss with open spaces between its members for strength and service routing."
    ],
    [
      "Overlay",
      "A new layer of material installed over an existing surface."
    ],
    [
      "Outrigger",
      "A projecting structural member used to support or stabilise another component."
    ],
    [
      "Outlet",
      "A point where a service such as electricity, water, or drainage is accessed."
    ],
    [
      "Overburden",
      "Soil or material that must be removed to reach the required construction level or bearing layer."
    ]
  ],
  "P": [
    [
      "Plastering",
      "Applying a smooth protective or decorative layer to walls and ceilings."
    ],
    [
      "Plumbing",
      "Installing and maintaining pipes, fixtures, and water or drainage systems."
    ],
    [
      "Painting",
      "Applying paint or protective coatings to building surfaces."
    ],
    [
      "Paving",
      "Covering outdoor surfaces with materials such as pavers, concrete, or stone."
    ],
    [
      "Partition Wall",
      "An interior wall used to divide a building into rooms or zones."
    ],
    [
      "Pile Foundation",
      "A deep foundation element that transfers loads to stronger soil or rock below ground."
    ],
    [
      "Project Schedule",
      "A plan showing construction activities, their durations, and their sequence."
    ],
    [
      "Precast Concrete",
      "Concrete elements cast and cured before being transported to the construction location."
    ],
    [
      "Protective Coating",
      "A surface layer applied to help resist moisture, corrosion, wear, or chemicals."
    ],
    [
      "Punch List",
      "A list of incomplete or defective items to be addressed before project handover."
    ]
  ],
  "Q": [
    [
      "Quantity Surveying",
      "Measuring and managing construction quantities, costs, and commercial aspects of a project."
    ],
    [
      "Quotation",
      "A stated price for specified construction work, materials, or services."
    ],
    [
      "Quality Inspection",
      "A check that materials and completed work meet project requirements."
    ],
    [
      "Quality Assurance",
      "Planned processes used to help ensure construction work meets specified standards."
    ],
    [
      "Quality Control",
      "Inspections and tests used to identify whether work meets required specifications."
    ],
    [
      "Quantity Takeoff",
      "Measuring quantities of materials or work from drawings and specifications."
    ],
    [
      "Quick-Setting Cement",
      "Cement formulated to set faster than ordinary cement under specified conditions."
    ],
    [
      "Quoin",
      "A corner feature made from masonry units, sometimes used for strength or decoration."
    ],
    [
      "Quarter-Turn Stair",
      "A staircase that changes direction by approximately 90 degrees using a landing or winders."
    ],
    [
      "Quarry Tile",
      "A dense, unglazed tile often used for durable floors in utility or service areas."
    ]
  ],
  "R": [
    [
      "Renovation",
      "Repairing, updating, or improving an existing building or space."
    ],
    [
      "Roofing",
      "Installing, repairing, or maintaining a building’s roof and its components."
    ],
    [
      "Reinforcement",
      "Steel bars, mesh, or other materials used to strengthen concrete."
    ],
    [
      "Retaining Wall",
      "A wall designed to hold back soil and resist lateral earth pressure."
    ],
    [
      "Repair",
      "Fixing damaged, broken, or defective building components."
    ],
    [
      "Rafter",
      "A sloping roof member that supports roof coverings and related loads."
    ],
    [
      "Riser",
      "The vertical face between stair treads, or a vertical pipe in a service system."
    ],
    [
      "Rough-In",
      "The initial installation of services such as plumbing, electrical wiring, or HVAC before finishes."
    ],
    [
      "Rainwater Harvesting",
      "Collecting and storing rainwater for suitable non-potable or approved uses."
    ],
    [
      "Rebar",
      "Steel reinforcing bar embedded in concrete to help resist tensile forces."
    ]
  ],
  "S": [
    [
      "Structural Work",
      "Work on load-bearing components such as foundations, beams, columns, and structural walls."
    ],
    [
      "Scaffolding",
      "A temporary platform and framework that gives workers access to elevated work areas."
    ],
    [
      "Site Inspection",
      "Reviewing a construction site to assess progress, conditions, quality, or safety."
    ],
    [
      "Slab",
      "A flat structural element, commonly concrete, used for floors or roofs."
    ],
    [
      "Surveying",
      "Measuring and mapping land to support design, boundaries, and construction layout."
    ],
    [
      "Substructure",
      "The parts of a building below or near ground level that support the superstructure."
    ],
    [
      "Superstructure",
      "The part of a building above the foundation or substructure."
    ],
    [
      "Soffit",
      "The underside of a roof overhang, staircase, balcony, or other construction element."
    ],
    [
      "Specification",
      "A document describing required materials, workmanship, performance, and construction standards."
    ],
    [
      "Settlement",
      "Downward movement of soil or a structure due to changes in ground conditions or loading."
    ]
  ],
  "T": [
    [
      "Tiling",
      "Installing tiles on floors, walls, bathrooms, kitchens, and other surfaces."
    ],
    [
      "Timber",
      "Wood prepared for construction, flooring, joinery, and structural use."
    ],
    [
      "Terrace",
      "A flat outdoor area attached to or located on a building."
    ],
    [
      "Truss",
      "A framework of connected members designed to support loads across a span."
    ],
    [
      "Trowel",
      "A hand tool used to spread, shape, or smooth mortar, plaster, and concrete."
    ],
    [
      "Thermal Bridge",
      "A part of a building envelope that transfers heat more readily than surrounding areas."
    ],
    [
      "Tie Beam",
      "A structural member that connects elements and helps resist outward forces or movement."
    ],
    [
      "Topsoil",
      "The upper soil layer often retained or reused for landscaping."
    ],
    [
      "Temporary Works",
      "Temporary structures or measures needed to safely construct, support, or access permanent works."
    ],
    [
      "Tolerance",
      "The permitted variation in a dimension, position, or construction quality."
    ]
  ],
  "U": [
    [
      "Underpinning",
      "Work that strengthens or stabilises an existing building’s foundation."
    ],
    [
      "Utility Services",
      "Services such as electricity, water, drainage, and communications supplied to a property."
    ],
    [
      "uPVC",
      "Unplasticised polyvinyl chloride used in products such as windows, doors, and pipes."
    ],
    [
      "Underlayment",
      "A layer installed beneath a finished floor or roof covering."
    ],
    [
      "Unreinforced Masonry",
      "Brick, block, or stone masonry without embedded structural reinforcement."
    ],
    [
      "U-Value",
      "A measure of how readily heat passes through a building element; lower values indicate better insulation."
    ],
    [
      "Utility Room",
      "A space for equipment, laundry, or household service functions."
    ],
    [
      "Underground Drainage",
      "Pipes and channels below ground that carry wastewater or rainwater."
    ],
    [
      "Uniform Building Code",
      "A building code or set of rules adopted by a jurisdiction; the applicable local code must be checked."
    ],
    [
      "Upstand",
      "A short vertical section raised above a surface, often used at roofs, floors, or waterproofing details."
    ]
  ],
  "V": [
    [
      "Ventilation",
      "Supplying fresh air to and removing stale air from an enclosed space."
    ],
    [
      "Valuation",
      "Estimating a property’s value based on its features, condition, and relevant market evidence."
    ],
    [
      "Vinyl Flooring",
      "A resilient floor covering used in residential and commercial spaces."
    ],
    [
      "Vapour Barrier",
      "A layer designed to limit water vapour movement through a building assembly."
    ],
    [
      "Vault",
      "An arched ceiling or roof structure, or a secure enclosed space in a building."
    ],
    [
      "Vent Stack",
      "A pipe that allows air into a drainage system to help it operate properly."
    ],
    [
      "Vertical Alignment",
      "The positioning of a component so it follows the intended vertical line."
    ],
    [
      "Veneer",
      "A thin layer of material, such as wood or brick, used as a finish over another surface."
    ],
    [
      "Vibration Control",
      "Design measures used to limit unwanted movement or vibration in structures and equipment."
    ],
    [
      "Void",
      "An empty space within or between building components, sometimes provided for services or design purposes."
    ]
  ],
  "W": [
    [
      "Waterproofing",
      "Protecting a building element from water penetration and moisture damage."
    ],
    [
      "Wall Finishing",
      "The final surface treatment of a wall, such as paint, plaster, tile, or cladding."
    ],
    [
      "Window Frame",
      "The structure that surrounds and supports a window."
    ],
    [
      "Wiring",
      "Electrical cables and connections installed to distribute power through a building."
    ],
    [
      "Waterproof Membrane",
      "A continuous layer designed to prevent water from passing through a surface or assembly."
    ],
    [
      "Wall Tie",
      "A connector that links wall leaves or attaches cladding to a supporting structure."
    ],
    [
      "Waste Pipe",
      "A pipe that carries wastewater from fixtures toward the drainage system."
    ],
    [
      "Weep Hole",
      "A small opening that allows trapped water to drain from a wall or cavity."
    ],
    [
      "Wet Area",
      "A space such as a bathroom or shower where surfaces require suitable water management."
    ],
    [
      "Work Breakdown Structure",
      "A project-management method that divides construction work into smaller, manageable tasks."
    ]
  ],
  "X": [
    [
      "X-Bracing",
      "Crossed structural members arranged in an X shape to help stabilise a frame."
    ],
    [
      "X-Section",
      "The shape seen when a component is cut across its length."
    ],
    [
      "Xeriscaping",
      "Landscape design that reduces irrigation needs through suitable plants and water-wise planning."
    ],
    [
      "XPS Insulation",
      "Extruded polystyrene board used as thermal insulation in suitable building assemblies."
    ],
    [
      "X-Ray Inspection",
      "Radiographic testing sometimes used to examine welds or materials without cutting them open."
    ],
    [
      "Expansion Joint Cross Detail",
      "A drawing detail showing how an expansion joint crosses or meets another building element."
    ],
    [
      "External Wall",
      "A wall forming part of the building envelope and separating interior space from outdoors."
    ],
    [
      "Excavator",
      "A machine used to dig soil, trenches, and foundations and to move materials."
    ],
    [
      "Exit Route",
      "A designated path that leads occupants toward a safe exit from a building."
    ],
    [
      "Existing Conditions Drawing",
      "A drawing documenting the building or site as it exists before proposed work."
    ]
  ],
  "Y": [
    [
      "Yard Landscaping",
      "Planning and improving outdoor areas such as gardens, paths, and lawns."
    ],
    [
      "Yield Strength",
      "The stress at which a material begins to deform permanently."
    ],
    [
      "Yard Drain",
      "A drain that collects surface water from a yard or paved outdoor area."
    ],
    [
      "Yard Wall",
      "A wall enclosing, dividing, or supporting an outdoor property area."
    ],
    [
      "Yard Paving",
      "A hard surface installed in outdoor areas for access or use."
    ],
    [
      "Yoke",
      "A connecting or supporting piece used in certain construction, formwork, or equipment assemblies."
    ],
    [
      "Y-Branch Fitting",
      "A pipe fitting with a branch entering at an angle, used in suitable drainage layouts."
    ],
    [
      "Yellow Iron",
      "Informal industry wording for heavy construction machinery, commonly painted yellow."
    ],
    [
      "Yield Line",
      "A line used in structural analysis to represent a region where a slab may form a plastic hinge."
    ],
    [
      "Year-Round Construction",
      "Construction planned to continue through different seasons using suitable methods and protections."
    ]
  ],
  "Z": [
    [
      "Zoning",
      "Rules that govern permitted land uses and development in a particular area."
    ],
    [
      "Zinc Roofing",
      "Roof covering made from zinc sheets or panels."
    ],
    [
      "Z-Bar",
      "A Z-shaped metal section used in framing, cladding support, or finishing details."
    ],
    [
      "Z Purlin",
      "A Z-shaped structural member used to support roof or wall sheeting."
    ],
    [
      "Zero Lot Line",
      "A site layout where a building is placed at or very close to a property boundary, subject to local rules."
    ],
    [
      "Zone Valve",
      "A valve that controls flow to a particular zone in a building’s heating or plumbing system."
    ],
    [
      "Z-Bracing",
      "Bracing arranged in a Z-like pattern to provide stability in a frame or panel."
    ],
    [
      "Zinc Coating",
      "A protective zinc layer applied to steel to help resist corrosion."
    ],
    [
      "Zigzag Stair",
      "A stair arrangement with a repeated angled profile, depending on the design."
    ],
    [
      "Zone of Influence",
      "The area of soil or structure affected by a load, excavation, or foundation."
    ]
  ]
}).map(([letter, entries]) => [
    letter,
    (entries as string[][]).map(([term, definition]) => ({ term, definition })),
  ])
);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");
  const selectedTerms = glossaryTerms[selectedLetter] ?? [];

  return (
    <div className="h-full">
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        {/* Alphabet Navigation */}
        <div className="card mb-8 rounded-lg px-4 py-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {alphabet.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(letter)}
                aria-pressed={selectedLetter === letter}
                className={`flex h-8 w-8 items-center justify-center rounded text-sm font-bold transition-all ${
                  selectedLetter === letter
                    ? "bg-teal-700 text-white"
                    : "bg-white text-gray-800 hover:bg-teal-100"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Terms */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {selectedTerms.map((item) => (
            <article
              key={item.term}
              className="footer rounded-lg border border-gray-300 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-3 text-lg font-bold">{item.term}</h3>
              <p className="text2 text-sm leading-relaxed">{item.definition}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
