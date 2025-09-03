function Hero() {
  return (
    <div className="mx-auto bg-white">
      <div
        className="bg-cover bg-center h-screen w-full overflow-hidden relative"
        style={{ backgroundImage: "url('/images.webp')" }}
      >
        <h1 className="flex justify-center align-center text-center text-4xl font-bold absolute top-40 text-white text-6xl ml-10">
          MODIMAL
        </h1>
        <p className="flex justify-center align-center text-center text-2xl absolute top-60  text-white ml-10">
          Discover the latest trends in fashion and accessories
        </p>
      </div>

      <div className="flex flex-row justify-between mt-8 px-4">
        <div className="flex flex-row mb-4 justify-between">
          <p className="pr-16 py-3 mr-16 text-black font-medium  ">
            RETRO PREPPY
          </p>
          <a
            href="#"
            className="ml-[320px] py-3  text-black text-right font-medium underline "
          >
            SHOP NOW
          </a>
        </div>
        <div className="flex flex-row mb-4 justify-start">
          <p className=" py-3  text-black font-medium">CLASSICS RE-IMAGINED</p>
          <a
            href="#"
            className=" py-3 ml-[380px]  text-black font-medium underline "
          >
            SHOP NOW
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mb-8">
        {/* Left Image */}
        <img
          src="/h2.webp"
          alt="Retro Preppy"
          className="w-full h-auto object-cover"
        />
        {/* Right Image */}
        <img
          src="/h2.webp"
          alt="Classics Re-Imagined"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col justify-between mt-4">
        <div className="flex flex-row justify-between items-center mb-8">
          <a href="" className=" px-6 py-3 text-black font-medium ">
            New In
          </a>
          <a href="" className="px-6 py-3  text-black font-medium underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-6 grid-rows-2 gap-0">
          <img
            src="/h3.webp"
            alt="Product 1"
            className="object-cover w-full "
          />
          <img
            src="/h4.webp"
            alt="Product 2"
            className="object-cover w-full "
          />
          <img
            src="/h5.webp"
            alt="Product 3"
            className="object-cover w-full "
          />
          <img
            src="/h6.webp"
            alt="Product 4"
            className="object-cover w-full "
          />
          <img
            src="/h7.webp"
            alt="Product 5"
            className="object-cover w-full "
          />
          <img
            src="/h8.webp"
            alt="Product 6"
            className="object-cover w-full "
          />
          <img
            src="/h9.webp"
            alt="Product 7"
            className="object-cover w-full "
          />
          <img
            src="/h10.webp"
            alt="Product 8"
            className="object-cover w-full "
          />
          <img
            src="/h11.webp"
            alt="Product 9"
            className="object-cover w-full "
          />
          <img
            src="/h12.webp"
            alt="Product 10"
            className="object-cover w-full "
          />
          <img
            src="/h13.webp"
            alt="Product 11"
            className="object-cover w-full "
          />
          <img
            src="/h14.webp"
            alt="Product 12"
            className="object-cover w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
