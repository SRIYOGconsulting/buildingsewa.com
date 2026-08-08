'use client'
import { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
// import Ribbon from '../../components/Ribbon';

export default function Notice() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const [notices] = useState([
        {
            id: 1,
            title: "New Banking Training Batch Starting Soon",
            date: "2024-01-15",
            category: "Training",
            content: "Registration is now open for our upcoming banking training batch starting February 1st. Limited seats available for retail banking and risk management modules.",
            important: true
        },
        {
            id: 2,
            title: "Advanced Digital Banking Workshop",
            date: "2024-01-12",
            category: "Workshop",
            content: "Join our specialized workshop on digital banking transformation, covering fintech integration, mobile banking, and cybersecurity best practices for banking professionals.",
            important: false
        },
        {
            id: 3,
            title: "Holiday Schedule - Training Center Closed",
            date: "2024-01-08",
            category: "Holiday",
            content: "Our training center will remain closed on January 26th for Republic Day celebrations. All scheduled sessions will resume on January 27th.",
            important: true
        },
        {
            id: 4,
            title: "Banking Certification Exam Dates Announced",
            date: "2024-01-05",
            category: "Examination",
            content: "The certification exams for banking professionals will be conducted on January 30th. Last date for registration is January 25th.",
            important: false
        },
        {
            id: 5,
            title: "Industry Expert Guest Lecture Series",
            date: "2024-01-03",
            category: "Events",
            content: "We are hosting a series of guest lectures by senior banking executives. Topics include modern banking operations, compliance frameworks, and career growth in banking sector.",
            important: false
        },
        {
            id: 6,
            title: "Corporate Training Program for Banks",
            date: "2024-01-02",
            category: "Corporate",
            content: "Customized corporate training programs now available for banking institutions. Tailored modules for branch staff, relationship managers, and operational teams.",
            important: false
        },
        {
            id: 7,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for our certified candidates on January 20th. Prepare your resumes and attend the pre-placement briefing.",
            important: true
        },

        // ADDITIONAL ITEMS (from origin/main)
        {
            id: 8,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 9,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 10,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 11,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 12,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 13,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 14,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        },
        {
            id: 15,
            title: "Placement Drive for Certified Candidates",
            date: "2024-01-01",
            category: "Placement",
            content: "Leading banks will be conducting campus placements for certified candidates.",
            important: true
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = ["All", "Training", "Workshop", "Examination", "Placement", "Corporate", "Events", "Holiday"];

    // Filtering logic
    const filteredNotices = notices.filter(notice => {
        const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
        const matchesSearch =
            notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.content.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchTerm]);

    return (
        <>
            {/* <Ribbon name="Notice" showfont={false}/> */}

            <div className="container mx-auto px-4 py-8 max-w-7xl">
                
                {/* SEARCH + CATEGORY FILTER */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">

                    {/* Search */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search notices..."
                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Category horizontal scroll (fixed version) */}
                    <div className="relative w-full md:w-auto">
                        <div className="
                            flex gap-2 overflow-x-auto pb-3
                            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
                            whitespace-nowrap
                        ">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`
                                        px-4 py-2 rounded-full shrink-0 cursor-pointer transition-colors
                                        ${selectedCategory === category
                                            ? 'bg-[#074842] text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                                    `}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* NOTICE CARDS */}
                <div className="space-y-8">
                    {currentData.map(notice => (
                        <div
                            key={notice.id}
                            className={`
                                answers rounded-lg shadow-md border-l-4
                                hover:scale-[1.02] transition-all hover:shadow-2xl 
                                ${notice.important ? 'border-red-500' : 'border-[#074842]'}
                            `}
                        >
                            {notice.important && (
                                <div className="bg-red-500 rounded-tr-lg text-white px-4 py-1 text-sm font-semibold">
                                    Important
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <h3 className="text-xl font-semibold mb-2 md:mb-0">
                                        {notice.title}
                                    </h3>

                                    <div className="flex items-center gap-4">
                                        <a href="#">
                                        <button className='cursor-pointer hover:bg-teal-700 hover:text-white text-[13px] border px-2 py-px rounded-md border-gray-800'>
                                            Browse More
                                        </button>
                                        </a>
                                        <span className="bg-green-100 text-black text-sm px-3 py-1 rounded-full">
                                            {notice.category}
                                        </span>

                                        <span className="text-gray-400 text-sm">
                                            {new Date(notice.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>

                                <p className="leading-relaxed">
                                    {notice.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                {filteredNotices.length !== 0 && (
                    <div className="flex items-center justify-center mt-8">
                        <Pagination
                            color="bg-red-500"
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                            totalPages={totalPages}
                        />
                    </div>
                )}

                {/* NO RESULTS */}
                {filteredNotices.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📄</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No notices found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </>
    );
}
