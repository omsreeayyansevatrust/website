"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { Trustee } from "@/types/trustee";
import { getTrustees } from "@/services/trusteeService";

export default function Leadership() {
  const [leaders, setLeaders] = useState<Trustee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTrustees();
  }, []);

  async function loadTrustees() {
    try {
      const data = await getTrustees();

      const activeTrustees = data
        .filter((item) => item.status === "Active")
        .sort((a, b) => a.displayOrder - b.displayOrder);

      setLeaders(activeTrustees);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
            Our leadership team is committed to creating meaningful change
            through compassion, transparency and dedicated community service.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16 text-gray-500">
            Loading Leadership...
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {leaders.map((leader) => (

              <div
                key={leader.id}
                className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >

                <div className="h-72 bg-gradient-to-br from-blue-800 to-green-700 flex items-center justify-center">

                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={leader.fullName}
                      width={180}
                      height={180}
                      className="rounded-full object-cover border-4 border-white"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center text-6xl font-bold text-blue-800">
                      {leader.fullName.charAt(0)}
                    </div>
                  )}

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {leader.fullName}
                  </h3>

                  <p className="text-blue-700 font-semibold mt-2">
                    {leader.designation}
                  </p>

                  <div className="mt-6 space-y-3 text-gray-600">

                    {leader.mobile && (
                      <div className="flex items-center gap-3">
                        <Phone size={18} />
                        {leader.mobile}
                      </div>
                    )}

                    {leader.email && (
                      <div className="flex items-center gap-3">
                        <Mail size={18} />
                        {leader.email}
                      </div>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}