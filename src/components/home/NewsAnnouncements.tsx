// src/components/NewsAnnouncements.jsx
import { Calendar, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- DATA -------------------- */

// Circulars data
const circulars = [
  {
    id: 1,
    title: "Revised Academic Calendar 2025-26",
    date: "15 Mar 2025",
    url: "https://example.com/circulars/1",
    fileUrl: "/documents/revised-calendar-2025.pdf",
    category: "Academic",
  },
  {
    id: 2,
    title: "New Examination Guidelines",
    date: "10 Mar 2025",
    url: "https://example.com/circulars/2",
    fileUrl: "/documents/exam-guidelines-2025.pdf",
    category: "Examination",
  },
  {
    id: 3,
    title: "Summer Internship Opportunities",
    date: "05 Mar 2025",
    url: "https://example.com/circulars/3",
    fileUrl: "/documents/internship-opportunities.pdf",
    category: "Internship",
  },
];

// Announcements data
const announcements = [
  {
    id: 1,
    title: "Admission 2025-26 Open",
    date: "15 Mar 2025",
    place: "Gujarat University",
    pageLink: "/announcements/1",
    url: "https://example.com/announcement/1",
    thumbnailImage:
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=400",
    pdfFile: "/documents/admission-2025.pdf",
    textView:
      "Admission for academic year 2025-26 is now open for various programs.",
    category: "Admission",
    type: "announcement",
  },
  {
    id: 2,
    title: "National Moot Court Competition 2025",
    date: "10 Mar 2025",
    place: "Ahmedabad Law Center",
    pageLink: "/announcements/2",
    url: "https://example.com/announcement/2",
    thumbnailImage:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=400",
    pdfFile: "/documents/moot-court-competition.pdf",
    textView:
      "Annual national moot court competition scheduled for March 2025.",
    category: "Event",
    type: "announcement",
  },
  {
    id: 3,
    title: "NAAC Peer Team Visit Schedule",
    date: "05 Mar 2025",
    place: "University Campus",
    pageLink: "/announcements/3",
    url: "https://example.com/announcement/3",
    thumbnailImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400",
    pdfFile: "/documents/naac-visit-schedule.pdf",
    textView: "Schedule for the upcoming NAAC peer team visit to university.",
    category: "Important",
    type: "announcement",
  },
];

/* -------------------- COMPONENTS -------------------- */

/* -------------------- MAIN COMPONENT -------------------- */

const NewsAnnouncements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Circulars */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-gu-primary mr-3" />
                <h3 className="text-xl font-bold text-gu-dark">Circulars</h3>
              </div>

              <div className="space-y-4">
                {circulars.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-gray-200 hover:border-gu-primary hover:bg-gu-light transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gu-dark">{item.title}</h4>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link
                  to="/circulars"
                  className="flex items-center justify-center text-gu-primary font-semibold"
                >
                  View All Circulars
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gu-dark mb-6">
              Announcements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {announcements.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.thumbnailImage}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.textView}</p>
                    <Link
                      to={item.pageLink}
                      className="text-gu-primary font-semibold inline-flex items-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {/* View All Announcements Button */}
          <div className="mt-8 text-center">
            <Link
              to="/announcements"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-semibold text-lg"
            >
              View All Announcements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
