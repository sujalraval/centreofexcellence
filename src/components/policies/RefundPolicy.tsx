const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="bg-[#0a0e72] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-white/90">
              Effective Date: [To be updated]
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-elegant p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              The Centre of Excellence, University School of Law, Gujarat University follows a transparent and regulated refund policy.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Fees Once Paid</h2>
            <p className="text-gray-700 mb-6">
              Fees paid for admissions, training programs, workshops, certifications, seminars, conferences, examinations, or online services are non-refundable unless otherwise specified in writing.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Duplicate or Excess Payment</h2>
            <p className="text-gray-700 mb-4">
              In cases of duplicate or excess payment, refunds will be processed after verification.
            </p>
            <p className="text-gray-700 mb-6">
              Refunds will be credited to the original payment mode within 7–14 working days.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Cancellation by the Institution</h2>
            <p className="text-gray-700 mb-6">
              If a program or event is cancelled by the Centre or the University, applicable fees will be refunded after deducting administrative charges, if any.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">No Refund Circumstances</h2>
            <p className="text-gray-700 mb-4">
              Refunds shall not be granted for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Non-attendance or withdrawal after registration</li>
              <li>Incomplete documentation</li>
              <li>Technical issues beyond institutional control</li>
              <li>Incorrect details provided by the applicant</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Refund Request Procedure</h2>
            <p className="text-gray-700">
              All refund requests must be submitted in writing to [official email ID] along with payment proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;