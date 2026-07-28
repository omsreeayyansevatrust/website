import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-2xl font-bold">
            Om Sree Ayyan Seva Trust
          </h2>

          <p className="mt-4 text-gray-300">
            Serving Humanity with Compassion,
            Dignity and Hope.
          </p>

        </div>

        <div>

          <h3 className="font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3">

            <div className="flex gap-2">
              <Phone size={18}/>
              +91 97105 27964
            </div>

            <div className="flex gap-2">
              <Mail size={18}/>
              omsreeayyansevatrust@gmail.com
            </div>

            <div className="flex gap-2">
              <MapPin size={18}/>
              54/1, Manali New Town,
              Chennai - 600103
            </div>

          </div>

        </div>

        <div>

          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <div className="space-y-2">

            <p>About</p>
            <p>Projects</p>
            <p>Events</p>
            <p>Gallery</p>

          </div>

        </div>

      </div>

      <div className="text-center py-5 border-t border-gray-700">
        © {new Date().getFullYear()} Om Sree Ayyan Seva Trust.
        All Rights Reserved.
      </div>

    </footer>
  );
}