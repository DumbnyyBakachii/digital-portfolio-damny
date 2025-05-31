const visions = ["Web3 UX Engineer", "Creative Front-End Dev", "Metaverse Designer", "AI UX Strategist"];

export default function Vision() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-50 to-white text-gray-800 px-10">
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">My Future Vision</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visions.map(v => (
            <div key={v} className="bg-white p-4 rounded shadow hover:scale-105 transition">
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
