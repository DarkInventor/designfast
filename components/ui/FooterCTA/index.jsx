import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-5xl font-bold sm:text-4xl">
          Get started with the
          <br />
          Figma Design Kit today
        </h2>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
          <NavLink
            href="https://buy.stripe.com/dR6bLR9Mg1vvcMweV7"
            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition"
          >
            $29 (one-time)
          </NavLink>
        </div>
        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
          SPECIAL 40% OFF <span className="line-through text-black">$49</span>{" "}
          $29
        </span>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
