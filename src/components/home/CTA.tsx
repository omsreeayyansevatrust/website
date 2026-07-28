import { HeartHandshake, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700">

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative container mx-auto px-6">

        <div className="max-w-5xl mx-auto">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 lg:p-16 border border-white/20 shadow-2xl">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

              <div>

                <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-8">

                  <HeartHandshake
                    size={40}
                    className="text-blue-900"
                  />

                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Become a Volunteer
                </h2>

                <p className="mt-6 text-blue-100 text-lg leading-8 max-w-2xl">
                  Join Om Sree Ayyan Seva Trust in creating positive
                  change. Every volunteer brings hope, compassion,
                  and strength to our community.
                </p>

              </div>

              <div className="flex flex-col gap-5">

                <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:scale-105 transition flex items-center gap-3">

                  Join Now

                  <ArrowRight size={20} />

                </button>

                <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition">

                  Contact Us

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}