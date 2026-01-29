import { useState } from "react";
import {
  Search,
  Calendar,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

// Dummy data for circulars
const dummyCirculars = [
  {
    id: 1,
    title: "Revised Academic Calendar for 2025-26",
    date: "2025-01-15",
    url: "https://example.com/circulars/1",
    fileUrl: "/documents/revised-calendar-2025.pdf",
    type: "Academic",
    description:
      "Updated academic calendar with revised examination schedules and holiday dates for the upcoming academic year.",
  },
  {
    id: 2,
    title: "Guidelines for Research Proposal Submission",
    date: "2025-01-10",
    url: "https://example.com/circulars/2",
    fileUrl: "/documents/research-guidelines.pdf",
    type: "Research",
    description:
      "New guidelines for submitting research proposals with updated format and evaluation criteria.",
  },
  {
    id: 3,
    title: "Summer Internship Program Notification",
    date: "2025-01-05",
    url: "https://example.com/circulars/3",
    fileUrl: "/documents/summer-internship.pdf",
    type: "Internship",
    description:
      "Notification regarding summer internship opportunities with leading law firms and legal organizations.",
  },
  {
    id: 4,
    title: "Library Timings Update",
    date: "2024-12-28",
    url: "https://example.com/circulars/4",
    fileUrl: "/documents/library-timings.pdf",
    type: "Facility",
    description:
      "Revised opening hours for the central library during exam periods and holidays.",
  },
  {
    id: 5,
    title: "Faculty Development Program Schedule",
    date: "2024-12-20",
    url: "https://example.com/circulars/5",
    fileUrl: "/documents/fdp-schedule.pdf",
    type: "Training",
    description:
      "Schedule for faculty development programs focusing on contemporary legal education methodologies.",
  },
  {
    id: 6,
    title: "Student Conduct Code Amendment",
    date: "2024-12-15",
    url: "https://example.com/circulars/6",
    fileUrl: "/documents/conduct-code-amendment.pdf",
    type: "Policy",
    description:
      "Amendments to the student conduct code with updated disciplinary procedures and grievance mechanisms.",
  },
];

const CircularsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const types = [
    "all",
    "Academic",
    "Research",
    "Internship",
    "Facility",
    "Training",
    "Policy",
  ];

  const filteredCirculars = dummyCirculars.filter((circular) => {
    const matchesSearch =
      circular.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circular.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" || circular.type === selectedType;
    return matchesSearch && matchesType;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            All Circulars
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Official notifications and circulars from the administration. Stay
            updated with the latest policies, schedules, and important
            announcements.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search circulars..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Circulars List */}
        <div className="space-y-6">
          {filteredCirculars.map((circular) => (
            <div
              key={circular.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Circular Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h2 className="text-xl md:text-2xl font-bold text-[#0a0e72]">
                        {circular.title}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">
                          {formatDate(circular.date)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-gray-700">{circular.description}</p>

                      {/* Type Tag */}
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#0a0e72]/10 text-[#0a0e72] rounded-full text-sm font-medium">
                          {circular.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 min-w-[180px]">
                    <a
                      href={circular.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Circular
                    </a>

                    <a
                      href={circular.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCirculars.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FileText className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No circulars found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularsPage;
