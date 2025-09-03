import {
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="">
      <div className="py-4 px-6 text-black flex flex-row justify-center max-w-full mt-8">
        {/* logo */}
        <div className="w-1/4 mr-8 ml-2 py-4">
          <h3 className="font-bold text-black mb-6 text-md">Shop</h3>
          <ul className=" text-md space-y-2">
            <li>HOME</li>
            <li>TOPS</li>
            <li>BOTTOMS</li>
            <li>ACCESSORIES</li>
          </ul>
        </div>

        {/* corporate info */}
        <div className="w-1/4 py-4">
          <h3 className="font-bold text-black mb-6 text-md">Corporate Info</h3>
          <ul className=" text-md space-y-2">
            <li>CAREER AT H&M</li>
            <li>ABOUT H&M GROUP</li>
            <li>SUSTAINABILITY H&M GROUP</li>
            <li>PRESS</li>
            <li>INVESTOR RELATIONS</li>
            <li>CORPORATE GOVERNANCE</li>
            <li>MODERN SLAVERY STATEMENT</li>
          </ul>
        </div>

        {/* help */}
        <div className="w-1/4 py-4 ">
          <h3 className="font-bold text-black mb-6 text-md">Help</h3>
          <ul className="space-y-2 text-md">
            <li>CUSTOMER SERVICE</li>
            <li>MY ACCOUNT</li>
            <li>STORE LOCATOR</li>
            <li>LEGAL & PRIVACY</li>
            <li>CONTACT</li>
            <li>GIFT CARD TERMS AND CONDITIONS</li>
            <li>SECURE SHOPPING</li>
            <li>COOKIE NOTICE</li>
            <li>COOKIE SETTINGS</li>
          </ul>
        </div>

        {/* member */}
        <div className="w-1/4 py-4">
          <h3 className="font-bold text-black text-md mb-4">Become a member</h3>
          <p className="mb-3 text-black text-md">
            Join now and get exclusive benefits!
          </p>
          <p className=" text-black text-md underline">READ MORE</p>
        </div>
      </div>

      <div className="my-4">
        <img src="/logo.jpg" alt="logo" className="w-[120px] " />
      </div>

      <div className="text-sm ml-6 my-4">
        <span className="font-semibold">Canada (en) ($)</span>{" "}
        <a href="#" className="underline">
          CHANGE REGION
        </a>
      </div>

      <div className="text-sm my-16 flex flex-row justify-between items-center w-full">
        <p className="text-sm text-black ml-6 max-w-full">
          The content of this site is copyright-protected and is the property of
          H &amp; M Hennes &amp; Mauritz AB.
        </p>
        <div className="flex space-x-8 text-xl text-black">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FaSpotify />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
          <a href="#" className="pr-8">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
