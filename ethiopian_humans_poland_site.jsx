import React, { useState } from "react";

export default function EthiopianHumansPoland() {
  const [form, setForm] = useState({ name: "", email: "", city: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration submitted (demo only). Connect to backend later.");
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Subscribed to newsletter (demo).");
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-green-100 via-yellow-50 to-red-100">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Ethiopian Humans in Poland | የኢትዮጵያ ሰዎች በፖላንድ
          </h1>
          <p className="text-sm mt-2 opacity-90">
            Connecting Ethiopians living in Poland — community, support, and culture
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-green-800">
          Welcome to our community platform
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          A simple place for Ethiopians in Poland to connect, register, donate, and
          stay updated about events, meetings, and cultural activities.
        </p>
      </section>

      {/* Registration */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Community Registration
        </h3>
        <form onSubmit={handleRegister} className="grid gap-4 md:grid-cols-3">
          <input
            required
            name="name"
            placeholder="Full Name"
            className="border rounded-lg px-3 py-2"
            onChange={handleChange}
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="border rounded-lg px-3 py-2"
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City in Poland"
            className="border rounded-lg px-3 py-2"
            onChange={handleChange}
          />
          <button className="md:col-span-3 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
            Register
          </button>
        </form>
      </section>

      {/* Donations */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-yellow-700 mb-2">
          Donations
        </h3>
        <p className="text-gray-600 mb-4">
          Support community activities, events, and cultural programs.
        </p>
        <button
          onClick={() => alert("Connect Stripe / PayPal later")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Donate (Demo)
        </button>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-red-700 mb-3">
          Monthly Newsletter
        </h3>
        <form onSubmit={handleNewsletter} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
            Subscribe
          </button>
        </form>
      </section>

      {/* Events */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Upcoming Meetings & Activities
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Community Meetup",
              date: "March 15, 2026",
              desc: "Networking and introductions in Warsaw.",
            },
            {
              title: "Ethiopian Cultural Night",
              date: "April 10, 2026",
              desc: "Food, music, and traditional celebration.",
            },
            {
              title: "Charity Fundraiser",
              date: "May 5, 2026",
              desc: "Support local and Ethiopian causes.",
            },
          ].map((event, i) => (
            <div key={i} className="border rounded-xl p-4 hover:shadow-md">
              <h4 className="font-semibold text-green-800">{event.title}</h4>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm mt-2 text-gray-700">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-6 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Ethiopian Humans in Poland
        </p>
        <p className="text-xs opacity-80 mt-1">
          Built as a community demo website
        </p>
      </footer>
    </div>
  );
}
