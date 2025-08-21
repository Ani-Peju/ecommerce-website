function BottomClothing() {
  return (
    <div className="bg-white">
      <h2 className="text-4xl text-black text-center font-bold mb-4">
        Trouser's Selection
      </h2>
      <p className="text-md text-black text-center font-normal mb-4">
        Discover our complete collection of trousers
      </p>
      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl text-black font-semibold mb-4">
          {" "}
          First Trousers{" "}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="/tr1.webp"
            alt="Bottom 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr2.webp"
            alt="Bottom 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr3.webp"
            alt="Bottom 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr4.webp"
            alt="Bottom 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl text-black font-semibold mb-4">
          {" "}
          Second Trousers{" "}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="/tr5.webp"
            alt="Bottom 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr6.webp"
            alt="Bottom 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr7.webp"
            alt="Bottom 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr8.webp"
            alt="Bottom 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Third Trousers
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="/tr9.webp"
            alt="Bottom 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr10.webp"
            alt="Bottom 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr11.webp"
            alt="Bottom 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/tr12.webp"
            alt="Bottom 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default BottomClothing;
