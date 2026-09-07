export default function HowItWorksPage() {
  const steps = [
    { n: '01', title: 'Download & Create Profile', desc: 'Download Talia AI from the App Store or Google Play. Set up your profile with your goals, current weight, dietary preferences, and allergies. The more you share, the more personalized your experience.' },
    { n: '02', title: 'Get Your Daily Meal Plan', desc: 'Every morning, Talia generates 12 personalized recipes just for you — breakfast, lunch, dinner, and snacks. Each recipe matches your calorie goals, macros, and dietary restrictions.' },
    { n: '03', title: 'Track Your Meals', desc: 'Log meals manually or snap a photo and let AI identify the food and calculate nutrition automatically. Track calories, protein, carbs, and fats effortlessly.' },
    { n: '04', title: 'Get AI Guidance', desc: 'Chat with your AI nutrition coach anytime. Ask questions, get recipe alternatives, understand your nutrition data, or get motivation when you need it.' },
    { n: '05', title: 'Track Progress & Improve', desc: 'See your progress with clear charts and insights. Talia learns your patterns and continuously improves your recommendations to help you reach your goals faster.' },
  ];
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How Talia AI Works</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Your personal AI nutrition coach in your pocket. Here is everything it does for you.</p>
        </div>
        <div className="space-y-10">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-full bg-green-500 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-green-100">
                {s.n}
              </div>
              <div className="pt-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h2>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center border border-green-100">
          <p className="text-sm text-green-700 font-medium mb-2">Ready to start?</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Talia AI for free</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://apps.apple.com/app/talia-ai/id6745192320" target="_blank" rel="noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
              🍎 App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.taliaai.app" target="_blank" rel="noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-700 transition-colors">
              ▶ Google Play
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">Not a replacement for professional medical advice. Consult your doctor before making significant dietary changes.</p>
      </div>
    </div>
  );
}
