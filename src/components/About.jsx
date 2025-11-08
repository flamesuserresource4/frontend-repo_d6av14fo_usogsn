import React from 'react';

const stats = [
  { label: 'Projects', value: '80+' },
  { label: 'Brands', value: '30+' },
  { label: 'Experience', value: '4 yrs' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Design with clarity and personality</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m Mansi, a visual designer focused on crisp brand identity and marketing communication. I balance modern minimalism with playful detail to build visuals that are memorable and effective across digital and print.
          </p>
          <ul className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <li key={s.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-gray-500">{s.label}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1683107983270-38225df18859?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjAxfGVufDB8MHx8fDE3NjI1NzUzNDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="workspace 1" className="rounded-2xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="workspace 2" className="rounded-2xl object-cover h-64 w-full mt-8" />
          <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop" alt="workspace 3" className="rounded-2xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="workspace 4" className="rounded-2xl object-cover h-64 w-full mt-8" />
        </div>
      </div>
    </section>
  );
};

export default About;
