import { Mail, Phone } from "lucide-react";

const leaders = [
  {
    name: "Mr. R. Suresh Babu",
    role: "Founder & Head Trustee",
    phone: "+91 9444 813005",
    email: "founder@omsreeayyansevatrust.org",
  },
  {
    name: "Mr. B. Janagan",
    role: "Secretary",
    phone: "+91 84287 87926",
    email: "secretary@omsreeayyansevatrust.org",
  },
  {
    name: "Mr. N.Prabhu",
    role: "Treasurer",
    phone: "+91 90434 29406",
    email: "treasurer@omsreeayyansevatrust.org",
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-700 font-semibold">
            Leadership
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Meet Our Leadership Team
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Our leadership team is committed to creating meaningful change through
            compassion, transparency and dedicated community service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {leaders.map((leader) => (

            <div
              key={leader.name}
              className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <div className="h-72 bg-gradient-to-br from-blue-800 to-green-700 flex items-center justify-center">

                <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center text-6xl font-bold text-blue-800">
                  {leader.name.charAt(0)}
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {leader.name}
                </h3>

                <p className="text-blue-700 font-semibold mt-2">
                  {leader.role}
                </p>

                <div className="mt-6 space-y-3 text-gray-600">

                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    {leader.phone}
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    {leader.email}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}