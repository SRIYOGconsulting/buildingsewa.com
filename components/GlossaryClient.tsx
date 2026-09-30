"use client";
import React, { useState } from "react";

export default function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");
  type Term = {
    term: string;
    definition: string;
  };
  type TermsByLetter = {
    [key: string]: Term[]; // keys like 'A', 'B', 'C'
  };
  const glossaryTerms: TermsByLetter = {
    A: [
      {
        term: "Architect",
        definition:
          "A professional who plans and designs buildings while considering functionality, safety, structure, and appearance.",
      },
      {
        term: "Aggregate",
        definition:
          "Materials such as sand, gravel, and crushed stone used in concrete and other construction work.",
      },
      {
        term: "Asphalt",
        definition:
          "A durable material commonly used for roads, driveways, pathways, and other paved surfaces.",
      },
      {
        term: "Attic",
        definition:
          "The space located directly below a building's roof, often used for storage or additional living space.",
      },
      {
        term: "Anchor Bolt",
        definition:
          "A bolt used to securely connect a building structure to its foundation.",
      },
    ],

    B: [
      {
        term: "Beam",
        definition:
          "A horizontal structural element designed to support loads and transfer them to columns or walls.",
      },
      {
        term: "Brickwork",
        definition:
          "Construction work involving the laying and joining of bricks using mortar.",
      },
      {
        term: "Backfill",
        definition:
          "Soil or other material placed back into an excavated area after construction work.",
      },
      {
        term: "Building Inspection",
        definition:
          "A professional examination of a building to identify structural, safety, maintenance, or construction issues.",
      },
      {
        term: "Building Contractor",
        definition:
          "A professional or company responsible for managing and completing construction or renovation work.",
      },
    ],

    C: [
      {
        term: "Carpentry",
        definition:
          "The work of cutting, shaping, and installing wood for structures, doors, furniture, cabinets, and finishes.",
      },
      {
        term: "Concrete",
        definition:
          "A construction material made from cement, water, and aggregates that hardens into a strong structural material.",
      },
      {
        term: "Construction",
        definition:
          "The process of building, modifying, repairing, or maintaining residential and commercial structures.",
      },
      {
        term: "Contractor",
        definition:
          "A professional or company hired to perform construction, renovation, repair, or other building-related services.",
      },
      {
        term: "Cladding",
        definition:
          "A protective or decorative layer installed on the exterior of a building.",
      },
    ],

    D: [
      {
        term: "Damp Proofing",
        definition:
          "Methods and materials used to prevent moisture from entering or rising through parts of a building.",
      },
      {
        term: "Drainage",
        definition:
          "A system designed to collect and safely remove rainwater and wastewater from a property.",
      },
      {
        term: "Drywall",
        definition:
          "Lightweight panels commonly used to create interior walls and ceilings.",
      },
      {
        term: "Door Frame",
        definition:
          "The structural frame surrounding a door that supports the door and its hinges.",
      },
      {
        term: "Demolition",
        definition:
          "The process of safely removing or tearing down an existing structure or part of a building.",
      },
    ],

    E: [
      {
        term: "Electrical Work",
        definition:
          "The installation, repair, and maintenance of electrical wiring, outlets, lighting, and electrical systems.",
      },
      {
        term: "Excavation",
        definition:
          "The process of removing soil, rock, or other materials to prepare a site for construction.",
      },
      {
        term: "Elevation",
        definition:
          "A drawing or view that shows one side of a building and its external features.",
      },
      {
        term: "Estimation",
        definition:
          "The process of calculating the expected cost, materials, labor, and time required for a construction project.",
      },
      {
        term: "Exterior",
        definition: "The outside parts and surfaces of a building or property.",
      },
    ],

    F: [
      {
        term: "Foundation",
        definition:
          "The structural base of a building that transfers its weight safely into the ground.",
      },
      {
        term: "Flooring",
        definition:
          "The material and finished surface installed on floors, such as tiles, wood, vinyl, or stone.",
      },
      {
        term: "Formwork",
        definition:
          "A temporary structure used to hold and shape concrete until it becomes strong enough to support itself.",
      },
      {
        term: "Finishing",
        definition:
          "The final work applied to building surfaces, including painting, plastering, tiling, and other treatments.",
      },
      {
        term: "Facade",
        definition:
          "The exterior face or front of a building, including its architectural and decorative elements.",
      },
    ],

    G: [
      {
        term: "General Contractor",
        definition:
          "A contractor responsible for coordinating and managing different construction activities and workers.",
      },
      {
        term: "Grouting",
        definition:
          "The process of filling gaps or joints between tiles or other construction materials with grout.",
      },
      {
        term: "Gutter",
        definition:
          "A channel installed along a roof edge to collect and direct rainwater.",
      },
      {
        term: "Gypsum Board",
        definition:
          "A lightweight construction board commonly used for interior walls and ceilings.",
      },
      {
        term: "Groundwork",
        definition:
          "Construction work carried out on or below ground level, including excavation, drainage, and foundation preparation.",
      },
    ],

    H: [
      {
        term: "Home Renovation",
        definition:
          "The process of improving, repairing, updating, or modifying an existing home.",
      },
      {
        term: "HVAC",
        definition:
          "Systems used for heating, ventilation, and air conditioning inside a building.",
      },
      {
        term: "Home Inspection",
        definition:
          "A detailed examination of a home's condition to identify defects, damage, or maintenance needs.",
      },
      {
        term: "Handrail",
        definition:
          "A rail installed along stairs, ramps, or walkways to provide support and improve safety.",
      },
      {
        term: "Hinge",
        definition:
          "A mechanical joint that allows a door, window, or panel to open and close.",
      },
    ],

    I: [
      {
        term: "Interior Design",
        definition:
          "The planning and arrangement of interior spaces to improve their function, appearance, comfort, and usability.",
      },
      {
        term: "Insulation",
        definition:
          "Material used to reduce the transfer of heat or sound between spaces.",
      },
      {
        term: "Inspection",
        definition:
          "A detailed check of construction or building work to identify problems and ensure required standards are met.",
      },
      {
        term: "Installation",
        definition:
          "The process of fitting or setting up building materials, equipment, fixtures, or systems.",
      },
      {
        term: "Irrigation",
        definition:
          "A system used to supply water to gardens, lawns, plants, and landscaped areas.",
      },
    ],

    J: [
      {
        term: "Joinery",
        definition:
          "Skilled work involving the construction and fitting of wooden components such as doors, cabinets, and furniture.",
      },
      {
        term: "Joist",
        definition:
          "A horizontal structural member that supports floors or ceilings.",
      },
      {
        term: "Jamb",
        definition: "The vertical side component of a door or window frame.",
      },
      {
        term: "Junction",
        definition:
          "A point where two or more building components, surfaces, or systems meet.",
      },
    ],

    K: [
      {
        term: "Kitchen Renovation",
        definition:
          "The process of improving or updating a kitchen through changes to cabinets, flooring, countertops, lighting, or other features.",
      },
      {
        term: "Kerb",
        definition:
          "A raised edge separating a road, pavement, driveway, or landscaped area.",
      },
      {
        term: "Keyway",
        definition:
          "A groove or recess formed between concrete sections to improve their connection.",
      },
      {
        term: "Kitchen Worktop",
        definition:
          "A durable surface installed on top of kitchen cabinets for food preparation and other kitchen activities.",
      },
    ],

    L: [
      {
        term: "Landscaping",
        definition:
          "The planning, design, and improvement of outdoor areas around a building or property.",
      },
      {
        term: "Lintel",
        definition:
          "A horizontal structural support placed above a door, window, or other opening.",
      },
      {
        term: "Load-Bearing Wall",
        definition:
          "A wall that supports the weight of the structure above it.",
      },
      {
        term: "Lighting",
        definition:
          "The installation and arrangement of lights used to illuminate indoor and outdoor areas.",
      },
      {
        term: "Levelling",
        definition:
          "The process of making a surface even, level, and properly aligned.",
      },
    ],

    M: [
      {
        term: "Masonry",
        definition:
          "Construction using materials such as bricks, blocks, or stone joined with mortar.",
      },
      {
        term: "Mortar",
        definition:
          "A mixture used to join bricks, blocks, or stones together.",
      },
      {
        term: "Maintenance",
        definition:
          "Regular work performed to keep a building, property, or system in good working condition.",
      },
      {
        term: "Mezzanine",
        definition:
          "A partial floor built between the main floors of a building.",
      },
      {
        term: "Manhole",
        definition:
          "An access opening that allows workers to reach underground drainage or utility systems.",
      },
    ],

    N: [
      {
        term: "New Construction",
        definition:
          "The process of constructing a completely new building or structure on a prepared site.",
      },
      {
        term: "Non-Load-Bearing Wall",
        definition:
          "A wall that divides spaces but does not support the main structural load of a building.",
      },
      {
        term: "Nosing",
        definition:
          "The front edge of a stair step that extends slightly beyond the vertical face below it.",
      },
      {
        term: "Natural Ventilation",
        definition:
          "The movement of fresh air through a building using windows, doors, vents, and other openings.",
      },
    ],

    O: [
      {
        term: "Occupancy Permit",
        definition:
          "Official approval confirming that a building is suitable and safe for occupation.",
      },
      {
        term: "Open Floor Plan",
        definition:
          "A layout with fewer interior walls, creating a more open and connected living or working space.",
      },
      {
        term: "Overhang",
        definition:
          "A part of a roof or structure that extends beyond the wall below it.",
      },
      {
        term: "On-Site Inspection",
        definition:
          "A physical inspection of construction or building work at the property location.",
      },
    ],

    P: [
      {
        term: "Plastering",
        definition:
          "The process of applying a smooth protective or decorative layer to walls and ceilings.",
      },
      {
        term: "Plumbing",
        definition:
          "The installation, repair, and maintenance of pipes, fixtures, and systems used for water and drainage.",
      },
      {
        term: "Painting",
        definition:
          "The application of paint or protective coatings to walls, ceilings, surfaces, and other building elements.",
      },
      {
        term: "Paving",
        definition:
          "The process of covering outdoor surfaces such as driveways, paths, and patios with suitable materials.",
      },
      {
        term: "Partition Wall",
        definition:
          "An interior wall used to divide a building into separate rooms or spaces.",
      },
    ],

    Q: [
      {
        term: "Quantity Surveying",
        definition:
          "The professional management and measurement of construction costs, materials, and project quantities.",
      },
      {
        term: "Quotation",
        definition:
          "An estimated price provided by a contractor or service provider for completing specified work.",
      },
      {
        term: "Quality Inspection",
        definition:
          "A check performed to ensure construction materials and completed work meet required quality standards.",
      },
    ],

    R: [
      {
        term: "Renovation",
        definition:
          "The process of repairing, updating, or improving an existing building or space.",
      },
      {
        term: "Roofing",
        definition:
          "The installation, repair, or maintenance of a building's roof and related components.",
      },
      {
        term: "Reinforcement",
        definition:
          "Materials such as steel bars used to increase the strength of concrete structures.",
      },
      {
        term: "Retaining Wall",
        definition:
          "A wall designed to hold back soil and prevent erosion or movement of earth.",
      },
      {
        term: "Repair",
        definition:
          "The process of fixing damaged, broken, or defective parts of a building or property.",
      },
    ],

    S: [
      {
        term: "Structural Work",
        definition:
          "Construction work involving the main load-bearing components of a building, such as foundations, beams, columns, and walls.",
      },
      {
        term: "Scaffolding",
        definition:
          "A temporary structure that provides workers with safe access to elevated areas during construction or maintenance.",
      },
      {
        term: "Site Inspection",
        definition:
          "An inspection carried out at a construction or property site to evaluate work, conditions, and safety.",
      },
      {
        term: "Slab",
        definition:
          "A flat structural element made of concrete, commonly used for floors, roofs, and foundations.",
      },
      {
        term: "Surveying",
        definition:
          "The process of measuring and mapping land and property to support planning and construction.",
      },
    ],

    T: [
      {
        term: "Tiling",
        definition:
          "The process of installing tiles on floors, walls, bathrooms, kitchens, and other surfaces.",
      },
      {
        term: "Timber",
        definition:
          "Wood prepared for use in construction, furniture, flooring, doors, and other building applications.",
      },
      {
        term: "Terrace",
        definition:
          "A flat outdoor area connected to or located on a building, commonly used for recreation or access.",
      },
      {
        term: "Truss",
        definition:
          "A framework of connected structural members used to support roofs or other loads.",
      },
    ],

    U: [
      {
        term: "Underpinning",
        definition:
          "A construction method used to strengthen or stabilize the foundation of an existing building.",
      },
      {
        term: "Utility Services",
        definition:
          "Essential services such as electricity, water, gas, drainage, and telecommunications supplied to a property.",
      },
      {
        term: "UPVC",
        definition:
          "A durable plastic material commonly used for windows, doors, pipes, and other building components.",
      },
    ],

    V: [
      {
        term: "Ventilation",
        definition:
          "The process of supplying fresh air and removing stale air from a building.",
      },
      {
        term: "Valuation",
        definition:
          "The process of estimating the current value of a property based on its characteristics and market conditions.",
      },
      {
        term: "Vinyl Flooring",
        definition:
          "A durable and easy-to-maintain flooring material commonly used in residential and commercial spaces.",
      },
    ],

    W: [
      {
        term: "Waterproofing",
        definition:
          "The process of protecting a building or surface from water penetration and moisture damage.",
      },
      {
        term: "Wall Finishing",
        definition:
          "The final treatment applied to walls, such as painting, plastering, wallpapering, or decorative finishes.",
      },
      {
        term: "Window Frame",
        definition: "The structure that surrounds and supports a window.",
      },
      {
        term: "Wiring",
        definition:
          "The installation of electrical cables and connections used to supply power throughout a building.",
      },
    ],

    X: [
      {
        term: "X-Bracing",
        definition:
          "A structural bracing arrangement in which members cross in an X shape to improve the stability of a structure.",
      },
    ],

    Y: [
      {
        term: "Yard Landscaping",
        definition:
          "The planning and improvement of outdoor areas such as yards, gardens, pathways, and lawns.",
      },
      {
        term: "Yield Strength",
        definition:
          "The amount of stress a construction material can withstand before it begins to permanently deform.",
      },
    ],

    Z: [
      {
        term: "Zoning",
        definition:
          "Rules that determine how land and properties can be used and what types of buildings can be developed in an area.",
      },
      {
        term: "Zinc Roofing",
        definition:
          "Roofing made using zinc sheets or panels that provide durability and resistance to weather.",
      },
    ],
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const availableLetters = Object.keys(glossaryTerms);

  return (
    <div className="h-full">
      {/* Header Section */}
      {/* <Ribbon name="Glossary" showfont={false}/> */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Alphabet Navigation */}
        <div className="card rounded-lg py-4 px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() =>
                  availableLetters.includes(letter) && setSelectedLetter(letter)
                }
                className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded transition-all ${
                  availableLetters.includes(letter)
                    ? selectedLetter === letter
                      ? "bg-teal-700 text-white"
                      : "bg-white text-gray-800 hover:bg-teal-100"
                    : "text-gray-400 cursor-not-allowed"
                }`}
                disabled={!availableLetters.includes(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms[selectedLetter]?.map((item, index) => (
            <div
              key={index}
              className="footer border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-3">{item.term}</h3>
              <p className=" text-sm text2 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!glossaryTerms[selectedLetter] && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No terms available for letter {selectedLetter}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
