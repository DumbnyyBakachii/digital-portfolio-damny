const skills = ["HTML", "CSS", "Figma", "Tailwind", "React", "Adobe XD"];

export default function Skills() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-slate-50 text-gray-900 px-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
          {skills.map(skill => (
            <div key={skill} className="bg-white rounded-lg shadow p-4 hover:scale-105 transition">
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
