export default function RefundPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Refund Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: September 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900">App Store & Google Play</h2>
          <p>Purchases made through the App Store or Google Play are subject to Apple's and Google's respective refund policies. Contact Apple Support or Google Play Support directly for refund requests on store purchases.</p>
          <h2 className="text-xl font-bold text-gray-900">Direct Purchases via Paddle (APK)</h2>
          <p>If you purchased a subscription directly through our website, you may request a refund within 7 days of purchase. To request a refund, contact us at <a href="mailto:zolindar@gmail.com" className="text-green-600">zolindar@gmail.com</a> with your order details.</p>
          <h2 className="text-xl font-bold text-gray-900">How to Cancel</h2>
          <p>You can cancel your subscription at any time from within the app (Settings → Subscription) or from your Apple ID / Google Play account settings. Cancellation stops future charges but does not refund the current period.</p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For refund requests: <a href="mailto:zolindar@gmail.com" className="text-green-600">zolindar@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
