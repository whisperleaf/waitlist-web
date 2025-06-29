
import { Lock } from "lucide-react";

const Privacy = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Your thoughts are yours alone.
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Whisperleaf processes your data securely and never stores identifiable content. 
          Journals are encrypted and deletable any time.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-sage-50 rounded-xl">
            <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-sage-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-gray-600">Your journal entries are encrypted before leaving your device</p>
          </div>

          <div className="p-6 bg-sage-50 rounded-xl">
            <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Deletable Anytime</h3>
            <p className="text-sm text-gray-600">Remove all your data instantly, no questions asked</p>
          </div>

          <div className="p-6 bg-sage-50 rounded-xl">
            <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Never Sold</h3>
            <p className="text-sm text-gray-600">Your personal data will never be sold or shared with third parties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
