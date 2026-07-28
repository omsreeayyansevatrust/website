export default function ContactForm() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6 max-w-3xl">

        <h2 className="text-3xl font-bold text-center text-blue-900">
          Send Us a Message
        </h2>

        <form className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full border rounded-lg p-4"
          />

          <button
            type="submit"
            className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}