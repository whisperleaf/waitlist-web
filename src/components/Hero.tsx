
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll be in touch soon with early access details.",
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-8 h-8 bg-sage-200 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-lavender-200 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-32 left-32 w-10 h-10 bg-sage-100 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-20 right-16 w-4 h-4 bg-lavender-100 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.17,22L6.16,20.34C8.03,15.94 10.36,11.5 17,8M16.5,17.5C16.5,17.5 10.5,18.5 8.5,21.5C13.5,20.5 16.5,17.5 16.5,17.5Z"/>
              </svg>
            </div>
            <span className="text-sage-600 font-medium">Whisperleaf</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Hear what your mind is{" "}
            <span className="text-sage-600 italic">whispering</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whisperleaf uses gentle AI to help you detect stress and burnout — before it builds up.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
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
          <Button 
            type="submit"
            className="w-full h-12 text-lg bg-sage-600 hover:bg-sage-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Join 150+ early access users
        </p>
      </div>
    </section>
  );
};

export default Hero;
