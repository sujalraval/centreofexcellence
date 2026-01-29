import { Link } from "react-router-dom";

/* ---------- Types ---------- */

interface EventImage {
  id: number;
  src: string;
  alt: string;
  briefDescription: string;
}

interface Event {
  id: number;
  title: string;
  type: string;
  organisedBy: string;
  collaboration: string;
  date: string;
  time: string;
  venue: string;
  brochure: string;
  url: string;
  images: EventImage[];
  briefAbout: string;
  attendees?: number; // ✅ FIX: made optional
}

/* ---------- Component ---------- */

const EventsActivityPage = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "National Tech Workshop",
      type: "Academic",
      organisedBy: "CPC Department",
      collaboration: "Google Developers",
      date: "15 Jan 2025",
      time: "10:00 AM – 4:00 PM",
      venue: "University Auditorium",
      brochure: "/brochures/tech-workshop.pdf",
      url: "/events/national-tech-workshop",
      images: [
        {
          id: 1,
          src: "/studentactivities/1.png",
          alt: "Workshop Session",
          briefDescription: "Expert-led hands-on sessions",
        },
        {
          id: 2,
          src: "/studentactivities/2.png",
          alt: "Students Participation",
          briefDescription: "Active student engagement",
        },
      ],
      briefAbout:
        "A national-level workshop focusing on modern web and AI technologies with industry experts.",
      attendees: 150,
    },
    {
      id: 2,
      title: "Annual Cultural Fest",
      type: "Cultural",
      organisedBy: "Student Council",
      collaboration: "Various Colleges",
      date: "22 Feb 2025",
      time: "6:00 PM onwards",
      venue: "Open Ground",
      brochure: "/brochures/cultural-fest.pdf",
      url: "/events/annual-cultural-fest",
      images: [
        {
          id: 1,
          src: "/studentactivities/3.png",
          alt: "Dance Performance",
          briefDescription: "Classical and western dance shows",
        },
        {
          id: 2,
          src: "/studentactivities/4.png",
          alt: "Music Night",
          briefDescription: "Live band and DJ night",
        },
      ],
      briefAbout:
        "A vibrant cultural festival showcasing talent in dance, music, drama, and art.",
      // attendees not mandatory anymore ✅
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gu-dark mb-4">
            Events & Activities
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover academic, cultural, and sports events that shape our
            vibrant campus life.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                  {event.images.map((img) => (
                    <img
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg object-cover h-40 w-full"
                    />
                  ))}
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-2xl font-bold text-gu-dark mb-2">
                    {event.title}
                  </h2>

                  <p className="text-sm text-gu-primary font-medium mb-2">
                    {event.type}
                  </p>

                  <p className="text-gray-600 mb-4">{event.briefAbout}</p>

                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>
                      <strong>Date:</strong> {event.date}
                    </li>
                    <li>
                      <strong>Time:</strong> {event.time}
                    </li>
                    <li>
                      <strong>Venue:</strong> {event.venue}
                    </li>
                    <li>
                      <strong>Organised By:</strong> {event.organisedBy}
                    </li>
                    {event.attendees && (
                      <li>
                        <strong>Attendees:</strong> {event.attendees}+
                      </li>
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={event.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                    >
                      View Brochure
                    </a>

                    <Link
                      to={event.url}
                      className="px-4 py-2 bg-gu-primary text-white rounded-md hover:bg-gu-dark transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gu-primary text-white rounded-lg hover:bg-gu-dark transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsActivityPage;
