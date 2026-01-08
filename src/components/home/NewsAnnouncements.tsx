// src/components/NewsAnnouncements.jsx
import { Calendar, Clock, ArrowRight, Megaphone } from "lucide-react";

/* -------------------- DATA -------------------- */

const announcements = [
  {
    id: 1,
    title: "Admission 2025-26 Open",
    date: "15 Mar 2025",
    category: "Admission",
    type: "announcement",
  },
  {
    id: 2,
    title: "National Moot Court Competition 2025",
    date: "10 Mar 2025",
    category: "Event",
    type: "event",
  },
  {
    id: 3,
    title: "NAAC Peer Team Visit Schedule",
    date: "05 Mar 2025",
    category: "Important",
    type: "circular",
  },
  {
    id: 4,
    title: "Placement Drive by IIFL Home Loan",
    date: "23 Jan 2025",
    category: "Placement",
    type: "announcement",
  },
  {
    id: 5,
    title: "Legal Aid Clinic Winter Schedule",
    date: "20 Dec 2024",
    category: "Notice",
    type: "notice",
  },
];

const newsItems = [
  {
    id: 1,
    title: "Centre of Excellence Wins XI National Moot Court Competition",
    excerpt:
      "Our students secured first position at Maharaja Sayajirao University...",
    image:
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=400",
    date: "7 Mar 2025",
  },
  {
    id: 2,
    title: "New Legal Tech Lab Inaugurated",
    excerpt: "State-of-the-art facility with AI-driven legal research tools...",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=400",
    date: "1 Mar 2025",
  },
  {
    id: 3,
    title: "MoU Signed with International Law Firm",
    excerpt: "Collaboration for student internships and faculty exchange...",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400",
    date: "25 Feb 2025",
  },
];

/* -------------------- COMPONENTS -------------------- */

/* -------------------- MAIN COMPONENT -------------------- */

const NewsAnnouncements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <Megaphone className="w-6 h-6 text-gu-primary mr-3" />
                <h3 className="text-xl font-bold text-gu-dark">
                  Announcements
                </h3>
              </div>

              <div className="space-y-4">
                {announcements.map((item) => (
                  <a
                    key={item.id}
                    href="#"
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
                <a
                  href="/announcements"
                  className="flex items-center justify-center text-gu-primary font-semibold"
                >
                  View All Announcements
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* News + Reviews */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gu-dark mb-6">
              Latest News & Updates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <a
                      href={`/news/${item.id}`}
                      className="text-gu-primary font-semibold inline-flex items-center"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
