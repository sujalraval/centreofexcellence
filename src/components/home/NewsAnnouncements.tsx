// src/components/NewsAnnouncements.jsx
import { Calendar, Clock, ArrowRight, Megaphone } from "lucide-react";

const NewsAnnouncements = () => {
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
      excerpt:
        "State-of-the-art facility with AI-driven legal research tools...",
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements Sidebar */}
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
                    className="group block p-4 rounded-lg border border-gray-200 hover:border-gu-primary hover:bg-gu-light transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === "announcement"
                            ? "bg-blue-100 text-blue-800"
                            : item.type === "event"
                            ? "bg-green-100 text-green-800"
                            : item.type === "circular"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gu-dark group-hover:text-gu-primary transition">
                      {item.title}
                    </h4>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="/announcements"
                  className="flex items-center justify-center text-gu-primary font-semibold hover:text-gu-secondary transition"
                >
                  View All Announcements
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gu-dark">
                  Latest News & Updates
                </h2>
                <p className="text-gray-600 mt-2">
                  Stay updated with our latest achievements and events
                </p>
              </div>
              <a
                href="/news"
                className="px-6 py-2 bg-gu-primary text-white rounded-lg font-semibold hover:bg-gu-secondary transition"
              >
                All News
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>

                    <h3 className="text-xl font-bold text-gu-dark mb-3 group-hover:text-gu-primary transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    <a
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-gu-primary font-semibold hover:text-gu-secondary transition"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gu-dark mb-6">
                What Our Students Say
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Student Name</h4>
                        <p className="text-sm text-gray-600">
                          B.Com. LL.B. (Hons.) Batch 2024
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "The IPR specialization and practical exposure through
                      moot courts prepared me exceptionally well for my
                      corporate law career."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
