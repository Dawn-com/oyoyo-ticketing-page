import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Navbar */}
      <header className="flex flex-wrap justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <Image src="/oyoyo logo.png" alt="Oyoyo Logo" width={120} height={40} />
          <nav className="flex gap-6 flex-wrap text-m font-medium px-10">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
          </nav>
        </div>
        <button className="bg-red-700 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold max-w-4xl">
          List Your Next Event and Sell Tickets with Oyoyo Events App Today!
        </h1>
        <p className="mt-8 text-sm text-gray-600 max-w-xl">
          For every events - From concerts, festivals and exhibitions to webinars, trade shows, weddings, conferences to parties — Oyoyo App makes event planning and ticketing easy.
        </p>
        <button className="mt-10 bg-red-700 text-white px-6 py-3 rounded-lg text-sm">
          Get Started For Free
        </button>

        <div className="mt-10 relative w-full max-w-4xl">
          <Image src="/video pic.png" alt="Watch how Oyoyo Events App works" width={900} height={450} className="rounded-lg"/>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <p className="mt-4 text-sm font-semibold text-red-700 max-w-xl mx-auto">
          Features
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          Why Oyoyo Events App is Your Best Choice
        </h2>
        <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
          Pocket-Friendly Fees | Simple Tools | All-in-One-App
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <Image src="/pic 1.png" alt="pic 1" width={45} height={45} className="rounded-sm mx-auto"/>
            <h3 className="font-semibold text-lg">Keep More of Your Profits</h3>
            <p className="text-gray-600 mt-2">
              Only 3.5% ticketing fee — way lower than the 5.5% to 10% you pay on other platforms.
            </p>
          </div>
          <div>.
            <Image src="/pic 1.png" alt="pic 1" width={45} height={45} className="rounded-sm mx-auto"/>
            <h3 className="font-semibold text-lg">All-in-One Planning & Ticketing Tool</h3>
            <p className="text-gray-600 mt-2">
              Create, manage, and sell for physical, virtual, private, and hybrid events – all in one app.
            </p>
          </div>
          <div>
            <Image src="/pic 2.png" alt="pic 2" width={45} height={45} className="rounded-sm mx-auto"/>
            <h3 className="font-semibold text-lg">Customisable Forms for Better Insights</h3>
            <p className="text-gray-600 mt-2">
              Collect only the data you need with easy-to-edit registration forms.
            </p>
          </div>
          <div>
            <Image src="/pic 3.png" alt="pic 3" width={45} height={45} className="rounded-sm mx-auto"/>
            <h3 className="font-semibold text-lg">No Extra devices Needed</h3>
            <p className="text-gray-600 mt-2">
              Validate tickets instantly with QR codes using your phone — no scanners required.
            </p>
          </div>
          <div>
            <Image src="/pic 4.png" alt="pic 4" width={45} height={45} className="rounded-sm mx-auto"/>
            <h3 className="font-semibold text-lg">Boost Engagement with Digital Spray</h3>
            <p className="text-gray-600 mt-2">
              Let guests spray money digitally at virtual and physical events.
            </p>
          </div>
          <div>
            <Image src="/pic 5.png" alt="pic 5" width={45} height={45} className="rounded-sm mx-auto"/>
            <h3 className="font-semibold text-lg">Hire Trusted Vendors Instantly</h3>
            <p className="text-gray-600 mt-2">
              Access a vetted directory of DJs, Ushers, Caterers, Decor Experts, and more based on your event location.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <Image src="/stars.png" alt="5 stars" width={100} height={20} className="mb-4"/>
          <p className="text-2xl lg:text-5xl font-medium leading-snug">
            Oyoyo made selling tickets for my private comedy show so easy, I
            even got a DJ and caterer through the app!
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Image src="/profile.png" alt="Mike O." width={40} height={40} className="rounded-full"/>
            <div>
              <p className="font-semibold">Mike O.</p>
              <p className="text-sm text-gray-500">Event host</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              ←
            </button>
            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              →
            </button>
          </div>
        </div>
        <div>
          <Image src="/big pic.png" alt="big pic" width={500} height={400} className="mx-auto"/>
        </div>
      </div>
    </section>

      {/* How It Works */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              Create Your Free Account
            </li>
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              List Your Event &amp; Set Ticket Price
            </li>
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              Start Selling &amp; Track Attendance Easily
            </li>
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              Host Your Event with Full Support
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-100 transition">
            Get started for free
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/phone.png" alt="Oyoyo App" width={450} height={400} className="rounded-lg"/>
        </div>
      </div>
    </section>


      {/* Final CTA */}
      <section className="px-6 md:px-[112px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-red-800 text-white px-6 py-12 rounded-lg">
          <div className="flex flex-col text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Ready to Launch Your Event the Smart Way?
            </h2>
            <p className="text-base md:text-xl mb-4">
              Don't just host an event — own it with Oyoyo Events App.
            </p>
            <p className="text-base md:text-xl">
              No hidden fees | No stress | Just success.
            </p>
          </div>.
          <div className="flex-shrink-0">
            <button className="bg-white text-red-800 font-bold px-6 py-3 rounded-lg">
              Create an Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-6 md:px-20 py-10 text-gray-500 text-sm">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-6 border-b border-gray-200">
        <div className="max-w-xs">
          <div className="flex items-center mb-3">
            <Image src="/oyoyo logo.png" alt="Oyoyo Events" width={100} height={40} />
          </div>
          <p className="text-gray-600">
            Pocket-Friendly! Simple!! All-in-One App!!!
          </p>
          <p className="text-gray-600">
            No hidden fees | No stress | Just success.
          </p>
        </div>
        <div className="flex gap-6 font-medium text-gray-800">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
          <a href="#">How it works</a>
        </div>
      </div>
      <div className="flex pt-6 text-gray-500 text-sm justify-between">
        <p>
          © 2025 Oyoyo events app. All rights reserved.
        </p>
        <div className="flex gap-1 text-xl">
          <Image src="/whatsapp.png" alt="whatsapp" width={28} height={28} /><a href="#"></a>
          <Image src="/linkedin.png" alt="linkedin" width={28} height={28} /><a href="#"></a>
          <Image src="/facebook.png" alt="facebook" width={28} height={28} /><a href="#"></a>
          <Image src="/instagram.png" alt="instagram" width={28} height={28} /><a href="#"></a>
        </div>
      </div>
    </footer>
    </main>
  );
}
