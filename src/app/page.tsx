import Link from 'next/link';
import { Check, Star, Zap, Camera, TrendingUp, Heart, Shield } from 'lucide-react';

const features = [
  { icon: Zap, title: 'AI-Powered Meal Plans', desc: '12 personalized recipes every day — breakfast, lunch, dinner, snacks — tailored to your diet and allergies.' },
  { icon: Camera, title: 'Food Photo Analysis', desc: 'Snap a photo of your meal and get instant nutritional breakdown powered by AI.' },
  { icon: TrendingUp, title: 'Progress Tracking', desc: 'Track your weight, calories, macros and habits with beautiful charts.' },
  { icon: Heart, title: 'Daily Motivation', desc: 'Personalized tips, encouragement and habit reminders to keep you on track.' },
  { icon: Shield, title: 'Allergy & Diet Safe', desc: 'Fully adapts to vegetarian, vegan, keto, gluten-free and custom dietary needs.' },
  { icon: Star, title: 'Recipes in 7 Languages', desc: 'Available in English, Russian, Ukrainian, Hebrew, German, Spanish and Arabic.' },
];

const testimonials = [
  { name: 'Sarah M.', text: 'Lost 8kg in 2 months. The daily meal plans make it so easy to stay on track!', stars: 5 },
  { name: 'Alex K.', text: 'Finally an app that understands my dietary restrictions. The AI is incredibly smart.', stars: 5 },
  { name: 'Maria L.', text: 'The food photo feature is a game changer. I just snap and it tracks everything.', stars: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/30 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="text-green-400">●</span> AI Nutrition Coach — Available on iOS & Android
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Personal<br />
            <span className="text-green-400">AI Nutrition Coach</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Track meals, get 12 personalized recipes daily, analyze food photos, and stay motivated on your wellness journey — all powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/app/talia-ai/id6745192320" target="_blank" rel="noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              🍎 Download on App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.taliaai.app" target="_blank" rel="noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              ▶ Get it on Google Play
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">Free to download · Premium plans from $38.99/mo</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to reach your goals</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Talia AI combines cutting-edge artificial intelligence with nutrition science to give you a truly personalized experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(f => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <f.icon className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-500 mb-12">Get started in 3 simple steps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Create your profile', desc: 'Tell Talia about your goals, diet, allergies and preferences.' },
              { step: '2', title: 'Get your daily plan', desc: 'Receive 12 personalized recipes every morning tailored just for you.' },
              { step: '3', title: 'Track & improve', desc: 'Log meals, analyze photos, track progress and stay consistent.' },
            ].map(s => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-green-500 text-white font-bold text-xl flex items-center justify-center mb-4 shadow-lg shadow-green-200">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/how-it-works" className="inline-flex items-center gap-2 mt-10 text-green-600 font-semibold hover:underline">
            Learn more →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What our users say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-gray-500 text-xs font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your wellness journey today</h2>
          <p className="text-green-100 mb-8 text-lg">Plans from $38.99/month. Cancel anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
              View Pricing
            </Link>
            <a href="https://apps.apple.com/app/talia-ai/id6745192320" target="_blank" rel="noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Download Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
