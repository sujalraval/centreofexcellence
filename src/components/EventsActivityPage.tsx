// src/components/EventsActivityPage.tsx
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  FileText,
} from "lucide-react";
import { useState } from "react";

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
  attendees: number;
  brochure: string;
  url: string;
  images: EventImage[];
  briefAbout: string;
}

const EventsActivityPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const events: Event[] = [
    {
      id: 1,
      title: "National IPR Conference",
      type: "Conference",
      organisedBy: "Centre of Excellence",
      collaboration: "Gujarat University & IP Association",
      date: "15 Mar 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "Moot Court Hall",
      brochure: "/brochures/ipr-conference-2025.pdf",
      url: "https://example.com/ipr-conference",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600",
          alt: "IPR Conference Opening Ceremony",
          briefDescription:
            "Opening ceremony of the National IPR Conference with dignitaries",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1581578021424-ebdc0b6dc261?auto=format&fit=crop&w=600",
          alt: "IPR Panel Discussion",
          briefDescription:
            "Panel discussion on intellectual property rights with experts",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600",
          alt: "IPR Workshop Session",
          briefDescription: "Interactive workshop session for participants",
        },
      ],
      briefAbout:
        "A national conference focusing on intellectual property rights, featuring expert panels, workshops, and networking opportunities for legal professionals and students.",
    },
    {
      id: 2,
      title: "Legal Tech Workshop",
      type: "Workshop",
      organisedBy: "School of Law",
      collaboration: "Tech Solutions Inc.",
      date: "20 Mar 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "Computer Lab",
      attendees: 50,
      brochure: "/brochures/legal-tech-workshop-2025.pdf",
      url: "https://example.com/legal-tech-workshop",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600",
          alt: "Legal Tech Workshop",
          briefDescription:
            "Participants learning about legal technology tools",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1581578021424-ebdc0b6dc261?auto=format&fit=crop&w=600",
          alt: "Hands-on Training",
          briefDescription: "Hands-on training session with legal software",
        },
      ],
      briefAbout:
        "A workshop designed to introduce legal professionals and students to the latest technology tools used in the legal industry.",
    },
    {
      id: 3,
      title: "Mediation Competition",
      type: "Competition",
      organisedBy: "Student Legal Society",
      collaboration: "Bar Council of Gujarat",
      date: "25 Mar 2025",
      time: "9:00 AM - 6:00 PM",
      venue: "Seminar Hall",
      attendees: 100,
      brochure: "/brochures/mediation-competition-2025.pdf",
      url: "https://example.com/mediation-competition",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=600",
          alt: "Mediation Competition",
          briefDescription: "Students participating in mediation competition",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600",
          alt: "Judges Evaluating",
          briefDescription: "Judges evaluating the performance of participants",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600",
          alt: "Award Ceremony",
          briefDescription: "Award ceremony for winning teams",
        },
      ],
      briefAbout:
        "An annual mediation competition aimed at developing alternative dispute resolution skills among law students.",
    },
    {
      id: 4,
      title: "Alumni Meet",
      type: "Networking",
      organisedBy: "Alumni Association",
      collaboration: "Gujarat University Foundation",
      date: "05 Apr 2025",
      time: "6:00 PM - 9:00 PM",
      venue: "Auditorium",
      attendees: 150,
      brochure: "/brochures/alumni-meet-2025.pdf",
      url: "https://example.com/alumni-meet",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600",
          alt: "Alumni Meet",
          briefDescription: "Alumni gathering and networking event",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600",
          alt: "Guest Speaker",
          briefDescription: "Distinguished guest speaker addressing alumni",
        },
      ],
      briefAbout:
        "An annual gathering of law school alumni to reconnect, network, and share professional experiences.",
    },
  ];

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handlePrevImage = () => {
    if (selectedEvent) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedEvent) {
      setSelectedImageIndex((prev) =>
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gu-dark mb-12">
            Events & Activities
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      event.images[0]?.src ||
                      "https://via.placeholder.com/600x400"
                    }
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-gu-dark">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.venue}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gu-dark">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3">
                    {event.briefAbout}
                  </p>

                  <div className="text-xs text-gray-500 mb-3">
                    <p>
                      <span className="font-semibold">Organised by:</span>{" "}
                      {event.organisedBy}
                    </p>
                    <p>
                      <span className="font-semibold">Collaboration:</span>{" "}
                      {event.collaboration}
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-1">Attendees:</span>{" "}
                      <Users className="w-3 h-3 mr-1" /> {event.attendees}+
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={event.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gu-primary text-sm font-semibold inline-flex items-center hover:underline"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      Brochure
                    </a>

                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gu-primary text-sm font-semibold inline-flex items-center hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for detailed event view */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gu-dark">
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        <span className="font-semibold">Date:</span>{" "}
                        {selectedEvent.date}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>
                        <span className="font-semibold">Time:</span>{" "}
                        {selectedEvent.time}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>
                        <span className="font-semibold">Venue:</span>{" "}
                        {selectedEvent.venue}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">Type:</span>{" "}
                      {selectedEvent.type}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">Organised by:</span>{" "}
                      {selectedEvent.organisedBy}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">Collaboration:</span>{" "}
                      {selectedEvent.collaboration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>
                        <span className="font-semibold">Attendees:</span>{" "}
                        {selectedEvent.attendees}+
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gu-dark mb-2">
                      About this Event
                    </h3>
                    <p className="text-gray-600">{selectedEvent.briefAbout}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedEvent.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gu-primary text-white px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center hover:bg-[#080b5a] transition"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Download Brochure
                    </a>

                    <a
                      href={selectedEvent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gu-primary text-gu-primary px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center hover:bg-gu-primary hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Event Page
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gu-dark mb-3">
                    Event Images
                  </h3>
                  <div className="mb-4 relative">
                    <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={selectedEvent.images[selectedImageIndex].src}
                        alt={selectedEvent.images[selectedImageIndex].alt}
                        className="w-full h-full object-contain"
                      />

                      {selectedEvent.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                          >
                            &lt;
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                          >
                            &gt;
                          </button>
                        </>
                      )}
                    </div>

                    <div className="mt-2">
                      <p className="text-sm font-medium text-gu-dark">
                        {selectedEvent.images[selectedImageIndex].alt}
                      </p>
                      <p className="text-sm text-gray-600">
                        {
                          selectedEvent.images[selectedImageIndex]
                            .briefDescription
                        }
                      </p>
                    </div>
                  </div>

                  {selectedEvent.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedEvent.images.map((image, index) => (
                        <div
                          key={image.id}
                          className={`cursor-pointer rounded border-2 ${
                            selectedImageIndex === index
                              ? "border-gu-primary"
                              : "border-transparent"
                          }`}
                          onClick={() => setSelectedImageIndex(index)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-20 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsActivityPage;
