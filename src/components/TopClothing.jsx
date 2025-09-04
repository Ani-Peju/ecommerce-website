function TopClothing () {

    return (
        <div className="bg-white">
            <h2 className="text-4xl text-black text-center font-bold mb-4">
                Top Selections
            </h2>
            <p className="text-md text-black text-center font-normal mb-4">
                Discover our complete collection of tops and t-shirts
            </p>
            <div className="flex flex-col justify-between items-center mb-8">
                <h2 className="text-2xl text-black font-semibold mb-4">
                    {" "}
                    Hoodies & Sweatshirts{" "}
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    <img
                        src="/h1.png"
                        alt="Black Hoodie"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/h2.png"
                        alt="Grey Hoodie"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/h3.png"
                        alt="Off white Sweatshirt"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/h4.png"
                        alt="Gradient Hoodie"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-between items-center mb-8">
                <h2 className="text-2xl text-black font-semibold mb-4">
                    {" "}
                    T-shirts{" "}
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    <img
                        src="/ts1.png"
                        alt="Black T-shirt"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/ts2.png"
                        alt="Maroon Printed T-shirt"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/ts3.png"
                        alt="Black Printed T-shirt"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/ts4.png"
                        alt="White Printed T-shirt"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-between items-center mb-8">
                <h2 className="text-2xl text-black font-semibold mb-4">
                    Polos
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    <img
                        src="/p1.png"
                        alt="Polo 1"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/p2.png"
                        alt="Polo 2"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/p3.png"
                        alt="Polo 3"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="/p4.png"
                        alt="Polo 4"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );

}

export default TopClothing;