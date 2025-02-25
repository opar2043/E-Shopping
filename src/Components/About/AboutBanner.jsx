import cloths from '../../assets/clothes.webp'

const AboutBanner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-md gap-4 my-9">
        <figure className='w-full h-full flex-1 '>
          <img
            src={cloths}
            alt="Album"
            className='rounded-l'
          />
        </figure>
        <div className="flex-1 p-4">
          <h2 className="card-title text-gray-800 font-semibold">New album is released!</h2>
          <p className='text-gray-500 mt-2 font-semibold'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p className='text-gray-500 mt-2 font-semibold'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <h2 className="card-title mt-4 text-gray-800 font-semibold">Our Mission!</h2>
          <p className='text-gray-500 mt-2 font-semibold'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
