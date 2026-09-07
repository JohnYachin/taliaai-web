export default function ContactPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 mb-10">Have a question, issue, or feedback? We are happy to help.</p>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-1">📧 Email</h3>
            <p className="text-gray-500 text-sm mb-2">For support, billing, or general questions:</p>
            <a href="mailto:zolindar@gmail.com" className="text-green-600 font-medium hover:underline">zolindar@gmail.com</a>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-1">💬 WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-2">Chat with us directly:</p>
            <a href="https://wa.me/972505710374" target="_blank" rel="noreferrer" className="text-green-600 font-medium hover:underline">+972 50 571 0374</a>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-1">⏱ Response Time</h3>
            <p className="text-gray-500 text-sm">We typically respond within 24 hours on business days.</p>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-400">
          <p>Operated by Evgeni Yachin · <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> · <a href="/terms" className="hover:underline">Terms</a></p>
        </div>
      </div>
    </div>
  );
}
