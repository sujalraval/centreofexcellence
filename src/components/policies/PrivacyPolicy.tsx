const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="bg-[#0a0e72] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Privacy Policy
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
              The Centre of Excellence, University School of Law, Gujarat University is committed to protecting the privacy and personal information of students, faculty members, researchers, and website visitors.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Personal details such as name, email address, phone number, and postal address</li>
              <li>Academic and professional information</li>
              <li>Application, enrollment, and participation records</li>
              <li>Payment and transaction details (processed through secure gateways)</li>
              <li>Login credentials for authorized portals</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Use of Information</h2>
            <p className="text-gray-700 mb-4">
              Collected information is used strictly for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Academic, research, and training activities</li>
              <li>Admissions, registrations, and certifications</li>
              <li>Communication, notifications, and record management</li>
              <li>Compliance with university and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Data Protection & Security</h2>
            <p className="text-gray-700 mb-6">
              Appropriate technical and administrative measures are implemented to safeguard data.
            </p>
            <p className="text-gray-700 mb-6">
              Access to personal information is restricted to authorized personnel only.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              Personal data is not sold or shared with third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Gujarat University authorities</li>
              <li>Government or statutory bodies</li>
              <li>Payment gateway and IT service providers under confidentiality obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-6">
              The website may use cookies to enhance user experience and analytics. Users may disable cookies through browser settings.
            </p>

            <h2 className="text-2xl font-bold text-[#0a0e72] mt-8 mb-4">Policy Updates</h2>
            <p className="text-gray-700">
              This Privacy Policy may be updated periodically. Continued use of the website implies acceptance of any revised terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;