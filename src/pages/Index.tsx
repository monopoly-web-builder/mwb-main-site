import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import About from "@/components/About";
import WhoWeHelp from "@/components/WhoWeHelp";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Monopoly Web Builder | Professional Websites for UK Small Businesses</title>
        <meta
          name="description"
          content="Affordable, professionally managed websites for pubs, clubs, tradespeople and local businesses. Simple monthly pricing from £20/month. UK-based web design and hosting."
        />
        <meta
          name="keywords"
          content="web design UK, small business website, pub website, trades website, managed website, affordable web design"
        />
        <link rel="canonical" href="https://www.monopolywebbuilder.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Monopoly Web Builder | Professional Websites for UK Small Businesses" />
        <meta property="og:description" content="Affordable, professionally managed websites for pubs, clubs, tradespeople and local businesses. Simple monthly pricing from £20/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.monopolywebbuilder.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monopoly Web Builder | Professional Websites for UK Small Businesses" />
        <meta name="twitter:description" content="Affordable, professionally managed websites for pubs, clubs, tradespeople and local businesses." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Packages />
          <About />
          <WhoWeHelp />
          <HowItWorks />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
