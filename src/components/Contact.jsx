function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
      <h1 className="text-5xl font-bold mb-4">📞 Contact Us</h1>
      <p className="text-lg max-w-md text-center mb-8">
        We'd love to hear from you! Fill out the form below or reach us directly
        through email or social media.
      </p>

      <form className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-80">
        <div className="mb-4">
          <label className="block text-left mb-2 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2 font-medium">Message</label>
          <textarea
            placeholder="Type your message..."
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
