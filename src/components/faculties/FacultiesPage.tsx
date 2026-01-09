import { useState } from "react";
import { Mail, Phone, Users, Award, BookOpen, Briefcase } from "lucide-react";
import { FacultyMember } from "../../types";

const FacultiesPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Faculty data based on provided information
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      salutation: "Dr.",
      name: "Shivanagee Patel",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "shivangeepatel96@gmail.com",
      image: "/faculty/shivanagee-patel.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-shivanagee-patel",
    },
    {
      id: 2,
      salutation: "Dr.",
      name: "Komal Sharma",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "sharma.komal0096@gmail.com",
      image: "/faculty/komal-sharma.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-komal-sharma",
    },
    {
      id: 3,
      salutation: "Dr.",
      name: "Mamta Chaudhary",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "cmamta032@gmail.com",
      image: "/faculty/mamta-chaudhary.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-mamta-chaudhary",
    },
    {
      id: 4,
      salutation: "Mr.",
      name: "Jayesh Rathor",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "rathorjayesh05@gmail.com",
      image: "/faculty/jayesh-rathor.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/mr-jayesh-rathor",
    },
    {
      id: 5,
      salutation: "Dr.",
      name: "Aarti Vyas Bhatt",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "aartiniharbhatt@gmail.com",
      image: "/faculty/aarti-vyas-bhatt.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-aarti-vyas bhatt",
    },
    {
      id: 6,
      salutation: "Dr.",
      name: "Swati Shah",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "swatishah1009@gmail.com",
      image: "/faculty/swati-shah.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-swati-shah",
    },
    {
      id: 7,
      salutation: "Mr.",
      name: "Tejas Rawat",
      designation: "Clerk",
      department: "Administration",
      education: "",
      experience: "",
      email: "tejasrawat89@gmail.com",
      image: "/faculty/tejas-rawat.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/",
    },
    {
      id: 8,
      salutation: "Dr.",
      name: "Bhavesh Bharad",
      designation: "HOD",
      department: "Law",
      education: "",
      experience: "",
      email: "dr.bharad@gujaratuniversity.ac.in",
      image: "/faculty/bhavesh-bharad.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-bhavesh-bharad",
    },
    {
      id: 9,
      salutation: "Miss.",
      name: "Khushbu Gusai",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "gusaik7@gmail.com",
      image: "/faculty/khushbu-gusai.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/miss-khushbu-gusai",
    },
    {
      id: 10,
      salutation: "Dr.",
      name: "Varsha Mistry",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "mistyrvarsha@gmail.com",
      image: "/faculty/varsha-mistry.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-varsha-mistry",
    },
    {
      id: 11,
      salutation: "Dr.",
      name: "Hardi Thakkar",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "hardithakkar.1910@gmail.com",
      image: "/faculty/hardi-thakkar.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-hardi-thakkar",
    },
    {
      id: 12,
      salutation: "Dr.",
      name: "Kavyani Kumawat",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "kavyani.kumawat@gmail.com",
      image: "/faculty/kavyani-kumawat.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/dr-kavyani-kumawat",
    },
    {
      id: 13,
      salutation: "Miss.",
      name: "Ashwina Yadav",
      designation: "Assistant Professor",
      department: "Law",
      education: "",
      experience: "",
      email: "ashwinayadav2021@gmail.com",
      image: "/faculty/ashwina-yadav.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/miss-ashwina-yadav",
    },
    {
      id: 14,
      salutation: "Miss.",
      name: "Sannidhi Buch",
      designation: "Co-Cordinator",
      department: "Law",
      education: "",
      experience: "",
      email: "sannidhibuch@gmail.com",
      image: "/faculty/sannidhi-buch.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/miss-sannidhi-buch",
    },
    {
      id: 15,
      salutation: "Ms.",
      name: "Ruta Bharad",
      designation: "Visiting Faculty",
      department: "Law",
      education: "",
      experience: "",
      email: "rutateraiya4712@gmail.com",
      image: "/faculty/ruta-bharad.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/ms-ruta-bharad",
    },
    {
      id: 16,
      salutation: "Miss.",
      name: "Amita Chaudhry",
      designation: "Assistant Professor (Law)",
      department: "Law",
      education: "",
      experience: "",
      email: "chaudhryamita09@gmail.com",
      image: "/faculty/amita-chaudhry.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/",
    },
    {
      id: 17,
      salutation: "Miss.",
      name: "Stuti Khare Patel",
      designation: "Assistant Professor (Law)",
      department: "Law",
      education: "",
      experience: "",
      email: "stutik1698@gmail.com",
      image: "/faculty/stuti-khare-patel.jpg",
      profileUrl: "https://coesolgu.edu.in/staff/miss-stuti-khare&patel",
    },
  ];

  // Get unique departments for filter
  const departments = [
    "all",
    ...new Set(facultyMembers.map((member) => member.department)),
  ];

  // Calculate unique designations count
  const uniqueDesignationsCount = new Set(
    facultyMembers.map((member) => member.designation)
  ).size;

  // Filter faculty based on department and search term
  const filteredFaculty = facultyMembers.filter((member) => {
    const matchesDepartment =
      selectedDepartment === "all" || member.department === selectedDepartment;
    const matchesSearch =
      (member.salutation + " " + member.name)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Page Header */}
      <div className="bg-[#0a0e72] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Our Esteemed Faculty
            </h1>
            <p className="text-xl text-white/90">
              Meet our experienced faculty members who bring expertise and
              innovation to legal education
            </p>
          </div>
        </div>
      </div>

      {/* Faculty Stats */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-elegant p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gu-light flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-gu-primary" />
              </div>
              <div className="text-2xl font-bold text-gu-primary">
                {facultyMembers.length}+
              </div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gu-light flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-gu-primary" />
              </div>
              <div className="text-2xl font-bold text-gu-primary">
                {departments.length - 1}
              </div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gu-light flex items-center justify-center mb-3">
                <BookOpen className="w-8 h-8 text-gu-primary" />
              </div>
              <div className="text-2xl font-bold text-gu-primary">Law</div>
              <div className="text-gray-600">Focus Area</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gu-light flex items-center justify-center mb-3">
                <Briefcase className="w-8 h-8 text-gu-primary" />
              </div>
              <div className="text-2xl font-bold text-gu-primary">
                {uniqueDesignationsCount}+
              </div>
              <div className="text-gray-600">Positions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search faculty by name or designation..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <div
                      className="h-64 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${member.image})`,
                        backgroundColor: "#e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                      <h3 className="text-xl font-bold text-white">
                        {member.salutation} {member.name}
                      </h3>
                      <p className="text-white/90">{member.designation}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gu-light/20 text-gu-primary text-sm font-medium rounded-full">
                        {member.department}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <BookOpen className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Designation</p>
                          <p className="font-medium">{member.designation}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Briefcase className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Department</p>
                          <p className="font-medium">{member.department}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center text-sm text-gray-600 hover:text-[#0a0e72] transition"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </a>

                        {member.phone && (
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center text-sm text-gray-600 hover:text-[#0a0e72] transition"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {member.phone}
                          </a>
                        )}
                      </div>
                      {member.profileUrl && (
                        <div className="mt-4">
                          <a
                            href={member.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-[#0a0e72] text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition"
                          >
                            View Profile
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-2xl font-semibold text-gray-700">
                No faculty members found
              </div>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultiesPage;
