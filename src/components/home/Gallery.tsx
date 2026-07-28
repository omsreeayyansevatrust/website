import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
  "https://images.unsplash.com/photo-1469571486292-b53601020f16?w=800",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-blue-700 font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Moments That Inspire
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            A glimpse of our community service activities,
            medical camps, education programs, environmental
            initiatives and volunteer efforts.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={450}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <button className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition">
            View Complete Gallery
          </button>

        </div>

      </div>

    </section>
  );
}