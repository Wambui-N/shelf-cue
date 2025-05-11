const QuickAnswer = () => (
  <section id="quick-answer" className="py-12 w-full max-w-3xl mx-auto px-4">
    <div className="bg-yellow-50 border-l-4 border-orange p-6 rounded-xl shadow mb-6">
      <span className="block text-lg font-semibold mb-2">💡 Quick Answer</span>
      <p className="text-navy mb-2">For most businesses: <b>HubSpot is the all-in-one powerhouse</b> (but pricier). <b>ActiveCampaign is the email-first specialist</b> with better value for pure email marketing.</p>
    </div>
    <div className="overflow-x-auto rounded-2xl shadow bg-white">
      <table className="min-w-full text-left text-navy">
        <thead>
          <tr className="bg-offwhite text-navy/80">
            <th className="py-3 px-4 font-semibold"> </th>
            <th className="py-3 px-4 font-semibold">HubSpot</th>
            <th className="py-3 px-4 font-semibold">ActiveCampaign</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-100">
            <td className="py-3 px-4 font-semibold">Starting Price</td>
            <td className="py-3 px-4">$45/mo</td>
            <td className="py-3 px-4">$29/mo</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3 px-4 font-semibold">Best For</td>
            <td className="py-3 px-4">All-in-one marketing</td>
            <td className="py-3 px-4">Email marketing</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3 px-4 font-semibold">Our Rating</td>
            <td className="py-3 px-4">★★★★★ (4.8)</td>
            <td className="py-3 px-4">★★★★☆ (4.5)</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3 px-4 font-semibold">Key Features</td>
            <td className="py-3 px-4">
              <ul className="list-disc pl-4 space-y-1">
                <li>CRM integration</li>
                <li>Marketing automation</li>
                <li>Sales tools</li>
                <li>Service hub</li>
              </ul>
            </td>
            <td className="py-3 px-4">
              <ul className="list-disc pl-4 space-y-1">
                <li>Email automation</li>
                <li>Advanced segmentation</li>
                <li>Behavioral tracking</li>
                <li>Site tracking</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3 px-4 font-semibold">Learning Curve</td>
            <td className="py-3 px-4">Moderate to steep</td>
            <td className="py-3 px-4">Easy to moderate</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3 px-4 font-semibold">Try Now</td>
            <td className="py-3 px-4"><a href="https://hubspot.com/affiliate-link?utm_source=shelfcue" target="_blank" rel="noopener noreferrer" className="text-blue underline font-medium">Free 14-Day Trial</a></td>
            <td className="py-3 px-4"><a href="https://activecampaign.com/affiliate-link?utm_source=shelfcue" target="_blank" rel="noopener noreferrer" className="text-blue underline font-medium">Try ActiveCampaign Free</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default QuickAnswer; 