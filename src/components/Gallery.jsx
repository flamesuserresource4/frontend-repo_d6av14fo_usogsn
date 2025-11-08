import React from 'react';

const categories = [
  { title: 'Logos', color: 'from-fuchsia-500 to-pink-500', images: [
    'https://images.unsplash.com/photo-1605540436563-5bca9490e5ab?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561361513-2d000a50f0a1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975899060-3c2b168bb9ec?q=80&w=1200&auto=format&fit=crop'
  ]},
  { title: 'Posters', color: 'from-amber-500 to-orange-600', images: [
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
  ]},
  { title: 'Banners & Ads', color: 'from-sky-500 to-cyan-500', images: [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529336953121-a1d7a8bdf2a7?q=80&w=1200&auto=format&fit=crop'
  ]},
  { title: 'Visiting Cards', color: 'from-emerald-500 to-teal-500', images: [
    'https://images.unsplash.com/photo-1611162618071-b39a2ec2c157?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543589077-37f61a20f17f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606160706368-3d7480d5127c?q=80&w=1200&auto=format&fit=crop'
  ]},
];

const Gallery = () => {
  return (
    <section id="work" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-2 text-gray-600">A curated peek into logos, posters, ads, banners and visiting cards.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-gray-900 text-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition">Hire Me</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
              <div className={`h-2 bg-gradient-to-r ${cat.color}`} />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{cat.title}</h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {cat.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${cat.title} ${idx + 1}`}
                      className="aspect-square w-full object-cover rounded-md"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
