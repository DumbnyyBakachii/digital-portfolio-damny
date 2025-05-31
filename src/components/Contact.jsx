export default function Contact() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-white text-gray-900 px-10">
      <form className="bg-slate-100 p-8 rounded-lg shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <input type="text" placeholder="Name" className="mb-4 w-full p-2 rounded border" />
        <input type="email" placeholder="Email" className="mb-4 w-full p-2 rounded border" />
        <textarea placeholder="Your message" className="mb-4 w-full p-2 h-32 rounded border" />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Send</button>
      </form>
    </section>
  );
}
