import EventCard from "./EventCard";

const events = [
  {
    title: "Free Medical Camp",
    date: "15 August 2026",
    location: "Chennai",
    image: "/events/medical-camp.jpg",
    description:
      "A free health check-up camp for senior citizens and families.",
  },
  {
    title: "Food Distribution",
    date: "5 September 2026",
    location: "Chennai",
    image: "/events/food-distribution.jpg",
    description:
      "Providing meals to underprivileged families and children.",
  },
  {
    title: "Tree Plantation Drive",
    date: "2 October 2026",
    location: "Chennai",
    image: "/events/tree-plantation.jpg",
    description:
      "Join us in planting trees for a greener future.",
  },
];

export default function EventsGrid() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <EventCard
              key={event.title}
              {...event}
            />
          ))}

        </div>

      </div>
    </section>
  );
}