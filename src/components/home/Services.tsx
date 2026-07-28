import {
  GraduationCap,
  HeartPulse,
  Trees,
  HandHelping,
  Utensils,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Education",
    icon: GraduationCap,
    color: "text-blue-700",
    bg: "bg-blue-50",
    desc: "Supporting students through educational programs, scholarships and learning resources.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    color: "text-red-600",
    bg: "bg-red-50",
    desc: "Organizing medical camps, health awareness programs and supporting healthcare initiatives.",
  },
  {
    title: "Food Distribution",
    icon: Utensils,
    color: "text-orange-600",
    bg: "bg-orange-50",
    desc: "Providing food assistance to families, elderly citizens and people in need.",
  },
  {
    title: "Environment",
    icon: Trees,
    color: "text-green-700",
    bg: "bg-green-50",
    desc: "Tree plantation drives and environmental awareness to build a greener future.",
  },
  {
    title: "Community Welfare",
    icon: Users,
    color: "text-purple-700",
    bg: "bg-purple-50",
    desc: "Community development programs that improve quality of life for everyone.",
  },
  {
    title: "Volunteer Service",
    icon: HandHelping,
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    desc: "Encouraging people to participate in meaningful social service activities.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Our Focus Areas
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Making a Difference Together
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Through dedicated service and community participation,
            we strive to create lasting positive impact across
            multiple social initiatives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 p-8 border hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center ${service.bg}`}
                >
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.desc}
                </p>

                <button className="mt-6 text-blue-700 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}