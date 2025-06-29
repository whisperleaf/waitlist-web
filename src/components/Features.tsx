
import { Brain, BarChart3, Leaf, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Emotional Awareness",
      description: "Analyzes your journal entries and tone to surface mood shifts before you notice them."
    },
    {
      icon: BarChart3,
      title: "Behavior-Based Insights",
      description: "Tracks late-night phone usage, journaling changes, and more to detect stress anomalies."
    },
    {
      icon: Leaf,
      title: "Personalized Calming Nudges",
      description: "Get short breathing guides, journal prompts, or micro-breaks tailored to your recent emotional patterns."
    },
    {
      icon: Lock,
      title: "Private by Design",
      description: "Your thoughts are encrypted, anonymized, and never sold — ever."
    }
  ];

  return (
    <section className="py-20 px-4 bg-sage-25">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Gentle intelligence for your wellbeing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center group-hover:bg-sage-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-sage-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
