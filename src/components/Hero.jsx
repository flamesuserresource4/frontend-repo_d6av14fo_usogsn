import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pt-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Mansi — Visual Designer
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
            I craft bold, modern brand identities and marketing visuals — logos, posters, ads, banners and visiting cards — with a clean aesthetic and playful, tech-forward feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-700 transition">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-900 text-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition">Get in Touch</a>
          </div>
        </div>
      </div>

      {/* subtle gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white"></div>
    </section>
  );
};

export default Hero;
