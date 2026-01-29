// src/components/TestimonialsPage.tsx
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  photo: string;
  designation: string;
  details: string;
  category: "student" | "faculty" | "dignitary";
}

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "student" | "faculty" | "dignitary">("all");

  const testimonials: Testimonial[] = [
    // Students
    {
      id: 1,
      name: "Priya Sharma",
      title: "Outstanding Graduate",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
      designation: "B.Com. LL.B. (Hons.) Batch 2024",
      details: "The practical exposure through moot courts and internships shaped my legal career. The faculty's mentorship and industry connections helped me secure my dream job at a top law firm. This institution truly prepares students for the challenges of legal practice.",
      category: "student"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      title: "Moot Court Champion",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
      designation: "LL.M. Batch 2023",
      details: "Excellent faculty guidance and industry-oriented curriculum. The research opportunities and international exchange programs opened my eyes to global legal perspectives. The infrastructure and resources available here are unmatched in the region.",
      category: "student"
    },
    {
      id: 3,
      name: "Ananya Patel",
      title: "Legal Aid Volunteer",
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c4a8f2?auto=format&fit=crop&w=200",
      designation: "BBA LL.B. (Hons.) Batch 2025",
      details: "A perfect blend of academics and co-curricular activities. The legal aid clinic gave me practical experience while serving the community. The faculty's approachability and commitment to student success is remarkable.",
      category: "student"
    },
    // Faculty
    {
      id: 4,
      name: "Dr. Sunita Desai",
      title: "Academic Excellence",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200",
      designation: "Professor of Constitutional Law",
      details: "Our focus is on nurturing ethical, research-oriented, and practice-ready legal professionals. The institution provides excellent facilities for research and teaching. The students' enthusiasm and dedication make our job rewarding.",
      category: "faculty"
    },
    {
      id: 5,
      name: "Prof. Rajesh Kumar",
      title: "Department Head",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200",
      designation: "Head of Department",
      details: "We emphasize experiential learning through clinics, moots, and research projects. The administration's support for innovative teaching methods has transformed our pedagogical approach. The quality of students continues to improve each year.",
      category: "faculty"
    },
    {
      id: 6,
      name: "Dr. Anil Verma",
      title: "Research Coordinator",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200",
      designation: "Associate Professor",
      details: "The institution provides a vibrant academic environment for both students and faculty. The research facilities and funding opportunities are exceptional. Collaborative projects with industry partners enhance our research output significantly.",
      category: "faculty"
    },
    // Dignitaries
    {
      id: 7,
      name: "Hon. Justice Arjun Singh",
      title: "Distinguished Visitor",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200",
      designation: "Judge, High Court",
      details: "The institution plays a significant role in shaping the future of legal education. The infrastructure, faculty quality, and student engagement are impressive. This is truly a center of excellence in legal education.",
      category: "dignitary"
    },
    {
      id: 8,
      name: "Shri Vikram Malhotra",
      title: "Legal Luminary",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
      designation: "Senior Advocate, Supreme Court",
      details: "Impressed by the infrastructure, academic rigor, and student enthusiasm. The practical training programs and industry connections prepare students exceptionally well for legal practice. The institution sets a benchmark for legal education.",
      category: "dignitary"
    },
    {
      id: 9,
      name: "Justice Emeritus Ramesh Chandra",
      title: "Patron",
      photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=200",
      designation: "Former Attorney General",
      details: "A center of excellence fostering legal scholarship and professionalism. The commitment to producing ethically sound legal professionals is evident in the quality of graduates. This institution contributes significantly to the legal ecosystem.",
      category: "dignitary"
    }
  ];

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gu-dark mb-4">
            Voices of Our Institution
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Testimonials from our students, faculty, and distinguished visitors
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "all"
                  ? "bg-[#0a0e72] text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("student")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "student"
                  ? "bg-[#0a0e72] text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveFilter("faculty")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "faculty"
                  ? "bg-[#0a0e72] text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
            >
              Faculty
            </button>
            <button
              onClick={() => setActiveFilter("dignitary")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "dignitary"
                  ? "bg-[#0a0e72] text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
            >
              Dignitaries
            </button>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gu-dark">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.designation}</p>
                    <span className="text-xs font-semibold px-2 py-1 bg-gu-light text-gu-primary rounded-full">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-700 italic">"{testimonial.details}"</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full capitalize">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Stats */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gu-dark mb-8">What Makes Us Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg text-gu-primary mb-2">Student Success</h3>
                <p className="text-gray-600">Our students achieve remarkable success in competitions, placements, and higher education opportunities.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg text-gu-primary mb-2">Faculty Excellence</h3>
                <p className="text-gray-600">Dedicated faculty members with extensive experience and commitment to student development.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg text-gu-primary mb-2">Industry Recognition</h3>
                <p className="text-gray-600">Consistently acknowledged by legal professionals and industry leaders for quality education.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;