const BannerShared = ({ img, head, head2 }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-white text-black px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8">
          {/* 📷 Image Section */}
          <div className="w-full md:w-4/5">
            <img
              src={img}
              className="rounded-lg shadow-lg w-full object-cover transition-transform duration-300 hover:scale-105"
              alt="Banner"
            />
          </div>

          {/* 📝 Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            {/* 🔹 Section Label */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="border-t border-black w-12 sm:w-16"></div>
              <p className="text-base sm:text-lg font-semibold uppercase tracking-wide">
                Our Bestsellers
              </p>
            </div>

            {/* ✨ Headline */}
            <h1 className="text-2xl  md:text-5xl font-bold leading-tight">
              {head} <span className="text-gray-700">{head2}</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <p className="text-base sm:text-lg font-semibold uppercase tracking-wide">
                Our Bestsellers
              </p>
              <div className="border-t border-black w-12 sm:w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerShared;
