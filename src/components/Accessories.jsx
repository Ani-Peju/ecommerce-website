function Accessories() {
  return (
    <div className="bg-white">
      <h2 className="text-4xl text-black text-center font-bold mb-4">
        Accessories Selection
      </h2>
      <p className="text-md text-black text-center font-normal mb-4">
        Discover our complete collection of Accessories
      </p>
      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl text-black font-semibold mb-4"> Bracelets </h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="/b1.webp"
            alt="Bottom 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/b2.webp"
            alt="Bottom 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/b3.webp"
            alt="Bottom 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/b4.webp"
            alt="Bottom 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl text-black font-semibold mb-4">Earrings</h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="/e1.webp"
            alt="Bottom 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/e2.webp"
            alt="Bottom 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/e3.webp"
            alt="Bottom 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/e4.webp"
            alt="Bottom 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mb-8">
        <h2 className="text-2xl text-black font-semibold mb-4">Necklaces</h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="/n1.webp"
            alt="Bottom 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/n2.webp"
            alt="Bottom 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/n3.webp"
            alt="Bottom 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/n4.webp"
            alt="Bottom 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Accessories;
