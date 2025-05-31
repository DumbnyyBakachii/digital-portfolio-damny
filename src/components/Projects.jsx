const projects = [
  { title: "E-Commerce UI", desc: "Mobile-first fashion store using Figma & Tailwind" },
  { title: "Portfolio Builder", desc: "Drag-drop builder, React + WCAG compliant" },
  { title: "myKasih Redesign", desc: "Government portal UX case study" }
];

export default function Projects() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-white text-gray-800 px-10">
      <div className="max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory">
          {projects.map(p => (
            <div key={p.title} className="w-80 shrink-0 bg-gray-100 p-6 rounded-lg shadow-lg snap-start">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
