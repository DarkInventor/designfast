import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import Script from "next/script";
import Details from "../components/ui/Details";

export default function Home() {
  return (
    <>
      <div className="container">
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R4QYTMFJYT"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R4QYTMFJYT');
          `}
        </script>
      </div>

      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <CTA />
        <Features />
        <ToolKit />
      </GradientWrapper>
      <Details />
      <FooterCTA />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
