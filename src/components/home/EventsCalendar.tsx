// src/components/EventsCalendar.jsx
import { MapPin, Users, Clock, ExternalLink } from "lucide-react";

const EventsCalendar = () => {
  const events = [
    {
      id: 1,
      title: "National IPR Conference",
      date: new Date(2025, 2, 15),
      time: "10:00 AM - 4:00 PM",
      venue: "Moot Court Hall",
      type: "Conference",
      attendees: 200,
    },
    {
      id: 2,
      title: "Legal Tech Workshop",
      date: new Date(2025, 2, 20),
      time: "2:00 PM - 5:00 PM",
      venue: "Computer Lab",
      type: "Workshop",
      attendees: 50,
    },
    {
      id: 3,
      title: "Mediation Competition",
      date: new Date(2025, 2, 25),
      time: "9:00 AM - 6:00 PM",
      venue: "Seminar Hall",
      type: "Competition",
      attendees: 100,
    },
    {
      id: 4,
      title: "Alumni Meet",
      date: new Date(2025, 3, 5),
      time: "6:00 PM - 9:00 PM",
      venue: "Auditorium",
      type: "Networking",
      attendees: 150,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Upcoming Events List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-2xl font-bold text-gu-dark mb-6 text-center">
            Upcoming Events
          </h4>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-gu-primary transition group"
              >
                <div className="mr-4 text-center">
                  <div className="text-2xl font-bold text-gu-primary">
                    {event.date.getDate()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {event.date.toLocaleString("default", {
                      month: "short",
                    })}
                  </div>
                </div>

                <div className="flex-1">
                  <h5 className="font-semibold text-gu-dark group-hover:text-gu-primary transition">
                    {event.title}
                  </h5>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.venue}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {event.attendees} attendees
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="px-3 py-1 bg-gu-light text-gu-primary text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-4 text-gray-400 group-hover:text-gu-primary transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
