import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2A3A45] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-xl mb-3">🌿 Talia AI</div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your AI-powered nutrition coach. Track meals, receive personalized guidance, and stay motivated towards your wellness goals.
            </p>
            <p className="text-gray-400 text-xs mt-4">Operated by Evgeni Yachin</p>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Pages</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Legal</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Talia AI. All rights reserved.</p>
          <p>
            You didn&apos;t come this far to stop.
          </p>
        </div>
      </div>
    </footer>
  );
}
