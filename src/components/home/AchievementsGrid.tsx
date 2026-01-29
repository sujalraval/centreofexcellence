import { Link } from "react-router-dom";
import { ChevronRight, Trophy, Calendar, Building2 } from "lucide-react";

// Define the achievement interface
interface Achievement {
  id: number;
  title: string;
  awardingOrganisation: string;
  dateOfAward: string;
  awardFor: string;
  venue: string;
  photoUrl: string; // URL to the award photo
  certificateUrl: string; // URL to the certificate
  images: string[]; // Additional images
  category: string; // Category of the award
  level: "Local" | "Regional" | "National" | "International"; // Level of achievement
  url: string; // URL to more information
}

// Dummy data for achievements
const dummyAchievements: Achievement[] = [
  {
    id: 1,
    title: "Best Law School Award 2024",
    awardingOrganisation: "National Education Council",
    dateOfAward: "2024-12-15",
    awardFor: "Outstanding Legal Education Program",
    venue: "New Delhi, India",
    photoUrl:
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5a?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/best-law-school-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5b?w=400&h=300&fit=crop",
    ],
    category: "Education",
    level: "National",
    url: "https://educationcouncil.gov/awards",
  },
  {
    id: 2,
    title: "Innovation in Legal Education Award",
    awardingOrganisation: "International Legal Association",
    dateOfAward: "2024-11-20",
    awardFor: "Digital Learning Platform Innovation",
    venue: "London, UK",
    photoUrl:
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5c?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/innovation-award-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5d?w=400&h=300&fit=crop",
    ],
    category: "Innovation",
    level: "International",
    url: "https://internationallegal.org/awards",
  },
  {
    id: 3,
    title: "Environmental Law Excellence Award",
    awardingOrganisation: "Green Law Foundation",
    dateOfAward: "2024-10-05",
    awardFor: "Sustainable Legal Practices Initiative",
    venue: "Mumbai, India",
    photoUrl:
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5e?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/env-law-excellence-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5f?w=400&h=300&fit=crop",
    ],
    category: "Environmental",
    level: "Regional",
    url: "https://greenlawfoundation.org",
  },
];

const AchievementsGrid = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Local":
        return "bg-blue-100 text-blue-800";
      case "Regional":
        return "bg-purple-100 text-purple-800";
      case "National":
        return "bg-green-100 text-green-800";
      case "International":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-[#0a0e72]" />
            <h2 className="text-3xl font-bold text-[#0a0e72]">
              Achievements & Awards
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating our accomplishments and recognizing the excellence of
            our students, faculty, and institution through various awards and
            recognitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyAchievements.slice(0, 3).map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
                    <img
                      src={achievement.photoUrl}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/100x100/0a0e72/FFFFFF?text=Award+${achievement.id}`;
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#0a0e72] truncate">
                      {achievement.title}
                    </h3>
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                        achievement.level
                      )}`}
                    >
                      {achievement.level}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-600">
                    <Building2 className="w-4 h-4 mr-1" />
                    <span className="truncate">
                      {achievement.awardingOrganisation}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(achievement.dateOfAward)}</span>
                  </div>

                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {achievement.awardFor}
                  </p>

                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-[#0a0e72]/10 text-[#0a0e72] rounded-full text-xs font-medium">
                      {achievement.category}
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
            to="/achievements"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-semibold text-lg"
          >
            View All Achievements
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsGrid;
