const Hero = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue via-blue to-navy py-16 px-4 text-white">
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">HubSpot vs. ActiveCampaign: The 2024 Email Marketing Battle</h1>
    <p className="text-lg md:text-xl text-center mb-8 font-light max-w-2xl">
      Two email marketing giants go head-to-head. Which platform will help you grow your business faster?
    </p>
    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 justify-center mb-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex-1">
        <h3 className="text-xl font-semibold mb-4">HubSpot</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="mr-2">✓</span> All-in-one CRM platform
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Advanced automation
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Enterprise-grade features
          </li>
          <li className="flex items-center text-orange">
            <span className="mr-2">$</span> Starting at $45/mo
          </li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex-1">
        <h3 className="text-xl font-semibold mb-4">ActiveCampaign</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="mr-2">✓</span> Email-first platform
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Powerful segmentation
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Advanced personalization
          </li>
          <li className="flex items-center text-orange">
            <span className="mr-2">$</span> Starting at $29/mo
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4">
      <a href="#quick-answer" className="bg-white text-navy px-6 py-3 rounded-lg font-semibold shadow hover:bg-white/90 transition text-center">See Quick Comparison</a>
      <a href="#final-recommendation" className="bg-orange text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange/90 transition text-center">Jump to Final Recommendation →</a>
    </div>
  </section>
);

export default Hero; 