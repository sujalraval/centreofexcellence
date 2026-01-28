import { Link } from "react-router-dom";

const services = [
  "Grievance Redressal Cell",
  "Anti-Ragging Committee",
  "SC/ST Cell",
  "Women Development Cell",
  "Placement & Career Guidance",
  "Counseling & Wellness",
];

const StudentSupportServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Student Support Services</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{s}</h2>
            <Link className="text-blue-600 mt-2 inline-block" to="#">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSupportServices;
