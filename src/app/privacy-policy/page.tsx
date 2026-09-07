export default function PrivacyPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: September 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>Talia AI ("we", "our", or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>We collect information you provide directly: email address, name, dietary preferences, health goals, and meal logs. We also collect usage data to improve the app experience.</p>
          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To personalize your nutrition coaching and meal plans</li>
            <li>To process subscription payments securely via Paddle and RevenueCat</li>
            <li>To provide customer support</li>
            <li>To improve our AI models and app features</li>
          </ul>
          <h2 className="text-xl font-bold text-gray-900">Data Security</h2>
          <p>Your data is stored securely using Supabase infrastructure with industry-standard encryption. We never sell your personal data to third parties.</p>
          <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
          <p>You may request deletion of your account and all associated data at any time from within the app (Settings → Delete Account) or by emailing <a href="mailto:zolindar@gmail.com" className="text-green-600">zolindar@gmail.com</a>.</p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For privacy questions: <a href="mailto:zolindar@gmail.com" className="text-green-600">zolindar@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
