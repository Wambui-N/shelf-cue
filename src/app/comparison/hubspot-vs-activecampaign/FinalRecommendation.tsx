const FinalRecommendation = () => (
  <section id="final-recommendation" className="py-16 w-full max-w-3xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6 text-navy">Our Final Recommendation</h2>
    <p className="text-lg mb-4">
      <b>HubSpot</b> is the best choice if you need a complete marketing, sales, and service solution. While it's more expensive, the all-in-one platform can replace multiple tools and provides enterprise-grade features that scale with your business.
    </p>
    <p className="text-lg mb-4">
      <b>ActiveCampaign</b> is the winner if email marketing and automation are your primary needs. It offers better value for money, more granular automation features, and a simpler learning curve—perfect for businesses focused on email marketing.
    </p>
    <p className="text-lg mb-6">
      Both platforms offer free trials, so you can test them out and see which one better fits your needs. Remember to consider your team size, budget, and specific requirements when making your decision.
    </p>
    <div className="flex flex-col md:flex-row gap-4">
      <a href="https://hubspot.com/affiliate-link?utm_source=shelfcue" target="_blank" rel="noopener noreferrer" className="bg-blue text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue/90 transition text-center">Try HubSpot Free</a>
      <a href="https://activecampaign.com/affiliate-link?utm_source=shelfcue" target="_blank" rel="noopener noreferrer" className="bg-orange text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange/90 transition text-center">Try ActiveCampaign Free</a>
    </div>
  </section>
);

export default FinalRecommendation; 