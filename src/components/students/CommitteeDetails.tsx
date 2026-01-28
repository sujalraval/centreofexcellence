import { useParams } from "react-router-dom";

const CommitteeDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-bold">Committee Details</h1>

      <section>
        <h2 className="font-semibold text-lg mb-2">Basic Information</h2>
        <p>Committee Code: {id}</p>
        <p>Committee Type: Regulatory</p>
        <p>Status: Active</p>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Members</h2>
        <ul className="list-disc pl-6">
          <li>Chairperson – Dr. ABC</li>
          <li>Coordinator – Prof. XYZ</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Activities</h2>
        <p>No activities added yet.</p>
      </section>
    </div>
  );
};

export default CommitteeDetails;
