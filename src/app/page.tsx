import Link from 'next/link';
import { Check, Star, Zap, Camera, TrendingUp, Heart, Shield, ChevronDown } from 'lucide-react';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talia AI — Your Personal AI Nutrition Coach',
  description: 'Stop Googling what to eat. Talia AI creates 12 personalized recipes daily, analyzes food photos instantly, and coaches you to your wellness goals. Available on iOS & Android.',
  alternates: { canonical: 'https://taliaai.blog' },
};

const features = [
  { icon: Zap, title: '12 Recipes Every Day', desc: 'Fresh personalized meal plans — breakfast, snacks, lunch, dinner — calibrated to your exact goals and dietary style.' },
  { icon: Camera, title: 'Snap to Track', desc: 'Photograph any meal and get instant calories, protein, carbs, and fat. No manual entry needed.' },
  { icon: TrendingUp, title: 'Progress That Makes Sense', desc: 'Clear charts and weekly trends. See what is actually working without drowning in numbers.' },
  { icon: Heart, title: 'Real Coaching', desc: 'Personalized tips, habit reminders, and motivation — not generic advice.' },
  { icon: Shield, title: 'Any Diet, Any Allergy', desc: 'Keto, vegan, gluten-free, Mediterranean — Talia adapts completely to how you eat.' },
  { icon: Star, title: '7 Languages', desc: 'English, Russian, Ukrainian, Hebrew, German, Spanish, Arabic. Talia speaks your language.' },
];

const faqs = [
  { q: 'Is Talia AI free to use?', a: 'Talia AI is free to download. Premium features including daily meal plans and food photo analysis require a subscription starting at $38.99/month.' },
  { q: 'Does Talia AI work without internet?', a: 'An internet connection is required for AI-generated meal plans and food photo analysis. Basic tracking features may work offline.' },
  { q: 'Can I use Talia AI if I am vegetarian or vegan?', a: 'Absolutely. Talia AI fully supports vegetarian, vegan, keto, Mediterranean, gluten-free, and many other dietary styles. Set your preference once and all recipes adapt automatically.' },
  { q: 'How accurate is the food photo analysis?', a: 'Our AI recognizes thousands of dishes including mixed meals, restaurant food, and home cooking. For packaged foods, barcode scanning provides exact nutritional data.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. Cancel anytime from your App Store or Google Play subscription settings. You keep access until the end of the current billing period.' },
  { q: 'Is Talia AI a replacement for a nutritionist?', a: 'Talia AI provides AI-powered guidance and personalized recommendations, but is not a medical service. Always consult a qualified healthcare professional for medical nutrition advice.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8 backdrop-blur-sm">
            <span className="text-green-400 animate-pulse">●</span> Available on iOS & Android
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Stop Googling<br />
            <span className="text-green-400">what to eat.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Let AI plan it for you. 12 personalized recipes every day, food photo tracking, and a nutrition coach that never gives up on you.
          </p>
          <p className="text-gray-400 mb-10">Join 500+ users who already eat smarter with Talia AI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://apps.apple.com/app/talia-ai/id6745192320" target="_blank" rel="noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              🍎 Download on App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.taliaai.app" target="_blank" rel="noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-green-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              ▶ Get it on Google Play
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Star size={14} className="text-yellow-400 fill-yellow-400" /> 4.8 rating</span>
            <span>·</span>
            <span>Free to download</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* PAIN → SOLUTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-red-500 mb-3 uppercase tracking-wider">The Problem</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eating healthy is harder than it should be</h2>
              <ul className="space-y-4 text-gray-600">
                {['You spend 30 minutes deciding what to cook — then give up and order pizza', 'Generic meal plans don\'t account for your allergies, schedule, or taste', 'Counting calories manually is exhausting and inaccurate', 'Motivation fades after 2 weeks without real guidance'].map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 shrink-0">✕</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-green-500 mb-3 uppercase tracking-wider">The Solution</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Talia AI does the hard work for you</h2>
              <ul className="space-y-4 text-gray-600">
                {['Wake up to 12 fresh recipes calibrated to your exact goals — no decisions needed', 'Adapts to your diet, allergies, schedule, and food preferences automatically', 'Snap a photo of any meal — AI tracks nutrition in 3 seconds', 'Daily coaching, habit reminders, and progress insights that keep you going'].map(s => (
                  <li key={s} className="flex items-start gap-3">
                    <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything your nutrition journey needs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">One app that replaces a nutritionist, meal planner, and calorie counter.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <f.icon className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Real people, real results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', result: 'Lost 8kg in 2 months', text: '"The daily meal plans make it genuinely effortless. I open the app, pick a recipe, and cook. No thinking required."' },
              { name: 'Alex K.', result: 'Finally eating gluten-free without stress', text: '"First app that actually understands my celiac restrictions. Every single recipe is safe for me. Life changing."' },
              { name: 'Maria L.', result: 'Tracking without obsessing', text: '"The food photo feature is incredible. I just snap my plate and the app does everything. I don\'t dread tracking anymore."' },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-green-600 mb-3">{t.result}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.text}</p>
                <p className="text-gray-400 text-xs font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING STRIP */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Simple pricing. No surprises.</h2>
          <p className="text-gray-400 mb-10">Start free, upgrade when you are ready.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { name: 'Monthly', price: '$38.99', sub: 'per month', badge: null },
              { name: '6 Months', price: '$119', sub: '~$19.83/mo', badge: 'SAVE 15%' },
              { name: 'Annual', price: '$199', sub: '~$16.58/mo', badge: 'BEST VALUE' },
            ].map(p => (
              <div key={p.name} className={`rounded-xl p-5 relative ${p.badge === 'BEST VALUE' ? 'bg-green-600 border-2 border-green-400' : 'bg-white/10 border border-white/20'}`}>
                {p.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-0.5 rounded-full">{p.badge}</div>}
                <div className="text-sm text-gray-300 mb-1">{p.name}</div>
                <div className="text-3xl font-bold mb-1">{p.price}</div>
                <div className="text-xs text-gray-400">{p.sub}</div>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="inline-flex bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-400 transition-colors">
            See Full Pricing →
          </Link>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">From the Nutrition Blog</h2>
            <Link href="/blog" className="text-green-600 font-semibold hover:underline text-sm">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="border border-gray-100 rounded-2xl p-5 hover:border-green-200 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{post.category}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-2 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-xs text-gray-400">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(f => (
              <details key={f.q} className="bg-white rounded-xl border border-gray-100 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                  {f.q}
                  <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-3" />
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">You didn&apos;t come this far to stop.</h2>
          <p className="text-green-100 mb-10 text-lg">Download Talia AI and start your wellness journey today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/app/talia-ai/id6745192320" target="_blank" rel="noreferrer"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors">
              🍎 App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.taliaai.app" target="_blank" rel="noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              ▶ Google Play
            </a>
          </div>
          <p className="text-green-200 text-sm mt-6">Free to download · Plans from $38.99/month · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}
