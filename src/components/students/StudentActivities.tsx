import { Link } from "react-router-dom";

const StudentActivities = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Student Activities</h1>
      <p className="mb-6">Committee-wise activities will appear here.</p>

      <div className="mt-8">
        <Link
          to="/events"
          className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
        >
          View Events
        </Link>
      </div>
    </div>
  );
};

export default StudentActivities;
