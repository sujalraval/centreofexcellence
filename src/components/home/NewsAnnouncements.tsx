// src/components/NewsAnnouncements.jsx
import { Calendar, ArrowRight, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- DATA -------------------- */

const circulars = [
  {
    id: 1,
    title: "Revised Academic Calendar 2025-26",
    date: "15 Mar 2025",
    url: "https://example.com/circulars/1",
    category: "Academic",
  },
  {
    id: 2,
    title: "New Examination Guidelines",
    date: "10 Mar 2025",
    url: "https://example.com/circulars/2",
    category: "Examination",
  },
  {
    id: 3,
    title: "Summer Internship Opportunities",
    date: "05 Mar 2025",
    url: "https://example.com/circulars/3",
    category: "Internship",
  },
  {
    id: 4,
    title: "Revised Academic Calendar 2025-26",
    date: "15 Mar 2025",
    url: "https://example.com/circulars/1",
    category: "Academic",
  },
  {
    id: 5,
    title: "New Examination Guidelines",
    date: "10 Mar 2025",
    url: "https://example.com/circulars/2",
    category: "Examination",
  },
  {
    id: 6,
    title: "Summer Internship Opportunities",
    date: "05 Mar 2025",
    url: "https://example.com/circulars/3",
    category: "Internship",
  },
];

const announcements = [
  {
    id: 1,
    title: "Admission 2025-26 Open",
    date: "15 Mar 2025",
    pageLink: "/announcements/1",
    thumbnailImage:
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=600",
    textView:
      "Admission for academic year 2025-26 is now open for various programs.",
    category: "Admission",
  },
  {
    id: 2,
    title: "National Moot Court Competition 2025",
    date: "10 Mar 2025",
    pageLink: "/announcements/2",
    thumbnailImage:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600",
    textView:
      "Annual national moot court competition scheduled for March 2025.",
    category: "Event",
  },
  {
    id: 3,
    title: "NAAC Peer Team Visit Schedule",
    date: "05 Mar 2025",
    pageLink: "/announcements/3",
    thumbnailImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600",
    textView: "Schedule for the upcoming NAAC peer team visit to university.",
    category: "Important",
  },
];

/* -------------------- MAIN COMPONENT -------------------- */

const NewsAnnouncements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ---------------- Circulars ---------------- */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-[#0a0e72]" />
                <h3 className="text-xl font-semibold">Circulars</h3>
              </div>

              <div className="space-y-4">
                {circulars.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl border border-gray-200 hover:border-[#0a0e72] hover:-translate-y-0.5 hover:shadow transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {item.category}
                      </span>
                      <span className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 leading-snug">
                      {item.title}
                    </h4>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t">
                <Link
                  to="/circulars"
                  className="flex items-center justify-center text-[#0a0e72] font-semibold hover:underline"
                >
                  View All Circulars
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* ---------------- Announcements ---------------- */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-8">Announcements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {announcements.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.thumbnailImage}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-semibold bg-white/90 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                    <h3 className="text-base font-semibold mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.textView}
                    </p>
                    <Link
                      to={item.pageLink}
                      className="inline-flex items-center text-sm font-semibold text-[#0a0e72] hover:gap-2 transition-all"
                    >
                      View Details
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
              <Link
                to="/announcements"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#0a0e72] text-white rounded-xl hover:bg-[#080b5a] transition font-semibold shadow-lg"
              >
                View All Announcements
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
