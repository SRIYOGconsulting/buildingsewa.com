'use client'
import React, { useState } from 'react';


export default function Glossary() {
    const [selectedLetter, setSelectedLetter] = useState<string>('A');
    type Term = {
        term : string ,
        definition : string
    }
    type TermsByLetter = {
        [key: string]: Term[]; // keys like 'A', 'B', 'C'
    };
    const glossaryTerms:TermsByLetter = {
        A: [
            {
                term: "Aggregate",
                definition: "Materials like sand, gravel, and crushed stone used in concrete and contruction."
            },
            {
                term: "Architrave",
                definition: "Adecorative frame placed around a door or window"
            },
            {
                term: "Asphalt",
                definition: "A strong, dark material commanly used for roads and driveways."
            },
            {
                term: "Acoustic Insulation",
                definition: "Material used to reduce noise passing between rooms."
            },
             {
                term: "Anchor Bolt",
                definition: "A bolt used to firmly connect a structure to its foundation."
            },
             {
                term: "Apron",
                definition: "A praved or concrete area placed near a building entrance or opening."
            },
             {
                term: "Attic",
                definition: "The space directly below a building's roof, often used for storage."
            },
            {
                term: "Aggregate Concrete",
                definition: "Concrete made using materials such as gravel or crushed stone."
            },
             {
                term: "Alcove",
                definition: "A small recessed area built into a room or wall."
            },
             {
                term: "Acoustic Panel",
                definition: "A panel designed to reduce unwanted sound inside a room."
            },
        ],
        B: [
            {
                term: "Beam",
                definition: "A horizontal sttructure element that support the weight of a building."
            },
            {
                term: "Bulkhead",
                definition: "A structure used to separate or support different areas of a building.."
            },
            {
                term: "Backfill",
                definition: "Soil or other material placed back into an area after excavation."
            },
            {
                term: "Balustrade",
                definition: "A row of small posts supporting a handrail along stairs or balconies."
            },
             {
                term: "Batten",
                definition: "A narrow strip of wood or metal used to support or fix building materials."
            },
             {
                term: "Building Envelope",
                definition: "The outer parts of a building that protect the inside from weather."
            },
             {
                term: "Bedding",
                definition: "A layer of material placed underneath tiles, bricks, or other surfaces."
            },
             {
                term: "Bracing",
                definition: "Structural support used to make building more stable."
            },
             {
                term: "Bifold Door",
                definition: "A door made of panels that fold together when opened."
            },
        ],
        C: [
            {
                term: "Cantilever",
                definition: "A structure that extends outward while being supported from only one end."
            },
            {
                term: "Coping",
                definition: "A protective covering placed on top of a wall to prevent water damage."
            },
            {
                term: "Cornice",
                definition: "A decorative structure placed where a wall meets a ceiling or roof."
            },
            {
                term: "Cladding",
                definition: "A protective or decorative layer attached to the outside of a building."
            },
            {
                term: "Compaction",
                definition: "The process of pressing soil or other material to make it more stable."
            },
            {
                term: "Cavity Wall",
                definition: "A wall built with a gap between two layers to improve insulation and prevent moisture."
            },
            {
                term: "Curing",
                definition: "The process of keeping concrete properly moist while becomes strong."
            },
            {
                term: "Column",
                definition: "A vertical structural element that supports the weight above it."
            },
            {
                term: "Concrete Slab",
                definition: "A flat layer of concrete commonly used for floors, roofs and foundations."
            },
            {
                term: "Capillary Action",
                definition: "The movement of water through tiny spaces in building materials."
            },
        ],
        D: [
            {
                term: "Damp Proof Course (DPC)",
                definition: "A protective layer that stops moisture from rising through walls."
            },
            {
                term: "Damp proofing",
                definition: "Methods used to prevent moisture from entering a building."
            },
            {
                term: "Dead load",
                definition: "The permanent weight of a building's structure and fixed materials."
            },
            {
                term: "Deflection",
                definition: "The bending or movement of a building element under weight."
            },
            {
                term: "Drainage",
                definition: "A system designed to safely remove water from a building or property."
            },
            {
                term: "Dado",
                definition: "The lower part of an interior wall, often finished differently for protection or decoration."
            },
            {
                term: "Dormer",
                definition: "A window that projects outward from a sloping roof."
            },
            {
                term: "Downpipe",
                definition: "A pipe that carries rainwater from a roof gutter to the ground."
            },
            {
                term: "Drywall",
                definition: "Lightweight boards used to create interior walls and cellings."
            },
            {
                term: "Ductwork",
                definition: "Anetwork of passages used to move air through a building."
            },
        ],
        E: [
            {
                term: "Eaves",
                definition: "The edges of a roof that extends beyond the walls of a building."
            },
            {
                term: "Efflorescence",
                definition: "White powdery marks caused by salts appearing on the surface of walls."
            },
            {
                term: "Expansion Joint",
                definition: "A gap designed to allow building materials to expand and contract safely."
            },
             {
                term: "Excavation",
                definition: "The process of removing soil to prepare for construction."
            },
             {
                term: "Elevation",
                definition: "A drawing showing what one side of a building looks like."
            },
             {
                term: "Escutcheon",
                definition: "A decorative plate covering the area around a pipe, lock, or fitting."
            },
             {
                term: "Egress",
                definition: "A safe way for people to leave a building during normal use or emergencies."
            },
             {
                term: "Epoxy Flooring",
                definition: "A strong, smooth floor coating made from epoxy material."
            },
             {
                term: "External Wall",
                definition: "A wall forming the outer boundary of a building."
            },
             {
                term: "Earthwork",
                definition: "Construction work involving the digging, moving, or shaping of a soil."
            },
        ],
        F: [
            {
                term: "Footing",
                definition: "The widened base of foundation that spreads the building's weight into the ground."
            },
            {
                term: "Formwork",
                definition: "A temporary structure used to hold wet concrete in the correct shape"
            },
            {
                term: "Fascia",
                definition: "A board fixed along the edge of a roof, often supporting the gutter."
            },
            {
                term: "Flashing",
                definition: "Thin material used around roofs, windows, and joints to prevent water from entering."
            },
            {
                term: "Floor Joist",
                definition: "A horiaontal support that carries the weight of a floor."
            },
             {
                term: "Facade",
                definition: "The front or main exterior face of a building."
            },
             {
                term: "Finishes",
                definition: "The final materials and treatments applied to surfaces for apperance and protection."
            },
             {
                term: "Fireproofing",
                definition: "Materials or methods used to help a building resist fire."
            },
             {
                term: "Foundation",
                definition: "The part of a building that transfers its weight safely into the ground."
            },
             {
                term: "French Drain",
                definition: "A drainage system that uses a gravel-filled tranch and pipe to move away excess water."
            },
        ],
        G: [
            {
                term: "Gable",
                definition: "The triangular upper part of a wall beneath a sloping roof."
            },
            {
                term: "Girder",
                definition: "A large structural beam that supports smaller beams or parts of a building."
            },
            {
                term: "Grout",
                definition: "A materials used to fill the gaps between tiles."
            },
             {
                term: "Glazing",
                definition: "The glass fitted into window, doors, or other building openings."
            },
             {
                term: "Grade Beam",
                definition: "A reinforced beam that helps transfer building loads to the foundation."
            },
             {
                term: "Geotextile",
                definition: "A fabric used in construction to imporve soil stability and drainage."
            },
             {
                term: "Groundwater",
                definition: "Water natually found beneath the surface of the ground."
            },
             {
                term: "Gutter",
                definition: "A channel along a roof that collects and directs rainwater."
            },
             {
                term: "Gypsum Board",
                definition: "A lightweight board commonly used for interior walls and ceilings."
            },
             {
                term: "Green Building",
                definition: "A building designed to reduce energy use and environmental impact."
            },
        ],
        H: [
            {
                term: "HVAC",
                definition: "Systems used to control heating, cooling, and air movement inside a building."
            },
            {
                term: "Header",
                definition: "A structural piece placed above an opening such as a door or window."
            },
            {
                term: "Herringbone",
                definition: "A pattern where materials such as tiles or flooring are arranged in a zigzag design."
            },
            {
                term: "Hardscape",
                definition: "Non-living features of outdoor areas, such as paths, walls, and patios."
            },
            {
                term: "Handrail",
                definition: "A rail designed to provide support when using stairs or ramps."
            },
            {
                term: "Heat Insulation",
                definition: "Materials that slows the transfer of heat between spaces."
            },
            {
                term: "Hollow Block",
                definition: "A lightweight building block containing holloe spaces inside it."
            },
            {
                term: "Hydraulic Cement",
                definition: "Cement that hardens when mixed with water and can be used in damp areas."
            },
            {
                term: "Hip Roof",
                definition: "A roof with sloping sides on all four edges."
            },
            {
                term: "Hinge",
                definition: "A joint that allows a door, window, or panel to open and close."
            },
        ],
        I: [
            {
                term: "Insulation",
                definition: "Material used to reduce the transfer of heat, sound or moisture."
            },
            {
                term: "Infiltration",
                definition: "Unwanted air or water entering a building through gaps or cracks."
            },
            {
                term: "I-Beam",
                definition: "A strong structural beam shaped like the letter I."
            },
            {
                term: "Interior Finish",
                definition: "The final material or treatment applied to an interior surface."
            },
            {
                term: "Isolation Joint",
                definition: "A joint that separates parts of a structure to allow independent movement."
            },
            {
                term: "Insepection",
                definition: "A detailed check of a building to identify problems or ensore standards are met."
            },
            {
                term: "Inverter",
                definition: "A device that convert electrical power into a form suitable for certain appliances or systems."
            },
            {
                term: "Irrigation",
                definition: "A system used to supply water to gardens and landscaped areas."
            },
             {
                term: "Ironmongery",
                definition: "Metal fittings used in buildings, such as handles, locks, and hinges."
            },
             {
                term: "Insulated Glass",
                definition: "Window glass made with multiple layers separated by an insulating space."
            },
        ],
        J: [
            {
                term: "Joist",
                definition: "A horizontal structural member that supports floors or ceilings."
            },
            {
                term: "Jamb",
                definition: "The vertical side part of a door or window frame"
            },
            {
                term: "Joinery",
                definition: "Skilled work involving the construction and fitting of wooden parts."
            },
             {
                term: "Junction Box",
                definition: "A protective box where electrical wires are connected."
            },
             {
                term: "Joint Sealant",
                definition: "Material used to seal gaps between building materials and prevent water or air from entering."
            },
             {
                term: "Joint Hanger",
                definition: "A metal fitting used to securely support a joist."
            },
             {
                term: "Jack Arch",
                definition: "A shallow arch built above a door or window to support the structure above it."
            },
            {
                term: "Junction",
                definition: "A point where two or more building systems, surfaces, or components."
            },
            {
                term: "Joint Compound",
                definition: "A paste used to cover and smooth joints between drywall panels."
            },
            {
                term: "Jackhammer",
                definition: "A powerful tool used to break concrete, stone, or other hard materials."
            },
        ],
        K: [
            {
                term: "Kerb",
                definition: "A raised edge separating a road, pavement, or landscaped area."
            },
            {
                term: "Keyway",
                definition: "A groove made between concrete sections to help them stay connected."
            },
            {
                term: "Kiln-Dried Timber",
                definition: "Wood that has been dried in a controlled environment to reduce moisture."
            },
            {
                term: "Knee Wall",
                definition: "A short wall commanly found under a sloping roof."
            },
             {
                term: "Kickboard",
                definition: "A protective panel placed at the button of a cabinet or similar structure."
            },
            {
                term: "Keystone",
                definition: "The central stone at the top of an arch that helps hold it together."
            },
             {
                term: "Kitchen Worktop",
                definition: "The surable surface installed on top of ktchen cabinets for working and food preparation."
            },
            {
                term: "Kicker",
                definition: "A small raised concrete section used to help position or support formwork."
            },
             {
                term: "Kiosk",
                definition: "A small standalone structure designed for a specific service or purpose."
            },
        ],
        L: [
            {
                term: "Lintel",
                definition: "A horiaontal support placed above a door or window to carry the weight above it."
            },
            {
                term: "Load-Bearing Wall",
                definition: "A wall that supports the weight of the structure above it."
            },
            {
                term: "Levelling",
                definition: "The process of making a surface even and properly aligned."
            },
            {
                term: "Laminated Timber",
                definition: "Wood made by bonding several layers together to create a stronger material."
            },
            {
                term: "Landscaping",
                definition: "The planning and improvement of outdoor areas around a building."
            },
            {
                term: "Lath",
                definition: "Thin strips or sheets used as a base for plaster o other finishes."
            },
            {
                term: "Lean Concrete",
                definition: "Concrete with a low cement content, often used as a base layer."
            },
            {
                term: "Lightwell",
                definition: "An open space that allows natural light and sir into lower areas of a building."
            },
            {
                term: "Louvers",
                definition: "An open space that allows natural light and air into lower areas of a building."
            },
            {
                term: "Level Datum",
                definition: "A  fixed reference point used to measure heights during construction."
            },
        ],
        M: [
            {
                term: "Masonry",
                definition: "Construction using materials such as bricks, blocks, or stone joined with mortar."
            },
            {
                term: "Mortar",
                definition: "A mixture used to hold bricks, blocks, or stones together."
            },
            {
                term: "Mezzanine",
                definition: "A partial floor built between the main floors of a building."
            },
            {
                term: "Moisture Barrier",
                definition: "A materials that prevents moisture from passing through walls, fllors, or roofs."
            },
            {
                term: "Manhole",
                definition: "An access opening that allows workers to reach underground drainage or utility systems."
            },
            {
                term: "Mullion",
                definition: "A vertical structural piece separating sections of a window."
            },
            {
                term: "Membrane",
                definition: "A thin protective layer used to control water, moisture, or air movement."
            },
            {
                term: "Miter Joint",
                definition: "A joint where two pieces are cut at an angle and joined together."
            },
            {
                term: "Modular Construction",
                definition: "Building a structure using sections made separately and assembled on-site."
            },
             {
                term: "Mechanical Ventilation",
                definition: "A system that uses equipment to move fresh and stale air through a building."
            },
        ],
        N: [
            {
                term: "Non-Load-Bearing Wall",
                definition: "A wall that divides spaces but does not support the building's main structure."
            },
            {
                term: "Nosing",
                definition: "The front edge of a stair step that extends slightly beyond the step below."
            },
            {
                term: "Natural Ventilation",
                definition: "Using windows, openings, and air movement to ventilate a building without mechanical systems."
            },
            {
                term: "Neutral Wire",
                definition: "An electrical wire that provides a return path for current in many electrical systems."
            },
            {
                term: "Notching",
                definition: "Cutting a small section from wood or another material to allow components to fit together."
            },
            {
                term: "Newel Post",
                definition: "A strong post that supports a staircase handrail or balustrade."
            },
            {
                term: "Net Floor Area",
                definition: "The usable floor space inside a building after certain areas are excluded."
            },
            {
                term: "Noise Insulation",
                definition: "Materials used to reduce sound travelling between spaces."
            },
            {
                term: "Nailer",
                definition: "A piece of material added to provide a secure surface for attaching another component."
            },
             {
                term: "Nominal Size",
                definition: "The stated size of a building material, which may differ slightly from its actual size."
            },
        ],
        O: [
            {
                term: "Occupancy Permit",
                definition: "Official approval confirming that a building is suitable to be occupied."
            },
            {
                term: "Open Floor Plan",
                definition: "A layout with fewer walls separating living or working areas."
            },
            {
                term: "Overhang",
                definition: "A part of a roof or structure that extends beyond the wall below it."
            },
            {
                term: "Orientation",
                definition: "The positioning of a building in relation to the sun, wind, and surroundings."
            },
            {
                term: "On-Site Inspection",
                definition: "A physical check of construction work at the building location."
            },
            {
                term: "Ornamental Work",
                definition: "Decorative details added to improve the appearance of a building."
            },
            {
                term: "Outlet",
                definition: "A point where electricity, water, or another service can be accessed."
            },
            {
                term: "Oxide Paint",
                definition: "A protective coating used to help prevent rust on metal surfaces."
            },
            {
                term: "Overlay",
                definition: "A new layer placed over an existing surface without completely removing it."
            },
            {
                term: "OSB (Oriented Strand Board)",
                definition: "A strong engineered wood panel made from compressed wood strands."
            },
        ],
        P: [
            {
                term: "Plinth",
                definition: "The raised base of a building that separates the main structure from the ground."
            },
            {
                term: "Purlin",
                definition: "A horizontal structural member that supports a roof."
            },
            {
                term: "Parapet",
                definition: "A low protective wall built along the edge of a roof, balcony, or terrace."
            },
            {
                term: "Plastering",
                definition: "The process of covering walls or ceilings with a smooth protective layer."
            },
            {
                term: "Piling",
                definition: "Long structural supports driven deep into the ground to support heavy buildings."
            },
            {
                term: "Partition Wall",
                definition: "An interior wall used to divide a building into separate spaces."
            },
            {
                term: "Permeability",
                definition: "How easily water or air can pass through a material."
            },
            {
                term: "Precast Concrete",
                definition: "Concrete parts made in advance and transported to the construction site."
            },
            {
                term: "Plinth Beam",
                definition: "A reinforced beam built near ground level to connect and support the foundation and walls."
            },
            {
                term: "Pointing",
                definition: "The process of filling and finishing the visible joints between bricks or stones."
            },
        ],
        Q: [
            {
                term: "Query",
                definition: "A request for data or information from a database, typically written in SQL."
            },
            {
                term: "QA (Quality Assurance)",
                definition: "The process of testing software to ensure it meets quality standards and functions correctly."
            }
        ],
        R: [
            {
                term: "React",
                definition: "A JavaScript library for building user interfaces, particularly single-page applications."
            },
            {
                term: "Responsive Design",
                definition: "A web design approach that ensures websites adapt seamlessly to different screen sizes and devices."
            },
            {
                term: "REST API",
                definition: "An architectural style for APIs that uses HTTP requests to access and manipulate data."
            }
        ],
        S: [
            {
                term: "SaaS (Software as a Service)",
                definition: "Cloud-based software that users access via the internet, typically through a subscription model."
            },
            {
                term: "SEO (Search Engine Optimization)",
                definition: "The practice of optimizing websites to rank higher in search engine results and increase organic traffic."
            },
            {
                term: "SSL Certificate",
                definition: "A digital certificate that authenticates a website's identity and enables encrypted connections."
            },
            {
                term: "SQL (Structured Query Language)",
                definition: "A standard language for managing and manipulating relational databases."
            },
            {
                term: "Scrum",
                definition: "An agile framework for managing complex projects through iterative sprints and team collaboration."
            }
        ],
        T: [
            {
                term: "TypeScript",
                definition: "A superset of JavaScript that adds static typing for improved code quality and developer experience."
            },
            {
                term: "TLS (Transport Layer Security)",
                definition: "A cryptographic protocol that provides secure communication over a computer network."
            }
        ],
        U: [
            {
                term: "UI (User Interface)",
                definition: "The visual elements and layout that users interact with in a software application or website."
            },
            {
                term: "UX (User Experience)",
                definition: "The overall experience a user has when interacting with a product, focusing on usability and satisfaction."
            },
            {
                term: "URL (Uniform Resource Locator)",
                definition: "The address used to access resources on the internet, commonly known as a web address."
            }
        ],
        V: [
            {
                term: "Version Control",
                definition: "A system that tracks changes to files over time, allowing multiple developers to collaborate efficiently."
            },
            {
                term: "Virtual Machine",
                definition: "A software emulation of a physical computer that runs an operating system and applications."
            },
            {
                term: "VPN (Virtual Private Network)",
                definition: "A secure connection that encrypts internet traffic and protects online privacy."
            }
        ],
        W: [
            {
                term: "Web Development",
                definition: "The process of creating, building, and maintaining websites and web applications."
            },
            {
                term: "WordPress",
                definition: "A popular open-source content management system used for building websites and blogs."
            },
            {
                term: "Wireframe",
                definition: "A visual blueprint or skeletal outline of a website or app's layout and structure."
            }
        ],
        X: [
            {
                term: "XML (Extensible Markup Language)",
                definition: "A markup language that defines rules for encoding documents in a format that is both human and machine-readable."
            }
        ],
        Y: [
            {
                term: "YAML",
                definition: "A human-readable data serialization language commonly used for configuration files."
            }
        ],
        Z: [
            {
                term: "Zero-Day Vulnerability",
                definition: "A security flaw in software that is exploited by attackers before the developer has a chance to fix it."
            }
        ]
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
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
                                onClick={() => availableLetters.includes(letter) && setSelectedLetter(letter)}
                                className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded transition-all ${
                                    availableLetters.includes(letter)
                                        ? selectedLetter === letter
                                            ? 'bg-teal-700 text-white'
                                            : 'bg-white text-gray-800 hover:bg-teal-100'
                                        : 'text-gray-400 cursor-not-allowed'
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
                            <h3 className="text-lg font-bold mb-3">
                                {item.term}
                            </h3>
                            <p className=" text-sm text2 leading-relaxed">
                                {item.definition}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {!glossaryTerms[selectedLetter] && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No terms available for letter {selectedLetter}</p>
                    </div>
                )}
            </div>
        </div>
    );
}