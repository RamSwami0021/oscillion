const CaseStudiesPage = () => {
  return (
    <div className="pt-20">
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-32`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore how we've helped businesses achieve their goals through innovative software solutions and strategic consulting.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto px-4 space-y-16 text-gray-800 max-w-4xl">

          <section>
            <h2 className="text-2xl font-semibold mb-4">E-Commerce Platform Transformation</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-blue-600 mb-2">Client: Leading Retail Enterprise</p>
              <p className="text-gray-700 mb-4">
                A major retail company needed to modernize their legacy e-commerce platform to handle increased transaction volumes and provide a seamless customer experience.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Aging monolithic architecture</li>
                    <li>Poor scalability during peak seasons</li>
                    <li>Limited mobile experience</li>
                    <li>High maintenance costs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Microservices architecture migration</li>
                    <li>Cloud infrastructure deployment</li>
                    <li>Responsive mobile-first design</li>
                    <li>Real-time analytics integration</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded border-l-4 border-blue-600">
                <p className="font-semibold text-gray-800 mb-2">Results</p>
                <p className="text-gray-700">
                  300% increase in transaction capacity, 45% reduction in page load time, and 60% improvement in customer satisfaction scores within 6 months.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Healthcare Data Management System</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-blue-600 mb-2">Client: Regional Hospital Network</p>
              <p className="text-gray-700 mb-4">
                A hospital network required a secure, compliant system to manage patient records across multiple facilities and improve operational efficiency.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Fragmented data systems</li>
                    <li>HIPAA compliance requirements</li>
                    <li>Manual workflow processes</li>
                    <li>Limited interoperability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Unified EHR platform development</li>
                    <li>End-to-end encryption implementation</li>
                    <li>Automated workflow system</li>
                    <li>HL7 FHIR integration standards</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded border-l-4 border-green-600">
                <p className="font-semibold text-gray-800 mb-2">Results</p>
                <p className="text-gray-700">
                  100% HIPAA compliance achieved, 40% reduction in administrative overhead, and seamless data sharing across 8 facilities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Financial Services AI Integration</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-blue-600 mb-2">Client: Investment Management Firm</p>
              <p className="text-gray-700 mb-4">
                A fintech company wanted to leverage AI and machine learning to enhance fraud detection and optimize trading strategies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Rising fraud incidents</li>
                    <li>Manual risk assessment</li>
                    <li>Limited predictive insights</li>
                    <li>Complex compliance requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Machine learning fraud detection model</li>
                    <li>Predictive analytics engine</li>
                    <li>Real-time alert system</li>
                    <li>Automated compliance reporting</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-purple-50 rounded border-l-4 border-purple-600">
                <p className="font-semibold text-gray-800 mb-2">Results</p>
                <p className="text-gray-700">
                  99.2% fraud detection accuracy, 35% reduction in false positives, and enhanced regulatory reporting efficiency.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Manufacturing IoT Solution</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-blue-600 mb-2">Client: Industrial Manufacturing Company</p>
              <p className="text-gray-700 mb-4">
                A manufacturing company needed to implement IoT sensors and analytics to optimize production lines and reduce downtime.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Unplanned equipment downtime</li>
                    <li>Limited production visibility</li>
                    <li>Manual monitoring processes</li>
                    <li>High operational costs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>IoT sensor network deployment</li>
                    <li>Predictive maintenance system</li>
                    <li>Real-time production dashboard</li>
                    <li>Machine learning optimization</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-orange-50 rounded border-l-4 border-orange-600">
                <p className="font-semibold text-gray-800 mb-2">Results</p>
                <p className="text-gray-700">
                  50% reduction in downtime, 25% increase in production efficiency, and 30% lower maintenance costs annually.
                </p>
              </div>
            </div>
          </section>

          <p className="text-gray-500 text-sm mt-12">
            Want to share your success story? Contact our team to discuss how we can help transform your business.
          </p>

        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
