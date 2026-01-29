// src/components/AnnouncementsPage.tsx
import { Calendar, Download, ExternalLink } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Admission 2025-26 Open",
    date: "15 Mar 2025",
    place: "Gujarat University",
    pageLink: "/announcements/1",
    url: "https://example.com/announcement/1",
    thumbnailImage: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=400",
    pdfFile: "/documents/admission-2025.pdf",
    textView: "Admission for academic year 2025-26 is now open for various programs.",
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
    thumbnailImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=400",
    pdfFile: "/documents/moot-court-competition.pdf",
    textView: "Annual national moot court competition scheduled for March 2025.",
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
    thumbnailImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400",
    pdfFile: "/documents/naac-visit-schedule.pdf",
    textView: "Schedule for the upcoming NAAC peer team visit to university.",
    category: "Important",
    type: "announcement",
  },
  {
    id: 4,
    title: "Placement Drive by IIFL Home Loan",
    date: "23 Jan 2025",
    place: "COE Campus",
    pageLink: "/announcements/4",
    url: "https://example.com/announcement/4",
    thumbnailImage: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=400",
    pdfFile: "/documents/placement-drive-iifl.pdf",
    textView: "Placement drive organized by IIFL Home Loan for law students.",
    category: "Placement",
    type: "announcement",
  },
  {
    id: 5,
    title: "Legal Aid Clinic Winter Schedule",
    date: "20 Dec 2024",
    place: "Law School Building",
    pageLink: "/announcements/5",
    url: "https://example.com/announcement/5",
    thumbnailImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=400",
    pdfFile: "/documents/legal-aid-clinic.pdf",
    textView: "Winter schedule for legal aid clinic services.",
    category: "Notice",
    type: "announcement",
  },
];

const AnnouncementsPage = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gu-dark mb-12">
            Announcements
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.thumbnailImage}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-gu-dark">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </span>
                    <span className="text-sm text-gray-500">{item.place}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gu-dark">{item.title}</h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">{item.textView}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gu-primary text-sm font-semibold inline-flex items-center hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Details
                    </a>
                    
                    <a
                      href={item.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gu-primary text-sm font-semibold inline-flex items-center hover:underline"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsPage;