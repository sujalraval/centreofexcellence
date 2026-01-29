import { useState } from "react";
import { Search, Calendar, Trophy, Building2, MapPin, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

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
  level: 'Local' | 'Regional' | 'National' | 'International'; // Level of achievement
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
    photoUrl: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5a?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/best-law-school-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5b?w=400&h=300&fit=crop"
    ],
    category: "Education",
    level: "National",
    url: "https://educationcouncil.gov/awards"
  },
  {
    id: 2,
    title: "Innovation in Legal Education Award",
    awardingOrganisation: "International Legal Association",
    dateOfAward: "2024-11-20",
    awardFor: "Digital Learning Platform Innovation",
    venue: "London, UK",
    photoUrl: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5c?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/innovation-award-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5d?w=400&h=300&fit=crop"
    ],
    category: "Innovation",
    level: "International",
    url: "https://internationallegal.org/awards"
  },
  {
    id: 3,
    title: "Environmental Law Excellence Award",
    awardingOrganisation: "Green Law Foundation",
    dateOfAward: "2024-10-05",
    awardFor: "Sustainable Legal Practices Initiative",
    venue: "Mumbai, India",
    photoUrl: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5e?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/env-law-excellence-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c5f?w=400&h=300&fit=crop"
    ],
    category: "Environmental",
    level: "Regional",
    url: "https://greenlawfoundation.org"
  },
  {
    id: 4,
    title: "Student Excellence Award",
    awardingOrganisation: "Gujarat University",
    dateOfAward: "2024-09-15",
    awardFor: "Academic Excellence in Constitutional Law",
    venue: "Ahmedabad, India",
    photoUrl: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6a?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/student-excellence-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6b?w=400&h=300&fit=crop"
    ],
    category: "Academic",
    level: "Local",
    url: "https://gujaratuniversity.ac.in"
  },
  {
    id: 5,
    title: "Human Rights Advocacy Award",
    awardingOrganisation: "UN Human Rights Commission",
    dateOfAward: "2024-08-10",
    awardFor: "Outstanding Contribution to Human Rights Education",
    venue: "Geneva, Switzerland",
    photoUrl: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6c?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/hr-advocacy-award-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6d?w=400&h=300&fit=crop"
    ],
    category: "Human Rights",
    level: "International",
    url: "https://unhrcommission.org"
  },
  {
    id: 6,
    title: "Legal Research Excellence Award",
    awardingOrganisation: "Indian Bar Association",
    dateOfAward: "2024-07-22",
    awardFor: "Groundbreaking Research in Intellectual Property Law",
    venue: "New Delhi, India",
    photoUrl: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6e?w=600&h=400&fit=crop",
    certificateUrl: "/certificates/research-excellence-2024.pdf",
    images: [
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596466596120-2a8e4b5d5c6f?w=400&h=300&fit=crop"
    ],
    category: "Research",
    level: "National",
    url: "https://indianbarassociation.org"
  }
];

const AchievementsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = ["all", "Education", "Innovation", "Environmental", "Academic", "Human Rights", "Research"];
  const levels = ["all", "Local", "Regional", "National", "International"];

  const filteredAchievements = dummyAchievements.filter(achievement => {
    const matchesSearch = 
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.awardingOrganisation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.awardFor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || achievement.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || achievement.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Local': return 'bg-blue-100 text-blue-800';
      case 'Regional': return 'bg-purple-100 text-purple-800';
      case 'National': return 'bg-green-100 text-green-800';
      case 'International': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            Achievements & Awards
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Celebrating our accomplishments and recognizing the excellence of our students, faculty, 
            and institution through various awards and recognitions received from esteemed organizations.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-[#0a0e72] mb-2">
              {dummyAchievements.length}
            </div>
            <div className="text-gray-600">Total Awards</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {dummyAchievements.filter(a => a.level === 'National').length + dummyAchievements.filter(a => a.level === 'International').length}
            </div>
            <div className="text-gray-600">National/Intl Awards</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {dummyAchievements.filter(a => a.category === 'Academic').length}
            </div>
            <div className="text-gray-600">Academic Awards</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {new Set(dummyAchievements.map(a => a.awardingOrganisation)).size}
            </div>
            <div className="text-gray-600">Distinct Organizations</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search achievements by title, organization, or category..."
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
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Achievement Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-[#0a0e72]" />
                    <h3 className="text-xl font-bold text-[#0a0e72]">
                      {achievement.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(achievement.level)}`}>
                    {achievement.level}
                  </span>
                </div>
                
                <div className="mt-3 flex items-center text-sm text-gray-600">
                  <Building2 className="w-4 h-4 mr-1" />
                  <span>{achievement.awardingOrganisation}</span>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(achievement.dateOfAward)}</span>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{achievement.venue}</span>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#0a0e72]" />
                    Award For
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {achievement.awardFor}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Category</h4>
                  <span className="inline-block px-3 py-1 bg-[#0a0e72]/10 text-[#0a0e72] rounded-full text-sm font-medium">
                    {achievement.category}
                  </span>
                </div>

                {/* Award Photo */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Award Photo</h4>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={achievement.photoUrl}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/600x400/0a0e72/FFFFFF?text=Award+${achievement.id}`;
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors text-sm font-medium"
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </a>
                  
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Trophy className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No achievements found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#0a0e72] to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Celebrating Excellence</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Our achievements reflect our commitment to academic excellence, innovation, and impactful contributions to the legal field.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-white text-[#0a0e72] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;