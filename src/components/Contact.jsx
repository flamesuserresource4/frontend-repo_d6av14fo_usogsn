import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks, I will get back to you soon!');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s work together</h2>
          <p className="mt-2 text-gray-600">Share a brief about your brand or project. I’ll respond within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required type="text" placeholder="Your name" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <input type="text" placeholder="Subject" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea required rows="5" placeholder="Tell me about your project" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-700 transition">Send Message</button>
            {status && <p className="text-sm text-emerald-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
