const WhoShouldChoose = () => (
  <section className="py-16 w-full max-w-3xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6 text-navy">Who Should Choose Kajabi or Teachable?</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-blue/5 rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-2 text-blue">Choose <span className="text-navy">Kajabi</span> if…</h3>
        <ul className="list-disc pl-5 space-y-2 text-navy">
          <li>You want an all-in-one platform (courses, memberships, email, website, funnels, podcasting).</li>
          <li>You plan to scale and want advanced marketing automation built-in.</li>
          <li>You value polished design, flexible site/page builders, and a premium brand feel.</li>
          <li>You're willing to pay more to consolidate tools and save time.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-2 text-orange">Choose <span className="text-navy">Teachable</span> if…</h3>
        <ul className="list-disc pl-5 space-y-2 text-navy">
          <li>You want to launch your first course quickly and easily.</li>
          <li>Your focus is on course delivery and coaching, not full business automation.</li>
          <li>You're budget-conscious and want a lower monthly price.</li>
          <li>You prefer a simple, beginner-friendly interface over advanced features.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhoShouldChoose; 