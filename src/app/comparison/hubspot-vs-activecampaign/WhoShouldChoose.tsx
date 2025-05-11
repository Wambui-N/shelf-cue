const WhoShouldChoose = () => (
  <section className="py-16 w-full max-w-3xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6 text-navy">Who Should Choose HubSpot or ActiveCampaign?</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-blue/5 rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-2 text-blue">Choose <span className="text-navy">HubSpot</span> if…</h3>
        <ul className="list-disc pl-5 space-y-2 text-navy">
          <li>You need a complete marketing, sales, and service solution</li>
          <li>Your team requires advanced CRM features</li>
          <li>You want to scale with an enterprise-grade platform</li>
          <li>You need robust reporting and analytics</li>
          <li>You have the budget for a premium solution</li>
        </ul>
      </div>
      <div className="bg-yellow-50 rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-2 text-orange">Choose <span className="text-navy">ActiveCampaign</span> if…</h3>
        <ul className="list-disc pl-5 space-y-2 text-navy">
          <li>Email marketing is your primary focus</li>
          <li>You need advanced automation and segmentation</li>
          <li>You want a more affordable solution</li>
          <li>You prefer a simpler, more focused platform</li>
          <li>You're just starting with marketing automation</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhoShouldChoose; 