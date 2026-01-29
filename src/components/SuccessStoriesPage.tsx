import { useState } from "react";
import {
  Search,
  Calendar,
  FileText,
  Star,
  CheckCircle,
  XCircle,
  Clock,
  FolderOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

// Define the success story interface
interface SuccessStory {
  id: number;
  categoryType: string; // Category of the success story
  scheme: string; // The scheme under which the success occurred
  title: string; // Title of the success story
  date: string; // Date of the achievement
  photo: string; // Main photo (png, jpg, jpeg)
  keywords: string[]; // Keywords for search
  status: "Active" | "Inactive" | "Pending"; // Status of the story
  briefDescription: string; // Brief description
  multiplePhotos: string[]; // Multiple photos for the story
}

// Dummy data for success stories
const dummySuccessStories: SuccessStory[] = [
  {
    id: 1,
    categoryType: "Student Achievement",
    scheme: "National Moot Court Competition",
    title: "Team Wins National Championship in Constitutional Law",
    date: "2024-11-15",
    photo:
      "https://images.unsplash.com/photo-1523240795612-db2b21fc162f?w=600&h=400&fit=crop",
    keywords: [
      "moot court",
      "constitutional law",
      "championship",
      "student achievement",
    ],
    status: "Active",
    briefDescription:
      "Our team secured first position at the National Moot Court Competition held in New Delhi, showcasing exceptional legal argumentation skills and deep understanding of constitutional provisions.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1523240795612-db2b21fc162f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 2,
    categoryType: "Faculty Recognition",
    scheme: "Research Excellence Award",
    title: "Professor Receives National Award for Legal Research",
    date: "2024-10-20",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?w=600&h=400&fit=crop",
    keywords: ["research", "faculty", "award", "legal research"],
    status: "Active",
    briefDescription:
      "Professor Dr. Smitha Verma received the National Award for Outstanding Contributions to Legal Research, recognizing her groundbreaking work in intellectual property law.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 3,
    categoryType: "Institutional Milestone",
    scheme: "Accreditation",
    title: "Achieved A++ Grade from NAAC",
    date: "2024-09-05",
    photo:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    keywords: ["accreditation", "NAAC", "grade", "milestone"],
    status: "Active",
    briefDescription:
      "Our institution achieved A++ grade from NAAC, reflecting our commitment to quality education and continuous improvement in legal education standards.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-db2b21fc162f?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 4,
    categoryType: "Alumni Achievement",
    scheme: "Judicial Appointment",
    title: "Alumnus Appointed as High Court Judge",
    date: "2024-08-12",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop",
    keywords: ["alumni", "appointment", "high court", "judge"],
    status: "Active",
    briefDescription:
      "Distinguished alumnus Justice Rajesh Kumar was appointed as a High Court Judge, marking a significant achievement for our institution and highlighting the quality of our legal education.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 5,
    categoryType: "Research Publication",
    scheme: "International Journal",
    title: "Faculty Paper Published in Top-Tier Legal Journal",
    date: "2024-07-28",
    photo:
      "https://images.unsplash.com/photo-1495640388908-05fa85288d58?w=600&h=400&fit=crop",
    keywords: ["publication", "research", "journal", "faculty"],
    status: "Pending",
    briefDescription:
      "Dr. Priya Sharma's research paper on Digital Rights was accepted in the Harvard Law Review, showcasing our faculty's contribution to global legal discourse.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1495640388908-05fa85288d58?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-db2b21fc162f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 6,
    categoryType: "Innovation",
    scheme: "Patent Filing",
    title: "Student Develops Legal AI Tool",
    date: "2024-06-15",
    photo:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    keywords: ["innovation", "AI", "patent", "student"],
    status: "Active",
    briefDescription:
      "Final year student Arjun Patel developed an AI-powered contract analysis tool, earning recognition at the National Innovation Summit and filing for patent protection.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=400&h=300&fit=crop",
    ],
  },
];

const SuccessStoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Student Achievement",
    "Faculty Recognition",
    "Institutional Milestone",
    "Alumni Achievement",
    "Research Publication",
    "Innovation",
  ];
  const statuses = ["all", "Active", "Inactive", "Pending"];

  const filteredStories = dummySuccessStories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.briefDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.scheme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesStatus =
      selectedStatus === "all" || story.status === selectedStatus;
    const matchesCategory =
      selectedCategory === "all" || story.categoryType === selectedCategory;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-4 h-4" />;
      case "Inactive":
        return <XCircle className="w-4 h-4" />;
      case "Pending":
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            Success Stories
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Celebrating the remarkable achievements of our students, faculty,
            alumni, and institution. These stories exemplify the excellence and
            impact of our legal education program.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-[#0a0e72] mb-2">
              {dummySuccessStories.length}
            </div>
            <div className="text-gray-600">Total Stories</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {dummySuccessStories.filter((s) => s.status === "Active").length}
            </div>
            <div className="text-gray-600">Active Stories</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {new Set(dummySuccessStories.map((s) => s.categoryType)).size}
            </div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {new Set(dummySuccessStories.flatMap((s) => s.keywords)).size}
            </div>
            <div className="text-gray-600">Key Topics</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search success stories by title, description, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all" ? "All Statuses" : status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Story Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FolderOpen className="w-6 h-6 text-[#0a0e72]" />
                    <h3 className="text-xl font-bold text-[#0a0e72]">
                      {story.title}
                    </h3>
                  </div>
                  <span
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      story.status
                    )}`}
                  >
                    {getStatusIcon(story.status)}
                    {story.status}
                  </span>
                </div>

                <div className="mt-3 flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{story.categoryType}</span>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-1" />
                  <span>{story.scheme}</span>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(story.date)}</span>
                </div>
              </div>

              {/* Story Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {story.briefDescription}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.keywords.slice(0, 4).map((keyword, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#0a0e72]/10 text-[#0a0e72] rounded-full text-xs font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                    {story.keywords.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{story.keywords.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Photo */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Featured Photo
                  </h4>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={story.photo}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/600x400/0a0e72/FFFFFF?text=Story+${story.id}`;
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors text-sm font-medium">
                    <FolderOpen className="w-4 h-4" />
                    View Details
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors text-sm font-medium">
                    <FileText className="w-4 h-4" />
                    View Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FolderOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No success stories found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#0a0e72] to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Share Your Success</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Have a success story to share? We'd love to celebrate your
            achievements and inspire others.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0a0e72] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Submit Your Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
