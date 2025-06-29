
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import WaitlistCTA from "@/components/WaitlistCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      <Hero />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <Privacy />
      <WaitlistCTA />
    </div>
  );
};

export default Index;
