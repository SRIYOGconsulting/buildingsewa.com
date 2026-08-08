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
                term: "API (Application Programming Interface)",
                definition: "A set of protocols and tools that allows different software applications to communicate with each other."
            },
            {
                term: "Agile Methodology",
                definition: "An iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback."
            },
            {
                term: "Authentication",
                definition: "The process of verifying the identity of a user or system before granting access to resources."
            },
            {
                term: "AWS (Amazon Web Services)",
                definition: "A comprehensive cloud computing platform that provides on-demand services like storage, computing power, and databases."
            }
        ],
        B: [
            {
                term: "Backend",
                definition: "The server-side of a website or application that handles data processing, storage, and business logic."
            },
            {
                term: "Bootstrap",
                definition: "A popular front-end framework for developing responsive and mobile-first websites."
            },
            {
                term: "Bug",
                definition: "An error or flaw in software that causes it to produce incorrect or unexpected results."
            },
            {
                term: "Bandwidth",
                definition: "The maximum rate of data transfer across a network connection, typically measured in Mbps or Gbps."
            }
        ],
        C: [
            {
                term: "Cache",
                definition: "A temporary storage area that saves frequently accessed website data to improve load times and performance."
            },
            {
                term: "CMS (Content Management System)",
                definition: "A software platform that allows users to create, edit, organize, and publish digital content without needing to code."
            },
            {
                term: "Cloud Hosting",
                definition: "Hosting website data on virtual cloud servers, for scalability, flexibility, and cost-effectiveness."
            },
            {
                term: "CSS (Cascading Style Sheets)",
                definition: "A web language that controls the layout and visual style of content, including fonts, colors, spacing, and alignment."
            },
            {
                term: "Cybersecurity",
                definition: "The protection of digital assets and user data from unauthorized access, attacks, or breaches through secure CMS practices."
            },
            {
                term: "CTA (Call to Action)",
                definition: "A prompt, such as a button or link, that encourages users to take a specific action like signing up or purchasing."
            }
        ],
        D: [
            {
                term: "Database",
                definition: "An organized collection of structured data that can be easily accessed, managed, and updated."
            },
            {
                term: "DevOps",
                definition: "A set of practices that combines software development and IT operations to shorten development cycles."
            },
            {
                term: "DNS (Domain Name System)",
                definition: "A system that translates domain names into IP addresses so browsers can load websites."
            },
            {
                term: "Docker",
                definition: "A platform that uses containerization to package applications and their dependencies for consistent deployment."
            }
        ],
        E: [
            {
                term: "E-commerce",
                definition: "The buying and selling of goods or services over the internet through online platforms."
            },
            {
                term: "Encryption",
                definition: "The process of converting data into a coded format to prevent unauthorized access."
            },
            {
                term: "ERP (Enterprise Resource Planning)",
                definition: "Integrated software that manages core business processes like accounting, HR, inventory, and supply chain."
            }
        ],
        F: [
            {
                term: "Frontend",
                definition: "The client-side of a website or application that users interact with directly through their browser."
            },
            {
                term: "Framework",
                definition: "A pre-built structure or set of tools that helps developers build applications more efficiently."
            },
            {
                term: "Firewall",
                definition: "A network security system that monitors and controls incoming and outgoing traffic based on security rules."
            },
            {
                term: "FTP (File Transfer Protocol)",
                definition: "A standard protocol used to transfer files between a client and server over a network."
            }
        ],
        G: [
            {
                term: "Git",
                definition: "A version control system that tracks changes in code and enables collaboration among developers."
            },
            {
                term: "GUI (Graphical User Interface)",
                definition: "A visual way for users to interact with software through icons, buttons, and windows."
            },
            {
                term: "GitHub",
                definition: "A web-based platform for version control and collaboration using Git repositories."
            }
        ],
        H: [
            {
                term: "HTML (HyperText Markup Language)",
                definition: "The standard markup language used to create and structure content on the web."
            },
            {
                term: "HTTP/HTTPS",
                definition: "Protocols for transmitting data over the web; HTTPS is the secure version with encryption."
            },
            {
                term: "Hosting",
                definition: "A service that provides server space and resources for websites to be accessible on the internet."
            }
        ],
        I: [
            {
                term: "IDE (Integrated Development Environment)",
                definition: "A software application that provides comprehensive tools for software development in one place."
            },
            {
                term: "IT Consulting",
                definition: "Professional advisory services that help organizations optimize their technology infrastructure and strategies."
            },
            {
                term: "IoT (Internet of Things)",
                definition: "A network of physical devices connected to the internet, collecting and sharing data."
            }
        ],
        J: [
            {
                term: "JavaScript",
                definition: "A programming language that enables interactive and dynamic content on websites."
            },
            {
                term: "JSON (JavaScript Object Notation)",
                definition: "A lightweight data format used for storing and exchanging data between systems."
            },
            {
                term: "jQuery",
                definition: "A fast JavaScript library that simplifies HTML document manipulation, event handling, and animation."
            }
        ],
        K: [
            {
                term: "Kubernetes",
                definition: "An open-source platform for automating deployment, scaling, and management of containerized applications."
            },
            {
                term: "Keyword",
                definition: "A specific word or phrase that users type into search engines, crucial for SEO optimization."
            }
        ],
        L: [
            {
                term: "Linux",
                definition: "An open-source operating system widely used for servers, development, and enterprise applications."
            },
            {
                term: "Load Balancing",
                definition: "The process of distributing network traffic across multiple servers to ensure optimal performance."
            }
        ],
        M: [
            {
                term: "Machine Learning",
                definition: "A subset of AI that enables systems to learn and improve from experience without explicit programming."
            },
            {
                term: "MySQL",
                definition: "An open-source relational database management system commonly used for web applications."
            },
            {
                term: "Metadata",
                definition: "Data that provides information about other data, such as file creation dates or image properties."
            }
        ],
        N: [
            {
                term: "Node.js",
                definition: "A JavaScript runtime environment that allows developers to run JavaScript on the server-side."
            },
            {
                term: "NoSQL",
                definition: "A database system that stores data in formats other than traditional relational tables."
            }
        ],
        O: [
            {
                term: "Open Source",
                definition: "Software with source code that anyone can inspect, modify, and enhance."
            },
            {
                term: "Operating System",
                definition: "System software that manages computer hardware and software resources, like Windows, macOS, or Linux."
            }
        ],
        P: [
            {
                term: "PHP",
                definition: "A server-side scripting language widely used for web development and dynamic content generation."
            },
            {
                term: "PWA (Progressive Web App)",
                definition: "A type of web application that works offline and provides an app-like experience on mobile devices."
            },
            {
                term: "Python",
                definition: "A high-level programming language known for its simplicity and versatility in web, data science, and AI."
            }
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