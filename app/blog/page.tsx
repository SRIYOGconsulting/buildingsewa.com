import Link from "next/link";

const articles = [
    {
        title: "Understanding Modern Construction Management",
        category: "Construction Management",
        description:
            "An overview of how organized planning, coordination, and project management can support successful construction projects.",
    },
    {
        title: "The Role of Technology in Construction",
        category: "Technology",
        description:
            "Explore how digital tools can improve communication, coordination, documentation, and project management.",
    },
    {
        title: "Planning a Successful Construction Project",
        category: "Project Planning",
        description:
            "Important areas to consider when planning a construction project, from requirements and resources to timelines and coordination.",
    },
    {
        title: "Common Challenges in Construction Projects",
        category: "Construction",
        description:
            "A look at some common challenges that can affect construction projects and the importance of proper planning and coordination.",
    },
    {
        title: "Why Professional Construction Management Matters",
        category: "Project Management",
        description:
            "Learn why structured project management can help improve coordination between the different people involved in a construction project.",
    },
    {
        title: "Building Better Projects Through Digital Solutions",
        category: "Digital Solutions",
        description:
            "How digital solutions can help bring information, communication, and project activities together in a more organized way.",
    },
];

export default function Blog() {
    return (
        <main>
          
            <section className="py-16 px-5 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3">
                        Blog
                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold">
                        Insights & Articles
                    </h1>

                    <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Explore insights, ideas, and useful information related
                        to construction management, technology, and digital
                        solutions.
                    </p>
                </div>
            </section>

           
            <section className="px-5 py-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <article
                                key={article.title}
                                className="card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                <span className="text-sm font-semibold">
                                    {article.category}
                                </span>

                                <h2 className="text-xl font-bold mt-3">
                                    {article.title}
                                </h2>

                                <p className="mt-3 leading-relaxed flex-grow">
                                    {article.description}
                                </p>

                                <div className="mt-6">
                                    <Link
                                        href="#"
                                        className="font-semibold hover:underline"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            <section className="px-5 py-14">
                <div className="max-w-3xl mx-auto text-center card rounded-xl p-8 shadow-md">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        More Articles Coming Soon
                    </h2>

                    <p className="mt-4 leading-relaxed">
                        New articles and updates will be published here as
                        content becomes available.
                    </p>
                </div>
            </section>

            <div className="h-16"></div>
        </main>
    );
}