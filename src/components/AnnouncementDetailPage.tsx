import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Download,
  ExternalLink,
  ChevronLeft,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Announcement {
  id: number;
  title: string;
  date: string;
  place: string;
  pageLink: string;
  url: string;
  thumbnailImage: string;
  pdfFile: string;
  textView: string;
  category: string;
  type: string;
}

// Dummy data for announcements
const announcements: Announcement[] = [
  {
    id: 1,
    title: "Admission 2025-26 Open",
    date: "15 Mar 2025",
    place: "Gujarat University",
    pageLink: "/announcements/1",
    url: "https://example.com/announcement/1",
    thumbnailImage:
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=800",
    pdfFile: "/documents/admission-2025.pdf",
    textView:
      "Admission for academic year 2025-26 is now open for various programs. Applications are invited from eligible candidates for B.Com. LL.B. (Hons.) and other integrated law programs. The admission process includes entrance examination, personal interview, and document verification. Candidates are advised to check eligibility criteria and application procedure on the official website.",
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
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800",
    pdfFile: "/documents/moot-court-competition.pdf",
    textView:
      "Annual national moot court competition scheduled for March 2025. This prestigious event brings together law students from across the country to showcase their legal argumentation skills. Registration is open for teams of 2-3 members. Prizes worth Rs. 1,00,000 will be awarded to winning teams. Registration deadline is February 28, 2025.",
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
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800",
    pdfFile: "/documents/naac-visit-schedule.pdf",
    textView:
      "Schedule for the upcoming NAAC peer team visit to university. The visit is scheduled from March 5-7, 2025, to assess the quality and standards of our academic programs. All departments are requested to prepare necessary documents and arrange for presentations highlighting our achievements and quality assurance measures.",
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
    thumbnailImage:
      "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=800",
    pdfFile: "/documents/placement-drive-iifl.pdf",
    textView:
      "Placement drive organized by IIFL Home Loan for law students. The company is looking for legal associates and compliance officers. Eligibility: Final year students and recent graduates with minimum 60% marks. Package: Competitive salary with growth opportunities. Registration starts on January 20, 2025.",
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
    thumbnailImage:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800",
    pdfFile: "/documents/legal-aid-clinic.pdf",
    textView:
      "Winter schedule for legal aid clinic services. The clinic will operate from December 20, 2024, to January 15, 2025, offering free legal consultation to underprivileged communities. Students will get hands-on experience in client counseling, case preparation, and court procedures under faculty supervision.",
    category: "Notice",
    type: "announcement",
  },
];

const AnnouncementDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const announcementId = parseInt(id || "1");
      const foundAnnouncement = announcements.find(
        (a) => a.id === announcementId
      );

      if (foundAnnouncement) {
        setAnnouncement(foundAnnouncement);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0a0e72] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading announcement...</p>
        </div>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📢</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Announcement Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested announcement could not be found.
          </p>
          <Link
            to="/announcements"
            className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Announcements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/announcements"
            className="inline-flex items-center text-[#0a0e72] hover:text-[#080b5a] transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Announcements
          </Link>
        </div>

        {/* Announcement Detail Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-80 md:h-96">
            <img
              src={announcement.thumbnailImage}
              alt={announcement.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
                {announcement.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {announcement.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{announcement.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{announcement.place}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {announcement.textView}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={announcement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                View Official Details
              </a>

              <a
                href={announcement.pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Related Announcements */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0a0e72] mb-6">
            Related Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements
              .filter(
                (a) =>
                  a.id !== announcement.id &&
                  a.category === announcement.category
              )
              .slice(0, 3)
              .map((relAnnouncement) => (
                <div
                  key={relAnnouncement.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={relAnnouncement.thumbnailImage}
                    alt={relAnnouncement.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">
                      {relAnnouncement.title}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {relAnnouncement.date}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {relAnnouncement.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetailPage;
