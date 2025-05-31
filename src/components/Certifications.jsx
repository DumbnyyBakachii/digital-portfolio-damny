const certs = ["Google UX Design", "Adobe Dreamweaver", "NN/g UX Certified", "Mobile Web Specialist"];

export default function Certifications() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-slate-100 text-gray-800 px-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {certs.map(cert => (
            <div key={cert} className="bg-white p-4 rounded shadow text-sm font-medium hover:scale-105 transition">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
