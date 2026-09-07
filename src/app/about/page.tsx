export default function AboutPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Talia AI</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg text-gray-700">Talia AI is a personal AI nutrition coach available on iOS and Android, designed to make healthy eating effortless, personalized, and sustainable.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10">Our Mission</h2>
          <p>We believe that good nutrition should not require a degree in dietetics. Talia AI bridges the gap between generic diet advice and truly personal nutrition guidance — adapting to your life, your goals, and your unique dietary needs.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10">What makes Talia different</h2>
          <ul className="space-y-3 list-none pl-0">
            {['12 personalized recipes generated fresh every day based on your preferences', 'AI food photo recognition — just snap and track', 'Supports 6+ dietary styles: vegan, keto, gluten-free, and more', 'Available in 7 languages', 'No generic advice — everything is tailored to you'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-10">Who is behind Talia?</h2>
          <p>Talia AI is developed and operated by Evgeni Yachin. For questions or support, reach out at <a href="mailto:zolindar@gmail.com" className="text-green-600 hover:underline">zolindar@gmail.com</a>.</p>
          <div className="bg-gray-50 rounded-2xl p-6 mt-8 border border-gray-100">
            <p className="text-sm text-gray-500 italic">Talia AI is not a medical service. Always consult a qualified healthcare professional before making significant changes to your diet or lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
