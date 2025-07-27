import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
        The simplest app to{" "}
        <span className="bg-hero-highlight text-black px-2 py-1 rounded-lg inline-block transform -rotate-1">
          Boost
        </span>{" "}
        your{" "}
        <span className="bg-hero-highlight text-black px-2 py-1 rounded-lg inline-block transform rotate-1">
          Productivity
        </span>
        <br />& track your time
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Minimo boosts your focus with timed work sessions and full-screen breaks featuring guided exercises. Helps your mind stay sharp and your body feel better.
      </p>
      
      <div className="mb-6">
         <Link to="https://abdoemadselim.gumroad.com/l/bucey">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-lg font-semibold">
            Get now for free
        </Button>
        </Link>
      </div>
      
      <div className="flex items-center justify-center gap-8 text-sm text-hero-highlight">
        <span>Windows & Linux</span>
        <span>No Sign-up Required</span>
      </div>
    </section>
  );
};

export default HeroSection;