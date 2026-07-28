export default function MapSection() {
  return (
    <section className="py-16">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Find Us
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Manali+New+Town+Chennai+600103&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            style={{ border: 0 }}
          />

        </div>

      </div>

    </section>
  );
}