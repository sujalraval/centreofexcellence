import { useState } from "react";
import { ReviewItem, ReviewData, ReviewCategory } from "../../types";
import { ChevronRight } from "lucide-react";

/* -------------------- DATA -------------------- */

const reviewData: ReviewData = {
  students: [
    {
      id: 1,
      name: "Student Name",
      designation: "B.Com. LL.B. (Hons.) Batch 2024",
      message:
        "The practical exposure through moot courts and internships shaped my legal career.",
    },
    {
      id: 2,
      name: "Student Name",
      designation: "LL.M. Batch 2023",
      message: "Excellent faculty guidance and industry-oriented curriculum.",
    },
    {
      id: 3,
      name: "Student Name",
      designation: "BBA LL.B. (Hons.) Batch 2025",
      message: "A perfect blend of academics and co-curricular activities.",
    },
  ],

  faculty: [
    {
      id: 1,
      name: "Dr. Faculty Name",
      designation: "Professor of Constitutional Law",
      message:
        "Our focus is on nurturing ethical, research-oriented, and practice-ready legal professionals.",
    },
    {
      id: 2,
      name: "Prof. Faculty Name",
      designation: "Head of Department",
      message:
        "We emphasize experiential learning through clinics, moots, and research projects.",
    },
    {
      id: 3,
      name: "Dr. Faculty Name",
      designation: "Associate Professor",
      message:
        "The institution provides a vibrant academic environment for both students and faculty.",
    },
  ],

  vips: [
    {
      id: 1,
      name: "Hon. Justice Name",
      designation: "Judge, High Court",
      message:
        "The institution plays a significant role in shaping the future of legal education.",
    },
    {
      id: 2,
      name: "Shri Dignitary Name",
      designation: "Senior Advocate, Supreme Court",
      message:
        "Impressed by the infrastructure, academic rigor, and student enthusiasm.",
    },
    {
      id: 3,
      name: "Chief Guest Name",
      designation: "Former Attorney General",
      message:
        "A center of excellence fostering legal scholarship and professionalism.",
    },
  ],
};

/* -------------------- REVIEW CARD -------------------- */

const ReviewCard = ({ data }: { data: ReviewItem }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center font-bold text-gray-600">
          {data.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gu-dark">{data.name}</h4>
          <p className="text-sm text-gray-600">{data.designation}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{data.message}"</p>
    </div>
  );
};

/* -------------------- MAIN COMPONENT -------------------- */

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState<ReviewCategory>("students");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gu-dark">
            Voices of Our Institution
          </h2>
          <p className="text-gray-600 mt-2">
            Experiences shared by students, faculty, and distinguished guests
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["students", "faculty", "vips"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as ReviewCategory)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-[#0a0e72] text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {tab === "students"
                ? "Students"
                : tab === "faculty"
                  ? "Faculty"
                  : "Dignitaries"}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviewData[activeTab].map((item: ReviewItem) => (
            <ReviewCard key={item.id} data={item} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
          >
            View All Reviews
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
