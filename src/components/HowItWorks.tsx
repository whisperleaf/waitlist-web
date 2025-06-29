
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Journal or speak for 2 minutes a day",
      description: "Share your thoughts naturally through text or voice"
    },
    {
      number: "02", 
      title: "AI gently analyzes tone and behavior",
      description: "Our algorithms detect subtle patterns in your emotional state"
    },
    {
      number: "03",
      title: "Weekly report + custom support delivered",
      description: "Receive personalized insights and gentle nudges for better wellbeing"
    },
    {
      number: "04",
      title: "You stay one step ahead of burnout",
      description: "Prevent stress buildup before it becomes overwhelming"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to better emotional awareness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 transition-colors">
                  <span className="text-2xl font-light text-sage-600">{step.number}</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
