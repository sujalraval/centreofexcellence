import { Link } from "react-router-dom";

const committees = [
  {
    id: "anti-ragging",
    name: "Anti Ragging Committee",
    type: "Regulatory",
    tenure: "2023 – 2026",
    status: "Active",
  },
];

const CommitteeList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Committees</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committees.map((c) => (
          <div key={c.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-lg">{c.name}</h2>
            <p className="text-sm text-gray-600">Type: {c.type}</p>
            <p className="text-sm">Tenure: {c.tenure}</p>
            <p className="text-sm">Status: {c.status}</p>

            <Link
              to={`/students/committees/${c.id}`}
              className="inline-block mt-3 text-blue-600 font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeList;
