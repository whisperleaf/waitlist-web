
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const WaitlistCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [betaTester, setBetaTester] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "You're on the list!",
        description: betaTester 
          ? "Thanks for volunteering to test the beta. We'll be in touch soon!" 
          : "We'll notify you when Whisperleaf is ready.",
      });
      setName("");
      setEmail("");
      setBetaTester(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sage-50 to-sage-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Ready to listen to your mind?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Join our waitlist and be the first to experience gentle AI-powered wellness insights.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 text-lg border-sage-200 focus:border-sage-400"
              required
            />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-lg border-sage-200 focus:border-sage-400"
              required
            />
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <Checkbox 
              id="beta-tester"
              checked={betaTester}
              onCheckedChange={(checked) => setBetaTester(checked as boolean)}
            />
            <label 
              htmlFor="beta-tester" 
              className="text-sm text-gray-600 cursor-pointer"
            >
              I'd like to help test the beta version
            </label>
          </div>

          <Button 
            type="submit"
            className="w-full md:w-auto px-12 h-12 text-lg bg-sage-600 hover:bg-sage-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </form>

        <footer className="mt-16 pt-8 border-t border-sage-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-sage-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.17,22L6.16,20.34C8.03,15.94 10.36,11.5 17,8M16.5,17.5C16.5,17.5 10.5,18.5 8.5,21.5C13.5,20.5 16.5,17.5 16.5,17.5Z"/>
              </svg>
            </div>
            <span className="text-sage-600 font-medium">Whisperleaf</span>
          </div>
          <p className="text-sm text-gray-500">
            Gentle AI for emotional wellbeing • Coming 2025
          </p>
        </footer>
      </div>
    </section>
  );
};

export default WaitlistCTA;
