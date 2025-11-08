const PartnersPage = () => {
  return (
    <div className="pt-20">
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-32`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">Partners</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Together we deliver exceptional value. Join our network of technology leaders and strategic partners.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto px-4 space-y-16 text-gray-800 max-w-4xl">

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Partner With Us</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">Proven Expertise</h3>
                <p className="text-gray-700">
                  With years of experience delivering enterprise-grade solutions, we bring technical excellence and business acumen to every partnership.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">Dedicated Support</h3>
                <p className="text-gray-700">
                  Our partnership team provides ongoing support, training, and resources to ensure mutual success and growth.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">Co-Marketing Opportunities</h3>
                <p className="text-gray-700">
                  Collaborate on joint marketing initiatives, webinars, and case studies to expand market reach and brand awareness.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">Revenue Growth</h3>
                <p className="text-gray-700">
                  Develop new revenue streams through joint solutions, referral programs, and integrated offerings that benefit both organizations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Partnership Models</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-800 mb-2">Technology Partners</h3>
                <p className="text-gray-700 mb-3">
                  Integrate your technology platform with our solutions to create powerful, comprehensive offerings for mutual clients.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>API integrations and data connectivity</li>
                  <li>Joint solution development</li>
                  <li>Technical collaboration and support</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold text-gray-800 mb-2">Reseller Partners</h3>
                <p className="text-gray-700 mb-3">
                  Expand your service portfolio by reselling our solutions to your customer base with attractive margin structures.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Competitive reseller pricing</li>
                  <li>Sales and technical training</li>
                  <li>Marketing materials and support</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold text-gray-800 mb-2">Implementation Partners</h3>
                <p className="text-gray-700 mb-3">
                  Work with our solutions to deliver consulting, implementation, and deployment services to end customers.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Implementation methodologies</li>
                  <li>Customer success support</li>
                  <li>Professional services collaboration</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="font-semibold text-gray-800 mb-2">Strategic Alliance Partners</h3>
                <p className="text-gray-700 mb-3">
                  Establish long-term strategic relationships focused on market expansion and innovation in specific industries or geographies.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Joint go-to-market strategies</li>
                  <li>Dedicated account management</li>
                  <li>Co-investment opportunities</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Partner Requirements</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Alignment:</strong> Shared values and commitment to customer success and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Capability:</strong> Relevant expertise and resources to deliver joint solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Market Presence:</strong> Established customer base or market access in target segments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Commitment:</strong> Dedicated resources and active participation in partnership initiatives</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-4">
                We're excited to explore partnership opportunities that create mutual value and drive innovation in the market.
              </p>
              <p className="text-gray-700 mb-6">
                To discuss how we can work together, please reach out to our partnership team:
              </p>
              <div className="space-y-2">
                <p className="text-gray-800">
                  <span className="font-semibold">Email:</span> <a href="mailto:partnerships@oscillionsoftware.com" className="text-blue-600 hover:underline">partnerships@oscillionsoftware.com</a>
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold">Phone:</span> <a href="tel:+1-800-000-0000" className="text-blue-600 hover:underline">+1 (800) 000-0000</a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
