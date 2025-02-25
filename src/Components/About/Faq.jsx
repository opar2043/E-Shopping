const Faq = () => {
  return (
    <div className=" mx-auto my-10 flex flex-col gap-2">
      {/* Section Heading */}
      <h2 className="text-2xl mb-4 md:mb-10 mt-10 md:text-3xl font-bold flex justify-start items-center">
        FREE TO  <span className="text-gray-600 ml-2"> ASK</span>
        <div className="border-t-2 ml-1 mt-2 border-gray-900 w-12 sm:w-16"></div>
      </h2>

      {/* Electronics Category */}
      <div className="collapse collapse-arrow  bg-white text-slate-900 border border-slate-900">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-xl font-semibold">
          🔋 What is the warranty policy for electronics?
        </div>
        <div className="collapse-content">
          <p className="text-slate-700">
            All electronics come with a 1-year manufacturer’s warranty. Extended
            warranty options are available at checkout.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white text-slate-900 border border-slate-900">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-semibold">
          🚚 How fast is delivery for tech products?
        </div>
        <div className="collapse-content">
          <p className="text-slate-700">
            We offer express delivery (2-3 days) and standard shipping (5-7
            days) for all electronic items.
          </p>
        </div>
      </div>

      {/* Fashion Category */}
      <div className="collapse collapse-arrow bg-white text-slate-900 border border-slate-900">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-semibold">
          👕 Can I return a fashion item if it doesn’t fit?
        </div>
        <div className="collapse-content">
          <p className="text-slate-700">
            Yes, you can return or exchange fashion products within 30 days of
            purchase, provided they are unworn and with tags intact.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white text-slate-900 border border-slate-900">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-semibold">
          🎨 Do you offer customization for clothing?
        </div>
        <div className="collapse-content">
          <p className="text-slate-700">
            Yes, selected clothing items can be customized with your preferred
            designs, initials, or logos.
          </p>
        </div>
      </div>

      {/* Home Essentials Category */}
      <div className="collapse collapse-arrow bg-white text-slate-900 border border-slate-900">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-semibold">
          🏡 Are home essentials eco-friendly?
        </div>
        <div className="collapse-content">
          <p className="text-slate-700">
            Many of our home essentials are made from sustainable materials.
            Check the product description for eco-friendly labels.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white text-slate-900 border border-slate-900">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-semibold">
          🔥 What are the best-selling home products?
        </div>
        <div className="collapse-content">
          <p className="text-slate-700">
            Our top-rated home products include smart lighting, ergonomic
            furniture, and air purifiers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
