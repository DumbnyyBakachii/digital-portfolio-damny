export default function About() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-white text-gray-800 px-8">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        <img src="/assets/images/profile-placeholder.png" alt="Danny" className="w-52 h-52 rounded-full shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            I'm a passionate web designer with a focus on clean, user-centered experiences. Skilled in HTML, CSS, and design tools like Figma and Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
}
