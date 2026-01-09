const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="bg-[#0a0e72] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90">
              Website Usage Terms
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-elegant p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              By accessing and using this website, users agree to the following terms:
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Website Usage</h2>
            <p className="text-gray-700 mb-6">
              The website is intended for academic, informational, and official purposes only.
            </p>
            <p className="text-gray-700 mb-6">
              Unauthorized use or misuse of content is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content including text, logos, documents, images, and software is the property of Gujarat University unless stated otherwise.
            </p>
            <p className="text-gray-700 mb-6">
              Reproduction or distribution without written permission is prohibited.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Accuracy of Information</h2>
            <p className="text-gray-700 mb-6">
              While efforts are made to keep information accurate, the Centre reserves the right to modify content without prior notice.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">User Responsibility</h2>
            <p className="text-gray-700 mb-4">
              Users are responsible for maintaining the confidentiality of their login credentials.
            </p>
            <p className="text-gray-700 mb-6">
              Any misuse of accounts may result in suspension or legal action.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These terms shall be governed by the laws of India and subject to the jurisdiction of courts in Gujarat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;