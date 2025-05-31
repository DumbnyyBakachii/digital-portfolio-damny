const jobs = [
  { role: "Junior Web Designer", company: "Undreads Capital", time: "2027 - Present" },
  { role: "Web Design Intern", company: "IO Web Studio", time: "Oct 2026 - Feb 2027" }
];

export default function Experience() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-white text-gray-800 px-10">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <ul className="space-y-4">
          {jobs.map(job => (
            <li key={job.role} className="bg-slate-50 p-4 rounded shadow">
              <p className="font-bold">{job.role}</p>
              <p className="text-sm">{job.company} – {job.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
