export default function TermsPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: September 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>By using Talia AI, you agree to these Terms. Talia AI is operated by Evgeni Yachin ("we", "us").</p>
          <h2 className="text-xl font-bold text-gray-900">Subscription Terms</h2>
          <p>Subscriptions renew automatically at the end of each billing period. You can cancel at any time from your account settings. Cancellation takes effect at the end of the current billing period.</p>
          <h2 className="text-xl font-bold text-gray-900">User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must be 18 or older to use Talia AI</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>Do not use the service for any illegal or unauthorized purposes</li>
          </ul>
          <h2 className="text-xl font-bold text-gray-900">Medical Disclaimer</h2>
          <p>Talia AI is not a medical service. Content provided is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before making significant changes to your diet.</p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>Questions about these terms: <a href="mailto:zolindar@gmail.com" className="text-green-600">zolindar@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
