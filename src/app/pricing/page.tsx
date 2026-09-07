import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly',
    price: '$38.99',
    period: '/month',
    desc: 'Perfect to get started',
    badge: null,
    features: ['12 recipes daily', 'Food photo analysis', 'Progress tracking', 'AI nutrition guidance', 'Recipes in 7 languages', 'Cancel anytime'],
    cta: 'Get Monthly',
    highlight: false,
    paddleId: 'pri_01jxqjvckrxbndbmm6qrc21g8t',
  },
  {
    name: '6 Months',
    price: '$119',
    period: '/6 months',
    sub: '~$19.83/month',
    desc: 'Smart savings',
    badge: 'SMART SAVINGS',
    features: ['Everything in Monthly', 'Save 15% vs monthly', 'Priority support', 'Exclusive recipes'],
    cta: 'Get 6 Months',
    highlight: false,
    paddleId: 'pri_01m1s6xcd9hf0nyf9es56vgxm4',
  },
  {
    name: 'Annual',
    price: '$199',
    period: '/year',
    sub: '~$16.58/month',
    desc: 'Best value',
    badge: 'BEST VALUE',
    features: ['Everything in 6 Months', 'Save 57% vs monthly', 'Yearly plan benefits', 'All future features'],
    cta: 'Get Annual',
    highlight: true,
    paddleId: 'pri_01m1s7042g5jn3g5yb87dtsh4q',
  },
];

export default function PricingPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-500 text-lg">Choose the plan that works for you. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(plan => (
            <div key={plan.name}
              className={`rounded-2xl p-7 border-2 relative ${plan.highlight
                ? 'border-green-500 bg-white shadow-xl shadow-green-100'
                : 'border-gray-200 bg-white'}`}
            >
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${plan.highlight ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-500 mb-1">{plan.name}</div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 text-sm pb-1">{plan.period}</span>
                </div>
                {plan.sub && <div className="text-sm text-green-600 font-medium mt-1">{plan.sub}</div>}
                <p className="text-gray-400 text-sm mt-2">{plan.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://buy.paddle.com/product/${plan.paddleId}`}
                target="_blank"
                rel="noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${plan.highlight
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-900 text-white hover:bg-gray-700'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Secure payment via Paddle · Cancel anytime from your account settings
        </p>
      </div>
    </div>
  );
}
