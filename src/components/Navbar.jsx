import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/50 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">Mansi</a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#work" className="text-gray-600 hover:text-gray-900 transition">Work</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-700 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
