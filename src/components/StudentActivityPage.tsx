// src/components/StudentActivityPage.tsx
import { useState } from "react";
import { Calendar, MapPin, Users, User, Award, Plus } from "lucide-react";

interface ActivityPhoto {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface StudentActivity {
  id: number;
  type: string;
  name: string;
  activityFor: string;
  venue: string;
  managedBy: string;
  date: string;
  facultyInCharge: string;
  photos: ActivityPhoto[];
  certificate?: string;
  brief: string;
}

const StudentActivityPage = () => {
  const [activities, setActivities] = useState<StudentActivity[]>([
    {
      id: 1,
      type: "Cultural",
      name: "Annual Cultural Fest",
      activityFor: "All Students",
      venue: "College Ground",
      managedBy: "Cultural Committee",
      date: "15-03-2025",
      facultyInCharge: "Dr. Priya Sharma",
      photos: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600",
          title: "Opening Ceremony",
          description: "Colorful opening ceremony with traditional performances"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600",
          title: "Dance Performance",
          description: "Students showcasing various dance forms"
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=600",
          title: "Music Concert",
          description: "Live music performance by student bands"
        }
      ],
      certificate: "https://example.com/certificates/cultural-fest-2025.pdf",
      brief: "The Annual Cultural Fest was a grand celebration of arts and culture, featuring dance performances, music concerts, drama plays, and art exhibitions. Over 500 students participated in various competitions and showcases."
    },
    {
      id: 2,
      type: "Sports",
      name: "Inter-College Sports Meet",
      activityFor: "Sports Club Members",
      venue: "Sports Complex",
      managedBy: "Sports Committee",
      date: "20-03-2025",
      facultyInCharge: "Prof. Rajesh Patel",
      photos: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=600",
          title: "Athletics Competition",
          description: "Track and field events with enthusiastic participation"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=600",
          title: "Team Sports",
          description: "Basketball and football matches between college teams"
        }
      ],
      brief: "The Inter-College Sports Meet brought together talented athletes from various colleges for exciting competitions in athletics, team sports, and individual games. Our college emerged victorious in several events."
    },
    {
      id: 3,
      type: "Academic",
      name: "Legal Aid Camp",
      activityFor: "Law Students",
      venue: "Local Community Center",
      managedBy: "Legal Aid Society",
      date: "25-03-2025",
      facultyInCharge: "Dr. Amit Kumar",
      photos: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?auto=format&fit=crop&w=600",
          title: "Legal Consultation",
          description: "Students providing free legal advice to community members"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600",
          title: "Awareness Session",
          description: "Educational sessions on legal rights and procedures"
        }
      ],
      brief: "The Legal Aid Camp provided valuable practical experience for law students while serving the community. Students offered free legal consultations and conducted awareness sessions on various legal topics."
    }
  ]);

  const [selectedActivity, setSelectedActivity] = useState<StudentActivity | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    activityFor: "",
    venue: "",
    managedBy: "",
    date: "",
    facultyInCharge: "",
    brief: ""
  });

  const handleActivityClick = (activity: StudentActivity) => {
    setSelectedActivity(activity);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  const handlePrevImage = () => {
    if (selectedActivity) {
      setSelectedImageIndex(prev => 
        prev === 0 ? selectedActivity.photos.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedActivity) {
      setSelectedImageIndex(prev => 
        prev === selectedActivity.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setShowForm(false);
    setFormData({
      type: "",
      name: "",
      activityFor: "",
      venue: "",
      managedBy: "",
      date: "",
      facultyInCharge: "",
      brief: ""
    });
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gu-dark">
              Student Activities
            </h1>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center px-4 py-2 bg-gu-primary text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Activity
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleActivityClick(activity)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.photos[0]?.src || "https://via.placeholder.com/600x400"}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-gu-dark">
                      {activity.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gu-dark">{activity.name}</h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {activity.date}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {activity.venue}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    {activity.activityFor}
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">{activity.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for detailed activity view */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gu-dark">{selectedActivity.name}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3 text-gu-primary" />
                      <div>
                        <span className="font-semibold text-gray-700">Type:</span>
                        <span className="ml-2 text-gray-600">{selectedActivity.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-gu-primary" />
                      <div>
                        <span className="font-semibold text-gray-700">Activity For:</span>
                        <span className="ml-2 text-gray-600">{selectedActivity.activityFor}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-gu-primary" />
                      <div>
                        <span className="font-semibold text-gray-700">Venue:</span>
                        <span className="ml-2 text-gray-600">{selectedActivity.venue}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-3 text-gu-primary" />
                      <div>
                        <span className="font-semibold text-gray-700">Managed By:</span>
                        <span className="ml-2 text-gray-600">{selectedActivity.managedBy}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-gu-primary" />
                      <div>
                        <span className="font-semibold text-gray-700">Date:</span>
                        <span className="ml-2 text-gray-600">{selectedActivity.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-3 text-gu-primary" />
                      <div>
                        <span className="font-semibold text-gray-700">Faculty In Charge:</span>
                        <span className="ml-2 text-gray-600">{selectedActivity.facultyInCharge}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gu-dark mb-3">Brief Description</h3>
                    <p className="text-gray-600">{selectedActivity.brief}</p>
                  </div>
                  
                  {selectedActivity.certificate && (
                    <div className="mb-6">
                      <a
                        href={selectedActivity.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gu-primary text-white rounded-lg hover:bg-[#080b5a] transition-colors"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-semibold text-gu-dark mb-4">Activity Photos</h3>
                  <div className="mb-6 relative">
                    <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={selectedActivity.photos[selectedImageIndex].src}
                        alt={selectedActivity.photos[selectedImageIndex].title}
                        className="w-full h-full object-contain"
                      />
                      
                      {selectedActivity.photos.length > 1 && (
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
                    
                    <div className="mt-3">
                      <h4 className="font-medium text-gu-dark">{selectedActivity.photos[selectedImageIndex].title}</h4>
                      <p className="text-sm text-gray-600">{selectedActivity.photos[selectedImageIndex].description}</p>
                    </div>
                  </div>
                  
                  {selectedActivity.photos.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedActivity.photos.map((photo, index) => (
                        <div 
                          key={photo.id}
                          className={`cursor-pointer rounded border-2 ${selectedImageIndex === index ? 'border-gu-primary' : 'border-transparent'}`}
                          onClick={() => setSelectedImageIndex(index)}
                        >
                          <img
                            src={photo.src}
                            alt={photo.title}
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

      {/* Add Activity Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gu-dark">Add New Activity</h2>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type *
                    </label>
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name of Activity *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Activity for *
                    </label>
                    <input
                      type="text"
                      name="activityFor"
                      value={formData.activityFor}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Venue *
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Managed by *
                    </label>
                    <input
                      type="text"
                      name="managedBy"
                      value={formData.managedBy}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Faculty In charge *
                    </label>
                    <input
                      type="text"
                      name="facultyInCharge"
                      value={formData.facultyInCharge}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brief *
                  </label>
                  <textarea
                    name="brief"
                    value={formData.brief}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gu-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gu-primary text-white rounded-lg hover:bg-[#080b5a] transition-colors"
                  >
                    Save Activity
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentActivityPage;