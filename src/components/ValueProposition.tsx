
const ValueProposition = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Not another mindfulness app.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whisperleaf uses emotionally intelligent AI to understand your stress patterns 
            and gently nudge you toward calm — without judgment or noise.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-sage-50 to-lavender-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">
              Your Weekly Wellness Report
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="text-gray-700">Stress Level</span>
                <span className="text-amber-600 font-medium">Fatigue +12%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="text-gray-700">Sleep Pattern</span>
                <span className="text-red-500 font-medium">↓ 1.5 hrs</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="text-gray-700">Mood Trend</span>
                <span className="text-sage-600 font-medium">Stable ●</span>
              </div>
              <div className="mt-6 p-4 bg-sage-100 rounded-lg">
                <p className="text-sm text-sage-800">
                  💡 <strong>Gentle insight:</strong> Your journal tone suggests increased work stress. 
                  Consider a 5-minute breathing session today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
