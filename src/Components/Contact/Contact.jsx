import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import clothe from "../../assets/cloths2.webp";
import MoreC from "./MoreC.jsx";
const Contact = () => {
  return (
    <div className="my-10 md:my-24">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="E-commerce"
              src={clothe}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="hidden lg:relative lg:block lg:p-12 bg-gradient-to-t from-black via-transparent to-transparent">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Path */}
                </svg>
              </a>
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to E-shophing
              </h2>
              <p className="mt-4 leading-relaxed text-white">
                Make your shopping smooth and get the best products from us! So
                hurry up!
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path */}
                  </svg>
                </a>
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Contact Us!
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                  Reach out to us for the best shopping experience!
                </p>
              </div>

              <div className="bg-white border-b-2 md:border-b-0 text-slate-900 p-6 md:p-10  mx-auto space-y-6">
                {/* Shop Location */}
                <div>
                  <h2 className="text-2xl font-bold border-l-4 border-slate-900 pl-3 mb-2">
                    📍 Our Shop Location
                  </h2>
                  <address className="text-lg text-slate-700">
                    S.S Sha Road, Narayanganj
                  </address>
                </div>

                {/* Contact Info */}
                <div className="space-y-1">
                  <p className="text-lg font-medium">
                    📞 Mobile:{" "}
                    <span className="text-slate-700">+8801814482832</span>
                  </p>
                  <p className="text-lg font-medium">
                    ✉️ Email:{" "}
                    <span className="text-slate-700">ecomsuper@gmail.com</span>
                  </p>
                </div>

                {/* Social Links */}
                <div className="my-6">
                  <h2 className="text-2xl font-bold border-l-4 border-slate-900 pl-3 mb-2">
                    💎 Meet Online Quality Products
                  </h2>
                  <div className="text-3xl flex gap-4 my-7">
                    <a
                      href="#"
                      className="text-slate-900 hover:text-blue-600 transition"
                    >
                      <CiFacebook />
                    </a>
                    <a
                      href="#"
                      className="text-slate-900 hover:text-green-500 transition"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="#"
                      className="text-slate-900 hover:text-blue-500 transition"
                    >
                      <CiLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <MoreC></MoreC>
    </div>
  );
};

export default Contact;
