import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    date: "15 Aug 2026",
    title: "Independence Day Celebration",
    description:
      "Celebrating Independence Day with cultural programs and community participation.",
  },
  {
    date: "10 Sep 2026",
    title: "Free Medical Camp",
    description:
      "Providing free health checkups, consultations and medicines for the community.",
  },
  {
    date: "02 Oct 2026",
    title: "Tree Plantation Drive",
    description:
      "Planting trees and spreading awareness about environmental conservation.",
  },
];

export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase text-blue-700 font-semibold tracking-widest">
            Latest Events
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Recent Activities
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest community service activities,
            awareness programs and upcoming initiatives.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {events.map((event) => (

            <div
              key={event.title}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border"
            >

              <div className="h-52 bg-gradient-to-r from-blue-700 to-green-600 flex items-center justify-center">

                <CalendarDays className="w-20 h-20 text-white" />

              </div>

              <div className="p-8">

                <div className="flex items-center gap-2 text-blue-700 mb-4">

                  <CalendarDays size={18} />

                  <span>{event.date}</span>

                </div>

                <h3 className="text-2xl font-bold">

                  {event.title}

                </h3>

                <p className="text-gray-600 mt-4 leading-7">

                  {event.description}

                </p>

                <button className="mt-8 text-blue-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all">

                  Read More

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}