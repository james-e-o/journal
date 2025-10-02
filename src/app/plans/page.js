
import LandingHeader from '@/components/hero-header'

const PlansPage = () => {
  return (
    <div id="landing-wrap" className="font-sans w-full relative z-0 overflow-x-hidden no_scroll h-svh overflow-y-scroll ">
      <div className="min-h-svh relative flex z-0 flex-col justify-start bg-black">
        <LandingHeader />
      <div className="w-full mt-3 bg-white rounded-t-3xl overflow-clip py py-12 px-9 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-core">
          Plans for Every Stage of Your Trading Journey
        </h2>
        <p className="text-gray-300 mb-12">
          Choose the plan that fits your trading style and grow with us.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="border-2 border-core rounded-2xl p-8 shadow-lg hover:shadow-amber-400 transition">
            <h3 className="text-xl font-bold text-core mb-4">Free</h3>
            <p className="text-4xl font-extrabold mb-2">$0</p>
            <p className="text-gray-400 mb-6">Free Forever</p>
            <ul className="text-left mb-6 space-y-3">
              <li>✔ Basic Trade Logging</li>
              <li>✔ Limited Journal Entries</li>
              <li>✔ Essential Analytics</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-core text-black font-bold hover:bg-amber-400 transition">
              Get Started
            </button>
          </div>

          {/* Starter Plan */}
          <div className="border-2 border-core rounded-2xl text-white p-8 shadow-lg hover:shadow-amber-400 transition bg-gradient-to-b from-black to-zinc-800">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Ignition</h3>
            <p className="text-4xl font-extrabold mb-2">$19.99</p>
            <p className="text-gray-400 mb-6">per month</p>
            <ul className="text-left mb-6 space-y-3">
              <li>✔ Unlimited Journal Entries</li>
              <li>✔ Advanced Analytics</li>
              <li>✔ Export Data</li>
              <li>✔ Custom Tags & Notes</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-core text-black font-bold hover:bg-amber-400 transition">
              Choose Ignition
            </button>
          </div>

          {/* Advanced Plan */}
          <div className="border-2 border-core rounded-2xl p-8 shadow-lg hover:shadow-amber-400 transition">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Glide</h3>
            <p className="text-4xl font-extrabold mb-2">$39.99</p>
            <p className="text-gray-400 mb-6">per month</p>
            <ul className="text-left mb-6 space-y-3">
              <li>✔ All Starter Features</li>
              <li>✔ AI Trade Insights</li>
              <li>✔ Performance Benchmarks</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-core text-black font-bold hover:bg-amber-400 transition">
              Upgrade to Glide
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
   
  )
}

export default PlansPage
