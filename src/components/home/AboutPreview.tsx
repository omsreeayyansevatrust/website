import {
  Heart,
  Target,
  Eye,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Om Sree Ayyan Seva Trust
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            Om Sree Ayyan Seva Trust is a charitable organization dedicated to
            improving lives through education, healthcare, environmental
            initiatives, community welfare and humanitarian services. We believe
            every act of kindness creates a stronger and happier society.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition bg-blue-50">

            <Heart className="text-blue-700 w-12 h-12 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Our Values
            </h3>

            <p className="text-gray-600 leading-7">
              Compassion, Integrity, Equality, Transparency and
              Selfless Service guide every initiative undertaken
              by our trust.
            </p>

          </div>

          <div className="rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition bg-green-50">

            <Eye className="text-green-700 w-12 h-12 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To create an empowered society where every individual
              has equal opportunities to live with dignity,
              education and good health.
            </p>

          </div>

          <div className="rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition bg-yellow-50">

            <Target className="text-yellow-600 w-12 h-12 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To serve communities through education, healthcare,
              environmental protection, food support and volunteer
              driven social development programs.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}