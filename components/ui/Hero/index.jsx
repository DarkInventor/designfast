import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          <span className="relative">
            Well-Designed 
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></span>
          </span>
          {" "}Landing Page{" "}         
            Components that {" "}
          <span className="relative">
            Convert 🚀
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> </span>
          </span>
        </h1>

        <p className="max-w-xl mx-auto">
          Be a pro at designing landing pages that convert. Get access to our
          design kit with 100+ components, 15+ landing pages and 10+ full templates built in Figma.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="https://buy.stripe.com/dR6bLR9Mg1vvcMweV7"
            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition"
          >
            $29 (one-time)
            
          </NavLink>
          
        </div>
        <span className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
            SPECIAL 40% OFF <span className="line-through text-black">$49</span>   $29 
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
