import { useState } from "react";

const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<number | null>(null);

  // Sample club data
  const clubs = [
    {
      id: 1,
      name: "Debate Club",
      description:
        "Enhancing critical thinking and public speaking skills through structured debates and discussions.",
      category: "Academic",
      members: 45,
      meetingTime: "Every Tuesday 5:00 PM",
      contact: "debate@coe.edu.in",
      image: "/placeholder.jpg", // Will use a default placeholder
    },
    {
      id: 2,
      name: "Coding Club",
      description:
        "Exploring programming languages, algorithms, and software development through hands-on projects.",
      category: "Technical",
      members: 62,
      meetingTime: "Every Thursday 4:00 PM",
      contact: "coding@coe.edu.in",
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      name: "Environmental Club",
      description:
        "Promoting sustainability and environmental awareness through campus initiatives.",
      category: "Social",
      members: 38,
      meetingTime: "Every Friday 3:00 PM",
      contact: "eco@coe.edu.in",
      image: "/placeholder.jpg",
    },
    {
      id: 4,
      name: "Drama Society",
      description:
        "Fostering creativity and performance skills through theatrical productions and workshops.",
      category: "Arts",
      members: 29,
      meetingTime: "Every Wednesday 6:00 PM",
      contact: "drama@coe.edu.in",
      image: "/placeholder.jpg",
    },
    {
      id: 5,
      name: "Sports Club",
      description:
        "Organizing various sports activities and inter-college competitions for physical fitness.",
      category: "Sports",
      members: 75,
      meetingTime: "Daily 7:00 AM",
      contact: "sports@coe.edu.in",
      image: "/placeholder.jpg",
    },
    {
      id: 6,
      name: "Music Band",
      description:
        "Bringing together music enthusiasts to perform and share their passion for melodies.",
      category: "Arts",
      members: 22,
      meetingTime: "Every Saturday 4:00 PM",
      contact: "music@coe.edu.in",
      image: "/placeholder.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
          Student Clubs
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join our vibrant community of student organizations that enhance
          learning, foster friendships, and develop leadership skills.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 bg-[#0a0e72] text-white rounded-lg hover:bg-blue-900 transition-colors">
          All Clubs
        </button>
        <button className="px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors">
          Academic
        </button>
        <button className="px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors">
          Technical
        </button>
        <button className="px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors">
          Arts
        </button>
        <button className="px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors">
          Sports
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {club.name}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0a0e72] bg-[#0a0e72]/10 rounded-full mb-3">
                    {club.category}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-600">
                    {club.members} Members
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{club.description}</p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Meeting: {club.meetingTime}</span>
                  <span>{club.contact}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() =>
                    setSelectedClub(selectedClub === club.id ? null : club.id)
                  }
                  className="flex-1 px-4 py-2 bg-[#0a0e72] text-white rounded-lg hover:bg-blue-900 transition-colors text-sm"
                >
                  {selectedClub === club.id ? "Hide Details" : "View Details"}
                </button>
                <button className="px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors text-sm">
                  Join
                </button>
              </div>

              {selectedClub === club.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Club Activities:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Weekly meetings and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Inter-college competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Annual fest participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Guest lectures and seminars</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center py-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-[#0a0e72] mb-4">
          Want to Start Your Own Club?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Have a passion you'd like to share with fellow students? Contact our
          Student Affairs office to learn how to start your own club.
        </p>
        <button className="px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-blue-900 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Clubs;
