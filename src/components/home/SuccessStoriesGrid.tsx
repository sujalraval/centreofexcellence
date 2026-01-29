import { Link } from "react-router-dom";
import {
  ChevronRight,
  FolderOpen,
  Calendar,
  Star,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

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
    title: "Team Wins National Championship",
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
      "Our team secured first position at the National Moot Court Competition held in New Delhi, showcasing exceptional legal argumentation skills.",
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
    title: "Professor Receives National Award",
    date: "2024-10-20",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?w=600&h=400&fit=crop",
    keywords: ["research", "faculty", "award", "legal research"],
    status: "Active",
    briefDescription:
      "Professor Dr. Smitha Verma received the National Award for Outstanding Contributions to Legal Research.",
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
      "Our institution achieved A++ grade from NAAC, reflecting our commitment to quality education.",
    multiplePhotos: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-db2b21fc162f?w=400&h=300&fit=crop",
    ],
  },
];

const SuccessStoriesGrid = () => {
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
        return <FolderOpen className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderOpen className="w-8 h-8 text-[#0a0e72]" />
            <h2 className="text-3xl font-bold text-[#0a0e72]">
              Success Stories
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating the remarkable achievements of our students, faculty,
            alumni, and institution. These stories exemplify the excellence and
            impact of our legal education program.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummySuccessStories.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
                    <img
                      src={story.photo}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/100x100/0a0e72/FFFFFF?text=Story+${story.id}`;
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#0a0e72] truncate">
                      {story.title}
                    </h3>
                    <span
                      className={`flex items-center gap-1 ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        story.status
                      )}`}
                    >
                      {getStatusIcon(story.status)}
                      {story.status}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="truncate">{story.categoryType}</span>
                  </div>

                  <div className="mt-1 flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(story.date)}</span>
                  </div>

                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {story.briefDescription}
                  </p>

                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-[#0a0e72]/10 text-[#0a0e72] rounded-full text-xs font-medium">
                      {story.scheme}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-semibold text-lg"
          >
            View All Success Stories
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesGrid;
