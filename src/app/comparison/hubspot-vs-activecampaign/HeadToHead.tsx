const HeadToHead = () => (
  <section className="py-16 w-full max-w-4xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6 text-navy">Head-to-Head Breakdown</h2>
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-4 text-navy">Email Marketing & Automation</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue mb-2">HubSpot</h4>
            <ul className="space-y-2 text-navy">
              <li>• Advanced workflow automation</li>
              <li>• Smart content personalization</li>
              <li>• A/B testing capabilities</li>
              <li>• Integrated with full CRM suite</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-orange mb-2">ActiveCampaign</h4>
            <ul className="space-y-2 text-navy">
              <li>• More granular automation rules</li>
              <li>• Better segmentation options</li>
              <li>• Advanced behavioral tracking</li>
              <li>• Email-first approach</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-4 text-navy">CRM & Sales Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue mb-2">HubSpot</h4>
            <ul className="space-y-2 text-navy">
              <li>• Full-featured CRM included</li>
              <li>• Sales pipeline management</li>
              <li>• Deal tracking and forecasting</li>
              <li>• Meeting scheduling tools</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-orange mb-2">ActiveCampaign</h4>
            <ul className="space-y-2 text-navy">
              <li>• Basic CRM functionality</li>
              <li>• Lead scoring and tracking</li>
              <li>• Sales automation features</li>
              <li>• Third-party CRM integration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-4 text-navy">Ease of Use & Support</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue mb-2">HubSpot</h4>
            <ul className="space-y-2 text-navy">
              <li>• Comprehensive knowledge base</li>
              <li>• 24/7 phone and email support</li>
              <li>• Extensive training resources</li>
              <li>• Dedicated account managers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-orange mb-2">ActiveCampaign</h4>
            <ul className="space-y-2 text-navy">
              <li>• Intuitive interface</li>
              <li>• Email and chat support</li>
              <li>• Active community forum</li>
              <li>• Video tutorials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeadToHead; 