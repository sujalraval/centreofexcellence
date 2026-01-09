const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="bg-[#0a0e72] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-white/90">
              Important Legal Information
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-elegant p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              The information provided on this website is for general academic and informational purposes only.
            </p>

            <p className="text-gray-700 mb-6">
              The Centre does not guarantee the completeness or accuracy of the content.
            </p>

            <p className="text-gray-700 mb-6">
              Course details, fees, schedules, and policies are subject to change without prior notice.
            </p>

            <p className="text-gray-700 mb-6">
              The Centre shall not be held liable for any direct or indirect loss arising from the use of this website.
            </p>

            <p className="text-gray-700">
              External links, if any, are provided for convenience and do not imply endorsement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;